---
name: primary-modular-still-life
description: Restyle a supplied photograph as primary modular still life / 原色模数组物. Use for this specific visual method while preserving observed subjects and structure.
---

# 原色模数组物 · Primary Modular Still Life

从器物轮廓提取圆、矩形和三角形，以原色模块保持原有的大小关系和摆放节奏。

A modernist geometric abstraction built from primary-color circles, rectangles and triangles derived from observed objects. Reduce each source object to a small set of geometric modules while preserving count, scale hierarchy and relative placement.

本方法改编自 acesjohnny 的 CC-BY-4.0 授权说明。原作者归属、来源与改动见 [provenance.json](provenance.json)，完整上游许可及其版权声明见 [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt)。

Adapted from acesjohnny's CC-BY-4.0-licensed instructions. [provenance.json](provenance.json) records the original author, pinned source and modifications; [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt) retains the complete upstream license and copyright notices.

原始归属 · Original attribution: Copyright (c) 2026 acesjohnny Adapted by MuziGeek from acesjohnny / GPT Image Style Atlas. Original style prompt licensed CC BY 4.0; modifications recorded below.

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

- 从器物轮廓提取圆、矩形和三角形，以原色模块保持原有的大小关系和摆放节奏。
- 识别特征：圆方三角、原色模块、关键负形。
- Medium anchor: A modernist geometric abstraction built from primary-color circles, rectangles and triangles derived from observed objects.

10. **medium** — A modernist geometric abstraction built from primary-color circles, rectangles and triangles derived from observed objects.
20. **composition** — Reduce each source object to a small set of geometric modules while preserving count, scale hierarchy and relative placement.
30. **texture** — Use crisp flat painted shapes with slight paper tooth; keep modules separate instead of adding torn collage edges.
40. **palette** — Use red, yellow, blue, black and warm white; distribute color by structural role rather than source surface decoration.
50. **lighting** — Flatten lighting into geometry; overlapping planes may use restrained tone steps but no photorealistic shadows.
60. **detail** — Maintain essential handles, gaps and dominant silhouettes as negative spaces; add no typography, diagrams or decorative objects.
70. **finish** — Deliver one finished image at the input aspect ratio, without comparison panels, unrequested text, logos, signatures or watermarks.

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

- Abstract observed objects into geometric modules while preserving count, scale hierarchy, relative placement and essential negative spaces.
- Source subject count, recognizable identity, essential openings and connected anatomy.
- The complete main subject within the original frame and the intended relative placement of objects.

## 适用范围与几何边界 · Applicability and geometry

- 适用：器物。
- Applies to: Object.
- 允许将实际物件抽象为几何模块，保留数量、大小层级、相对位置及关键负形。
- Abstract observed objects into geometric modules while preserving count, scale hierarchy, relative placement and essential negative spaces.
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

- Invented people, duplicate main subjects, extra limbs, disconnected anatomy or accidental clipping.
- Unrequested titles, logos, signatures, watermarks, fabricated labels or before-and-after panels.
- A generic filter without the requested medium-specific physical or optical mechanism.

## 验收 · Acceptance

- 从器物轮廓提取圆、矩形和三角形，以原色模块保持原有的大小关系和摆放节奏。
  Use crisp flat painted shapes with slight paper tooth; keep modules separate instead of adding torn collage edges.
- 允许将实际物件抽象为几何模块，保留数量、大小层级、相对位置及关键负形。
  Abstract observed objects into geometric modules while preserving count, scale hierarchy, relative placement and essential negative spaces.
- 主体轮廓和必要连接清楚，效果体现具体媒介机制。
  The source subject remains legible with coherent connections and a visibly implemented medium-specific mechanism.
- 只有一张完整成图，无无关文字、品牌或水印。
  One complete finished image without unrelated lettering, brands, signatures or watermarks.

## 配方、来源与许可 · Recipe, provenance and license

- [recipe.yaml](recipe.yaml): structured image-editing recipe / 结构化图像编辑配方。
- [provenance.json](provenance.json): original authorship, method context and example status / 原创归属、方法背景与示例状态。
- [LICENSE](LICENSE): MIT applies to MuziGeek's original contributions / MIT 适用于 MuziGeek 的原创贡献。
- [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt): acesjohnny · CC-BY-4.0. Adapted material retains these terms and attribution / 改编材料保留原许可和归属。
- 示例中的前后图均为 AI 合成，不是真人摄影或真实制作工艺的证据。结果会随模型与输入变化，不承诺相同输出。
- Example before/after images are AI-generated, not photographs of real people or evidence of physical craft production. Results vary by model and input.
- MIT 不授予用户输入、第三方作品、人物、商标或生成平台条款之外的权利；示例许可单独见 provenance。
- MIT grants no rights to user inputs, third-party works, likenesses or trademarks, and does not override generation-service terms; example terms are recorded separately in provenance.

## 示例状态 · Example status

ready：原图与效果图的真实生成及视觉审核记录齐全；COS 外链示例另保留上传回读凭证，不在仓库保存图片。ready 不代表网站已发布；公开媒体白名单发布前，图片链接可能返回 404。

ready: the source and effect have recorded real generation and approved visual reviews. COS-hosted examples also retain upload readback receipts; their image bytes are not bundled. Ready does not mean the website is released; image links may return 404 until the public media allowlist is published.

| AI 合成原图 · Source | 通过审核的效果 · Approved effect |
| --- | --- |
| <img src="https://photo-media.easymuzi.cn/media/samples/photo-primary-modular-still-life-960.webp" alt="AI-generated source" width="240"> | <img src="https://photo-media.easymuzi.cn/media/previews/primary-modular-still-life/v1/photo-primary-modular-still-life-0-960.webp" alt="Approved generated interpretation" width="240"> |

- [AI source / AI 合成原图](https://photo-media.easymuzi.cn/media/samples/photo-primary-modular-still-life-960.webp)
- [Generated interpretation / 生成效果](https://photo-media.easymuzi.cn/media/previews/primary-modular-still-life/v1/photo-primary-modular-still-life-0-960.webp)
- [Generation and visual review / 生成与视觉审核记录](examples/generation.json)
