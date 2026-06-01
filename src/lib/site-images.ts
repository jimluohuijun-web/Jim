export type ImageRatio = "1:1" | "3:2" | "4:3" | "4:5" | "16:9";

export type SiteImage = {
  id: string;
  src: string;
  alt: string;
  usage: string;
  ratio?: ImageRatio;
};

export const fallbackImage: SiteImage = {
  id: "hero-home-yunsucake",
  src: "/images/hero/hero-home-yunsucake.webp",
  alt: "云酥坊新中式手作点心品牌主视觉",
  usage: "全站图片缺失时的品牌占位图",
  ratio: "4:5",
};

export const heroHome: SiteImage = {
  id: "home-hero-main",
  src: "/images/home/hero-main.jpg",
  alt: "云酥坊首页黑金东方酥点木托盘茶席主视觉",
  usage: "首页 Hero 主视觉",
  ratio: "16:9",
};

export const signatureProducts: SiteImage[] = [
  {
    id: "egg-yolk-pastry",
    src: "/images/products/classic-egg-yolk-pastry.webp",
    alt: "云酥坊蛋黄酥花酥系列产品图",
    usage: "花酥系列产品图",
    ratio: "1:1",
  },
  {
    id: "pineapple-pastry",
    src: "/images/products/classic-pineapple-cake.webp",
    alt: "云酥坊凤梨酥花酥系列产品图",
    usage: "花酥系列产品图",
    ratio: "1:1",
  },
  {
    id: "matcha-pastry",
    src: "/images/products/matcha-pastry.webp",
    alt: "云酥坊抹茶酥花酥系列产品图",
    usage: "花酥系列产品图",
    ratio: "1:1",
  },
  {
    id: "peach-blossom-pastry",
    src: "/images/seasonal/strawberry-peach-blossom-pastry.webp",
    alt: "云酥坊桃花酥花酥系列产品图",
    usage: "花酥系列产品图",
    ratio: "1:1",
  },
  {
    id: "lotus-pastry",
    src: "/images/products/lotus-pastry.webp",
    alt: "云酥坊荷花酥花酥系列产品图",
    usage: "花酥系列产品图",
    ratio: "1:1",
  },
  {
    id: "peony-pastry",
    src: "/images/products/rose-red-bean-peony-pastry.webp",
    alt: "云酥坊牡丹花酥花酥系列产品图",
    usage: "花酥系列产品图",
    ratio: "1:1",
  },
];

export const seasonalProducts: SiteImage[] = [
  signatureProducts[3],
  signatureProducts[4],
  signatureProducts[5],
];

export const mooncakePreview: SiteImage[] = [
  {
    id: "lotus-mooncake",
    src: "/images/mooncakes/classic-lotus-mooncake.webp",
    alt: "云酥坊莲蓉月饼中秋官宣产品图",
    usage: "中秋月饼预展示",
    ratio: "1:1",
  },
  {
    id: "egg-yolk-lotus-mooncake",
    src: "/images/products/mooncake-combo-1-egg-yolk-lotus.jpg",
    alt: "云酥坊蛋黄莲蓉月饼整颗蛋黄切面中秋官宣产品图",
    usage: "中秋月饼预展示",
    ratio: "1:1",
  },
  {
    id: "red-bean-mooncake",
    src: "/images/products/mooncake-combo-4-red-bean.jpg",
    alt: "云酥坊豆沙月饼深红豆沙切面中秋官宣产品图",
    usage: "中秋月饼预展示",
    ratio: "1:1",
  },
  {
    id: "fresh-meat-mooncake",
    src: "/images/products/fresh-meat-mooncake/fresh-meat-mooncake-hero.webp",
    alt: "云酥坊苏式鲜肉月饼中秋官宣产品图",
    usage: "中秋月饼预展示",
    ratio: "1:1",
  },
  {
    id: "five-nut-mooncake",
    src: "/images/products/mooncake-combo-2-five-kernel.jpg",
    alt: "云酥坊五仁月饼中秋官宣产品图",
    usage: "中秋月饼预展示",
    ratio: "1:1",
  },
  {
    id: "five-nuts-mooncake",
    src: "/images/products/mooncake-combo-2-five-kernel.jpg",
    alt: "云酥坊五仁月饼五仁颗粒切面中秋官宣产品图",
    usage: "中秋月饼预展示",
    ratio: "1:1",
  },
  {
    id: "winter-wing-mooncake",
    src: "/images/products/winter-melon-feature-1.jpg",
    alt: "云酥坊冬翅月饼冬瓜蓉丝感切面中秋官宣产品图",
    usage: "中秋月饼预展示",
    ratio: "1:1",
  },
  {
    id: "winter-melon-mooncake",
    src: "/images/products/winter-melon-feature-1.jpg",
    alt: "云酥坊冬翅月饼冬瓜蓉丝感切面中秋官宣产品图",
    usage: "中秋月饼预展示",
    ratio: "1:1",
  },
];

export const giftBoxes: SiteImage[] = [
  {
    id: "mid-autumn-4pc-gift-box",
    src: "/images/gift-boxes/mid-autumn-4pc-gift-box.webp",
    alt: "云酥坊经典四枚中秋礼盒预展示图",
    usage: "中秋礼盒预展示",
    ratio: "4:5",
  },
  {
    id: "mid-autumn-6pc-gift-box",
    src: "/images/gift-boxes/mid-autumn-6pc-gift-box.webp",
    alt: "云酥坊东方六枚中秋礼盒预展示图",
    usage: "中秋礼盒预展示",
    ratio: "4:5",
  },
  {
    id: "mid-autumn-8pc-gift-box",
    src: "/images/gift-boxes/mid-autumn-8pc-gift-box.webp",
    alt: "云酥坊八枚中秋礼盒预展示图",
    usage: "中秋礼盒预展示",
    ratio: "4:5",
  },
];

export const featuredMidAutumnGift: SiteImage = {
  id: "mid-autumn-double-layer-gift-box",
  src: "/images/gift-boxes/mid-autumn-double-layer-gift-box.webp",
  alt: "云酥坊中秋双层礼盒月饼与酥点预展示图",
  usage: "中秋双层礼盒重点展示",
  ratio: "4:5",
};

export const mooncakeAnnouncementBanner: SiteImage = {
  id: "mooncake-announcement-banner",
  src: "/images/mooncakes/mooncake-announcement-banner.webp",
  alt: "云酥坊中秋月饼系列官宣横幅图",
  usage: "首页中秋月饼官宣横幅背景",
  ratio: "16:9",
};

export const productImageMap: Record<string, SiteImage> = [
  ...signatureProducts,
  ...seasonalProducts,
  ...mooncakePreview,
  mooncakeAnnouncementBanner,
  ...giftBoxes,
  featuredMidAutumnGift,
  {
    id: "flower-pastry-series",
    src: "/images/products/rose-red-bean-peony-pastry.webp",
    alt: "云酥坊花酥系列试吃登记图",
    usage: "试吃登记产品兴趣选项",
    ratio: "1:1",
  } satisfies SiteImage,
  {
    id: "mooncake-series",
    src: "/images/mooncakes/classic-lotus-mooncake.webp",
    alt: "云酥坊月饼系列上新通知图",
    usage: "试吃登记产品兴趣选项",
    ratio: "1:1",
  } satisfies SiteImage,
  {
    id: "all-series",
    src: "/images/hero/hero-home-yunsucake.webp",
    alt: "云酥坊花酥与月饼系列综合通知图",
    usage: "试吃登记产品兴趣选项",
    ratio: "1:1",
  } satisfies SiteImage,
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
    src: "/images/home/brand-story.jpg",
    alt: "云酥坊品牌故事黑金茶席中式酥点图",
    usage: "关于页面品牌故事",
    ratio: "16:9",
  },
  aboutFounder: {
    id: "about-story-02",
    src: "/images/pages/about-story-02.webp",
    alt: "云酥坊温哥华计划生活方式氛围图",
    usage: "关于页面主理人与温哥华计划",
    ratio: "4:5",
  },
  reserveMood: {
    id: "reserve-mood-01",
    src: "/images/pages/reserve-mood-01.webp",
    alt: "云酥坊温哥华预约意向页面氛围图",
    usage: "预约页面说明视觉",
    ratio: "4:5",
  },
  eventsMood: {
    id: "events-mood-01",
    src: "/images/pages/events-mood-01.webp",
    alt: "云酥坊活动快闪计划点心礼盒氛围图",
    usage: "活动页面企划视觉",
    ratio: "3:2",
  },
  eventsTasting: {
    id: "events-tasting",
    src: "/images/pages/events-tasting.jpg",
    alt: "云酥坊新品试吃会中式糕点茶席活动图",
    usage: "活动页面新品试吃会卡片",
    ratio: "3:2",
  },
  eventsGiftPreorder: {
    id: "events-gift-preorder",
    src: "/images/pages/events-gift-preorder.jpg",
    alt: "云酥坊节日礼盒预订活动图",
    usage: "活动页面节日礼盒预订卡片",
    ratio: "3:2",
  },
  eventsCorporateTea: {
    id: "events-corporate-tea",
    src: "/images/pages/events-corporate-tea.jpg",
    alt: "云酥坊企业下午茶商务茶歇活动图",
    usage: "活动页面企业下午茶卡片",
    ratio: "3:2",
  },
  eventsPopUpMarket: {
    id: "events-pop-up-market",
    src: "/images/pages/events-pop-up-market.jpg",
    alt: "云酥坊快闪市集新中式糕点展示图",
    usage: "活动页面快闪市集卡片",
    ratio: "3:2",
  },
  contactMood: {
    id: "contact-mood-01",
    src: "/images/pages/contact-mood-01.webp",
    alt: "云酥坊联系页面点心礼盒氛围图",
    usage: "联系页面辅助视觉",
    ratio: "4:5",
  },
  giftboxConcept: {
    id: "giftbox-concept-01",
    src: "/images/pages/giftbox-concept-01.webp",
    alt: "云酥坊新中式点心礼盒概念图",
    usage: "礼盒咨询辅助视觉",
    ratio: "4:5",
  },
  afternoonTea: {
    id: "afternoon-tea-01",
    src: "/images/pages/afternoon-tea-01.webp",
    alt: "云酥坊东方下午茶分享生活方式图",
    usage: "活动与品牌生活方式视觉",
    ratio: "3:2",
  },
  brandBackground: {
    id: "brand-background-01",
    src: "/images/backgrounds/brand-background-01.webp",
    alt: "云酥坊玉绿色与香槟金抽象云雾背景图",
    usage: "全站背景装饰",
    ratio: "16:9",
  },
  brandTexture: {
    id: "brand-texture-01",
    src: "/images/backgrounds/brand-texture-01.webp",
    alt: "云酥坊米白纸感浅金云雾纹理图",
    usage: "全站纹理装饰",
    ratio: "1:1",
  },
} satisfies Record<string, SiteImage>;
