export type ImageRatio = "1:1" | "3:2" | "4:5" | "16:9";

export type SiteImage = {
  id: string;
  src: string;
  alt: string;
  usage: string;
  ratio?: ImageRatio;
};

export const fallbackImage: SiteImage = {
  id: "hero-home-yunsucake",
  src: "/images/hero/hero-home-yunsucake.png",
  alt: "云酥坊新中式手作点心品牌主视觉",
  usage: "全站图片缺失时的品牌占位图",
  ratio: "4:5",
};

export const heroHome: SiteImage = {
  id: "hero-home-yunsucake",
  src: "/images/hero/hero-home-yunsucake.png",
  alt: "云酥坊首页蛋黄酥牡丹花酥与中秋月饼主视觉",
  usage: "首页 Hero 主视觉",
  ratio: "4:5",
};

export const signatureProducts: SiteImage[] = [
  {
    id: "classic-egg-yolk-pastry",
    src: "/images/products/classic-egg-yolk-pastry.png",
    alt: "经典蛋黄酥温哥华手作酥点产品图",
    usage: "招牌酥点产品图",
    ratio: "1:1",
  },
  {
    id: "maple-walnut-egg-yolk-pastry",
    src: "/images/products/maple-walnut-egg-yolk-pastry.png",
    alt: "枫糖核桃蛋黄酥加拿大限定产品图",
    usage: "招牌酥点产品图",
    ratio: "1:1",
  },
  {
    id: "rose-red-bean-peony-pastry",
    src: "/images/products/rose-red-bean-peony-pastry.png",
    alt: "经典玫瑰豆沙牡丹花酥产品图",
    usage: "招牌酥点产品图",
    ratio: "1:1",
  },
  {
    id: "blueberry-cloud-blossom-pastry",
    src: "/images/products/blueberry-cloud-blossom-pastry.png",
    alt: "蓝莓云花酥本地季节风味产品图",
    usage: "招牌酥点与季节风味产品图",
    ratio: "1:1",
  },
  {
    id: "classic-pineapple-cake",
    src: "/images/products/classic-pineapple-cake.png",
    alt: "经典凤梨酥伴手礼产品图",
    usage: "招牌酥点产品图",
    ratio: "1:1",
  },
  {
    id: "cranberry-pineapple-cake",
    src: "/images/products/cranberry-pineapple-cake.png",
    alt: "蔓越莓凤梨酥秋冬限定产品图",
    usage: "招牌酥点与季节风味产品图",
    ratio: "1:1",
  },
  {
    id: "maple-walnut-short-pastry",
    src: "/images/products/maple-walnut-short-pastry.png",
    alt: "枫糖核桃酥下午茶手作点心产品图",
    usage: "招牌酥点产品图",
    ratio: "1:1",
  },
];

export const seasonalProducts: SiteImage[] = [
  signatureProducts[3],
  {
    id: "strawberry-peach-blossom-pastry",
    src: "/images/seasonal/strawberry-peach-blossom-pastry.png",
    alt: "草莓桃花酥春夏季节风味产品图",
    usage: "季节风味产品图",
    ratio: "1:1",
  },
  signatureProducts[5],
  signatureProducts[1],
];

export const mooncakePreview: SiteImage[] = [
  {
    id: "classic-lotus-mooncake",
    src: "/images/mooncakes/classic-lotus-mooncake.png",
    alt: "经典莲蓉月饼中秋预告产品图",
    usage: "中秋月饼预展示",
    ratio: "1:1",
  },
  {
    id: "traditional-five-nut-mooncake",
    src: "/images/mooncakes/traditional-five-nut-mooncake.png",
    alt: "古法五仁月饼中秋预告产品图",
    usage: "中秋月饼预展示",
    ratio: "1:1",
  },
  {
    id: "low-sugar-taro-mooncake",
    src: "/images/mooncakes/low-sugar-taro-mooncake.png",
    alt: "低糖芋泥月饼中秋预告产品图",
    usage: "中秋月饼预展示",
    ratio: "1:1",
  },
  {
    id: "winter-melon-mooncake",
    src: "/images/mooncakes/winter-melon-mooncake.png",
    alt: "冬蓉月饼中秋预告产品图",
    usage: "中秋月饼预展示",
    ratio: "1:1",
  },
  {
    id: "pineapple-mooncake",
    src: "/images/mooncakes/pineapple-mooncake.png",
    alt: "凤梨月饼中秋预告产品图",
    usage: "中秋月饼预展示",
    ratio: "1:1",
  },
];

export const giftBoxes: SiteImage[] = [
  {
    id: "mid-autumn-4pc-gift-box",
    src: "/images/gift-boxes/mid-autumn-4pc-gift-box.png",
    alt: "云酥坊经典四枚中秋礼盒预展示图",
    usage: "中秋礼盒预展示",
    ratio: "4:5",
  },
  {
    id: "mid-autumn-6pc-gift-box",
    src: "/images/gift-boxes/mid-autumn-6pc-gift-box.png",
    alt: "云酥坊东方六枚中秋礼盒预展示图",
    usage: "中秋礼盒预展示",
    ratio: "4:5",
  },
  {
    id: "mid-autumn-8pc-gift-box",
    src: "/images/gift-boxes/mid-autumn-8pc-gift-box.png",
    alt: "云酥坊八枚中秋礼盒预展示图",
    usage: "中秋礼盒预展示",
    ratio: "4:5",
  },
];

export const featuredMidAutumnGift: SiteImage = {
  id: "mid-autumn-double-layer-gift-box",
  src: "/images/gift-boxes/mid-autumn-double-layer-gift-box.png",
  alt: "云酥坊中秋双层礼盒月饼与酥点预展示图",
  usage: "中秋双层礼盒重点展示",
  ratio: "4:5",
};

export const productImageMap: Record<string, SiteImage> = [
  ...signatureProducts,
  ...seasonalProducts,
  ...mooncakePreview,
  ...giftBoxes,
  featuredMidAutumnGift,
].reduce<Record<string, SiteImage>>((acc, image) => {
  acc[image.id] = image;
  return acc;
}, {});

export const siteImages = [
  heroHome,
  ...signatureProducts,
  ...seasonalProducts.filter((image) => image.id === "strawberry-peach-blossom-pastry"),
  ...mooncakePreview,
  ...giftBoxes,
  featuredMidAutumnGift,
];

export const heroImages = {
  primary: heroHome,
  secondary: heroHome,
};

export const productImages = productImageMap;

export const pageMoodImages = {
  aboutStory: {
    id: "about-story-01",
    src: "/images/pages/about-story-01.png",
    alt: "云酥坊品牌故事东方手作点心氛围图",
    usage: "关于页面品牌故事",
    ratio: "3:2",
  },
  aboutFounder: {
    id: "about-story-02",
    src: "/images/pages/about-story-02.png",
    alt: "云酥坊温哥华计划生活方式氛围图",
    usage: "关于页面主理人与温哥华计划",
    ratio: "4:5",
  },
  reserveMood: {
    id: "reserve-mood-01",
    src: "/images/pages/reserve-mood-01.png",
    alt: "云酥坊温哥华预约意向页面氛围图",
    usage: "预约页面说明视觉",
    ratio: "4:5",
  },
  eventsMood: {
    id: "events-mood-01",
    src: "/images/pages/events-mood-01.png",
    alt: "云酥坊活动快闪计划点心礼盒氛围图",
    usage: "活动页面企划视觉",
    ratio: "3:2",
  },
  contactMood: {
    id: "contact-mood-01",
    src: "/images/pages/contact-mood-01.png",
    alt: "云酥坊联系页面点心礼盒氛围图",
    usage: "联系页面辅助视觉",
    ratio: "4:5",
  },
  giftboxConcept: {
    id: "giftbox-concept-01",
    src: "/images/pages/giftbox-concept-01.png",
    alt: "云酥坊新中式点心礼盒概念图",
    usage: "礼盒咨询辅助视觉",
    ratio: "4:5",
  },
  afternoonTea: {
    id: "afternoon-tea-01",
    src: "/images/pages/afternoon-tea-01.png",
    alt: "云酥坊东方下午茶分享生活方式图",
    usage: "活动与品牌生活方式视觉",
    ratio: "3:2",
  },
  brandBackground: {
    id: "brand-background-01",
    src: "/images/backgrounds/brand-background-01.png",
    alt: "云酥坊玉绿色与香槟金抽象云雾背景图",
    usage: "全站背景装饰",
    ratio: "16:9",
  },
  brandTexture: {
    id: "brand-texture-01",
    src: "/images/backgrounds/brand-texture-01.png",
    alt: "云酥坊米白纸感浅金云雾纹理图",
    usage: "全站纹理装饰",
    ratio: "1:1",
  },
} satisfies Record<string, SiteImage>;
