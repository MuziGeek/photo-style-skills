import { readFile, writeFile, mkdir, readdir, stat, realpath, unlink } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import sharp from 'sharp';

export const digest = bytes => createHash('sha256').update(bytes).digest('hex');
export const recipeHash = text => digest(text.toString().replace(/\r\n/g, '\n'));
const json = value => JSON.stringify(value, null, 2) + '\n';
const exists = async file => { try { return (await stat(file)).isFile(); } catch (error) { if (error.code === 'ENOENT') return false; throw error; } };
const inside = (root, file) => { const relative = path.relative(root, file); return relative === '' || (relative !== '..' && !relative.startsWith('..' + path.sep) && !path.isAbsolute(relative)); };

export async function safeFile(root, relative) {
  if (path.win32.isAbsolute(relative) || path.posix.isAbsolute(relative) || relative.split(/[\\/]/).includes('..')) throw new Error('Unsafe relative asset path');
  const base = await realpath(root), target = path.resolve(root, relative);
  if (!inside(path.resolve(root), target) || !inside(base, await realpath(target))) throw new Error('Asset escapes its assigned folder');
  return target;
}

export function sanitize(text) {
  return text.replace(/[A-Za-z]:[\\/][^\s"<>]+/g, '[local-path]').replace(/\/(?:Users|home|tmp)\/[^\s"<>]+/g, '[local-path]').replace(/Bearer\s+\S+/gi, '[redacted-authorization]').replace(/\bsk-[A-Za-z0-9_-]{16,}\b/g, '[redacted-key]');
}

export const approved = record => Boolean(record?.review?.decision === 'approved' && record.review.reason?.trim() && record.review.reviewer?.trim() && Number.isFinite(Date.parse(record.review.reviewed_at)));

export function selectPair(records) {
  const source = records.filter(record => record.kind === 'source' && record.status === 'generated' && record.original && approved(record)).sort((a, b) => a.attempt - b.attempt).at(-1);
  const effect = source && records.filter(record => record.kind === 'effect' && record.source_attempt === source.attempt && record.status === 'generated' && record.original && approved(record)).sort((a, b) => a.attempt - b.attempt).at(-1);
  return { source, effect, status: source && effect ? 'ready' : 'draft' };
}

export async function loadGeneration(root, known) {
  const records = [];
  for (const file of (await readdir(root)).filter(file => /-(source|effect)-\d+\.json$/.test(file)).sort()) {
    const match = file.match(/^([a-z0-9]+(?:-[a-z0-9]+)*)-(source|effect)-(\d+)\.json$/);
    const raw = JSON.parse(await readFile(await safeFile(root, file), 'utf8'));
    if (!match || !known.has(match[1]) || raw.id !== match[1] || raw.kind !== match[2] || raw.attempt !== Number(match[3])) throw new Error(`Invalid generation identity: ${file}`);
    if (typeof raw.prompt !== 'string' || !raw.prompt.trim() || !Number.isInteger(raw.duration_ms) || raw.duration_ms < 0 || !Number.isFinite(Date.parse(raw.created_at)) || raw.tool !== 'codex-imagegen' || !['generated', 'failed'].includes(raw.status)) throw new Error(`Incomplete generation record: ${file}`);
    const inputAttempt = raw.kind === 'effect' ? (raw.source_attempt ?? 0) : raw.attempt;
    if (!Number.isInteger(inputAttempt) || inputAttempt < 0) throw new Error(`Invalid source attempt: ${file}`);
    let original = null, imagePath;
    for (const extension of ['png', 'webp', 'jpg', 'jpeg']) {
      const relative = `images/${raw.id}-${raw.kind}-${raw.attempt}.${extension}`;
      if (!await exists(path.join(root, relative))) continue;
      imagePath = await safeFile(root, relative);
      const bytes = await readFile(imagePath), metadata = await sharp(bytes).metadata();
      original = { file: relative, sha256: digest(bytes), bytes: bytes.length, width: metadata.width, height: metadata.height, format: metadata.format };
      break;
    }
    if (raw.status === 'generated' && !original) throw new Error(`Generated image missing: ${file}`);
    const review = raw.visual_review ?? raw.review;
    const prompt = sanitize(raw.prompt);
    let analysis = null;
    const names = [`${raw.id}-source-${inputAttempt}.analysis.txt`, ...(inputAttempt === 0 ? [`${raw.id}-analysis.txt`] : [])];
    for (const name of names) if (await exists(path.join(root, name))) { analysis = sanitize((await readFile(await safeFile(root, name), 'utf8')).trim()); break; }
    records.push({
      call: `${raw.id}:${raw.kind}:${raw.attempt}`, style: raw.id, kind: raw.kind, attempt: raw.attempt,
      source_attempt: inputAttempt, status: raw.status, prompt, prompt_sha256: digest(raw.prompt), prompt_redacted: prompt !== raw.prompt,
      created_at: raw.created_at, duration_ms: raw.duration_ms, tool: 'codex-imagegen', provider_model: 'unknown',
      review: review ? { decision: review.decision, reason: sanitize(review.reason ?? ''), reviewer: sanitize(review.reviewer ?? ''), reviewed_at: review.reviewed_at ?? null } : null,
      original, source_sha256: null, compressed: null, actual_source_analysis: analysis,
      ...(raw.status === 'failed' ? { error: sanitize(String(raw.error ?? 'Generation failed; no further error detail recorded.')) } : {}),
      imagePath,
    });
  }
  for (const record of records.filter(record => record.kind === 'effect')) {
    const source = records.find(source => source.style === record.style && source.kind === 'source' && source.attempt === record.source_attempt);
    if (!source?.original) throw new Error(`${record.call}: referenced source image is missing`);
    record.source_sha256 = source.original.sha256;
  }
  return records;
}

export async function compressExample(input, output) {
  const bytes = await readFile(input);
  // fit:contain preserves the complete composition, including subpixel ratio differences.
  const compressed = await sharp(bytes).rotate().resize({ width: 960, height: 1200, fit: 'contain', withoutEnlargement: true, background: '#f5f4f1' }).webp({ quality: 82, effort: 5 }).toBuffer();
  const metadata = await sharp(compressed).metadata();
  if (metadata.exif || metadata.xmp || metadata.iptc || metadata.icc || metadata.orientation) throw new Error('Compressed example retains metadata');
  await mkdir(path.dirname(output), { recursive: true });
  await writeFile(output, compressed);
  return { sha256: digest(compressed), bytes: compressed.length, width: metadata.width, height: metadata.height, format: 'webp', metadata_stripped: true, fit: 'contain', quality: 82 };
}

/** Delete only explicitly enumerated old example images within this exact style folder. */
export async function cleanStaleExamples(folder, keep) {
  const examples = path.join(folder, 'examples');
  let files;
  try { files = await readdir(examples); } catch (error) { if (error.code === 'ENOENT') return []; throw error; }
  const removed = [];
  for (const name of files) {
    if (!/\.(?:png|jpe?g|webp)$/i.test(name) || keep.has(`examples/${name}`)) continue;
    const target = await safeFile(folder, `examples/${name}`);
    if (path.dirname(target) !== path.resolve(examples)) throw new Error('Refusing to remove an asset outside this example directory');
    await unlink(target); removed.push(`examples/${name}`);
  }
  return removed;
}

export async function packageExamples(row, folder, recipeText, allRecords) {
  const hash = recipeHash(recipeText);
  const records = allRecords.filter(record => record.style === row.slug);
  const selected = selectPair(records);
  const files = { record: 'examples/generation.json' };
  const images = [];
  for (const record of [selected.source, selected.effect].filter(Boolean)) {
    if (!record.actual_source_analysis) throw new Error(`${record.call}: actual source analysis is required before publishing an example`);
    const file = `examples/${record.kind}.webp`;
    const compressed = { file, ...await compressExample(record.imagePath, path.join(folder, file)) };
    record.compressed = { ...compressed, file: `skills/${row.slug}/${file}` };
    files[record.kind] = file;
  }
  const attempts = records.map(({ imagePath: _privatePath, ...record }) => ({
    ...record,
    recipe: { style: row.slug, version: 1, sha256: hash, hash_scope: 'packaged-recipe-utf8-lf', execution_verified: false },
  }));
  for (const kind of ['source', 'effect']) {
    const selectedRecord = attempts.find(record => record.kind === kind && record.compressed);
    if (selectedRecord) images.push({ ...selectedRecord, file: files[kind], sha256: selectedRecord.compressed.sha256 });
  }
  await mkdir(path.join(folder, 'examples'), { recursive: true });
  await writeFile(path.join(folder, files.record), json({
    style: row.slug, status: selected.status, synthetic_source: true,
    recipe_version: 1, recipe_sha256_at_packaging: hash, recipe_execution_verified: false,
    note: 'Actual prompts and input/output checksums are preserved. The recipe checksum identifies the packaged v1 recipe; historical calls did not attest execution of this exact recipe hash. Original images are not bundled. Only approved selected examples are compressed and published; all other attempts remain audit records.',
    images, attempts,
  }));
  const removed = await cleanStaleExamples(folder, new Set(Object.values(files)));
  return { status: selected.status, files, attempts, removed };
}

export async function reuseExamples(row, folder, recipeText) {
  const file = path.join(folder, 'examples/generation.json');
  if (!await exists(file)) throw new Error(`${row.slug}: supply --generation to build examples initially`);
  const record = JSON.parse(await readFile(file, 'utf8'));
  if (record.recipe_sha256_at_packaging !== recipeHash(recipeText) || !Array.isArray(record.attempts)) throw new Error(`${row.slug}: packaged examples do not match the recipe; supply --generation`);
  const files = { record: 'examples/generation.json' };
  for (const image of record.images) {
    if (!approved(image) || digest(await readFile(await safeFile(folder, image.file))) !== image.sha256) throw new Error(`${row.slug}: approved compressed example verification failed`);
    files[image.kind] = image.file;
  }
  const expected = files.source && files.effect ? 'ready' : 'draft';
  if (record.status !== expected) throw new Error(`${row.slug}: packaged example status is inconsistent`);
  return { status: record.status, files, attempts: record.attempts, removed: [] };
}
