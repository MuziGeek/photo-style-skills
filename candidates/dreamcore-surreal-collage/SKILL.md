---
name: dreamcore-surreal-collage
description: Transform a supplied photograph into a layered surreal dreamcore collage / 超现实梦核拼贴 with a recognizable main anchor, repeated detail fragments, broken scale, geometric overlaps and degraded screen or print texture. Use for dense memory collages and prompt-only requests, not sparse liminal architecture.
---

# 超现实梦核拼贴 · Surreal Dreamcore Collage

让输入主体成为一幅不稳定记忆图像的主锚点：局部重复、错位尺度、几何遮挡与旧屏幕／印刷退化共同重组画面。主体仍可辨认，画面层次清楚；密集不等于随机堆砌。

Rebuild the supplied subject as a layered memory collage. Keep one recognizable main anchor while detail echoes, impossible scale, geometric interruption and degraded media create a deliberate dream anomaly. Dense layering must retain a readable hierarchy.

改编自 AndrwewHan/dreamcore-collage-poster，固定版本 `509a2d8392f995a45716d57bdcb60a57c2973dca`。上游版权为 **Copyright (c) 2026 Leslie Vanwright**，MIT 许可。完整许可保留于 [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt)，准确来源及修改记录见 [provenance.json](provenance.json)。本包新增说明采用 [MIT](LICENSE)。

Adapted from AndrwewHan/dreamcore-collage-poster at the pinned commit above. Original copyright: **2026 Leslie Vanwright**, under MIT. [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt) retains the complete upstream license; [provenance.json](provenance.json) records source and modifications. New contributions use [MIT](LICENSE).

## 输入与执行 · Input and execution

1. 区分主体原图与纯风格参考，观察主锚点、可辨细节、人数、身体和配件关系、环境、配色与必要文字。图生图必须传入主体原图，不以文字猜测替代。
2. 选一个主体作为主锚点；若原图是合影，整组人物作为一个锚点，保留每个人的身份与数量。另选 2–5 个从输入中提取的局部碎片作为视觉回声。
3. 确定一条主异常：不可能尺度、局部在自身内部重复、镜像错位或悬浮拼接。明确前中后层，不能只写「怪诞、梦核」而不描述画面关系。
4. 从 [recipe.yaml](recipe.yaml) 组合实际提示词；「只输出提示词」时不生成。默认沿用输入比例，4:5 仅作目录样片比例。
5. 默认无字。只使用用户明确要求的短字、标题或日期，不自动加档案号、电脑弹窗句子或伪英文。

Inspect the source and distinguish it from style-only references. Choose one main anchor; for a group photo, treat the group as one anchor while preserving each member. Extract two to five meaningful detail echoes from the source, choose one dominant impossible relationship, and state foreground/midground/background placement. Compile the recipe with observed facts. Preserve input aspect ratio. Prompt-only requests produce text; default to no text unless the user supplies wording.

## 拼贴结构 · Collage construction

- **锚点优先**：主锚点占主要画幅，轮廓和身份可辨。将背景压低到第三层，局部回声位于第二层，不用碎片遮完主体。
- **回声有来源**：从旋钮、窗框、叶片、织物、配件、眼部或其它真实细节中取材。它们应显得像剪下、放大、翻转或低分辨率复印的图像，不像新长出的器官或新加入的人物。
- **几何制造中断**：以不等大的矩形、半透明色片、窄条或旧屏幕边框切断连续画面；指定遮挡发生在哪里，以及哪层仍可透见。
- **尺度破坏记忆**：让一个真实局部异常放大，或让主锚点在一个局部中缩小重现。保留清楚的拼贴边缘和主体解剖，不把异常变成生成错误。
- **媒介退化有选择**：从 CRT 扫描线／轻微 RGB 偏移、复印网点／缺墨、早期 JPEG 压缩块中选一个主系统；可混入少量第二种，不让噪声覆盖全部层次。
- **限制色盘**：从输入选择 2–4 个主色。黑、骨白、灰蓝、赭黄、褪粉或暗红均可；不要无依据地把所有图做成霓虹彩虹。

Read the anchor first, detail echoes second and the environment third. Echoes are visibly cropped or reproduced image fragments, not new anatomical parts or extra people. Specify geometric overlap and one deliberate scale anomaly. Select a dominant degradation system—CRT/RGB, photocopy/halftone or early JPEG—and constrain the palette to two to four source-related colors.

## 允许变化与保留 · Geometry and preservation

- 允许对局部图像裁切、重复、镜像、缩放、降低分辨率与改变透明度，并重新组织原背景。
- 保留主锚点的身份、完整人数、主要轮廓、身体连接、关键配件和用户指定的事实。镜像／重复局部必须保持为分离的平面图像，不能改变真实主体数量。
- 不将眼睛、祭坛、宗教图腾或特定品牌当作梦核必需元素。只有输入或用户指定时才使用；物体和建筑同样能成立。
- 不照搬参考作品的具体角色、文案、符号布局或艺术家标识。默认无血腥、肢解或怪物；怪异来自视觉关系和记忆媒介。

Cropping, repetition, mirroring, scale changes, low-resolution reproduction and translucent overlays are allowed for clearly separated fragments. Preserve main-anchor identity, actual people count, anatomy, defining accessories and user-specified facts. Do not turn echoed body details into new limbs. Eyes, shrines and brand symbols are optional source content, never compulsory style tokens. Generate uncanniness through image relationships rather than unrequested gore or monsters.

## 提示词母版 · Prompt scaffold

将方括号替换为实际内容；不要把占位字段留在最终提示词里。

> 将输入图重组为密集但层次清楚的超现实梦核拼贴，保留[主锚点与身份特征]。以[2–4种输入相关主色]建立底色。主锚点先被看见；从输入中提取[2–5个具体细节]，作为清楚分离的裁切图片在[指定前后层位置]重复、镜像或异常放大。用[矩形、窄条、半透明色片或旧屏幕边框]中断[具体区域]，制造[一种明确的不可能关系]。采用[一种主媒介退化]及少量[辅助退化]，像被反复扫描和记错的图像。保留真实主体人数、解剖与配件；无随机文案、品牌、摄影棚广告排版、光滑3D、怪物或血腥。

> Recompose the supplied image into a dense, hierarchically clear surreal dreamcore collage. Preserve [main anchor and identity cues]. Limit the palette to [two to four source-related colors]. Read the main anchor first. Extract [two to five specific source details] as visibly separate cropped image echoes, repeated, mirrored or enlarged at [explicit front/back positions]. Interrupt [specific regions] with [rectangles, strips, translucent blocks or old-screen borders] to create [one precise impossible relationship]. Use [one primary media-degradation system] with restrained [secondary texture], like an image repeatedly scanned and imperfectly remembered. Preserve actual people count, anatomy and accessories. No invented copy, brands, commercial ad layout, glossy 3D, monsters or gore.

## 验收 · Acceptance

- 主锚点可辨，合影不丢人；局部回声看起来是图像碎片，不是多余器官或额外人物。
  The anchor remains recognizable and groups remain complete; echoed fragments read as images rather than extra limbs or people.
- 明确存在局部重复、几何遮挡与一处主导的不可能关系，不能仅加纹理滤镜。
  Detail repetition, geometric interruption and one dominant impossible relationship are visible; a texture-only filter does not pass.
- 锚点、回声、环境三层有主次，2–4 种主色统一，媒介退化不吞没识别特征。
  Anchor, echoes and environment have distinct priority; two to four colors unify the image and degradation preserves recognition.
- 无未经要求的文字、品牌或恐怖内容，人物与配件连接没有生成错误。
  No unrequested text, branding or horror appears, and anatomy/prop connections remain coherent.

## 示例状态 · Example status

本款已有 1 张 AI 合成原图与 1 张以该原图为实际输入的效果图，均已通过视觉审核。红色电话保留为主锚点，放大的拨盘嵌套原场景，窗框、卷线和 CRT 中的场景形成分离的图像回声。实际提示词、配方绑定与 COS 上传回读凭证由 [生成与审核记录](examples/generation.json)统一记录；样例就绪状态以其中完整凭证为准。

电话拨盘原本含有重复或不规整的小数字，效果图及放大碎片保留了这类物体细节；这些数字不是新增装饰文案，本样例不用于证明精确文字还原能力。

样例仅供审阅，尚未在网站上架。规范 COS 图片 URL 未加入公开白名单，不保证匿名可访问；查看本次交付提供的临时签名审阅页，链接过期后需重新签发。上游仓库没有可核验的生成样片，网上参考不作为本包的实测结果。

One AI-generated source and one effect edited from that actual source have passed visual review. The red telephone remains the anchor; an enlarged dial nests the original scene, while window, cord and CRT fragments provide separate image echoes. [Generation and review records](examples/generation.json) hold the actual prompts, recipe binding and COS upload/readback receipts; example readiness requires complete evidence in that record.

The source dial already contains repeated or irregular small numerals, retained as physical object details in the effect and enlarged fragments. They are not invented decorative copy. This example does not validate exact text reproduction.

These examples are for review and are not listed on the website. Canonical COS image URLs are not on the public allowlist and may be unavailable anonymously. Use the temporary signed review page delivered with this batch; expired links require renewal. No verifiable generated samples were found upstream, and research images are not claimed as this package's results.
