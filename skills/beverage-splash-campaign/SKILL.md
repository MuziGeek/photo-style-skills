---
name: beverage-splash-campaign
description: Restyle a supplied photograph as beverage splash campaign / 饮料飞溅广告. Use for this specific visual method while preserving observed subjects and structure.
---

# 饮料飞溅广告 · Beverage Splash Campaign

保留饮品容器与颜色，用凝固瞬间的液体弧线和少量同类果材制造活力，在一致光照与重力线索下呈现清爽的饮料广告图。

Build an energetic beverage image around the unchanged drink with a frozen liquid arc and restrained matching fruit accents under coherent lighting and gravity cues.

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

- 保留饮品容器与颜色，用凝固瞬间的液体弧线和少量同类果材制造活力，在一致光照与重力线索下呈现清爽的饮料广告图。
- 识别特征：凝固液体弧线、容器形状保持、清爽果色光泽。
- Medium anchor: A crisp high-speed-style beverage campaign photograph with one coherent liquid splash around the original container.

10. **medium** — Create an energetic beverage campaign photograph around the exact drink and container visible in the reference.
20. **palette** — Keep the original juice color with fresh natural fruit accents and a clean light neutral background.
30. **line** — Preserve container shape, rim, base, proportions and visible package details without duplication.
40. **texture** — Render convincing liquid thickness, translucent edges and a limited number of sharply frozen droplets.
50. **lighting** — Use crisp directional studio light with coherent reflections, highlights and contact shadows.
60. **composition** — Keep the complete container dominant and add one controlled curved splash around it without hiding the rim.
70. **detail** — Use only matching fruit from the source context and keep liquid motion spatially coherent, never random floating blobs.
80. **finish** — Output one clean beverage image without hands, invented flavor text, labels, logos or watermark.

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

- Identity, age, expression and body proportions of observed people.
- Exact geometry and recognizable details of subjects not explicitly selected for change.
- Camera viewpoint and original composition except changes specifically permitted by this Skill.

## 适用范围与几何边界 · Applicability and geometry

- 适用：美食、产品。
- Applies to: Food, Product.
- 允许增加一次受控飞溅和少量已有同类果材，改变布景及光照；容器数量、形状、饮品颜色和主视角保持，不复制多个杯子。
- Add one controlled splash and limited matching fruit, changing staging and lighting; retain container count, shape, drink color and principal viewpoint without duplicating glasses.
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

- Unrequested people, duplicate subjects or malformed anatomy.
- New logos, watermarks or unreadable pseudo-lettering.
- Clipping the main subject or erasing its identifying features.

## 验收 · Acceptance

- 主容器数量与形状保持，边缘清楚。
  Container count and shape remain fixed with a clear rim.
- 飞溅弧线连贯，液体质地与饮品一致。
  The splash arc is coherent and matches the drink material.
- 光线、反射、液体厚度和接触关系可信。
  Light, reflection, thickness and contacts are believable.
- 无额外杯子、手、虚构口味文字或品牌。
  No extra glasses, hands, invented flavor copy or branding appears.

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
