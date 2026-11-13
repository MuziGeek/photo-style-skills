---
name: open-book-travel-memory
description: Restyle a supplied photograph as open book travel memory / 旧书旅行纪念册. Use for this specific visual method while preserving observed subjects and structure.
---

# 旧书旅行纪念册 · Open Book Travel Memory

在完整旅行摄影中央悬置一本旧书，左页是蓝灰手写短句，右页嵌入同一照片，让风景和书页组成私人纪念册。

Suspend an open aged book over a full travel photograph, pairing blue-grey handwritten lines with a smaller crop from the same source.

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

- 在完整旅行摄影中央悬置一本旧书，左页是蓝灰手写短句，右页嵌入同一照片，让风景和书页组成私人纪念册。
- 识别特征：悬置旧书、左文右图、同源风景背景。
- Medium anchor: A realistic open-book collage suspended over the same travel photograph used for the book's inset image.

10. **composition** — Use one supplied photograph; output portrait 3:4 with its unwarped scene filling the background.
   只需一张输入原照，输出3:4竖幅，以原景不变形地铺满背景。
20. **composition** — Suspend one horizontal open book front-on at center; book edges lie at canvas x=10–90% and y=28–72%.
   一本横向打开的旧书正对镜头居中悬置，左右边界在画布10%与90%，上下边界在28%与72%。
30. **composition** — Keep landscape visible above and below the book; do not move background people, shorelines or architecture to accommodate it.
   书上方和下方保留风景，不为放书而移动背景人物、海岸或建筑。
40. **texture** — Use clean aged ivory leaves, brown cover edges, fine stacked page layers, softly worn corners and a narrow shaded central gutter.
   书页为干净泛旧的象牙白，带褐色封皮边、细密页层、轻磨圆角和窄窄的书脊阴影。
50. **texture** — Show modest book thickness and paper fibers without swollen pages, yellow parchment, burnt edges, stains, decorative stitching or heavy shadows.
   纸页有克制厚度和纤维，不鼓胀，不用黄羊皮纸、焦边、污渍、装饰缝线或厚投影。
60. **typography** — Place left-aligned English handwriting on the left leaf, within canvas x=22–45%, vertically centered with generous paragraph gaps.
   左页英文左对齐，位于全画布横向22%至45%之间，整体垂直居中，段间自然留白。
70. **typography** — Use faded blue-grey ink near #585D83, upright rounded unjoined letters, medium felt-tip strokes and gently irregular baselines.
   使用接近#585D83的褪蓝灰墨色，直立圆润的不连笔字形、中等毡尖笔线和轻微不齐的基线。
80. **typography** — Use single-storey lowercase a and g; character height approximately 2.4% and baseline spacing approximately 3.1% of full canvas height.
   小写a和g采用单层字形；字高约为总画高2.4%，基线间距约为3.1%。
90. **typography** — The sample reads exactly Two quiet shores. then One day to keep. in separate paragraphs; use supplied text for other inputs.
   样本分别写Two quiet shores.与One day to keep.两段；其他输入使用用户指定文字。
100. **detail** — Place one portrait 3:4 crop from this same photograph on the right leaf, at canvas x=53–80% and y=36.5–63.5%.
   右页仅放同一原照的3:4竖向小照片，其左右位置为全画布53%至80%，上下为36.5%至63.5%。
110. **detail** — Give the inset a hairline white edge and tiny rounded corners, surrounded by visible ivory paper; avoid thick instant-photo framing.
   小照片只有极细白边与微圆角，四周露出象牙白书页，不使用厚拍立得框。
120. **detail** — The inset may crop but must retain source geography, subjects and lighting; it contains no book and creates no recursive image.
   小图可裁切，但地形、主体、光线必须同源；小图不含旧书，禁止递归。
130. **palette** — Keep natural source colors and use warm book paper for contrast; do not apply a yellow filter to the whole scene.
   原照保持自然色彩，以暖书页形成对比，不给全图泛黄。
140. **finish** — Show no supporting hands, desk or stand; omit extra titles, page numbers, stamps, tape, maps, photos, logos and watermarks.
   画面中无托书的手、桌子或支架，也不加额外标题、页码、邮票、胶带、地图、照片、标志及水印。

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

- 保留背景地平线、地貌、主体数量、实拍纹理与光线。
  Preserve the source background's horizon, geography, subject count, photographic texture and lighting.
- 允许同源原照以背景和右页小图两个尺度出现。
  The same source appears as background and one right-page inset; this intentional two-scale repetition is permitted.
- 仅新增一本打开的旧书；明确版式参数替代额外风格参考图。
  The sole introduced object is one open book; the fixed layout replaces any need for a separate style-reference image.

## 适用范围与几何边界 · Applicability and geometry

- 适用：风景、人像、合影、夜景。
- Applies to: Landscape, Portrait, Group, Night.
- 以明确坐标放置书本、文字和同源小照片，仅书本遮住中部风景；不重排真实背景。
- Use the specified book, text and inset coordinates; only the book occludes the central scene, which is never rearranged.
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

- 强制要求第二参考图、递归旧书、改动背景地貌或拉伸照片。
  A second required input image, recursive books, changed background geography or a photograph stretched to fit.
- 连笔书法、花体、机械整齐的手写字体、细长字或深蓝粗体。
  Connected calligraphy, decorative cursive, machine-perfect handwriting, very narrow letters or dark-blue bold type.
- 桌子、托书手、支架、厚拍立得框、全图泛黄、地图、胶带、邮票、无关文案或水印。
  Desk, supporting hands, stand, thick instant-photo frames, aged-yellow overall filters, maps, tape, stamps, unrelated copy or watermarks.

## 验收 · Acceptance

- 全幅原景与右页小照片来自同一输入，未递归出现书。
  The full background and right-page photograph come from one input, with no recursive book.
- 书宽80%、高44%，位于中心；外部上下风景均可见。
  The centered book is 80% of canvas width and 44% of height; scenery remains visible above and below.
- 左页蓝灰分离手写字、单层a/g、行距与留白符合参数。
  Blue-grey separated handwriting uses single-storey a/g and the specified spacing and margins.
- 一张参考图即可执行，样本文案标为新写，画面无托架与杂物。
  One reference image suffices; sample text is newly supplied and no supporting objects appear.

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
| <img src="https://photo-media.easymuzi.cn/media/samples/photo-open-book-travel-memory-960.webp" alt="AI-generated source" width="240"> | <img src="https://photo-media.easymuzi.cn/media/previews/open-book-travel-memory/v1/photo-open-book-travel-memory-0-960.webp" alt="Approved generated interpretation" width="240"> |

- [AI source / AI 合成原图](https://photo-media.easymuzi.cn/media/samples/photo-open-book-travel-memory-960.webp)
- [Generated interpretation / 生成效果](https://photo-media.easymuzi.cn/media/previews/open-book-travel-memory/v1/photo-open-book-travel-memory-0-960.webp)
- [Generation and visual review / 生成与视觉审核记录](examples/generation.json)
