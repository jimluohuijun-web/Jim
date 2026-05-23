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
  href: string;
  ctaLabel?: string;
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

export type ProductCatalogCategory = "pastry" | "flower-pastry" | "mooncake" | "gift";

export type ProductCatalogItem = {
  id: string;
  name: string;
  shortName: string;
  category: ProductCatalogCategory;
  badge?: string;
  description: string;
  href: string;
  image: string;
  alt: string;
  featured?: boolean;
  homeFeatured?: boolean;
  sortOrder?: number;
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
    href: "/products/classic-egg-yolk-pastry",
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
    href: "/products/classic-pineapple-cake",
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
    href: "/products/matcha-pastry",
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
    href: "/products/peony-pastry",
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
    id: "egg-yolk-lotus-mooncake",
    name: "蛋黄莲蓉月饼",
    englishName: "Egg Yolk Lotus Mooncake",
    tagline: "整颗蛋黄，低糖莲蓉",
    status: "即将官宣",
    href: "/products/egg-yolk-lotus-mooncake",
    ctaLabel: "查看详情",
  },
  {
    id: "red-bean-mooncake",
    name: "经典豆沙月饼",
    englishName: "Red Bean Mooncake",
    tagline: "经典豆沙，甜香柔和",
    status: "敬请期待",
    href: "/products/red-bean-mooncake",
    ctaLabel: "查看详情",
  },
  {
    id: "five-nuts-mooncake",
    name: "经典五仁月饼",
    englishName: "Five-Nut Mooncake",
    tagline: "果仁丰富，传统老味",
    status: "可预约通知",
    href: "/products/five-nuts-mooncake",
    ctaLabel: "查看详情",
  },
  {
    id: "winter-melon-mooncake",
    name: "特色冬翅月饼",
    englishName: "Winter Wing Mooncake",
    tagline: "冬瓜滑甜，风味独特",
    status: "筹备中",
    href: "/products/winter-melon-mooncake",
    ctaLabel: "查看详情",
  },
  {
    id: "fresh-meat-mooncake",
    name: "鲜肉月饼",
    englishName: "Fresh Meat Mooncake",
    tagline: "苏式酥皮，鲜肉爆汁",
    status: "试吃预订中",
    href: "/products/suzhou-fresh-meat-mooncake",
    ctaLabel: "查看详情",
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
    href: "/contact",
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

export const productCatalog: ProductCatalogItem[] = [
  {
    id: "classic-egg-yolk-pastry",
    name: "经典蛋黄酥",
    shortName: "蛋黄酥",
    category: "pastry",
    badge: "人气精选",
    description: "整颗咸蛋黄搭配低糖红豆沙，咸甜平衡，层层酥香。",
    href: "/products/classic-egg-yolk-pastry",
    image: "/images/products/egg-yolk-pastry/hero.jpg",
    alt: "云酥坊经典蛋黄酥产品图",
    featured: true,
    homeFeatured: true,
    sortOrder: 10,
  },
  {
    id: "classic-pineapple-cake",
    name: "经典凤梨酥",
    shortName: "凤梨酥",
    category: "pastry",
    badge: "伴手礼",
    description: "凤梨果香酸甜清爽，馅多皮薄，适合日常分享与送礼。",
    href: "/products/classic-pineapple-cake",
    image: "/images/products/pineapple-cake/hero.jpg",
    alt: "云酥坊经典凤梨酥产品图",
    featured: true,
    homeFeatured: true,
    sortOrder: 20,
  },
  {
    id: "matcha-pastry",
    name: "抹茶酥",
    shortName: "抹茶酥",
    category: "pastry",
    description: "抹茶酥皮、红豆沙与咸蛋黄组合，茶香微苦，回甘丰富。",
    href: "/products/matcha-pastry",
    image: "/images/products/matcha-pastry/hero.jpg",
    alt: "云酥坊抹茶酥产品图",
    featured: true,
    homeFeatured: true,
    sortOrder: 30,
  },
  {
    id: "peach-blossom-pastry",
    name: "桃花酥",
    shortName: "桃花酥",
    category: "flower-pastry",
    description: "桃花造型搭配低糖红豆沙，适合春夏分享与礼盒组合。",
    href: "/products/peach-blossom-pastry",
    image: "/images/products/peach-blossom-pastry/hero.jpg",
    alt: "云酥坊桃花酥产品图",
    sortOrder: 40,
  },
  {
    id: "lotus-pastry",
    name: "荷花酥",
    shortName: "荷花酥",
    category: "flower-pastry",
    description: "手工荷花造型与低糖莲蓉馅，适合东方茶席与节令分享。",
    href: "/products/lotus-pastry",
    image: "/images/products/lotus-pastry/hero.jpg",
    alt: "云酥坊荷花酥产品图",
    sortOrder: 50,
  },
  {
    id: "peony-pastry",
    name: "牡丹酥",
    shortName: "牡丹酥",
    category: "flower-pastry",
    description: "牡丹花型与低糖紫薯馅，寓意花开富贵，适合礼盒主推。",
    href: "/products/peony-pastry",
    image: "/images/products/peony-pastry/hero.jpg",
    alt: "云酥坊牡丹酥产品图",
    sortOrder: 60,
  },
  {
    id: "egg-yolk-lotus-mooncake",
    name: "蛋黄莲蓉月饼",
    shortName: "蛋黄莲蓉",
    category: "mooncake",
    badge: "中秋预告",
    description: "整颗蛋黄搭配低糖莲蓉，皮薄馅足，适合中秋礼赠。",
    href: "/products/egg-yolk-lotus-mooncake",
    image: "/images/products/egg-yolk-lotus-mooncake/hero.jpg",
    alt: "云酥坊蛋黄莲蓉月饼产品图",
    featured: true,
    sortOrder: 70,
  },
  {
    id: "five-nuts-mooncake",
    name: "五仁月饼",
    shortName: "五仁",
    category: "mooncake",
    description: "真材五仁、低糖不腻，保留传统广式月饼的果仁香。",
    href: "/products/five-nuts-mooncake",
    image: "/images/products/five-nuts-mooncake/hero.jpg",
    alt: "云酥坊五仁月饼产品图",
    sortOrder: 80,
  },
  {
    id: "red-bean-mooncake",
    name: "豆沙月饼",
    shortName: "豆沙",
    category: "mooncake",
    description: "真红豆慢熬成馅，经典柔和，适合家庭分享。",
    href: "/products/red-bean-mooncake",
    image: "/images/products/red-bean-mooncake/hero.jpg",
    alt: "云酥坊豆沙月饼产品图",
    sortOrder: 90,
  },
  {
    id: "fresh-meat-mooncake",
    name: "苏式鲜肉月饼",
    shortName: "鲜肉月饼",
    category: "mooncake",
    badge: "试吃预订",
    description: "苏式酥皮包裹鲜肉馅，现烤爆汁，适合中秋尝鲜与礼盒组合。",
    href: "/products/suzhou-fresh-meat-mooncake",
    image: "/images/products/fresh-meat-mooncake/fresh-meat-mooncake-hero.webp",
    alt: "云酥坊苏式鲜肉月饼产品图",
    featured: true,
    homeFeatured: true,
    sortOrder: 95,
  },
  {
    id: "winter-melon-mooncake",
    name: "冬翅月饼",
    shortName: "冬翅",
    category: "mooncake",
    description: "古法冬瓜熬冬翅，清甜解腻，丰富中秋礼盒层次。",
    href: "/products/winter-melon-mooncake",
    image: "/images/products/winter-melon-mooncake/hero.jpg",
    alt: "云酥坊冬翅月饼产品图",
    sortOrder: 100,
  },
  {
    id: "mid-autumn-gift-box",
    name: "中秋礼盒",
    shortName: "中秋礼盒",
    category: "gift",
    badge: "企业团购",
    description: "月饼与花酥组合礼盒，适合节庆礼赠、企业心意与家庭聚会。",
    href: "/products#mid-autumn-preview",
    image: "/images/gift-boxes/mid-autumn-8pc-gift-box.webp",
    alt: "云酥坊中秋礼盒产品图",
    sortOrder: 110,
  },
];
