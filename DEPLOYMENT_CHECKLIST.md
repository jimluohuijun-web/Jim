# 云酥记上线检查清单

## 品牌资产

- [x] `public/favicon.svg` 已创建，作为上线前品牌占位 favicon。
- [x] `public/icon.svg` 已创建，作为 app icon 占位。
- [x] `public/og-image.svg` 已创建，尺寸为 1200x630。
- [ ] 正式 Logo 完成后，替换 favicon、app icon 与 OG image。

## SEO 与分享

- [x] 全站默认 metadata 已设置。
- [x] 首页、产品页、关于页、预约页、活动页、联系页均有页面标题与描述。
- [x] Open Graph image 已引用 `/og-image.svg`。
- [ ] 正式域名确定后，在 Vercel 设置 `NEXT_PUBLIC_SITE_URL`。

## 内容真实性

- [x] 文案保持为准备期、计划中、预约意向收集中。
- [x] 未声明已有固定门店。
- [x] 未声明已正式开业或正式售卖。
- [x] 未虚构社媒账号、客户评价、合作案例、奖项或团队规模。

## 功能边界

- [x] 预约表单为前端 mock 提交。
- [x] 未接入真实数据库。
- [x] 未接入真实支付。
- [x] 未发送真实邮件或通知。
- [ ] 后续接入 Supabase / Airtable / Google Sheets 前，补充隐私提示与数据处理说明。

## Vercel 部署

- [x] 项目无需额外 `vercel.json`。
- [x] Build Command 使用 `npm run build`。
- [x] Install Command 使用 Vercel 默认设置。
- [x] Next.js Output Directory 无需手动设置。
- [x] 当前 mock 版本不依赖真实密钥即可运行。

## 上线前 QA

- [x] 运行 `npm run lint`。
- [x] 运行 `npm run build`。
- [x] 检查 `/` 返回 200。
- [x] 检查 `/products` 返回 200。
- [x] 检查 `/about` 返回 200。
- [x] 检查 `/reserve` 返回 200。
- [x] 检查 `/events` 返回 200。
- [x] 检查 `/contact` 返回 200。
- [x] 移动端检查无横向溢出。
- [x] 表单 label、focus、错误提示与成功状态可用。
