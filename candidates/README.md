# 用户反馈风格候选 · Style feedback candidates

候选 Skill 可独立复制，供风格确认；不计入主目录的 180 款，也尚未在网站公开。网站项目可将对应内容保存为待审草稿。样例状态以各目录的 provenance.json 和实际生成记录为准，不能用内容已合入代替生成、审核或发布。

## 成图反推候选 · Reference-derived candidate

[柔光原生肤质真人化](game-character-clean-studio-portrait/SKILL.md) 从用户提供的已真人化成图提炼柔光、细腻皮肤、自然眼周和细发丝，附可直接使用的中英提示词。默认保留目标角色与场景，浅灰棚拍背景为可选；不复制参考人物的脸、黑发、西装或痣。参考图私有存于 COS，仓库仅留引用和回读校验。尚未用游戏原图执行重绘，样例状态为 `draft`，不计入下方六组已审核样例。

[Soft-Light Natural-Skin Character Portrait](game-character-clean-studio-portrait/SKILL.md) reconstructs visible photographic mechanisms from a supplied finished reference. It includes reusable Chinese and English prompts, preserves the target identity and offers a gray backdrop only on request. The private reference has a verified COS receipt. No validation edit has been generated, so this additional candidate remains draft.

## 用户截图角色摄影 · User-screenshot character photography

本轮六款按用户提供截图的顺序对应。每款只处理实际输入，保留角色身份、原服装、动作、道具连接、原始比例与画边内容；摄影机制和明确允许的背景变化各自独立。来源是用户截图，不是本仓库合成原图。

| 顺序 | 风格 | 摄影机制与背景边界 |
| --- | --- | --- |
| 1 | [CCD复古闪光写真](game-character-ccd-photo/SKILL.md) | 原背景直闪、轻微偏色与细噪点 |
| 2 | [原场景真人重制](game-character-natural-live-action/SKILL.md) | 原场景、原光线线索与真实材质 |
| 3 | [室内柔光生活写真](game-character-softlight-portrait/SKILL.md) | 安静室内、柔和窗光；服装和动作保留 |
| 4 | [现代手机随拍](game-character-phone-snapshot/SKILL.md) | 现代日常背景、手机曝光；签名道具保留 |
| 5 | [暗调侧光纪实](game-character-hardlight-portrait/SKILL.md) | 原场景单侧斜光、暗部细节与真实纹理 |
| 6 | [晴天清透人像](game-character-daylight-portrait/SKILL.md) | 自然日光；模糊暗背景可换柔和浅蓝天空 |

六款说明与配方独立撰写，社交帖仅列为研究参考，不复制许可不明的提示词或图片。原图和效果图只保存于 COS，仓库仅留元数据。完整验证使用 `node scripts/validate-user-character-candidates.mjs --require-ready`；离线检查只核对已有凭证，不宣称重新执行 COS GET。该候选校验独立于 180 款主目录构建，不改变其数量或全局生成账本。

六组样例均为 `ready`，共记录 6 张用户原图、7 次实际编辑调用、6 个精选效果和 55 个已回读校验的 COS 对象。晴天款首次效果因帽沿残留界面图标被拒，保留母版凭证；第二次只清理该图标，通过后精选。局部清理不声明再次执行完整配方，校验沿父图哈希追溯到首次完整执行。`ready` 不代表网站公开，本轮只提交文件与上传 COS。

Six independently written portable Skills use actual user screenshots and contain no invented source-generation calls. Their separate evidence distinguishes uploaded originals from generated edits. Native framing is retained; 4:5 catalogue previews use contain fitting. Research links do not license external wording or assets. Run the dedicated validator above for evidence completeness; it performs no new remote requests and does not modify the main catalog.

All six example pairs are ready, with six uploaded sources, seven actual edit calls, six selected outputs and 55 verified COS objects. The first daylight output was rejected for a small interface icon; its native receipt is retained. The selected cleanup has its own real prompt and parent-image hash, without claiming another full-recipe execution. The website remains unpublished.

## 早期反馈候选 · Earlier feedback candidates

| 风格 | 样例 | 方法来源 |
| --- | --- | --- |
| [复古美漫动作海报](retro-comic-action-poster/SKILL.md) | 小号手 → 浓黑剪影、朱红放射块、旧印刷网点 | 按用户提供的参考图分析后原创；参考图不随包分发 |
| [游戏角色真人化](game-character-live-action/SKILL.md) | 原创冒险者角色 → 真人电影感 | 旧样例历史保留；本轮六款按不同摄影机制另建候选 |
| [梦核空旷空间](dreamcore-liminal-space/SKILL.md) | 室内泳池 → 延伸到天空的泳池 | 原创，以熟悉场景和一处空间异常制造梦感 |
| [梦核超现实拼贴](dreamcore-surreal-collage/SKILL.md) | 红色电话 → 电话记忆拼贴 | 改编自 [dreamcore-collage-poster](https://github.com/AndrwewHan/dreamcore-collage-poster/tree/509a2d8392f995a45716d57bdcb60a57c2973dca)，保留 Leslie Vanwright 的 MIT 声明 |

复制所选完整文件夹即可使用；输入主体图时先观察，再将该图实际传给图像编辑工具。仅要求提示词时不自动生图。不要把风格参考图中的人物、武器或文字自动带到新主体中。

早期四款的样例原图均为 AI 合成。每款的 `examples/generation.json` 保存实际提示词、生成时间、视觉审核、执行配方哈希、COS 对象引用与完整回读校验；`ready` 仅代表这些证据齐全，不代表网站发布或用户最终审美认可。图片只保存于 COS，仓库不含图片副本或临时签名。正式地址可能尚未公开，发布前查看经鉴权的审阅页面。

喜茶方向复用已有茶饮海报 Skill：[茶饮涂鸦](https://github.com/yinxiaowai/heytea-doodle-poster/tree/8fd9ba23806fdd97b9e0a8e4c5871969d87f5122) 和 [商品涂鸦](https://github.com/Hchen1218/heytea-style/tree/d5125372adcc945c2314cfb649c50407379a18ab)。现有项目已有审核样图，无需重复新建同类配方；品牌名称用于指明视觉方向，不自动添加商标或品牌标志。

These earlier four portable review candidates remain separate from the 180-entry catalog and are not publicly available on the website. Their historical generated-source records stay unchanged. Copy a whole folder to use its bilingual workflow and recipe. `ready` describes evidence rather than publication or the user's final aesthetic approval. Images remain in COS only; canonical URLs may not yet be publicly allowlisted. Existing tea-poster skills are reused rather than duplicated.
