export type ProductTheme = "jade" | "deepJade" | "gold" | "brown" | "berry";

export type PastryProduct = {
  id: string;
  name: string;
  englishName: string;
  tagline: string;
  flavor: string;
  occasion: string;
  ctaLabel: string;
  href: string;
  theme: ProductTheme;
  category: "flower" | "interest";
  status: string;
};

export type MooncakeProduct = {
  id: string;
  name: string;
  englishName: string;
  tagline: string;
  status: string;
};

export type GiftBoxProduct = {
  id: string;
  name: string;
  englishName: string;
  contents: string[];
  occasion: string;
  ctaLabel: string;
  href: string;
  featured?: boolean;
  description?: string;
  tagline?: string;
};

export const signatureProducts: PastryProduct[] = [
  {
    id: "egg-yolk-pastry",
    name: "蛋黄酥",
    englishName: "Egg Yolk Pastry",
    tagline: "咸香绵密，经典不过时",
    flavor: "咸蛋黄 × 红豆沙",
    occasion: "手作试吃 / 日常分享 / 节令礼盒",
    ctaLabel: "了解口味",
    href: "/products/classic-red-bean-egg-yolk-pastry",
    theme: "gold",
    category: "flower",
    status: "首批试吃登记中",
  },
  {
    id: "pineapple-pastry",
    name: "凤梨酥",
    englishName: "Pineapple Pastry",
    tagline: "酸甜果香，酥润清爽",
    flavor: "凤梨 × 冬瓜",
    occasion: "伴手礼 / 下午茶 / 企业分享",
    ctaLabel: "了解口味",
    href: "/reserve",
    theme: "brown",
    category: "flower",
    status: "首批试吃登记中",
  },
  {
    id: "matcha-pastry",
    name: "抹茶酥",
    englishName: "Matcha Pastry",
    tagline: "茶香微苦，层次丰富",
    flavor: "抹茶酥皮 × 红豆沙 × 咸蛋黄",
    occasion: "茶点搭配 / 低甜偏好 / 新中式分享",
    ctaLabel: "了解口味",
    href: "/reserve",
    theme: "deepJade",
    category: "flower",
    status: "首批试吃登记中",
  },
  {
    id: "peach-blossom-pastry",
    name: "桃花酥",
    englishName: "Peach Blossom Pastry",
    tagline: "粉色花形，甜而不腻",
    flavor: "桃花造型 × 红豆沙",
    occasion: "春夏分享 / 女生礼物 / 内容拍摄",
    ctaLabel: "了解口味",
    href: "/reserve",
    theme: "berry",
    category: "flower",
    status: "首批试吃登记中",
  },
  {
    id: "lotus-pastry",
    name: "荷花酥",
    englishName: "Lotus Pastry",
    tagline: "层层开酥，莲香温润",
    flavor: "荷花造型 × 莲蓉馅",
    occasion: "东方茶席 / 节令分享 / 品牌试吃",
    ctaLabel: "了解口味",
    href: "/reserve",
    theme: "jade",
    category: "flower",
    status: "首批试吃登记中",
  },
  {
    id: "peony-pastry",
    name: "牡丹花酥",
    englishName: "Peony Pastry",
    tagline: "花开酥香，端庄雅致",
    flavor: "牡丹花型 × 豆沙馅",
    occasion: "品牌门面 / 礼盒核心 / 试吃主推",
    ctaLabel: "了解口味",
    href: "/reserve",
    theme: "berry",
    category: "flower",
    status: "首批试吃登记中",
  },
];

export const tastingInterestProducts: PastryProduct[] = [
  {
    id: "flower-pastry-series",
    name: "花酥系列",
    englishName: "Flower Pastries",
    tagline: "想优先了解花酥试吃名额",
    flavor: "蛋黄酥 / 凤梨酥 / 抹茶酥 / 花型酥",
    occasion: "新品试吃登记",
    ctaLabel: "提交试吃登记",
    href: "/reserve",
    theme: "jade",
    category: "interest",
    status: "试吃登记",
  },
  {
    id: "mooncake-series",
    name: "月饼系列",
    englishName: "Mooncake Series",
    tagline: "想收到中秋月饼官宣通知",
    flavor: "莲蓉 / 豆沙 / 五仁 / 冬翅",
    occasion: "上新通知",
    ctaLabel: "预约上新通知",
    href: "/reserve",
    theme: "gold",
    category: "interest",
    status: "官宣提醒",
  },
  {
    id: "all-series",
    name: "花酥 / 月饼都想了解",
    englishName: "All Yunsucake Updates",
    tagline: "想同时收到试吃与月饼上新消息",
    flavor: "花酥系列 + 月饼系列",
    occasion: "综合通知",
    ctaLabel: "提交试吃登记",
    href: "/reserve",
    theme: "deepJade",
    category: "interest",
    status: "综合提醒",
  },
];

export const products: PastryProduct[] = tastingInterestProducts;

export const seasonalProducts: PastryProduct[] = [
  signatureProducts[3],
  signatureProducts[4],
  signatureProducts[5],
];

export const mooncakePreview: MooncakeProduct[] = [
  {
    id: "lotus-mooncake",
    name: "莲蓉月饼",
    englishName: "Lotus Mooncake",
    tagline: "细腻莲香，滋润味蜜",
    status: "即将官宣",
  },
  {
    id: "red-bean-mooncake",
    name: "豆沙月饼",
    englishName: "Red Bean Mooncake",
    tagline: "经典豆沙，甜香柔和",
    status: "敬请期待",
  },
  {
    id: "five-nut-mooncake",
    name: "五仁月饼",
    englishName: "Five-Nut Mooncake",
    tagline: "果仁丰富，传统老味",
    status: "可预约通知",
  },
  {
    id: "winter-wing-mooncake",
    name: "冬翅月饼",
    englishName: "Winter Wing Mooncake",
    tagline: "冬瓜滑甜，风味独特",
    status: "筹备中",
  },
];

export const giftBoxes: GiftBoxProduct[] = [
  {
    id: "mid-autumn-4pc-gift-box",
    name: "经典四枚礼盒",
    englishName: "Classic 4-Piece Gift Box",
    contents: ["莲蓉 × 1", "豆沙 × 1", "五仁 × 1", "冬翅 × 1"],
    occasion: "中秋预展示 / 轻量送礼 / 预约通知",
    ctaLabel: "加入中秋预订名单",
    href: "/reserve",
  },
  {
    id: "mid-autumn-6pc-gift-box",
    name: "东方六枚礼盒",
    englishName: "Oriental 6-Piece Gift Box",
    contents: ["莲蓉 × 2", "豆沙 × 2", "五仁 × 1", "冬翅 × 1"],
    occasion: "家庭分享 / 节日拜访 / 温柔中秋心意",
    ctaLabel: "预约上新通知",
    href: "/reserve",
  },
  {
    id: "mid-autumn-8pc-gift-box",
    name: "云酥中秋八枚礼盒",
    englishName: "Yunsucake 8-Piece Gift Box",
    contents: ["莲蓉 × 2", "豆沙 × 2", "五仁 × 2", "冬翅 × 2"],
    occasion: "节庆礼赠 / 企业心意 / 中秋聚会",
    ctaLabel: "咨询企业礼盒",
    href: "/reserve",
  },
];

export const featuredMidAutumnGift: GiftBoxProduct = {
  id: "mid-autumn-double-layer-gift-box",
  name: "云酥中秋双层礼盒",
  englishName: "Yunsucake Double-Layer Mid-Autumn Gift",
  contents: ["上层：月饼", "下层：花酥 / 蛋黄酥 / 凤梨酥"],
  occasion: "中秋重点礼盒 / 企业礼赠 / 高级节庆分享",
  ctaLabel: "预约上新通知",
  href: "/reserve",
  featured: true,
  description: "上层呈现四款传统月饼风味，下层搭配云酥坊花酥与手作酥点。",
  tagline: "一盒新中式中秋心意，正在筹备中。",
};
