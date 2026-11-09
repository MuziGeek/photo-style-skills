---
name: scanographic-food-study
description: Restyle a supplied photograph as scanographic food study / 扫描成像食物. Use for this specific visual method while preserving observed subjects and structure.
---

# 扫描成像食物 · Scanographic Food Study

将照片主体转为扫描成像食物，近面细节均匀清楚，黑底边缘渐暗且无棚拍投影。保留可辨身份与主要空间关系。

A scanographic food still life with even close-surface illumination, deep black surroundings and flattened spatial depth. Translate the same dish with scanner-like illumination and flattened depth while preserving visible ingredient counts, arrangement, material identity and the original viewpoint.

原创方法说明，由 MuziGeek 编写；没有声称改编自外部提示词。

Original method instructions authored by MuziGeek; no external prompt adaptation is asserted.



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

- 将照片主体转为扫描成像食物，近面细节均匀清楚，黑底边缘渐暗且无棚拍投影。保留可辨身份与主要空间关系。
- 识别特征：近面均匀照明、无投影黑底、边缘自然衰减。
- Medium anchor: A scanographic food still life with even close-surface illumination, deep black surroundings and flattened spatial depth.

10. **medium** — A scanographic food still life with even close-surface illumination, deep black surroundings and flattened spatial depth.
20. **composition** — Translate the same dish with scanner-like illumination and flattened depth while preserving visible ingredient counts, arrangement, material identity and the original viewpoint.
30. **texture** — Use broad shadowless near-plane detail and gentle edge falloff; avoid photographic cast shadows, collage borders or fake scanner hardware.
40. **palette** — Use a controlled palette appropriate to the requested medium; retain identifying source colors whenever the mechanism permits.
50. **lighting** — Keep illumination internally consistent across the entire edited image, with contact shadows appropriate to the requested medium.
60. **detail** — Retain source subject count, essential openings and connected anatomy; remove no identifying detail unless the permitted transformation requires it.
70. **finish** — Deliver one finished image at the input aspect ratio, without comparison panels, new lettering, logos, watermarks or an external frame.

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

- Source subject count, recognizable identity, main pose and connected anatomy, subject to the explicitly permitted transformation.
- Essential openings, attachments and foreground-to-background relationships.
- The complete main subject within the input frame; no accidental clipping.

## 适用范围与几何边界 · Applicability and geometry

- 适用：美食。
- Applies to: Food.
- 仅以均匀扫描式照明压平视觉景深；保留原视角、可见食材与排列，不揭示隐藏表面。
- Flatten apparent depth through even scanner-like illumination; retain the original viewpoint, all visible ingredients and their order without exposing hidden surfaces.
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

- Invented people, extra limbs, duplicate main subjects or disconnected anatomy.
- Unrequested logos, decorative writing, watermarks or fabricated technical claims.
- A generic filter that fails to implement the specified physical or optical mechanism.

## 验收 · Acceptance

- 近面细节均匀清楚，黑底边缘渐暗且无棚拍投影。
  Use broad shadowless near-plane detail and gentle edge falloff; avoid photographic cast shadows, collage borders or fake scanner hardware.
- 仅以均匀扫描式照明压平视觉景深；保留原视角、可见食材与排列，不揭示隐藏表面。
  Flatten apparent depth through even scanner-like illumination; retain the original viewpoint, all visible ingredients and their order without exposing hidden surfaces.
- 主体清楚可辨，连接自然；效果必须体现具体机制，不能只是通用滤镜。
  The subject remains legible with coherent connections; the requested physical or optical mechanism is visibly implemented.
- 只交付一张完整成图，无无关文字、品牌、边框或虚构测量数据。
  Return one finished image without unrelated lettering, brands, frames or fabricated measurements.

## 配方、来源与许可 · Recipe, provenance and license

- [recipe.yaml](recipe.yaml): structured image-editing recipe / 结构化图像编辑配方。
- [provenance.json](provenance.json): original authorship, method context and example status / 原创归属、方法背景与示例状态。
- [LICENSE](LICENSE): MIT applies to MuziGeek's original contributions / MIT 适用于 MuziGeek 的原创贡献。
- 示例中的前后图均为 AI 合成，不是真人摄影或真实制作工艺的证据。结果会随模型与输入变化，不承诺相同输出。
- Example before/after images are AI-generated, not photographs of real people or evidence of physical craft production. Results vary by model and input.
- MIT 不授予用户输入、第三方作品、人物、商标或生成平台条款之外的权利；示例许可单独见 provenance。
- MIT grants no rights to user inputs, third-party works, likenesses or trademarks, and does not override generation-service terms; example terms are recorded separately in provenance.

## 示例状态 · Example status

ready：原图与效果图的真实生成及视觉审核记录齐全；COS 外链示例另保留上传回读凭证，不在仓库保存图片。

ready: the source and effect have recorded real generation and approved visual reviews. COS-hosted examples also retain upload readback receipts; their image bytes are not bundled.

| AI 合成原图 · Source | 通过审核的效果 · Approved effect |
| --- | --- |
| <img src="https://photo-media.easymuzi.cn/media/samples/photo-scanographic-food-study-960.webp" alt="AI-generated source" width="240"> | <img src="https://photo-media.easymuzi.cn/media/previews/scanographic-food-study/v1/photo-scanographic-food-study-0-960.webp" alt="Approved generated interpretation" width="240"> |

- [AI source / AI 合成原图](https://photo-media.easymuzi.cn/media/samples/photo-scanographic-food-study-960.webp)
- [Generated interpretation / 生成效果](https://photo-media.easymuzi.cn/media/previews/scanographic-food-study/v1/photo-scanographic-food-study-0-960.webp)
- [Generation and visual review / 生成与视觉审核记录](examples/generation.json)
