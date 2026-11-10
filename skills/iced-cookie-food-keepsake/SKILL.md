---
name: iced-cookie-food-keepsake
description: Restyle a supplied photograph as iced cookie food keepsake / 糖霜茶点小饼. Use for this specific visual method while preserving observed subjects and structure.
---

# 糖霜茶点小饼 · Iced Cookie Food Keepsake

把照片中的茶点组合转成一块可辨认的小饼干，以烘烤边缘、糖霜色块和浅浅挤花保留食物轮廓。

One handmade iced biscuit interpreting the photographed food as shallow piped icing relief over a baked cookie base. Rebuild the source meal arrangement inside one complete biscuit outline on a quiet pale tabletop.

配方文字由 MuziGeek 根据已记录的小红书视觉方法研究独立编写；来源作者、笔记链接与实际阅读位置见 [provenance.json](provenance.json)。不转载来源提示词，不声称发明这些视觉方法，也不将来源内容改授为本仓库许可。

Recipe wording independently authored by MuziGeek after the documented Xiaohongshu visual-method research. [provenance.json](provenance.json) records authors, note links and evidence locations. Source prompts are not republished; no invention of the visual methods or relicensing of source content is claimed.



## 输入分析与实际保留

1. 读取用户提供的原图；若没有可用图片，先请求图片。不要用本仓库示例代替用户输入。
2. 观察原图主体、身份、数量、连接、遮挡、光线和画幅。依据本 Skill 的保留约束与几何边界，区分需要保留及明确允许转化的部分。样片说明不能当作用户输入的事实。
3. 使用支持参考图编辑的可用工具，把原图作为编辑输入。先说明观察到的主体，再结合下方机制及 [recipe.yaml](recipe.yaml) 按顺序组合指令；工具名称不是必须安装的依赖。
4. 默认沿用原图比例；仅按用户要求及本 Skill 明确写出的构图或几何转化调整。配方的 4:5 是目录样片比例，不授权裁去必须保留的主体。
5. 对照输入检查结果；只修正发现的问题，不为了增强风格改变身份或添加无关景物。区分已完成的视觉检查与尚未验证的效果。

## Input analysis and preservation

1. Inspect the supplied image; request an image only when none is available. Never substitute a repository example for the user's input.
2. Inspect the real subjects, identity, counts, attachments, overlaps, light and framing. Distinguish preserved attributes from explicitly permitted transformations using this Skill’s preservation and geometry rules; sample descriptions are not facts about user input.
3. Use an available reference-image editing tool. Combine the observed facts with the ordered mechanisms in [recipe.yaml](recipe.yaml); its model-family label does not require an installation script.
4. Keep the input ratio by default; change composition or geometry only as requested by the user and expressly permitted below. The recipe’s 4:5 ratio is a catalog-sample default, not permission to crop protected subjects.
5. Compare output with input and correct observed failures. Report only visual checks actually completed; stronger styling must not override identity or scene integrity.

## 风格机制 · Style mechanism

- 把照片中的茶点组合转成一块可辨认的小饼干，以烘烤边缘、糖霜色块和浅浅挤花保留食物轮廓。
- 识别特征：烘烤饼边、糖霜浅浮雕、挤花轮廓。
- Medium anchor: One handmade iced biscuit interpreting the photographed food as shallow piped icing relief over a baked cookie base.

10. **medium** — One handmade iced biscuit interpreting the photographed food as shallow piped icing relief over a baked cookie base.
20. **composition** — Rebuild the source meal arrangement inside one complete biscuit outline on a quiet pale tabletop.
30. **texture** — Show golden porous baked edges, matte set icing pools and narrow raised piping that separates recognizable food components.
40. **palette** — Use a few food-safe-looking icing colors drawn from the actual dish, leaving a visible warm biscuit border.
50. **detail** — Translate the observed vessel and food contours into edible relief shapes, never a printed photograph or a painted flat image.
60. **finish** — Deliver one finished image at the input aspect ratio, without comparison panels, unrequested lettering, logos, signatures or watermarks.

## 保留约束 · Preservation constraints

在实际输入观察结果之上应用以下约束；清单不授权凭空添加图片中不存在的元素。

Apply these constraints to observed content; they never authorize inventing absent subjects.

- Allow flattening the entire food arrangement into one biscuit; retain relative positions, identifying shapes and visible component count.
- Preserve observed subject count, recognizable features, clothing colors, meaningful objects and their physical relationships.
- Keep the complete main subject and essential connections legible; never infer absent details from the example description.

## 适用范围与几何边界 · Applicability and geometry

- 适用：美食。
- Applies to: Food.
- 允许把整组食物压成一块饼干的浅浮雕；保留相对位置、识别轮廓与可见组件数量，不直接印照片。
- Allow flattening the entire food arrangement into one biscuit; retain relative positions, identifying shapes and visible component count.
- 未明确允许的结构变化均不属于此风格；不把这些方法解释为复刻某位艺术家、品牌或现成作品的授权。
- Structural changes not explicitly allowed above are outside this method. This is not permission to reproduce a named artist, brand or existing artwork.

## 排除项 · Avoid

- Duplicate subjects, disconnected anatomy, accidental cropping or invented accessories.
- Photographic image printed on icing, clay texture, multiple duplicate cookies, wrappers, logos or unrelated candy decorations.
- Unrequested lettering, logos, signatures, watermarks or comparison panels.

## 验收 · Acceptance

- 把照片中的茶点组合转成一块可辨认的小饼干，以烘烤边缘、糖霜色块和浅浅挤花保留食物轮廓。
  Show golden porous baked edges, matte set icing pools and narrow raised piping that separates recognizable food components.
- 允许把整组食物压成一块饼干的浅浮雕；保留相对位置、识别轮廓与可见组件数量，不直接印照片。
  Allow flattening the entire food arrangement into one biscuit; retain relative positions, identifying shapes and visible component count.
- 主体特征、必要连接和观察到的物件保持清楚，具体风格机制真实可见。
  Observed features, essential connections and meaningful objects stay legible with the requested mechanism clearly visible.
- 仅一张完整成图，无无关文字、品牌、水印或对比拼图。
  One complete finished image without unrelated text, branding, watermark or comparison panels.

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
| <img src="https://photo-media.easymuzi.cn/media/samples/photo-iced-cookie-food-keepsake-960.webp" alt="AI-generated source" width="240"> | <img src="https://photo-media.easymuzi.cn/media/previews/iced-cookie-food-keepsake/v1/photo-iced-cookie-food-keepsake-0-960.webp" alt="Approved generated interpretation" width="240"> |

- [AI source / AI 合成原图](https://photo-media.easymuzi.cn/media/samples/photo-iced-cookie-food-keepsake-960.webp)
- [Generated interpretation / 生成效果](https://photo-media.easymuzi.cn/media/previews/iced-cookie-food-keepsake/v1/photo-iced-cookie-food-keepsake-0-960.webp)
- [Generation and visual review / 生成与视觉审核记录](examples/generation.json)
