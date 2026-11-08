---
name: hammered-copper-form
description: Restyle a supplied photograph as hammered copper / 锤纹铜器. Use for this specific visual method while preserving observed subjects and structure.
---

# 锤纹铜器 · Hammered copper

将主体表面转换为细小锤击凹面的铜质，利用暖色金属反射与局部氧化层增强手工感，保留原物的完整结构。

Translate the subject into copper with fine hammer dimples, warm metallic reflections, and restrained oxidation while preserving its structure.

原创方法说明，由 MuziGeek 编写；没有声称改编自外部提示词。

Original method instructions authored by MuziGeek; no external prompt adaptation is asserted.

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

- 将主体表面转换为细小锤击凹面的铜质，利用暖色金属反射与局部氧化层增强手工感，保留原物的完整结构。
- 识别特征：细小锤击凹面、暖铜反射、凹处氧化。
- Medium anchor: Hand-hammered copper sheet with shallow irregular dimples and modest warm oxidation in surface recesses.

10. **medium** — Recast existing solid surfaces as hand-hammered copper, preserving original contours, protrusions, component boundaries, and attachment relationships.
20. **palette** — Use warm copper, dark reddish-brown recesses, and small pale metallic highlights; avoid broad turquoise patina.
30. **line** — Keep structural grooves and boundaries from the source; express edges through changing metallic reflection rather than outlines.
40. **texture** — Cover surfaces with shallow irregular hammer dimples scaled to the object, with slightly darker recesses.
50. **lighting** — Retain the light direction; each dimple catches a restrained highlight while larger reflections describe the overall form.
60. **composition** — Preserve framing, subject count, scale, orientation, placement, and support shadows.
70. **detail** — Wrap hammer marks with the local surface curvature and reduce their scale near fine details.
80. **finish** — Finish as worked copper with subtle oxidation, avoiding crumpled foil, carved decoration, or added hardware.

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

- Subject count, outer silhouette, openings, attachments, and contact points.
- Source camera viewpoint, framing, relative scale, and placement.
- Recognizable subject identity and existing background structure.

## 适用范围与几何边界 · Applicability and geometry

- 适用：美食、器物、产品。
- Applies to: Food, Object, Product.
- 仅改变原有实体外表和材质表现，不增减部件，不改变轮廓、开口或摆放。
- Change existing solid surfaces and their material response only; retain parts, silhouettes, openings, and placement.
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

- Turquoise corrosion covering the subject, carved motifs, or new rivets.
- Crumpled foil, deep dents that alter shape, or melted edges.
- Extra stems, duplicated leaves, text, logos, or watermarks.

## 验收 · Acceptance

- 主体外形和细部数量与原图一致。
  Overall shape and detail counts match the source.
- 锤纹随曲面变化，不破坏原有轮廓。
  Hammer marks follow curvature without changing the silhouette.
- 金属反光同时表达整体体积与局部凹面。
  Metal reflections describe both overall volume and local dimples.
- 氧化仅轻微存在，无新增铆钉或装饰。
  Oxidation stays restrained, with no added rivets or decoration.

## 配方、来源与许可 · Recipe, provenance and license

- [recipe.yaml](recipe.yaml): structured image-editing recipe / 结构化图像编辑配方。
- [provenance.json](provenance.json): original authorship, method context and example status / 原创归属、方法背景与示例状态。
- [LICENSE](LICENSE): MIT applies to MuziGeek's original contributions / MIT 适用于 MuziGeek 的原创贡献。
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
