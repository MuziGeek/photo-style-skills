---
name: naive-worker-photo-doodle
description: Restyle a supplied photograph as naive worker photo doodle / 稚拙小人摄影涂鸦. Use for this specific visual method while preserving observed subjects and structure.
---

# 稚拙小人摄影涂鸦 · Naive Worker Photo Doodle

让原图饮品和器物保持真实摄影，在其边缘添加少量稚拙黑线小工人、梯子和动作线，以可信接触产生微缩劳动趣味。

Keep the photographed objects real while adding a few small, imperfect black-line workers and ladders whose actions connect physically to the objects.

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

- 让原图饮品和器物保持真实摄影，在其边缘添加少量稚拙黑线小工人、梯子和动作线，以可信接触产生微缩劳动趣味。
- 识别特征：器物仍为摄影、极小黑线工人、接触式小动作。
- Medium anchor: A photographic still life inhabited by sparse miniature black-line workers; the drawing and photography remain clearly different materials.

10. **composition** — Use one portrait 3:4 page with the original cups and spoon remaining photographic against their clean white surroundings.
   使用一张3:4竖幅，杯子和茶匙保持真实摄影，周围仍是干净白色。
20. **medium** — Add three or four tiny black-line workers with simple round heads, uneven hand-drawn limbs and minimally filled clothing.
   新增三至四位极小黑线工人，圆头、自然不齐的手绘肢体与少量实心衣服。
30. **detail** — Give each worker one distinct task linked to the existing objects: tending a rim, handling a spoon or checking a cup.
   每位工人执行与已有物体相关的不同小任务，如处理杯沿、搬动茶匙或查看杯子。
40. **detail** — Use at most two narrow drawn ladders or stools, with feet resting on the photographed table and hands contacting the intended surface.
   最多添加两件窄线描梯子或凳子，落脚于照片桌面，手部接触目标表面。
50. **composition** — Keep workers much smaller than the cups; preserve open white space between their actions instead of forming a busy crowd.
   小人远小于杯子，各动作之间保留白色空隙，不聚成拥挤人群。
60. **line** — Vary black stroke weight gently; add only a few short motion marks that clarify an action.
   黑色线条粗细轻微变化，只添加少量能说明动作的短线。
70. **lighting** — Retain the original photographic light, ceramic texture, liquid surfaces and shadows; drawn figures remain flat black marks.
   保留原照光线、陶瓷、液面和阴影，小人仍是平面黑线。
80. **finish** — Do not repaint the objects, add a giant hand, insert text or invent extra products, logos and watermarks.
   不重绘器物，不添加巨手、文字、额外商品、标志或水印。

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

- 保留原图杯子、杯柄、液体和茶匙的比例与位置。
  Keep the original cups, handles, liquids, spoon and their observed proportions and positions.
- 摄影材质和光线全部保留，仅允许新增明确描述的小人及支撑物。
  Preserve all photographic material and light; only the explicitly described drawn workers and supports are new.
- 新增动作须接触现有表面，不遮挡物体关键特征。
  Added actions must connect to existing surfaces and must not conceal essential object features.

## 适用范围与几何边界 · Applicability and geometry

- 适用：美食、产品、器物。
- Applies to: Food, Product, Object.
- 原物体几何与位置不变；允许新增微型线描人物及少量梯凳，其落脚、抓握与遮挡须符合原照空间。 recipe.yaml 保留本次样本实际执行的具体指令；换用其他输入前，须先将样本物体与样本配色绑定到已观察实体及用户选择，缺失实体的条款直接跳过，禁止据此新增对象。本次样例审核不证明其他输入均已通过验证，也不声称执行了新的通用配方版本。 杯子、茶匙、陶瓷与白桌是样本条件；其他器物保持原有材质和背景，让小人仅与真实表面互动，不添加杯子、茶匙或桌面。
- Original object geometry and placement remain unchanged. Tiny drawn people and sparse supports may be added with coherent footing, grip and overlap. recipe.yaml preserves the concrete instructions executed for this sample. Before another input, bind sample objects and sample colors to observed entities and user choices; skip clauses for absent entities and never introduce objects to satisfy them. This sample review does not validate every input or claim execution of a new generalized recipe version. Cups, spoon, ceramic and the white table are sample conditions; other objects retain actual materials and backgrounds, with workers interacting only with existing surfaces and no invented drinkware or table.
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

- 全图卡通化、陶瓷绘画化、写实微型人、巨手、重复杯子或悬空梯子。
  Full-scene cartoon conversion, painted ceramic, realistic tiny humans, giant inserted hands, duplicate cups or floating ladders.
- 密集文案、无关装饰云、大量工人、厚重阴影或品牌。
  Dense captions, decorative clouds unrelated to actions, numerous workers, heavy shadows or branding.

## 验收 · Acceptance

- 杯子、液体、茶匙保持原照材质与布局。
  Cups, liquids and spoon retain photographic materials and placement.
- 小人数量克制、黑线稚拙且明显小于器物。
  A sparse set of naive black-line workers is clearly smaller than the objects.
- 梯凳落地、手脚接触正确，各动作可理解。
  Supports meet the table and hands or feet make coherent contact.
- 3:4竖幅留白清楚，无文字、额外商品或水印。
  The 3:4 result has clear white space and no text, extra products or watermark.

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
| <img src="https://photo-media.easymuzi.cn/media/samples/photo-naive-worker-photo-doodle-960.webp" alt="AI-generated source" width="240"> | <img src="https://photo-media.easymuzi.cn/media/previews/naive-worker-photo-doodle/v1/photo-naive-worker-photo-doodle-0-960.webp" alt="Approved generated interpretation" width="240"> |

- [AI source / AI 合成原图](https://photo-media.easymuzi.cn/media/samples/photo-naive-worker-photo-doodle-960.webp)
- [Generated interpretation / 生成效果](https://photo-media.easymuzi.cn/media/previews/naive-worker-photo-doodle/v1/photo-naive-worker-photo-doodle-0-960.webp)
- [Generation and visual review / 生成与视觉审核记录](examples/generation.json)
