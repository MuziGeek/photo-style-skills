---
name: game-character-phone-snapshot
description: "Place a supplied game character into a believable casual modern phone photograph / 现代手机随拍. Preserve identifying face, hair, original costume, pose, props and framing; only this variant permits a modern background."
---

# 现代手机随拍 · Game Character Modern Phone Snapshot

以普通手机的自然曝光、适度广角空间感和轻微手持成像瑕疵，让角色像真实生活中的随手一拍。可换成现代日常背景，但不自动换现代便服、重做发色或丢掉伞、帽子和其他识别道具。

Use ordinary phone exposure, plausible wide-camera space and small handheld capture imperfections. A modern everyday backdrop is allowed; keep original clothing, hair color, parasols, hats and other identity anchors.

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
- 现代背景是本款明确允许的变化。仍保持输入比例、原构图、人物姿势与手部连接；原图并非自拍时，不强行添加举手机的手或手机。

Keep facial shape relationships, expression, apparent age, visible skin tone, hair color, costume construction and signature details. Turn simplified surfaces into plausible anatomy and materials without a generic model face or a beauty makeover. Preserve visible nonhuman features, subject count, pose and hand-to-prop geometry. Do not invent people, weapons or ornaments.

This variant explicitly allows a modern background. Preserve input ratio, composition, pose and hand connections. If the source is not a selfie, do not invent a phone or an arm holding it.

## 摄影机制 · Photographic mechanism

- Use a plausible modern everyday background that fits the existing camera viewpoint, subject scale and hand-to-prop geometry.
- Render ordinary phone-camera exposure and consistent ambient light without polished studio or fantasy game illumination.
- Allow slight handheld softness and modest digital noise while retaining clear facial anchors and costume details.
- Keep the original costume and signature props; do not invent a phone, extra hand, changed pose or modern wardrobe.
- Deliver one unposed-looking camera snapshot with the original aspect and complete frame, without captions or comparison panels.

## 验收 · Acceptance

- 角色身份和原造型保留，现代感来自摄影与环境而不是换脸换衣。
  Identity and original styling remain; the modern quality comes from capture and surroundings rather than a makeover.
- 成像像普通手机随拍，轻微模糊没有损坏脸部、手指和首饰。
  Small capture imperfections preserve readable face, fingers and ornaments.
- 背景与人物尺度、透视和光照统一，原道具与完整画幅仍在。
  Background, subject scale, perspective and light agree while original props and the whole frame remain.

- 确认这是一张基于实际输入编辑的摄影风格图，未声称真实拍摄、使用过参考帖的模型或实现了图形驱动功能。
  Confirm an edit of the actual input. Do not claim physical photography, use of a reference creator's model or implementation of graphics-driver technology.

## 来源与样例 · Provenance and examples

本 Skill 的说明与配方为独立撰写的机制描述，采用 [MIT](LICENSE)。[provenance.json](provenance.json) 区分研究链接、用户截图与生成效果。研究参考为[阿扳：gpt神力，指令在最后一张图片](https://www.douyin.com/?modal_id=7618879267359070426)，不复制其提示词正文或参考图片，也不把参考帖中的人物、服装、年龄或道具当作本款默认内容。

本轮样板输入来自用户提供的游戏截图，不是仓库合成原图或实拍真人。实际编辑与逐组对照审核已完成，原图和效果图的 COS 回读校验见 [生成记录](examples/generation.json)，当前样例为 `ready`。网站尚未公开。原始母版和展示图只长期保存在 COS。

Instructions and recipe are independently written descriptions of visual mechanisms under [MIT](LICENSE). Research links provide context without copied prompt text or reference images. The source is a user-supplied game screenshot. Real edit calls, individual source/output approval and complete COS readbacks are recorded in [generation.json](examples/generation.json); the example is `ready`. Originals and edited outputs remain in COS. The website has not been published.


[样板原图 · Source](https://photo-media.easymuzi.cn/media/samples/photo-game-character-phone-snapshot-960.webp) · [精选效果 · Selected edit](https://photo-media.easymuzi.cn/media/previews/game-character-phone-snapshot/v1/photo-game-character-phone-snapshot-0-960.webp)

展示链接在网站公开白名单更新前可能需要鉴权。Canonical display links may require authentication before website publication.
