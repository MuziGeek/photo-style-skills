import { readFile, readdir, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse as parseYaml } from 'yaml';
import sharp from 'sharp';
import { recipeHash, safeFile, approved } from './scripts/examples.mjs';
import { validateCosExamples } from './scripts/external-examples.mjs';
import { groups as groupConfig, totalStyles, newBatch, cosOnlyBatches, assertAdaptation, sourceLicense, publicSource } from './scripts/catalog-config.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const errors = [];
const groups = new Map(groupConfig.map(group => [group.file, group.count]));
const required = ['slug', 'nameZh', 'nameEn', 'summaryZh', 'summaryEn', 'form', 'scene', 'sampleTitleZh', 'sampleTitleEn', 'samplePrompt', 'sampleAnalysis', 'mediumAnchor', 'fragments', 'preserve', 'negative', 'visualCuesZh', 'visualCuesEn', 'tags', 'palette', 'acceptanceZh', 'acceptanceEn', 'applicableScenes', 'geometryNoteZh', 'geometryNoteEn'];
const scenes = new Set(['portrait', 'group', 'landscape', 'food', 'night', 'product', 'object']);
const forms = new Set(['poster', 'painting', 'ink', 'craft', 'collage', 'card', 'mood', 'abstract']);
const fragmentKinds = new Set(['medium', 'palette', 'line', 'texture', 'lighting', 'composition', 'typography', 'detail', 'finish']);
const digest = data => createHash('sha256').update(data).digest('hex');
const read = file => readFile(path.join(root, file), 'utf8');
const check = (condition, message) => { if (!condition) errors.push(message); };
const exists = async file => { try { return (await stat(file)).isFile(); } catch { return false; } };
const equal = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const inside = (base, candidate) => { const relative = path.relative(base, candidate); return relative === '' || (!relative.startsWith('..' + path.sep) && relative !== '..' && !path.isAbsolute(relative)); };

async function checkReference(file, href, boundary = root) {
  if (/^(https?:|mailto:|#)/.test(href)) return;
  const target = path.resolve(path.dirname(path.join(root, file)), decodeURIComponent(href.split('#')[0]));
  check(inside(boundary, target), `${file}: reference escapes its portable folder: ${href}`);
  check(await exists(target), `${file}: missing relative reference ${href}`);
}

const rows = [];
for (const [file, count] of groups) {
  const data = JSON.parse(await read('data/' + file));
  check(Array.isArray(data) && data.length === count, `${file}: expected ${count} entries`);
  for (const row of data) rows.push({ ...row, groupFile: file });
}
check(rows.length === totalStyles && new Set(rows.map(row => row.slug)).size === totalStyles, `Expected exactly ${totalStyles} unique style slugs.`);
const index = JSON.parse(await read('index.json'));
check(index.count === totalStyles && index.styles?.length === totalStyles, `index.json must contain exactly ${totalStyles} styles.`);
check(new Set(index.styles.map(row => row.slug)).size === totalStyles, 'index.json contains duplicate slugs.');
const directories = (await readdir(path.join(root, 'skills'), { withFileTypes: true })).filter(entry => entry.isDirectory()).map(entry => entry.name).sort();
check(equal(directories, rows.map(row => row.slug).sort()), 'Skill folders do not match the source-data slugs.');
let fragments = 0;
let ready = 0;
let adaptedCount = 0;
let externalExamples = 0;
const allAttempts = [];
for (const row of rows) {
  const slug = row.slug;
  try { assertAdaptation(row); } catch(error) { errors.push(error.message); }
  for (const field of required) check(row[field] !== undefined && row[field] !== null, `${slug}: missing ${field}`);
  check(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug), `${slug}: invalid slug`);
  check(row.summaryZh.length >= 20 && row.summaryZh.length <= 90, `${slug}: Chinese summary must have 20–90 characters`);
  check(forms.has(row.form) && scenes.has(row.scene), `${slug}: invalid form or scene`);
  check(row.applicableScenes.length > 0 && row.applicableScenes.every(scene => scenes.has(scene)), `${slug}: invalid applicable scenes`);
  check(row.visualCuesZh.length === 3 && row.visualCuesEn.length === 3 && row.visualCuesZh.every(cue => cue.length <= 16), `${slug}: invalid visual cues`);
  check(row.acceptanceZh.length === 4 && row.acceptanceEn.length === 4, `${slug}: four bilingual acceptance criteria required`);
  check(row.palette.length === 3 && row.palette.every(color => /^#[0-9a-f]{6}$/i.test(color)), `${slug}: invalid palette`);
  for (const dimension of ['medium', 'texture', 'color', 'composition', 'subject', 'mood']) check(Array.isArray(row.tags[dimension]) && row.tags[dimension].length > 0, `${slug}: missing tag dimension ${dimension}`);
  const orders = new Set();
  for (const fragment of row.fragments) {
    fragments++;
    check(fragmentKinds.has(fragment.kind), `${slug}: invalid fragment kind ${fragment.kind}`);
    // Match the numeric insertion keys consumed by the site; intermediate keys retain frozen recipe hashes.
    check(Number.isInteger(fragment.order) && fragment.order > 0 && !orders.has(fragment.order), `${slug}: invalid or duplicate fragment order ${fragment.order}`);
    orders.add(fragment.order);
    check(fragment.text.length > 0 && fragment.text.length <= 200 && fragment.text.trim().split(/\s+/).length <= 25, `${slug}: fragment ${fragment.order} exceeds word or character limits`);
  }
  const folder = `skills/${slug}`;
  const skillPath = `${folder}/SKILL.md`;
  const skill = await read(skillPath);
  const frontmatter = skill.match(/^---\n([\s\S]*?)\n---\n/);
  check(Boolean(frontmatter), `${slug}: missing skill frontmatter`);
  const metadata = frontmatter ? parseYaml(frontmatter[1]) : {};
  check(metadata.name === slug && typeof metadata.description === 'string' && metadata.description.length > 30, `${slug}: invalid name or description`);
  check(!/\b(?:TODO|TBD|FIXME|placeholder|lorem ipsum)\b|待填写|待补充|占位文本/i.test(skill), `${slug}: unfinished scaffold marker`);
  check(skill.includes(row.geometryNoteZh) && skill.includes(row.geometryNoteEn), `${slug}: geometry instructions missing`);
  for (const rule of [...row.preserve, ...row.acceptanceZh, ...row.acceptanceEn]) check(skill.includes(rule), `${slug}: missing preservation or acceptance rule`);
  for (const match of skill.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) await checkReference(skillPath, match[1], path.join(root, folder));
  for (const match of skill.matchAll(/<img\s+[^>]*src="([^"]+)"/g)) await checkReference(skillPath, match[1], path.join(root, folder));
  check((await read(`${folder}/LICENSE`)).includes('Copyright (c) 2026 MuziGeek'), `${slug}: portable license missing`);
  const recipeText = await read(`${folder}/recipe.yaml`);
  const recipe = parseYaml(recipeText);
  check(recipe.style === slug && recipe.version === 1 && recipe.strength === (row.strength ?? (row.groupFile === 'photography.json' ? 'light' : 'strong')), `${slug}: recipe identity or strength mismatch`);
  check(recipe.model_family === 'codex-imagegen' && recipe.required_capability === 'image_edit' && recipe.aspect === '4:5', `${slug}: recipe capability mismatch`);
  check(recipe.source === undefined, `${slug}: original recipe must not assert a fabricated upstream source`);
  for (const [recipeField, dataField] of [['medium_anchor', 'mediumAnchor'], ['fragments', 'fragments'], ['preserve', 'preserve'], ['negative', 'negative']]) check(equal(recipe[recipeField], row[dataField]), `${slug}: recipe ${recipeField} diverges from source data`);
  const provenance = JSON.parse(await read(`${folder}/provenance.json`));
  const adapted = row.sourceProvenance?.type === 'adapted';
  check(provenance.style === slug && provenance.origin === (adapted ? 'adapted' : 'original') && provenance.type === provenance.origin && provenance.text_license === sourceLicense(row), `${slug}: provenance type or license mismatch`);
  if (adapted) {
    adaptedCount++;
    check(provenance.author === row.sourceProvenance.author && provenance.adapted_from.length === 1 && equal(provenance.adapted_from[0], publicSource(row.sourceProvenance)), `${slug}: adaptation attribution mismatch`);
    check(provenance.commit === row.sourceProvenance.commit && provenance.url === row.sourceProvenance.url && provenance.license_hash === row.sourceProvenance.license_hash, `${slug}: pinned source mismatch`);
    check(equal(provenance.modifications, row.sourceProvenance.modifications), `${slug}: modifications missing`);
    check(digest(await readFile(path.join(root, folder, 'LICENSE-THIRD-PARTY.txt'))) === row.sourceProvenance.license_hash, `${slug}: upstream license hash mismatch`);
    if (row.sourceProvenance.source_evidence) {
      const evidence = await safeFile(root, row.sourceProvenance.source_evidence);
      const evidenceText = await readFile(evidence, 'utf8');
      // Text evidence files have a final LF; source_text hashes the extracted passage itself.
      check(digest(evidenceText) === row.sourceProvenance.source_text_hash || (evidenceText.endsWith('\n') && digest(evidenceText.slice(0, -1)) === row.sourceProvenance.source_text_hash), `${slug}: selected prompt evidence hash mismatch`);
    }
    if (row.sourceProvenance.notice_text) check(digest(await readFile(path.join(root, folder, 'NOTICE-THIRD-PARTY.txt'))) === row.sourceProvenance.notice_hash, `${slug}: upstream NOTICE mismatch`);
    check(skill.includes(row.sourceProvenance.author) && recipeText.includes(row.sourceProvenance.author), `${slug}: upstream attribution missing from skill or recipe`);
  } else check(provenance.author === 'MuziGeek' && provenance.adapted_from.length === 0, `${slug}: false adaptation claim`);
  const entry = index.styles.find(item => item.slug === slug);
  check(Boolean(entry), `${slug}: missing index entry`);
  if (!entry) continue;
  check(['draft', 'ready'].includes(entry.status), `${slug}: invalid index status`);
  check(provenance.examples.status === entry.status, `${slug}: provenance and index status differ`);
  const sourcePreview = /^https:\/\//.test(entry.examples.source ?? '') ? entry.examples.source : 'examples/source.webp';
  const effectPreview = /^https:\/\//.test(entry.examples.effect ?? '') ? entry.examples.effect : 'examples/effect.webp';
  if (entry.examples.source) check(skill.includes(`<img src="${sourcePreview}"`) && skill.includes('width="240"'), `${slug}: directly visible source preview missing`);
  if (entry.examples.effect) check(skill.includes(`<img src="${effectPreview}"`), `${slug}: directly visible approved effect preview missing`);
  else check(!skill.includes('<img src="examples/effect.webp"') && skill.includes('No approved effect'), `${slug}: draft must show only an approved source and state the missing effect`);
  for (const file of [entry.skill, entry.recipe, entry.provenance, ...Object.values(entry.examples)]) await checkReference('index.json', file);
  let approvedPair = false;
  if (entry.examples.record) {
    const record = JSON.parse(await read(entry.examples.record));
    if (record.storage === 'cos' || record.schema_version === 2) {
      try {
        const result = validateCosExamples(record, slug, recipeText);
        approvedPair = result.status === 'ready';
        for (const kind of ['source', 'effect']) {
          check(entry.examples[kind] === result.files[kind] && provenance.examples[kind] === result.files[kind], `${slug}: COS example reference mismatch`);
        }
        externalExamples += record.images.length;
      } catch (error) { errors.push(error.message); }
      allAttempts.push(...(record.attempts ?? []));
    } else {
    check(!cosOnlyBatches.has(row.groupFile), `${slug}: new examples must use verified COS references`);
    check(record.style === slug && record.status === entry.status && record.synthetic_source === true, `${slug}: example metadata mismatch`);
    check(record.recipe_version === 1 && record.recipe_sha256_at_packaging === recipeHash(recipeText) && typeof record.recipe_execution_verified === 'boolean', `${slug}: packaged recipe context mismatch`);
    if (row.groupFile === newBatch && entry.status === 'ready') check(record.recipe_execution_verified === true, `${slug}: new ready examples require verified execution of this recipe`);
    check(Array.isArray(record.attempts) && record.attempts.length > 0, `${slug}: full generation attempts missing`);
    const calls = new Map((record.attempts ?? []).map(call => [call.call, call]));
    check(calls.size === record.attempts?.length, `${slug}: duplicate generation calls`);
    for (const call of record.attempts ?? []) {
      allAttempts.push(call);
      check(call.style === slug && ['source', 'effect'].includes(call.kind) && Number.isInteger(call.attempt) && call.attempt >= 0 && call.call === `${slug}:${call.kind}:${call.attempt}`, `${slug}: invalid call identity`);
      check(Number.isInteger(call.source_attempt) && call.source_attempt >= 0, `${call.call}: source attempt missing`);
      check(typeof call.prompt === 'string' && call.prompt.trim().length > 0 && /^[a-f0-9]{64}$/.test(call.prompt_sha256), `${call.call}: real prompt or checksum missing`);
      if (!call.prompt_redacted) check(digest(call.prompt) === call.prompt_sha256, `${call.call}: actual prompt hash mismatch`);
      check(call.tool === 'codex-imagegen' && call.provider_model === 'unknown' && Number.isInteger(call.duration_ms) && call.duration_ms >= 0 && Number.isFinite(Date.parse(call.created_at)), `${call.call}: generation metadata invalid`);
      const verifiedExecution = call.kind === 'effect' && call.recipe_execution_verified === true;
      check(call.recipe?.style === slug && call.recipe.version === 1 && call.recipe.sha256 === recipeHash(recipeText) && call.recipe.hash_scope === 'packaged-recipe-utf8-lf' && call.recipe.execution_verified === verifiedExecution, `${call.call}: recipe context fabricated or inconsistent`);
      if (verifiedExecution) check(call.recipe_sha256 === recipeHash(recipeText) && call.prompt.trim().length > 0, `${call.call}: verified execution lacks actual prompt or matching recipe hash`);
      check(['generated', 'failed'].includes(call.status), `${call.call}: invalid generation status`);
      if (call.status === 'generated') check(call.original && /^[a-f0-9]{64}$/.test(call.original.sha256) && call.original.width > 0 && call.original.height > 0 && call.original.bytes > 0, `${call.call}: original output checksum or dimensions missing`);
      if (call.review) check(['approved', 'rejected'].includes(call.review.decision) && call.review.reason?.trim() && call.review.reviewer?.trim() && Number.isFinite(Date.parse(call.review.reviewed_at)), `${call.call}: incomplete real review`);
      if (call.kind === 'effect') {
        const input = calls.get(`${slug}:source:${call.source_attempt}`);
        check(input?.original?.sha256 === call.source_sha256, `${call.call}: wrong actual input checksum`);
      }
      if (call.compressed) check(approved(call), `${call.call}: unapproved output was publicly packaged`);
    }
    const kinds = new Set();
    for (const image of record.images) {
      const file = path.join(root, folder, image.file);
      check(inside(path.join(root, folder), file) && await exists(file) && image.file === `examples/${image.kind}.webp`, `${slug}: compressed example file missing or unsafe`);
      if (await exists(file)) {
        await safeFile(path.join(root, folder), image.file);
        const bytes = await readFile(file), metadata = await sharp(bytes).metadata();
        check(digest(bytes) === image.sha256 && image.sha256 === image.compressed?.sha256, `${slug}: compressed example checksum mismatch`);
        check(metadata.width === 960 && metadata.height === 1200 && metadata.format === 'webp', `${slug}: expected 960x1200 WebP`);
        check(!metadata.exif && !metadata.xmp && !metadata.iptc && !metadata.icc && !metadata.orientation && image.compressed?.metadata_stripped === true, `${slug}: image metadata was retained`);
        check(bytes.length === image.compressed?.bytes && image.compressed?.width === metadata.width && image.compressed?.height === metadata.height, `${slug}: compressed dimensions/size metadata mismatch`);
      }
      check(approved(image) && calls.has(image.call) && equal(calls.get(image.call)?.compressed, image.compressed), `${slug}: published image lacks matching approved audit record`);
      check(image.compressed?.file === `${folder}/${image.file}`, `${slug}: compressed archive path mismatch`);
      check(!kinds.has(image.kind), `${slug}: duplicate packaged image kind`);
      kinds.add(image.kind);
    }
    const sourceImage = record.images.find(image => image.kind === 'source'), effectImage = record.images.find(image => image.kind === 'effect');
    check(record.recipe_execution_verified === Boolean(effectImage?.recipe?.execution_verified), `${slug}: selected effect and recipe execution evidence differ`);
    approvedPair = Boolean(sourceImage && effectImage && approved(sourceImage) && approved(effectImage) && effectImage.source_attempt === sourceImage.attempt && effectImage.source_sha256 === sourceImage.original.sha256);
    check(record.images.length === record.attempts.filter(call => call.compressed).length, `${slug}: compressed image omitted from public record`);
    const serialized = JSON.stringify(record);
    check(!/(?:^|["\s])[A-Z]:[\\/]|api[_-]?key|Bearer\s|originalPath/i.test(serialized), `${slug}: local path or credential-shaped metadata exposed`);
    }
  }
  if (cosOnlyBatches.has(row.groupFile)) {
    for (const file of await readdir(path.join(root, folder), { recursive: true })) check(!/\.(?:png|jpe?g|webp|avif|gif)$/i.test(file), `${slug}: new COS-only Skill bundles a local image: ${file}`);
  }
  check((entry.status === 'ready') === approvedPair, `${slug}: ready status does not match approved existing source/effect pair`);
  if (entry.status === 'ready') ready++;
}
check(adaptedCount === rows.filter(row => row.sourceProvenance?.type === 'adapted').length, 'Adaptation count mismatch.');
const ledger = JSON.parse(await read('docs/generation-ledger.json'));
check(ledger.schema_version === 1 && ledger.count === ledger.calls?.length && ledger.count === allAttempts.length && ledger.count === index.generation_calls, 'Global generation ledger count mismatch.');
check(new Set(ledger.calls.map(call => call.call)).size === ledger.count, 'Global ledger has duplicate calls.');
const globalCalls = new Map(ledger.calls.map(call => [call.call, call]));
for (const call of allAttempts) check(equal(globalCalls.get(call.call), call), `${call.call}: global/per-style audit mismatch`);
check(ledger.approved === ledger.calls.filter(call => call.review?.decision === 'approved').length && ledger.rejected === ledger.calls.filter(call => call.review?.decision === 'rejected').length && ledger.failed === ledger.calls.filter(call => call.status === 'failed').length, 'Ledger outcome counts mismatch.');
check(index.ready === ready && index.draft === rows.length - ready, 'Index ready/draft totals mismatch.');
for (const file of await readdir(path.join(root, 'skills'), { recursive: true })) check(!/\.png$/i.test(file), `Original PNG must not be bundled: ${file}`);
check(!/(?:^|["\s])[A-Z]:[\\/]|\/(?:Users|home)\/|api[_-]?key|Bearer\s|originalPath/i.test(JSON.stringify(ledger)), 'Ledger exposes local paths or credentials.');

for (const file of ['README.md', 'README.zh-CN.md', 'docs/limitations.md', 'THIRD_PARTY_NOTICES.md']) {
  const text = await read(file);
  check(!/\b(?:TODO|TBD|FIXME|lorem ipsum)\b|待填写|待补充/i.test(text), `${file}: unfinished content`);
  for (const match of text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) await checkReference(file, match[1]);
}
const research = JSON.parse(await read('docs/research-sources.json'));
check(Array.isArray(research) && research.some(source => source.repo === 'ailessonio/photo-style-prompts' && source.use === 'cyanotype-prompt-adaptation-only'), 'Pinned AILesson research evidence missing.');
check(research.every(source => typeof source.use === 'string' && source.use.trim()), 'Research records must distinguish research-only use from documented adaptation.');
check(!/(?:^|["\s])[A-Z]:[\\/]|api[_-]?key|Bearer\s|originalPath/i.test(JSON.stringify(research)), 'Research record exposes local paths or credentials.');
console.log(JSON.stringify({ styles: rows.length, original: rows.length - adaptedCount, adapted: adaptedCount, fragments, ready, draft: rows.length - ready, generation_calls: ledger.count, approved_examples: allAttempts.filter(call => call.compressed).length, external_examples_metadata_checked: externalExamples, remote_gets: 0, errors }, null, 2));
process.exitCode = errors.length ? 1 : 0;
