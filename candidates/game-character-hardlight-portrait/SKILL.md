---
name: game-character-hardlight-portrait
description: "Rebuild a supplied game character as a low-key photographic portrait with directional side light / 暗调侧光纪实. Preserve identity, costume, scene and framing; use for sculpted shadows and tactile texture, not a CCD or soft-light effect."
---

# 暗调侧光纪实 · Game Character Low-Key Side-Light Portrait

用单侧斜向光塑造脸部骨骼和衣物纹理，亮面克制偏暖、阴影保留层次，整体低饱和。暗调不能变成黑洞，也不靠增加法令纹、沧桑感或肤色变深来冒充真人。

Let one oblique side light describe facial planes and cloth texture, with restrained warmth in highlights and detailed shadows. Keep saturation controlled. Low-key exposure does not mean blocked blacks, invented aging lines or a changed skin tone.

## 输入与执行 · Input and execution

1. 先观察用户实际提供的角色图，记录主体数量、年龄呈现、脸型和眉眼关系、表情、肤色呈现、发型发色、服装分区、配件、动作、道具连接、场景、光线及原始比例。只按可见内容写观察，不从角色名称补全身份。
2. 把同一张实际输入传给支持参考图编辑的图像工具，按 [recipe.yaml](recipe.yaml) 的顺序执行。原图中的菜单、血条和姓名标签属于界面叠层，可去掉；角色服饰上的识别纹样不属于界面。
3. 默认保留完整输入画幅与画边内容；配方的 `4:5` 只用于网站目录约定，不授权裁切横图或长图。输出应是一张完成图，不附加对照拼图。
4. 用户仅要求提示词时只写提示词。输入缺失时再请求图片；不拿仓库样例替代用户角色。

Inspect the actual supplied character image, describing visible identity, age presentation, count, pose, costume, props, scene, light and ratio. Pass that same image to a reference-image editing tool and apply the ordered recipe. Remove interface overlays without turning them into physical objects; keep identifying patterns on real costume or props. Preserve the full input frame and its edges. The recipe's `4:5` is a catalog convention rather than permission to crop. A prompt-only request needs no generation; request an image only when it is absent.

## 保留与场景边界 · Identity and scene boundaries

- 保留脸部轮廓、眉眼关系、神态、年龄呈现和可见肤色。写实可以将卡通块面转为合理人体材质，但不能静默换成统一模特脸、瘦脸、增白或改变年龄。
- 保留原发色、刘海分区、发饰、服装结构与配色；彩发不自动改为黑发。猫耳、尖耳、角等明显结构保持为原设定或可信造型，不在写实时静默删掉。
- 原图中的手势、身体轮廓、主体数量和手与道具的连接关系保持；不增加手指、武器、人物或无依据的首饰。
- 保留原场景和主体位置，允许重新组织曝光与侧光；不增添武器、烟雾、灯笼或额外景物制造戏剧性。

Keep facial shape relationships, expression, apparent age, visible skin tone, hair color, costume construction and signature details. Turn simplified surfaces into plausible anatomy and materials without a generic model face or a beauty makeover. Preserve visible nonhuman features, subject count, pose and hand-to-prop geometry. Do not invent people, weapons or ornaments.

Keep source scene and placement while reorganizing exposure around side light. Do not add weapons, smoke, lanterns or extra scenery for drama.

## 摄影机制 · Photographic mechanism

- Use one oblique side light with a decisive yet physically coherent light-to-shadow boundary across the subject.
- Keep warm highlights restrained and shadows detailed; do not black out eyes, costume ornaments or prop connections.
- Emphasize authentic skin, fabric weave and metal wear without adding aging lines or changing visible skin tone.
- Retain the original scene, pose, viewpoint and frame; change light and exposure rather than adding dramatic objects.
- Finish as a low-saturation natural photograph with controlled highlight rolloff, no glamour filter or simulated film damage.

## 验收 · Acceptance

- 脸型、年龄呈现和肤色辨识度保持，未被增龄或统一硬汉化。
  Face shape, age presentation and skin-tone identity stay intact without forced aging or a standardized rugged look.
- 侧光方向一致，阴影里仍能辨认眼睛、服装和道具。
  Directional light is coherent and shadows still describe eyes, clothes and props.
- 构图、场景结构与主体连接关系保留，材质真实且不过分锐化。
  Composition, scene structure and physical connections remain, with tactile materials rather than oversharpening.

- 确认这是一张基于实际输入编辑的摄影风格图，未声称真实拍摄、使用过参考帖的模型或实现了图形驱动功能。
  Confirm an edit of the actual input. Do not claim physical photography, use of a reference creator's model or implementation of graphics-driver technology.

## 来源与样例 · Provenance and examples

本 Skill 的说明与配方为独立撰写的机制描述，采用 [MIT](LICENSE)。[provenance.json](provenance.json) 区分研究链接、用户截图与生成效果。研究参考为[It's Yuumi：调色的神](https://www.xiaohongshu.com/explore/6abeaf0f000000001a029612)，不复制其提示词正文或参考图片，也不把参考帖中的人物、服装、年龄或道具当作本款默认内容。

本轮样板输入来自用户提供的游戏截图，不是仓库合成原图或实拍真人。实际编辑与逐组对照审核已完成，原图和效果图的 COS 回读校验见 [生成记录](examples/generation.json)，当前样例为 `ready`。网站尚未公开。原始母版和展示图只长期保存在 COS。

Instructions and recipe are independently written descriptions of visual mechanisms under [MIT](LICENSE). Research links provide context without copied prompt text or reference images. The source is a user-supplied game screenshot. Real edit calls, individual source/output approval and complete COS readbacks are recorded in [generation.json](examples/generation.json); the example is `ready`. Originals and edited outputs remain in COS. The website has not been published.


[样板原图 · Source](https://photo-media.easymuzi.cn/media/samples/photo-game-character-hardlight-portrait-960.webp) · [精选效果 · Selected edit](https://photo-media.easymuzi.cn/media/previews/game-character-hardlight-portrait/v1/photo-game-character-hardlight-portrait-0-960.webp)

展示链接在网站公开白名单更新前可能需要鉴权。Canonical display links may require authentication before website publication.
