---
name: retro-comic-action-poster
description: Turn a supplied photo or character illustration into a retro American comic action poster / 复古美漫动作海报 with bold black silhouettes, red angular bursts, distressed spot colors and halftone ink. Use for this specific graphic poster treatment, including prompt-only requests.
---

# 复古美漫动作海报 · Retro Comic Action Poster

将输入主体转译为浓黑剪影主导的美漫海报：朱红爆炸形、斜向构图、黄绿旧纸色、骨白高光与粗颗粒印刷。以用户参考图所呈现的视觉机制为依据；主体、服装、道具与文字来自本次实际输入。

Reinterpret the supplied subject as a bold American comic action poster: deep black silhouettes, vermilion angular bursts, tilted composition, faded yellow-green paper tones, bone-white highlights and distressed ink. Derive content from the actual input, not from the artwork that established this style.

## 输入与执行 · Input and execution

1. 区分「要重绘的主体图」和「风格参考图」。仅提供风格参考时，可以整理提示词；生成重绘效果前需要主体图。不要默认把风格参考中的人物当作本次主体。
2. 先观察主体身份、数量、发型、服装分区、姿势、手部、道具和遮挡，再使用 [recipe.yaml](recipe.yaml) 的有序机制组合提示词。图生图时实际传入主体原图。
3. 支持「只输出提示词」。此时交付具体提示词，不自动调用生图工具或声称已有生成效果。
4. 默认沿用输入比例。用户未指定比例且仅提供文字创意时，海报默认 2:3 竖版；配方中的 4:5 只用于目录样片。
5. 文字只使用用户明确提供的标题和短句。没有文案时输出无字版，用主体和放射形组织画面，不编造英文、拟声词、品牌或微文案。

Distinguish the subject image from a style-only reference. Inspect the actual subject before combining the ordered recipe fragments. Pass the subject image to an image-editing tool when rendering. Prompt-only requests produce text without a generation call. Preserve input aspect ratio; a text-only poster brief defaults to 2:3, while recipe 4:5 is only a catalog-example convention. Include only explicitly supplied wording; otherwise use a text-free composition.

## 关键画法 · Visual grammar

- **黑色承担结构**：用大面积实黑合并阴影、发型和服装暗部，以粗轮廓与少数骨白切面交代形体。简化五官但保留识别特征；不能把所有人物画成同一张黑脸。
- **红色承担冲击**：背景采用不对称的大块朱红三角、锯齿和放射形，与主体斜线相互咬合。保留完整黑色区块，避免满屏碎装饰。
- **限制色盘**：黑、朱红、旧黄绿、骨白为主；仅在输入的重要服饰或配件上保留少量灰紫、青绿等识别色。颜色为哑光专色块。
- **动作来自构图**：主体放大、斜向排布、前后遮挡和适量前景放大形成压迫感。少量尖锐白色星芒只用于构图重音，不自动表示枪火。
- **旧印刷不是脏滤镜**：以疏密网点表现中间调，纸面颗粒、局部缺墨、边缘磨损和轻微套印错位跟随色版；脸、手与重要道具保持可读。
- **标题成为版面**：有标题时使用超大、紧缩、粗重的字形，可与主体重叠或沿边缘旋转，但不得遮掉辨识主体或改变文案。中文采用粗窄黑体逻辑，不强行转成英文。

Use black masses as structure, vermilion angular shapes as impact, flat spot colors as the palette, and subject scale/overlap as motion. Halftone density models tone; ink wear remains subordinate to readability. Small sharp white starbursts are graphic accents, not invented muzzle flashes. Supplied titles become large condensed graphic forms; do not invent copy or force English typography onto Chinese text.

## 保留与允许变化 · Preservation and geometry

- 保留主体身份、数量、关键发型或轮廓、主要服装分区、标志性配件，以及手和道具的真实连接关系。
- 允许简化为平涂剪影、重新配色、背景替换为抽象色块、整体倾斜和重新安排主体位置；不得裁掉身份关键特征。
- 强烈透视缩短仅用于原图已经支持的近大远小结构，或用户明确要求的新姿势。不要为贴近参考而凭空重构手臂、增加武器或改变动作含义。
- 参考图中的人物、枪械、星形位置和具体文字不自动迁移到新作品。输入若已有武器，按原有形态保留；普通人像或产品不新增武器。

Preserve identity, subject count, defining silhouette, costume regions, signature accessories and anatomical/prop connections. Permit graphic flattening, palette translation, abstract background replacement, whole-subject tilt and repositioning. Preserve identity-bearing details. Apply strong foreshortening only when supported by the source pose or requested by the user. Do not import the reference's character, weapon, wording or exact layout into unrelated subjects.

## 提示词母版 · Prompt scaffold

先用实际观察内容替换方括号，并删除不适用的标题指令；不要将方括号本身交给生图模型。

> 将输入图中的[主体及身份特征]重绘为复古美漫动作海报。保留[实际观察到的发型、服装分区、配件、姿势与道具连接]。用浓重实黑剪影、粗轮廓和骨白切面重塑体积；朱红大块锯齿与斜向放射形构成背景，旧黄绿与骨白作为辅助印色，少量[输入中的识别色]保留在关键配件上。主体占据主要画幅，以整体倾斜、前后遮挡和原有透视制造冲击。采用哑光专色印刷、大颗粒半调网点、局部缺墨、轻微套印偏移及旧纸纤维，细节保持可读。[有文案时：仅排入用户提供的“标题”，使用超大紧缩粗字；无文案时：不生成任何文字。]不添加输入中不存在的人物或武器，不照搬参考角色、标语或构图；避免摄影写实、3D 光泽、柔和渐变和均匀脏污。

Replace the bracketed observations before rendering. Build the English equivalent from the same observed facts and the fragments in [recipe.yaml](recipe.yaml); it must describe the same subject and composition permissions rather than becoming a separate creative direction.

## 验收 · Acceptance

- 缩小后仍能读出「黑色主体 + 红色冲击块 + 旧纸印色」，而非仅给照片叠加网点滤镜。
  At thumbnail size, a bold black subject, red impact shapes and aged-paper inks remain distinct; the result is a redraw, not a photo with dots.
- 主体身份、数量和关键配件可辨，手部、身体和道具连接正确。
  Identity, count and signature details remain recognizable; hands, anatomy and props connect coherently.
- 构图有斜向张力，纹理具有色版与纸面逻辑，面部和主要轮廓没有被噪点淹没。
  The composition has diagonal tension; print wear follows ink/paper logic without burying the face or silhouette.
- 文字逐字对应用户提供内容；未提供文案则无字，没有从风格参考偷带角色或武器。
  Wording matches supplied copy exactly, or the result is text-free; no reference-only character or weapon leaks into the output.

## 状态与来源 · Status and provenance

这是可独立复制的候选 Skill。已真实生成并通过视觉审核的样例为 1 张小号手合成原图与 1 张无字美漫效果图；生成提示词、配方哈希和图片保存凭证见 [examples/generation.json](examples/generation.json)。样例仅供审阅，尚未网站上架；正式图片地址未加入公开白名单前可能不可访问，审阅使用临时签名页。原创说明与配方采用 [MIT](LICENSE)；用户提供的风格参考图不随包分发，也不受本包文本许可覆盖。来源记录见 [provenance.json](provenance.json)。

This portable candidate has one actually generated and visually approved source/effect pair: a synthetic trumpeter and a text-free comic poster. See [examples/generation.json](examples/generation.json) for the actual prompts, executed recipe hash and image storage evidence. It is a review candidate, not a published website style. Canonical image URLs may be inaccessible until allowlisted; prerelease review uses a temporary signed page. Original instructions and recipe use [MIT](LICENSE). The user-supplied visual reference is not redistributed or relicensed. See [provenance.json](provenance.json).
