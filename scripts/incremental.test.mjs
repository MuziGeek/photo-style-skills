import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, readdir, cp, rm, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import sharp from 'sharp';
import { digest, recipeHash, prepareExamples } from './examples.mjs';
import { assertAdaptation, sourceLicense, publicSource, totalStyles } from './catalog-config.mjs';
import { build } from './build.mjs';

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

test('building thirty new drafts preserves all forty legacy skill folders and their approved audit calls', () => temporary(async dir => {
  await mkdir(path.join(dir, 'data'), { recursive: true });
  for (const group of ['oriental', 'material-abstract', 'photography']) await cp(path.join(repository, 'data', group + '.json'), path.join(dir, 'data', group + '.json'));
  const legacyRows = (await Promise.all(['oriental', 'material-abstract', 'photography'].map(async group => JSON.parse(await readFile(path.join(dir, 'data', group + '.json'), 'utf8'))))).flat();
  const before = {};
  for (const row of legacyRows) {
    const folder = path.join(dir, 'skills', row.slug);
    await cp(path.join(repository, 'skills', row.slug), folder, { recursive: true });
    before[row.slug] = await hashes(folder);
  }
  const licenseText = await readFile(path.join(repository, 'skills/cyanotype-contact-print/LICENSE-THIRD-PARTY.txt'), 'utf8');
  const thirty = Array.from({ length: 30 }, (_, index) => ({ ...legacyRows[0], slug: `new-study-${index}`, nameZh: `新样式${index}`, nameEn: `New Study ${index}`, sourceProvenance: index < 3 ? {
    type: 'adapted', author: 'Fixture Author', repo: 'fixture/prompts', commit: 'a'.repeat(40), url: 'https://example.com/fixture-source',
    license: ['MIT', 'CC-BY-4.0', 'Apache-2.0'][index], license_hash: digest(licenseText), license_text: licenseText,
    modifications: ['Fixture-only adaptation used to verify license-specific packaging.'],
  } : undefined }));
  await writeFile(path.join(dir, 'data/curated-20261109.json'), JSON.stringify(thirty));
  const generation = path.join(dir, 'new-generation');
  await mkdir(generation);
  const result = await build({ root: dir, generationRoot: generation });
  assert.equal(totalStyles, 70);
  assert.equal(result.styles, 70); assert.equal(result.ready, 39); assert.equal(result.draft, 31);
  const index = JSON.parse(await readFile(path.join(dir, 'index.json'), 'utf8'));
  assert.equal(index.styles.length, 70);
  assert.equal(index.styles.find(row => row.slug === 'cubist-multiple-planes').status, 'draft');
  assert.deepEqual(result.removed_legacy_images, []);
  for (const row of legacyRows) assert.deepEqual(await hashes(path.join(dir, 'skills', row.slug)), before[row.slug]);
  const draft = JSON.parse(await readFile(path.join(dir, 'skills/new-study-0/provenance.json'), 'utf8'));
  assert.deepEqual(draft.examples.status, 'draft');
  assert.equal(draft.examples.record, undefined);
  for (const [number, license] of ['MIT', 'CC-BY-4.0', 'Apache-2.0'].entries()) {
    const folder = path.join(dir, `skills/new-study-${number}`);
    assert.equal(JSON.parse(await readFile(path.join(folder, 'provenance.json'), 'utf8')).text_license, license);
    assert.equal(await readFile(path.join(folder, 'LICENSE-THIRD-PARTY.txt'), 'utf8'), licenseText);
    assert.ok((await readFile(path.join(folder, 'LICENSE'), 'utf8')).includes(`remains subject to ${license}`));
  }
  await mkdir(path.join(dir, 'scripts'), { recursive: true });
  await cp(path.join(repository, 'validate.mjs'), path.join(dir, 'validate.mjs'));
  await cp(path.join(repository, 'package.json'), path.join(dir, 'package.json'));
  for (const file of ['examples.mjs', 'catalog-config.mjs']) await cp(path.join(repository, 'scripts', file), path.join(dir, 'scripts', file));
  await cp(path.join(repository, 'docs/research-sources.json'), path.join(dir, 'docs/research-sources.json'));
  const validation = await execute(process.execPath, ['validate.mjs'], { cwd: dir });
  assert.deepEqual(JSON.parse(validation.stdout).errors, []);
  const firstIndex = await readFile(path.join(dir, 'index.json'));
  await build({ root: dir });
  assert.deepEqual(await readFile(path.join(dir, 'index.json')), firstIndex);
  for (const row of legacyRows) assert.deepEqual(await hashes(path.join(dir, 'skills', row.slug)), before[row.slug]);
  await mkdir(path.join(generation, 'images'));
  const executedRecipe = await readFile(path.join(dir, 'skills/new-study-0/recipe.yaml'), 'utf8');
  const review = { decision: 'approved', reason: 'Fixture verification only.', reviewer: 'Fixture reviewer', reviewed_at: '2026-11-09T11:00:00Z' };
  for (const kind of ['source', 'effect']) {
    const call = { id: 'new-study-0', kind, attempt: 0, source_attempt: 0, status: 'generated', prompt: `Fixture actual ${kind} prompt.`, duration_ms: 1000, created_at: '2026-11-09T11:00:00Z', tool: 'codex-imagegen', visual_review: review,
      ...(kind === 'effect' ? { recipe_execution_verified: true, recipe_sha256: recipeHash(executedRecipe) } : {}) };
    await writeFile(path.join(generation, `new-study-0-${kind}-0.json`), JSON.stringify(call));
    await sharp({ create: { width: 1024, height: 1280, channels: 3, background: kind === 'source' ? 'red' : 'blue' } }).png().toFile(path.join(generation, 'images', `new-study-0-${kind}-0.png`));
  }
  await writeFile(path.join(generation, 'new-study-0-source-0.analysis.txt'), 'Actual fixture source contains one red image.');
  const updated = await build({ root: dir, generationRoot: generation });
  assert.equal(updated.ready, 40); assert.equal(updated.generation_calls, 90);
  const checked = await execute(process.execPath, ['validate.mjs'], { cwd: dir });
  assert.deepEqual(JSON.parse(checked.stdout).errors, []);
  for (const row of legacyRows) assert.deepEqual(await hashes(path.join(dir, 'skills', row.slug)), before[row.slug]);
}));
