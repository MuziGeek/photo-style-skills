import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { validateUserCharacterRecord } from './validate-user-character-candidates.mjs';

// Isolated metadata fixtures: no network, image provider, storage writes or production state.
const sha = value => createHash('sha256').update(value).digest('hex');
const at = '2026-11-10T13:00:00.000Z';
const origin = 'https://photo-media.easymuzi.cn';
const recipeText = 'style: game-character-fixture\nversion: 1\nsubject_policy: preserve-source-character\n';
const slug = 'game-character-fixture';

function fixture() {
  const objects = [];
  function object(key, format, width, height, extra = {}) {
    const bytes = 1234, checksum = sha(`fixture:${key}`);
    const value = { storage: 'cos', file: key, object_key: key, format, width, height, bytes, sha256: checksum, ...extra,
      verification: { method: 'get-sha256', verified_at: at, bytes, sha256: checksum } };
    objects.push(structuredClone(value));
    return value;
  }
  function display(key, width) {
    const value = object(key, 'webp', width, width * 5 / 4, { metadata_stripped: true, fit: 'contain' });
    value.file = `${origin}/media/${key}`;
    return value;
  }
  const review = { decision: 'approved', reason: 'Fixture-only reviewed input and output.', reviewer: 'Isolated test', reviewed_at: at };
  const sourceNative = object(`masters/samples/photo-${slug}.jpg`, 'jpeg', 1920, 1224);
  object(`samples/photo-${slug}.jpg`, 'jpeg', 1920, 1224, { metadata_stripped: true });
  let sourceDisplay;
  for (const width of [240, 480, 960]) {
    const value = display(`samples/photo-${slug}-${width}.webp`, width);
    if (width === 960) sourceDisplay = value;
  }
  const effectNative = object(`masters/previews/${slug}/v1/photo-${slug}-0.png`, 'png', 1920, 1224);
  let effectDisplay;
  for (const width of [240, 480, 960]) {
    const value = display(`previews/${slug}/v1/photo-${slug}-0-${width}.webp`, width);
    if (width === 960) effectDisplay = value;
  }
  const assembly = { assembly: 'common-observation-treatment-v1', common: 'Edit the supplied screenshot.', treatment: 'Use coherent daylight.', suffix: 'Keep the source aspect ratio.' };
  const analysis = 'One fixture subject in a wide composition.';
  const prompt = `${assembly.common}\nObserved source: ${analysis}\nRequested photographic treatment: ${assembly.treatment}\n${assembly.suffix}`;
  const effect = { call: `${slug}:effect:0`, style: slug, kind: 'effect', attempt: 0, status: 'generated', prompt, prompt_sha256: sha(prompt),
    created_at: at, duration_ms: 1000, tool: 'codex-imagegen', provider_model: 'unknown', source_sha256: sourceNative.sha256, actual_source_analysis: analysis,
    review: { ...review }, original: effectNative, compressed: effectDisplay, recipe_execution_verified: true, recipe_sha256: sha(recipeText),
    recipe: { style: slug, version: 1, sha256: sha(recipeText), hash_scope: 'packaged-recipe-utf8-lf', execution_verified: true } };
  return {
    provenance: { execution_prompt: assembly },
    record: { schema_version: 3, storage: 'cos', style: slug, source_kind: 'user-supplied-game-screenshot', synthetic_source: false,
      status: 'ready', recipe_version: 1, recipe_sha256_at_packaging: sha(recipeText), recipe_execution_verified: true,
      uploaded_source: { kind: 'source', provenance: 'user-supplied-game-screenshot', received_at: at,
        evidence: `Isolated attachment fixture ${sourceNative.sha256}; not a generation call.`, actual_source_analysis: analysis,
        review: { ...review }, original: sourceNative, compressed: sourceDisplay },
      attempts: [effect], selected_effect_call: effect.call, cos_objects: objects },
  };
}

function cleanupFixture() {
  const value = fixture(), { record } = value;
  const parent = record.attempts[0], cleanup = structuredClone(parent);
  cleanup.call = `${slug}:effect:1`; cleanup.attempt = 1;
  cleanup.prompt = 'Remove only the tiny white game-interface icon from the hat corner; preserve all other pixels and framing.';
  cleanup.prompt_sha256 = sha(cleanup.prompt);
  cleanup.recipe_execution_verified = false;
  delete cleanup.recipe_sha256;
  cleanup.recipe.execution_verified = false;
  cleanup.recipe.execution_scope = 'targeted-cleanup';
  cleanup.input_kind = 'generated-effect'; cleanup.input_sha256 = parent.original.sha256; cleanup.parent_call = parent.call;
  const parentPrefix = `previews/${slug}/v1/photo-${slug}-0`;
  const nextObjects = record.cos_objects.filter(object => object.object_key.startsWith(`masters/${parentPrefix}.`) || object.object_key.startsWith(`${parentPrefix}-`)).map(object => {
    const copy = structuredClone(object);
    copy.object_key = copy.object_key.replace(`photo-${slug}-0`, `photo-${slug}-1`);
    copy.file = copy.object_key;
    copy.sha256 = sha(`fixture:${copy.object_key}`);
    copy.verification.sha256 = copy.sha256;
    return copy;
  });
  cleanup.original = structuredClone(nextObjects.find(object => object.object_key.startsWith('masters/')));
  cleanup.compressed = structuredClone(nextObjects.find(object => object.object_key.endsWith('-960.webp')));
  cleanup.compressed.file = `${origin}/media/${cleanup.compressed.object_key}`;
  delete parent.compressed;
  parent.review = { ...parent.review, decision: 'rejected', reason: 'Small interface icon remains; native evidence retained for precise cleanup.' };
  record.cos_objects = record.cos_objects.filter(object => !object.object_key.startsWith(`${parentPrefix}-`)).concat(nextObjects);
  record.attempts.push(cleanup); record.selected_effect_call = cleanup.call; record.recipe_execution_verified = false;
  return value;
}

test('accepts a truthful uploaded wide JPEG and native-aspect edit without inventing a source generation', () => {
  const { record, provenance } = fixture();
  const result = validateUserCharacterRecord(record, slug, recipeText, provenance);
  assert.equal(result.status, 'ready');
  assert.equal(result.uploadedSource.original.width, 1920);
  assert.equal(result.uploadedSource.original.height, 1224);
  assert.equal(result.uploadedSource.original.format, 'jpeg');
  assert.equal(result.attempts.length, 1);
  assert.ok(result.attempts.every(attempt => attempt.kind === 'effect'));
  assert.equal(result.files.effect, record.attempts[0].compressed.file);
});

test('refuses fabricated synthetic or generated-source metadata', () => {
  for (const change of [r => { r.synthetic_source = true; }, r => { r.uploaded_source.tool = 'codex-imagegen'; }, r => { r.attempts[0].kind = 'source'; }, r => { r.source_generation_claimed = true; }]) {
    const { record } = fixture(); change(record);
    assert.throws(() => validateUserCharacterRecord(record, slug, recipeText), /source|call/i);
  }
});

test('requires exact imported-source evidence rather than an ownership claim or invented source attempt', () => {
  for (const change of [r => { delete r.uploaded_source.received_at; }, r => { delete r.uploaded_source.evidence; }, r => { r.attempts[0].source_attempt = 0; }, r => { r.attempts[0].source_sha256 = sha('different input'); }]) {
    const { record } = fixture(); change(record);
    assert.throws(() => validateUserCharacterRecord(record, slug, recipeText), /source evidence|input checksum/i);
  }
});

test('readback evidence must match both the image and full COS receipt', () => {
  for (const change of [r => { delete r.uploaded_source.original.verification; }, r => { r.attempts[0].compressed.verification.bytes++; }, r => { r.cos_objects[0].sha256 = sha('changed'); r.cos_objects[0].verification.sha256 = r.cos_objects[0].sha256; }]) {
    const { record } = fixture(); change(record);
    assert.throws(() => validateUserCharacterRecord(record, slug, recipeText), /readback|COS receipt/i);
  }
});

test('rejects source cropping, missing thumbnails and unstripped downloadable JPEG', () => {
  for (const change of [r => { r.uploaded_source.compressed.fit = 'cover'; }, r => { r.cos_objects = r.cos_objects.filter(o => !o.object_key.endsWith('-240.webp')); }, r => { r.cos_objects.find(o => o.object_key === `samples/photo-${slug}.jpg`).metadata_stripped = false; }]) {
    const { record } = fixture(); change(record);
    assert.throws(() => validateUserCharacterRecord(record, slug, recipeText), /contain|receipt/i);
  }
});

test('changing the packaged recipe invalidates previous ready evidence', () => {
  const { record } = fixture();
  assert.throws(() => validateUserCharacterRecord(record, slug, recipeText + '# material change\n'), /recipe context mismatch/i);
});

test('preserves real prompt bytes and distinguishes custom example assembly from the website assembler', () => {
  const { record, provenance } = fixture();
  record.attempts[0].prompt += '\nA different instruction.';
  record.attempts[0].prompt_sha256 = sha(record.attempts[0].prompt);
  assert.throws(() => validateUserCharacterRecord(record, slug, recipeText, provenance), /declared example assembly/i);
  const second = fixture(); second.record.attempts[0].prompt_sha256 = sha('wrong prompt');
  assert.throws(() => validateUserCharacterRecord(second.record, slug, recipeText, second.provenance), /prompt checksum/i);
});

test('rejected or nonexistent selected edits cannot be marked ready', () => {
  for (const change of [r => { r.attempts[0].review.decision = 'rejected'; }, r => { r.selected_effect_call = `${slug}:effect:9`; }, r => { r.recipe_execution_verified = false; }]) {
    const { record } = fixture(); change(record);
    assert.throws(() => validateUserCharacterRecord(record, slug, recipeText), /unapproved|missing|readiness/i);
  }
});

test('a verified upload with no selected edit remains draft', () => {
  const { record } = fixture();
  record.attempts = []; record.selected_effect_call = null; record.recipe_execution_verified = false; record.status = 'draft';
  assert.equal(validateUserCharacterRecord(record, slug, recipeText).status, 'draft');
});

test('rejects duplicate or escaping COS identities and expiring signed links', () => {
  for (const change of [r => { r.cos_objects.push(structuredClone(r.cos_objects[0])); }, r => { r.cos_objects[0].object_key = '../private.jpg'; }, r => { r.note = 'C:/Users/example/private.jpg'; }, r => { r.note = 'https://example.com/image?xsec_token=expiring'; }]) {
    const { record } = fixture(); change(record);
    assert.throws(() => validateUserCharacterRecord(record, slug, recipeText), /duplicate|unsafe|private paths/i);
  }
});

test('an approved targeted cleanup can be ready through a rejected but verified full-recipe parent', () => {
  const { record, provenance } = cleanupFixture();
  const result = validateUserCharacterRecord(record, slug, recipeText, provenance);
  assert.equal(result.status, 'ready');
  assert.equal(result.selectedEffect.recipe_execution_verified, false);
  assert.equal(result.selectedEffect.source_sha256, result.uploadedSource.original.sha256);
  assert.equal(result.selectedEffect.input_sha256, result.attempts[0].original.sha256);
  assert.equal(result.attempts[0].review.decision, 'rejected');
  assert.equal(result.attempts[0].compressed, undefined);
});

test('cleanup lineage binds the exact parent native image while retaining the original uploaded source', () => {
  for (const change of [r => { r.attempts[1].input_sha256 = sha('unrelated output'); }, r => { r.attempts[1].source_sha256 = r.attempts[0].original.sha256; }, r => { delete r.attempts[1].input_kind; }]) {
    const { record, provenance } = cleanupFixture(); change(record);
    assert.throws(() => validateUserCharacterRecord(record, slug, recipeText, provenance), /checksum|input lineage/i);
  }
});

test('missing, self-referential and forward cleanup parents cannot establish ready evidence', () => {
  for (const parentCall of [`${slug}:effect:9`, `${slug}:effect:1`]) {
    const { record, provenance } = cleanupFixture(); record.attempts[1].parent_call = parentCall;
    assert.throws(() => validateUserCharacterRecord(record, slug, recipeText, provenance), /parent is missing, not earlier/i);
  }
  const { record, provenance } = cleanupFixture();
  record.attempts[0].recipe.execution_verified = false;
  record.attempts[0].recipe_execution_verified = false;
  record.attempts[0].recipe.execution_scope = 'targeted-cleanup';
  record.attempts[0].input_kind = 'generated-effect';
  record.attempts[0].input_sha256 = record.attempts[1].original.sha256;
  record.attempts[0].parent_call = record.attempts[1].call;
  assert.throws(() => validateUserCharacterRecord(record, slug, recipeText, provenance), /parent is missing, not earlier/i);
});

test('cleanup cannot claim that its different prompt executed the complete recipe', () => {
  const { record, provenance } = cleanupFixture();
  record.attempts[1].recipe.execution_verified = true;
  record.attempts[1].recipe_execution_verified = true;
  record.attempts[1].recipe_sha256 = sha(recipeText);
  assert.throws(() => validateUserCharacterRecord(record, slug, recipeText, provenance), /falsely marked as full recipe/i);
});

test('unknown follow-up scope and arbitrary unverified parents cannot inherit a recipe claim', () => {
  const { record, provenance } = cleanupFixture();
  record.attempts[1].recipe.execution_scope = 'restyle';
  assert.throws(() => validateUserCharacterRecord(record, slug, recipeText, provenance), /requires targeted cleanup scope/i);
  const second = cleanupFixture();
  second.record.attempts[0].recipe.execution_verified = false;
  second.record.attempts[0].recipe_execution_verified = false;
  assert.throws(() => validateUserCharacterRecord(second.record, slug, recipeText, second.provenance), /does not reach a verified full recipe/i);
});

test('an invalid unselected cleanup is still rejected and rejected cleanup cannot be selected', () => {
  const { record, provenance } = cleanupFixture();
  record.status = 'draft'; record.selected_effect_call = null; record.attempts[1].parent_call = `${slug}:effect:9`;
  assert.throws(() => validateUserCharacterRecord(record, slug, recipeText, provenance), /parent is missing/i);
  const second = cleanupFixture(); second.record.attempts[1].review.decision = 'rejected';
  assert.throws(() => validateUserCharacterRecord(second.record, slug, recipeText, second.provenance), /unapproved/i);
});
