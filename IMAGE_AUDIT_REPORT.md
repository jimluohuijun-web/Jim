# 云酥坊全站图片审计报告

## 1. 检查范围

- 检查日期：2026-05-24
- 当前分支：main
- 当前 commit：53c6b224a8cd078d1035ea2e128f813502b3eeb3
- 工作区状态：存在 1 个未跟踪图片 `public/images/products/pineapple-cake-feature-crust.jpg`；本轮未修改业务代码、未替换图片、未提交。
- 截图保存目录：`test-results/site-image-audit/`
- 基础检查：
  - `npm run lint`：通过
  - `npm run build`：通过
  - `npm run check:pages`：通过，4 个页面；覆盖不足，仅包含 `/`、`/products`、`/contact`、`/products/winter-melon-mooncake`
- 本轮临时 Playwright 截图覆盖：19 个页面，desktop 1440x1000 与 mobile 390x844，共 38 张 fullPage 截图。
- Playwright 资源检查：未发现页面资源 404。

已检查页面：

| 页面类型 | URL |
| --- | --- |
| 一级页面 | `/` |
| 一级页面 | `/products` |
| 一级页面 | `/about` |
| 一级页面 | `/reserve` |
| 一级页面 | `/events` |
| 一级页面 | `/contact` |
| 产品详情页 | `/products/classic-egg-yolk-pastry` |
| 产品详情页 | `/products/classic-pineapple-cake` |
| 产品详情页 | `/products/classic-pineapple-pastry` |
| 产品详情页 | `/products/classic-red-bean-egg-yolk-pastry` |
| 产品详情页 | `/products/egg-yolk-lotus-mooncake` |
| 产品详情页 | `/products/five-nuts-mooncake` |
| 产品详情页 | `/products/lotus-pastry` |
| 产品详情页 | `/products/matcha-pastry` |
| 产品详情页 | `/products/peach-blossom-pastry` |
| 产品详情页 | `/products/peony-pastry` |
| 产品详情页 | `/products/red-bean-mooncake` |
| 产品详情页 | `/products/suzhou-fresh-meat-mooncake` |
| 产品详情页 | `/products/winter-melon-mooncake` |

## 2. 全站图片资产概览

- `public/images` 下图片数量：251
- 源码中图片引用次数：239
- 实际被引用的唯一图片数量：178
- 未被引用图片数量：73
- 被多个数据/组件重复引用图片数量：24
- 明显占位/临时命名图片数量：1，`/images/home/hero-main-reference-small.jpg`
- 明显缺失文件数量：0

当前项目实际使用的图片路径主要集中在：

- 首页与品牌场景：`/images/home/*`、`/images/pages/*`、`/images/backgrounds/*`
- 产品列表卡片：`/images/products/*.webp`、`/images/mooncakes/*.webp`
- 花酥详情页：`/images/products/egg-yolk-pastry/*`、`/images/products/matcha-pastry/*`、`/images/products/lotus-pastry/*`、`/images/products/peach-blossom-pastry/*`、`/images/products/peony-pastry/*`
- 月饼详情页：`/images/products/egg-yolk-lotus-mooncake/*`、`/images/products/five-nuts-mooncake/*`、`/images/products/red-bean-mooncake/*`、`/images/products/winter-melon-mooncake/*`
- 冬翅月饼新图：`/images/products/winter-melon-feature-*`、`/images/products/winter-melon-ingredient-*`、`/images/products/winter-melon-process-*`、`/images/products/mooncake-combo-*`
- 凤梨酥新详情页：`/images/products/pineapple-cake-*`、`/images/products/pineapple-cake/*`
- 旧凤梨酥详情页：`/images/products/pineapple-detail/*`

未被引用图片清单，按目录摘要：

- 背景 PNG 源文件：`/images/backgrounds/brand-background-01.png`、`/images/backgrounds/brand-texture-01.png`、`/images/backgrounds/home-bg-top.webp`
- 礼盒 PNG 源文件：`/images/gift-boxes/*png`
- 旧或备用 logo：`/images/logo/yunsufang-logo*.png|webp` 中多张未用
- 月饼备用图：`/images/mooncakes/low-sugar-taro-mooncake.*`、`/images/mooncakes/pineapple-mooncake.*`、部分 PNG 源文件
- 页面 PNG 源文件：`/images/pages/*png`
- 产品备用图：`blueberry-cloud-blossom-pastry.*`、`cranberry-pineapple-cake.*`、`maple-walnut-*.*`、`meat-mooncake-card.webp`
- 抹茶备用目录：`/images/products/matcha-pastry-detail/*`
- 桃花酥备用 webp：`/images/products/peach-blossom-pastry/*.webp`
- 凤梨酥备用与未接入：`/images/products/pineapple-cake/baking.jpg`、`gift-box.jpg`、`pastry-layers.jpg`、`pineapple-fruit.jpg`、`pineapple-cake-feature-crust.jpg`
- 冬翅备用：`/images/products/winter-melon-mooncake/sugar-oil.jpg`、`winter-melon-dice.jpg`
- 社媒备用：`/images/social/*`

重复引用图片中需要关注的路径：

| 图片路径 | 重复引用位置 / 风险 |
| --- | --- |
| `/images/products/classic-egg-yolk-pastry.webp` | 旧蛋黄酥/旧凤梨酥数据均引用，容易造成错图 |
| `/images/products/classic-pineapple-cake.webp` | 旧数据交叉复用，容易和新版凤梨酥详情页风格冲突 |
| `/images/products/matcha-pastry.webp` | 首页、旧数据、产品卡片复用，可保留但需统一裁切 |
| `/images/seasonal/strawberry-peach-blossom-pastry.webp` | 多处旧数据复用，风格偏浅 |
| `/images/products/egg-yolk-lotus-mooncake/cut-open.jpg` | 蛋黄莲蓉、五仁、豆沙详情页均复用，存在口味混淆风险 |
| `/images/products/egg-yolk-lotus-mooncake/lotus-paste.jpg` | 蛋黄莲蓉、五仁、豆沙详情页均复用，原料错配风险高 |
| `/images/products/five-nut-mooncake.jpg` | 首页与蛋黄莲蓉推荐复用，可保留但需检查口味上下文 |
| `/images/products/fresh-meat-mooncake/fresh-meat-mooncake-hero.webp` | 首页、列表、鲜肉月饼详情复用，整体可保留 |

## 3. 页面级问题汇总表

| 页面 | 模块 | 当前图片路径 | 等级 | 问题描述 | 建议处理 |
| --- | --- | --- | --- | --- | --- |
| `/products/classic-pineapple-pastry` | 整页 | `/images/products/pineapple-detail/*.png` | A | 旧白底电商详情页，包含大量信息海报、红色促销式视觉，与黑金新中式主站完全不统一 | 下线/重定向到新版 `/products/classic-pineapple-cake`，或整页按黑金体系重做 |
| `/products/classic-red-bean-egg-yolk-pastry` | 整页 | 多张浅色旧图 | A | 旧白底电商详情页，样式、卡片、底部价格条与当前主站割裂 | 下线或按黑金体系重做；避免与新版经典蛋黄酥混淆 |
| `/products/classic-pineapple-cake` | 原料/工艺大图 | `/images/products/pineapple-cake/cut-open.jpg` | A | 当前为带大量文字说明的信息海报图，破坏黑金高级 UI | 替换为真实凤梨酥切面/金钻凤梨果肉摄影 |
| `/products/egg-yolk-lotus-mooncake` | Hero | `/images/products/egg-yolk-lotus-mooncake/hero.jpg` | A | 切面没有明确整颗蛋黄，和“蛋黄莲蓉”核心卖点不匹配 | 替换为完整蛋黄居中的蛋黄莲蓉月饼 Hero |
| `/products/egg-yolk-lotus-mooncake` | 原料/工艺卡片 | `/images/products/egg-yolk-pastry/red-bean-paste.jpg` 等复用图 | A | 蛋黄莲蓉月饼复用了蛋黄酥/其他月饼原料图，莲蓉、蛋黄、饼皮区分不足 | 生成/接入专属蛋黄莲蓉原料与工艺图 |
| `/products/red-bean-mooncake` | Hero/切面 | `/images/products/red-bean-mooncake/hero.jpg` | B | 可读为豆沙，但构图与蛋黄莲蓉/莲蓉类图过近，产品识别弱 | 加强深红褐色豆沙切面与红豆元素 |
| `/products/red-bean-mooncake` | 原料/工艺 | 多张月饼工艺复用图 | B | 真实感可接受，但豆沙慢熬、红豆原料、广式软皮对应关系不够强 | 第二批后生成更明确红豆/豆沙工艺图 |
| `/products/five-nuts-mooncake` | 工艺流程 | 多张通用工艺图 | B | Hero 与切面较好，但流程图仍偏通用，五仁馅混合与称重动作辨识度不足 | 保留 Hero，优化流程卡片图 |
| `/products/winter-melon-mooncake` | 柔润口感大图 | `/images/products/winter-melon-mooncake/cut-open.jpg` | A | 仍像蛋黄酥/普通酥点切面，和冬翅丝状馅不一致 | 替换为冬瓜蓉丝感切面图 |
| `/products/winter-melon-mooncake` | 经典口味搭配 | `/images/products/mooncake-combo-*.jpg` | B | 图片内容正确，但卡片区域在整页截图中偏暗，系列图细节不够突出 | 调整遮罩/亮度或重新输出更明亮同系列图 |
| `/products` | 中秋风味预告 | 多张月饼卡片 | B | 图像整体能用，但冬翅/豆沙/莲蓉/蛋黄莲蓉在小卡片上识别度不均衡 | 优先用已生成的 combo 系列图替换预告卡片 |
| `/products` | Hero/礼盒场景 | `/images/pages/giftbox-concept-01.webp` 等 | C | 风格统一、白玉器皿偏亮但符合页面叙事 | 可保留 |
| `/` | Hero/精选/系列 | 多张黑金产品图 | C | 当前主视觉和产品系列统一度较高 | 可保留，后续仅微调产品对应关系 |
| `/about` | Hero/品牌故事/矩阵 | `/images/pages/about-story-*`、`giftbox-concept-01.webp` | C | 品牌叙事图统一，和页面用途匹配 | 可保留 |
| `/reserve` | Hero/说明 | `/images/pages/reserve-mood-01.webp` | C | 试吃登记场景清晰，风格统一 | 可保留 |
| `/events` | 活动卡片 | `/images/pages/events-mood-01.webp` 等 | B | 同页多张图均为同类茶席/礼盒场景，活动类型区分不够明显 | 后续为试吃会/礼盒预订/企业下午茶/快闪分别补图 |
| `/contact` | Hero/合作流程 | `/images/pages/contact-mood-01.webp`、`giftbox-concept-01.webp` | C | 联系与合作语境匹配 | 可保留 |
| `/products/matcha-pastry` | 低糖红豆沙卡片 | `/images/products/matcha-pastry/red-bean-paste.jpg` | A | 卡片显示为普通月饼切面，和抹茶酥/红豆沙不匹配 | 替换为抹茶酥红豆沙切面或低糖红豆沙静物 |
| `/products/matcha-pastry` | 36层手工薄酥 | `/images/products/matcha-pastry/pastry-layers.jpg` | B | 工艺图可用，但和多页通用手作图相似 | 可后续统一工艺图系列 |
| `/products/lotus-pastry` | 低糖莲蓉馅卡片 | `/images/products/egg-yolk-lotus-mooncake/hero.jpg` | B | 产品不是明显荷花酥，容易和月饼混淆 | 替换为莲蓉馅或荷花酥切面细节 |
| `/products/peach-blossom-pastry` | 低糖红豆沙卡片 | `/images/products/egg-yolk-lotus-mooncake/hero.jpg` | B | 月饼图复用在桃花酥页面，产品语境弱 | 替换为桃花酥红豆沙切面或红豆沙静物 |
| `/products/peony-pastry` | 低糖紫薯馅卡片 | `/images/products/peony-pastry/hero.jpg` | C | 同产品图重复但含切面，尚可接受 | 可保留，后续可增强紫薯馅特写 |
| `/products/suzhou-fresh-meat-mooncake` | 全页产品图 | `/images/products/fresh-meat-mooncake/*.webp` | C | 产品与文案对应，黑金风格统一 | 可保留 |

## 4. 必须替换图片清单 A 类

1. 页面：`/products/classic-pineapple-pastry`
   - 模块：整页旧凤梨酥详情
   - 当前图片：`/images/products/pineapple-detail/hero.png`、`core-features.png`、`ingredients.png`、`layered-taste.png`、`crafting.png`、`product-specs.png`、`gift-box.png`、`cross-sell.png`、`bottom-cta.png`
   - 问题：大量文字海报、白底电商风、促销式红色视觉，与黑金高级新中式完全冲突。
   - 建议：优先下线该旧路由或重定向到 `/products/classic-pineapple-cake`。如保留，应整页替换为真实高端凤梨酥摄影。
   - 已有可复用图片：新版凤梨酥 `/images/products/pineapple-cake-*.jpg`。
   - 建议新图路径：按新版详情页继续使用 `/images/products/pineapple-cake-*.jpg`。

2. 页面：`/products/classic-red-bean-egg-yolk-pastry`
   - 模块：整页旧红豆蛋黄酥详情
   - 当前图片：多张浅色旧图及交叉推荐图
   - 问题：整体为旧电商详情视觉，与黑金主站割裂；部分模块图片空白感强，和新版经典蛋黄酥重复。
   - 建议：优先下线或合并到 `/products/classic-egg-yolk-pastry`，避免两个蛋黄酥详情页并存造成品牌割裂。
   - 已有可复用图片：`/images/products/egg-yolk-pastry/*.jpg`
   - 建议新图路径：无需新图，建议复用新版蛋黄酥详情页图或清理旧页。

3. 页面：`/products/classic-pineapple-cake`
   - 模块：`好凤梨酥，从看得见的真材实料开始`
   - 当前图片：`/images/products/pineapple-cake/cut-open.jpg`
   - 问题：当前实际呈现为说明海报图，含大量文字，与页面其他高端摄影图冲突。
   - 建议：替换为凤梨酥切面微距，突出金钻凤梨果肉纤维。
   - 已有可复用图片：`/images/products/pineapple-cake-feature-fruit.jpg` 可临时复用。
   - 建议新图片路径：`/images/products/pineapple-cake-cut-open-premium.jpg`

4. 页面：`/products/egg-yolk-lotus-mooncake`
   - 模块：Hero 首屏
   - 当前图片：`/images/products/egg-yolk-lotus-mooncake/hero.jpg`
   - 问题：切面缺少一眼可见的完整蛋黄，核心卖点“整颗蛋黄”不成立。
   - 建议：生成/接入完整咸蛋黄居中、外层莲蓉细腻的广式月饼 Hero。
   - 已有可复用图片：`/images/products/mooncake-combo-1-egg-yolk-lotus.jpg`
   - 建议新图片路径：`/images/products/egg-yolk-lotus-mooncake/hero-v2.jpg`

5. 页面：`/products/matcha-pastry`
   - 模块：`低糖红豆沙`
   - 当前图片：`/images/products/matcha-pastry/red-bean-paste.jpg`
   - 问题：页面呈现像普通月饼/莲蓉切面，不像抹茶酥红豆沙；与卡片标题不匹配。
   - 建议：替换为抹茶酥切面红豆沙层次图，保留绿色抹茶外皮。
   - 已有可复用图片：`/images/products/matcha-pastry/cut-open.jpg`
   - 建议新图片路径：`/images/products/matcha-pastry/red-bean-paste-v2.jpg`

6. 页面：`/products/winter-melon-mooncake`
   - 模块：`柔、润、清、甜，层层递进`
   - 当前图片：`/images/products/winter-melon-mooncake/cut-open.jpg`
   - 问题：当前不像冬瓜蓉/冬翅丝感，视觉接近普通酥点或错误馅料。
   - 建议：替换为半透明浅金冬瓜蓉丝状切面大图。
   - 已有可复用图片：`/images/products/winter-melon-mooncake/winter-melon-mooncake-hero.jpg`、`/images/products/winter-melon-feature-1.jpg`
   - 建议新图片路径：`/images/products/winter-melon-mooncake/cut-open-v2.jpg`

## 5. 建议替换图片清单 B 类

1. 页面：`/products`
   - 模块：中秋风味预告卡片
   - 当前图片：多张月饼预览图
   - 问题：卡片尺寸较小，蛋黄莲蓉/纯莲蓉/豆沙/月饼之间差异弱。
   - 建议：用 `mooncake-combo-*` 系列统一替换预告卡，增强切面识别。

2. 页面：`/products/events`
   - 模块：四类活动卡片
   - 当前图片：`/images/pages/events-mood-01.webp` 等
   - 问题：图片统一但重复度高，试吃会、礼盒预订、企业下午茶、快闪市集区分不明显。
   - 建议：按活动类型生成四张场景图。

3. 页面：`/products/five-nuts-mooncake`
   - 模块：工艺流程卡片
   - 当前图片：五仁工艺图与通用工艺图混用
   - 问题：五仁混合、称重、烘烤等步骤表达还不够强。
   - 建议：保留 Hero/切面，替换流程图。

4. 页面：`/products/red-bean-mooncake`
   - 模块：Hero、原料、工艺
   - 当前图片：`/images/products/red-bean-mooncake/*.jpg`
   - 问题：整体能用，但豆沙红褐色识别度和红豆原料感还可加强。
   - 建议：生成更深红褐色豆沙切面、红豆慢熬工艺图。

5. 页面：`/products/lotus-pastry`
   - 模块：低糖莲蓉馅卡片
   - 当前图片：月饼/莲蓉类复用图
   - 问题：不明显是荷花酥专属原料。
   - 建议：生成莲蓉馅静物或荷花酥莲蓉切面。

6. 页面：`/products/peach-blossom-pastry`
   - 模块：低糖红豆沙卡片
   - 当前图片：月饼/莲蓉类复用图
   - 问题：桃花酥红豆沙卖点识别弱。
   - 建议：生成桃花酥切面或红豆沙原料图。

7. 页面：`/products/winter-melon-mooncake`
   - 模块：经典口味搭配卡片
   - 当前图片：`/images/products/mooncake-combo-*.jpg`
   - 问题：图片主题正确，但在卡片里偏暗，细节阅读性不足。
   - 建议：减轻遮罩或重新输出更亮同系列图。

## 6. 可保留图片清单 C 类

- 首页：`/images/home/hero-main.jpg`、`/images/home/brand-story.jpg`、`/images/home/craft-*.jpg`、`/images/home/gift-box-banner.jpg`
- 产品列表页：`/images/pages/giftbox-concept-01.webp`、`/images/pages/afternoon-tea-01.webp`
- 经典蛋黄酥详情页：`/images/products/egg-yolk-pastry/hero.jpg`、`cut-open.jpg`、`salted-yolk.jpg`、`baking.jpg`、`tea-scene.jpg`
- 新版经典凤梨酥详情页：Hero、卖点卡片、礼盒图大多可保留；仅信息海报图必须替换。
- 抹茶酥详情页：Hero、抹茶粉、整颗咸蛋黄、切面主图可保留；红豆沙卡片需替换。
- 花酥详情页：桃花酥、荷花酥、牡丹酥 Hero 与主视觉基本可保留。
- 鲜肉月饼详情页：`/images/products/fresh-meat-mooncake/*.webp` 全组可保留。
- 冬翅月饼详情页：Hero、四个卖点图、原料图、工艺流程图可保留。
- 关于/预约/联系页：`/images/pages/about-*`、`reserve-mood-01.webp`、`contact-mood-01.webp` 可保留。

## 7. 可复用图片建议

### 蛋黄酥可复用图片

- `/images/products/egg-yolk-pastry/hero.jpg`：适合蛋黄酥 Hero、口感大图；无需替换。
- `/images/products/egg-yolk-pastry/cut-open.jpg`：适合蛋黄酥切面/整颗蛋黄卡片。
- `/images/products/egg-yolk-pastry/salted-yolk.jpg`：适合蛋黄原料卡。
- `/images/products/egg-yolk-pastry/baking.jpg`：适合现烤现发/工艺卡。

### 凤梨酥可复用图片

- `/images/products/pineapple-cake-hero.jpg`：适合凤梨酥 Hero。
- `/images/products/pineapple-cake-feature-fruit.jpg`：适合金钻凤梨果肉/切面卖点。
- `/images/products/pineapple-cake-feature-thin-crust.jpg`：适合超薄酥皮。
- `/images/products/pineapple-cake-feature-low-sugar.jpg`：适合低糖清爽。
- `/images/products/pineapple-cake-feature-fresh-baked.jpg`：适合现做现发。
- `/images/products/pineapple-cake-gift-box-scene.jpg`：适合礼盒场景。

### 抹茶酥可复用图片

- `/images/products/matcha-pastry/hero.jpg`：适合 Hero。
- `/images/products/matcha-pastry/cut-open.jpg`：适合切面与口感大图。
- `/images/products/matcha-pastry-feature-matcha.jpg`：适合日本抹茶粉。
- `/images/products/matcha-pastry-feature-egg-yolk.jpg`：适合整颗蛋黄。

### 冬翅月饼可复用图片

- `/images/products/winter-melon-mooncake/winter-melon-mooncake-hero.jpg`：适合 Hero/切面大图。
- `/images/products/winter-melon-feature-1.jpg`：适合冬翅丝感切面。
- `/images/products/winter-melon-ingredient-1.jpg` 到 `ingredient-4.jpg`：适合原料模块。
- `/images/products/winter-melon-process-1.jpg` 到 `process-4.jpg`：适合工艺流程模块。
- `/images/products/mooncake-combo-*.jpg`：适合经典口味搭配与产品列表月饼卡。

### 品牌/背景/礼盒/通用场景可复用图片

- `/images/home/hero-main.jpg`：首页主视觉，黑金高级风格最统一。
- `/images/home/gift-box-banner.jpg`：礼盒与赠礼场景。
- `/images/pages/giftbox-concept-01.webp`：产品列表/关于/联系通用礼盒场景。
- `/images/pages/afternoon-tea-01.webp`：预约、活动、联系页通用茶席场景。
- `/images/backgrounds/brand-texture-01.webp`：通用背景纹理。

## 8. 下一步替换建议

第一批：产品详情页 Hero 图和明显错图

- `/products/classic-pineapple-pastry`：建议下线/重定向或整页重做，涉及 9 张旧海报图。
- `/products/classic-red-bean-egg-yolk-pastry`：建议下线/合并到新版蛋黄酥，涉及整页旧图。
- `/products/egg-yolk-lotus-mooncake`：Hero 与蛋黄莲蓉原料图，约 3-5 张。
- `/products/winter-melon-mooncake`：旧 `cut-open` 大图，1 张。
- `/products/matcha-pastry`：低糖红豆沙错图，1 张。

第二批：产品卖点卡片图

- `/products` 月饼预告卡片：4-5 张。
- `/products/five-nuts-mooncake` 流程卡片：3-4 张。
- `/products/red-bean-mooncake` 原料/工艺卡片：4-6 张。
- 花酥页红豆沙/莲蓉馅卡片：2-3 张。

第三批：原料 / 工艺 / 礼盒场景模块图

- 凤梨酥原料海报替换：1 张优先。
- 活动页四类活动场景：4 张。
- 联系/预约/关于页可后置，仅需防止重复感。

第四批：全站风格统一、亮度和裁切优化

- 调整冬翅月饼经典口味搭配卡片亮度/遮罩。
- 统一月饼详情页推荐卡片图源。
- 清理未引用图片与旧 PNG 源文件，降低维护噪音。

## 9. 审计结论摘要

- 是否发现占位图：发现疑似参考/临时命名图 1 张；另有旧详情页大量信息海报图。
- 是否发现产品错图：发现，集中在旧凤梨酥详情、旧红豆蛋黄酥详情、蛋黄莲蓉月饼、抹茶酥红豆沙、冬翅月饼旧切面。
- A 类必须替换：6 项。
- B 类建议替换：7 项。
- C 类可保留：8 组。
- 优先建议：第一批先处理旧详情页和核心错图，否则用户会在产品详情页看到明显割裂的旧电商视觉或卖点不成立的图片。
