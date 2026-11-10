import { readFile, readdir, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { parse as parseYaml } from 'yaml';

export const USER_CHARACTER_SLUGS = [
  'game-character-ccd-photo', 'game-character-natural-live-action',
  'game-character-softlight-portrait', 'game-character-phone-snapshot',
  'game-character-hardlight-portrait', 'game-character-daylight-portrait',
];

const ORIGIN = 'https://photo-media.easymuzi.cn';
const digest = value => createHash('sha256').update(value).digest('hex');
const recipeHash = value => digest(value.toString().replace(/\r\n/g, '\n'));
const requireValue = (value, message) => { if (!value) throw new Error(message); };
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const timestamp = value => typeof value === 'string' && Number.isFinite(Date.parse(value));
const approved = review => review?.decision === 'approved' && review.reason?.trim() && review.reviewer?.trim() && timestamp(review.reviewed_at);
const nativeFormats = new Set(['jpeg', 'jpg', 'png', 'webp', 'avif']);
const normalizeFormat = value => value === 'jpg' ? 'jpeg' : value;
const safeKey = key => typeof key === 'string' && /^[a-z0-9][a-z0-9/_.-]*$/i.test(key) && !key.includes('..') && !key.includes('//');
const objectKey = value => {
  const key = value?.object_key ?? value?.key;
  requireValue(safeKey(key) && (!value?.object_key || !value?.key || value.object_key === value.key), 'Unsafe or conflicting COS object key');
  return key;
};

function checkReceipt(value, label) {
  requireValue(value && /^[a-f0-9]{64}$/.test(value.sha256) && Number.isSafeInteger(value.bytes) && value.bytes > 0, `${label}: checksum or byte count missing`);
  const evidence = value.verification;
  requireValue(evidence?.method === 'get-sha256' && timestamp(evidence.verified_at) && evidence.sha256 === value.sha256 && evidence.bytes === value.bytes, `${label}: matching COS readback evidence missing`);
  objectKey(value);
}

function checkReview(review, label) {
  if (review === undefined) return;
  requireValue(['approved', 'rejected'].includes(review.decision) && review.reason?.trim() && review.reviewer?.trim() && timestamp(review.reviewed_at), `${label}: incomplete visual review`);
}

function checkNative(value, prefix, label) {
  checkReceipt(value, label);
  const key = objectKey(value);
  requireValue(value.storage === 'cos' && value.file === key && key.startsWith(prefix) && !key.slice(prefix.length).includes('/'), `${label}: incorrect native object identity`);
  requireValue(nativeFormats.has(value.format) && Number.isSafeInteger(value.width) && value.width > 0 && Number.isSafeInteger(value.height) && value.height > 0, `${label}: native format or dimensions missing`);
  const extension = key.split('.').at(-1);
  requireValue(normalizeFormat(extension) === normalizeFormat(value.format), `${label}: native extension and format disagree`);
}

function checkDisplay(value, key, width, label) {
  checkReceipt(value, label);
  requireValue(objectKey(value) === key && value.file === `${ORIGIN}/media/${key}`, `${label}: incorrect display URL or object identity`);
  requireValue(value.width === width && value.height === width * 5 / 4 && value.format === 'webp' && value.metadata_stripped === true && value.fit === 'contain', `${label}: display must be metadata-stripped 4:5 contain WebP`);
}

/** Check the recorded readbacks offline; this function never performs a new COS GET. */
export function validateUserCharacterRecord(record, slug, recipeText, provenance) {
  const label = `${slug}: user-source examples`;
  requireValue(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug), `${label}: unsafe style identity`);
  requireValue(record?.schema_version === 3 && record.storage === 'cos' && record.style === slug && record.source_kind === 'user-supplied-game-screenshot' && record.synthetic_source === false && record.source_generation_claimed !== true, `${label}: truthful uploaded-source identity required`);
  requireValue(['draft', 'ready'].includes(record.status) && record.recipe_version === 1 && record.recipe_sha256_at_packaging === recipeHash(recipeText) && typeof record.recipe_execution_verified === 'boolean', `${label}: recipe context mismatch`);

  const source = record.uploaded_source;
  requireValue(source?.kind === 'source' && source.provenance === 'user-supplied-game-screenshot' && timestamp(source.received_at) && typeof source.evidence === 'string' && source.evidence.trim().length >= 8 && source.actual_source_analysis?.trim(), `${label}: uploaded source evidence missing`);
  for (const field of ['prompt', 'prompt_sha256', 'duration_ms', 'tool', 'provider_model', 'generation_model']) requireValue(source[field] === undefined, `${label}: uploaded source must not invent generation metadata`);
  checkReview(source.review, `${label}: source`);
  checkNative(source.original, `masters/samples/photo-${slug}.`, `${label}: source native original`);
  checkDisplay(source.compressed, `samples/photo-${slug}-960.webp`, 960, `${label}: source display`);

  requireValue(Array.isArray(record.cos_objects) && record.cos_objects.length > 0, `${label}: full COS object receipts missing`);
  const objects = new Map();
  for (const object of record.cos_objects) {
    checkReceipt(object, `${label}: COS object`);
    const key = objectKey(object);
    requireValue(object.file === undefined || object.file === key || object.file === `${ORIGIN}/media/${key}`, `${label}: incorrect COS receipt URL`);
    requireValue(!objects.has(key), `${label}: duplicate COS object receipt`);
    objects.set(key, object);
  }
  const bind = (value, context) => {
    const match = objects.get(objectKey(value));
    requireValue(match && match.sha256 === value.sha256 && match.bytes === value.bytes, `${context}: full COS receipt mismatch`);
    for (const field of ['width', 'height', 'format']) if (match[field] !== undefined) requireValue(match[field] === value[field], `${context}: full COS ${field} mismatch`);
  };
  bind(source.original, `${label}: source original`); bind(source.compressed, `${label}: source display`);
  const sourceJpeg = objects.get(`samples/photo-${slug}.jpg`);
  requireValue(sourceJpeg && normalizeFormat(sourceJpeg.format) === 'jpeg' && sourceJpeg.metadata_stripped === true && sourceJpeg.width > 0 && sourceJpeg.height > 0, `${label}: metadata-stripped source JPEG receipt missing`);
  for (const width of [240, 480, 960]) {
    const key = `samples/photo-${slug}-${width}.webp`, display = objects.get(key);
    requireValue(display, `${label}: source ${width}px receipt missing`);
    checkDisplay({ ...display, file: `${ORIGIN}/media/${key}` }, key, width, `${label}: source ${width}px`);
  }

  requireValue(Array.isArray(record.attempts), `${label}: actual edit attempts missing`);
  const calls = new Map();
  for (const call of record.attempts) {
    requireValue(call.style === slug && call.kind === 'effect' && Number.isSafeInteger(call.attempt) && call.attempt >= 0 && call.call === `${slug}:effect:${call.attempt}` && !calls.has(call.call), `${label}: invalid or invented source call`);
    requireValue(call.source_attempt === undefined && call.source_sha256 === source.original.sha256, `${call.call}: actual uploaded input checksum mismatch`);
    requireValue(call.actual_source_analysis === source.actual_source_analysis, `${call.call}: original source observation mismatch`);
    requireValue(typeof call.prompt === 'string' && call.prompt.trim() && call.prompt_redacted !== true && digest(call.prompt) === call.prompt_sha256, `${call.call}: actual edit prompt checksum mismatch`);
    requireValue(call.tool === 'codex-imagegen' && typeof call.provider_model === 'string' && call.provider_model.trim() && Number.isSafeInteger(call.duration_ms) && call.duration_ms >= 0 && timestamp(call.created_at), `${call.call}: actual edit metadata missing`);
    requireValue(['generated', 'failed'].includes(call.status), `${call.call}: invalid edit status`);
    const context = call.recipe;
    requireValue(context?.style === slug && context.version === 1 && context.sha256 === recipeHash(recipeText) && context.hash_scope === 'packaged-recipe-utf8-lf' && typeof context.execution_verified === 'boolean' && context.execution_verified === (call.recipe_execution_verified === true) && (!context.execution_verified || call.recipe_sha256 === context.sha256), `${call.call}: executed recipe context mismatch`);
    if (context.execution_scope === 'targeted-cleanup') {
      requireValue(!context.execution_verified && call.input_kind === 'generated-effect' && typeof call.parent_call === 'string' && /^[a-f0-9]{64}$/.test(call.input_sha256), `${call.call}: targeted cleanup input lineage missing or falsely marked as full recipe execution`);
    } else {
      requireValue(call.parent_call === undefined && call.input_kind !== 'generated-effect' && (call.input_sha256 === undefined || call.input_sha256 === source.original.sha256), `${call.call}: generated-effect input requires targeted cleanup scope`);
      requireValue(call.input_kind === undefined || call.input_kind === 'uploaded-source', `${call.call}: unknown edit input kind`);
    }
    if (provenance?.execution_prompt && context.execution_verified) {
      const assembly = provenance.execution_prompt;
      requireValue(assembly.assembly === 'common-observation-treatment-v1' && assembly.common?.trim() && assembly.treatment?.trim() && assembly.suffix?.trim(), `${call.call}: declared example prompt assembly missing`);
      const expected = `${assembly.common}\nObserved source: ${source.actual_source_analysis}\nRequested photographic treatment: ${assembly.treatment}\n${assembly.suffix}`;
      requireValue(call.prompt === expected, `${call.call}: actual prompt differs from the declared example assembly`);
    }
    checkReview(call.review, call.call);
    if (call.status === 'generated') {
      checkNative(call.original, `masters/previews/${slug}/v1/photo-${slug}-${call.attempt}.`, `${call.call}: native effect`);
      bind(call.original, `${call.call}: native effect`);
    } else requireValue(!call.original && !call.compressed, `${call.call}: failed edit has image artifacts`);
    if (call.compressed) {
      requireValue(call.status === 'generated' && approved(call.review), `${call.call}: unapproved edit has a selected display`);
      const prefix = `previews/${slug}/v1/photo-${slug}-${call.attempt}`;
      checkDisplay(call.compressed, `${prefix}-960.webp`, 960, `${call.call}: effect display`);
      bind(call.compressed, `${call.call}: effect display`);
      for (const width of [240, 480, 960]) {
        const key = `${prefix}-${width}.webp`, display = objects.get(key);
        requireValue(display, `${call.call}: effect ${width}px receipt missing`);
        checkDisplay({ ...display, file: `${ORIGIN}/media/${key}` }, key, width, `${call.call}: effect ${width}px`);
      }
    }
    calls.set(call.call, call);
  }
  const verifiedRecipeRoot = call => {
    if (!call) return null;
    if (call.recipe.execution_verified) return call;
    if (call.recipe.execution_scope !== 'targeted-cleanup') return null;
    const parent = calls.get(call.parent_call);
    requireValue(parent && parent.attempt < call.attempt && parent.status === 'generated' && parent.original && parent.original.sha256 === call.input_sha256, `${call.call}: cleanup parent is missing, not earlier, or has a different native input checksum`);
    return verifiedRecipeRoot(parent);
  };
  // Resolve every cleanup, including unselected attempts, so invalid chains cannot hide in the ledger.
  for (const call of calls.values()) if (call.recipe.execution_scope === 'targeted-cleanup') {
    requireValue(verifiedRecipeRoot(call), `${call.call}: cleanup lineage does not reach a verified full recipe execution`);
  }
  requireValue(record.selected_effect_call === null || typeof record.selected_effect_call === 'string', `${label}: selected edit identity missing`);
  const selected = record.selected_effect_call === null ? null : calls.get(record.selected_effect_call);
  if (record.selected_effect_call !== null) requireValue(selected && selected.status === 'generated' && selected.compressed && approved(selected.review), `${label}: selected edit is missing or unapproved`);
  const ready = Boolean(approved(source.review) && selected && verifiedRecipeRoot(selected));
  requireValue(record.status === (ready ? 'ready' : 'draft') && record.recipe_execution_verified === Boolean(selected?.recipe.execution_verified), `${label}: readiness differs from actual evidence`);
  requireValue(!/(?:^|["\s])[A-Z]:[\\/]|\/(?:Users|home)\/|api[_-]?key|Bearer\s|originalPath|[?&](?:xsec_token|x-signature|signature|token)=/i.test(JSON.stringify(record)), `${label}: private paths, credentials or expiring signatures exposed`);
  return {
    status: record.status, uploadedSource: source, selectedEffect: selected,
    files: { record: 'examples/generation.json', source: source.compressed.file, ...(selected ? { effect: selected.compressed.file } : {}) },
    attempts: record.attempts, cosObjects: record.cos_objects,
  };
}

const exists = async file => { try { return (await stat(file)).isFile(); } catch (error) { if (error.code === 'ENOENT') return false; throw error; } };

export async function validateUserCharacterCandidates(root, { slugs = USER_CHARACTER_SLUGS, requireReady = false } = {}) {
  const results = [];
  for (const slug of slugs) {
    const folder = path.join(root, 'candidates', slug);
    const recipeText = await readFile(path.join(folder, 'recipe.yaml'), 'utf8');
    const recipe = parseYaml(recipeText);
    requireValue(recipe.style === slug && recipe.version === 1 && recipe.required_capability === 'image_edit' && recipe.model_family === 'codex-imagegen' && recipe.aspect === '4:5' && recipe.subject_policy === 'preserve-source-character', `${slug}: candidate recipe identity mismatch`);
    requireValue(recipe.medium_anchor?.trim() && recipe.preserve?.length && recipe.fragments?.length && Array.isArray(recipe.negative), `${slug}: complete recipe mechanisms missing`);
    for (const fragment of recipe.fragments) requireValue(fragment.text?.trim() && fragment.text.length <= 200 && fragment.text.trim().split(/\s+/).length <= 25, `${slug}: recipe fragment exceeds portable limits`);
    const skill = await readFile(path.join(folder, 'SKILL.md'), 'utf8');
    const frontmatter = skill.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
    requireValue(frontmatter && parseYaml(frontmatter[1]).name === slug && parseYaml(frontmatter[1]).description?.length > 30, `${slug}: portable Skill identity missing`);
    requireValue(!/\b(?:TODO|TBD|FIXME|lorem ipsum)\b|待填写|待补充|占位文本/i.test(skill), `${slug}: unfinished Skill text`);
    requireValue((await readFile(path.join(folder, 'LICENSE'), 'utf8')).includes('Copyright (c) 2026 MuziGeek'), `${slug}: portable text license missing`);
    const provenance = JSON.parse(await readFile(path.join(folder, 'provenance.json'), 'utf8'));
    requireValue(provenance.style === slug && provenance.type === 'original' && provenance.origin === 'original' && provenance.author === 'MuziGeek' && provenance.text_license === 'MIT' && same(provenance.adapted_from, []), `${slug}: independent text provenance mismatch`);
    requireValue(provenance.examples?.synthetic_source === false && provenance.examples?.source_kind === 'user-supplied-game-screenshot' && provenance.catalog?.registered === false, `${slug}: truthful source or candidate status missing`);
    requireValue(provenance.research_references?.every(reference => reference.use === 'research-only' && reference.adopted_prompt_text === false && reference.adopted_reference_images === false), `${slug}: unclear research reuse attribution`);
    for (const file of await readdir(folder, { recursive: true })) requireValue(!/\.(?:png|jpe?g|webp|avif|gif)$/i.test(file), `${slug}: COS-only candidate contains a local image`);
    const recordFile = path.join(folder, 'examples', 'generation.json');
    if (await exists(recordFile)) {
      const record = JSON.parse(await readFile(recordFile, 'utf8'));
      const checked = validateUserCharacterRecord(record, slug, recipeText, provenance);
      requireValue(provenance.examples.status === checked.status && provenance.examples.record === 'examples/generation.json', `${slug}: provenance status differs from generation evidence`);
      if (requireReady) requireValue(checked.status === 'ready', `${slug}: candidate is not ready`);
      results.push({ slug, status: checked.status, effect_calls: checked.attempts.length, cos_objects: checked.cosObjects.length });
    } else {
      requireValue(provenance.examples.status === 'draft' && !requireReady, `${slug}: ready evidence missing`);
      results.push({ slug, status: 'draft', effect_calls: 0, cos_objects: 0 });
    }
  }
  return { candidates: results, remote_gets: 0 };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { values } = parseArgs({ options: { root: { type: 'string' }, slug: { type: 'string', multiple: true }, 'require-ready': { type: 'boolean' } } });
  const root = values.root ? path.resolve(values.root) : path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  console.log(JSON.stringify(await validateUserCharacterCandidates(root, { ...(values.slug ? { slugs: values.slug } : {}), requireReady: values['require-ready'] ?? false }), null, 2));
}
