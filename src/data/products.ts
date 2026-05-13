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
  category: "signature" | "seasonal";
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
    id: "classic-egg-yolk-pastry",
    name: "经典蛋黄酥",
    englishName: "Classic Egg Yolk Pastry",
    tagline: "温哥华手作蛋黄酥，层层酥皮，咸甜平衡。",
    flavor: "红豆沙 / 莲蓉 + 咸蛋黄",
    occasion: "日常分享 / 礼盒主力 / 复购款",
    ctaLabel: "加入试吃名单",
    href: "/reserve",
    theme: "gold",
    category: "signature",
    status: "试吃名单收集中",
  },
  {
    id: "maple-walnut-egg-yolk-pastry",
    name: "枫糖核桃蛋黄酥",
    englishName: "Maple Walnut Egg Yolk Pastry",
    tagline: "一颗经典，一颗带着枫糖核桃香气的加拿大限定。",
    flavor: "低糖豆沙 + 咸蛋黄 + 枫糖核桃碎",
    occasion: "加拿大限定 / 品牌记忆点 / 节庆礼盒",
    ctaLabel: "加入试吃名单",
    href: "/reserve",
    theme: "jade",
    category: "signature",
    status: "加拿大限定预告",
  },
  {
    id: "rose-red-bean-peony-pastry",
    name: "经典玫瑰豆沙牡丹花酥",
    englishName: "Rose Red Bean Peony Pastry",
    tagline: "花开成酥，一口东方。",
    flavor: "玫瑰香气 + 轻甜豆沙",
    occasion: "品牌门面 / 首页视觉 / 礼盒核心",
    ctaLabel: "查看点心系列",
    href: "/products#signature-pastries",
    theme: "berry",
    category: "signature",
    status: "招牌视觉款",
  },
  {
    id: "blueberry-cloud-blossom-pastry",
    name: "蓝莓云花酥",
    englishName: "Blueberry Cloud Blossom Pastry",
    tagline: "把 BC 蓝莓做成一朵可以入口的中式花酥。",
    flavor: "BC 蓝莓 + 乳酪 + 轻甜馅心",
    occasion: "本地季节限定 / 小红书出图 / IG 传播",
    ctaLabel: "查看点心系列",
    href: "/products#seasonal-flavours",
    theme: "deepJade",
    category: "signature",
    status: "季节风味预告",
  },
  {
    id: "classic-pineapple-cake",
    name: "经典凤梨酥",
    englishName: "Classic Pineapple Cake",
    tagline: "酸甜果香，轻盈细腻，适合作为温柔的伴手礼。",
    flavor: "经典凤梨馅",
    occasion: "日常伴手礼 / 西人友好 / 企业礼赠",
    ctaLabel: "加入礼盒提醒",
    href: "/reserve",
    theme: "gold",
    category: "signature",
    status: "礼盒方向测试中",
  },
  {
    id: "cranberry-pineapple-cake",
    name: "蔓越莓凤梨酥",
    englishName: "Cranberry Pineapple Cake",
    tagline: "酸甜果香，中式酥点里的加拿大秋天。",
    flavor: "凤梨馅 + 蔓越莓风味",
    occasion: "秋冬限定 / 节庆礼盒 / 企业客户",
    ctaLabel: "加入礼盒提醒",
    href: "/reserve",
    theme: "berry",
    category: "signature",
    status: "秋冬限定预告",
  },
  {
    id: "maple-walnut-short-pastry",
    name: "枫糖核桃酥",
    englishName: "Maple Walnut Short Pastry",
    tagline: "酥香轻脆，是最适合下午茶和试吃分享的一枚小点。",
    flavor: "枫糖 + 核桃",
    occasion: "免费试吃 / 下午茶 / 课程伴手礼",
    ctaLabel: "加入试吃名单",
    href: "/reserve",
    theme: "brown",
    category: "signature",
    status: "试吃分享款",
  },
];

export const strawberryPeachBlossom: PastryProduct = {
  id: "strawberry-peach-blossom-pastry",
  name: "草莓桃花酥",
  englishName: "Strawberry Peach Blossom Pastry",
  tagline: "夏天的第一朵桃花，藏着温哥华草莓的香气。",
  flavor: "草莓果酱 / 草莓乳酪 / 草莓豆沙",
  occasion: "春夏限定 / 女生喜欢 / 内容传播",
  ctaLabel: "加入季节风味提醒",
  href: "/reserve",
  theme: "berry",
  category: "seasonal",
  status: "春夏限定预告",
};

export const seasonalProducts: PastryProduct[] = [
  signatureProducts[3],
  strawberryPeachBlossom,
  signatureProducts[5],
  signatureProducts[1],
];

export const products: PastryProduct[] = [...signatureProducts, strawberryPeachBlossom];

export const mooncakePreview: MooncakeProduct[] = [
  {
    id: "classic-lotus-mooncake",
    name: "经典莲蓉月饼",
    englishName: "Classic Lotus Mooncake",
    tagline: "细腻莲蓉，温润回甘，是记忆里最经典的一枚中秋月饼。",
    status: "即将开放预订",
  },
  {
    id: "traditional-five-nut-mooncake",
    name: "古法五仁月饼",
    englishName: "Traditional Five-Nut Mooncake",
    tagline: "坚果果仁层次丰富，少甜不腻，把传统五仁做得更清爽。",
    status: "即将开放预订",
  },
  {
    id: "low-sugar-taro-mooncake",
    name: "低糖芋泥月饼",
    englishName: "Low-Sugar Taro Mooncake",
    tagline: "绵密芋泥，轻甜柔软，是更适合年轻人口味的新中式月饼。",
    status: "即将开放预订",
  },
  {
    id: "winter-melon-mooncake",
    name: "冬蓉月饼",
    englishName: "Winter Melon Mooncake",
    tagline: "清甜冬蓉，细腻不腻，是老味道里温柔的一口。",
    status: "即将开放预订",
  },
  {
    id: "pineapple-mooncake",
    name: "凤梨月饼",
    englishName: "Pineapple Mooncake",
    tagline: "酸甜凤梨馅，果香明亮，是更轻盈的中秋选择。",
    status: "即将开放预订",
  },
];

export const giftBoxes: GiftBoxProduct[] = [
  {
    id: "mid-autumn-4pc-gift-box",
    name: "经典四枚礼盒",
    englishName: "Classic 4-Piece Gift Box",
    contents: ["莲蓉 × 1", "五仁 × 1", "芋泥 × 1", "凤梨 × 1"],
    occasion: "轻量送礼 / 朋友分享 / 第一次认识云酥坊",
    ctaLabel: "加入中秋预订名单",
    href: "/reserve",
  },
  {
    id: "mid-autumn-6pc-gift-box",
    name: "东方六枚礼盒",
    englishName: "Oriental 6-Piece Gift Box",
    contents: ["莲蓉 × 2", "五仁 × 1", "芋泥 × 1", "冬蓉 × 1", "凤梨 × 1"],
    occasion: "家庭分享 / 节日拜访 / 温柔中秋心意",
    ctaLabel: "Notify Me When Pre-Order Opens",
    href: "/reserve",
  },
  {
    id: "mid-autumn-8pc-gift-box",
    name: "云酥中秋八枚礼盒",
    englishName: "Yunsucake 8-Piece Gift Box",
    contents: ["莲蓉 × 2", "五仁 × 2", "芋泥 × 2", "凤梨 × 1", "冬蓉 × 1"],
    occasion: "节庆礼赠 / 企业心意 / 中秋聚会",
    ctaLabel: "咨询企业礼盒",
    href: "/reserve",
  },
];

export const featuredMidAutumnGift: GiftBoxProduct = {
  id: "mid-autumn-double-layer-gift-box",
  name: "云酥中秋双层礼盒",
  englishName: "Yunsucake Double-Layer Mid-Autumn Gift",
  contents: ["上层：月饼", "下层：蛋黄酥 / 牡丹花酥 / 凤梨酥"],
  occasion: "中秋重点礼盒 / 企业礼赠 / 高级节庆分享",
  ctaLabel: "加入中秋预订名单",
  href: "/reserve",
  featured: true,
  description: "上层：月饼。下层：蛋黄酥 / 牡丹花酥 / 凤梨酥。",
  tagline: "别人卖月饼，我们卖的是一整盒新中式中秋心意。",
};
