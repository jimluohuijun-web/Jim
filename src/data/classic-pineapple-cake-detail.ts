import type { SiteImage } from "@/lib/site-images";

type DetailLink = {
  href: string;
  label: string;
};

type DetailImage = Pick<SiteImage, "src" | "alt" | "ratio">;

export const classicPineappleCakeImages = {
  hero: {
    src: "/images/products/pineapple-cake-hero.jpg",
    alt: "云酥坊经典凤梨酥切面凤梨果馅 Hero 图",
    ratio: "16:9",
  } satisfies DetailImage,
  cutOpen: {
    src: "/images/products/pineapple-cake-feature-fruit.jpg",
    alt: "经典凤梨酥切面展示金黄凤梨果肉纤维",
    ratio: "16:9",
  } satisfies DetailImage,
  pineapple: {
    src: "/images/products/pineapple-cake-feature-fruit.jpg",
    alt: "切开的凤梨酥展示金钻凤梨果肉纤维",
    ratio: "4:3",
  } satisfies DetailImage,
  pastryLayers: {
    src: "/images/products/pineapple-cake-feature-thin-crust.jpg",
    alt: "凤梨酥薄酥皮与自然酥屑细节",
    ratio: "4:3",
  } satisfies DetailImage,
  lowSugar: {
    src: "/images/products/pineapple-cake-feature-low-sugar.jpg",
    alt: "凤梨酥搭配清茶展示低糖酸甜平衡口感",
    ratio: "4:3",
  } satisfies DetailImage,
  baking: {
    src: "/images/products/pineapple-cake-feature-fresh-baked.jpg",
    alt: "刚出炉凤梨酥现做现发工艺图",
    ratio: "4:3",
  } satisfies DetailImage,
  giftBox: {
    src: "/images/products/pineapple-cake-gift-box-scene.jpg",
    alt: "云酥坊经典凤梨酥节日礼盒包装场景",
    ratio: "16:9",
  } satisfies DetailImage,
  teaScene: {
    src: "/images/products/pineapple-cake/tea-scene.jpg",
    alt: "凤梨酥搭配中式茶具下午茶场景",
    ratio: "16:9",
  } satisfies DetailImage,
  tasteOverview: {
    src: "/images/products/pineapple-cake-feature-overview.jpg",
    alt: "凤梨酥外酥果香清爽口感总览图",
    ratio: "16:9",
  } satisfies DetailImage,
};

export const classicPineappleCakeImagePrompts = {
  hero:
    "premium pineapple cake photography, luxury Chinese pastry, black and gold background, sliced pineapple cake with golden pineapple filling, visible fruit fibers, elegant oriental tea table, warm cinematic lighting, champagne gold accents, shallow depth of field, high-end bakery product photography, refined composition, no text, no watermark",
  cutOpen:
    "macro shot of sliced pineapple cake, golden pineapple filling, visible fruit fibers, thin crispy pastry crust, premium food photography, dark elegant background, warm light, high-end Chinese pastry, appetizing texture, no text, no watermark",
  pineappleFruit:
    "fresh golden pineapple slices and pineapple chunks, premium ingredient photography, dark oriental table, warm cinematic lighting, elegant black and gold mood, natural fruit texture, refined composition, no text, no watermark",
  pastryLayers:
    "thin layered pastry dough, many delicate flaky layers, handmade Chinese pastry process, dark kitchen table, warm golden lighting, premium bakery craftsmanship, elegant composition, no text, no watermark",
  baking:
    "freshly baked pineapple cakes on baking tray, golden crust, warm steam, premium bakery scene, dark background, cinematic warm lighting, handmade Chinese pastry, appetizing, no text, no watermark",
  giftBox:
    "luxury black and gold Chinese pastry gift box, opened gift box with pineapple cakes inside, elegant oriental packaging, tea set, delicate branches, premium food gift photography, dark background, champagne gold accents, no text, no watermark",
  teaScene:
    "pineapple cake with Chinese tea set, elegant afternoon tea scene, dark oriental table, black and gold aesthetic, warm natural light, premium Chinese pastry photography, refined minimal composition, no text, no watermark",
};

export const classicPineappleCakeDetailData = {
  hero: {
    breadcrumb: [
      { label: "首页", href: "/" },
      { label: "产品系列", href: "/products" },
      { label: "经典凤梨酥", href: "/products/classic-pineapple-cake" },
    ],
    title: "云酥坊 · 经典凤梨酥",
    headline: "一口爆馅凤梨香",
    subtitle: "馅多皮薄，酸甜不齁腻",
    description:
      "精选金钻凤梨果肉，低糖慢熬成果馅，搭配36层手工薄酥。外酥内润，果香清爽，自食解馋，送礼也体面。",
    image: classicPineappleCakeImages.hero,
    primaryCta: { href: "/reserve", label: "立即抢购" } satisfies DetailLink,
    secondaryCta: { href: "#gift-specs", label: "查看礼盒规格" } satisfies DetailLink,
    tags: ["100%凤梨果肉", "馅多皮薄", "36层薄酥", "现做现发"],
  },
  problems: {
    title: "先解决凤梨酥常见的三个问题",
    items: [
      { title: "果味寡淡？", text: "精选金钻凤梨果肉，果香浓郁，纤维感清晰。" },
      { title: "酥皮厚硬？", text: "36层薄酥工艺，入口轻盈，不干不噎。" },
      { title: "太甜太腻？", text: "低糖慢熬果馅，酸甜平衡，清爽不齁。" },
    ],
  },
  highlights: {
    title: "一块好凤梨酥，只认好果肉、好酥皮、好工艺",
    items: [
      {
        title: "金钻凤梨果肉",
        text: "果肉纤维清晰，酸甜浓郁。",
        image: classicPineappleCakeImages.pineapple,
      },
      {
        title: "超薄酥皮",
        text: "36层薄酥，入口即化。",
        image: classicPineappleCakeImages.pastryLayers,
      },
      {
        title: "低糖配方",
        text: "酸甜平衡，清爽不腻。",
        image: classicPineappleCakeImages.lowSugar,
      },
      {
        title: "现做现发",
        text: "每日现烤，锁住美味。",
        image: classicPineappleCakeImages.baking,
      },
    ],
  },
  craft: {
    title: "好凤梨酥，从看得见的真材实料开始",
    image: classicPineappleCakeImages.cutOpen,
    points: [
      { title: "金钻凤梨果肉", text: "精选当季凤梨，果肉纤维看得见。" },
      { title: "低糖慢熬果馅", text: "保留凤梨酸甜，不靠香精撑味。" },
      { title: "手工开酥", text: "层层折叠，酥而不厚。" },
      { title: "恒温烘烤", text: "色泽金黄，外酥内润。" },
    ],
  },
  taste: {
    title: "外酥 · 果香 · 清爽",
    image: classicPineappleCakeImages.tasteOverview,
    items: [
      { title: "外层薄酥", text: "层层酥脆，入口不噎。" },
      { title: "中层果馅", text: "果肉饱满，酸甜平衡。" },
      { title: "内芯果香", text: "凤梨香气浓郁，清爽解腻。" },
    ],
    summary: "酥而不碎，酸甜平衡，越吃越想吃。",
  },
  infoGift: {
    title: "产品信息",
    specs: [
      { label: "单枚规格", value: "约30g" },
      { label: "礼盒规格", value: "6枚 / 12枚装" },
      { label: "保质期", value: "15天" },
      { label: "储存方式", value: "阴凉密封保存" },
      { label: "食用建议", value: "开盒即食，搭配清茶更佳" },
      { label: "发货方式", value: "现做现发" },
    ],
    giftTitle: "自食解馋，送礼有面",
    scenes: [
      { title: "下午茶", text: "清爽果香，轻松解腻。" },
      { title: "节日伴手礼", text: "黑金礼盒，体面送达。" },
      { title: "企业团购", text: "多规格可选，适合批量礼赠。" },
    ],
    image: classicPineappleCakeImages.giftBox,
  },
  bottomCta: {
    title: "每日现烤限量，建议提前预订",
    subtitle: "短保锁鲜，新鲜出炉，果香直达。",
    primaryCta: { href: "/reserve", label: "立即下单" } satisfies DetailLink,
    secondaryCta: { href: "#gift-specs", label: "查看礼盒规格" } satisfies DetailLink,
    guarantees: ["官方直营", "现做现发", "加固包装", "售后无忧"],
  },
};
