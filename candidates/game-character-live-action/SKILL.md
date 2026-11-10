---
name: game-character-live-action
description: Reinterpret a supplied game-character render, screenshot or illustration as a believable live-action photograph / 游戏角色真人化 while preserving character identity, apparent age, costume, colors and pose. Supports prompt-only requests; not a default makeover or celebrity face swap.
---

# 游戏角色真人化 · Game Character Live Action

将角色图中的人、服装与场景转译为可实际拍摄的真人剧照。识别角色的依据是脸部轮廓、年龄呈现、发型、配色、服装结构、配件和姿势；写实不等于更换成统一的漂亮脸。

Translate a character image into a photograph that could come from a live-action production. Character identity comes from facial structure, apparent age, hairstyle, colors, costume construction, accessories and pose. Realism is a change of medium, not a standardized beauty makeover.

## 输入与执行 · Input and execution

1. 读取要转译的角色图。只有角色名称而无图片时，可以撰写概念提示词，但不能声称已保持具体输入的身份或完成图生图。需要精准对应时请求角色图。
2. 记录实际可见的主体数量、年龄呈现、脸型、眼眉关系、发色和发型、肤色呈现、服装层次、配件、动作、道具连接、光线及画幅。不要从角色名、性别或画风推断缺失的人种、年龄、身体特征。
3. 游戏截图中的血条、菜单、准星、姓名标签和边框是界面层。去掉这些叠层，不把它们绘成衣服、纹身、发光物体或场景家具；衣服和道具本身的识别图案则保留。
4. 使用支持参考图编辑的工具并实际传入角色图。以 [recipe.yaml](recipe.yaml) 为机制，在下方英文母版前补充观察到的身份要点；不要用仓库样片替代用户输入。
5. 请求「只写提示词」时仅交付提示词。默认沿用原图比例、景别和朝向；配方的 4:5 是目录样片比例，不授权裁掉人物或配件。

Inspect the supplied character image and record visible identity anchors, age presentation, counts, pose, costume, prop connections, lighting and framing. Do not infer missing ethnicity or body traits from a character name. Separate game interface overlays from character/world content. Pass the actual image to a reference-editing tool when rendering. A name-only brief supports a concept prompt, not a verified image-to-image likeness claim. Prompt-only requests require no generation call. Preserve input ratio and framing; recipe 4:5 is only a catalog-example convention.

## 真人化机制 · Live-action translation

- **身份先于美化**：保持颌面轮廓、眉眼关系、眼神、年龄呈现、肤色呈现以及角色特有的不对称细节。将夸张眼睛和简化五官转化为合理人体结构，仍保留形状关系和神态；不自动增白、磨皮、瘦脸或更改性别呈现。
- **发型保持轮廓**：保留刘海分区、长度、发旋、发饰与识别色。用真实发束、散发、受光与轻微颜色变化实现可信材质；彩色头发可以是染发，但不能因此换成常见黑发或金发。
- **服装有实体结构**：保留色块位置、裁片、领口、扣件、腰带和配饰；补足布料厚度、缝线、折痕、重力、磨损和真实金属反射。华丽服装不自动改成日常便服或廉价漫展服。
- **摄影逻辑统一**：将绘制的光影转化为一个可信的主光方向、自然阴影、合理曝光和景深。环境沿用原图的场景类别与空间线索；没有场景信息时才采用不抢主体的简洁背景。
- **非人类保留设定**：人类角色默认仍是人类。精灵耳、角、机械部件、兽形或其他非人类结构默认制作成可信的真人影视造型、义体或生物材质，不静默变成人类；只有用户明确要求「变成人」时才做物种改造，歧义影响结果时先确认。

Preserve face shape, brow-eye relationships, expression, apparent age, visible skin tone and distinctive asymmetry. Convert stylized anatomy to credible human proportions without replacing identity with a generic model. Keep hairstyle silhouette and identifying colors while rendering real strands. Reconstruct the same costume as physically made textiles, fastenings, leather and metal. Use coherent photographic lighting and source-consistent environmental cues. Preserve nonhuman species features as believable live-action creature, prosthetic or mechanical design unless humanization is explicitly requested.

## 保留与几何边界 · Preservation and geometry

- 保留主体数量、姿势意图、朝向、画面位置、关键配色和服装分区；保持手、道具、背带与身体的连接关系。
- 允许调整夸张眼睛、皮肤平涂、头发块面和非物理服装的材质与局部比例，使其可以拍摄；这种调整不能抹去脸型、身形特征、年龄呈现或标志性轮廓。
- 不自动换脸为演员、不移入漫展背景、不添加旁观者、不改成宣传海报，也不增加用户未要求的武器或性感化造型。
- 多角色图保留角色数量及彼此差异；只有用户已指定目标角色时才只处理该角色。存在多个可独立选择的角色且目标不明时询问目标。

Preserve count, pose intent, orientation, placement, identifying colors, costume regions and anatomical/prop connections. Permit localized proportion and material changes required to turn stylized anatomy and surfaces into a credible physical subject. Do not erase defining face/body shape or age presentation. Do not cast a celebrity, invent a convention crowd, add weapons, sexualize the character or convert the result into a promotional poster. Preserve multiple characters and their differences unless the user explicitly selects one; ask when an independent target selection is genuinely ambiguous.

## 可直接使用的英文母版 · Ready-to-use English prompt

以下母版可以连同角色图直接使用。若已有实际观察记录，在前面加一小段具体身份要点；不填写无法观察到的特征。

The following prompt works with an attached subject image. If inspection produced specific identity anchors, prepend those observed facts without inventing missing traits.

> Reinterpret the character image provided as a believable live-action photograph of the same character. Preserve the visible subject count, apparent age, facial silhouette, brow and eye relationships, expression, hairstyle, hair color, visible skin tone, body silhouette, costume color regions, signature accessories, pose, facing direction and hand-to-prop connections. Translate oversized illustrated eyes and simplified facial planes into plausible anatomy while retaining the character's recognizable shape relationships and expression. Render natural skin with restrained pores and fine tonal variation, individual hair strands following the original hairstyle, and physically made clothing with fabric thickness, seams, fastenings, believable folds and weight. Keep unusual identifying hair colors and costume details; do not replace them with ordinary styling. Maintain the source framing and aspect ratio. Rebuild the original setting and lighting as a coherent physical environment with one readable light direction, natural shadows and photographic depth; when the source has no environmental cues, use a quiet neutral background. Remove game-interface overlays without turning them into scene objects. Preserve nonhuman features as convincing creature, prosthetic or mechanical design unless humanization was explicitly requested. Do not substitute a celebrity or generic beauty-model face, beautify or whiten the character, alter apparent age, add people or props, invent a convention background, or add captions, logos or a comparison panel. The result should read as one real photograph rather than an anime drawing, plastic 3D render or glossy game-engine screenshot.

## 验收 · Acceptance

- 一眼能通过发型、脸部关系、服装与配件认出输入角色，未换成通用网红脸或无关演员。
  Hair, facial relationships, costume and accessories identify the input character; there is no generic glamour face or unrelated actor substitution.
- 皮肤、发丝、布料和金属表现真实，光照统一，无塑料皮肤、粘贴五官或游戏渲染光泽。
  Skin, hair, fabric and metal behave physically under coherent light, without plastic skin, pasted facial parts or game-render sheen.
- 主体数量、年龄呈现、姿势、重要道具和连接关系正确；非人类设定未被静默删除。
  Count, apparent age, pose, essential props and connections remain correct; nonhuman features are not silently removed.
- 游戏界面被去除且未成为场景内容；比例和景别保持，没有额外文字、旁观者或装饰物。
  Interface overlays are removed rather than made into scene objects; ratio and framing remain faithful without invented text, bystanders or decorations.

## 状态与来源 · Status and provenance

可独立复制的原创候选 Skill，已生成并完成 1 张 AI 合成角色原图与 1 张真人化效果图的视觉审核。本组仅供审阅，尚未在网站上架；实际输入、输出、提示词、审核及 COS 上传回读凭证见 [生成记录](examples/generation.json)。规范图片链接尚未进入公开白名单，不保证匿名访问；发布前可通过临时签名审阅页查看，不在包内保存会过期的签名地址。

说明与配方采用 [MIT](LICENSE)，来源与样图状态见 [provenance.json](provenance.json)。没有复制或改编许可不明的外部角色真人化提示词；AI 样图不是实拍真人照片。

This portable original candidate has one AI-generated character source and one live-action interpretation that passed visual review. The pair is for review and is not published on the website. [Generation records](examples/generation.json) record the actual input, output, prompt, review and COS upload/readback evidence. Canonical image URLs are not yet publicly allowlisted and anonymous access is not guaranteed. Prerelease viewing uses a temporary signed review page; expiring signed URLs are not stored in this package.

Instructions and recipe use [MIT](LICENSE); [provenance.json](provenance.json) records origin and example status. No externally authored prompt with unclear licensing was copied or adapted. The example images are AI-generated, not photographs of a real person.
