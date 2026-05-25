# 云酥坊 nginx Production 激活记录

## 基本信息

- 部署时间：2026-05-25 12:58 CST
- 本地 commit：`241716b70c9aa492c6ffe0367861a06ab0ac5b46`
- Release 路径：`/var/www/yunsucake/releases/20260525-102049`
- Current 指向：`/var/www/yunsucake/releases/20260525-102049`
- 备份目录：`/root/yunsucake-backups/20260525-100013`
- 旧站目录：`/www/wwwroot/yunsufang`
- nginx 配置：`/www/server/panel/vhost/nginx/yunsufang.conf`
- 环境变量文件：`/etc/yunsufang.env`，未输出内容，未修改

## systemd

- Service：`yunsufang.service`
- 状态：`active`
- WorkingDirectory：`/var/www/yunsucake/current`
- ExecStart：`/usr/local/bin/node /var/www/yunsucake/current/server.js`
- HOSTNAME：`127.0.0.1`
- PORT：`3000`
- 监听：`127.0.0.1:3000`
- 进程：`next-server (v16.2.6)`

## 本机 3000 验收

| URL | 结果 |
| --- | --- |
| `http://127.0.0.1:3000/` | 200 |
| `http://127.0.0.1:3000/products` | 200 |
| `http://127.0.0.1:3000/events` | 200 |
| `http://127.0.0.1:3000/contact` | 200 |
| `http://127.0.0.1:3000/images/pages/events-tasting.jpg` | 200 |
| `http://127.0.0.1:3000/images/products/lotus-pastry-lotus-paste-detail.jpg` | 200 |
| `http://127.0.0.1:3000/images/products/five-nuts-process-1-ingredients.jpg` | 200 |
| `http://127.0.0.1:3000/api/reservations` | 405，符合预期，GET 不支持但路由存在 |

## 正式域名验收

| URL | 结果 |
| --- | --- |
| `https://www.yunsucake.com/` | 200 |
| `https://www.yunsucake.com/products` | 200 |
| `https://www.yunsucake.com/events` | 200 |
| `https://www.yunsucake.com/contact` | 200 |
| `https://www.yunsucake.com/images/pages/events-tasting.jpg` | 200 |
| `https://www.yunsucake.com/images/pages/events-gift-preorder.jpg` | 200 |
| `https://www.yunsucake.com/images/pages/events-corporate-tea.jpg` | 200 |
| `https://www.yunsucake.com/images/pages/events-pop-up-market.jpg` | 200 |
| `https://www.yunsucake.com/images/products/lotus-pastry-lotus-paste-detail.jpg` | 200 |
| `https://www.yunsucake.com/images/products/peach-blossom-pastry-red-bean-detail.jpg` | 200 |
| `https://www.yunsucake.com/images/products/five-nuts-process-1-ingredients.jpg` | 200 |
| `https://www.yunsucake.com/images/products/red-bean-mooncake-process-1-red-beans.jpg` | 200 |
| `https://yunsucake.com/` | 200 |

## Playwright 截图验收

- 截图目录：`test-results/nginx-production-activate/`
- 页面数量：11
- viewport：desktop `1440x1000`，mobile `390x844`
- 截图数量：22
- HTTP 失败数：0
- broken images：0
- 关键新图引用检查：通过

覆盖页面：

- `/`
- `/products`
- `/events`
- `/contact`
- `/products/five-nuts-mooncake`
- `/products/red-bean-mooncake`
- `/products/lotus-pastry`
- `/products/peach-blossom-pastry`
- `/products/classic-pineapple-cake`
- `/products/matcha-pastry`
- `/products/winter-melon-mooncake`

## GitHub

- 部署前本地 `main` ahead of `origin/main` 1 commit：`chore: prepare nginx standalone deployment`
- 本报告创建后需提交：`docs: record nginx production activation`
- 提交后推送 `origin main`

## 回滚方式

如果要回滚到本次激活前的旧 systemd：

```bash
cp -a /root/yunsucake-backups/20260525-100013/yunsufang.service.before-activate /etc/systemd/system/yunsufang.service
systemctl daemon-reload
systemctl restart yunsufang.service
sleep 5
systemctl status yunsufang.service --no-pager
curl -I http://127.0.0.1:3000/
curl -I https://www.yunsucake.com/
```

如果 `before-activate` 不存在，可使用：

```bash
cp -a /root/yunsucake-backups/20260525-100013/yunsufang.service /etc/systemd/system/yunsufang.service
systemctl daemon-reload
systemctl restart yunsufang.service
```

不要删除新 release，不要删除备份。

## 后续更新命令

常规更新建议流程：

```bash
npm run lint
npm run build
npm run check:pages
scripts/deploy-nginx.sh
scripts/deploy-nginx.sh --activate
```

激活后验收：

```bash
curl -I http://127.0.0.1:3000/
curl -I https://www.yunsucake.com/
curl -I https://www.yunsucake.com/events
curl -I https://www.yunsucake.com/images/pages/events-tasting.jpg
```
