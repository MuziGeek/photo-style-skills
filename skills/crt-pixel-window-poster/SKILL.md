---
name: crt-pixel-window-poster
description: Restyle a supplied photograph as crt pixel window poster / CRT像素视窗海报. Use for this specific visual method while preserving observed subjects and structure.
---

# CRT像素视窗海报 · CRT Pixel Window Poster

将原图主体重绘为统一像素网格中的有限色角色，配合同源局部视窗、低分辨率控件和克制扫描线，构成复古显示器海报。

Redraw the source subject on a coherent pixel grid with a limited palette, source-detail windows and restrained CRT artifacts in a retro interface poster.

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

- 将原图主体重绘为统一像素网格中的有限色角色，配合同源局部视窗、低分辨率控件和克制扫描线，构成复古显示器海报。
- 识别特征：统一粗像素、同源局部视窗、扫描线磷光。
- Medium anchor: A low-resolution pixel portrait within a layered retro desktop, with coherent source-detail windows and restrained phosphor display artifacts.

10. **composition** — Create a portrait 3:4 retro screen poster with one dominant pixel reconstruction of the supplied musician and synthesizer.
   生成3:4竖版复古屏幕海报，以原图乐手和合成器的像素重构为主视觉。
20. **medium** — Use a single coarse pixel grid for subject, borders, icons and letters; show deliberate square steps rather than smooth anti-aliasing.
   主体、边框、图标和文字使用同一粗像素网格，以明确方阶代替平滑抗锯齿。
30. **palette** — Build the image mainly from near-black, cyan, muted magenta and pale green; use sparse ordered dithering for intermediate tones.
   主要使用近黑、青蓝、柔洋红和浅绿，过渡处仅用少量有序抖色。
40. **composition** — Overlay three to five subordinate desktop windows, keeping the main face and both hands readable.
   叠放三至五个次要桌面窗口，确保主画面面孔和双手清楚。
50. **detail** — At least two windows must enlarge real source details, such as the headphones, keyboard or hand on a knob.
   至少两个窗口放大真实源图细节，例如耳机、琴键或旋钮上的手。
60. **detail** — Other windows may show a small equalizer or geometric grid; keep them visually subordinate and avoid invented personal data.
   其他窗口可显示小均衡器或几何网格，必须处于次要层级，不编造个人数据。
70. **typography** — Use tiny bitmap window titles such as VIEW, DETAIL and MIX; avoid paragraphs, brand names and repeated large headings.
   窗口用VIEW、DETAIL、MIX等微型点阵标题，不添加段落、品牌或重复大标题。
80. **texture** — Apply thin scanlines, slight channel fringing and a restrained phosphor glow consistently across the screen.
   薄扫描线、轻微通道色边与克制磷光辉光统一作用于屏幕。
90. **finish** — Use only mild screen curvature; preserve pixel clarity and source identity without heavy glitches, exterior hardware mockups or watermark.
   屏幕仅轻微弯曲，保持像素清楚和主体辨识，不加重故障、外部硬件样机或水印。

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

- 保留乐手头部、耳机、衣服、双手动作与合成器布局的辨识度。
  Keep the musician’s head, headphones, clothing, hand actions and synthesizer arrangement identifiable.
- 只有局部窗口可重复源图部分，必须明确为裁切图，不是额外人物或肢体。
  Only detail windows may repeat source parts; they must be explicit crops rather than extra people or limbs.
- 用像素概括人体时仍保持连接与动作方向。
  Maintain the input’s physical connections and gesture directions while reducing anatomy into pixels.

## 适用范围与几何边界 · Applicability and geometry

- 适用：人像、器物。
- Applies to: Portrait, Object.
- 允许像素化、局部窗口裁切重复和轻微屏幕弯曲；主主体身份、人体连接及原有交互不改变。 recipe.yaml 保留本次样本实际执行的具体指令；换用其他输入前，须先将样本物体与样本配色绑定到已观察实体及用户选择，缺失实体的条款直接跳过，禁止据此新增对象。本次样例审核不证明其他输入均已通过验证，也不声称执行了新的通用配方版本。 乐手、耳机、双手与合成器仅是样本主体；其他人像或物件改用其真实辨识特征和局部视窗，不添加人物或乐器，像素与CRT色彩规则仍保留。
- Pixel reduction, explicit repeated detail crops and mild screen curvature are allowed; identity, anatomy and source interactions remain unchanged. recipe.yaml preserves the concrete instructions executed for this sample. Before another input, bind sample objects and sample colors to observed entities and user choices; skip clauses for absent entities and never introduce objects to satisfy them. This sample review does not validate every input or claim execution of a new generalized recipe version. Musician, headphones, hands and synthesizer describe the sample; other portraits or objects use their real identifying features and detail windows, without inventing people or instruments, while retaining pixel and CRT color rules.
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

- 平滑数字画只叠扫描线、像素尺寸混乱、主体不清或窗口拥挤。
  Smooth digital painting beneath a scanline filter, inconsistent pixel sizes, illegible main subject or excessive window clutter.
- 虚构面孔、脱节双手、无关动漫角色、个人数据屏、重撕裂、设备样机或水印。
  Invented faces, disconnected hands, unrelated anime characters, personal-data screens, heavy tearing, device mockups or watermark.

## 验收 · Acceptance

- 主体确实由粗像素构成，面孔、耳机和双手仍可辨。
  The subject is genuinely built from coarse pixels, with face, headphones and hands recognizable.
- 三至五个次要窗口中至少两个对应原图真实局部。
  Three to five secondary windows include at least two true source-detail views.
- 全图像素尺度和CRT效果一致，无重故障遮挡。
  Pixel scale and CRT effects remain coherent without obscuring glitches.
- 3:4竖幅不出现额外人物、个人数据、品牌或水印。
  The 3:4 image contains no extra people, personal data, brands or watermark.

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
| <img src="https://photo-media.easymuzi.cn/media/samples/photo-crt-pixel-window-poster-960.webp" alt="AI-generated source" width="240"> | <img src="https://photo-media.easymuzi.cn/media/previews/crt-pixel-window-poster/v1/photo-crt-pixel-window-poster-0-960.webp" alt="Approved generated interpretation" width="240"> |

- [AI source / AI 合成原图](https://photo-media.easymuzi.cn/media/samples/photo-crt-pixel-window-poster-960.webp)
- [Generated interpretation / 生成效果](https://photo-media.easymuzi.cn/media/previews/crt-pixel-window-poster/v1/photo-crt-pixel-window-poster-0-960.webp)
- [Generation and visual review / 生成与视觉审核记录](examples/generation.json)
