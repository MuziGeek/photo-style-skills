---
name: contour-band-abstraction
description: Restyle a supplied photograph as contour bands / 等高线图. Use for this specific visual method while preserving observed subjects and structure.
---

# 等高线图 · Contour bands

把明暗与体积转折重绘为连续等值带，线条沿主体表面流动，利用疏密与色阶建立深度，保留外轮廓和主要结构。

Translate tonal and volume changes into continuous contour bands whose spacing and color steps preserve the subject's silhouette and structure.

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

- 把明暗与体积转折重绘为连续等值带，线条沿主体表面流动，利用疏密与色阶建立深度，保留外轮廓和主要结构。
- 识别特征：连续等值带、疏密表达体积、阶梯色层。
- Medium anchor: Continuous topographic-style contour bands derived from image luminance and perceived surface volume, without labels or cartographic symbols.

10. **medium** — Repaint source forms as nested contour bands derived from their luminance and perceived depth, without literal map labels.
20. **palette** — Use deep blue-green, warm sand, and pale mist in stepped tonal intervals that preserve source light-dark hierarchy.
30. **line** — Let continuous isolines wrap around major forms; increase density near steep tonal transitions and open spacing across calm areas.
40. **texture** — Use clean matte bands with slight paper grain; avoid embossed relief, shiny plastic, or photographic texture overlays.
50. **lighting** — Express lighting through band values and spacing while retaining the original broad illumination direction.
60. **composition** — Keep outer silhouettes, horizon placement, foreground-background order, and the major shoreline geometry.
70. **detail** — Simplify small textures into coherent bands; keep key separations between subjects, support surfaces, and background readable.
80. **finish** — Maintain balanced band widths and clear subject recognition; remove accidental tangencies and distracting isolated contour fragments.

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

- Outer silhouettes, subject count, horizon, and major boundaries.
- Foreground-background order and dominant tonal hierarchy.
- Distinct separations between adjacent source subjects.

## 适用范围与几何边界 · Applicability and geometry

- 适用：风景、器物、人像、美食、产品。
- Applies to: Landscape, Object, Portrait, Food, Product.
- 允许将内部纹理简化为等值带；保持外轮廓、主体数量和主要空间分区。
- Allow internal texture simplification into contour bands while retaining outer silhouettes, counts, and major spatial regions.
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

- Map labels, legends, coordinates, arrows, or invented geographic symbols.
- Random concentric circles unrelated to source form.
- Lost subject boundaries, duplicated landmarks, text, logos, or watermarks.

## 验收 · Acceptance

- 主体外轮廓、远近关系及主要分界仍清晰。
  Outer silhouettes, depth order, and main boundaries stay clear.
- 等值带顺应原图结构，不是随机同心圆。
  Contour bands follow source structure rather than arbitrary concentric circles.
- 线密度和色阶共同表达体积与明暗。
  Band density and color steps jointly describe volume and light.
- 画面不包含地图标注、数字或新增地形。
  No map labels, numbers, or invented terrain are added.

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
