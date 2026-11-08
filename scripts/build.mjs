import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { stringify as yamlStringify } from 'yaml';
import { parseArgs } from 'node:util';
import { loadGeneration, packageExamples, reuseExamples } from './examples.mjs';

const destination = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const groups = [
  { file: 'oriental.json', count: 12, en: 'Eastern painting and print methods', zh: '东方绘画与版画' },
  { file: 'material-abstract.json', count: 18, en: 'Material and abstract interpretations', zh: '材质与抽象转译' },
  { file: 'photography.json', count: 10, en: 'Photographic processes and light', zh: '摄影工艺与光影' },
];
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

export async function loadData() {
  const entries = [];
  for (const group of groups) {
    const rows = JSON.parse(await readFile(path.join(destination, 'data', group.file), 'utf8'));
    if (!Array.isArray(rows) || rows.length !== group.count) throw new Error(`${group.file}: expected ${group.count} complete styles; found ${rows.length}. Finish source data before building.`);
    for (const row of rows) entries.push({ ...row, group });
  }
  if (entries.length !== 40 || new Set(entries.map(row => row.slug)).size !== 40) throw new Error('Exactly 40 unique styles are required.');
  for (const row of entries) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(row.slug)) throw new Error(`Unsafe style slug: ${row.slug}`);
    if (!row.fragments?.length || row.fragments.some(fragment => fragment.text.length > 200 || fragment.text.trim().split(/\s+/).length > 25)) throw new Error(`${row.slug}: invalid recipe fragment length.`);
  }
  return entries;
}

export function makeRecipe(row) {
  return {
    style: row.slug,
    version: 1,
    strength: row.group.file === 'photography.json' ? 'light' : 'strong',
    model_family: 'codex-imagegen',
    required_capability: 'image_edit',
    medium_anchor: row.mediumAnchor,
    preserve: row.preserve,
    fragments: row.fragments,
    aspect: '4:5',
    negative: row.negative,
  };
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

${adapted ? `蓝晒方法适配自 ${row.sourceProvenance.author} 的 MIT 授权提示词；Copyright (c) 2026 AILesson。改动与固定版本记录于 [provenance.json](provenance.json)，完整上游许可见 [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt)。\n\nThe cyanotype method is adapted from ${row.sourceProvenance.author}'s MIT-licensed prompt; Copyright (c) 2026 AILesson. [provenance.json](provenance.json) records the pinned source and modifications; [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt) carries the complete upstream license.` : '原创方法说明，由 MuziGeek 编写；没有声称改编自外部提示词。\n\nOriginal method instructions authored by MuziGeek; no external prompt adaptation is asserted.'}

## 输入分析与实际保留

1. 读取用户提供的原图；若没有可用图片，先请求图片。不要用本仓库示例代替用户输入。
2. 观察实际主体数量、身份与表情、朝向、肢体和连接、物体开口、相互遮挡、前后层次、光向及画幅；据实形成简短保留清单。样片说明只是样片，不能当成其他输入的事实。
3. 使用支持参考图编辑的可用工具，把原图作为编辑输入。先说明观察到的主体，再结合下方机制及 [recipe.yaml](recipe.yaml) 按顺序组合指令；工具名称不是必须安装的依赖。
4. 实际编辑默认沿用原图比例和完整内容，除非用户另有要求。配方的 4:5 是目录样片比例，不代表可裁去用户照片中的主体。
5. 对照输入检查结果；只修正发现的问题，不为了增强风格改变身份或添加无关景物。区分已完成的视觉检查与尚未验证的效果。

## Input analysis and preservation

1. Inspect the supplied image; request an image only when none is available. Never substitute a repository example for the user's input.
2. Record the observed subject count, identity, expression, direction, anatomy, attachments, openings, overlaps, depth, light and framing. Build preservation instructions from this image, not from the sample description.
3. Use an available reference-image editing tool. Combine the observed facts with the ordered mechanisms in [recipe.yaml](recipe.yaml); its model-family label does not require an installation script.
4. Keep the input aspect ratio and complete composition unless the user requests another format. The recipe's 4:5 ratio is a catalog-sample default, not authorization to crop a subject.
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
- [LICENSE](LICENSE): MIT applies to MuziGeek's original contributions / MIT 适用于 MuziGeek 的原创贡献。${adapted ? '\n- [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt): the adapted cyanotype method retains AILesson’s MIT attribution / 蓝晒适配保留 AILesson 的 MIT 归属。' : ''}
- 示例中的前后图均为 AI 合成，不是真人摄影或真实制作工艺的证据。结果会随模型与输入变化，不承诺相同输出。
- Example before/after images are AI-generated, not photographs of real people or evidence of physical craft production. Results vary by model and input.
- MIT 不授予用户输入、第三方作品、人物、商标或生成平台条款之外的权利；示例许可单独见 provenance。
- MIT grants no rights to user inputs, third-party works, likenesses or trademarks, and does not override generation-service terms; example terms are recorded separately in provenance.

## 示例状态 · Example status

${examples.status === 'ready' ? 'ready：打包的原图与效果图均存在且记录了通过的视觉审核。\n\nready: both packaged source and effect exist and have recorded approved visual reviews.' : 'draft：模板说明已编写；完整前后图的视觉验收尚未全部通过或记录齐全。\n\ndraft: the instructions are authored, but a complete before/after pair has not yet passed or recorded all required visual reviews.'}

${preview}

${exampleLines.length ? exampleLines.join('\n') : '尚无已打包的示例图片。\n\nNo example images are packaged yet.'}
`;
}

function readme(entries, language) {
  const zh = language === 'zh';
  const ready = entries.filter(entry => entry.status === 'ready').length;
  const sections = groups.map(group => {
    const table = entries.filter(entry => entry.group === group.file).map(entry => `| [${tableText(zh ? entry.nameZh : entry.nameEn)}](${entry.skill}) | ${tableText(zh ? entry.summaryZh : entry.summaryEn)} | ${entry.status} |`).join('\n');
    return `## ${zh ? group.zh : group.en}\n\n| ${zh ? '风格' : 'Style'} | ${zh ? '方法' : 'Method'} | ${zh ? '示例状态' : 'Example status'} |\n| --- | --- | --- |\n${table}`;
  }).join('\n\n');
  if (zh) return `# 照片风格模板集

[English](README.md)

40 个可独立复制的照片编辑 Skill：39 个原创传统技法与视觉机制说明，加上 1 个适配自 AILesson MIT 授权提示词的蓝晒模板。分类为东方绘画与版画 12 个、材质与抽象转译 18 个、摄影工艺与光影 10 个。每个目录包含双语流程、结构化配方、保留约束与验收标准。当前 ${ready} 个示例为 ready，${40 - ready} 个为 draft；状态反映示例审核，不表示服务上线或结果保证。

## 安装与使用

1. 从下方目录选择风格，复制整个 skills 内对应风格文件夹到你的 Skill 目录（例如 ~/.codex/skills）。保留同目录的 SKILL.md、recipe.yaml、provenance.json 和 LICENSE；无需运行脚本、安装依赖或配置 API 密钥。
2. 在支持 Skill 与参考图编辑的助手中选用该风格，并提供你有权编辑的照片。其他助手也可以直接阅读 SKILL.md 与 recipe.yaml。
3. 先让助手核对原图，再执行风格转译，并依据目录内验收标准检查结果。支持何种生图模型由你的环境决定。

默认保护原图身份、主体数量、结构和画幅；具体风格允许的几何变化写在各 Skill 中。示例原图和效果图均为 AI 合成，不是真人实拍。不同模型、参数和图片不会保证得到相同结果。

## 状态与许可

只有源图、效果图均真实存在且生成记录中两者均通过视觉审核时才标 ready；缺图、缺审核或未通过则为 draft。页面只链接真实存在的图片。[完整索引](index.json) 列出机器可读状态。

原创贡献与仓库维护文件适用 [MIT](LICENSE)，版权声明为 2026 MuziGeek。蓝晒方法保留 Copyright 2026 AILesson 及完整 MIT 许可，见 [第三方声明](THIRD_PARTY_NOTICES.md)。生成示例不以 MIT 文本许可替代生成平台条款，也不授予人物、商标、第三方输入或参考作品的权利。详见 [限制与素材说明](docs/limitations.md) 和 [固定版本研究记录](docs/research-sources.json)；每个 Skill 的 provenance.json 区分原创与适配。Qiaomu 与 VisualForge 只用于研究，其部分二次来源内容未采用。

${sections}

## 维护

data 下的三个 JSON 是内容真源。维护者安装 package.json 中固定版本的依赖后，可运行 npm run build，使用已有压缩示例和审阅记录重建文档与索引；若要从外部原始生成目录重新压缩，运行 node scripts/build.mjs --generation /path/to/generation。npm run validate 检查内容、链接、配方、实际提示词、哈希和审核一致性，npm test 运行打包回归检查。示例使用去元数据的 960×1200 WebP，以 contain 缩放保留完整画面。全部调用（含拒绝）见 [生成记录总表](docs/generation-ledger.json)，原始 PNG 不入仓库。构建器只读取已有素材，不调用生图服务，也不包含供应商配置或密钥；使用 Skill 本身无需运行维护命令。
`;
  return `# Photo Style Templates

[简体中文](README.zh-CN.md)

40 independently copyable photo-editing Skills: 39 original descriptions of traditional methods and visual mechanisms, plus one cyanotype template adapted from an AILesson MIT-licensed prompt. Categories contain 12 Eastern painting and print methods, 18 material and abstract interpretations, and 10 photographic processes and lighting methods. Each folder includes bilingual workflow instructions, a structured recipe, preservation rules and acceptance criteria. ${ready} examples are ready and ${40 - ready} are draft; status describes example review, not a live service or guaranteed output.

## Install and use

1. Choose a style below and copy its whole folder from skills into your Skill directory, such as ~/.codex/skills. Keep SKILL.md, recipe.yaml, provenance.json and LICENSE together. No script, dependency installation or API key is required.
2. Select the Skill in an assistant that supports Skills and reference-image editing, then supply a photograph you have permission to edit. Other assistants can read SKILL.md and recipe.yaml directly.
3. Inspect the source image first, perform the requested interpretation, and check the style's acceptance criteria. Your environment determines the available image model.

Identity, subject counts, structure and framing are protected by default; each Skill states its own permitted geometric changes. Both source and effect examples are AI-generated, not photographs of real people. Different models, settings and inputs do not guarantee identical results.

## Status and licensing

An example is ready only when both source and effect files exist and both have approved visual reviews in generation records. Missing images, missing reviews or unsuccessful reviews remain draft. Only existing images are linked. The [complete index](index.json) records machine-readable status.

Original contributions and repository maintenance files use the [MIT License](LICENSE), copyright 2026 MuziGeek. The cyanotype adaptation retains Copyright 2026 AILesson and the complete MIT license in [third-party notices](THIRD_PARTY_NOTICES.md). The text license does not replace generation-service terms for example images or grant likeness, trademark, third-party-input or reference-artwork rights. See [limitations and image notes](docs/limitations.md) and [pinned research records](docs/research-sources.json); each Skill's provenance.json distinguishes original authorship from adaptation. Qiaomu and VisualForge are research-only; their secondary-source material was not adopted.

${sections}

## Maintenance

The three JSON files in data are the source of truth. After installing the pinned package.json dependencies, maintainers can run npm run build to reproduce documentation and the index from existing compressed examples and audit records, or node scripts/build.mjs --generation /path/to/generation to recompress external original outputs. Run npm run validate to check content, references, recipe parity, actual prompts, hashes and reviews; npm test covers packaging regressions. Examples are metadata-free 960×1200 WebP images fitted with contain to preserve the complete frame. The [generation ledger](docs/generation-ledger.json) retains every call, including rejected attempts; original PNG files are excluded. The builder only reads existing assets and contains no generation-service caller, provider configuration or keys. Skill users do not need maintenance commands.
`;
}

const limitations = `# 限制与素材说明 · Limitations and image notes

## 原创方法说明 · Original method descriptions

39 个模板的提示词与操作流程为原创编写，描述传统绘画、材料、暗房与光学方法的一般视觉机制。蓝晒模板适配自 AILesson 的 MIT 授权提示词，保留固定版本归属和完整许可。没有复制外部示例图、艺术家作品或许可不明的二次来源提示词，也不把一般技术名称宣称为独占创作。

39 templates are originally authored descriptions of general visual mechanisms in painting, materials, darkroom processes and optics. The cyanotype template adapts an AILesson MIT-licensed prompt with pinned attribution and the complete license. No external example images or unclear secondary-source prompts are included. Research-only links identify background information, not adopted wording, copied assets or endorsement.

## 合成图片与效果范围 · Synthetic images and scope

仓库示例的前后图都由 AI 生成；人物不是实拍模特，不应被描述为某个真实人物的照片。看似照片的原图也不是现场记录。效果图模拟视觉特征，不能证明真正完成过银盐冲印、湿版摄影、烧制珐琅或其他物理工艺。

Both sides of example pairs are AI-generated. People shown are synthetic subjects, not photographed models or documentary records. Rendered results illustrate visual characteristics; they do not demonstrate a physical darkroom, firing, casting or other manufacturing process.

同一说明在不同模型、版本、参数或输入下会产生不同结果，可能改变细节。验收应对照每次实际输入进行；任何图片尚未审核或不完整时，索引保持 draft。ready 只说明打包示例有通过记录，并非对全部输入、所有模型或公开服务可用性的保证。

Different models, versions, settings and inputs can yield different results and may change details. Check every result against its actual input. An incomplete or unreviewed pair remains draft. Ready means the packaged examples have recorded approvals, not that all models, inputs or hosted services are validated.

## 许可分层 · Separate rights

- 原创文字、配方与维护文件：MIT，Copyright 2026 MuziGeek；蓝晒适配另保留 AILesson 的 MIT 许可与归属。
- AI 示例：生成结果另受使用时的生成服务条款及适用法律约束；MIT 文字许可不额外保证生成图版权、排他性或任意第三方权利。
- 用户输入与外部参考：所有权和编辑权限仍由原权利人决定；此仓库不代为授予。
- 研究资料：链接用于技术背景；外部网页文字、图片与商标维持其各自许可，不属于本仓库的 MIT 授权资产。

- Original text, recipes and maintenance files: MIT, Copyright 2026 MuziGeek; the cyanotype adaptation also retains AILesson's MIT license and attribution.
- AI examples: generation-service terms and applicable law govern separately; the text license makes no additional claim about image copyright, exclusivity or third-party rights.
- User inputs and external references: ownership and editing permissions stay with their respective rights holders.
- Research references: links provide method context; external text, images and marks keep their own licenses and are not MIT-licensed repository assets.

示例记录仅保留必要的生成与审核元数据，不包含供应商密钥、本机文件路径或运行配置。recipe.yaml 不为原创模板伪造上游仓库提交号；如后续存在真实第三方改编，应另外核验许可并准确记录来源。

Example records retain only necessary generation and review metadata, excluding provider keys, local machine paths and runtime configuration. Original recipes do not invent upstream commits. Any future actual adaptation requires an accurate source and license record.
`;

export async function build({ generationRoot } = {}) {
  const rows = await loadData();
  const generationRecords = generationRoot ? await loadGeneration(path.resolve(generationRoot), new Set(rows.map(row => row.slug))) : null;
  const publicResearch = JSON.parse(await readFile(path.join(destination, 'docs', 'research-sources.json'), 'utf8'));
  const cyanotype = rows.find(row => row.slug === 'cyanotype-contact-print');
  if (cyanotype?.sourceProvenance?.type !== 'adapted') throw new Error('The cyanotype record must include its licensed sourceProvenance.');
  const upstreamLicense = await readFile(path.join(destination, 'skills', 'cyanotype-contact-print', 'LICENSE-THIRD-PARTY.txt'));
  if (digest(upstreamLicense) !== cyanotype.sourceProvenance.license_hash) throw new Error('AILesson LICENSE differs from the pinned hash.');
  await write(path.join(destination, 'docs', 'research-sources.json'), json(publicResearch));
  await write(path.join(destination, 'THIRD_PARTY_NOTICES.md'), `# Third-party notices · 第三方声明\n\nOnly cyanotype-contact-print adapts an external prompt. The other 39 methods are originally authored.\n\n仅蓝晒模板改编自外部授权提示词，其余 39 个方法为原创编写。\n\nSource: [AILesson cyanotype prompt](${cyanotype.sourceProvenance.url})\n\nPinned commit: ${cyanotype.sourceProvenance.commit}\n\nLicense SHA-256: ${cyanotype.sourceProvenance.license_hash}\n\nThe adaptation extracts blue shadows, pale-blue midtones, paper-white highlights and paper texture; removes source-specific example objects and forced landscape dimensions; and adds preservation, geometry and acceptance instructions. It simulates a negative-based cyanotype appearance, not a physical photogram or chemical process. No source example images are included.\n\n适配保留蓝晒影调和纸纹机制，去除原提示词中的具体例物及强制横幅要求，新增主体保留、几何边界与验收。它模拟负片蓝晒外观，不是真实接触光影照片或化学流程；未采用来源示例图片。\n\nQiaomu, VisualForge and other listed repositories are research-only; their prompt text and secondary-source material are not included. See [research records](docs/research-sources.json).\n\n## AILesson MIT license\n\n\`\`\`text\n${upstreamLicense.toString('utf8').trimEnd()}\n\`\`\`\n`);
  const indexEntries = [];
  const attempts = [];
  const removed = [];
  for (const row of rows) {
    const folder = path.join(destination, 'skills', row.slug);
    const recipe = makeRecipe(row);
    const adapted = row.sourceProvenance?.type === 'adapted';
    const recipeText = (adapted ? `# Adapted from AILesson's MIT-licensed cyanotype prompt.\n# Copyright (c) 2026 AILesson. See LICENSE-THIRD-PARTY.txt and provenance.json.\n# Source: ${row.sourceProvenance.url}\n# Modifications Copyright (c) 2026 MuziGeek; MIT.\n` : '# Original recipe; provenance is recorded separately. No upstream commit is asserted.\n') + yamlStringify(recipe, { lineWidth: 0 });
    const examples = generationRecords ? await packageExamples(row, folder, recipeText, generationRecords) : await reuseExamples(row, folder, recipeText);
    attempts.push(...examples.attempts);
    removed.push(...examples.removed.map(file => `skills/${row.slug}/${file}`));
    const provenanceFile = path.join(folder, 'provenance.json');
    const previous = await exists(provenanceFile) ? JSON.parse(await readFile(provenanceFile, 'utf8')) : {};
    const provenance = {
      style: row.slug,
      type: adapted ? 'adapted' : 'original',
      author: adapted ? row.sourceProvenance.author : 'MuziGeek',
      ...(adapted ? { adapted_by: 'MuziGeek', commit: row.sourceProvenance.commit, url: row.sourceProvenance.url, license_hash: row.sourceProvenance.license_hash, modifications: row.sourceProvenance.modifications, third_party_license: 'LICENSE-THIRD-PARTY.txt' } : {}),
      year: 2026,
      origin: adapted ? 'adapted' : 'original',
      method_basis: adapted ? 'Licensed adaptation of the AILesson cyanotype prompt; a simulated negative-based appearance, not an actual photogram or chemical-process demonstration.' : 'Original instructions describing traditional visual methods and general material, photographic or optical mechanisms.',
      adapted_from: adapted ? [row.sourceProvenance] : [],
      research_references: row.researchReferences ?? previous.research_references ?? [],
      text_license: 'MIT',
      license_file: 'LICENSE',
      source_data: { file: row.group.file, entry: row.slug, sha256: digest(JSON.stringify(Object.fromEntries(Object.entries(row).filter(([key]) => key !== 'group')))) },
      examples: {
        status: examples.status,
        synthetic_source: true,
        real_person_photography: false,
        rights_note: 'AI-generated examples have separate generation-service and applicable-law terms; the MIT text license grants no extra likeness, trademark or third-party-input rights.',
        ...examples.files,
      },
    };
    await write(path.join(folder, 'recipe.yaml'), recipeText);
    await write(provenanceFile, json(provenance));
    if (adapted) await writeFile(path.join(folder, 'LICENSE-THIRD-PARTY.txt'), upstreamLicense);
    await write(path.join(folder, 'LICENSE'), license);
    await write(path.join(folder, 'SKILL.md'), skillMarkdown(row, examples));
    indexEntries.push({
      slug: row.slug, nameZh: row.nameZh, nameEn: row.nameEn, summaryZh: row.summaryZh, summaryEn: row.summaryEn,
      group: row.group.file, form: row.form, scene: row.scene, applicableScenes: row.applicableScenes,
      status: examples.status,
      skill: `skills/${row.slug}/SKILL.md`, recipe: `skills/${row.slug}/recipe.yaml`, provenance: `skills/${row.slug}/provenance.json`,
      examples: Object.fromEntries(Object.entries(examples.files).map(([key, file]) => [key, `skills/${row.slug}/${file}`])),
    });
  }
  const ready = indexEntries.filter(row => row.status === 'ready').length;
  const ledger = { schema_version: 1, count: attempts.length, approved: attempts.filter(row => row.review?.decision === 'approved').length, rejected: attempts.filter(row => row.review?.decision === 'rejected').length, failed: attempts.filter(row => row.status === 'failed').length, calls: attempts.sort((a, b) => a.call.localeCompare(b.call)) };
  await write(path.join(destination, 'docs', 'generation-ledger.json'), json(ledger));
  await write(path.join(destination, 'LICENSE'), license);
  await write(path.join(destination, 'README.md'), readme(indexEntries, 'en'));
  await write(path.join(destination, 'README.zh-CN.md'), readme(indexEntries, 'zh'));
  await write(path.join(destination, 'docs', 'limitations.md'), limitations);
  await write(path.join(destination, 'index.json'), json({
    version: 1, author: 'MuziGeek', count: indexEntries.length, ready, draft: indexEntries.length - ready, generation_calls: attempts.length, generation_ledger: 'docs/generation-ledger.json',
    status_policy: 'ready requires both existing source and effect images with recorded approved visual reviews; otherwise draft',
    styles: indexEntries,
  }));
  const result = { styles: indexEntries.length, ready, draft: indexEntries.length - ready, generation_calls: attempts.length, removed_legacy_images: removed };
  console.log(JSON.stringify(result));
  return result;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { values } = parseArgs({ options: { generation: { type: 'string' }, help: { type: 'boolean' } } });
  if (values.help) console.log('Usage: node scripts/build.mjs [--generation /path/to/existing/generation]\nWithout --generation, reuse the approved compressed examples and audit records. No image service is called.');
  else await build({ generationRoot: values.generation });
}
