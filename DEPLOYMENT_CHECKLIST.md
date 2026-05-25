# 云酥坊上线检查清单

## 品牌资产

- [x] `public/favicon.svg` 已创建，作为上线前品牌占位 favicon。
- [x] `public/icon.svg` 已创建，作为 app icon 占位。
- [x] `public/og-image.svg` 已创建，尺寸为 1200x630。
- [ ] 正式 Logo 完成后，替换 favicon、app icon 与 OG image。

## SEO 与分享

- [x] 全站默认 metadata 已设置。
- [x] 首页、点心系列页、关于页、预约页、活动页、联系页均有页面标题与描述。
- [x] Open Graph image 已引用 `/og-image.svg`。
- [ ] 正式域名确定后，在 Vercel 设置 `NEXT_PUBLIC_SITE_URL`。

## 内容真实性

- [x] 文案保持为准备期、计划中、预约意向收集中。
- [x] 未声明已有固定门店。
- [x] 未声明已正式开业或正式售卖。
- [x] 未虚构社媒账号、客户评价、合作案例、奖项或团队规模。

## 功能边界

- [x] 预约表单已接入 `/api/reservations`，未配置 Airtable 时使用 mock fallback。
- [ ] 正式宣传前，在 Vercel 配置 Airtable 环境变量并完成真实写入测试。
- [x] 未接入真实支付。
- [x] 未发送真实邮件或通知。
- [x] 预约页已补充基础隐私提示；正式公开前可进一步补充完整隐私政策。

## 正式 nginx 部署

- [x] 正式域名 `www.yunsucake.com` / `yunsucake.com` 继续指向 nginx 服务器。
- [x] 正式运行方式为 Next.js standalone + systemd + nginx proxy。
- [x] nginx 代理 `127.0.0.1:3000`。
- [x] release/current 根目录使用 `/var/www/yunsucake`。
- [x] 旧站目录 `/www/wwwroot/yunsufang` 不直接覆盖。
- [x] 部署脚本为 `scripts/deploy-nginx.sh`。
- [x] systemd 使用 `/var/www/yunsucake/current/server.js`。
- [x] 生产环境变量继续使用 `/etc/yunsufang.env`。
- [ ] 每次正式上线前保留服务器 backups / releases。

正式上线固定命令：

```bash
npm run lint
npm run build
npm run check:pages
scripts/deploy-nginx.sh
scripts/deploy-nginx.sh --activate
```

部署后必须检查：

```bash
curl -I https://www.yunsucake.com/
curl -I https://www.yunsucake.com/events
curl -I https://www.yunsucake.com/images/pages/events-tasting.jpg
```

禁止事项：

- 不要把正式域名切到 Vercel。
- 不要直接覆盖 `/www/wwwroot/yunsufang`。
- 不要提交 `.env`、`.env.local`、`.next`、`node_modules`、`test-results`。
- 不要删除 backups / releases。

## Vercel 预览 / 备份

- [x] 项目无需额外 `vercel.json`。
- [x] Build Command 使用 `npm run build`。
- [x] Install Command 使用 Vercel 默认设置。
- [x] Next.js Output Directory 无需手动设置。
- [x] 未配置 Airtable 时不依赖真实密钥即可运行。
- [x] Vercel 仅作为预览 / 备份，不作为正式域名上线来源。

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
