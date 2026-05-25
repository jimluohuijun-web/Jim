# 云酥坊 nginx 服务器部署审计与方案

更新时间：2026-05-25

## 0. 正式上线原则

正式域名：

- `https://www.yunsucake.com`
- `https://yunsucake.com`

正式域名继续指向 nginx 服务器。Vercel 只作为预览 / 备份环境，不承载正式域名。

每次修改完成后的固定上线流程：

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
- 不要直接覆盖服务器旧目录 `/www/wwwroot/yunsufang`。
- 不要删除服务器 backups / releases。
- 不要提交 `.env`、`.env.local`、`.next`、`node_modules`、`test-results` 或任何密钥文件。
- 不要把服务器密码、token、环境变量内容写入文档或命令。

## 1. 本地项目判断

当前项目是 Next.js App Router + TypeScript + Tailwind。

项目包含服务端能力：

- `src/app/api/reservations/route.ts`
- `src/app/layout.tsx` 使用 `export const dynamic = "force-dynamic"`
- `src/app/page.tsx` 使用 `export const dynamic = "force-dynamic"`
- `src/components/sections/reserve-form.tsx` 会请求 `/api/reservations`
- 预约 API 会读取 `AIRTABLE_API_KEY`、`AIRTABLE_BASE_ID`、`AIRTABLE_TABLE_NAME`

结论：

- 不建议按纯静态 HTML 上传。
- 不建议使用静态导出作为正式部署方案。
- 如果静态化，预约表单的 `/api/reservations` 会失效。
- 推荐使用 Next.js Node 服务 + nginx 反向代理。

## 2. 当前服务器审计

SSH 候选：

- Host alias: `yunsufang-vps`
- HostName: `43.162.115.47`
- User: `root`
- Port: `22`
- Key: `~/.ssh/yunsufang_vps_ed25519`

服务器只读检查结果：

- Hostname: `VM-0-2-opencloudos`
- Node: `v22.22.2`
- npm: `10.9.7`
- nginx: `1.28.0`
- PM2: 未安装
- nginx 主配置：`/www/server/nginx/conf/nginx.conf`
- 站点配置：`/www/server/panel/vhost/nginx/yunsufang.conf`
- 当前站点目录：`/www/wwwroot/yunsufang`
- 当前 Next 服务端口：`127.0.0.1:3000`
- 当前服务管理：`systemd`
- systemd service: `/etc/systemd/system/yunsufang.service`
- 环境变量文件：`/etc/yunsufang.env`
- SSL 证书：`/etc/letsencrypt/live/yunsucake.com/fullchain.pem`

当前 nginx 行为：

- `yunsucake.com` / `www.yunsucake.com` 的 80 和 443 都反向代理到 `http://127.0.0.1:3000`
- `/.well-known/acme-challenge/` 使用 `/www/wwwroot/yunsufang`
- `/haimati-api/` 反向代理到 `127.0.0.1:18083`

当前线上旧内容原因：

- 正式域名走 nginx 没问题。
- nginx 指向的是服务器本地旧 Next 程序 `/www/wwwroot/yunsufang`。
- 本地最新代码尚未同步到服务器该 Next 程序。

## 3. 推荐部署方案

优先方案：Next.js standalone + Node 进程管理 + nginx 反向代理。

推荐目录：

```text
/var/www/yunsucake
├── current -> releases/20260525-090000
├── releases
│   ├── 20260525-090000
│   └── ...
└── shared
    └── .env.production
```

考虑当前服务器已有宝塔风格目录和 systemd，可以选择两种落地方式：

方案 A：新建规范目录 `/var/www/yunsucake`

- 优点：release/current 结构清晰，方便回滚。
- 缺点：需要调整 nginx 和 systemd 工作目录。

方案 B：沿用当前目录 `/www/wwwroot/yunsufang`

- 优点：改动最小，贴合当前 nginx 和 systemd。
- 缺点：版本发布和回滚需要额外约束，不能直接覆盖旧站。

推荐最终采用方案 A，但首次迁移可先保守使用当前端口 `127.0.0.1:3000`，确保域名不变、证书不变。

## 4. 是否建议开启 standalone

建议在 `next.config.ts` 中增加：

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
};

export default nextConfig;
```

原因：

- 更适合部署到独立 Node 服务器。
- 可减少上传体积。
- 保留 Next API routes。
- 适合 nginx 反向代理。
- 部署包可由 `.next/standalone`、`.next/static`、`public` 组成。

已在第一步落地中为 `next.config.ts` 增加 `output: "standalone"`。

构建后需要确认：

```bash
test -d .next/standalone && echo "standalone ok"
test -d .next/static && echo "static ok"
```

## 5. 部署脚本

脚本文件：`scripts/deploy-nginx.sh`

注意：不要在脚本里写密码，应使用 SSH key。

```bash
scripts/deploy-nginx.sh --plan
scripts/deploy-nginx.sh
scripts/deploy-nginx.sh --activate
```

当前脚本行为：

- `--plan` 只输出计划，不连接服务器。
- 默认模式会本地检查、构建、打包、上传 release、更新 `current` 软链，但不会重启服务。
- `--activate` 才会执行 `systemctl daemon-reload`、`systemctl restart yunsufang.service` 和验收 curl。
- 打包内容为 `.next/standalone`、`.next/static`、`public`、`package.json`、`package-lock.json`。
- 解压后 release 根目录直接包含 `server.js`。

如果沿用当前 systemd，推荐把 service 调整为使用 standalone：

```bash
WorkingDirectory=/var/www/yunsucake/current
ExecStart=/usr/local/bin/node /var/www/yunsucake/current/server.js
```

本地模板见：`deploy/yunsufang.service.example`。

## 6. nginx 配置草案

当前 nginx 已经有可用 HTTPS 证书和反向代理结构，不建议重写整个配置。

当前 nginx 已经 proxy 到 `127.0.0.1:3000`。本轮方案继续使用 `3000`，因此 nginx 暂时无需修改。

如果后续迁移到新端口 `3010`，再将 `location /` 中的代理目标调整为：

```nginx
location / {
    proxy_pass http://127.0.0.1:3010;
    proxy_cache off;
    proxy_no_cache 1;
    proxy_cache_bypass 1;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $connection_upgrade;
    proxy_read_timeout 300;
    proxy_send_timeout 300;
    add_header Cache-Control "no-cache, no-store, must-revalidate" always;
    add_header Pragma "no-cache" always;
    add_header Expires "0" always;
}
```

保留现有配置：

- SSL 证书路径
- `/.well-known/acme-challenge/`
- `/haimati-api/`
- access/error log

改完后必须先执行：

```bash
nginx -t
```

确认通过后才 reload。

## 7. 正式部署前备份命令

以下命令只作为正式部署前的备份步骤，尚未执行：

```bash
STAMP="$(date +%Y%m%d-%H%M%S)"
mkdir -p "/root/yunsucake-backups/$STAMP"
cp -a /www/server/panel/vhost/nginx/yunsufang.conf "/root/yunsucake-backups/$STAMP/"
cp -a /etc/systemd/system/yunsufang.service "/root/yunsucake-backups/$STAMP/"
cp -a /etc/yunsufang.env "/root/yunsucake-backups/$STAMP/"
cp -a /www/wwwroot/yunsufang "/root/yunsucake-backups/$STAMP/yunsufang-old"
```

## 8. 标准部署步骤

当前采用：

- release/current 根目录：`/var/www/yunsucake`
- systemd：`/etc/systemd/system/yunsufang.service`
- 环境变量文件：`/etc/yunsufang.env`
- nginx proxy：`127.0.0.1:3000`

执行：

```bash
npm run lint
npm run build
npm run check:pages
scripts/deploy-nginx.sh
scripts/deploy-nginx.sh --activate
```

验收：

```bash
curl -I http://127.0.0.1:3000/
curl -I https://www.yunsucake.com/
curl -I https://www.yunsucake.com/events
curl -I https://www.yunsucake.com/images/pages/events-tasting.jpg
```

如需完整截图验收，使用 Playwright 保存到 `test-results/`，但不要提交该目录。

## 9. 回滚方案

若使用 release/current：

```bash
ln -sfn /var/www/yunsucake/releases/上一个版本 /var/www/yunsucake/current
systemctl restart yunsufang.service
curl -I http://127.0.0.1:3000/
curl -I https://www.yunsucake.com/
```

如果要回滚旧目录：

```bash
cp /root/yunsucake-backups/备份时间/yunsufang.service /etc/systemd/system/yunsufang.service
systemctl daemon-reload
systemctl restart yunsufang.service
nginx -t
systemctl reload nginx
```

如 nginx 配置也改过，应保留配置备份并可恢复：

```bash
cp /path/to/yunsufang.conf.backup /www/server/panel/vhost/nginx/yunsufang.conf
nginx -t
systemctl reload nginx
```
