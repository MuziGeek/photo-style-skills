---
name: single-ink-editorial-poster
description: Restyle a supplied photograph as single ink editorial poster / 高级单色印刷海报. Use for this specific visual method while preserving observed subjects and structure.
---

# 高级单色印刷海报 · Single Ink Editorial Poster

以一种油墨的疏密、网点和露纸高光重现照片主体，搭配非对称留白与清晰字级，形成克制的单色印刷海报。

Reproduce a recognizable photographic subject in one ink using screening and paper exposure, balanced by asymmetric spacing and a clear editorial type hierarchy.

本方法改编自 Yan Liu / yanliudesign 的 MIT 授权说明。原作者归属、来源与改动见 [provenance.json](provenance.json)，完整上游许可及其版权声明见 [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt)。

Adapted from Yan Liu / yanliudesign's MIT-licensed instructions. [provenance.json](provenance.json) records the original author, pinned source and modifications; [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt) retains the complete upstream license and copyright notices.

原始归属 · Original attribution: Copyright (c) 2026 Yan Liu Adapted by MuziGeek from Yan Liu / yanliudesign, Monocolor Editorial Print. The original skill instructions are MIT licensed; original examples and third-party reference images are excluded.

## 输入分析与实际保留

1. 读取用户提供的原图；若没有可用图片，先请求图片。不要用本仓库示例代替用户输入。
2. 观察原图主体、身份、数量、连接、遮挡、光线和画幅。依据本 Skill 的保留约束与几何边界，区分需要保留及明确允许转化的部分。样片说明不能当作用户输入的事实。
3. 使用支持参考图编辑的可用工具，把原图作为编辑输入。先说明观察到的主体，再结合下方机制及 [recipe.yaml](recipe.yaml) 按顺序组合指令；工具名称不是必须安装的依赖。
4. 本方法的实际构图为 3:4（nativeAspect），按下方明确版式执行；配方中的 4:5 仅用于目录派生展示，不是实际构图或原图比例，不授权裁去必须保留的主体。
5. 对照输入检查结果；只修正发现的问题，不为了增强风格改变身份或添加无关景物。区分已完成的视觉检查与尚未验证的效果。

## Input analysis and preservation

1. Inspect the supplied image; request an image only when none is available. Never substitute a repository example for the user's input.
2. Inspect the real subjects, identity, counts, attachments, overlaps, light and framing. Distinguish preserved attributes from explicitly permitted transformations using this Skill’s preservation and geometry rules; sample descriptions are not facts about user input.
3. Use an available reference-image editing tool. Combine the observed facts with the ordered mechanisms in [recipe.yaml](recipe.yaml); its model-family label does not require an installation script.
4. This method uses 3:4 nativeAspect for its actual composition, as specified below. The recipe's 4:5 is only a derived catalog display format, not the composition or source ratio, and never permits cropping protected subjects.
5. Compare output with input and correct observed failures. Report only visual checks actually completed; stronger styling must not override identity or scene integrity.

## 风格机制 · Style mechanism

- 以一种油墨的疏密、网点和露纸高光重现照片主体，搭配非对称留白与清晰字级，形成克制的单色印刷海报。
- 识别特征：单色网点、高光露纸、非对称编辑版式。
- Medium anchor: One-ink mechanical reproduction on neutral paper, with active negative space and asymmetric editorial typography.

10. **composition** — Create one front-facing portrait 3:4 editorial poster; choose one recognizable subject from the supplied photograph.
   输出正面平视的3:4竖版海报，从原照中确定一个清楚可辨的视觉主体。
20. **palette** — Use exactly one printing ink for imagery, letters and rules; use botanical green for this sample and neutral white paper.
   图像、文字与细线只使用一种油墨；本样本用植物绿墨与中性白纸。
30. **medium** — Translate photographic tones through ink coverage, screened dots and exposed paper; never simulate monochrome with a translucent color wash.
   用积墨、网点疏密与裸露纸面转译明暗，不能仅给照片叠半透明色罩。
40. **detail** — Keep the subject silhouette, internal identifying features and structural connections readable despite tonal simplification.
   即使简化色调，仍保留主体轮廓、辨识细节及结构连接。
50. **composition** — Reserve approximately one third of the page as open paper; arrange image and type around one asymmetric focal event.
   约三分之一页面留为完整纸面，图像和字体围绕一个非对称视觉重心安排。
60. **typography** — Use the supplied short title with strong serif display type and restrained monospaced support; do not invent dates or factual metadata.
   短标题采用有力的衬线展示字，辅助字使用克制等宽体；不编造日期或事实信息。
70. **texture** — Let paper show through selected highlights, with slightly broken ink coverage and fine grain only inside printed areas.
   部分高光直接露纸，仅在印刷区域保留少量断墨与细颗粒。
80. **composition** — Align supporting elements to a shared invisible edge; allow one deliberate offset while leaving the main subject unobstructed.
   辅助元素沿同一隐形边线对齐，仅设一处有意错位，并保证主体清楚。
90. **finish** — Keep the page clean and flat, without a room mockup, heavy distress, external frame, decorative stickers or watermark.
   页面平整干净，不做空间样机、重度做旧、外框、装饰贴纸或水印。

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

- 保留原图主体及其标志性轮廓；编辑裁切不得切除辨识部位。
  Preserve the source subject and its defining contours; limited editorial cropping must not remove identifying features.
- 连接和遮挡关系须清楚；调整印刷表现与版面，不凭空增加对象。
  Keep attachment and overlap relationships intelligible; change reproduction and placement rather than inventing objects.
- 用户给出的文字逐字保留；样本文案不强制应用于后续输入。
  Use supplied text verbatim when present; sample wording is not mandatory for future inputs.

## 适用范围与几何边界 · Applicability and geometry

- 适用：器物、产品、人像、风景。
- Applies to: Object, Product, Portrait, Landscape.
- 允许保留识别特征的局部裁切、缩放与编辑排版；不改变主体形状、连接或身份。 recipe.yaml 保留本次样本实际执行的具体指令；换用其他输入前，须先将样本物体与样本配色绑定到已观察实体及用户选择，缺失实体的条款直接跳过，禁止据此新增对象。本次样例审核不证明其他输入均已通过验证，也不声称执行了新的通用配方版本。 蕨叶、植物绿和 FERN STUDY 仅属本次样本；其他输入保留其真实主体，依据用户选择确定唯一墨色与短标题，不凭空添加植物。
- Editorial cropping, scaling and placement are allowed while defining features remain; identity, shape and attachments must not change. recipe.yaml preserves the concrete instructions executed for this sample. Before another input, bind sample objects and sample colors to observed entities and user choices; skip clauses for absent entities and never introduce objects to satisfy them. This sample review does not validate every input or claim execution of a new generalized recipe version. Fern leaves, botanical green and FERN STUDY belong to this sample; other inputs retain their actual subject and use the requested single ink and title, without inventing plants.
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

- 多色油墨、照片染色、满页色雾或在彩底上直接贴灰度照片。
  Multiple ink hues, photo tinting, full-page colored haze or grayscale photography pasted onto a colored page.
- 主体不清、虚构说明、过多噪点、旧污渍、拼贴装饰堆积、样机投影或水印。
  Unreadable subject, false captions, excessive noise, aged stains, decorative scrapbook clutter, mockup shadows or watermarks.

## 验收 · Acceptance

- 原图主体和关键结构可辨，未被文字遮断。
  Source subject and key structure remain identifiable without obstructing typography.
- 全图只呈现一种墨色及纸色，明暗由网点和覆盖密度形成。
  Only one ink hue and paper appear; density and screening describe tones.
- 留白、主标题与图像具有明确主次，不均匀铺满。
  Open paper, title and image establish a clear hierarchy instead of uniform density.
- 输出3:4平面海报，无多余标志、水印或空间样机。
  One flat 3:4 poster without extra marks, watermarks or spatial mockups.

## 配方、来源与许可 · Recipe, provenance and license

- [recipe.yaml](recipe.yaml): structured image-editing recipe / 结构化图像编辑配方。
- [provenance.json](provenance.json): original authorship, method context and example status / 原创归属、方法背景与示例状态。
- [LICENSE](LICENSE): MIT applies to MuziGeek's original contributions / MIT 适用于 MuziGeek 的原创贡献。
- [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt): Yan Liu / yanliudesign · MIT. Adapted material retains these terms and attribution / 改编材料保留原许可和归属。
- 示例中的前后图均为 AI 合成，不是真人摄影或真实制作工艺的证据。结果会随模型与输入变化，不承诺相同输出。
- Example before/after images are AI-generated, not photographs of real people or evidence of physical craft production. Results vary by model and input.
- MIT 不授予用户输入、第三方作品、人物、商标或生成平台条款之外的权利；示例许可单独见 provenance。
- MIT grants no rights to user inputs, third-party works, likenesses or trademarks, and does not override generation-service terms; example terms are recorded separately in provenance.

## 示例状态 · Example status

ready：原图与效果图的真实生成及视觉审核记录齐全；COS 外链示例另保留上传回读凭证，不在仓库保存图片。ready 不代表网站已发布；公开媒体白名单发布前，图片链接可能返回 404。

ready: the source and effect have recorded real generation and approved visual reviews. COS-hosted examples also retain upload readback receipts; their image bytes are not bundled. Ready does not mean the website is released; image links may return 404 until the public media allowlist is published.

| AI 合成原图 · Source | 通过审核的效果 · Approved effect |
| --- | --- |
| <img src="https://photo-media.easymuzi.cn/media/samples/photo-single-ink-editorial-poster-960.webp" alt="AI-generated source" width="240"> | <img src="https://photo-media.easymuzi.cn/media/previews/single-ink-editorial-poster/v1/photo-single-ink-editorial-poster-0-960.webp" alt="Approved generated interpretation" width="240"> |

- [AI source / AI 合成原图](https://photo-media.easymuzi.cn/media/samples/photo-single-ink-editorial-poster-960.webp)
- [Generated interpretation / 生成效果](https://photo-media.easymuzi.cn/media/previews/single-ink-editorial-poster/v1/photo-single-ink-editorial-poster-0-960.webp)
- [Generation and visual review / 生成与视觉审核记录](examples/generation.json)
