export type ImageRatio = "1:1" | "3:2" | "4:5" | "16:9";

export type SiteImage = {
  id: string;
  src: string;
  alt: string;
  usage: string;
  ratio?: ImageRatio;
};

export const siteImages = [
  {
    id: "home-hero-01",
    src: "/images/brand/home-hero-01.png",
    alt: "云酥记首页新中式手作甜点主视觉",
    usage: "首页 Hero 首屏右侧主图",
    ratio: "4:5",
  },
  {
    id: "home-hero-02",
    src: "/images/brand/home-hero-02.png",
    alt: "云酥记首页备用新中式甜点品牌主视觉",
    usage: "首页 Hero 备用轮换图",
    ratio: "4:5",
  },
  {
    id: "product-cloud-square",
    src: "/images/products/product-cloud-square.png",
    alt: "云酥小方酥点产品图",
    usage: "首页预览卡与产品页产品图",
    ratio: "1:1",
  },
  {
    id: "product-red-bean",
    src: "/images/products/product-red-bean.png",
    alt: "豆沙雪酥新中式甜点产品图",
    usage: "首页预览卡与产品页产品图",
    ratio: "1:1",
  },
  {
    id: "product-osmanthus-roll",
    src: "/images/products/product-osmanthus-roll.png",
    alt: "桂花云卷东方下午茶甜点图",
    usage: "首页预览卡与产品页产品图",
    ratio: "1:1",
  },
  {
    id: "product-black-sesame",
    src: "/images/products/product-black-sesame.png",
    alt: "墨芝麻酥手作酥点产品图",
    usage: "产品页产品图",
    ratio: "1:1",
  },
  {
    id: "about-story-01",
    src: "/images/pages/about-story-01.png",
    alt: "云酥记品牌故事东方手作甜点氛围图",
    usage: "关于页品牌故事模块",
    ratio: "3:2",
  },
  {
    id: "about-story-02",
    src: "/images/pages/about-story-02.png",
    alt: "云酥记主理人与温哥华计划生活方式氛围图",
    usage: "关于页主理人与温哥华计划模块",
    ratio: "4:5",
  },
  {
    id: "reserve-mood-01",
    src: "/images/pages/reserve-mood-01.png",
    alt: "云酥记温哥华预约意向页面氛围图",
    usage: "预约页说明卡片辅助视觉",
    ratio: "4:5",
  },
  {
    id: "events-mood-01",
    src: "/images/pages/events-mood-01.png",
    alt: "云酥记活动快闪计划甜点礼盒氛围图",
    usage: "活动页 Hero 与活动预告辅助图",
    ratio: "3:2",
  },
  {
    id: "contact-mood-01",
    src: "/images/pages/contact-mood-01.png",
    alt: "云酥记联系页面东方甜点礼盒氛围图",
    usage: "联系页联系入口与 CTA 辅助图",
    ratio: "4:5",
  },
  {
    id: "giftbox-concept-01",
    src: "/images/pages/giftbox-concept-01.png",
    alt: "云酥记新中式甜点礼盒概念图",
    usage: "活动页与联系页礼盒咨询视觉",
    ratio: "4:5",
  },
  {
    id: "afternoon-tea-01",
    src: "/images/pages/afternoon-tea-01.png",
    alt: "云酥记东方下午茶分享生活方式图",
    usage: "活动页与关于页下午茶分享氛围",
    ratio: "3:2",
  },
  {
    id: "brand-background-01",
    src: "/images/backgrounds/brand-background-01.png",
    alt: "云酥记云雾感浅金线条抽象背景图",
    usage: "全站 section 背景与 Banner 装饰",
    ratio: "16:9",
  },
  {
    id: "social-cover-01",
    src: "/images/social/social-cover-01.png",
    alt: "云酥记品牌社交媒体封面图",
    usage: "后续社交媒体品牌封面",
    ratio: "4:5",
  },
  {
    id: "giftbox-unboxing-01",
    src: "/images/social/giftbox-unboxing-01.png",
    alt: "云酥记新中式甜点礼盒开箱氛围图",
    usage: "后续活动、联系与营销备用视觉",
    ratio: "4:5",
  },
  {
    id: "vancouver-lifestyle-01",
    src: "/images/social/vancouver-lifestyle-01.png",
    alt: "云酥记东方甜点与温哥华生活方式氛围图",
    usage: "关于页、活动页与社媒备用生活方式视觉",
    ratio: "3:2",
  },
  {
    id: "brand-texture-01",
    src: "/images/backgrounds/brand-texture-01.png",
    alt: "云酥记米白纸感浅金云雾纹理图",
    usage: "全站局部背景与装饰纹理",
    ratio: "1:1",
  },
] satisfies SiteImage[];

export const heroImages = {
  primary: siteImages[0],
  secondary: siteImages[1],
};

export const productImages: Record<string, SiteImage> = {
  "cloud-souffle-square": siteImages[2],
  "red-bean-snow-crisp": siteImages[3],
  "osmanthus-cloud-roll": siteImages[4],
  "black-sesame-crisp": siteImages[5],
};

export const pageMoodImages = {
  aboutStory: siteImages[6],
  aboutFounder: siteImages[7],
  reserveMood: siteImages[8],
  eventsMood: siteImages[9],
  contactMood: siteImages[10],
  giftboxConcept: siteImages[11],
  afternoonTea: siteImages[12],
  brandBackground: siteImages[13],
  socialCover: siteImages[14],
  giftboxUnboxing: siteImages[15],
  vancouverLifestyle: siteImages[16],
  brandTexture: siteImages[17],
} satisfies Record<string, SiteImage>;
