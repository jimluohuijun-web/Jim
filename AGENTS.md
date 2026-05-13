# 云酥坊网站开发规范

## 品牌定位
- 品牌名：云酥坊
- 英文辅助名：yunsucake
- 定位：面向温哥华市场的新中式手作点心品牌，主打手作酥点、加拿大本地季节风味与节日礼盒
- 气质：新中式、轻奢、温暖、轻盈、留白、东方美学、现代高级网页
- 避免：廉价电商风、过度卡通、过度国潮、颜色太艳、动画太花哨

## 技术栈
- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui
- lucide-react
- Vercel 部署

## 视觉规范
- 主色：温暖米白、象牙白、Jade Green 玉绿色、Deep Jade 深墨绿色、Champagne Gold 香槟金、Brown 茶棕色
- 页面要有高级留白
- 字体层级清晰
- 卡片圆角柔和
- 阴影克制
- 图片区域要有高级商业静物摄影感，统一陶瓷器皿、茶具、花枝、丝绸布料、木托盘等新中式语境
- 动效要高级、缓慢、克制

## 页面结构
网站需要包含：
1. 首页
2. 点心系列
3. 关于云酥坊
4. 温哥华预订
5. 活动 / 快闪
6. 联系我们

## 开发规范
- 所有页面移动端优先
- 所有模块组件化
- 每个 section 独立成组件
- 不允许硬编码敏感信息
- 不要直接接真实支付
- 预约表单使用 `/api/reservations`，无 Airtable 环境变量时允许 mock fallback
- 每次修改后运行 lint 和 build
- 如果 build 报错，必须修复
- 动效使用 Framer Motion
- 图标使用 lucide-react
- 样式优先使用 Tailwind CSS
- 代码要适合后续上线部署
