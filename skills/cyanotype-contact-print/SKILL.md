---
name: cyanotype-contact-print
description: Restyle a supplied photograph as cyanotype print / 蓝晒影像. Use for this specific visual method while preserving observed subjects and structure.
---

# 蓝晒影像 · Cyanotype Print

以负片蓝晒影像为灵感，把完整照片转为普鲁士蓝阴影、淡蓝中间调与纸白高光，保留主体结构和细腻纸纹。

Reinterpret the complete photograph as a simulated negative-based cyanotype with Prussian-blue shadows, pale-blue midtones and paper-white highlights.

蓝晒方法适配自 AILesson 的 MIT 授权提示词；Copyright (c) 2026 AILesson。改动与固定版本记录于 [provenance.json](provenance.json)，完整上游许可见 [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt)。

The cyanotype method is adapted from AILesson's MIT-licensed prompt; Copyright (c) 2026 AILesson. [provenance.json](provenance.json) records the pinned source and modifications; [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt) carries the complete upstream license.

## 输入分析与实际保留

1. 读取用户提供的原图；若没有可用图片，先请求图片。不要用本仓库示例代替用户输入。
2. 观察实际主体数量、身份与表情、朝向、肢体和连接、物体开口、相互遮挡、前后层次、光向及画幅；据实形成简短保留清单。样片说明只是样片，不能当成其他输入的事实。
3. 使用支持参考图编辑的可用工具，把原图作为编辑输入。先说明观察到的主体，再结合下方机制及 [recipe.yaml](recipe.yaml) 按顺序组合指令；工具名称不是必须安装的依赖。
4. 实际编辑默认沿用原图比例和完整内容，除非用户另有要求。配方的 4:5 是目录样片比例，不代表可裁去用户照片中的主体。
5. 对照输入检查结果；只修正发现的问题，不为了增强风格改变身份或添加无关景物。区分已完成的视觉检查与尚未验证的效果。

## Input analysis and preservation

1. Inspect the supplied image; request an image only when none is available. Never substitute a repository example for the user's input.
2. Record the observed subject count, identity, expression, direction, anatomy, attachments, openings, overlaps, depth, light and framing. Build preservation instructions from this image, not from the sample description.
3. Use an available reference-image editing tool. Combine the observed facts with the ordered mechanisms in [recipe.yaml](recipe.yaml); its model-family label does not require an installation script.
4. Keep the input aspect ratio and complete composition unless the user requests another format. The recipe's 4:5 ratio is a catalog-sample default, not authorization to crop a subject.
5. Compare output with input and correct observed failures. Report only visual checks actually completed; stronger styling must not override identity or scene integrity.

## 风格机制 · Style mechanism

- 以负片蓝晒影像为灵感，把完整照片转为普鲁士蓝阴影、淡蓝中间调与纸白高光，保留主体结构和细腻纸纹。
- 识别特征：普鲁士蓝阴影、淡蓝中调纸白高光、细腻吸水纸纹。
- Medium anchor: A digital interpretation of a photographic cyanotype made from a negative, with Prussian-blue shadows, pale-blue midtones and paper-white highlights.

10. **medium** — Simulate a photographic cyanotype made from a negative, retaining the complete scene rather than extracting a plant silhouette.
20. **palette** — Map shadows to rich Prussian blue, midtones to nuanced pale blue and highlights to clean paper white, without other colors.
30. **lighting** — Keep luminous fine structures readable against darker surroundings; preserve the source light direction and gentle photographic tonal transitions.
40. **line** — Retain recognizable silhouettes, internal veins and translucent edges without inventing specimen details or tracing white contour strokes.
50. **texture** — Add subtle absorbent paper fibers and restrained exposure variation within the image, never a decorative margin or distressed border.
60. **composition** — Use only the supplied image as visual reference; preserve its viewpoint, aspect ratio, relative positions, object counts and existing negative spaces.
70. **detail** — Keep all existing containers, supports and surrounding objects; simplify only minor detail without adding objects or forcing a botanical arrangement.
80. **finish** — Deliver only the finished edge-to-edge artwork, without comparison panels, mockups, frames, labels, lettering, logos, signatures or watermarks.

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

- Exact objects, attached parts and specimen counts
- Source composition, overlaps and negative spaces
- Recognizable subject contours and fine internal structure
- Original perspective and contact-shadow placement

## 适用范围与几何边界 · Applicability and geometry

- 适用：器物、风景、人像、合影、产品。
- Applies to: Object, Landscape, Portrait, Group, Product.
- 这是基于负片蓝晒外观的数字模拟，不是实际接触光影照片或化学流程演示；保留原图比例、整体场景及连接结构，不强制横幅或重排标本。
- This digitally simulates a negative-based cyanotype appearance, not an actual contact photogram or chemical-process demonstration; retain the original ratio, complete scene and structural attachments.
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

- flat white silhouette replacement
- neon cyan
- white traced outlines
- invented leaf veins or extra specimens
- painted brush border
- torn paper or antique stains
- captions, labels or watermark

## 验收 · Acceptance

- 阴影、淡蓝中调与纸白高光层次明确，没有额外彩色。
  Prussian-blue shadows, pale-blue midtones and paper-white highlights remain distinct without extra colors.
- 主体数量、枝叶连接、现有器皿和完整场景保持不变。
  Subject counts, botanical attachments, existing containers and the complete scene stay intact.
- 细节和半透明层次可读，不退化成白色植物剪影。
  Fine and translucent details remain readable instead of becoming isolated white plant silhouettes.
- 沿用原图比例，无框、标签或文字；明确为数字模拟，不宣称真实光影照片或化学工艺。
  Keep the input ratio with no frame, labels or text; identify the result as a digital simulation, not a physical photogram or chemical process.

## 配方、来源与许可 · Recipe, provenance and license

- [recipe.yaml](recipe.yaml): structured image-editing recipe / 结构化图像编辑配方。
- [provenance.json](provenance.json): original authorship, method context and example status / 原创归属、方法背景与示例状态。
- [LICENSE](LICENSE): MIT applies to MuziGeek's original contributions / MIT 适用于 MuziGeek 的原创贡献。
- [LICENSE-THIRD-PARTY.txt](LICENSE-THIRD-PARTY.txt): the adapted cyanotype method retains AILesson’s MIT attribution / 蓝晒适配保留 AILesson 的 MIT 归属。
- 示例中的前后图均为 AI 合成，不是真人摄影或真实制作工艺的证据。结果会随模型与输入变化，不承诺相同输出。
- Example before/after images are AI-generated, not photographs of real people or evidence of physical craft production. Results vary by model and input.
- MIT 不授予用户输入、第三方作品、人物、商标或生成平台条款之外的权利；示例许可单独见 provenance。
- MIT grants no rights to user inputs, third-party works, likenesses or trademarks, and does not override generation-service terms; example terms are recorded separately in provenance.

## 示例状态 · Example status

ready：打包的原图与效果图均存在且记录了通过的视觉审核。

ready: both packaged source and effect exist and have recorded approved visual reviews.

| AI 合成原图 · Source | 通过审核的效果 · Approved effect |
| --- | --- |
| <img src="examples/source.webp" alt="AI-generated source" width="240"> | <img src="examples/effect.webp" alt="Approved generated interpretation" width="240"> |

- [AI source / AI 合成原图](examples/source.webp)
- [Generated interpretation / 生成效果](examples/effect.webp)
- [Generation and visual review / 生成与视觉审核记录](examples/generation.json)
