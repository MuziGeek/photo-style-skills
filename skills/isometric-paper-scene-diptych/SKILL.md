---
name: isometric-paper-scene-diptych
description: Restyle a supplied photograph as isometric paper scene diptych / 等距纸模双联. Use for this specific visual method while preserving observed subjects and structure.
---

# 等距纸模双联 · Isometric Paper Scene Diptych

上半保留原始摄影，下半用同源色盘、精细墨线和纸纹重构等距微型场景，严格等高双联并留出大面积空白。

Match an intact upper photograph with a small source-colored isometric paper-model illustration below, using equal-height panels and generous empty space.

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

- 上半保留原始摄影，下半用同源色盘、精细墨线和纸纹重构等距微型场景，严格等高双联并留出大面积空白。
- 识别特征：等高原照双联、等距纸模体块、墨线与纸纹。
- Medium anchor: An equal-height photo-and-isometric-illustration diptych, with a small ink-lined paper-model scene isolated on a quiet lower field.

10. **composition** — Create one portrait 3:4 sheet divided into exactly equal upper and lower regions, each 50% of the full height.
   制作一张3:4竖幅，上下严格等高，各占总高度50%。
20. **composition** — Keep the original photograph in the upper half with mild editorial grading; preserve its structure, light, material and natural color character.
   上半保留原照，只轻做编辑摄影调色，结构、光线、材质和自然色彩性格不变。
30. **composition** — Fit the upper photograph through restrained environment extension where necessary; never stretch, twist or redesign its principal subject.
   需要适配时克制扩展环境，不能拉伸、扭曲或重新设计主体。
40. **medium** — In the lower half, reinterpret the recognizable subject and its relationships as a small isometric paper-model illustration, not photographic texture mapping.
   下半把可辨主体和关系重新表达为小型等距纸模插画，不贴摄影纹理。
50. **composition** — Use a consistent axonometric view, simplified solid volumes, clean edges and a tiny cropped ground base surrounded by abundant blank paper.
   使用统一轴测视角、概括体块、清晰边缘和一小块裁切地台，周围大量留白。
60. **detail** — Preserve defining posture, silhouette, openings and adjacency; compress minor detail rather than copying every texture or inventing a second focal point.
   保留标志姿态、轮廓、开口及邻接关系，省略细碎纹理，不产生第二重心。
70. **texture** — Describe structure with fine ink contours, restrained flat color planes, paper grain and light soft shadows.
   用细墨线、克制平涂、纸张颗粒和轻软影表现结构。
80. **palette** — Sample the upper photograph's identifying colors and warm-cool relationships; purify and soften them into a small coherent palette without unrelated presets.
   从上半原照提取识别色与冷暖关系，提纯柔化为有限色盘，不套无关固定配色。
90. **palette** — Separate adjacent volumes using close hues and modest value changes; avoid glossy plastic rendering and candy-like saturation.
   靠邻近色与小幅明度差区分体块，避免塑料高光和糖果饱和度。
100. **composition** — Use scale contrast, trimmed ground edges and a few tiny source-related supports to suggest a miniature exhibit; leave the surroundings spacious.
   用尺度差、地台裁边及少量同源微小支撑元素产生微型陈列感，背景保持宽松。
110. **typography** — Integrate a short English title with the base or a quiet layout axis; allow one sparse number or note in slender modern type.
   短英文标题与基座或留白轴线结合，可加一个稀疏编号或注释，使用纤细现代字体。
120. **typography** — For this sample use THE BLUE DOOR and STUDY 01; for other inputs use supplied copy or a short observed-subject title.
   本样本使用THE BLUE DOOR与STUDY 01；其他输入改用用户文字或依据所见主体写简短标题。
130. **finish** — Keep the upper photograph and lower illustration clearly distinct; produce one complete diptych, not multiple separate cards or a busy miniature city.
   上照下插画清楚区分，只交付一张完整双联，不拆成多卡，也不堆成繁忙微缩城市。

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

- 上区摄影保持实际身份、结构、颜色与自然光。
  Upper photography preserves actual identity, structure, source palette and natural lighting.
- 下区允许转为等距视角并概括细节，但保留可辨关系和标志几何。
  Lower illustration may change viewpoint to isometric and simplify detail while preserving recognizable subject relationships and defining geometry.
- 上下重复主体属于双联构图，辅助元素须同源并保持次要。
  The repeated subject in the two panels is intentional; source-related secondary pieces must stay visually subordinate.

## 适用范围与几何边界 · Applicability and geometry

- 适用：风景、器物、产品、人像。
- Applies to: Landscape, Object, Product, Portrait.
- 仅下区可换为等距视角、提炼体块并增加小型地台；上区摄影不改结构。
- Only the lower panel may adopt an isometric viewpoint, simplified volumes and a small base; upper photographic structure remains intact.
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

- 上下不等高、全画面纸雕却无原照，或多张输出拼九宫格。
  Unequal panel heights, a full-canvas paper diorama with no source photograph, or multiple outputs combined into a grid.
- 纸模上贴摄影纹理、替换成圆角玩具积木、塑料CG光泽、卡通脸或无关固定色。
  Photographic textures pasted on model faces, rounded toy-block substitution, glossy plastic CGI, cartoon faces and unrelated fixed colors.
- 繁密景物、多重视觉中心、电商陈列杂物、大字、虚构地点日期、品牌和水印。
  Dense scenery, competing focal objects, commercial product-display clutter, large text, invented location or date, branding and watermarks.

## 验收 · Acceptance

- 3:4竖幅上下高度各50%，上半仍是原始摄影。
  The portrait 3:4 sheet has two exactly equal-height panels, with source photography above.
- 下区为一致等距视角的小型纸模插画，原景身份可辨。
  The lower scene is a small coherent isometric paper-model illustration with recognizable source identity.
- 有限色盘来自上照，纸纹、细墨线、平涂和轻影同时清楚。
  Its palette follows the photograph, with visible paper grain, ink contours, flat planes and soft shadows.
- 留白充足，没有塑料渲染、玩具积木替代或第二重心。
  Ample white space remains, without plastic rendering, toy-block substitution or a competing focus.

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
| <img src="https://photo-media.easymuzi.cn/media/samples/photo-isometric-paper-scene-diptych-960.webp" alt="AI-generated source" width="240"> | <img src="https://photo-media.easymuzi.cn/media/previews/isometric-paper-scene-diptych/v1/photo-isometric-paper-scene-diptych-0-960.webp" alt="Approved generated interpretation" width="240"> |

- [AI source / AI 合成原图](https://photo-media.easymuzi.cn/media/samples/photo-isometric-paper-scene-diptych-960.webp)
- [Generated interpretation / 生成效果](https://photo-media.easymuzi.cn/media/previews/isometric-paper-scene-diptych/v1/photo-isometric-paper-scene-diptych-0-960.webp)
- [Generation and visual review / 生成与视觉审核记录](examples/generation.json)
