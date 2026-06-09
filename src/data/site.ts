export const siteConfig = {
  name: "云酥坊",
  englishName: "yunsucake",
  description:
    "云酥坊 Yun Su Fang 是面向加拿大华人客户的中式手工酥点品牌，主打蛋黄酥、花酥、凤梨酥、抹茶酥与中秋月饼礼盒。",
  locale: "zh-CN",
  market: "Vancouver",
  navItems: [
    { label: "首页", href: "/" },
    { label: "点心系列", href: "/products" },
    { label: "新品尝鲜", href: "/reserve" },
    { label: "品牌故事", href: "/about" },
    { label: "活动 / 快闪", href: "/events" },
    { label: "联系我们", href: "/contact" },
  ],
} as const;

export const seoKeywords = [
  "云酥坊",
  "yunsucake",
  "新中式甜点",
  "新中式酥点",
  "加拿大中式酥点",
  "加拿大手工酥点",
  "加拿大月饼礼盒",
  "加拿大华人伴手礼",
  "温哥华甜点",
  "手作点心",
  "东方点心",
  "蛋黄酥",
  "中秋月饼",
  "中秋礼盒",
  "Vancouver dessert",
  "Chinese pastry",
  "yunsucake",
] as const;

export const brandPalette = {
  riceWhite: "#f8f1e6",
  mistGray: "#d8d2c8",
  roseBean: "#6f9b83",
  softGold: "#c9ad72",
  ink: "#163c33",
} as const;
