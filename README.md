# 云酥坊 yunsucake 官网

云酥坊 yunsucake 是一个面向温哥华市场的新中式手作点心品牌官网。当前网站用于品牌展示、招牌酥点、加拿大季节风味、中秋礼盒预告、预约意向收集，以及 2026 年 7-8 月温哥华第一阶段小批量试吃与活动 / 快闪预告。

当前项目不接真实支付、不发送真实邮件。预约表单已预留 Airtable 接收方案：配置 Airtable 环境变量后会写入 Airtable；未配置时自动使用 mock fallback，便于本地开发、预览构建和视觉验收。

## 技术栈

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui
- lucide-react
- Vercel

## 页面结构

- `/` 首页
- `/products` 点心系列
- `/about` 关于云酥坊
- `/reserve` 温哥华预约意向
- `/events` 活动 / 快闪
- `/contact` 联系我们

## 本地启动

```bash
npm install
npm run dev
```

默认访问地址：

```bash
http://localhost:3000
```

## 常用命令

```bash
npm run lint
npm run build
npm run start
```

## 环境变量

当前阶段不需要真实环境变量即可运行。可复制 `.env.example` 作为本地配置：

```bash
cp .env.example .env.local
```

如需让 Open Graph 图片生成绝对 URL，可在部署环境设置：

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

## 预约表单接收方案

预约表单提交到 `POST /api/reservations`。

- 如果未配置 Airtable 环境变量，API 会返回 mock 成功，方便本地开发和 Preview 验收。
- 如果已配置 Airtable 环境变量，API 会在服务端写入 Airtable，不会把密钥暴露到浏览器。
- 当前仍不接支付、不创建订单、不发送真实邮件。

需要在 Vercel Project Environment Variables 中配置：

```bash
AIRTABLE_API_KEY=
AIRTABLE_BASE_ID=
AIRTABLE_TABLE_NAME=Reservations
```

建议 Airtable 表字段：

- `Name`
- `Contact`
- `City`
- `Preferred Time`
- `Interested Products`
- `Product IDs`
- `Reservation Type`
- `Notes`
- `Notify Me`
- `Source`
- `Status`
- `Submitted At`

其中 `Interested Products` 建议为 Multiple select，`Preferred Time`、`Reservation Type`、`Status` 建议为 Single select，`Notify Me` 建议为 Checkbox，`Notes` 建议为 Long text。`Source` 默认由网站写入 `website`，`Status` 默认写入 `New`。

## Vercel 部署

本项目是标准 Next.js App Router 项目，可直接部署到 Vercel。

- Build Command: `npm run build`
- Install Command: 使用 Vercel 默认设置
- Output Directory: Next.js 项目无需手动设置
- Environment Variables: 未配置 Airtable 时可使用 mock fallback；正式收集预约前请配置 Airtable 变量

## 项目结构

```text
src/
  app/                 # App Router 页面与全局布局
  components/
    layout/            # Header、Footer、Shell
    sections/          # 页面 section 组件
    ui/                # shadcn/ui 基础组件
  data/                # 点心、站点与品牌数据
  lib/                 # 工具函数
public/                # favicon、OG 图与静态资源
```

## 图片库说明

网站图片统一放在 `public/images/`：

- `public/images/hero/`：首页 Hero 主视觉
- `public/images/products/`：招牌酥点产品图
- `public/images/seasonal/`：季节风味产品图
- `public/images/mooncakes/`：中秋月饼预展示图
- `public/images/gift-boxes/`：中秋礼盒预展示图
- `public/images/pages/`：关于、预约、活动、联系等页面氛围图
- `public/images/backgrounds/`：抽象背景与纹理
- `public/images/social/`：后续社媒与营销备用图

图片配置统一在 `src/lib/site-images.ts`，`src/data/images.ts` 仅做兼容 re-export。其中包含：

- `siteImages`：全部图片配置
- `heroHome`：首页 Hero 图片
- `signatureProducts`：招牌酥点图片
- `seasonalProducts`：季节风味图片
- `mooncakePreview`：中秋月饼图片
- `giftBoxes` / `featuredMidAutumnGift`：中秋礼盒图片
- `productImageMap`：按产品 id 映射图片
- `pageMoodImages`：按页面或使用场景映射氛围图

后续替换真实拍摄图时，优先保持同名文件替换。例如直接替换 `public/images/products/classic-egg-yolk-pastry.png`。如果更换文件名或格式，需要同步修改 `src/lib/site-images.ts` 中的 `src`。

图片风格应保持新中式、轻奢、温暖、玉绿色与香槟金点缀、柔和自然光、高级商业静物摄影感，避免廉价电商感、过度促销感和过强饱和度。

## 品牌与内容原则

- 视觉保持温暖米白、象牙白、Jade Green 玉绿色、Deep Jade 深墨绿色、Champagne Gold 香槟金、Brown 茶棕色。
- 文案保持温柔、克制、真实，不使用夸张促销语言。
- 当前状态表达为准备中、计划中、预约意向收集中。
- 不虚构门店、电话、社媒账号、合作案例、客户评价或正式售卖状态。

## 上线前检查

详细清单见 `DEPLOYMENT_CHECKLIST.md`。
