---
name: torn-washi-scene-collage
description: Restyle a supplied photograph as torn washi scene collage / 和纸胶带场景拼贴. Use for this specific visual method while preserving observed subjects and structure.
---

# 和纸胶带场景拼贴 · Torn Washi Scene Collage

将照片中的房屋、器物与环境全部重构为半透明和纸胶带片，以撕裂毛边、交叠色差和纸纤维塑造清楚的景物层次。

Reconstruct the entire photographed scene from torn translucent washi pieces, using rough edges, overlapping color shifts and paper fibers to describe its forms.

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

- 将照片中的房屋、器物与环境全部重构为半透明和纸胶带片，以撕裂毛边、交叠色差和纸纤维塑造清楚的景物层次。
- 识别特征：全景胶带重构、撕裂纤维边、半透明交叠。
- Medium anchor: An entire scene assembled from matte torn washi tape, where overlapping strips and fibers replace photographic surfaces.

10. **composition** — Rebuild the full supplied scene as one portrait 3:4 handmade tape picture, keeping the kiosk and bicycle as its clear focus.
   把完整原景重构为3:4竖版手工胶带画，小亭和单车仍为清楚焦点。
20. **medium** — Construct every pictorial surface from torn washi or masking-tape pieces; do not leave an intact photographic layer beneath decorative strips.
   所有图像表面都由撕裂和纸或美纹胶带拼成，不能在完整照片上仅贴装饰胶带。
30. **palette** — Sample mustard yellow, deep green, sea blue and cloud white from the photograph, using matte paper versions of those colors.
   从照片取芥末黄、深绿、海蓝和云白，转为对应哑光纸色。
40. **texture** — Show uneven torn ends, delicate fibers and slight translucency; overlapped tape creates subtle darker color intersections.
   显出不齐撕口、细纤维和轻微透明度，胶带交叠形成自然略深色交叉。
50. **composition** — Align long strips with walls, roof edges and the horizon; use smaller torn pieces for foliage, clouds and bicycle structure.
   长胶带顺墙面、屋檐和海平线排列，植被、云和单车结构使用较小撕片。
60. **detail** — Keep door, window, wheels, frame and plant placement identifiable; simplify spokes without merging or breaking the bicycle’s connections.
   门窗、车轮、车架和盆栽位置可辨，简化辐条但不合并或断开单车结构。
70. **lighting** — Use shallow contact shadows between paper layers only; preserve an overall flat handmade picture rather than a deep sculptural diorama.
   纸层间仅用浅接触影，整体仍为平面手工作品，不变成深立体沙盘。
80. **finish** — Let outer tape edges end naturally on clean white backing; add no typography, brand marks, exterior frame or watermark.
   外沿胶带自然结束在干净白底纸上，不加文字、品牌、外框或水印。

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

- 保留建筑轮廓、屋顶、开口、单车位置及盆栽关系。
  Retain the source building silhouette, roof, openings, bicycle placement and plant relationships.
- 材质换成胶带时保持相对比例与视角；小细节可省略，结构连接须保留。
  Keep relative proportions and viewpoint while replacing texture with tape; tiny details may simplify but structural joints remain connected.
- 只使用源图景物；胶带是表现材料，不授权新增对象。
  Use source-derived scene elements only; decorative tape is a material, not permission to invent new objects.

## 适用范围与几何边界 · Applicability and geometry

- 适用：风景、器物。
- Applies to: Landscape, Object.
- 允许以带状纸片替代曲面与细节，外缘可自然散开；主体轮廓、门窗、车架连接和前后位置仍须对应原照。 recipe.yaml 保留本次样本实际执行的具体指令；换用其他输入前，须先将样本物体与样本配色绑定到已观察实体及用户选择，缺失实体的条款直接跳过，禁止据此新增对象。本次样例审核不证明其他输入均已通过验证，也不声称执行了新的通用配方版本。 小亭、单车、门窗及黄绿蓝是本次样本的内容；其他场景只把自身形体与配色转为胶带材料，不新增房屋、单车或海景。
- Tape strips may replace curved surfaces and detail, with naturally scattered outer edges; silhouettes, openings, frame joints and depth order remain source-related. recipe.yaml preserves the concrete instructions executed for this sample. Before another input, bind sample objects and sample colors to observed entities and user choices; skip clauses for absent entities and never introduce objects to satisfy them. This sample review does not validate every input or claim execution of a new generalized recipe version. Kiosk, bicycle, openings and yellow-green-blue belong to this sample; other scenes translate their own forms and colors into tape without adding buildings, bicycles or a seaside setting.
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

- 照片外围贴胶带、水彩伪装胶带、平滑矢量块或亮塑料条。
  A photograph merely bordered with tape, painted watercolor pretending to be tape, smooth vector shapes or glossy plastic strips.
- 单车断裂、门窗缺失、虚构招牌、重浮雕、深沙盘影、杂乱手工桌或水印。
  Disconnected bicycle, missing openings, invented signs, heavy embossing, deep diorama shadows, cluttered craft table or watermark.

## 验收 · Acceptance

- 全部场景元素均由可辨纸胶带构成，不残留完整摄影底图。
  Every pictorial element is visibly built from tape, without an intact photographic base.
- 撕口、纤维和交叠透明度自然且克制。
  Torn ends, fibers and translucent overlaps are coherent and restrained.
- 房屋门窗、双车轮及车架连接与原景对应。
  House openings, both bicycle wheels and frame joints correspond to the source.
- 3:4竖幅白底完整，无文字、外框、手工桌或水印。
  The complete 3:4 white-backed image has no text, exterior frame, craft table or watermark.

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
| <img src="https://photo-media.easymuzi.cn/media/samples/photo-torn-washi-scene-collage-960.webp" alt="AI-generated source" width="240"> | <img src="https://photo-media.easymuzi.cn/media/previews/torn-washi-scene-collage/v1/photo-torn-washi-scene-collage-0-960.webp" alt="Approved generated interpretation" width="240"> |

- [AI source / AI 合成原图](https://photo-media.easymuzi.cn/media/samples/photo-torn-washi-scene-collage-960.webp)
- [Generated interpretation / 生成效果](https://photo-media.easymuzi.cn/media/previews/torn-washi-scene-collage/v1/photo-torn-washi-scene-collage-0-960.webp)
- [Generation and visual review / 生成与视觉审核记录](examples/generation.json)
