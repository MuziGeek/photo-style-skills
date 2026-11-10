import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { stringify as yamlStringify } from 'yaml';
import { parseArgs } from 'node:util';
import { loadGeneration, prepareExamples } from './examples.mjs';
import { groups, totalStyles, newBatch, cosOnlyBatches, assertAdaptation, sourceLicense, publicSource } from './catalog-config.mjs';

const destination = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const scenes = { portrait: ['Portrait', '人像'], group: ['Group', '合影'], landscape: ['Landscape', '风景'], food: ['Food', '美食'], night: ['Night', '夜景'], product: ['Product', '产品'], object: ['Object', '器物'] };
const digest = value => createHash('sha256').update(value).digest('hex');
const json = value => JSON.stringify(value, null, 2) + '\n';
const exists = async file => { try { return (await stat(file)).isFile(); } catch (error) { if (error.code === 'ENOENT') return false; throw error; } };
const write = async (file, text) => { await mkdir(path.dirname(file), { recursive: true }); await writeFile(file, text, 'utf8'); };
const bullet = rows => rows.map(row => '- ' + row).join('\n');
const tableText = value => String(value).replaceAll('|', '\\|').replaceAll('\n', ' ');
const license = `MIT License

Copyright (c) 2026 MuziGeek

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;

export async function loadData(root = destination) {
  const entries = [];
  for (const group of groups) {
    const rows = JSON.parse(await readFile(path.join(root, 'data', group.file), 'utf8'));
    if (!Array.isArray(rows) || rows.length !== group.count) throw new Error(`${group.file}: expected ${group.count} complete styles; found ${rows.length}. Finish source data before building.`);
    for (const row of rows) entries.push({ ...row, group });
  }
  if (entries.length !== totalStyles || new Set(entries.map(row => row.slug)).size !== totalStyles) throw new Error(`Exactly ${totalStyles} unique styles are required.`);
  for (const row of entries) {
    assertAdaptation(row);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(row.slug)) throw new Error(`Unsafe style slug: ${row.slug}`);
    if (!row.fragments?.length || row.fragments.some(fragment => fragment.text.length > 200 || fragment.text.trim().split(/\s+/).length > 25)) throw new Error(`${row.slug}: invalid recipe fragment length.`);
  }
  return entries;
}

export function makeRecipe(row) {
  return {
    style: row.slug,
    version: 1,
    strength: row.strength ?? (row.group.file === 'photography.json' ? 'light' : 'strong'),
    model_family: 'codex-imagegen',
    required_capability: 'image_edit',
    medium_anchor: row.mediumAnchor,
    preserve: row.preserve,
    fragments: row.fragments,
    aspect: '4:5',
    negative: row.negative,
  };
}

export function makeRecipeText(row) {
  const adapted = row.sourceProvenance?.type === 'adapted';
  return (adapted ? `# Adapted from ${row.sourceProvenance.author}; ${sourceLicense(row)}.\n# Source: ${row.sourceProvenance.url}\n# Original copyright and complete license: LICENSE-THIRD-PARTY.txt.\n# Modifications and attribution: provenance.json.\n` : '# Original recipe; provenance is recorded separately. No upstream commit is asserted.\n') + yamlStringify(makeRecipe(row), { lineWidth: 0 });
}

function skillMarkdown(row, examples) {
  const adapted = row.sourceProvenance?.type === 'adapted';
  const metadata = yamlStringify({
    name: row.slug,
    description: `Restyle a supplied photograph as ${row.nameEn.toLowerCase()} / ${row.nameZh}. Use for this specific visual method while preserving observed subjects and structure.`,
  }, { lineWidth: 0 }).trimEnd();
  const exampleLines = [];
  if (examples.files.source) exampleLines.push(`- [AI source / AI 合成原图](${examples.files.source})`);
  if (examples.files.effect) exampleLines.push(`- [Generated interpretation / 生成效果](${examples.files.effect})`);
  if (examples.files.record) exampleLines.push(`- [Generation and visual review / 生成与视觉审核记录](${examples.files.record})`);
  const preview = examples.files.source ? `| AI 合成原图 · Source | 通过审核的效果 · Approved effect |\n| --- | --- |\n| <img src="${examples.files.source}" alt="AI-generated source" width="240"> | ${examples.files.effect ? `<img src="${examples.files.effect}" alt="Approved generated interpretation" width="240">` : '**尚无通过审核的效果图 / No approved effect**'} |` : '';
  return `---
${metadata}
---

# ${row.nameZh} · ${row.nameEn}

${row.summaryZh}

${row.summaryEn}

${adapted ? `本方法改编自 ${row.sourceProvenance.author} 的 ${sourceLicense(row)} 授权说明。原作者归属、来源与改动见 [provenance.json](provenance.json)，完整上游许可及其版权声明见 [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt)。\n\nAdapted from ${row.sourceProvenance.author}'s ${sourceLicense(row)}-licensed instructions. [provenance.json](provenance.json) records the original author, pinned source and modifications; [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt) retains the complete upstream license and copyright notices.` : '原创方法说明，由 MuziGeek 编写；没有声称改编自外部提示词。\n\nOriginal method instructions authored by MuziGeek; no external prompt adaptation is asserted.'}

${adapted && (row.sourceProvenance.copyright || row.sourceProvenance.attribution) ? `原始归属 · Original attribution: ${row.sourceProvenance.copyright ?? ''} ${row.sourceProvenance.attribution ?? ''}` : ''}

## 输入分析与实际保留

1. 读取用户提供的原图；若没有可用图片，先请求图片。不要用本仓库示例代替用户输入。
2. 观察原图主体、身份、数量、连接、遮挡、光线和画幅。依据本 Skill 的保留约束与几何边界，区分需要保留及明确允许转化的部分。样片说明不能当作用户输入的事实。
3. 使用支持参考图编辑的可用工具，把原图作为编辑输入。先说明观察到的主体，再结合下方机制及 [recipe.yaml](recipe.yaml) 按顺序组合指令；工具名称不是必须安装的依赖。
4. 默认沿用原图比例；仅按用户要求及本 Skill 明确写出的构图或几何转化调整。配方的 4:5 是目录样片比例，不授权裁去必须保留的主体。
5. 对照输入检查结果；只修正发现的问题，不为了增强风格改变身份或添加无关景物。区分已完成的视觉检查与尚未验证的效果。

## Input analysis and preservation

1. Inspect the supplied image; request an image only when none is available. Never substitute a repository example for the user's input.
2. Inspect the real subjects, identity, counts, attachments, overlaps, light and framing. Distinguish preserved attributes from explicitly permitted transformations using this Skill’s preservation and geometry rules; sample descriptions are not facts about user input.
3. Use an available reference-image editing tool. Combine the observed facts with the ordered mechanisms in [recipe.yaml](recipe.yaml); its model-family label does not require an installation script.
4. Keep the input ratio by default; change composition or geometry only as requested by the user and expressly permitted below. The recipe’s 4:5 ratio is a catalog-sample default, not permission to crop protected subjects.
5. Compare output with input and correct observed failures. Report only visual checks actually completed; stronger styling must not override identity or scene integrity.

## 风格机制 · Style mechanism

- ${row.summaryZh}
- 识别特征：${row.visualCuesZh.join('、')}。
- Medium anchor: ${row.mediumAnchor}

${row.fragments.map(fragment => `${fragment.order}. **${fragment.kind}** — ${fragment.text}`).join('\n')}

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

${bullet(row.preserve)}

## 适用范围与几何边界 · Applicability and geometry

- 适用：${row.applicableScenes.map(scene => scenes[scene][1]).join('、')}。
- Applies to: ${row.applicableScenes.map(scene => scenes[scene][0]).join(', ')}.
- ${row.geometryNoteZh}
- ${row.geometryNoteEn}
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

${bullet(row.negative)}

## 验收 · Acceptance

${row.acceptanceZh.map((text, index) => `- ${text}\n  ${row.acceptanceEn[index]}`).join('\n')}

## 配方、来源与许可 · Recipe, provenance and license

- [recipe.yaml](recipe.yaml): structured image-editing recipe / 结构化图像编辑配方。
- [provenance.json](provenance.json): original authorship, method context and example status / 原创归属、方法背景与示例状态。
- [LICENSE](LICENSE): MIT applies to MuziGeek's original contributions / MIT 适用于 MuziGeek 的原创贡献。${adapted ? `\n- [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt): ${row.sourceProvenance.author} · ${sourceLicense(row)}. Adapted material retains these terms and attribution / 改编材料保留原许可和归属。${row.sourceProvenance.notice_text ? '\n- [NOTICE-THIRD-PARTY.txt](NOTICE-THIRD-PARTY.txt): complete original upstream NOTICE / 完整上游 NOTICE。' : ''}` : ''}
- 示例中的前后图均为 AI 合成，不是真人摄影或真实制作工艺的证据。结果会随模型与输入变化，不承诺相同输出。
- Example before/after images are AI-generated, not photographs of real people or evidence of physical craft production. Results vary by model and input.
- MIT 不授予用户输入、第三方作品、人物、商标或生成平台条款之外的权利；示例许可单独见 provenance。
- MIT grants no rights to user inputs, third-party works, likenesses or trademarks, and does not override generation-service terms; example terms are recorded separately in provenance.

## 示例状态 · Example status

${examples.status === 'ready' ? 'ready：原图与效果图的真实生成及视觉审核记录齐全；COS 外链示例另保留上传回读凭证，不在仓库保存图片。ready 不代表网站已发布；公开媒体白名单发布前，图片链接可能返回 404。\n\nready: the source and effect have recorded real generation and approved visual reviews. COS-hosted examples also retain upload readback receipts; their image bytes are not bundled. Ready does not mean the website is released; image links may return 404 until the public media allowlist is published.' : 'draft：模板说明已编写；完整前后图的视觉验收尚未全部通过或记录齐全，不公开未通过的效果图。\n\ndraft: No approved effect is published. The instructions are authored, but a complete before/after pair has not yet passed or recorded all required visual reviews.'}

${preview}

${exampleLines.length ? exampleLines.join('\n') : '尚无通过审核的效果图；当前不打包示例图片。\n\nNo approved effect; no example images are packaged yet.'}
`;
}

function readme(entries, language, rows) {
  const zh = language === 'zh';
  const ready = entries.filter(entry => entry.status === 'ready').length;
  const batch = entries.filter(entry => entry.group === newBatch);
  const batchReady = batch.filter(entry => entry.status === 'ready').length;
  const batchRows = rows.filter(row => row.group.file === newBatch);
  const adapted = batchRows.filter(row => row.sourceProvenance?.type === 'adapted');
  const allMit = adapted.every(row => sourceLicense(row) === 'MIT');
  const batchNote = zh
    ? `本次新增 ${batch.length} 个 Skill，其中 ${batchReady} 个示例为 ready、${batch.length - batchReady} 个为 draft；此前 ${entries.length - batch.length} 个 Skill 的文件保持原样。新增内容包括 ${adapted.length} 个${allMit ? ' MIT 许可' : '经过许可核验的'}改编与 ${batchRows.length - adapted.length} 个独立编写的研究扩展。2026 年固定仓库快照用于近期来源核查，不表示每条提示词在快照日期首次发表，也不将这批内容声称为全新发表的第三方提示词。失败或被拒绝的生成尝试保留审核记录；新图片只通过 COS 外链提供。ready 只表示生成、审核与上传回读凭证齐全，不表示网站已发布；公开媒体白名单发布前，规范图片链接可能返回 404，发布前审核使用项目外的临时鉴权页面。`
    : `This batch adds ${batch.length} Skills: ${batchReady} examples are ready and ${batch.length - batchReady} are draft. The previous ${entries.length - batch.length} Skill folders remain unchanged. It contains ${adapted.length} ${allMit ? 'MIT-licensed ' : 'licensed '}adaptations and ${batchRows.length - adapted.length} independently authored research extensions. Pinned 2026 repository snapshots support recent source research; their dates do not establish when each prompt first appeared, and this is not a claim of newly published third-party prompts. Failed or rejected attempts retain their audit records; new images are provided only through COS links. Ready means generation, visual review and upload readback evidence are complete, not that the website is released. Canonical image links may return 404 until the public media allowlist is published; prerelease review uses a temporary authenticated page outside the repository.`;
  const sections = groups.map(group => {
    const table = entries.filter(entry => entry.group === group.file).map(entry => `| [${tableText(zh ? entry.nameZh : entry.nameEn)}](${entry.skill}) | ${tableText(zh ? entry.summaryZh : entry.summaryEn)} | ${entry.status} |`).join('\n');
    return `## ${zh ? group.zh : group.en}\n\n| ${zh ? '风格' : 'Style'} | ${zh ? '方法' : 'Method'} | ${zh ? '示例状态' : 'Example status'} |\n| --- | --- | --- |\n${table}`;
  }).join('\n\n');
  if (zh) return `# 照片风格模板集

[English](README.md)

${entries.length} 个可独立复制的照片编辑 Skill，涵盖原创说明与经过许可核验的改编方法；每条明确记录原作者、固定来源、许可和修改。每个目录包含双语流程、结构化配方、保留约束与验收标准。当前 ${ready} 个示例为 ready，${entries.length - ready} 个为 draft；状态反映示例审核，不表示服务上线或结果保证。

## 安装与使用

1. 从下方目录选择风格，复制整个 skills 内对应风格文件夹到你的 Skill 目录（例如 ~/.codex/skills）。保留同目录的 SKILL.md、recipe.yaml、provenance.json 和 LICENSE；无需运行脚本、安装依赖或配置 API 密钥。
2. 在支持 Skill 与参考图编辑的助手中选用该风格，并提供你有权编辑的照片。其他助手也可以直接阅读 SKILL.md 与 recipe.yaml。
3. 先让助手核对原图，再执行风格转译，并依据目录内验收标准检查结果。支持何种生图模型由你的环境决定。

默认保护原图身份、主体数量、结构和画幅；具体风格允许的几何变化写在各 Skill 中。示例原图和效果图均为 AI 合成，不是真人实拍。不同模型、参数和图片不会保证得到相同结果。

## 状态与许可

只有原图与效果图均有真实生成及通过的视觉审核记录，且本地文件校验或 COS 回读凭证一致时才标 ready；新批次还必须绑定实际执行的配方哈希。缺图、缺审核或未通过则为 draft。[完整索引](index.json) 列出机器可读状态；离线校验不等同于重新请求远程图片。

原创贡献与仓库维护文件适用 [MIT](LICENSE)，版权声明为 2026 MuziGeek。改编方法保留原作者声明及 MIT、CC BY 4.0 或 Apache 2.0 等对应条款，见 [第三方声明](THIRD_PARTY_NOTICES.md)。生成示例不以 MIT 文本许可替代生成平台条款，也不授予人物、商标、第三方输入或参考作品的权利。详见 [限制与素材说明](docs/limitations.md) 和 [固定版本研究记录](docs/research-sources.json)；每个 Skill 的 provenance.json 区分原创与适配。研究资料是否采用，以各条目固定来源、明确许可及改编记录为准。

${batchNote}

${sections}

## 维护

data 下的 ${groups.length} 个 JSON 是内容真源。维护者安装固定版本依赖后，可运行 npm run build，从已有示例记录重建文档与索引。此前 ${entries.length - batch.length} 个 Skill 保持冻结；新增 ${newBatch} 批次只接受 COS 外链及真实上传回读凭证，不将原图、重绘图或缩略图写入仓库。先将图上传并核验，再写入各 Skill 的 examples/generation.json；未齐全时保持 draft。外链使用去元数据的 960×1200 WebP，以 contain 缩放保留完整画面。npm run validate 离线检查配方、真实提示词、审核、对象路径及回读凭证的一致性，不会执行 COS GET；线上图片访问另行验收。npm test 覆盖增量构建、旧文件字节保护与外链校验。全部调用见 [生成记录总表](docs/generation-ledger.json)。构建器不调用生图服务，也不包含供应商配置或密钥；使用 Skill 本身无需维护命令。
`;
  return `# Photo Style Templates

[简体中文](README.zh-CN.md)

${entries.length} independently copyable photo-editing Skills, including original instructions and licensed adaptations with per-entry authorship, pinned sources, license terms and modifications. Each folder includes bilingual workflow instructions, a structured recipe, preservation rules and acceptance criteria. ${ready} examples are ready and ${entries.length - ready} are draft; status describes example review, not a live service or guaranteed output.

## Install and use

1. Choose a style below and copy its whole folder from skills into your Skill directory, such as ~/.codex/skills. Keep SKILL.md, recipe.yaml, provenance.json and LICENSE together. No script, dependency installation or API key is required.
2. Select the Skill in an assistant that supports Skills and reference-image editing, then supply a photograph you have permission to edit. Other assistants can read SKILL.md and recipe.yaml directly.
3. Inspect the source image first, perform the requested interpretation, and check the style's acceptance criteria. Your environment determines the available image model.

Identity, subject counts, structure and framing are protected by default; each Skill states its own permitted geometric changes. Both source and effect examples are AI-generated, not photographs of real people. Different models, settings and inputs do not guarantee identical results.

## Status and licensing

An example is ready only when both source and effect have recorded real generation, approved visual reviews and matching local-file checks or COS readback receipts. New examples also bind the executed recipe hash. Missing images, missing reviews or unsuccessful reviews remain draft. The [complete index](index.json) records status; offline validation does not fetch the remote images again.

Original contributions and repository maintenance files use the [MIT License](LICENSE), copyright 2026 MuziGeek. Adapted material retains its original author notices and applicable MIT, CC BY 4.0 or Apache 2.0 terms in [third-party notices](THIRD_PARTY_NOTICES.md). The text license does not replace generation-service terms for example images or grant likeness, trademark, third-party-input or reference-artwork rights. See [limitations and image notes](docs/limitations.md) and [pinned research records](docs/research-sources.json); each Skill's provenance.json distinguishes original authorship from adaptation. Research material is adopted only where per-entry pinned attribution, clear license terms and modification records explicitly document that use.

${batchNote}

${sections}

## Maintenance

The ${groups.length} JSON files in data are the source of truth. Install the pinned dependencies, then run npm run build to reproduce documentation and the index from existing audit records. The previous ${entries.length - batch.length} Skills stay frozen. New ${newBatch} examples require COS URLs and recorded upload readback receipts; source images, effects and thumbnails are never bundled. Upload and verify images before writing each Skill's examples/generation.json; incomplete examples remain draft. Display images are metadata-free 960×1200 WebP, fitted with contain to preserve the full frame. npm run validate checks recipe parity, real prompts, reviews, object paths and recorded receipts offline; it performs no COS GET and does not replace live image acceptance. npm test covers incremental builds, unchanged legacy bytes and external references. The [generation ledger](docs/generation-ledger.json) retains calls, including rejected attempts. The builder contains no generation-service caller, provider configuration or keys. Skill users do not need maintenance commands.
`;
}

const limitations = `# 限制与素材说明 · Limitations and image notes

## 原创方法说明 · Original method descriptions

原创方法描述通用视觉机制；改编方法在各目录记录原作者、固定版本、完整许可及具体修改，不把上游贡献声称为原创。没有复制外部示例图、艺术家作品或许可不明的二次来源提示词，也不把一般技术名称宣称为独占创作。

Original instructions describe general visual mechanisms. Each adapted method records the original author, pinned revision, complete license and modifications without claiming upstream contributions as original. No external example images or unclear secondary-source prompts are included. Research-only links identify background information, not adopted wording, copied assets or endorsement.

## 合成图片与效果范围 · Synthetic images and scope

仓库示例的前后图都由 AI 生成；人物不是实拍模特，不应被描述为某个真实人物的照片。看似照片的原图也不是现场记录。效果图模拟视觉特征，不能证明真正完成过银盐冲印、湿版摄影、烧制珐琅或其他物理工艺。

Both sides of example pairs are AI-generated. People shown are synthetic subjects, not photographed models or documentary records. Rendered results illustrate visual characteristics; they do not demonstrate a physical darkroom, firing, casting or other manufacturing process.

同一说明在不同模型、版本、参数或输入下会产生不同结果，可能改变细节。验收应对照每次实际输入进行；任何图片尚未审核或不完整时，索引保持 draft。ready 只说明打包示例有通过记录，并非对全部输入、所有模型或公开服务可用性的保证。

Different models, versions, settings and inputs can yield different results and may change details. Check every result against its actual input. An incomplete or unreviewed pair remains draft. Ready means the packaged examples have recorded approvals, not that all models, inputs or hosted services are validated.

## 许可分层 · Separate rights

- 原创文字、配方与维护文件：MIT，Copyright 2026 MuziGeek；改编部分另保留其原始许可与归属。
- AI 示例：生成结果另受使用时的生成服务条款及适用法律约束；MIT 文字许可不额外保证生成图版权、排他性或任意第三方权利。
- 用户输入与外部参考：所有权和编辑权限仍由原权利人决定；此仓库不代为授予。
- 研究资料：链接用于技术背景；外部网页文字、图片与商标维持其各自许可，不属于本仓库的 MIT 授权资产。

- Original text, recipes and maintenance files: MIT, Copyright 2026 MuziGeek; adapted material also retains its original license and attribution.
- AI examples: generation-service terms and applicable law govern separately; the text license makes no additional claim about image copyright, exclusivity or third-party rights.
- User inputs and external references: ownership and editing permissions stay with their respective rights holders.
- Research references: links provide method context; external text, images and marks keep their own licenses and are not MIT-licensed repository assets.

示例记录仅保留必要的生成与审核元数据，不包含供应商密钥、本机文件路径或运行配置。recipe.yaml 不为原创模板伪造上游仓库提交号；如后续存在真实第三方改编，应另外核验许可并准确记录来源。

Example records retain only necessary generation and review metadata, excluding provider keys, local machine paths and runtime configuration. Original recipes do not invent upstream commits. Any future actual adaptation requires an accurate source and license record.
`;

export async function build({ generationRoot, root = destination } = {}) {
  const rows = await loadData(root);
  const generationRecords = generationRoot ? await loadGeneration(path.resolve(generationRoot), new Set(rows.map(row => row.slug))) : null;
  const indexEntries = [], attempts = [], removed = [], thirdParty = [];
  for (const row of rows) {
    const folder = path.join(root, 'skills', row.slug);
    const adapted = row.sourceProvenance?.type === 'adapted';
    let upstreamLicense;
    if (adapted) {
      upstreamLicense = row.sourceProvenance.license_text === undefined
        ? await readFile(path.join(folder, 'LICENSE-THIRD-PARTY.txt'))
        : Buffer.from(row.sourceProvenance.license_text, 'utf8');
      if (digest(upstreamLicense) !== row.sourceProvenance.license_hash) throw new Error(`${row.slug}: upstream license hash mismatch`);
      thirdParty.push({ row, license: upstreamLicense.toString('utf8') });
    }
    const legacy = row.group.file !== newBatch;
    const recipeText = legacy ? await readFile(path.join(folder, 'recipe.yaml'), 'utf8') : makeRecipeText(row);
    if (legacy && generationRecords?.some(record => record.style === row.slug)) throw new Error(`${row.slug}: this incremental build cannot replace a frozen legacy example`);
    const examples = await prepareExamples(row, folder, recipeText, generationRecords, { allowDraft: !legacy, cosOnly: cosOnlyBatches.has(row.group.file) });
    attempts.push(...examples.attempts);
    removed.push(...examples.removed.map(file => `skills/${row.slug}/${file}`));
    if (!legacy) {
      const source = adapted ? publicSource(row.sourceProvenance) : null;
      const provenance = {
        style: row.slug, type: adapted ? 'adapted' : 'original', author: adapted ? source.author : 'MuziGeek',
        ...(adapted ? { adapted_by: 'MuziGeek', commit: source.commit, url: source.url, license_hash: source.license_hash, modifications: source.modifications, third_party_license: 'LICENSE-THIRD-PARTY.txt' } : {}),
        year: 2026, origin: adapted ? 'adapted' : 'original',
        method_basis: adapted ? 'Licensed adaptation with source-specific terms and retained authorship; see the pinned source and recorded modifications.' : 'Original instructions describing general visual mechanisms.',
        adapted_from: adapted ? [source] : [], research_references: row.researchReferences ?? [],
        text_license: sourceLicense(row), contributions_license: 'MIT', license_file: 'LICENSE',
        source_data: { file: row.group.file, entry: row.slug, sha256: digest(JSON.stringify(Object.fromEntries(Object.entries(row).filter(([key]) => key !== 'group')))) },
        examples: { status: examples.status, synthetic_source: true, real_person_photography: false,
          rights_note: 'AI examples have separate generation-service terms; text licenses grant no extra likeness, trademark or third-party-input rights.', ...examples.files },
      };
      await write(path.join(folder, 'recipe.yaml'), recipeText);
      await write(path.join(folder, 'provenance.json'), json(provenance));
      if (adapted) await writeFile(path.join(folder, 'LICENSE-THIRD-PARTY.txt'), upstreamLicense);
      if (adapted && row.sourceProvenance.notice_text) await write(path.join(folder, 'NOTICE-THIRD-PARTY.txt'), row.sourceProvenance.notice_text);
      await write(path.join(folder, 'LICENSE'), license + (adapted ? `\nScope: the MIT grant above covers MuziGeek's original contributions only.\nAdapted material from ${source.author} remains subject to ${sourceLicense(row)}.\nSee LICENSE-THIRD-PARTY.txt for the complete upstream license and copyright notices,\nand provenance.json for the pinned source, attribution and modifications.\n` : ''));
      await write(path.join(folder, 'SKILL.md'), skillMarkdown(row, examples));
    }
    indexEntries.push({ slug: row.slug, nameZh: row.nameZh, nameEn: row.nameEn, summaryZh: row.summaryZh, summaryEn: row.summaryEn,
      group: row.group.file, form: row.form, scene: row.scene, applicableScenes: row.applicableScenes, status: examples.status,
      skill: `skills/${row.slug}/SKILL.md`, recipe: `skills/${row.slug}/recipe.yaml`, provenance: `skills/${row.slug}/provenance.json`,
      examples: Object.fromEntries(Object.entries(examples.files).map(([key, file]) => [key, /^https:\/\//.test(file) ? file : `skills/${row.slug}/${file}`])),
    });
  }
  const ready = indexEntries.filter(row => row.status === 'ready').length;
  const ledger = { schema_version: 1, count: attempts.length, approved: attempts.filter(row => row.review?.decision === 'approved').length, rejected: attempts.filter(row => row.review?.decision === 'rejected').length, failed: attempts.filter(row => row.status === 'failed').length, calls: attempts.sort((a, b) => a.call.localeCompare(b.call)) };
  await write(path.join(root, 'THIRD_PARTY_NOTICES.md'), '# Third-party notices · 第三方声明\n\nEach adaptation below retains its original author, pinned source, complete license and recorded modifications. Research-only links do not grant reuse rights.\n\n' + thirdParty.map(({row, license: text}) => `## ${row.slug} · ${row.sourceProvenance.author}\n\nLicense: ${sourceLicense(row)}\n\nSource: [pinned instructions](${row.sourceProvenance.url})\n\nCommit: ${row.sourceProvenance.commit}\n\nLicense SHA-256: ${row.sourceProvenance.license_hash}\n\nModifications:\n${bullet(row.sourceProvenance.modifications)}\n\nComplete original license and copyright notices:\n\n\`\`\`text\n${text.trimEnd()}\n\`\`\`\n${row.sourceProvenance.notice_text ? `\nUpstream NOTICE:\n\n\`\`\`text\n${row.sourceProvenance.notice_text.trimEnd()}\n\`\`\`\n` : ''}`).join('\n'));
  await write(path.join(root, 'docs', 'generation-ledger.json'), json(ledger));
  await write(path.join(root, 'LICENSE'), license);
  await write(path.join(root, 'README.md'), readme(indexEntries, 'en', rows));
  await write(path.join(root, 'README.zh-CN.md'), readme(indexEntries, 'zh', rows));
  await write(path.join(root, 'docs', 'limitations.md'), limitations);
  await write(path.join(root, 'index.json'), json({ version: 1, author: 'MuziGeek', count: indexEntries.length, ready, draft: indexEntries.length - ready, generation_calls: attempts.length, generation_ledger: 'docs/generation-ledger.json', status_policy: 'ready requires approved source/effect records and matching local bytes or recorded COS readback receipts; new COS examples also require the executed recipe hash. Offline validation does not perform remote GETs.', styles: indexEntries }));
  const result = { styles: indexEntries.length, ready, draft: indexEntries.length - ready, generation_calls: attempts.length, removed_legacy_images: removed };
  console.log(JSON.stringify(result));
  return result;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { values } = parseArgs({ options: { generation: { type: 'string' }, help: { type: 'boolean' } } });
  if (values.help) console.log('Usage: node scripts/build.mjs [--generation /path/to/existing/generation]\nWithout --generation, reuse the approved compressed examples and audit records. No image service is called.');
  else await build({ generationRoot: values.generation });
}
