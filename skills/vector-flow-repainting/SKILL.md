---
name: vector-flow-repainting
description: Restyle a supplied photograph as vector flow repainting / 流场重绘. Use for this specific visual method while preserving observed subjects and structure.
---

# 流场重绘 · Vector flow repainting

让短笔触沿画面体积与运动方向汇成流场，借由线束转向和长短变化表现节奏，保留主体数量、轮廓与主要动作。

Repaint the scene with directional strokes following volume and motion, using changes in stroke length and orientation while retaining clear subjects.

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

- 让短笔触沿画面体积与运动方向汇成流场，借由线束转向和长短变化表现节奏，保留主体数量、轮廓与主要动作。
- 识别特征：顺形笔触流、长短方向变化、亮部聚束。
- Medium anchor: Directional painted stroke fields derived from source edges, local volume, and visible motion, with coherent flow and bounded stroke spill.

10. **medium** — Repaint the scene using directional stroke fields that follow existing contours, volume, and visible motion rather than arbitrary swirls.
20. **palette** — Retain source color roles within a restrained blue-green, amber, and muted earth palette.
30. **line** — Use short aligned strokes for structure and longer flowing strokes for water or motion, with controlled changes in direction.
40. **texture** — Give strokes a dry pigment body with visible separation and moderate overlap, avoiding glossy liquid or thread-like fibers.
50. **lighting** — Carry source light into stroke value and density; keep highlights concentrated around existing illuminated areas.
60. **composition** — Preserve subject count, outlines, positions, framing, and key contacts; allow minor local stroke displacement within those anchors.
70. **detail** — Keep primary subjects, attached components, support edges, and reflections distinguishable through separate flow directions.
80. **finish** — Finish with coherent flow fields and quiet resting regions, retaining recognizable subjects instead of dissolving everything into noise.

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

- Subject count, primary silhouettes, object positions, and source framing.
- Key contact relations and dominant visible movement directions.
- Distinct source light locations and recognizable identity cues.

## 适用范围与几何边界 · Applicability and geometry

- 适用：夜景、风景、人像、合影、美食。
- Applies to: Night, Landscape, Portrait, Group, Food.
- 允许有限的局部笔触偏移与纹理拉长；主体外轮廓、数量、关键接触和光源位置保持稳定。
- Allow bounded local stroke displacement and texture elongation while preserving silhouettes, counts, key contacts, and light locations.
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

- Arbitrary vortices, extra boats, duplicated objects, or displaced light sources.
- Long strokes crossing every boundary and erasing subject identity.
- Text, signatures, logos, watermarks, or decorative arrows.

## 验收 · Acceptance

- 主体数量、位置与关键动作仍可辨。
  Subject count, placement, and key actions remain recognizable.
- 笔触方向与局部体积或水面运动相关。
  Stroke direction follows local volume or visible water motion.
- 不同物体有清晰边界，未被整体旋涡吞没。
  Distinct subjects retain boundaries rather than merging into a vortex.
- 光源与反射位置沿用原图，无新增发光体。
  Light and reflection positions follow the source without new emitters.

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
