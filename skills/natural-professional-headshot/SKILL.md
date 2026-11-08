---
name: natural-professional-headshot
description: Restyle a supplied photograph as natural professional headshot / 自然职业头像. Use for this specific visual method while preserving observed subjects and structure.
---

# 自然职业头像 · Natural Professional Headshot

把日常人像整理成自然可信的职业头像，保留年龄、脸型和皮肤纹理，以简洁职业服装、柔和布光和干净背景提升清晰度。

Edit a casual portrait into an approachable professional headshot while preserving identity, age and natural skin texture with simple wardrobe and soft studio light.

本方法改编自 SeeAPI 的 CC-BY-4.0 授权说明。原作者归属、来源与改动见 [provenance.json](provenance.json)，完整上游许可及其版权声明见 [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt)。

Adapted from SeeAPI's CC-BY-4.0-licensed instructions. [provenance.json](provenance.json) records the original author, pinned source and modifications; [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt) retains the complete upstream license and copyright notices.

原始归属 · Original attribution: Copyright © 2026 SeeAPI. Adapted by MuziGeek from SeeAPI; repository and original-post credits are retained.

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

- 把日常人像整理成自然可信的职业头像，保留年龄、脸型和皮肤纹理，以简洁职业服装、柔和布光和干净背景提升清晰度。
- 识别特征：自然皮肤纹理、柔和职业布光、干净灰色背景。
- Medium anchor: A natural photorealistic professional headshot with soft studio light, restrained smart-casual clothing and a neutral gray backdrop.

10. **medium** — Edit the observed adult portrait into an approachable professional profile photograph while retaining exact facial identity.
20. **palette** — Keep natural skin tone and existing hair color; use understated charcoal, cream and neutral-gray surroundings.
30. **line** — Preserve face shape, eye spacing, age, expression and hairstyle without slimming or reshaping the face.
40. **texture** — Retouch only temporary distractions while retaining pores, fine lines and distinctive facial features.
50. **lighting** — Apply soft studio key light, gentle facial shadows and natural eye catchlights without plastic skin.
60. **composition** — Use a centered head-and-shoulders composition with comfortable headroom and space for a circular profile crop.
70. **detail** — Dress the person in a simple unbranded charcoal blazer over a neutral top, naturally fitted to the same body.
80. **finish** — Return one photographic portrait without text, logos, decorative borders or heavy beauty filters.

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

- Identity, age, expression and body proportions of observed people.
- Exact geometry and recognizable details of subjects not explicitly selected for change.
- Camera viewpoint and original composition except changes specifically permitted by this Skill.

## 适用范围与几何边界 · Applicability and geometry

- 适用：人像。
- Applies to: Portrait.
- 允许改为肩上职业构图、整理服装和背景并调整布光；脸型、年龄、肤色、发型及神态不变，不以美颜改造身份。
- Allow a head-and-shoulders professional crop, wardrobe, backdrop and light changes; keep face shape, age, skin tone, hair and expression without identity-changing beauty edits.
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

- Unrequested people, duplicate subjects or malformed anatomy.
- New logos, watermarks or unreadable pseudo-lettering.
- Clipping the main subject or erasing its identifying features.

## 验收 · Acceptance

- 脸型、年龄、肤色和身份未被改造。
  Face shape, age, skin tone and identity remain unchanged.
- 服装合体，背景简洁且布光自然。
  Wardrobe fits naturally with a clean backdrop and coherent light.
- 皮肤纹理和眼睛细节保留。
  Skin texture and eye detail survive.
- 完整头部适合头像裁切，无文字或美颜塑料感。
  The complete head supports profile cropping without text or plastic beauty filtering.

## 配方、来源与许可 · Recipe, provenance and license

- [recipe.yaml](recipe.yaml): structured image-editing recipe / 结构化图像编辑配方。
- [provenance.json](provenance.json): original authorship, method context and example status / 原创归属、方法背景与示例状态。
- [LICENSE](LICENSE): MIT applies to MuziGeek's original contributions / MIT 适用于 MuziGeek 的原创贡献。
- [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt): SeeAPI · CC-BY-4.0. Adapted material retains these terms and attribution / 改编材料保留原许可和归属。
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
