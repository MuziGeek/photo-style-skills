---
name: brushed-aluminum-form
description: Restyle a supplied photograph as brushed aluminum / 拉丝铝形. Use for this specific visual method while preserving observed subjects and structure.
---

# 拉丝铝形 · Brushed aluminum

以方向一致的细拉丝和低饱和银灰反射重塑主体表面，突出各面的朝向与转折，保持轮廓、间隙和部件连接清晰。

Render the subject in satin aluminum with directional brushing and cool silver reflections that clarify planes without changing its construction.

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

- 以方向一致的细拉丝和低饱和银灰反射重塑主体表面，突出各面的朝向与转折，保持轮廓、间隙和部件连接清晰。
- 识别特征：方向性细拉丝、银灰缎面、各向异性反光。
- Medium anchor: Satin brushed aluminum with fine directional abrasion and anisotropic reflections aligned to individual surfaces.

10. **medium** — Translate existing solid surfaces into satin brushed aluminum while preserving all component shapes, joints, gaps, and attachments.
20. **palette** — Use cool silver, neutral graphite shadows, and soft pearl highlights with minimal color saturation.
30. **line** — Keep straight edges and curved boundaries faithful; do not add bevels, seams, screws, or technical markings.
40. **texture** — Align fine brushing with each surface's construction direction; curved parts receive smoothly wrapping grain.
50. **lighting** — Retain illumination direction and create elongated anisotropic highlights across the brushing, avoiding mirror-like reflections.
60. **composition** — Keep original subject count, framing, perspective, placement, and surrounding negative space.
70. **detail** — Maintain readable joints and overlapping parts through local reflection changes rather than invented hardware.
80. **finish** — Finish with consistent satin roughness and subtle grain; avoid chrome polish, glitter, or heavily scratched distressing.

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

- Subject count, outer silhouette, openings, attachments, and contact points.
- Source camera viewpoint, framing, relative scale, and placement.
- Recognizable subject identity and existing background structure.

## 适用范围与几何边界 · Applicability and geometry

- 适用：产品、器物。
- Applies to: Product, Object.
- 仅改变原有实体外表和材质表现，不增减部件，不改变轮廓、开口或摆放。
- Change existing solid surfaces and their material response only; retain parts, silhouettes, openings, and placement.
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

- Added screws, vents, bevels, industrial labels, or extra joints.
- Mirror chrome, glitter, rust, or coarse scratches.
- Changed arm count, closed gaps, text, logos, or watermarks.

## 验收 · Acceptance

- 原有部件、间隙和连接方式保持一致。
  Original parts, gaps, and connections remain intact.
- 每个表面的拉丝方向清楚且符合曲面。
  Brushing directions read clearly and follow local surfaces.
- 反光呈缎面而非镜面镀铬。
  Reflections remain satin rather than mirror chrome.
- 没有新增技术标识、螺丝或结构细节。
  No technical labels, screws, or structural details are invented.

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
