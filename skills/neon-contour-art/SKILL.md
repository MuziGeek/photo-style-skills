---
name: neon-contour-art
description: Restyle a supplied photograph as neon contour art / 霓虹轮廓光绘. Use for this specific visual method while preserving observed subjects and structure.
---

# 霓虹轮廓光绘 · Neon Contour Art

把夜景或器物提炼成稀疏的青色发光轮廓，保留关键结构，在深色空白中控制光晕，让主次线条清晰可读。

Reduce a scene to sparse cyan luminous contours, preserving essential structure with restrained halos and clear emphasis in generous dark space.

本方法改编自 AILesson 的 MIT 授权说明。原作者归属、来源与改动见 [provenance.json](provenance.json)，完整上游许可及其版权声明见 [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt)。

Adapted from AILesson's MIT-licensed instructions. [provenance.json](provenance.json) records the original author, pinned source and modifications; [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt) retains the complete upstream license and copyright notices.

原始归属 · Original attribution: Copyright (c) 2026 AILesson Adapted by MuziGeek from AILesson; repository and original-post credits are retained.

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

- 把夜景或器物提炼成稀疏的青色发光轮廓，保留关键结构，在深色空白中控制光晕，让主次线条清晰可读。
- 识别特征：稀疏青色轮廓、狭窄明亮线芯、深色大留白。
- Medium anchor: Sparse continuous cyan light filaments on a dark navy field, describing the photographed subject through essential contour lines.

10. **medium** — Redraw the observed photograph as refined luminous contour-line art rather than a photograph with glowing edges everywhere.
20. **palette** — Use cyan line cores against dark navy; make the main subject brighter than secondary architectural lines.
30. **line** — Describe the outer silhouette and a few identifying internal features using sparse continuous light filaments.
40. **texture** — Keep surface areas dark and empty; do not trace every texture, hair, brick or leaf.
50. **lighting** — Add only restrained soft halos around narrow bright cores; exclude lens flare and rainbow gradients.
60. **composition** — Keep source perspective, subject count, relative positions and essential connections between structural parts.
70. **detail** — Preserve distinctive openings and attachments such as wheel circles, handlebars, stems or facial proportions where observed.
80. **finish** — Return one complete artwork without tube hardware, signs, text, particles or decorative grids.

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

- Recognizable identity, expression, subject count and distinctive source colors.
- Observed anatomical connections, essential openings and relationships between subjects.
- Complete main subjects within the final frame; no accidental crop.

## 适用范围与几何边界 · Applicability and geometry

- 适用：风景、美食、夜景、产品、器物。
- Applies to: Landscape, Food, Night, Product, Object.
- 允许将表面和背景暗化为负空间、只保留关键外轮廓与内结构；不改变主体数量、连接、轮廓方向或相对位置。
- Darken surfaces and background into negative space while retaining essential contours; do not alter counts, connections, orientation or relative placement.
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

- Unrequested people, duplicate subjects or malformed anatomy.
- New logos, watermarks or unreadable pseudo-lettering.
- Clipping the main subject or erasing its identifying features.

## 验收 · Acceptance

- 关键结构可辨，主次轮廓亮度有区别。
  Essential structures remain legible with a clear line-brightness hierarchy.
- 源图数量、连接和空间关系保持。
  Source counts, connections and spatial relations remain coherent.
- 发光线有狭窄线芯，光晕未覆盖主要细节。
  Narrow line cores remain visible beneath restrained halos.
- 没有全面描边噪声、霓虹招牌、文字或无关粒子。
  There is no noisy full-edge tracing, neon signage, lettering or unrelated particles.

## 配方、来源与许可 · Recipe, provenance and license

- [recipe.yaml](recipe.yaml): structured image-editing recipe / 结构化图像编辑配方。
- [provenance.json](provenance.json): original authorship, method context and example status / 原创归属、方法背景与示例状态。
- [LICENSE](LICENSE): MIT applies to MuziGeek's original contributions / MIT 适用于 MuziGeek 的原创贡献。
- [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt): AILesson · MIT. Adapted material retains these terms and attribution / 改编材料保留原许可和归属。
- 示例中的前后图均为 AI 合成，不是真人摄影或真实制作工艺的证据。结果会随模型与输入变化，不承诺相同输出。
- Example before/after images are AI-generated, not photographs of real people or evidence of physical craft production. Results vary by model and input.
- MIT 不授予用户输入、第三方作品、人物、商标或生成平台条款之外的权利；示例许可单独见 provenance。
- MIT grants no rights to user inputs, third-party works, likenesses or trademarks, and does not override generation-service terms; example terms are recorded separately in provenance.

## 示例状态 · Example status

ready：打包的原图与效果图均存在且记录了通过的视觉审核。

ready: both packaged source and effect exist and have recorded approved visual reviews.

| AI 合成原图 · Source | 通过审核的效果 · Approved effect |
| --- | --- |
| <img src="examples/source.webp" alt="AI-generated source" width="240"> | <img src="examples/effect.webp" alt="Approved generated interpretation" width="240"> |

- [AI source / AI 合成原图](examples/source.webp)
- [Generated interpretation / 生成效果](examples/effect.webp)
- [Generation and visual review / 生成与视觉审核记录](examples/generation.json)
