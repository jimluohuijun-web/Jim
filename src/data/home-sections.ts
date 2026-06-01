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
  image: SiteImage;
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
      src: "/images/products/egg-yolk-pastry-card.webp",
      alt: "云酥坊黑金茶席蛋黄酥产品图",
      usage: "PC 首页人气精选产品图",
      ratio: "4:3",
    },
    href: "/products/classic-egg-yolk-pastry",
    ctaLabel: "了解详情",
  },
  {
    id: "pineapple-pastry",
    name: "凤梨酥",
    description: "酸甜凤梨馅，酥香可口",
    price: "¥18.8/枚",
    image: {
      id: "pineapple-pastry",
      src: "/images/products/pineapple-pastry-card.webp",
      alt: "云酥坊黑金茶席凤梨酥产品图",
      usage: "PC 首页人气精选产品图",
      ratio: "4:3",
    },
    href: "/products/classic-pineapple-cake",
    ctaLabel: "了解详情",
  },
  {
    id: "fresh-meat-mooncake",
    name: "鲜肉月饼",
    description: "苏式酥皮包裹鲜香肉馅，现烤出炉更酥香。",
    image: {
      id: "fresh-meat-mooncake",
      src: "/images/products/fresh-meat-mooncake/fresh-meat-mooncake-hero.webp",
      alt: "云酥坊苏式鲜肉月饼产品图",
      usage: "PC 首页人气精选产品图",
      ratio: "4:3",
    },
    href: "/products/suzhou-fresh-meat-mooncake",
    ctaLabel: "了解详情",
    note: "苏式经典 / 鲜香肉馅 / 现烤酥皮",
  },
];

export const productSeries: HomeProductCard[] = [
  {
    id: "matcha-pastry",
    name: "抹茶酥",
    description: "抹茶清香，酥皮轻盈，微苦回甘，适合作为茶点分享。",
    image: {
      id: "matcha-pastry-series",
      src: "/images/products/matcha-pastry.jpg",
      alt: "云酥坊黑金茶席抹茶酥产品图",
      usage: "PC 首页产品系列图",
      ratio: "4:3",
    },
    href: "/products/matcha-pastry",
    ctaLabel: "立即选购",
  },
  {
    id: "five-nut-mooncake",
    name: "五仁月饼",
    description: "果仁饱满，层次丰富，经典广式风味，越嚼越香。",
    image: {
      id: "five-nut-mooncake-series",
      src: "/images/products/five-nut-mooncake.jpg",
      alt: "云酥坊黑金茶席五仁月饼产品图",
      usage: "PC 首页产品系列图",
      ratio: "4:3",
    },
    href: "/products/five-nuts-mooncake",
    ctaLabel: "查看详情",
  },
  {
    id: "gift-box",
    name: "礼盒包装",
    description: "东方雅礼，精致体面，适合节庆赠礼、亲友分享与企业定制。",
    image: {
      id: "gift-box-series",
      src: "/images/products/gift-box.jpg",
      alt: "云酥坊黑金东方糕点礼盒产品图",
      usage: "PC 首页产品系列图",
      ratio: "4:3",
    },
    href: "/products#mid-autumn-preview",
    ctaLabel: "探索礼盒",
  },
  {
    id: "more-products",
    name: "更多产品",
    description: "查看更多花酥、月饼与节令点心，发现更多东方风味。",
    image: {
      id: "more-products-series",
      src: "/images/products/more-products.jpg",
      alt: "云酥坊黑金茶席更多中式酥点集合图",
      usage: "PC 首页产品系列入口图",
      ratio: "4:3",
    },
    href: "/products",
    ctaLabel: "查看全部",
  },
];

export const brandStory = {
  title: "云起闽山，酥藏花月",
  description:
    "云酥坊的品牌灵感，取自短暂而神秘的闽国风物。\n我们尊重传统手艺，也用更适合现代人的低糖口味、干净配方与东方审美，\n把东方人的雅致、温情与团圆，做成一枚可以入口的点心。",
  cta: { href: "/about", label: "了解更多" } satisfies HomeLink,
  image: {
    id: "home-brand-story",
    src: "/images/home/brand-story.jpg",
    alt: "云酥坊品牌故事黑金茶席中式酥点图",
    usage: "PC 首页品牌故事图",
    ratio: "16:9",
  } satisfies SiteImage,
};

export const craftSteps: HomeCraftStep[] = [
  {
    id: "selected-ingredients",
    title: "严选原料",
    description: "甄选优质食材，拒绝廉价替代。",
    icon: "wheat",
    image: {
      id: "craft-ingredients",
      src: "/images/home/craft-ingredients.jpg",
      alt: "云酥坊严选原料工艺图",
      usage: "PC 首页匠心工艺卡片图",
      ratio: "4:3",
    },
  },
  {
    id: "layered-pastry",
    title: "古法起酥",
    description: "多道工序精制，层层酥香。",
    icon: "layers",
    image: {
      id: "craft-layering",
      src: "/images/home/craft-layering.jpg",
      alt: "云酥坊古法起酥工艺图",
      usage: "PC 首页匠心工艺卡片图",
      ratio: "4:3",
    },
  },
  {
    id: "fresh-handmade",
    title: "新鲜现做",
    description: "小批量制作，保持新鲜口感。",
    icon: "sparkles",
    image: {
      id: "craft-fresh",
      src: "/images/home/craft-fresh.jpg",
      alt: "云酥坊新鲜现做工艺图",
      usage: "PC 首页匠心工艺卡片图",
      ratio: "4:3",
    },
  },
  {
    id: "trusted-quality",
    title: "安心品质",
    description: "防腐剂 0 添加，短保锁鲜。",
    icon: "shield",
    image: {
      id: "craft-quality",
      src: "/images/home/craft-quality.jpg",
      alt: "云酥坊安心品质原料与食品安全工艺图",
      usage: "PC 首页匠心工艺卡片图",
      ratio: "4:3",
    },
  },
];

export const giftSection = {
  title: "东方礼趣 · 传递心意",
  description: "精致礼盒，东方美学，心意满载，礼遇臻选。",
  cta: { href: "/reserve", label: "探索礼盒" } satisfies HomeLink,
  image: {
    id: "gift-box-banner",
    src: "/images/home/gift-box-banner.jpg",
    alt: "云酥坊黑金东方糕点礼盒横幅主视觉",
    usage: "PC 首页东方礼盒主视觉",
    ratio: "16:9",
  } satisfies SiteImage,
};

export const giftHighlights: HomeGiftHighlight[] = [
  { id: "premium-box", title: "精美礼盒", icon: "gift" },
  { id: "handmade", title: "匠心手作", icon: "handHeart" },
  { id: "gifting", title: "送礼佳品", icon: "heart" },
  { id: "quality", title: "安心品质", icon: "shield" },
];

export const trialProducts = ["蛋黄酥", "荷花酥", "桃花酥", "凤梨酥", "鲜肉月饼", "伴手礼盒"];
