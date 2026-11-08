import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, readdir, rm, symlink } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import sharp from 'sharp';
import { compressExample, cleanStaleExamples, selectPair, loadGeneration, packageExamples, digest } from './examples.mjs';

const review = { decision: 'approved', reason: 'Actual review.', reviewer: 'Actual reviewer', reviewed_at: '2026-11-08T12:00:00Z' };
const source = (attempt, decision = 'approved') => ({ style: 'study', kind: 'source', attempt, status: 'generated', original: {}, review: { ...review, decision } });
const effect = (attempt, sourceAttempt, decision = 'approved') => ({ style: 'study', kind: 'effect', attempt, source_attempt: sourceAttempt, status: 'generated', original: {}, review: { ...review, decision } });
async function temporary(run) { const dir = await mkdtemp(path.join(os.tmpdir(), 'photo-examples-')); try { await run(dir); } finally { await rm(dir, { recursive: true, force: true }); } }

test('selects the latest approved source and excludes old-source or rejected effects', () => {
  const records = [source(0), effect(0, 0), source(1), effect(1, 1, 'rejected'), effect(2, 1)];
  assert.equal(selectPair(records).source.attempt, 1);
  assert.equal(selectPair(records).effect.attempt, 2);
  assert.equal(selectPair(records.slice(0, -1)).status, 'draft');
});

test('compresses to metadata-free WebP without cropping', () => temporary(async dir => {
  const input = path.join(dir, 'source.png'), output = path.join(dir, 'source.webp');
  await sharp({ create: { width: 1000, height: 1000, channels: 3, background: '#ff0000' } }).withMetadata().png().toFile(input);
  const result = await compressExample(input, output);
  const outputBytes = await readFile(output);
  const metadata = await sharp(outputBytes).metadata();
  assert.equal(metadata.width, 960); assert.equal(metadata.height, 1200);
  assert.equal(metadata.exif, undefined); assert.equal(metadata.icc, undefined);
  assert.equal(result.sha256, digest(await readFile(output)));
  const pixels = await sharp(outputBytes).raw().toBuffer({ resolveWithObject: true });
  const center = (600 * 960 + 480) * pixels.info.channels;
  assert.ok(pixels.data[center] > 220 && pixels.data[center + 1] < 30);
  assert.ok(pixels.data[0] > 230 && pixels.data[1] > 230); // containment margin, not a crop
}));

test('retains failed/rejected calls and real prompts while publishing only an approved source', () => temporary(async dir => {
  const generation = path.join(dir, 'generation'), folder = path.join(dir, 'skills/study');
  await mkdir(path.join(generation, 'images'), { recursive: true }); await mkdir(path.join(folder, 'examples'), { recursive: true });
  for (const [kind, attempt, status, decision] of [['source', 0, 'generated', 'approved'], ['effect', 0, 'generated', 'rejected'], ['effect', 1, 'failed', null]]) {
    const file = `study-${kind}-${attempt}`;
    await writeFile(path.join(generation, file + '.json'), JSON.stringify({ id: 'study', kind, attempt, source_attempt: 0, status, prompt: `Actual ${file} prompt.`, duration_ms: 1234, created_at: '2026-11-08T11:00:00Z', tool: 'codex-imagegen', originalPath: 'C:/Users/private/output.png', visual_review: decision ? { ...review, decision } : null, error: status === 'failed' ? 'Tool failed.' : undefined }));
    if (status === 'generated') await sharp({ create: { width: 1024, height: 1280, channels: 3, background: kind === 'source' ? 'red' : 'blue' } }).png().toFile(path.join(generation, 'images', file + '.png'));
  }
  await writeFile(path.join(generation, 'study-source-0.analysis.txt'), 'One actual object.');
  await writeFile(path.join(folder, 'examples/effect.png'), 'old export');
  const records = await loadGeneration(generation, new Set(['study']));
  assert.equal(records.length, 3);
  assert.equal(records[0].provider_model, 'unknown');
  const result = await packageExamples({ slug: 'study' }, folder, 'style: study\nversion: 1\n', records);
  assert.equal(result.status, 'draft'); assert.equal(result.files.effect, undefined);
  const record = JSON.parse(await readFile(path.join(folder, 'examples/generation.json')));
  assert.equal(record.images.length, 1); assert.equal(record.attempts.length, 3);
  assert.ok(record.attempts.every(attempt => attempt.prompt.startsWith('Actual ')));
  const rejected = record.attempts.find(attempt => attempt.kind === 'effect' && attempt.attempt === 0);
  assert.equal(rejected.source_sha256, record.images[0].original.sha256);
  assert.equal(rejected.compressed, null);
  assert.ok(!JSON.stringify(record).includes('private'));
  assert.ok(!(await readdir(path.join(folder, 'examples'))).includes('effect.png'));
}));

test('never deletes outside an assigned example folder through a symlink', () => temporary(async dir => {
  const folder = path.join(dir, 'style'), outside = path.join(dir, 'outside');
  await mkdir(folder); await mkdir(outside); await writeFile(path.join(outside, 'source.png'), 'keep');
  await symlink(outside, path.join(folder, 'examples'), 'junction');
  await assert.rejects(cleanStaleExamples(folder, new Set()), /escapes/);
  assert.equal(await readFile(path.join(outside, 'source.png'), 'utf8'), 'keep');
}));
