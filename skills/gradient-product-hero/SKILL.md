---
name: gradient-product-hero
description: Restyle a supplied photograph as gradient product hero / 渐变商品主视觉. Use for this specific visual method while preserving observed subjects and structure.
---

# 渐变商品主视觉 · Gradient Product Hero

保留商品本体设计，将其放上简洁展台并配置克制渐变背景，以轮廓光、受控反射和留白形成清晰的产品发布主视觉。

Stage the unchanged product on a minimal pedestal against a controlled gradient, using rim light, realistic reflection and quiet space for a product-launch hero.

本方法改编自 Photoshoot.app 的 CC-BY-4.0 授权说明。原作者归属、来源与改动见 [provenance.json](provenance.json)，完整上游许可及其版权声明见 [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt)。

Adapted from Photoshoot.app's CC-BY-4.0-licensed instructions. [provenance.json](provenance.json) records the original author, pinned source and modifications; [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt) retains the complete upstream license and copyright notices.

原始归属 · Original attribution: Copyright © 2026 Photoshoot.app Adapted by MuziGeek from Photoshoot.app; repository and original-post credits are retained.

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

- 保留商品本体设计，将其放上简洁展台并配置克制渐变背景，以轮廓光、受控反射和留白形成清晰的产品发布主视觉。
- 识别特征：简洁展台、受控渐变背景、轮廓光与留白。
- Medium anchor: A premium photographic product hero on a minimal pedestal with a restrained blue-gray gradient and controlled rim lighting.

10. **medium** — Create a premium advertising hero photograph around the unchanged product supplied in the reference.
20. **palette** — Use a smooth deep-blue to pale-blue-gray background gradient derived from a restrained commercial palette.
30. **line** — Preserve exact product geometry, visible controls, proportions, color and material distinctions.
40. **texture** — Render clean realistic reflections and accurate fine product textures, never excessive glossy smoothing.
50. **lighting** — Use an upper-left key light, subtle silhouette rim light and a controlled soft glow behind the product.
60. **composition** — Place the complete product on one simple pedestal slightly off-center with deliberate quiet negative space.
70. **detail** — Keep contact shadows and reflection geometry physically consistent; do not add ports, buttons or accessories.
80. **finish** — Return one photographic product hero without slogans, logos, fake labels or watermark.

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

- Identity, age, expression and body proportions of observed people.
- Exact geometry and recognizable details of subjects not explicitly selected for change.
- Camera viewpoint and original composition except changes specifically permitted by this Skill.

## 适用范围与几何边界 · Applicability and geometry

- 适用：产品、器物。
- Applies to: Product, Object.
- 允许更换布景、加入唯一简洁展台、重布光并轻微重排主体；产品几何、配色、材质、标签和按键不变，不生成广告文案。
- Change staging, add one simple pedestal, relight and reposition modestly; retain product geometry, color, materials, labels and controls without advertising copy.
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

- Unrequested people, duplicate subjects or malformed anatomy.
- New logos, watermarks or unreadable pseudo-lettering.
- Clipping the main subject or erasing its identifying features.

## 验收 · Acceptance

- 商品几何、按键、材质和颜色保持。
  Product geometry, controls, materials and color remain unchanged.
- 展台与接触阴影合理，完整主体可见。
  Pedestal contacts are plausible and the product stays complete.
- 渐变及轮廓光克制，重点清楚。
  Gradient and rim light remain restrained with a clear focal subject.
- 无虚构接口、道具、广告文案或标志。
  No invented ports, accessories, advertising copy or logos appear.

## 配方、来源与许可 · Recipe, provenance and license

- [recipe.yaml](recipe.yaml): structured image-editing recipe / 结构化图像编辑配方。
- [provenance.json](provenance.json): original authorship, method context and example status / 原创归属、方法背景与示例状态。
- [LICENSE](LICENSE): MIT applies to MuziGeek's original contributions / MIT 适用于 MuziGeek 的原创贡献。
- [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt): Photoshoot.app · CC-BY-4.0. Adapted material retains these terms and attribution / 改编材料保留原许可和归属。
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
