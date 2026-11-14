---
name: carved-color-stamp-redraw
description: Restyle a supplied photograph as carved color stamp redraw / 多色印章转绘. Use for this specific visual method while preserving observed subjects and structure.
---

# 多色印章转绘 · Carved Color Stamp Redraw

把照片中的主体转为有限色块叠印的雕刻印章图，利用白色刻痕、断墨边缘和纸纤维保留可辨的场景关系。

Rebuild the photographed scene as a few carved color impressions, using white cuts, broken ink and paper grain to preserve recognizable structure.

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

- 把照片中的主体转为有限色块叠印的雕刻印章图，利用白色刻痕、断墨边缘和纸纤维保留可辨的场景关系。
- 识别特征：分色实心印块、白色刀痕、纸面断墨。
- Medium anchor: A flat multi-ink relief print whose carved silhouettes, white cuts and dry coverage reconstruct the supplied scene.

10. **composition** — Rebuild the supplied scene as one portrait 3:4 stamped print, retaining its main subjects and their spatial order.
   把原景重构为一张3:4竖版印章画，保留主要主体及其空间顺序。
20. **medium** — Reduce each recognizable object to solid carved silhouettes and a few internal cuts, rather than photographic gradients.
   每件可辨物体概括为实体刻版轮廓与少量内部刀痕，不使用摄影渐变。
30. **palette** — Choose three or four flat ink colors from the source; give each ink a coherent object or structural role.
   从原图选择三至四种平涂油墨，让每色承担一致的物体或结构角色。
40. **line** — Separate adjacent shapes with irregular exposed-paper cuts; vary their width like hand-carved channels.
   用不规则露纸缝隙分开相邻形体，宽度如手刻刀道自然变化。
50. **texture** — Break ink coverage subtly along edges and inside broad fills; show paper fibers without burying the drawing under noise.
   在边缘与大色块内部克制断墨，显出纸纤维，但不能以噪点遮盖形体。
60. **detail** — Preserve distinguishing produce shapes, container divisions and major overlaps; omit tiny incidental reflections.
   保留不同果实的形状、容器分区及主要遮挡，去掉细碎偶然反光。
70. **composition** — Keep the recognizable scene centered with breathing room on warm off-white paper; avoid decorative stamp borders.
   可辨场景置于温暖米白纸上并留出呼吸空间，不添加装饰印章边框。
80. **finish** — Use dry printed surfaces and crisp simplified edges; add no new labels, seals, signatures or watermark.
   使用干燥印刷表面与概括边缘，不加新标签、印记、签名或水印。

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

- 保留原图主体、容器数量及主要场景布局。
  Retain the source subjects, container count and major scene layout.
- 压平明暗、删减小细节时仍保留辨识形状与连接。
  Preserve distinctive shapes and attachments while flattening shading and omitting minor surface detail.
- 不添加原图没有的文字、品牌、人物或道具。
  Do not introduce source-absent text, brands, people or props.

## 适用范围与几何边界 · Applicability and geometry

- 适用：美食、风景、器物、产品。
- Applies to: Food, Landscape, Object, Product.
- 允许概括细节与压平透视，但容器、物体及主要遮挡的拓扑关系仍须与原图对应。 recipe.yaml 保留本次样本实际执行的具体指令；换用其他输入前，须先将样本物体与样本配色绑定到已观察实体及用户选择，缺失实体的条款直接跳过，禁止据此新增对象。本次样例审核不证明其他输入均已通过验证，也不声称执行了新的通用配方版本。 水果和木箱是本次样本的实体；其他输入只对实际存在的物件轮廓、分区和遮挡做分色刻印，不添加水果或容器。
- Detail reduction and flattened depth are allowed; object, container and overlap relationships must remain traceable to the source. recipe.yaml preserves the concrete instructions executed for this sample. Before another input, bind sample objects and sample colors to observed entities and user choices; skip clauses for absent entities and never introduce objects to satisfy them. This sample review does not validate every input or claim execution of a new generalized recipe version. Fruit and crates are sample entities; other inputs use the observed silhouettes, divisions and overlaps for separated impressions, without adding produce or containers.
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

- 全彩摄影明暗、亮面三维物体、光滑矢量描边或均匀噪点。
  Full-color photographic shading, glossy 3D objects, smooth vector outlines or uniformly applied grit.
- 通用圆印章、装饰印记、虚构招牌、遗漏原物体或容器几何变形。
  Generic circular stamps, decorative seals, invented signage, missing source objects or distorted container geometry.

## 验收 · Acceptance

- 主体、箱体数量和主要排列与原图一致。
  Subjects, container count and main arrangement match the source.
- 色块具有刻印形体与不规则露纸刀痕。
  Ink masses have carved shapes and irregular paper-exposing cuts.
- 有限油墨和断墨纸纹形成层次，不残留摄影渐变。
  Limited inks and dry impressions form depth without photographic gradients.
- 画面完整、3:4竖幅，无新增文字、印记或水印。
  A complete 3:4 portrait print contains no new text, seals or watermark.

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
| <img src="https://photo-media.easymuzi.cn/media/samples/photo-carved-color-stamp-redraw-960.webp" alt="AI-generated source" width="240"> | <img src="https://photo-media.easymuzi.cn/media/previews/carved-color-stamp-redraw/v1/photo-carved-color-stamp-redraw-0-960.webp" alt="Approved generated interpretation" width="240"> |

- [AI source / AI 合成原图](https://photo-media.easymuzi.cn/media/samples/photo-carved-color-stamp-redraw-960.webp)
- [Generated interpretation / 生成效果](https://photo-media.easymuzi.cn/media/previews/carved-color-stamp-redraw/v1/photo-carved-color-stamp-redraw-0-960.webp)
- [Generation and visual review / 生成与视觉审核记录](examples/generation.json)
