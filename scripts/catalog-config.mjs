import { createHash } from 'node:crypto';

export const groups = [
  { file: 'oriental.json', count: 12, en: 'Eastern painting and print methods', zh: '东方绘画与版画' },
  { file: 'material-abstract.json', count: 18, en: 'Material and abstract interpretations', zh: '材质与抽象转译' },
  { file: 'photography.json', count: 10, en: 'Photographic processes and light', zh: '摄影工艺与光影' },
  { file: 'curated-20261109.json', count: 30, en: 'Curated photograph transformations', zh: '精选照片重绘' },
  { file: 'recent-20261110.json', count: 80, en: 'Recent photograph restyling methods', zh: '近期照片重绘方法' },
  { file: 'artistic-20261110.json', count: 30, en: 'Licensed artistic photo transformations', zh: '授权艺术照片重绘' },
  { file: 'xiaohongshu-20261110.json', count: 30, en: 'Xiaohongshu-researched photo transformations', zh: '小红书研究风格重绘' },
  { file: 'douyin-travel-20261113.json', count: 7, en: 'Douyin-researched travel photo layouts', zh: '抖音研究旅行照片版式', researchRecord: 'docs/douyin-travel-research-20261113.json' },
  { file: 'douyin-design-eight-20261113.json', count: 8, en: 'Eight Douyin-researched photo design methods', zh: '抖音研究照片设计八法', researchRecord: 'docs/douyin-design-eight-research-20261113.json' },
  { file: 'douyin-torn-paper-20261113.json', count: 1, en: 'Photographic torn-paper poster', zh: '摄影撕纸海报', researchRecord: 'docs/douyin-torn-paper-research-20261113.json' },
];
export const totalStyles = groups.reduce((sum, group) => sum + group.count, 0);
export const newBatch = 'douyin-design-eight-20261113.json';
export const cosOnlyBatches = new Set(['recent-20261110.json', 'artistic-20261110.json', 'xiaohongshu-20261110.json', 'douyin-travel-20261113.json', 'douyin-torn-paper-20261113.json', newBatch]);
export const supportedLicenses = new Set(['MIT', 'CC-BY-4.0', 'Apache-2.0']);

export function sourceLicense(row) {
  return row.sourceProvenance?.type === 'adapted' ? row.sourceProvenance.license ?? 'MIT' : 'MIT';
}

export function assertAdaptation(row) {
  const source = row.sourceProvenance;
  if (!source || source.type !== 'adapted') return;
  if (!supportedLicenses.has(source.license)) throw new Error(`${row.slug}: unsupported source license`);
  if (!source.author?.trim() || !/^https:\/\//.test(source.url) || !/^[a-f0-9]{40}$/.test(source.commit) || !/^[a-f0-9]{64}$/.test(source.license_hash)) throw new Error(`${row.slug}: incomplete pinned adaptation source`);
  if (!Array.isArray(source.modifications) || !source.modifications.length || source.modifications.some(change => typeof change !== 'string' || !change.trim())) throw new Error(`${row.slug}: adaptation modifications are required`);
  if (source.source_text_hash !== undefined && !/^[a-f0-9]{64}$/.test(source.source_text_hash)) throw new Error(`${row.slug}: invalid source text hash`);
  if (source.source_text !== undefined && (typeof source.source_text !== 'string' || createHash('sha256').update(source.source_text).digest('hex') !== source.source_text_hash)) throw new Error(`${row.slug}: adopted source text hash mismatch`);
  if (source.license_text !== undefined && (typeof source.license_text !== 'string' || source.license_text.trim().length < 100)) throw new Error(`${row.slug}: complete upstream license text is required`);
  if (source.license_text !== undefined && createHash('sha256').update(source.license_text).digest('hex') !== source.license_hash) throw new Error(`${row.slug}: embedded license hash mismatch`);
  if (source.notice_text !== undefined && (typeof source.notice_text !== 'string' || !source.notice_text.trim() || !/^[a-f0-9]{64}$/.test(source.notice_hash) || createHash('sha256').update(source.notice_text).digest('hex') !== source.notice_hash)) throw new Error(`${row.slug}: upstream NOTICE hash mismatch`);
}

export function publicSource(source) {
  const { license_text: _embeddedLicense, notice_text: _embeddedNotice, ...metadata } = source;
  return metadata;
}

