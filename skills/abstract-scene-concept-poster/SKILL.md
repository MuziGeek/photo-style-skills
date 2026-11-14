---
name: abstract-scene-concept-poster
description: Restyle a supplied photograph as abstract scene concept poster / 抽象景物概念海报. Use for this specific visual method while preserving observed subjects and structure.
---

# 抽象景物概念海报 · Abstract Scene Concept Poster

在纸面上把原景照片与同景概念插画上下对应，用扁平几何色块、少量疏松线条和有限纹理提炼建筑、树木与地貌。

Pair the source photograph with a related concept illustration that distills architecture, vegetation and terrain into flat color masses and sparse loose lines.

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

- 在纸面上把原景照片与同景概念插画上下对应，用扁平几何色块、少量疏松线条和有限纹理提炼建筑、树木与地貌。
- 识别特征：上下同景对照、几何色块提炼、稀疏手绘线。
- Medium anchor: A photo-and-illustration sheet where scene-specific geometric masses and loose linear accents preserve the source’s spatial rhythm.

10. **composition** — Create one portrait 3:4 sheet on pale cream paper, with the complete original photograph above a source-derived abstract scene.
   在浅奶油纸上输出3:4竖幅，上区完整原照，下区为同源抽象景物。
20. **composition** — Fit the photograph without stretching or removing key structures; keep a calm paper gap between the two representations.
   照片不拉伸、不删除关键建筑，两种表现之间保留平静纸缝。
30. **medium** — Extract houses, roofs, tall trees, broad crowns, paths and sea into simplified connected masses specific to the photographed scene.
   从原景提取房屋、屋顶、高树、树冠、道路和海面为有联系的概括形块。
40. **palette** — Limit the lower drawing to source-derived terracotta, green, blue and paper tones, with mostly flat opaque color.
   下区限定源图赭红、绿、蓝及纸色，主体以不透明平涂色块表现。
50. **composition** — Preserve near-to-far ordering and the route through the scene; simplify perspective without replacing the place with generic geometry.
   保留近远次序和穿过场景的路径，简化透视但不换成通用几何图案。
60. **line** — Add a few loose pencil-like lines for branches, steps and roof divisions; avoid tracing every photographic edge.
   只以少量疏松铅笔线表达树枝、台阶和屋顶分区，不逐边描摹照片。
70. **texture** — Use gentle dry pigment gaps and irregular hand-cut color boundaries, keeping large masses calm and readable.
   加入轻微干颜料露底和不规则手工色边，大形块保持安静可辨。
80. **composition** — Let the lower scene breathe into the surrounding paper with open edges, rather than filling another photographic rectangle.
   下区边缘向周围纸面自然开放，不再填成第二个摄影矩形。
90. **finish** — Omit new landmarks, unrelated symbols, decorative stamps, captions, invented travel facts and watermarks.
   不增加地标、无关符号、装饰邮戳、说明文字、旅行事实或水印。

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

- 上区原照完整且可辨。
  Keep the upper source photograph intact and recognizable.
- 下区保留主要建筑、植被体块、道路连接及岸线方向。
  Preserve the lower scene’s major buildings, vegetation masses, path connections and shoreline direction.
- 允许压缩景深和省略细节，不允许换成无关符号或想象建筑。
  Simplification may compress depth and omit small details, but must not substitute unrelated visual symbols or imaginary architecture.

## 适用范围与几何边界 · Applicability and geometry

- 适用：风景。
- Applies to: Landscape.
- 允许上下重复同景、下区透视压缩和形体概括；保留核心对象及其连接次序，不把抽象解释为随意换景。 recipe.yaml 保留本次样本实际执行的具体指令；换用其他输入前，须先将样本物体与样本配色绑定到已观察实体及用户选择，缺失实体的条款直接跳过，禁止据此新增对象。本次样例审核不证明其他输入均已通过验证，也不声称执行了新的通用配方版本。 房屋、树木、海面及赭绿蓝是本次村落的观察；其他风景仅概括自身的主要体块、路径和配色，不引入村庄、海面或建筑。
- The same scene may repeat across panels, with compressed perspective and simplified masses below; core objects and connection order remain intact. recipe.yaml preserves the concrete instructions executed for this sample. Before another input, bind sample objects and sample colors to observed entities and user choices; skip clauses for absent entities and never introduce objects to satisfy them. This sample review does not validate every input or claim execution of a new generalized recipe version. Houses, trees, sea and terracotta-green-blue describe this village; other landscapes abstract their own masses, routes and colors without introducing a village, sea or buildings.
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

- 全图摄影滤镜、精确矢量描摹、随机抽象形状或无关幻想城镇。
  A full photographic filter, precise vector tracing, random abstract shapes or an unrelated imaginary town.
- 改变原路径、增加船只地标、纹理堆积、假邮戳、宣传文案或水印。
  Changing the source route, adding boats or landmarks, dense textures, fake postal marks, promotional captions or watermarks.

## 验收 · Acceptance

- 原照完整，上下场景一眼可对应。
  The complete photograph and lower interpretation correspond immediately.
- 下区建筑、树木、海面和路径均由原景提炼。
  Lower architecture, vegetation, sea and route derive from the actual scene.
- 扁平色块和疏松线条有主次，边缘向纸面开放。
  Flat masses and loose lines have clear hierarchy with open paper edges.
- 3:4竖幅无虚构地标、装饰邮戳、文案或水印。
  One 3:4 sheet has no invented landmarks, decorative stamps, captions or watermark.

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
| <img src="https://photo-media.easymuzi.cn/media/samples/photo-abstract-scene-concept-poster-960.webp" alt="AI-generated source" width="240"> | <img src="https://photo-media.easymuzi.cn/media/previews/abstract-scene-concept-poster/v1/photo-abstract-scene-concept-poster-0-960.webp" alt="Approved generated interpretation" width="240"> |

- [AI source / AI 合成原图](https://photo-media.easymuzi.cn/media/samples/photo-abstract-scene-concept-poster-960.webp)
- [Generated interpretation / 生成效果](https://photo-media.easymuzi.cn/media/previews/abstract-scene-concept-poster/v1/photo-abstract-scene-concept-poster-0-960.webp)
- [Generation and visual review / 生成与视觉审核记录](examples/generation.json)
