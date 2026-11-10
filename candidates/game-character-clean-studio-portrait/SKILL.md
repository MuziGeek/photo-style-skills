---
name: game-character-clean-studio-portrait
description: "Turn a supplied game character into a softly lit portrait with fine natural skin, believable eyes, individual hair strands and restrained retouching / 柔光原生肤质真人化. Use for this clean photographic texture or a prompt describing it; preserve the input character and offer a gray studio backdrop only when requested."
---

# 柔光原生肤质真人化 · Soft-Light Natural-Skin Character Portrait

把游戏表面转为细腻、克制修饰的摄影质感：大面积柔光、自然眼周、轻微肤色起伏、可辨的细发丝与织物。它不同于 CCD 直闪、电影硬侧光，也不靠添加粗毛孔、雀斑、皱纹或油光来证明“真实”。

Translate game surfaces into fine photographic skin, eyes, hair and fabric under broad soft light. Retouching remains restrained. This look does not depend on compact-camera flash, dramatic hard light, coarse pores, added blemishes or an aged face.

## 输入与范围 · Input and scope

- 实际重绘时，以用户要转换的游戏角色图为主体依据。先观察脸型和眉眼关系、年龄呈现、神态、肤色、发色发型、服装、饰品、动作、道具与画幅。已有图片时直接观察，不要求用户重新描述。
- 如果另附已真人化的成图，它只提供光线和材质参考，不提供新主体身份。明确标注“角色输入”和“风格参考”，避免混脸。没有风格参考也可按下文执行。
- 默认保留输入角色、服装、姿势、场景布局、昼夜、环境曝光、光源色彩、原始比例和画边内容，只转译材质并采用协调的柔光。用户要求“像样图一样的灰底棚拍”时，才使用下方背景追加词；正面、胸像或换衣须由用户另行指定。
- 仅要求反推提示词或制作 Skill 时，提供推导结果即可，不自动生成图片。只有实际重绘而缺少角色输入时才请求原图。

For an actual edit, inspect and pass the target character image to an image-editing tool. If a second finished portrait is supplied, label it as a material/light reference, not another identity. Preserve the target's apparent age, face relationships, expression, hair, costume, props, pose, scene layout, time of day, environmental exposure, practical light colors and full native frame. A prompt/Skill-only request needs no generation. Request a missing target only when an actual edit is required.

## 可直接使用的提示词 · Ready-to-use prompt

### 中文

将输入的游戏角色重绘为具有细腻真人摄影质感的肖像。以输入角色为唯一身份依据，保留其脸型、眉眼关系、神态、年龄呈现、肤色、发型发色、服装、饰品及道具，不套用参考成图的人脸或造型。将游戏化的五官转为可信的人体结构，同时保持角色辨识度。

采用大面积、接近镜头轴线且略偏上的柔和主光，适度环境补光，鼻侧、眼窝和下颌形成轻柔渐变阴影。肤色自然，保留细小皮肤纹理、轻微色泽差异和柔和的表面反射，修饰克制；皮肤细腻但不是磨皮蜡像，也不人为增加粗毛孔、痘痘、雀斑或皱纹。保留合理的眼睑厚度、自然泪线、柔和眼周色差和细小眼神光；眼白不过白，虹膜不过大。嘴唇具有细微唇纹和柔和色差，避免厚重唇釉高光。

头发在原有轮廓内呈现发束体积、疏密变化、分离的细发丝和少量自然飞发，眉毛有真实毛流，避免塑料发片、密集白色锐化边缘。服装保持原设计，呈现可信的织纹、缝线、折痕和材质反光。肤色自然、调色克制，采用温和对比和自然清晰度，保留输入固有的鲜艳发色与服装颜色。保留原场景的昼夜、环境亮度层次及主要光源色彩关系；将柔光协调到现场，不为了中性色调消除夜景或暖冷灯光。保留原始姿势、场景布局、完整画幅和比例，不拉正侧脸、不强裁胸像。输出一张完成图。

### English

Repaint the supplied game character as a believable photographic portrait with fine natural skin and restrained retouching. Use the target image as the sole identity source. Preserve facial shape relationships, expression, apparent age, visible skin tone, hair color and silhouette, costume, accessories and props. Translate stylized facial anatomy plausibly without substituting the reference portrait's face or styling.

Use a broad soft key near the camera axis and slightly above, with gentle ambient fill and gradual shadows around the nose, eye sockets and jaw. Render fine skin texture, small tonal variations and soft surface reflections. Keep skin delicate without waxy smoothing or invented coarse pores, acne, freckles or wrinkles. Give eyelids believable thickness, natural wet lines, subtle eye-area color and small catchlights; avoid pure-white sclera and oversized irises. Preserve fine lip lines and quiet tonal transitions without glossy lacquer.

Keep the original hair shape while resolving grouped volume, varied strand density, separated fine hairs and a few flyaways. Render natural eyebrow direction, not plastic hair sheets or oversharpened white outlines. Preserve the outfit's design with credible weave, seams, folds and material response. Keep skin color natural and grading restrained, with moderate contrast and natural sharpness while retaining signature vivid hair and costume colors. Preserve time of day, environmental exposure relationships and practical light colors; integrate soft light into the scene without turning night into day or neutralizing mixed lighting. Keep the original pose, scene layout, full frame and aspect ratio. Do not straighten a side view or force a chest-up crop. Return one finished image.

### 负面约束 · Negative constraints

游戏引擎油光，塑料皮肤，蜡像磨皮，过度美颜，统一模特脸，换脸换衣，改变年龄，增白肤色，夸张毛孔，新增痘痘雀斑皱纹，过黑眼圈，纯白眼球，巨大虹膜，玻璃假眼，塑料发片，锐化白边，HDR，强硬轮廓光，大片炫光，重颗粒，字幕，新增水印。

Game-engine gloss; plastic or waxy skin; excessive beauty smoothing; generic model-face substitution; wardrobe replacement; changed age or skin whitening; exaggerated pores; invented blemishes, freckles or wrinkles; painted dark circles; pure-white eyes; oversized irises; glass-doll eyes; plastic hair sheets; sharpening halos; HDR; hard rim light; flare; heavy grain; captions; added watermarks.

若工具没有独立负面提示词字段，将这些约束合并进主提示词，不虚构 CFG、降噪强度或采样器参数。
If the tool has no negative-prompt field, include the constraints in the main instruction. Do not invent sampler, CFG or denoising settings.

### 可选：浅灰棚拍背景 · Optional gray studio backdrop

仅在用户要求该背景时追加：将背景替换为干净、均匀的浅中性灰无缝背景；使用前上方大面积柔光及轻柔补光，保留头发边缘和肩部的自然过渡。保持角色原服装、动作、道具、相机角度与完整比例。不要自动添加西装、白衬衫或嘴边痣。

Only when requested, append: Replace the background with a clean, even, light neutral-gray seamless backdrop. Use broad soft frontal-overhead light and gentle fill, with natural hair and shoulder edges. Preserve the target's clothing, pose, props, camera angle and full aspect. Do not import the reference subject's suit, white shirt or facial mark.

## 检查与有限调整 · Review and targeted correction

- 先看角色是否仍可辨认，再看真实质感；不要用另一张更“好看”的脸替代输入。只有已真人化的参考成图时，无法验证原角色还原程度。
- 100% 尺寸检查额头、眼周、鼻翼、嘴唇和发际线。微纹理应细而不脏；眼神光、唇部和鼻部反光应与同一柔光一致。
- 检查发色、服饰和道具是否完整、双眼和手部是否合理；不得把风格参考中的灰眼、黑发、中分、痣或黑白西装复制到无关角色。
- 若皮肤仍塑料化，只收窄调整到反光与微纹理；若脸型漂移，回到原角色图重做身份约束；若质感过粗，降低纹理强度并去掉新增瑕疵。避免无休止叠加“8K、超真实”等词。

Review recognizable character features before texture. Inspect skin, eyes, lips and hairline at full size; keep microtexture fine and reflections consistent. Correct the demonstrated issue rather than piling on quality keywords. A reference-only analysis cannot establish identity preservation or generation success.

## 配方与依据 · Recipe and provenance

[recipe.yaml](recipe.yaml) 提供可组合的默认质感配方；其中 4:5 仅为目录兼容约定，实际重绘保持输入比例。独立参考分析及状态见 [provenance.json](provenance.json)，私有 COS 引用及校验见 [reference.json](reference.json)。使用本 Skill 不依赖下载私有参考图。

本 Skill 根据用户提供成图的可见特征独立推导，无法恢复原作者的精确提示词、模型、镜头或参数。现已用用户另行上传的银发角色原图完成一次实际重绘，独立视觉复核及 9 个 COS 对象完整回读校验通过，样例为 `ready`；不是对最初男性风格参考图的生成归属声明。原创文字与配方采用 [MIT](LICENSE)，不扩展为参考图片许可。

The composable [recipe](recipe.yaml) describes the default texture transfer; its catalog aspect does not override native input framing. This is an independently reconstructed method, not recovery of the creator's exact prompt, model or camera settings. One real edit of a separately supplied silver-haired game character passed independent visual review and nine complete COS readback checks; its example is ready. This does not claim authorship of the initial male style reference. The private reference is unnecessary for ordinary use. MIT applies to instructions and recipe, not reference images.

## 已验证样例 · Reviewed example

[原图 · Source](https://photo-media.easymuzi.cn/media/samples/photo-game-character-clean-studio-portrait-960.webp) · [重绘 · Edited result](https://photo-media.easymuzi.cn/media/previews/game-character-clean-studio-portrait/v1/photo-game-character-clean-studio-portrait-0-960.webp) · [完整调用及审核记录 · Audit](examples/generation.json)

实际调用使用用户指定的 `a4c36deadf9cbbf024b9267318a7fe00b09cb754` 版本，输入仅为新上传的银发角色图；男性风格参考没有作为第二张图片传入。原生 2:3 母版保留完整构图，4:5 展示图仅补边。眼睛比例更接近真人、妆容减淡、肤色稍暖；细小饰纹是近似重建，不承诺逐像素身份还原。当前未在网站公开，展示链接在公开白名单更新前可能需要鉴权。

The recorded invocation uses the user-pinned Skill commit and only the newly supplied silver-haired target as an image input. Native 2:3 framing is preserved; 4:5 display derivatives use contain fitting. Eye proportions become more human, makeup lighter and complexion warmer; small ornaments are approximate. Ready describes this reviewed pair, not a guarantee for other inputs or the online model. Website publication has not occurred; display links may require authentication.
