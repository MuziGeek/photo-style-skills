---
name: dreamcore-liminal-space
description: Restyle a supplied photograph as spatial dreamcore / 空间梦核, preserving its recognizable subject while transforming familiar architecture into an empty, nostalgic, physically impossible place. Use for liminal pools, corridors, sky rooms and dreamlike spatial edits, including prompt-only requests.
---

# 空间梦核 · Liminal Dream Space

保留输入中的具体人物、物体或空间地标，让熟悉的地点出现一处清晰但不喧闹的空间异常：室内通向天空、走廊重复延伸，或不可能的水面与门洞关系。质感仍像某个年代拍下的照片，而不是一层模糊滤镜。

Keep the actual person, object or architectural landmarks recognizable while one deliberate spatial impossibility changes a familiar place. The result should resemble an imperfect photograph of a remembered location, not a normal scene with a haze filter.

原创说明及配方，作者 MuziGeek，采用 [MIT](LICENSE)。[来源记录](provenance.json)区分原创文字与仅供研究的视觉参考。

Original instructions and recipe by MuziGeek, under [MIT](LICENSE). [Provenance](provenance.json) distinguishes original wording from research-only references.

## 输入与执行 · Input and execution

1. 先区分主体原图与风格参考。观察主体身份、数量、姿势、形状、材质、主要连接和空间地标。只有风格参考时可整理提示词；重绘前需要主体原图。
2. 选择一个与输入相关的空间异常，不把泳池、草地、楼梯和天空全部堆在同一张图里。记录「保留什么、哪里变得不可能」。
3. 将实际观察结果与 [recipe.yaml](recipe.yaml) 组合，再把主体原图作为图生图输入。支持「只输出提示词」，此时不调用生图工具。
4. 默认沿用输入比例。无图片的创意简报才默认 4:5；不要为目录比例裁掉必须保留的人物或主体。
5. 无人输入保持无人。有人的输入保留这些人的数量、身份与可辨姿势；「空旷」描述背景和人际距离，不等于静默删人。仅明确要求空场时移除人物。
6. 不主动加日期、路牌、梦境短句或装饰文字。现有文字不是识别关键时可淡化；必须保留的文字照实处理，并单独检查可读性。

Separate the subject from style references. Inspect identity, count, pose, materials, structural connections and landmarks. Choose one source-related spatial anomaly and name what remains stable. Combine these observations with the recipe and pass the actual source to an image-editing tool. Prompt-only requests return text. Keep input aspect ratio. Empty inputs stay empty; preserve observed people unless their removal is requested. Do not invent dates, slogans or decorative lettering.

## 空间机制 · Spatial mechanism

- **先熟悉，再异常**：保留地砖、门框、长椅、窗户、泳道线等可辨地标，用正常透视建立可信前景，再在远端或边界破坏空间逻辑。
- **只明确一处主异常**：从「门后是过近的蓝天草地」「室内天花板被真实天空替代」「同一走廊不可能地返回自己」「水面连续穿过封闭门洞」选择最适合输入的一项。其它物理关系保持稳定。
- **保留主体锚点**：有产品或人物时，留出足够面积看清其轮廓和识别细节，让环境制造梦境感；不要把原主体缩成无关远景。
- **平静中的不安**：柔和天光或平淡荧光灯、重复结构、稀疏陈设、空旷负空间。没有怪物、追逐、血迹或灾难叙事。
- **克制的旧照片感**：青绿水面、灰蓝天空、乳白瓷砖或褪色暖墙中选取相关色系；用轻微曝光漂移、细颗粒和边缘色差暗示旧相机，关键细节仍清楚。

Build a believable foreground from familiar material and perspective cues, then break spatial logic at one boundary. Keep one obvious anomaly, a readable subject anchor, sparse surroundings and a calm but uncanny mood. Use subdued light and restrained aged-camera texture. Pools, sky, grass and corridors are optional scene vocabularies, not compulsory props.

## 允许变化与保留 · Geometry and preservation

- 可替换或延伸背景，改变门窗之后的空间，重复非主体建筑单元，并引入一处不可能的尺度、出口或连续关系。
- 主体本体不随空间异常扭曲：保留身份、人数、姿势含义、产品形状、配件数量、身体和道具连接。不得为增强梦核而复制整个人、删掉同行者或融化主体。
- 空间原图至少保留两处可辨地标及其近景位置关系；单物体原图保留完整主轮廓与材质特征。若用户指定地标，优先保护指定项。

Background replacement, architectural repetition and a single impossible spatial connection are allowed. Keep the subject itself coherent: identity, count, gesture meaning, silhouette, parts and attachments remain intact. For an architectural input, retain at least two recognizable landmarks and their foreground relationship; for a single-object input, preserve its main silhouette and defining material cues.

## 提示词母版 · Prompt scaffold

用观察到的事实替换方括号，删去不适用的句子后再调用工具。

> 将主体原图转成空间梦核影像，保留[主体、人数、轮廓或关键地标]。前景的[材质与近景结构]保持可信，让[一个具体空间边界]出现[一个明确但安静的不可能关系]。主锚点仍清晰可辨，背景空旷且陈设稀疏，不增加路人。采用[适合输入的平淡荧光灯或柔和天光]、[有限色系]、细颗粒与轻微边缘色差，像记忆中的旧照片。保留原图比例、现有人物与道具连接，不添加怪物、血迹、破败废墟、装饰文字或新的故事情节。

> Transform the supplied image into a liminal dreamcore photograph. Preserve [observed subject identity, count, silhouette and landmarks]. Keep [foreground materials and spatial relationships] physically believable while [one boundary] opens into [one precise impossible relationship]. The main subject remains legible inside a sparse, quiet environment. Use [source-appropriate diffuse daylight or flat fluorescent light], [restrained palette], fine camera grain and subtle edge chromatic aberration. Preserve input aspect ratio, people and prop connections. Do not add strangers, monsters, blood, ruins, slogans or a different narrative.

## 验收 · Acceptance

- 具体空间异常能被一句话指出；不只靠模糊、调色或云雾表达梦核。
  One specific spatial impossibility is clearly describable; haze or color grading alone does not pass.
- 人物、物体或至少两处空间地标仍能与原图对应，主体数量及连接没有意外变化。
  People, objects or at least two architectural landmarks map back to the source; counts and attachments remain correct.
- 前景材质、接触阴影与透视可信，不可能关系集中在选定位置。
  Foreground materials, contact shadows and perspective are believable; the impossibility stays localized.
- 画面空旷、怀旧、轻微不安，关键细节可读，无未经要求的恐怖内容或文字。
  The scene feels sparse, nostalgic and gently uncanny, with readable details and no unrequested horror or text.

## 示例状态 · Example status

本款已有 1 张 AI 合成原图与 1 张以该原图为实际输入的效果图，均已通过视觉审核。泳池效果保留左侧长椅、右侧扶梯与近景瓷砖关系，将远端墙窗转为开向天空的延伸水道。实际提示词、配方绑定与 COS 上传回读凭证由 [生成与审核记录](examples/generation.json)统一记录；样例就绪状态以其中完整凭证为准。

样例仅供审阅，尚未在网站上架。规范 COS 图片 URL 未加入公开白名单，不保证匿名可访问；查看本次交付提供的临时签名审阅页，链接过期后需重新签发。网络研究参考不作为本配方的生成证据。

One AI-generated source and one effect edited from that actual source have passed visual review. The pool interpretation preserves the left bench, right ladder and foreground tile relationships while the far wall opens into a sky-facing extended waterway. [Generation and review records](examples/generation.json) hold the actual prompts, recipe binding and COS upload/readback receipts; example readiness requires complete evidence in that record.

These examples are for review and are not listed on the website. Canonical COS image URLs are not on the public allowlist and may be unavailable anonymously. Use the temporary signed review page delivered with this batch; expired links require renewal. Research references are not generation evidence.
