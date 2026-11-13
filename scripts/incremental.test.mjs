import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, readdir, cp, rm, stat, symlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { digest, recipeHash, prepareExamples } from './examples.mjs';
import { assertAdaptation, sourceLicense, publicSource, totalStyles, groups, newBatch } from './catalog-config.mjs';
import { cosExampleKey, cosExampleURL, validateCosExamples } from './external-examples.mjs';
import { build, makeRecipeText } from './build.mjs';

const repository = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const execute = promisify(execFile);
async function temporary(run) {
  const dir = await mkdtemp(path.join(repository, '..', 'photo-incremental-fixture-'));
  try { await run(dir); } finally { await rm(dir, { recursive: true, force: true }); }
}
async function hashes(folder) {
  const result = {};
  for (const name of (await readdir(folder, { recursive: true })).sort()) {
    const file = path.join(folder, name);
    if ((await stat(file)).isFile()) result[name.replaceAll('\\', '/')] = digest(await readFile(file));
  }
  return result;
}

test('a partial generation batch reuses unrelated approved examples without touching any bytes', () => temporary(async dir => {
  const legacy = 'silver-gelatin-monochrome';
  const folder = path.join(dir, legacy);
  await cp(path.join(repository, 'skills', legacy), folder, { recursive: true });
  const before = await hashes(folder);
  const recipe = await readFile(path.join(folder, 'recipe.yaml'), 'utf8');
  const result = await prepareExamples({ slug: legacy }, folder, recipe, [{ style: 'new-study' }]);
  assert.equal(result.status, 'ready');
  assert.ok(result.attempts.length > 0);
  assert.deepEqual(await hashes(folder), before);
  await assert.rejects(prepareExamples({ slug: legacy }, folder, recipe + '# drift\n', []), /do not match/);
  assert.deepEqual(await hashes(folder), before);
}));

test('a new draft has no invented generation evidence and missing legacy evidence is refused', () => temporary(async dir => {
  const result = await prepareExamples({ slug: 'new-study' }, path.join(dir, 'new-study'), 'style: new-study\n', [], { allowDraft: true });
  assert.deepEqual(result, { status: 'draft', files: {}, attempts: [], removed: [] });
  await assert.rejects(prepareExamples({ slug: 'legacy' }, path.join(dir, 'legacy'), '', []), /existing example audit is missing/);
  assert.deepEqual(await readdir(dir), []);
}));

test('licensed adaptations retain per-entry terms and reject altered license evidence', () => {
  const licenseText = 'Complete upstream license text with the original author and all permissions, conditions and disclaimers. '.repeat(3);
  for (const license of ['MIT', 'CC-BY-4.0', 'Apache-2.0']) {
    const source = { type: 'adapted', author: 'Original Author', repo: 'author/prompts', commit: 'a'.repeat(40), url: 'https://github.com/author/prompts/blob/' + 'a'.repeat(40) + '/README.md', license, license_hash: digest(licenseText), license_text: licenseText, modifications: ['Reworked the instructions to preserve observed subject identity.'] };
    const row = { slug: 'study', sourceProvenance: source };
    assert.doesNotThrow(() => assertAdaptation(row));
    assert.equal(sourceLicense(row), license);
    assert.equal(publicSource(source).author, source.author);
    assert.equal(publicSource(source).license_text, undefined);
    assert.throws(() => assertAdaptation({ ...row, sourceProvenance: { ...source, license_text: licenseText + 'changed' } }), /hash mismatch/);
  }
  assert.throws(() => assertAdaptation({ slug: 'study', sourceProvenance: { type: 'adapted', license: 'unverified' } }), /unsupported/);
});

test('building the configured COS-only batch preserves all previous Skill folders and their audit calls', () => temporary(async dir => {
  await mkdir(path.join(dir, 'data'), { recursive: true });
  const previous = groups.filter(group => group.file !== newBatch);
  for (const group of previous) await cp(path.join(repository, 'data', group.file), path.join(dir, 'data', group.file));
  const legacyRows = (await Promise.all(previous.map(async group => JSON.parse(await readFile(path.join(dir, 'data', group.file), 'utf8'))))).flat();
  const batchCount = groups.find(group => group.file === newBatch).count;
  const legacyRecords = await Promise.all(legacyRows.map(async row => JSON.parse(await readFile(path.join(repository, 'skills', row.slug, 'examples/generation.json'), 'utf8'))));
  const legacyReady = legacyRecords.filter(record => record.status === 'ready').length;
  const legacyCalls = legacyRecords.reduce((sum, record) => sum + record.attempts.length, 0);
  const legacyExternalImages = legacyRecords.filter(record => record.storage === 'cos' || record.schema_version === 2).reduce((sum, record) => sum + record.images.length, 0);
  const before = {};
  for (const row of legacyRows) {
    const folder = path.join(dir, 'skills', row.slug);
    await cp(path.join(repository, 'skills', row.slug), folder, { recursive: true });
    before[row.slug] = await hashes(folder);
    if (row.sourceProvenance?.source_evidence) {
      const target = path.join(dir, row.sourceProvenance.source_evidence);
      await mkdir(path.dirname(target), { recursive: true });
      await cp(path.join(repository, row.sourceProvenance.source_evidence), target);
    }
  }
  const licenseText = await readFile(path.join(repository, 'skills/cyanotype-contact-print/LICENSE-THIRD-PARTY.txt'), 'utf8');
  const newRows = Array.from({ length: batchCount }, (_, index) => ({ ...legacyRows[0], slug: `new-study-${index}`, nameZh: `新样式${index}`, nameEn: `New Study ${index}`, sourceProvenance: index < 3 ? {
    type: 'adapted', author: 'Fixture Author', repo: 'fixture/prompts', commit: 'a'.repeat(40), url: 'https://example.com/fixture-source',
    license: ['MIT', 'CC-BY-4.0', 'Apache-2.0'][index], license_hash: digest(licenseText), license_text: licenseText,
    modifications: ['Fixture-only adaptation used to verify license-specific packaging.'],
  } : undefined }));
  await writeFile(path.join(dir, 'data', newBatch), JSON.stringify(newRows));
  const draftIndex = Math.min(4, batchCount - 1), draftSlug = `new-study-${draftIndex}`;
  const draftOnly = cosFixture(draftSlug, makeRecipeText({ ...newRows[draftIndex], group: groups.find(group => group.file === newBatch) }));
  draftOnly.status = 'draft'; draftOnly.recipe_execution_verified = false; draftOnly.images = [];
  for (const call of draftOnly.attempts) {
    call.compressed = null;
    if (call.kind === 'effect') call.review.decision = 'rejected';
  }
  await mkdir(path.join(dir, `skills/${draftSlug}/examples`), { recursive: true });
  await writeFile(path.join(dir, `skills/${draftSlug}/examples/generation.json`), JSON.stringify(draftOnly));
  const generation = path.join(dir, 'new-generation');
  await mkdir(generation);
  const result = await build({ root: dir, generationRoot: generation });
  assert.equal(totalStyles, legacyRows.length + batchCount);
  assert.equal(result.styles, totalStyles); assert.equal(result.ready, legacyReady); assert.equal(result.draft, legacyRows.length - legacyReady + batchCount);
  const index = JSON.parse(await readFile(path.join(dir, 'index.json'), 'utf8'));
  assert.equal(index.styles.length, totalStyles);
  const draftSkill = await readFile(path.join(dir, `skills/${draftSlug}/SKILL.md`), 'utf8');
  assert.ok(draftSkill.includes('No approved effect'));
  assert.ok(!draftSkill.includes('<img src='));
  assert.deepEqual(index.styles.find(row => row.slug === draftSlug).examples, { record: `skills/${draftSlug}/examples/generation.json` });
  assert.equal(index.styles.find(row => row.slug === 'cubist-multiple-planes').status, 'draft');
  assert.deepEqual(result.removed_legacy_images, []);
  for (const row of legacyRows) assert.deepEqual(await hashes(path.join(dir, 'skills', row.slug)), before[row.slug]);
  const draft = JSON.parse(await readFile(path.join(dir, 'skills/new-study-0/provenance.json'), 'utf8'));
  assert.deepEqual(draft.examples.status, 'draft');
  assert.equal(draft.examples.record, draftIndex === 0 ? 'examples/generation.json' : undefined);
  for (const [number, license] of ['MIT', 'CC-BY-4.0', 'Apache-2.0'].slice(0, batchCount).entries()) {
    const folder = path.join(dir, `skills/new-study-${number}`);
    assert.equal(JSON.parse(await readFile(path.join(folder, 'provenance.json'), 'utf8')).text_license, license);
    assert.equal(await readFile(path.join(folder, 'LICENSE-THIRD-PARTY.txt'), 'utf8'), licenseText);
    assert.ok((await readFile(path.join(folder, 'LICENSE'), 'utf8')).includes(`remains subject to ${license}`));
  }
  await mkdir(path.join(dir, 'scripts'), { recursive: true });
  await cp(path.join(repository, 'validate.mjs'), path.join(dir, 'validate.mjs'));
  await cp(path.join(repository, 'package.json'), path.join(dir, 'package.json'));
  await symlink(path.join(repository, 'node_modules'), path.join(dir, 'node_modules'), 'junction');
  for (const file of ['examples.mjs', 'external-examples.mjs', 'catalog-config.mjs']) await cp(path.join(repository, 'scripts', file), path.join(dir, 'scripts', file));
  await cp(path.join(repository, 'docs/research-sources.json'), path.join(dir, 'docs/research-sources.json'));
  for (const file of new Set(groups.map(group => group.researchRecord).filter(Boolean))) await cp(path.join(repository, file), path.join(dir, file));
  for (const file of ['candidates/README.md', 'candidates/game-character-clean-studio-portrait/SKILL.md']) {
    await mkdir(path.dirname(path.join(dir, file)), { recursive: true });
    await cp(path.join(repository, file), path.join(dir, file));
  }
  const validation = await execute(process.execPath, ['validate.mjs'], { cwd: dir }).catch(error => assert.fail(error.stdout || error.message));
  assert.deepEqual(JSON.parse(validation.stdout).errors, []);
  const firstIndex = await readFile(path.join(dir, 'index.json'));
  await build({ root: dir });
  assert.deepEqual(await readFile(path.join(dir, 'index.json')), firstIndex);
  for (const row of legacyRows) assert.deepEqual(await hashes(path.join(dir, 'skills', row.slug)), before[row.slug]);
  const executedRecipe = await readFile(path.join(dir, 'skills/new-study-0/recipe.yaml'), 'utf8');
  const external = cosFixture('new-study-0', executedRecipe);
  await mkdir(path.join(dir, 'skills/new-study-0/examples'), { recursive: true });
  await writeFile(path.join(dir, 'skills/new-study-0/examples/generation.json'), JSON.stringify(external));
  const updated = await build({ root: dir });
  assert.equal(updated.ready, legacyReady + 1); assert.equal(updated.generation_calls, legacyCalls + external.attempts.length + (draftIndex === 0 ? 0 : draftOnly.attempts.length));
  const checked = await execute(process.execPath, ['validate.mjs'], { cwd: dir });
  assert.deepEqual(JSON.parse(checked.stdout).errors, []);
  assert.equal(JSON.parse(checked.stdout).external_examples_metadata_checked, legacyExternalImages + 2);
  assert.equal(JSON.parse(checked.stdout).remote_gets, 0);
  assert.deepEqual(await readdir(path.join(dir, 'skills/new-study-0/examples')), ['generation.json']);
  const updatedIndex = JSON.parse(await readFile(path.join(dir, 'index.json'), 'utf8'));
  assert.equal(updatedIndex.styles.find(row => row.slug === 'new-study-0').examples.source, cosExampleURL('new-study-0', 'source'));
  for (const row of legacyRows) assert.deepEqual(await hashes(path.join(dir, 'skills', row.slug)), before[row.slug]);
}));

function cosFixture(slug, recipeText) {
  const hash = recipeHash(recipeText), at = '2026-11-10T01:00:00Z';
  const receipt = (sha256, bytes) => ({ method: 'get-sha256', verified_at: at, sha256, bytes });
  const attempts = ['source', 'effect'].map(kind => {
    const sha = digest(Buffer.from(`Fixture ${kind} master`)), display = digest(Buffer.from(`Fixture ${kind} display`));
    const file = kind === 'source' ? `masters/samples/photo-${slug}.png` : `masters/previews/${slug}/v1/photo-${slug}-0.png`;
    const prompt = `Fixture-only ${kind} request; no real image generation is asserted by this test.`;
    return { call: `${slug}:${kind}:0`, style: slug, kind, attempt: 0, source_attempt: 0, status: 'generated', prompt,
      prompt_sha256: digest(prompt), prompt_redacted: false, created_at: at, duration_ms: 1000, tool: 'codex-imagegen', provider_model: 'unknown',
      review: { decision: 'approved', reason: 'Fixture verification only.', reviewer: 'Fixture reviewer', reviewed_at: at },
      original: { file, object_key: file, storage: 'cos', sha256: sha, bytes: 64, width: 1024, height: 1280, format: 'png', verification: receipt(sha, 64) },
      source_sha256: kind === 'effect' ? digest(Buffer.from('Fixture source master')) : null,
      compressed: { file: cosExampleURL(slug, kind), object_key: cosExampleKey(slug, kind), sha256: display, bytes: 32,
        width: 960, height: 1200, format: 'webp', metadata_stripped: true, fit: 'contain', verification: receipt(display, 32) },
      actual_source_analysis: 'Actual fixture-only source analysis.',
      recipe: { style: slug, version: 1, sha256: hash, hash_scope: 'packaged-recipe-utf8-lf', execution_verified: kind === 'effect' },
      ...(kind === 'effect' ? { recipe_execution_verified: true, recipe_sha256: hash } : {}) };
  });
  return { schema_version: 2, storage: 'cos', style: slug, status: 'ready', synthetic_source: true,
    recipe_version: 1, recipe_sha256_at_packaging: hash, recipe_execution_verified: true,
    images: attempts.map(call => ({ ...call, file: call.compressed.file, sha256: call.compressed.sha256 })), attempts };
}

test('COS metadata rejects foreign URLs, mismatched readback receipts, changed recipes and unapproved publication', () => {
  const recipe = 'style: cos-study\nversion: 1\n', record = cosFixture('cos-study', recipe);
  assert.equal(validateCosExamples(record, 'cos-study', recipe).status, 'ready');
  const cover = structuredClone(record);
  for (const call of cover.attempts) call.compressed.fit = 'cover';
  for (const image of cover.images) image.compressed.fit = 'cover';
  assert.equal(validateCosExamples(cover, 'cos-study', recipe).status, 'ready');
  for (const mutate of [
    copy => { copy.attempts[0].compressed.file = 'https://attacker.example/image.webp'; },
    copy => { copy.attempts[0].compressed.object_key = '../private/image.webp'; },
    copy => { copy.attempts[0].original.verification.sha256 = '0'.repeat(64); },
    copy => { copy.images[1].review.decision = 'rejected'; },
  ]) {
    const copy = structuredClone(record); mutate(copy);
    assert.throws(() => validateCosExamples(copy, 'cos-study', recipe));
  }
  assert.throws(() => validateCosExamples(record, 'cos-study', recipe + '# drift\n'), /recipe mismatch/);
  const partial = structuredClone(record);
  partial.status = 'draft'; partial.recipe_execution_verified = false;
  partial.images = partial.images.filter(image => image.kind === 'source');
  partial.attempts[1].compressed = null; partial.attempts[1].review.decision = 'rejected';
  assert.equal(validateCosExamples(partial, 'cos-study', recipe).status, 'draft');
});

test('new COS-only examples refuse local packaging and require recorded COS receipts', () => temporary(async dir => {
  await assert.rejects(prepareExamples({ slug: 'cos-study' }, dir, '', [{ style: 'cos-study' }], { cosOnly: true }), /COS references/);
  const record = cosFixture('cos-study', 'style: cos-study\n');
  delete record.attempts[0].compressed.verification;
  await mkdir(path.join(dir, 'examples')); await writeFile(path.join(dir, 'examples/generation.json'), JSON.stringify(record));
  await assert.rejects(prepareExamples({ slug: 'cos-study' }, dir, 'style: cos-study\n', [], { cosOnly: true }), /readback evidence/);
}));

test('COS examples retain unknown interrupted timing only with explicit completion evidence', () => {
  const recipe = 'style: interrupted-study\nversion: 1\n', record = cosFixture('interrupted-study', recipe);
  for (const call of [...record.attempts, ...record.images]) Object.assign(call, {
    duration_ms: null,
    timing_basis: 'file-creation-completion-time; invocation timing lost on interrupted session',
    created_at_basis: 'file-creation-completion',
  });
  assert.equal(validateCosExamples(record, 'interrupted-study', recipe).status, 'ready');
  const missing = structuredClone(record); delete missing.attempts[0].created_at_basis;
  assert.throws(() => validateCosExamples(missing, 'interrupted-study', recipe), /generation metadata invalid/);
  const altered = structuredClone(record); altered.images[1].duration_ms = 0;
  assert.throws(() => validateCosExamples(altered, 'interrupted-study', recipe), /duration_ms differs/);
});
