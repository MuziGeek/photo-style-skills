---
name: retro-star-portrait-collage
description: Restyle a supplied photograph as retro star portrait collage / 复古星星人像拼贴. Use for this specific visual method while preserving observed subjects and structure.
---

# 复古星星人像拼贴 · Retro Star Portrait Collage

保留人物与随身对象的黑白摄影剪影，以鲜亮纸底、粗糙剪边、图案星芒和少量剪贴字构成复古杂志人像海报。

Keep the portrait and accompanying subjects as grayscale photographic cutouts, set against vivid paper, patterned starbursts and sparse cut-letter typography.

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

- 保留人物与随身对象的黑白摄影剪影，以鲜亮纸底、粗糙剪边、图案星芒和少量剪贴字构成复古杂志人像海报。
- 识别特征：黑白人物剪贴、大图案星芒、字母纸片。
- Medium anchor: A grayscale photographic portrait cutout layered over saturated paper, with oversized patterned starbursts and tactile cut-letter tiles.

10. **composition** — Create a portrait 3:4 poster with the complete source person and accompanying animal as the dominant central photographic cutout.
   生成3:4竖版海报，完整人物与伴随动物构成主要居中摄影剪贴。
20. **medium** — Convert cutout subjects to crisp grayscale photography, keeping facial identity, clothes, pose and animal markings recognizable.
   主体转换为清晰黑白摄影，保留面容、服饰、姿态和动物花纹。
30. **texture** — Surround the cutout with a narrow uneven cream-paper edge and a slightly offset dark paper underlayer.
   剪贴外沿保留窄而不规则的奶油纸边，其下轻微错位叠一层深色纸。
40. **palette** — Use a clean saturated lime paper field with pink and cream accent papers; keep the photographic subjects grayscale.
   使用干净高饱和青柠绿底纸、粉色和奶油色配纸，摄影主体仍为黑白。
50. **composition** — Place one oversized irregular patterned starburst behind the upper body, plus two smaller stars away from faces and paws.
   上身后布置一个超大不规则图案星芒，另两颗小星避开面部和脚爪。
60. **texture** — Fill the large star with sparse contrasting speckles; use subtle paper fibers and shallow contact shadows, not heavy aging.
   大星内铺稀疏反差斑点，纸面细纤维与浅接触影即可，不重度做旧。
70. **typography** — Set the supplied short phrase on separate cream cut-paper letter tiles; arrange them with modest angle changes near the lower third.
   把给定短句印在独立奶油字母纸片上，在下三分之一区域轻微旋转排列。
80. **detail** — Keep the leash continuous and correctly attached; paper and lettering must not hide the person, dog or their connection.
   牵引绳须连续并正确连接，纸片和文字不能遮住人物、狗或连接关系。
90. **finish** — Keep the cut-paper layers distinct and the background uncluttered; add no external frame, additional person, logo or watermark.
   纸层清楚、背景疏朗，不添加外框、其他人物、标志或水印。

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

- 保留人物身份、姿态、衣着、肢体与完整轮廓。
  Preserve the source person’s identity, pose, clothing, limbs and complete silhouette.
- 保留动物体形和花纹以及牵引绳的真实连接。
  Preserve the animal’s body shape and markings, and the real connection of the leash.
- 允许整体移动和等比缩放原图组合，不改变内部比例或添加饰物。
  Reposition and uniformly scale the joined source group; do not change its internal proportions or invent accessories.

## 适用范围与几何边界 · Applicability and geometry

- 适用：人像。
- Applies to: Portrait.
- 允许抠图、整体移动、等比缩放和纸层叠压；人物及同伴的内部结构、完整肢体和连接关系不改变。 recipe.yaml 保留本次样本实际执行的具体指令；换用其他输入前，须先将样本物体与样本配色绑定到已观察实体及用户选择，缺失实体的条款直接跳过，禁止据此新增对象。本次样例审核不证明其他输入均已通过验证，也不声称执行了新的通用配方版本。 狗与牵引绳仅在输入确有相应同伴及连接时保留；无动物的人像跳过相关条款，保持人物剪贴与星芒机制，纸色依据用户选择调整。
- Cutout extraction, group repositioning, uniform scaling and paper layering are allowed; anatomy, full limbs and companion connections remain intact. recipe.yaml preserves the concrete instructions executed for this sample. Before another input, bind sample objects and sample colors to observed entities and user choices; skip clauses for absent entities and never introduce objects to satisfy them. This sample review does not validate every input or claim execution of a new generalized recipe version. Keep the dog and leash only when an actual companion and connection exist; animal-free portraits skip those clauses while retaining portrait cutouts and stars, with user-selected paper colors.
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

- 面部插画化或美化、换衣、切断脚爪、丢失牵引绳、重复主体。
  Illustrated or beautified faces, altered clothes, clipped feet or paws, missing leash, duplicate subjects.
- 贴纸堆积、塑料亮星、过量污痕、厚假三维影或复制原示例文案。
  Busy sticker collections, glossy plastic stars, excessive grunge, thick fake 3D shadows or copied source poster text.

## 验收 · Acceptance

- 黑白主体仍为摄影质感，人物和动物辨识度保留。
  Grayscale subjects remain photographic and recognizable.
- 星芒与鲜亮纸底明确，主体毛边及纸层关系自然。
  Starbursts and vivid paper are clear, with plausible cut edges and layer contacts.
- 字母纸片使用给定短句，并避开脸、脚爪和牵引绳。
  Letter tiles carry the supplied phrase without covering face, paws or leash.
- 3:4竖幅完整，无新人物、品牌或水印。
  A complete 3:4 portrait result has no new people, brands or watermark.

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
| <img src="https://photo-media.easymuzi.cn/media/samples/photo-retro-star-portrait-collage-960.webp" alt="AI-generated source" width="240"> | <img src="https://photo-media.easymuzi.cn/media/previews/retro-star-portrait-collage/v1/photo-retro-star-portrait-collage-0-960.webp" alt="Approved generated interpretation" width="240"> |

- [AI source / AI 合成原图](https://photo-media.easymuzi.cn/media/samples/photo-retro-star-portrait-collage-960.webp)
- [Generated interpretation / 生成效果](https://photo-media.easymuzi.cn/media/previews/retro-star-portrait-collage/v1/photo-retro-star-portrait-collage-0-960.webp)
- [Generation and visual review / 生成与视觉审核记录](examples/generation.json)
