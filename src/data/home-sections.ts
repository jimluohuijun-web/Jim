import type { SiteImage } from "@/lib/site-images";

type HomeLink = {
  href: string;
  label: string;
};

export type HomeProductCard = {
  id: string;
  name: string;
  description: string;
  price?: string;
  image?: SiteImage;
  href: string;
  ctaLabel: string;
  note?: string;
};

export type HomeCraftStep = {
  id: string;
  title: string;
  description: string;
  icon: "wheat" | "layers" | "sparkles" | "shield";
};

export type HomeGiftHighlight = {
  id: string;
  title: string;
  icon: "gift" | "handHeart" | "heart" | "shield";
};

export const homeHeroContent = {
  title: "一口酥香，东方新味",
  subtitle: "匠心手作中式酥点，传承经典，创新东方味道",
  primaryCta: { href: "#featured-products", label: "立即探索产品" } satisfies HomeLink,
  secondaryCta: { href: "#tasting-register", label: "预约新品试吃" } satisfies HomeLink,
  highlights: ["甄选原料", "匠心手作", "新鲜现做", "东方礼感"],
};

export const featuredProducts: HomeProductCard[] = [
  {
    id: "egg-yolk-pastry",
    name: "蛋黄酥",
    description: "咸香蛋黄与红豆沙的经典搭配",
    price: "¥19.8/枚",
    image: {
      id: "egg-yolk-pastry",
      src: "/images/products/classic-egg-yolk-pastry.webp",
      alt: "云酥坊蛋黄酥产品图",
      usage: "PC 首页人气精选产品图",
      ratio: "1:1",
    },
    href: "/products/classic-red-bean-egg-yolk-pastry",
    ctaLabel: "了解详情",
  },
  {
    id: "lotus-pastry",
    name: "荷花酥",
    description: "清雅莲香，细腻豆沙",
    price: "¥18.8/枚",
    image: {
      id: "lotus-pastry",
      src: "/images/products/lotus-pastry.webp",
      alt: "云酥坊荷花酥产品图",
      usage: "PC 首页人气精选产品图",
      ratio: "1:1",
    },
    href: "/products",
    ctaLabel: "了解详情",
  },
  {
    id: "fresh-meat-mooncake",
    name: "鲜肉月饼",
    description: "皮酥馅香，鲜而不腻",
    price: "¥17.8/枚",
    image: {
      id: "fresh-meat-mooncake-placeholder",
      src: "/images/mooncakes/red-bean-mooncake.webp",
      alt: "云酥坊鲜肉月饼图片占位",
      usage: "PC 首页鲜肉月饼占位图，待替换为真实鲜肉月饼图片",
      ratio: "1:1",
    },
    href: "#tasting-register",
    ctaLabel: "预约试吃",
    note: "当前项目缺少鲜肉月饼专图，暂用月饼类图片占位。",
  },
];

export const productSeries: HomeProductCard[] = [
  {
    id: "peach-blossom-pastry",
    name: "桃花酥",
    description: "花形轻盈，豆沙温润，适合春夏分享。",
    image: {
      id: "peach-blossom-pastry",
      src: "/images/seasonal/strawberry-peach-blossom-pastry.webp",
      alt: "云酥坊桃花酥产品图",
      usage: "PC 首页产品系列图",
      ratio: "1:1",
    },
    href: "/products",
    ctaLabel: "了解桃花酥",
  },
  {
    id: "pineapple-pastry",
    name: "凤梨酥",
    description: "酸甜果香，酥润清爽，适合作为日常伴手礼。",
    image: {
      id: "pineapple-pastry",
      src: "/images/products/classic-pineapple-cake.webp",
      alt: "云酥坊凤梨酥产品图",
      usage: "PC 首页产品系列图",
      ratio: "1:1",
    },
    href: "/products/classic-pineapple-pastry",
    ctaLabel: "了解凤梨酥",
  },
  {
    id: "gift-box",
    name: "伴手礼盒",
    description: "节日礼、企业礼、好友分享，一盒装下东方心意。",
    image: {
      id: "mid-autumn-8pc-gift-box",
      src: "/images/gift-boxes/mid-autumn-8pc-gift-box.webp",
      alt: "云酥坊伴手礼盒产品图",
      usage: "PC 首页产品系列图",
      ratio: "4:5",
    },
    href: "#gift-section",
    ctaLabel: "探索礼盒",
  },
  {
    id: "coming-soon",
    name: "更多产品敬请期待",
    description: "更多中式酥点与节令风味正在筹备中。",
    href: "#tasting-register",
    ctaLabel: "预约上新通知",
  },
];

export const brandStory = {
  title: "品牌故事 · 东方烘点美学",
  description:
    "云酥坊专注中式手作酥点，以传统开酥技法为基础，结合东方茶席、节令礼赠与现代审美，让一枚点心成为日常分享里更有质感的心意。",
  cta: { href: "/about", label: "了解更多" } satisfies HomeLink,
  image: {
    id: "about-story-01",
    src: "/images/pages/about-story-01.webp",
    alt: "云酥坊东方烘点品牌故事场景图",
    usage: "PC 首页品牌故事图",
    ratio: "3:2",
  } satisfies SiteImage,
};

export const craftSteps: HomeCraftStep[] = [
  {
    id: "selected-ingredients",
    title: "严选原料",
    description: "从馅料到酥皮，优先选择稳定、干净、适合手作呈现的食材。",
    icon: "wheat",
  },
  {
    id: "layered-pastry",
    title: "层层起酥",
    description: "控制油皮、油酥与折叠节奏，让入口拥有轻盈层次。",
    icon: "layers",
  },
  {
    id: "fresh-handmade",
    title: "新鲜现做",
    description: "小批量制作，减少长时间存放带来的风味损耗。",
    icon: "sparkles",
  },
  {
    id: "trusted-quality",
    title: "安心品质",
    description: "关注口味、包装与沟通细节，让试吃和送礼都更放心。",
    icon: "shield",
  },
];

export const giftSection = {
  title: "东方礼感，传递心意",
  description: "精致礼盒，东方美学，心意满满，礼赠佳选",
  cta: { href: "/reserve", label: "探索礼盒" } satisfies HomeLink,
  image: {
    id: "mid-autumn-double-layer-gift-box",
    src: "/images/gift-boxes/mid-autumn-double-layer-gift-box.webp",
    alt: "云酥坊东方礼盒主视觉",
    usage: "PC 首页东方礼盒主视觉",
    ratio: "4:5",
  } satisfies SiteImage,
};

export const giftHighlights: HomeGiftHighlight[] = [
  { id: "premium-box", title: "精美礼盒", icon: "gift" },
  { id: "handmade", title: "匠心手作", icon: "handHeart" },
  { id: "gifting", title: "送礼佳品", icon: "heart" },
  { id: "quality", title: "安心品质", icon: "shield" },
];

export const trialProducts = ["蛋黄酥", "荷花酥", "桃花酥", "凤梨酥", "鲜肉月饼", "伴手礼盒"];
