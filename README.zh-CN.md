# 照片风格模板集

[English](README.md)

150 个可独立复制的照片编辑 Skill，涵盖原创说明与经过许可核验的改编方法；每条明确记录原作者、固定来源、许可和修改。每个目录包含双语流程、结构化配方、保留约束与验收标准。当前 148 个示例为 ready，2 个为 draft；状态反映示例审核，不表示服务上线或结果保证。

## 安装与使用

1. 从下方目录选择风格，复制整个 skills 内对应风格文件夹到你的 Skill 目录（例如 ~/.codex/skills）。保留同目录的 SKILL.md、recipe.yaml、provenance.json 和 LICENSE；无需运行脚本、安装依赖或配置 API 密钥。
2. 在支持 Skill 与参考图编辑的助手中选用该风格，并提供你有权编辑的照片。其他助手也可以直接阅读 SKILL.md 与 recipe.yaml。
3. 先让助手核对原图，再执行风格转译，并依据目录内验收标准检查结果。支持何种生图模型由你的环境决定。

默认保护原图身份、主体数量、结构和画幅；具体风格允许的几何变化写在各 Skill 中。示例原图和效果图均为 AI 合成，不是真人实拍。不同模型、参数和图片不会保证得到相同结果。

## 状态与许可

只有原图与效果图均有真实生成及通过的视觉审核记录，且本地文件校验或 COS 回读凭证一致时才标 ready；新批次还必须绑定实际执行的配方哈希。缺图、缺审核或未通过则为 draft。[完整索引](index.json) 列出机器可读状态；离线校验不等同于重新请求远程图片。

原创贡献与仓库维护文件适用 [MIT](LICENSE)，版权声明为 2026 MuziGeek。改编方法保留原作者声明及 MIT、CC BY 4.0 或 Apache 2.0 等对应条款，见 [第三方声明](THIRD_PARTY_NOTICES.md)。生成示例不以 MIT 文本许可替代生成平台条款，也不授予人物、商标、第三方输入或参考作品的权利。详见 [限制与素材说明](docs/limitations.md) 和 [固定版本研究记录](docs/research-sources.json)；每个 Skill 的 provenance.json 区分原创与适配。研究资料是否采用，以各条目固定来源、明确许可及改编记录为准。

本次新增 80 个 Skill，其中 79 个示例为 ready、1 个为 draft；此前 70 个 Skill 的文件保持原样。新增内容包括 33 个 MIT 许可改编与 47 个独立编写的研究扩展。2026 年固定仓库快照用于近期来源核查，不表示每条提示词在快照日期首次发表，也不将这批内容声称为全新发表的第三方提示词。失败或被拒绝的生成尝试保留审核记录；新图片只通过 COS 外链提供。

## 东方绘画与版画

| 风格 | 方法 | 示例状态 |
| --- | --- | --- |
| [工笔重彩](skills/gongbi-mineral-color/SKILL.md) | 用细密闭合的墨线与层层矿物色重绘主体，叶脉、羽毛和花瓣清楚，色面厚实而安静，保留照片的完整构图。 | ready |
| [青绿山水](skills/blue-green-landscape/SKILL.md) | 沿原照山脊和水路组织远近层次，以石青石绿般的矿彩覆盖山面，保留岩石结构与开阔水域，形成完整青绿山水。 | ready |
| [没骨花彩](skills/boneless-pigment-wash/SKILL.md) | 不先勾轮廓，以相接相融的湿润色面直接塑造花瓣与叶片，保留花朵的开合和前后关系，画出柔软但明确的体积。 | ready |
| [白描细线](skills/baimiao-fine-line/SKILL.md) | 仅用细而有起伏的墨线交代轮廓、折面和内部结构，画面不铺色、不做明暗排线，让原有物形与疏密关系保持清晰。 | ready |
| [披麻皴墨景](skills/hemp-fiber-ink-landscape/SKILL.md) | 用顺着山势舒展的长短皴线塑造土石体积，再以淡墨分出远近，让照片中的缓坡、树丛与水岸成为有笔触骨架的墨景。 | ready |
| [界画建筑](skills/ruled-line-architecture/SKILL.md) | 以整齐而有轻微笔性的界线重绘建筑，保留梁柱、檐口与窗格的真实关系，用薄淡设色区分材料和远近。 | ready |
| [矿彩壁画](skills/mineral-fresco-scene/SKILL.md) | 把照片重绘成铺在墙面上的哑光矿彩，轮廓沉稳、色块层叠，少量风化露出底层，仍保留原场景和人物姿态。 | ready |
| [金地屏绘](skills/gold-ground-screen/SKILL.md) | 保留花木或动物的姿态，把背景压成细腻金箔地，以少量沉着设色和轻微屏面折线呈现装饰绘画，主体跨折面连续。 | ready |
| [水印木版](skills/water-based-woodblock/SKILL.md) | 将照片拆成有刻线骨架的平面色区，以水性颜料的柔和渐晕、木纹和轻微套版痕迹重绘，保留完整景物与前后层次。 | ready |
| [套色年画](skills/folk-color-woodcut/SKILL.md) | 用厚实主版线和明快套色重绘日常场景，人物动作与物件保持原样，以紧凑轮廓和手工刷色形成朴实热烈的版画。 | ready |
| [墨拓白形](skills/ink-rubbing-silhouette/SKILL.md) | 把器物表面和浅浮雕纹理转换为黑墨中的白色拓痕，以压印的虚实保留细节和轮廓，呈现纸张贴附表面的直接触感。 | ready |
| [蜡染蓝白](skills/indigo-wax-resist/SKILL.md) | 把原图形体转换成蓝染布上的白色防染纹，细碎蜡裂穿过蓝色区域，边缘有柔和渗染，保留主体轮廓与方向。 | ready |

## 材质与抽象转译

| 风格 | 方法 | 示例状态 |
| --- | --- | --- |
| [掐丝珐琅](skills/cloisonne-enamel-object/SKILL.md) | 沿物体原有分区铺设细金属丝与饱满珐琅釉色，保留轮廓、开口和接触关系，呈现有重量的手工器物质感。 | ready |
| [通透琉璃](skills/clear-cast-glass/SKILL.md) | 把主体实体转换为有厚度的透明浇铸玻璃，通过折射、边缘积色和柔和焦散表达体积，完整保留原有形状与空间关系。 | ready |
| [多视角折面](skills/cubist-multiple-planes/SKILL.md) | 将主体拆解为少量互相咬合的色面，在局部叠合正侧视角与转折面，保留核心识别特征、主体数量和主要空间位置。 | draft |
| [等高线图](skills/contour-band-abstraction/SKILL.md) | 把明暗与体积转折重绘为连续等值带，线条沿主体表面流动，利用疏密与色阶建立深度，保留外轮廓和主要结构。 | ready |
| [青瓷开片](skills/celadon-crackle-object/SKILL.md) | 以半透明青瓷釉覆盖主体外表，通过釉层积色与细密开片呈现温润陶质，保留原有形状、部件和承托关系。 | ready |
| [玉雕温润](skills/translucent-jade-carving/SKILL.md) | 将主体外表转译为细腻温润的玉石，通过薄处透光、低对比矿物云纹与柔和抛光表现厚度，保留原物形状。 | ready |
| [漆器流光](skills/polished-lacquer-object/SKILL.md) | 让主体覆上深色多层漆面，以柔和长条反光和边缘透色突出曲面，表现细致打磨后的温厚质感，不增添纹饰。 | ready |
| [锤纹铜器](skills/hammered-copper-form/SKILL.md) | 将主体表面转换为细小锤击凹面的铜质，利用暖色金属反射与局部氧化层增强手工感，保留原物的完整结构。 | ready |
| [拉丝铝形](skills/brushed-aluminum-form/SKILL.md) | 以方向一致的细拉丝和低饱和银灰反射重塑主体表面，突出各面的朝向与转折，保持轮廓、间隙和部件连接清晰。 | ready |
| [树脂层封](skills/layered-resin-cast/SKILL.md) | 将主体转化为半透明树脂体，以极薄色层、柔和内折射和清晰边缘表现封存感，保持原形，不封入额外花草或摆件。 | ready |
| [水磨石形](skills/terrazzo-cast-object/SKILL.md) | 用细颗粒骨料和温和水泥底色覆盖主体实体，借由随机碎石分布与哑光磨面表现重量，保留边界、孔洞和结构。 | ready |
| [金属线编](skills/woven-wire-sculpture/SKILL.md) | 以密度受控的细金属线编织主体外壳，让线束顺应体积与结构分区，保留轮廓和主要细节，形成轻透而清楚的雕塑感。 | ready |
| [视错网场](skills/optical-grid-distortion/SKILL.md) | 以连续网格的弯曲、压缩与疏密重绘画面，让网格响应原有体积与明暗，保持主体轮廓和位置，形成克制的视错节奏。 | ready |
| [流场重绘](skills/vector-flow-repainting/SKILL.md) | 让短笔触沿画面体积与运动方向汇成流场，借由线束转向和长短变化表现节奏，保留主体数量、轮廓与主要动作。 | ready |
| [液态大理纹](skills/liquid-marble-image/SKILL.md) | 把主体内部色块转化为流动交织的细密色纹，在边界内进行有限拉伸与回旋，保留主体轮廓、数量和核心识别色。 | ready |
| [光谱衍射](skills/spectral-diffraction-form/SKILL.md) | 沿主体边缘与高光区域展开受控光谱色带，以细小干涉纹和颜色分离表达光学变化，保留单一主体和清晰轮廓。 | ready |
| [极坐标折转](skills/polar-coordinate-remap/SKILL.md) | 以画面视觉中心为轴，让背景和外围结构产生有限环向折转，保留主体核心、数量及邻接关系，形成可辨识的放射空间。 | ready |
| [摩尔纹叠场](skills/moire-interference-image/SKILL.md) | 以两组轻微错角的细线场重绘明暗，在原有形体内形成缓慢起伏的干涉带，保留主体姿态、边界和空间分离。 | ready |

## 摄影工艺与光影

| 风格 | 方法 | 示例状态 |
| --- | --- | --- |
| [银盐黑白](skills/silver-gelatin-monochrome/SKILL.md) | 用银盐相纸般的连续灰阶重塑照片，保留柔亮高光与有细节的深黑，让人物神态、织物和空间光线成为画面主角。 | ready |
| [红外异色](skills/infrared-false-color/SKILL.md) | 将近红外摄影的异色关系转译为柔粉植被、深青天空和清冷水面，改变光谱观感，同时保留真实地形、建筑及人物结构。 | ready |
| [蓝晒影像](skills/cyanotype-contact-print/SKILL.md) | 以负片蓝晒影像为灵感，把完整照片转为普鲁士蓝阴影、淡蓝中间调与纸白高光，保留主体结构和细腻纸纹。 | ready |
| [湿版肖像](skills/wet-plate-collodion/SKILL.md) | 以湿版摄影的温灰银质、深色背景和缓慢曝光感描绘人物，保留真实面貌，让微弱乳剂流痕只在空白处出现。 | ready |
| [局部反转](skills/solarized-tonal-reversal/SKILL.md) | 借暗房再曝光形成的局部影调反转，在连续灰阶中显出细窄边缘晕线，让日常材质呈现陌生而仍可信的摄影质感。 | ready |
| [针孔柔影](skills/pinhole-soft-image/SKILL.md) | 用针孔成像般均匀而克制的柔化弱化锐利边缘，让水面和空气带有缓慢曝光感，同时保持完整空间关系与主体辨识度。 | ready |
| [低调明暗](skills/chiaroscuro-light-study/SKILL.md) | 沿原有光向收束亮部，让主体从深而有层次的阴影中显现，以克制的明暗过渡强调体积、肌理和空间距离。 | ready |
| [高调雾光](skills/high-key-mist-light/SKILL.md) | 以散射光抬起照片的暗部和远景，形成明亮柔和的高调空气感，保留自然肤色、衣物层次和清楚的主体边界。 | ready |
| [水光焦散](skills/water-caustic-light/SKILL.md) | 让折射聚焦形成的细碎水光落在现有表面，明暗网纹随曲面轻轻转折，保留食物与器物的自然色泽和真实形体。 | ready |
| [频闪轨迹](skills/stroboscopic-motion-trace/SKILL.md) | 保留一个清楚的主体，在确有运动方向的局部叠入少量递减曝光残影，像频闪记录动作节奏，不复制成多人或新增肢体。 | ready |

## 精选照片重绘

| 风格 | 方法 | 示例状态 |
| --- | --- | --- |
| [彩玻璃拼窗](skills/stained-glass-panel/SKILL.md) | 把照片重构成由大片通透玻璃和细铅条拼合的彩玻璃图像，保留主体位置与轮廓，让透射光显出温柔的材质层次。 | ready |
| [霓虹轮廓光绘](skills/neon-contour-art/SKILL.md) | 把夜景或器物提炼成稀疏的青色发光轮廓，保留关键结构，在深色空白中控制光晕，让主次线条清晰可读。 | ready |
| [数字线框地景](skills/digital-wireframe-landscape/SKILL.md) | 将照片里的地形和建筑重构成深蓝背景上的青色三角网格，依靠疏密与深浅呈现前后层次，保留可辨的地标关系。 | ready |
| [文字构成肖像](skills/typographic-photo-portrait/SKILL.md) | 用同一组可读的小字沿明暗和形体方向排布，重构照片人物的面部轮廓，让文字本身成为肖像，而不是覆盖在照片上的说明。 | ready |
| [糖果雕塑](skills/candy-sculpture-recast/SKILL.md) | 把照片主体转译为半透明硬糖雕塑，保留熟悉的外轮廓和配色，以糖体折射、光泽和轻薄包装呈现可爱的材质反差。 | ready |
| [绣绷丝线图案](skills/hoop-thread-embroidery/SKILL.md) | 把照片构图绣成象牙织布上的平面细丝图案，以缎面针和方向性短针表现花瓣、叶脉与明暗，装进一只木绣绷，避免立体针织玩偶化。 | ready |
| [软胶人物钥匙串](skills/silicone-chibi-keychain/SKILL.md) | 把人物照片做成圆润可爱的软胶钥匙串，保留发型、眼镜和服装等识别点，用简化比例与真实金属挂环表现随身小物。 | ready |
| [胶囊微型世界](skills/capsule-memory-world/SKILL.md) | 把照片里可辨的地标和空间关系收进一枚半透明胶囊，以清晰外壳和微缩场景形成记忆容器，去除品牌与无关文字。 | ready |
| [充气软雕塑](skills/inflatable-puffy-object/SKILL.md) | 把照片里的清晰主体做成饱满充气雕塑，用鼓起体积、克制缝线和轻微褶皱产生柔软感，保留一眼可认的轮廓。 | ready |
| [工业蓝图重构](skills/technical-blueprint-redraw/SKILL.md) | 把照片器物转换成深蓝底上的清晰工业线图，用实线与虚线区分可见结构和观察线索，形成无虚构尺寸的技术视觉概念。 | ready |
| [肖像双重曝光](skills/portrait-double-exposure/SKILL.md) | 把照片人物的清晰侧影与原创山林景观叠合，让风景顺着人物轮廓与明暗展开，在保留身份识别的同时产生安静的叙事层次。 | ready |
| [发光结构图](skills/glowing-structure-study/SKILL.md) | 把照片主体的可见结构描成深底上的蓝色发光线图，用一处克制的红光强调关键部位，形成清晰而不虚构内部组织的观察图。 | ready |
| [火焰形体重塑](skills/flame-silhouette-recast/SKILL.md) | 让照片主体的轮廓由橙金色火焰构成，用流动焰舌和深色负空间表达形体，保留关键结构，避免把原场景表现为真实失火。 | ready |
| [水晶球记忆场景](skills/snowglobe-memory-scene/SKILL.md) | 把照片人物与环境做成同一只透明水晶球中的微缩纪念场景，保留人数、服装和相互关系，以清晰球体和底座营造完整小世界。 | ready |
| [奶油雪糕雕塑](skills/cream-popsicle-sculpture/SKILL.md) | 把照片里的单个主体变成有奶油质地的雪糕造型，保留颜色与外形识别点，以真实木棒、细小融化边缘和柔光呈现甜品雕塑。 | ready |
| [自然职业头像](skills/natural-professional-headshot/SKILL.md) | 把日常人像整理成自然可信的职业头像，保留年龄、脸型和皮肤纹理，以简洁职业服装、柔和布光和干净背景提升清晰度。 | ready |
| [九宫格发型试览](skills/nine-hairstyle-study/SKILL.md) | 在一张九宫格图片中比较同一人的九种发型，只改头发形状，统一脸型、服装、光照和裁切，让差别清晰可比较。 | ready |
| [描述式换装](skills/wardrobe-text-tryon/SKILL.md) | 按文字服装方案为照片人物换装，保留脸型、身材、姿态和原场景，让衣料垂坠、袖口与鞋履接触关系自然可信。 | ready |
| [旧照忠实修复](skills/faithful-old-photo-restoration/SKILL.md) | 清理旧照片中的划痕、灰尘与扫描污渍，恢复褪色层次并保留原有颗粒、人物年龄和历史气息，不凭空重塑缺失的面容。 | ready |
| [曲面短词印字](skills/photo-surface-lettering/SKILL.md) | 把用户给定的短词自然印到照片物体的指定表面，让字形随弧度、透视和光照贴合，同时保留物体材质、轮廓与背景。 | ready |
| [同场景重新布光](skills/coherent-scene-relighting/SKILL.md) | 在保留场景构图和物体几何的前提下改变布光，统一高光、投影、反射和色温，让夜景或室内呈现连贯可信的新光线。 | ready |
| [同空间室内重设计](skills/same-room-interior-redesign/SKILL.md) | 为照片中的同一间房重新选择家具、织物和照明方案，保持门窗、墙体和机位不变，以真实尺度呈现可实施的居住空间。 | ready |
| [室内墙漆试色](skills/interior-wall-color-preview/SKILL.md) | 只给照片中选定墙面试换乳胶漆颜色，保留墙体纹理、原有阴影与家具，在真实光照下预览颜色，而不是整图覆盖滤镜。 | ready |
| [同庭院景观改造](skills/same-yard-landscape-design/SKILL.md) | 在照片原有庭院边界内规划种植、路径与座椅，保留建筑和地形，以合理的植物尺度、间距和光影呈现同一场地的新方案。 | ready |
| [纯白商品目录照](skills/clean-white-product-catalog/SKILL.md) | 把商品快照整理成色彩准确的纯白目录照，清理背景与杂物，保留真实产品形状、配件和细节，以柔光和接触阴影表现完整商品。 | ready |
| [渐变商品主视觉](skills/gradient-product-hero/SKILL.md) | 保留商品本体设计，将其放上简洁展台并配置克制渐变背景，以轮廓光、受控反射和留白形成清晰的产品发布主视觉。 | ready |
| [生活场景商品照](skills/lifestyle-product-placement/SKILL.md) | 把真实商品自然放入简洁生活场景，保持形状、配色和材质，利用窗光、接触关系与少量环境物件表达可信的日常使用情境。 | ready |
| [护肤植物静物](skills/skincare-botanical-still-life/SKILL.md) | 将护肤品参考图布置成克制的植物静物，保留瓶身和滴管结构，以天然石面、少量叶片和柔光突出玻璃与液体的真实质地。 | ready |
| [饮料飞溅广告](skills/beverage-splash-campaign/SKILL.md) | 保留饮品容器与颜色，用凝固瞬间的液体弧线和少量同类果材制造活力，在一致光照与重力线索下呈现清爽的饮料广告图。 | ready |
| [首饰微距广告](skills/jewelry-macro-campaign/SKILL.md) | 在保持首饰本体设计的前提下加强微距细节，以干净背景和精确高光呈现金属、宝石与镶嵌结构，避免增添钻石或改变成色。 | ready |

## 近期照片重绘方法

| 风格 | 方法 | 示例状态 |
| --- | --- | --- |
| [织格像素切片](skills/woven-pixel-still-life/SKILL.md) | 将照片主体转为织格像素切片，方形错位与细密织格共同作用，主要外轮廓保持连续。保留可辨身份与主要空间关系。 | ready |
| [留白消隐肖像](skills/contour-erasure-portrait/SKILL.md) | 将照片主体转为留白消隐肖像，照片片段逐渐消隐为白纸，细轮廓连接可辨面部。保留可辨身份与主要空间关系。 | ready |
| [地貌浮雕肖像](skills/portrait-landform-relief/SKILL.md) | 将照片主体转为地貌浮雕肖像，面部成为连续地貌浮雕，不能用双重曝光照片叠加替代。保留可辨身份与主要空间关系。 | ready |
| [裁片织物动物](skills/tailored-textile-animal/SKILL.md) | 将照片主体转为裁片织物动物，可见裁片接缝与呢料纤维，区别于针织和毛毡滤镜。保留可辨身份与主要空间关系。 | ready |
| [霜雪傍晚转换](skills/frosted-seasonal-evening/SKILL.md) | 将照片主体转为霜雪傍晚转换，积雪只落在合理承接面，建筑和树木位置不变。保留可辨身份与主要空间关系。 | ready |
| [透视棋格舞台](skills/perspective-checkerboard-object/SKILL.md) | 将照片主体转为透视棋格舞台，产品几何不变，棋格透视与接触影共同建立舞台深度。保留可辨身份与主要空间关系。 | ready |
| [网格记忆肖像](skills/cell-grid-portrait-memory/SKILL.md) | 将照片主体转为网格记忆肖像，白色单元格、源图局部放大与空格形成记忆缺口。保留可辨身份与主要空间关系。 | ready |
| [鱼眼工坊墨绘](skills/fisheye-workshop-ink/SKILL.md) | 将照片主体转为鱼眼工坊墨绘，鱼眼曲率贯穿房间，墨块与平涂共同形成深度。保留可辨身份与主要空间关系。 | ready |
| [炭笔绒面肖像](skills/charcoal-velour-portrait/SKILL.md) | 将照片主体转为炭笔绒面肖像，压缩炭块与擦亮高光共同塑造面部，不画成水墨。保留可辨身份与主要空间关系。 | ready |
| [哑光色块合影](skills/matte-gouache-ensemble/SKILL.md) | 将照片主体转为哑光色块合影，不透明水粉块面形成统一合影，明暗边缘清楚。保留可辨身份与主要空间关系。 | ready |
| [毛刺干刻风景](skills/drypoint-landscape-etching/SKILL.md) | 将照片主体转为毛刺干刻风景，毛刺刻线与浅版色区别于木刻大块面。保留可辨身份与主要空间关系。 | ready |
| [面条线束食景](skills/pasta-strand-food-mosaic/SKILL.md) | 将照片主体转为面条线束食景，线束按菜品轮廓排列，面条截面与间隙清晰。保留可辨身份与主要空间关系。 | ready |
| [雨窗夜色折影](skills/rainglass-night-refraction/SKILL.md) | 将照片主体转为雨窗夜色折影，雨滴内部真实折射，背景街道仍可追踪。保留可辨身份与主要空间关系。 | ready |
| [产品剖壳研究](skills/cutaway-product-study/SKILL.md) | 将照片主体转为产品剖壳研究，只展示可证实结构，不补造内部机械和参数。保留可辨身份与主要空间关系。 | ready |
| [叶脉骨架浮雕](skills/leaf-skeleton-relief/SKILL.md) | 将照片主体转为叶脉骨架浮雕，叶脉分叉贴合主体轮廓，不能变成外围花环。保留可辨身份与主要空间关系。 | ready |
| [折报纸服装肖像](skills/newsprint-garment-sculpture/SKILL.md) | 将照片主体转为折报纸服装肖像，纸层厚度与折痕明确，脸和服装剪裁保持。保留可辨身份与主要空间关系。 | ready |
| [粗线马克笔合影](skills/naive-marker-ensemble/SKILL.md) | 将照片主体转为粗线马克笔合影，线重自然波动，每个人仍有独立衣着和发型。保留可辨身份与主要空间关系。 | ready |
| [木皮镶嵌风景](skills/marquetry-wood-landscape/SKILL.md) | 将照片主体转为木皮镶嵌风景，木纹方向随山坡和水流变化，接缝齐平。保留可辨身份与主要空间关系。 | ready |
| [粉笔食物静物](skills/chalk-pastel-food-study/SKILL.md) | 将照片主体转为粉笔食物静物，干粉触感与纸齿可见，不出现油彩堆积。保留可辨身份与主要空间关系。 | ready |
| [车流静止主体](skills/selective-train-motion/SKILL.md) | 将照片主体转为车流静止主体，背景横向运动，主体边缘和脸部保持清晰。保留可辨身份与主要空间关系。 | ready |
| [织物压痕产品](skills/fabric-pressure-product/SKILL.md) | 将照片主体转为织物压痕产品，织物受压方向与产品重量一致，接触边缘可信。保留可辨身份与主要空间关系。 | ready |
| [软木颗粒重塑](skills/reductive-cork-sculpture/SKILL.md) | 将照片主体转为软木颗粒重塑，软木细胞孔隙与磨圆切口清楚，开孔不填死。保留可辨身份与主要空间关系。 | ready |
| [三色硬切肖像](skills/red-light-profile-cut/SKILL.md) | 将照片主体转为三色硬切肖像，三色硬边面部结构清楚，不靠滤镜保留照片。保留可辨身份与主要空间关系。 | ready |
| [错层照片带合影](skills/staggered-photo-ribbons/SKILL.md) | 将照片主体转为错层照片带合影，宽幅照片带有限错位，人物连接仍可辨。保留可辨身份与主要空间关系。 | ready |
| [美柔汀暮色风景](skills/mezzotint-twilight-scene/SKILL.md) | 将照片主体转为美柔汀暮色风景，岩点颗粒与刮亮层次构成暮色，而非黑白照片。保留可辨身份与主要空间关系。 | ready |
| [食物镂纸纹样](skills/pierced-paper-food-lace/SKILL.md) | 将照片主体转为食物镂纸纹样，镂空通过连续纸桥相连，菜品数量和摆位保持。保留可辨身份与主要空间关系。 | draft |
| [窗格夜景切片](skills/window-grid-night-slice/SKILL.md) | 将照片主体转为窗格夜景切片，阶梯边界内外图像连续，色层局部转换。保留可辨身份与主要空间关系。 | ready |
| [结霜产品边界](skills/frosted-product-edge/SKILL.md) | 将照片主体转为结霜产品边界，冰晶只沿合理边缘生长，主要外形清楚。保留可辨身份与主要空间关系。 | ready |
| [纸浆颗粒塑形](skills/sculpted-paper-pulp-object/SKILL.md) | 将照片主体转为纸浆颗粒塑形，纸浆纤维颗粒可辨，区别于分层纸艺。保留可辨身份与主要空间关系。 | ready |
| [近距直闪肖像](skills/selective-hard-flash-face/SKILL.md) | 将照片主体转为近距直闪肖像，直闪衰减可见，皮肤纹理和原有配饰保持。保留可辨身份与主要空间关系。 | ready |
| [缝塑棉布合影](skills/stitched-muslin-group-relief/SKILL.md) | 将照片主体转为缝塑棉布合影，填棉体积与抽褶接缝形成浅浮雕，区别于平面布贴。保留可辨身份与主要空间关系。 | ready |
| [刮彩地貌画板](skills/sgraffito-landform-panel/SKILL.md) | 将照片主体转为刮彩地貌画板，刮痕露出下层底色，保留大块完整色面。保留可辨身份与主要空间关系。 | ready |
| [蜂蜡封彩食景](skills/beeswax-food-encaustic/SKILL.md) | 将照片主体转为蜂蜡封彩食景，薄蜡层云雾与融合边缘清楚，不变成糖果雕塑。保留可辨身份与主要空间关系。 | ready |
| [夜色透镜色散](skills/chromatic-night-dispersal/SKILL.md) | 将照片主体转为夜色透镜色散，单一清晰主体配受控光学拖影，不复制场景。保留可辨身份与主要空间关系。 | ready |
| [透明产品抠像](skills/transparent-product-extraction/SKILL.md) | 将照片主体转为透明产品抠像，背景真实透明，细边无白边且产品几何不变。保留可辨身份与主要空间关系。 | ready |
| [石粉浇铸物件](skills/stone-dust-object-cast/SKILL.md) | 将照片主体转为石粉浇铸物件，细矿物孔隙区别于水磨石碎料，必要空腔保留。保留可辨身份与主要空间关系。 | ready |
| [机械外骨骼肖像](skills/mechanical-wearable-portrait/SKILL.md) | 将照片主体转为机械外骨骼肖像，机械结构仅作为外置服装，身体完整且不医疗化。保留可辨身份与主要空间关系。 | ready |
| [几何切块合影](skills/color-plane-collage-group/SKILL.md) | 将照片主体转为几何切块合影，人物脸部完整，纸块与少量手绘线形成节奏。保留可辨身份与主要空间关系。 | ready |
| [递进色板建筑](skills/architectural-color-recession/SKILL.md) | 将照片主体转为递进色板建筑，色板沿原建筑透视递进，门窗开口不移位。保留可辨身份与主要空间关系。 | ready |
| [花瓣压片食景](skills/compressed-petal-food/SKILL.md) | 将照片主体转为花瓣压片食景，压花片沿食物轮廓铺排，叶脉和薄边可见。保留可辨身份与主要空间关系。 | ready |
| [复印拼缝夜景](skills/photocopy-night-splice/SKILL.md) | 将照片主体转为复印拼缝夜景，圆网点与方抖动并存，拼缝直接且数量受控。保留可辨身份与主要空间关系。 | ready |
| [褶布产品台景](skills/pleated-fabric-product-stage/SKILL.md) | 将照片主体转为褶布产品台景，低褶布面承托产品，织纹与景深各有层次。保留可辨身份与主要空间关系。 | ready |
| [手刻皂块物件](skills/carved-soap-object/SKILL.md) | 将照片主体转为手刻皂块物件，刀削面与薄边透光可见，不增添泡沫和花饰。保留可辨身份与主要空间关系。 | ready |
| [布片拼缝肖像](skills/cloth-scrap-portrait-applique/SKILL.md) | 将照片主体转为布片拼缝肖像，织物裁片沿面部结构拼接，针脚只沿边缘。保留可辨身份与主要空间关系。 | ready |
| [盲压合影浮雕](skills/blind-embossed-group-relief/SKILL.md) | 将照片主体转为盲压合影浮雕，无墨压凸依靠掠射光显形，人物轮廓连续。保留可辨身份与主要空间关系。 | ready |
| [地衣地景绒毯](skills/lichen-landscape-tapestry/SKILL.md) | 将照片主体转为地衣地景绒毯，短绒方向与地形一致，不添加微缩建筑。保留可辨身份与主要空间关系。 | ready |
| [陶浆浅浮雕餐盘](skills/ceramic-slip-food-plate/SKILL.md) | 将照片主体转为陶浆浅浮雕餐盘，陶浆拖痕与浅浮雕清楚，区别于青瓷开片。保留可辨身份与主要空间关系。 | ready |
| [十字星芒夜景](skills/cross-screen-night-diffraction/SKILL.md) | 将照片主体转为十字星芒夜景，四向短星芒只出现在真实亮点，暗部不泛光。保留可辨身份与主要空间关系。 | ready |
| [干涉薄膜包覆](skills/interference-wrapped-product/SKILL.md) | 将照片主体转为干涉薄膜包覆，薄膜沿实体表面贴合，掠射角显色而非通体彩玻璃。保留可辨身份与主要空间关系。 | ready |
| [皮革缝制物件](skills/stitched-leather-object/SKILL.md) | 将照片主体转为皮革缝制物件，皮革颗粒、封边和鞍针形成可辨材质。保留可辨身份与主要空间关系。 | ready |
| [粉末轮廓肖像](skills/contour-powder-portrait/SKILL.md) | 将照片主体转为粉末轮廓肖像，脸部锚点清楚，周围颜料颗粒贴合原明暗。保留可辨身份与主要空间关系。 | ready |
| [投影纸片合影](skills/cut-paper-shadow-ensemble/SKILL.md) | 将照片主体转为投影纸片合影，纸片层差和同向投影形成浅空间，不改人物比例。保留可辨身份与主要空间关系。 | ready |
| [刮黑板风景](skills/scratchboard-landscape/SKILL.md) | 将照片主体转为刮黑板风景，细白刮线露出底层，大片黑涂层保持完整。保留可辨身份与主要空间关系。 | ready |
| [衍纸食物螺卷](skills/quilled-strip-food/SKILL.md) | 将照片主体转为衍纸食物螺卷，立起纸条与松卷构成菜品，盘沿和数量可辨。保留可辨身份与主要空间关系。 | ready |
| [黑色电影积水夜景](skills/noir-rain-puddles/SKILL.md) | 将照片主体转为黑色电影积水夜景，水洼倒影与真实光源对齐，不凭空增加霓虹。保留可辨身份与主要空间关系。 | ready |
| [细节放大产品档案](skills/archival-measurement-object/SKILL.md) | 将照片主体转为细节放大产品档案，主图与可证实细节并列，不标造假尺寸和年代。保留可辨身份与主要空间关系。 | ready |
| [铜线笼架物件](skills/bronze-wireframe-cage/SKILL.md) | 将照片主体转为铜线笼架物件，稀疏杆件沿真实结构连接，区别于金属编织。保留可辨身份与主要空间关系。 | ready |
| [银尖细痕肖像](skills/soft-silverpoint-portrait/SKILL.md) | 将照片主体转为银尖细痕肖像，银尖细线层层叠加，保留小块未落笔高光。保留可辨身份与主要空间关系。 | ready |
| [朱砂民艺合影](skills/vermillion-folk-group/SKILL.md) | 将照片主体转为朱砂民艺合影，衣着块面内有节制刻纹，各人面部不雷同。保留可辨身份与主要空间关系。 | ready |
| [伪立体色边地景](skills/anaglyph-depth-landscape/SKILL.md) | 将照片主体转为伪立体色边地景，红青色边依大致景深分离，不冒充实测双目影像。保留可辨身份与主要空间关系。 | ready |
| [金属箔压印食景](skills/foil-stamped-food-graphic/SKILL.md) | 将照片主体转为金属箔压印食景，薄箔压痕与边缘碎屑可辨，食物不是立体糖玻。保留可辨身份与主要空间关系。 | ready |
| [狭缝扫描夜景](skills/slit-scan-night-plate/SKILL.md) | 将照片主体转为狭缝扫描夜景，局部背景列被扫描拉伸，主体和带外地平线保持。保留可辨身份与主要空间关系。 | ready |
| [褶皱金属箔产品](skills/creased-foil-product/SKILL.md) | 将照片主体转为褶皱金属箔产品，薄箔折痕与张力皱纹可辨，不变拉丝铝。保留可辨身份与主要空间关系。 | ready |
| [绳圈盘筑物件](skills/coiled-rope-object/SKILL.md) | 将照片主体转为绳圈盘筑物件，绳捻与盘圈接点连续，提手和开口保留。保留可辨身份与主要空间关系。 | ready |
| [石版蜡笔肖像](skills/lithographic-crayon-portrait/SKILL.md) | 将照片主体转为石版蜡笔肖像，油脂蜡笔颗粒与版洗网裂共同塑形，不是二值复印。保留可辨身份与主要空间关系。 | ready |
| [单线动作合影](skills/linear-gesture-group/SKILL.md) | 将照片主体转为单线动作合影，连续线抓住各自动作，肢体连接和相对身高保持。保留可辨身份与主要空间关系。 | ready |
| [压铝地景浅浮雕](skills/embossed-aluminum-landscape/SKILL.md) | 将照片主体转为压铝地景浅浮雕，一张薄铝片呈压凸地景，细小拉伸皱纹可见。保留可辨身份与主要空间关系。 | ready |
| [黑卡食物剪贴](skills/black-card-food-cutout/SKILL.md) | 将照片主体转为黑卡食物剪贴，完整菜品剪影置于黑卡，边缘投影轻而真实。保留可辨身份与主要空间关系。 | ready |
| [长曝雨丝夜景](skills/rain-streak-long-exposure/SKILL.md) | 将照片主体转为长曝雨丝夜景，雨丝随深度与光源显隐，不能画成窗面水滴。保留可辨身份与主要空间关系。 | ready |
| [折页包裹产品](skills/folded-product-wrapper/SKILL.md) | 将照片主体转为折页包裹产品，单张折纸承托产品，不添加伪包装和报纸文字。保留可辨身份与主要空间关系。 | ready |
| [粉岩刻面物件](skills/faceted-chalk-object/SKILL.md) | 将照片主体转为粉岩刻面物件，手切粉岩面和细粉屑区别于陶瓷与石纹。保留可辨身份与主要空间关系。 | ready |
| [花瓣面片肖像](skills/petal-paneled-portrait/SKILL.md) | 将照片主体转为花瓣面片肖像，瓣状片依原有头发和衣着体积排布，不加花冠。保留可辨身份与主要空间关系。 | ready |
| [套印铅痕合影](skills/portrait-scribble-registration/SKILL.md) | 将照片主体转为套印铅痕合影，少量铅痕紧邻真实轮廓，人物照片不被重建。保留可辨身份与主要空间关系。 | ready |
| [芦苇席编地景](skills/woven-reed-landscape/SKILL.md) | 将照片主体转为芦苇席编地景，经纬交错和芦苇节结可辨，非针织印花。保留可辨身份与主要空间关系。 | ready |
| [扫描成像食物](skills/scanographic-food-study/SKILL.md) | 将照片主体转为扫描成像食物，近面细节均匀清楚，黑底边缘渐暗且无棚拍投影。保留可辨身份与主要空间关系。 | ready |
| [夜色多边光斑](skills/night-bokeh-aperture/SKILL.md) | 将照片主体转为夜色多边光斑，多边光斑随景深变化，源灯数量不凭空增加。保留可辨身份与主要空间关系。 | ready |
| [陶胎模压产品](skills/ceramic-cast-product/SKILL.md) | 将照片主体转为陶胎模压产品，模缝与薄边透光提示陶胎，外形结构保持。保留可辨身份与主要空间关系。 | ready |
| [蘸笔器物写生](skills/reed-pen-object-study/SKILL.md) | 将照片主体转为蘸笔器物写生，扁笔宽窄交替，转折积墨区别于白描细线。保留可辨身份与主要空间关系。 | ready |
| [凝胶单刷食景](skills/gel-plate-food-monoprint/SKILL.md) | 将照片主体转为凝胶单刷食景，滚筒痕、擦亮处与转印虚边共同构成单刷版画。保留可辨身份与主要空间关系。 | ready |
| [荧光扫描夜景](skills/phosphor-scanline-night/SKILL.md) | 将照片主体转为荧光扫描夜景，荧光三色点与水平扫描线可见，不添加显示器外壳。保留可辨身份与主要空间关系。 | ready |

## 维护

data 下的 5 个 JSON 是内容真源。维护者安装固定版本依赖后，可运行 npm run build，从已有示例记录重建文档与索引。此前 70 个 Skill 保持冻结；新增 recent-20261110.json 批次只接受 COS 外链及真实上传回读凭证，不将原图、重绘图或缩略图写入仓库。先将图上传并核验，再写入各 Skill 的 examples/generation.json；未齐全时保持 draft。外链使用去元数据的 960×1200 WebP，以 contain 缩放保留完整画面。npm run validate 离线检查配方、真实提示词、审核、对象路径及回读凭证的一致性，不会执行 COS GET；线上图片访问另行验收。npm test 覆盖增量构建、旧文件字节保护与外链校验。全部调用见 [生成记录总表](docs/generation-ledger.json)。构建器不调用生图服务，也不包含供应商配置或密钥；使用 Skill 本身无需维护命令。
