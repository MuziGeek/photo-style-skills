import { createHash } from 'node:crypto';

const digest = value => createHash('sha256').update(value).digest('hex');
const recipeHash = value => digest(value.toString().replace(/\r\n/g, '\n'));
const same = (left, right) => JSON.stringify(left) === JSON.stringify(right);
const approved = call => call?.review?.decision === 'approved' && call.review.reason?.trim() && call.review.reviewer?.trim() && Number.isFinite(Date.parse(call.review.reviewed_at));
const fail = (ok, message) => { if (!ok) throw new Error(message); };
export const COS_MEDIA_ORIGIN = 'https://photo-media.easymuzi.cn';

export function cosExampleKey(slug, kind, attempt = 0) {
  fail(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) && ['source', 'effect'].includes(kind) && Number.isInteger(attempt) && attempt >= 0, 'Invalid COS example identity');
  return kind === 'source' ? `samples/photo-${slug}-960.webp` : `previews/${slug}/v1/photo-${slug}-${attempt}-960.webp`;
}
export const cosExampleURL = (slug, kind, attempt = 0) => `${COS_MEDIA_ORIGIN}/media/${cosExampleKey(slug, kind, attempt)}`;

function verified(value, label) {
  fail(value && /^[a-f0-9]{64}$/.test(value.sha256) && Number.isSafeInteger(value.bytes) && value.bytes > 0, `${label}: checksum or size missing`);
  const evidence = value.verification;
  fail(evidence?.method === 'get-sha256' && Number.isFinite(Date.parse(evidence.verified_at)) && evidence.sha256 === value.sha256 && evidence.bytes === value.bytes, `${label}: matching COS readback evidence missing`);
}

/** Offline checks validate recorded receipts and identities; they never claim a new COS GET. */
export function validateCosExamples(record, slug, recipeText) {
  const recipe = recipeHash(recipeText), label = `${slug}: COS examples`;
  fail(record?.schema_version === 2 && record.storage === 'cos' && record.style === slug && record.synthetic_source === true && ['ready', 'draft'].includes(record.status), `${label}: invalid record identity`);
  fail(record.recipe_version === 1 && record.recipe_sha256_at_packaging === recipe && typeof record.recipe_execution_verified === 'boolean', `${label}: packaged recipe mismatch`);
  fail(Array.isArray(record.images) && Array.isArray(record.attempts) && record.attempts.length > 0, `${label}: generation attempts missing`);
  const calls = new Map();
  for (const call of record.attempts) {
    fail(call.style === slug && ['source', 'effect'].includes(call.kind) && Number.isInteger(call.attempt) && call.attempt >= 0 && call.call === `${slug}:${call.kind}:${call.attempt}` && !calls.has(call.call), `${label}: duplicate or invalid call identity`);
    calls.set(call.call, call);
    fail(Number.isInteger(call.source_attempt) && call.source_attempt >= 0, `${call.call}: source attempt missing`);
    fail(typeof call.prompt === 'string' && call.prompt.trim() && /^[a-f0-9]{64}$/.test(call.prompt_sha256) && (call.prompt_redacted === true || digest(call.prompt) === call.prompt_sha256), `${call.call}: actual prompt checksum mismatch`);
    const timed = Number.isInteger(call.duration_ms) && call.duration_ms >= 0;
    const interrupted = call.duration_ms === null && call.timing_basis === 'file-creation-completion-time; invocation timing lost on interrupted session' && call.created_at_basis === 'file-creation-completion';
    fail(call.tool === 'codex-imagegen' && call.provider_model === 'unknown' && (timed || interrupted) && Number.isFinite(Date.parse(call.created_at)), `${call.call}: generation metadata invalid`);
    fail(['generated', 'failed'].includes(call.status), `${call.call}: invalid generation status`);
    const execution = call.kind === 'effect' && call.recipe_execution_verified === true;
    fail(call.recipe?.style === slug && call.recipe.version === 1 && call.recipe.sha256 === recipe && call.recipe.hash_scope === 'packaged-recipe-utf8-lf' && call.recipe.execution_verified === execution && (!execution || call.recipe_sha256 === recipe), `${call.call}: executed recipe mismatch`);
    if (call.review) fail(['approved', 'rejected'].includes(call.review.decision) && call.review.reason?.trim() && call.review.reviewer?.trim() && Number.isFinite(Date.parse(call.review.reviewed_at)), `${call.call}: incomplete review`);
    if (call.status === 'generated') {
      const original = call.original, expected = call.kind === 'source' ? `masters/samples/photo-${slug}.png` : `masters/previews/${slug}/v1/photo-${slug}-${call.attempt}.png`;
      verified(original, `${call.call}: original`);
      fail(original.storage === 'cos' && original.file === expected && original.object_key === expected && original.format === 'png' && Number.isInteger(original.width) && original.width > 0 && Number.isInteger(original.height) && original.height > 0, `${call.call}: invalid COS master identity`);
    }
    if (call.compressed) {
      const image = call.compressed, expected = cosExampleURL(slug, call.kind, call.attempt);
      verified(image, `${call.call}: compressed`);
      fail(call.status === 'generated' && approved(call) && typeof call.actual_source_analysis === 'string' && call.actual_source_analysis.trim() && image.file === expected && image.object_key === cosExampleKey(slug, call.kind, call.attempt), `${call.call}: unapproved or unsafe COS image URL`);
      fail(image.width === 960 && image.height === 1200 && image.format === 'webp' && image.metadata_stripped === true && ['contain', 'cover'].includes(image.fit), `${call.call}: invalid COS display image metadata`);
    }
  }
  for (const call of calls.values()) if (call.kind === 'effect') {
    fail(calls.get(`${slug}:source:${call.source_attempt}`)?.original?.sha256 === call.source_sha256, `${call.call}: wrong actual source checksum`);
  }
  const files = { record: 'examples/generation.json' }, kinds = new Set();
  for (const image of record.images) {
    const call = calls.get(image.call);
    fail(call && approved(image) && same(call.compressed, image.compressed) && call.compressed && image.file === call.compressed.file && image.sha256 === call.compressed.sha256 && !kinds.has(image.kind), `${label}: published image/audit mismatch`);
    for (const key of ['style', 'kind', 'attempt', 'source_attempt', 'prompt', 'prompt_sha256', 'original', 'source_sha256', 'review', 'recipe', 'created_at', 'duration_ms', 'timing_basis', 'created_at_basis']) fail(same(image[key], call[key]), `${label}: selected ${key} differs from its attempt`);
    kinds.add(image.kind); files[image.kind] = image.file;
  }
  fail(record.images.length === record.attempts.filter(call => call.compressed).length, `${label}: selected image omitted`);
  const source = record.images.find(image => image.kind === 'source'), effect = record.images.find(image => image.kind === 'effect');
  const ready = Boolean(source && effect && approved(source) && approved(effect) && effect.source_attempt === source.attempt && effect.source_sha256 === source.original.sha256);
  fail(record.status === (ready ? 'ready' : 'draft') && record.recipe_execution_verified === Boolean(effect?.recipe?.execution_verified) && (!ready || record.recipe_execution_verified), `${label}: ready status or verified recipe mismatch`);
  fail(!/(?:^|["\s])[A-Z]:[\\/]|\/(?:Users|home)\/|api[_-]?key|Bearer\s|originalPath/i.test(JSON.stringify(record)), `${label}: private paths or credentials exposed`);
  return { status: record.status, files, attempts: record.attempts, removed: [] };
}
