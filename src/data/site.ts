export const siteConfig = {
  name: "云酥记",
  englishName: "Yun Su Ji",
  description:
    "云酥记是一个面向温哥华市场的新中式手作甜点品牌，计划于 2026 年 7-8 月开启小批量试吃与预约意向收集，探索更轻盈、更温柔的东方酥香。",
  locale: "zh-CN",
  market: "Vancouver",
  navItems: [
    { label: "首页", href: "/" },
    { label: "产品系列", href: "/products" },
    { label: "关于云酥记", href: "/about" },
    { label: "温哥华预订", href: "/reserve" },
    { label: "活动 / 快闪", href: "/events" },
    { label: "联系我们", href: "/contact" },
  ],
} as const;

export const seoKeywords = [
  "云酥记",
  "新中式甜点",
  "温哥华甜点",
  "手作甜点",
  "东方点心",
  "Vancouver dessert",
  "Chinese pastry",
  "Yun Su Ji",
] as const;

export const brandPalette = {
  riceWhite: "#f8f3ea",
  mistGray: "#d8d2c8",
  roseBean: "#9f4f4a",
  softGold: "#c8a968",
  ink: "#24201d",
} as const;
