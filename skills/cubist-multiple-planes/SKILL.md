---
name: cubist-multiple-planes
description: Restyle a supplied photograph as multiple-view planes / 多视角折面. Use for this specific visual method while preserving observed subjects and structure.
---

# 多视角折面 · Multiple-view planes

将主体拆解为少量互相咬合的色面，在局部叠合正侧视角与转折面，保留核心识别特征、主体数量和主要空间位置。

Rebuild the subject from interlocking planes and limited simultaneous viewpoints while keeping its identity, count, and spatial anchors legible.

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

- 将主体拆解为少量互相咬合的色面，在局部叠合正侧视角与转折面，保留核心识别特征、主体数量和主要空间位置。
- 识别特征：正侧视角叠合、咬合色面、局部角度转折。
- Medium anchor: Opaque painted planes using restrained simultaneous viewpoints and interlocking angular color masses.

10. **medium** — Reconstruct the scene as interlocking opaque painted planes with a limited blend of frontal and three-quarter views.
20. **palette** — Use muted ultramarine, ochre, and chalk tones; retain source color roles as identity anchors.
30. **line** — Use selective angular seams to articulate major volume changes; avoid outlining every small source detail.
40. **texture** — Give planes a dry mineral-paint surface with subtle brush drag and slight tonal variation.
50. **lighting** — Translate source light into coherent light and dark planes instead of photorealistic shading.
60. **composition** — Keep subject count, major positions, framing, and contact relationships; permit bounded local viewpoint overlap within each subject.
70. **detail** — Preserve key identity cues, pose, and object-contact relationships without duplicating complete subjects, faces, limbs, or components.
80. **finish** — Resolve larger planes first; keep readable figure-ground separation and a few deliberate areas of visual rest.

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

- Subject count and major spatial anchors.
- Recognizable facial identity, pose, and object contacts.
- Dominant source color roles and framing.

## 适用范围与几何边界 · Applicability and geometry

- 适用：人像、合影、器物、产品、风景。
- Applies to: Portrait, Group, Object, Product, Landscape.
- 允许主体内部局部折面与有限正侧视角叠合；不允许复制完整主体或破坏关键接触关系。
- Allow local faceting and bounded viewpoint overlap inside subjects; do not duplicate whole subjects or break key contacts.
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

- Extra heads, hands, bodies, or duplicated complete objects.
- Unrecognizable random polygons or uniformly shattered tiny facets.
- Text, signatures, logos, watermarks, or borrowed motifs.

## 验收 · Acceptance

- 主体数量及主要摆放位置不变。
  Subject count and major positions remain unchanged.
- 局部正侧视角可叠合，但不多出完整五官组或肢体。
  Local viewpoint overlaps do not create complete extra faces or limbs.
- 关键面部、姿态和持物关系仍可辨认。
  Key facial, pose, and held-object relationships remain recognizable.
- 色面具有主次与体积转折，不成为均匀碎片。
  Plane hierarchy conveys volume rather than uniform fragmentation.

## 配方、来源与许可 · Recipe, provenance and license

- [recipe.yaml](recipe.yaml): structured image-editing recipe / 结构化图像编辑配方。
- [provenance.json](provenance.json): original authorship, method context and example status / 原创归属、方法背景与示例状态。
- [LICENSE](LICENSE): MIT applies to MuziGeek's original contributions / MIT 适用于 MuziGeek 的原创贡献。
- 示例中的前后图均为 AI 合成，不是真人摄影或真实制作工艺的证据。结果会随模型与输入变化，不承诺相同输出。
- Example before/after images are AI-generated, not photographs of real people or evidence of physical craft production. Results vary by model and input.
- MIT 不授予用户输入、第三方作品、人物、商标或生成平台条款之外的权利；示例许可单独见 provenance。
- MIT grants no rights to user inputs, third-party works, likenesses or trademarks, and does not override generation-service terms; example terms are recorded separately in provenance.

## 示例状态 · Example status

draft：模板说明已编写；完整前后图的视觉验收尚未全部通过或记录齐全。

draft: the instructions are authored, but a complete before/after pair has not yet passed or recorded all required visual reviews.

| AI 合成原图 · Source | 通过审核的效果 · Approved effect |
| --- | --- |
| <img src="examples/source.webp" alt="AI-generated source" width="240"> | **尚无通过审核的效果图 / No approved effect** |

- [AI source / AI 合成原图](examples/source.webp)
- [Generation and visual review / 生成与视觉审核记录](examples/generation.json)
