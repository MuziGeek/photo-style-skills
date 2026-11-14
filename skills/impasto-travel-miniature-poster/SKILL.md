---
name: impasto-travel-miniature-poster
description: Restyle a supplied photograph as impasto travel miniature poster / 厚涂旅行微景观海报. Use for this specific visual method while preserving observed subjects and structure.
---

# 厚涂旅行微景观海报 · Impasto Travel Miniature Poster

上区呈现原始旅行照片，下区将同一地景压缩为带刮刀堆色的厚涂微景观，以奶油纸面和后置大标题拉开尺度。

Pair the travel photograph above a compact impasto miniature of the same terrain, using cream paper and a partly concealed display title to establish scale.

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

- 上区呈现原始旅行照片，下区将同一地景压缩为带刮刀堆色的厚涂微景观，以奶油纸面和后置大标题拉开尺度。
- 识别特征：原照上下对照、刮刀堆色微景、后置大标题。
- Medium anchor: A vertical photo-and-paint poster with a source-derived miniature landscape built from raised palette-knife paint on open cream paper.

10. **composition** — Make one portrait 3:4 sheet: the upper half presents the complete source photograph, and the lower half holds its painted miniature.
   输出一张3:4竖幅，上半呈现完整原照，下半呈现同景厚涂微景观。
20. **composition** — Fit the entire photograph within the upper area without distortion; allow neutral margins rather than cropping protected terrain.
   上区容纳完整照片且不变形，宁可留中性空边，也不裁掉需保留的地形。
30. **medium** — Reconstruct the source coastline, cliffs, grass slopes and winding path as a small self-contained arrangement of thick oil paint.
   把原景海岸、崖壁、草坡和弯路重构为小而独立的厚油彩组合。
40. **texture** — Use visible palette-knife ridges, broken impasto edges and layered pigment; make brush direction follow the represented landforms.
   使用可见刮刀凸脊、厚涂断边与颜料堆层，笔触方向服从地形。
50. **composition** — Let the miniature occupy roughly half the lower panel width, floating within generous cream-paper space without a framed painting rectangle.
   微景观占下区约一半宽度，周围留大量奶油纸，不放进矩形画框。
60. **palette** — Sample sea blue, grassy green and cliff white from the source; preserve the major light-dark grouping while simplifying small detail.
   从原图取海蓝、草绿、岩白，简化小细节但保留主要明暗分组。
70. **typography** — Place the supplied short uppercase title large behind the miniature; let the paint overlap only part of the letters.
   把给定大写短标题放大置于微景后，仅让油彩遮住部分字形。
80. **lighting** — Use small coherent shadows to reveal paint thickness; keep it visibly painted rather than a plastic model or photorealistic diorama.
   以小而一致的阴影显示油彩厚度，明确是绘画，不是塑料模型或写实沙盘。
90. **finish** — Omit invented landmarks, travel statistics, explanatory labels, exterior mockups and watermarks.
   不增加地标、旅行数据、解释标签、外部样机或水印。

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

- 上区原照完整，场景内容保持原样。
  Keep the upper photograph complete, with its observed scene content unchanged.
- 下区保留地形次序、海岸走向与连续小路，简化细节但不换成通用海景。
  In the lower miniature, preserve terrain order, coastline direction and the continuous path; simplify detail rather than substituting a generic coast.
- 仅使用源图配色与已有地标，油彩起伏不暗示真实地理被改变。
  Use source-derived colors and existing landmarks only; painted relief must not imply changed real geography.

## 适用范围与几何边界 · Applicability and geometry

- 适用：风景。
- Applies to: Landscape.
- 同一场景允许上下各出现一次；下区可压缩景深并用颜料起伏概括体积，但地形连接和观看方向仍与原照对应。 recipe.yaml 保留本次样本实际执行的具体指令；换用其他输入前，须先将样本物体与样本配色绑定到已观察实体及用户选择，缺失实体的条款直接跳过，禁止据此新增对象。本次样例审核不证明其他输入均已通过验证，也不声称执行了新的通用配方版本。 海岸、崖壁、草坡及小路是样本地景；其他风景提取其真实地形、建筑和通路以及主色，不补出海岸或道路。
- The scene may appear once per panel. Lower-panel depth may compress into paint relief while terrain connections and viewpoint remain source-related. recipe.yaml preserves the concrete instructions executed for this sample. Before another input, bind sample objects and sample colors to observed entities and user choices; skip clauses for absent entities and never introduce objects to satisfy them. This sample review does not validate every input or claim execution of a new generalized recipe version. Coast, cliffs, grass and path describe the sample; other landscapes use their observed terrain, structures, routes and main colors without inventing a coastline or road.
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

- 平面绘画滤镜、铺满下区的矩形重绘、玩具孤岛或亮面模型。
  A flat painterly filter, a full lower rectangular repaint, a toy island or glossy miniature model.
- 丢失小路、海岸移位、虚构建筑、标题不可读、宣传文字堆积、外部样机或水印。
  Missing path, relocated coastline, invented structures, unreadable title, dense promotional copy, mockup surroundings or watermark.

## 验收 · Acceptance

- 上区完整原照与下区微景明确对应。
  The complete upper photograph clearly corresponds to the lower miniature.
- 下区为真正可辨的刮刀厚涂，海岸、崖壁与道路仍连续。
  Visible impasto preserves continuous coast, cliffs and path.
- 微景被留白包围，大标题后置且能辨读。
  Open paper surrounds the miniature; the partly concealed title remains legible.
- 3:4竖幅无虚构地标、数据、水印或空间样机。
  One 3:4 sheet has no invented landmarks, data, watermark or mockup.

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
| <img src="https://photo-media.easymuzi.cn/media/samples/photo-impasto-travel-miniature-poster-960.webp" alt="AI-generated source" width="240"> | <img src="https://photo-media.easymuzi.cn/media/previews/impasto-travel-miniature-poster/v1/photo-impasto-travel-miniature-poster-1-960.webp" alt="Approved generated interpretation" width="240"> |

- [AI source / AI 合成原图](https://photo-media.easymuzi.cn/media/samples/photo-impasto-travel-miniature-poster-960.webp)
- [Generated interpretation / 生成效果](https://photo-media.easymuzi.cn/media/previews/impasto-travel-miniature-poster/v1/photo-impasto-travel-miniature-poster-1-960.webp)
- [Generation and visual review / 生成与视觉审核记录](examples/generation.json)
