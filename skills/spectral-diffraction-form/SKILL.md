---
name: spectral-diffraction-form
description: Restyle a supplied photograph as spectral diffraction / 光谱衍射. Use for this specific visual method while preserving observed subjects and structure.
---

# 光谱衍射 · Spectral diffraction

沿主体边缘与高光区域展开受控光谱色带，以细小干涉纹和颜色分离表达光学变化，保留单一主体和清晰轮廓。

Introduce controlled spectral bands near edges and highlights, using fine interference texture and local color separation without duplicating the subject.

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

- 沿主体边缘与高光区域展开受控光谱色带，以细小干涉纹和颜色分离表达光学变化，保留单一主体和清晰轮廓。
- 识别特征：局部光谱分色、细干涉色带、中性主体底。
- Medium anchor: Source-bound spectral color separation and fine diffraction-like interference bands localized around edges and highlights.

10. **medium** — Repaint the subject with restrained spectral diffraction bands localized to existing edges, highlights, and changes in surface orientation.
20. **palette** — Use muted cyan, violet, and warm amber transitions over a neutral base; keep broad regions quiet and low saturation.
30. **line** — Allow tiny chromatic edge offsets inside the original silhouette, never full duplicated outlines or ghost subjects.
40. **texture** — Add fine interference bands at plausible local scales, avoiding glitter, holographic stickers, or uniform rainbow wallpaper.
50. **lighting** — Follow the original light direction; spectral intensity peaks near existing highlights and glancing surfaces.
60. **composition** — Keep subject count, silhouette, component placement, openings, framing, and support contacts intact.
70. **detail** — Preserve openings and narrow component boundaries through neutral separation where spectral colors approach each other.
80. **finish** — Finish with legible geometry and selective optical color, without new light sources, prisms, or luminous background effects.

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

- A single recognizable subject with unchanged counts, openings, and attachments.
- Source silhouette, position, framing, and support contacts.
- Original light locations and broad tonal hierarchy.

## 适用范围与几何边界 · Applicability and geometry

- 适用：产品、器物、人像、夜景。
- Applies to: Product, Object, Portrait, Night.
- 允许轮廓内部极小色通道偏移；不允许主体复制、外边界位移或孔洞闭合。
- Allow tiny internal chromatic offsets only; prohibit subject duplication, outer-boundary displacement, or closure of openings.
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

- Ghost copies, displaced silhouettes, additional prisms, or rainbow beams.
- Uniform holographic foil, glitter, stars, or decorative spectral stickers.
- Filled openings, extra straps, text, logos, or watermarks.

## 验收 · Acceptance

- 主体只有一份，轮廓和开口保持清楚。
  Only one subject remains, with clear contours and openings.
- 光谱集中于原有边缘、高光与转折区。
  Spectral color is localized to original edges, highlights, and turns.
- 色带细腻且留有中性区域，不铺满彩虹。
  Fine bands leave quiet neutral areas instead of covering everything.
- 无新增棱镜、光束、星点或发光背景。
  No prisms, beams, stars, or luminous backgrounds are added.

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
