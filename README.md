# 云酥记 Yun Su Ji 官网

云酥记 Yun Su Ji 是一个面向温哥华市场的新中式手作甜点品牌官网。当前网站用于品牌展示、产品介绍、预约意向收集，以及 2026 年 7-8 月温哥华第一阶段小批量试吃与活动 / 快闪预告。

当前项目不接真实数据库、不接真实支付、不发送真实邮件；预约表单为前端 mock 提交流程，便于后续接入 Supabase、Airtable 或 Google Sheets。

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
- `/products` 产品系列
- `/about` 关于云酥记
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

## Vercel 部署

本项目是标准 Next.js App Router 项目，可直接部署到 Vercel。

- Build Command: `npm run build`
- Install Command: 使用 Vercel 默认设置
- Output Directory: Next.js 项目无需手动设置
- Environment Variables: 当前 mock 版本无需真实密钥

## 项目结构

```text
src/
  app/                 # App Router 页面与全局布局
  components/
    layout/            # Header、Footer、Shell
    sections/          # 页面 section 组件
    ui/                # shadcn/ui 基础组件
  data/                # 产品、站点与品牌数据
  lib/                 # 工具函数
public/                # favicon、OG 图与静态资源
```

## 图片库说明

网站图片统一放在 `public/images/`：

- `public/images/brand/`：首页 Hero 与品牌主视觉
- `public/images/products/`：产品图
- `public/images/pages/`：关于、预约、活动、联系等页面氛围图
- `public/images/backgrounds/`：抽象背景与纹理
- `public/images/social/`：后续社媒与营销备用图

图片配置统一在 `src/data/images.ts`。其中包含：

- `siteImages`：全部图片配置
- `heroImages`：首页 Hero 图片
- `productImages`：按产品 id 映射产品图
- `pageMoodImages`：按页面或使用场景映射氛围图

后续替换真实拍摄图时，优先保持同名文件替换。例如直接替换 `public/images/products/product-cloud-square.png`。如果更换文件名或格式，需要同步修改 `src/data/images.ts` 中的 `src`。

图片风格应保持新中式、轻奢、温柔、云雾感、高级留白，避免廉价电商感、过度促销感和过强饱和度。

## 品牌与内容原则

- 视觉保持米白、云雾灰、豆沙红、浅金、墨色。
- 文案保持温柔、克制、真实，不使用夸张促销语言。
- 当前状态表达为准备中、计划中、预约意向收集中。
- 不虚构门店、电话、社媒账号、合作案例、客户评价或正式售卖状态。

## 上线前检查

详细清单见 `DEPLOYMENT_CHECKLIST.md`。
