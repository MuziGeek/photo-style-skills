# 照片风格模板集

[English](README.md)

70 个可独立复制的照片编辑 Skill，涵盖原创说明与经过许可核验的改编方法；每条明确记录原作者、固定来源、许可和修改。每个目录包含双语流程、结构化配方、保留约束与验收标准。当前 69 个示例为 ready，1 个为 draft；状态反映示例审核，不表示服务上线或结果保证。

## 安装与使用

1. 从下方目录选择风格，复制整个 skills 内对应风格文件夹到你的 Skill 目录（例如 ~/.codex/skills）。保留同目录的 SKILL.md、recipe.yaml、provenance.json 和 LICENSE；无需运行脚本、安装依赖或配置 API 密钥。
2. 在支持 Skill 与参考图编辑的助手中选用该风格，并提供你有权编辑的照片。其他助手也可以直接阅读 SKILL.md 与 recipe.yaml。
3. 先让助手核对原图，再执行风格转译，并依据目录内验收标准检查结果。支持何种生图模型由你的环境决定。

默认保护原图身份、主体数量、结构和画幅；具体风格允许的几何变化写在各 Skill 中。示例原图和效果图均为 AI 合成，不是真人实拍。不同模型、参数和图片不会保证得到相同结果。

## 状态与许可

只有源图、效果图均真实存在且生成记录中两者均通过视觉审核时才标 ready；缺图、缺审核或未通过则为 draft。页面只链接真实存在的图片。[完整索引](index.json) 列出机器可读状态。

原创贡献与仓库维护文件适用 [MIT](LICENSE)，版权声明为 2026 MuziGeek。改编方法保留原作者声明及 MIT、CC BY 4.0 或 Apache 2.0 等对应条款，见 [第三方声明](THIRD_PARTY_NOTICES.md)。生成示例不以 MIT 文本许可替代生成平台条款，也不授予人物、商标、第三方输入或参考作品的权利。详见 [限制与素材说明](docs/limitations.md) 和 [固定版本研究记录](docs/research-sources.json)；每个 Skill 的 provenance.json 区分原创与适配。研究资料是否采用，以各条目固定来源、明确许可及改编记录为准。

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

## 维护

data 下的 4 个 JSON 是内容真源。维护者安装 package.json 中固定版本的依赖后，可运行 npm run build，使用已有压缩示例和审阅记录重建文档与索引；若要从外部原始生成目录重新压缩，运行 node scripts/build.mjs --generation /path/to/generation。npm run validate 检查内容、链接、配方、实际提示词、哈希和审核一致性，npm test 运行打包回归检查。示例使用去元数据的 960×1200 WebP，以 contain 缩放保留完整画面。全部调用（含拒绝）见 [生成记录总表](docs/generation-ledger.json)，原始 PNG 不入仓库。构建器只读取已有素材，不调用生图服务，也不包含供应商配置或密钥；使用 Skill 本身无需运行维护命令。
