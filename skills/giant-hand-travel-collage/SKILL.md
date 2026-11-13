---
name: giant-hand-travel-collage
description: Restyle a supplied photograph as giant hand travel collage / 巨手旅行拼贴. Use for this specific visual method while preserving observed subjects and structure.
---

# 巨手旅行拼贴 · Giant Hand Travel Collage

上半保留旅行原照，下半把同源景物剪贴重排，让一只真实巨手接触其中一件主体，以尺度反差形成旧杂志拼贴。

Pair the source photograph with a rearranged magazine collage where one realistic oversized hand physically handles a recognizable scene element.

配方文字由 MuziGeek 根据已记录的抖音视觉方法研究独立编写；来源作者、视频链接、阅读时间戳及证据位置见 [provenance.json](provenance.json)。不转载来源长提示词或示例图片，不声称发明这些视觉方法，也不将来源内容改授为 MIT。样本文案为另行提供的示例，不冒充视频原文。

Recipe wording independently authored by MuziGeek after the documented Douyin visual-method research. [provenance.json](provenance.json) records the author, video URL, timestamps and evidence locations. Source prompt prose and example images are not republished; no invention of the visual methods or MIT relicensing of source content is claimed. Sample copy is separately supplied, not represented as a video quotation.



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

- 上半保留旅行原照，下半把同源景物剪贴重排，让一只真实巨手接触其中一件主体，以尺度反差形成旧杂志拼贴。
- 识别特征：真实巨手接触、原照与剪贴双联、尺度错位。
- Medium anchor: A source-photo diptych with a surreal lower collage of photographic cutouts and one physically interacting oversized human hand.

10. **composition** — Output one portrait 3:4 sheet, with the unaltered source photograph above and a newly arranged collage below.
   输出一张3:4竖幅，上区为完整原照，下区为重新组织的拼贴。
20. **composition** — Fit the whole source into the upper area without stretching; keep its original scene, colors and photographic detail readable.
   上区自然容纳原照，不拉伸，保留场景、颜色与摄影细节。
30. **composition** — Extract the lower composition's subjects from this same photograph; change scale and overlap rather than merely placing a hand over the source.
   下区的景物全部从同一原照提取，以大小变化和相互遮挡重新构图，不能只在原照上贴一只手。
40. **detail** — Choose one clearly recognizable object or person for interaction; introduce exactly one oversized realistic hand from a lower-panel edge.
   选择一件清楚可辨的物体或人物互动，仅从下区边缘伸入一只真实而巨大的手。
50. **detail** — Make fingers genuinely pinch, lift, support or touch that selected subject, with coherent finger joints, contact shadows and occlusion.
   手指真正捏住、提起、托住或触碰主体，关节、接触阴影及遮挡关系正确。
60. **detail** — Remove the handled subject from its former lower-panel position; the unchanged upper photograph may still contain it.
   下区被拿起的主体不再留在原位置；上区原照中保留它不算错误重复。
70. **palette** — Retain source texture on cutouts; simplify surrounding areas into broad flat colors sampled from the photograph.
   剪贴主体保留原照纹理，周边背景概括为从原照提取的大面积纯色。
80. **texture** — Add restrained clipped-paper edges, sparse round dots and uneven print grain; maintain the distinction between printed cutouts and realistic skin.
   克制加入纸片边、少量圆点及不均匀印刷颗粒，摄影剪贴与真实皮肤仍有清楚区别。
90. **typography** — Use at most one tiny cut-letter phrase, HANDHELD MOMENT for the sample, integrated into the collage rather than a label.
   最多使用一句很小的剪贴字，样本使用HANDHELD MOMENT，字应进入拼贴构图而非成为说明标签。
100. **finish** — Keep the lower composition visibly transformed through scale and placement; add no external frame, annotation labels or watermark.
   下区必须通过尺度与位置形成明确变化，不加外框、标注标签或水印。

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

- 上区保持完整原景。
  Keep the complete source scene intact in the upper panel.
- 下区允许移动和缩放同源剪贴，保持身份、姿态、轮廓及照片纹理。
  Lower cutouts preserve observed identity, pose, silhouette and source texture; moving and scaling are explicitly permitted.
- 仅允许新增一只互动手，其他图像主体均须来自输入。
  Only the single interacting hand may be introduced; all other pictorial subjects come from the input.

## 适用范围与几何边界 · Applicability and geometry

- 适用：风景、人像、器物、产品。
- Applies to: Landscape, Portrait, Object, Product.
- 双联内部允许同一主体上下出现；下区允许缩放、提起与重排，但一只手须与一个选定主体发生真实接触。
- The source subject may appear once in each panel. Lower-panel scale and placement may change, with one hand contacting one selected subject.
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

- 仅套滤镜，或下区照片不变只叠一只手。
  A full-scene filter or a hand pasted onto an otherwise unchanged lower photograph.
- 多只手、错误手指、无接触支撑、下区被拿起的主体原位重复。
  Multiple hands, malformed fingers, floating contact, duplicated handled subjects inside the lower panel.
- 无关地标道具、强制黑白化、说明标签、外框、品牌或水印。
  Foreign landmarks, unrelated props, mandatory monochrome conversion, explanatory labels, external frames, logos or watermarks.

## 验收 · Acceptance

- 上区原照完整可辨，下区确实重新构图。
  The complete source remains readable above a genuinely recomposed lower panel.
- 单只巨手与选定主体正确接触，拿起处不残留副本。
  One oversized hand contacts the selected subject correctly; no lower-panel copy remains behind.
- 剪贴保留原照纹理，并有纯色、纸边与少量印刷颗粒。
  Cutouts retain source texture alongside flat color, paper edges and restrained print grain.
- 输出3:4竖幅，无外框、标签或水印。
  One portrait 3:4 result without exterior framing, labels or watermarks.

## 配方、来源与许可 · Recipe, provenance and license

- [recipe.yaml](recipe.yaml): structured image-editing recipe / 结构化图像编辑配方。
- [provenance.json](provenance.json): original authorship, method context and example status / 原创归属、方法背景与示例状态。
- [LICENSE](LICENSE): MIT applies to MuziGeek's original contributions / MIT 适用于 MuziGeek 的原创贡献。
- 示例中的前后图均为 AI 合成，不是真人摄影或真实制作工艺的证据。结果会随模型与输入变化，不承诺相同输出。
- Example before/after images are AI-generated, not photographs of real people or evidence of physical craft production. Results vary by model and input.
- MIT 不授予用户输入、第三方作品、人物、商标或生成平台条款之外的权利；示例许可单独见 provenance。
- MIT grants no rights to user inputs, third-party works, likenesses or trademarks, and does not override generation-service terms; example terms are recorded separately in provenance.

## 示例状态 · Example status

ready：原图与效果图的真实生成及视觉审核记录齐全；COS 外链示例另保留上传回读凭证，不在仓库保存图片。ready 不代表网站已发布；公开媒体白名单发布前，图片链接可能返回 404。

ready: the source and effect have recorded real generation and approved visual reviews. COS-hosted examples also retain upload readback receipts; their image bytes are not bundled. Ready does not mean the website is released; image links may return 404 until the public media allowlist is published.

| AI 合成原图 · Source | 通过审核的效果 · Approved effect |
| --- | --- |
| <img src="https://photo-media.easymuzi.cn/media/samples/photo-giant-hand-travel-collage-960.webp" alt="AI-generated source" width="240"> | <img src="https://photo-media.easymuzi.cn/media/previews/giant-hand-travel-collage/v1/photo-giant-hand-travel-collage-0-960.webp" alt="Approved generated interpretation" width="240"> |

- [AI source / AI 合成原图](https://photo-media.easymuzi.cn/media/samples/photo-giant-hand-travel-collage-960.webp)
- [Generated interpretation / 生成效果](https://photo-media.easymuzi.cn/media/previews/giant-hand-travel-collage/v1/photo-giant-hand-travel-collage-0-960.webp)
- [Generation and visual review / 生成与视觉审核记录](examples/generation.json)
