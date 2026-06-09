import type { SiteImage } from "@/lib/site-images";

type DetailLink = {
  href: string;
  label: string;
};

type DetailImage = Pick<SiteImage, "src" | "alt" | "ratio">;

export const matchaPastryImages = {
  hero: {
    src: "/images/products/matcha-pastry/hero.jpg",
    alt: "云酥坊抹茶酥黑金茶席首屏主图",
    ratio: "16:9",
  } satisfies DetailImage,
  cutOpen: {
    src: "/images/products/matcha-pastry/cut-open.jpg",
    alt: "抹茶酥切面展示绿色酥皮红豆沙与流心蛋黄",
    ratio: "16:9",
  } satisfies DetailImage,
  matchaPowder: {
    src: "/images/products/matcha-pastry-feature-matcha.jpg",
    alt: "抹茶酥搭配日本抹茶粉与茶器展示",
    ratio: "4:3",
  } satisfies DetailImage,
  saltedYolk: {
    src: "/images/products/matcha-pastry-feature-egg-yolk.jpg",
    alt: "抹茶酥切面展示整颗金黄咸蛋黄",
    ratio: "4:3",
  } satisfies DetailImage,
  redBeanPaste: {
    src: "/images/products/matcha-pastry-feature-matcha.jpg",
    alt: "抹茶酥切面展示低糖红豆沙与自然抹茶酥皮",
    ratio: "4:3",
  } satisfies DetailImage,
  pastryLayers: {
    src: "/images/products/matcha-pastry/pastry-layers.jpg",
    alt: "36层手工抹茶薄酥皮层次展示",
    ratio: "4:3",
  } satisfies DetailImage,
  baking: {
    src: "/images/products/matcha-pastry/baking.jpg",
    alt: "抹茶酥现烤出炉展示",
    ratio: "4:3",
  } satisfies DetailImage,
  giftBox: {
    src: "/images/products/matcha-pastry/gift-box.jpg",
    alt: "云酥坊抹茶酥黑金国风礼盒展示",
    ratio: "16:9",
  } satisfies DetailImage,
  teaScene: {
    src: "/images/products/matcha-pastry/tea-scene.jpg",
    alt: "抹茶酥搭配中式茶具下午茶场景",
    ratio: "16:9",
  } satisfies DetailImage,
};

export const matchaImagePrompts = {
  hero:
    "premium matcha pastry photography, luxury Chinese pastry, black and gold background, sliced matcha pastry with salted egg yolk lava filling and red bean paste, green flaky pastry layers, elegant oriental tea table, matcha bowl, bamboo whisk, warm cinematic lighting, champagne gold accents, shallow depth of field, high-end bakery product photography, refined composition, no text, no watermark",
  cutOpen:
    "macro shot of sliced matcha pastry, green flaky pastry layers, red bean paste, salted egg yolk lava filling, premium food photography, dark elegant background, warm light, high-end Chinese pastry, appetizing texture, no text, no watermark",
  matchaPowder:
    "premium matcha powder in ceramic bowl, bamboo whisk, dark oriental tea table, warm cinematic lighting, elegant black and gold mood, refined tea ceremony composition, no text, no watermark",
  saltedYolk:
    "golden salted egg yolks, glossy and rich texture, premium ingredient photography, dark oriental table, warm cinematic lighting, champagne gold accents, refined composition, no text, no watermark",
  redBeanPaste:
    "smooth red bean paste, premium ingredient photography, red beans beside ceramic bowl, dark elegant background, warm cinematic lighting, refined composition, no text, no watermark",
  pastryLayers:
    "green matcha layered pastry dough, many delicate flaky layers, handmade Chinese pastry process, dark kitchen table, warm golden lighting, premium bakery craftsmanship, elegant composition, no text, no watermark",
  baking:
    "freshly baked matcha pastries on baking tray, green flaky crust, warm steam, premium bakery scene, dark background, cinematic warm lighting, handmade Chinese pastry, appetizing, no text, no watermark",
  giftBox:
    "luxury black and gold Chinese pastry gift box, opened gift box with matcha pastries inside, elegant oriental packaging, tea set, matcha bowl, delicate branches, premium food gift photography, dark background, champagne gold accents, no text, no watermark",
  teaScene:
    "matcha pastry with Chinese tea set, matcha bowl, bamboo whisk, elegant afternoon tea scene, dark oriental table, black and gold aesthetic, warm natural light, premium Chinese pastry photography, refined minimal composition, no text, no watermark",
};

export const matchaProductData = {
  hero: {
    breadcrumb: [
      { label: "首页", href: "/" },
      { label: "产品系列", href: "/products" },
      { label: "抹茶酥", href: "/products/matcha-pastry" },
    ],
    title: "茶香清新的新中式抹茶酥",
    headline: "抹茶浓醇回甘",
    subtitle: "低甜茶香与咸蛋流心，36层酥皮一口锁香",
    description:
      "甄选日本抹茶粉，搭配低糖红豆沙与整颗咸蛋黄，手工层层开酥。茶香清雅，咸甜平衡，酥香不腻。",
    image: matchaPastryImages.hero,
    primaryCta: { href: "/reserve", label: "立即抢购" } satisfies DetailLink,
    secondaryCta: { href: "#gift-specs", label: "查看礼盒规格" } satisfies DetailLink,
    tags: ["日本抹茶", "整颗蛋黄", "低糖红豆", "现做现发"],
  },
  problems: {
    title: "先解决抹茶酥常见的三个问题",
    items: [
      { title: "抹茶不香？", text: "甄选日本抹茶粉，茶香清新，入口回甘。" },
      { title: "蛋黄不真？", text: "整颗咸蛋黄入馅，沙糯流心，咸香满足。" },
      { title: "太甜太腻？", text: "低糖红豆沙搭配抹茶清香，清甜不齁。" },
    ],
  },
  highlights: {
    title: "一枚好抹茶酥，只认好抹茶、好蛋黄、好红豆、好酥皮",
    items: [
      {
        title: "日本抹茶粉",
        text: "茶香清雅，回甘持久。",
        image: matchaPastryImages.matchaPowder,
      },
      {
        title: "整颗咸蛋黄",
        text: "沙糯流心，咸香浓郁。",
        image: matchaPastryImages.saltedYolk,
      },
      {
        title: "低糖红豆沙",
        text: "绵密清甜，平衡茶香。",
        image: matchaPastryImages.redBeanPaste,
      },
      {
        title: "36层手工薄酥",
        text: "层层起酥，入口轻盈。",
        image: matchaPastryImages.pastryLayers,
      },
    ],
  },
  craft: {
    title: "好抹茶酥，从看得见的真材实料开始",
    image: matchaPastryImages.cutOpen,
    points: [
      { title: "日本抹茶粉", text: "茶香清新自然，入口回甘。" },
      { title: "整颗咸蛋黄", text: "沙糯流心，咸香不腥。" },
      { title: "低糖红豆沙", text: "细腻绵密，清甜不齁。" },
      { title: "恒温烘烤", text: "锁住茶香、酥香与馅心湿润度。" },
    ],
  },
  taste: {
    title: "外酥 · 茶香 · 流心",
    image: matchaPastryImages.cutOpen,
    items: [
      { title: "外层抹茶酥皮", text: "层层起酥，茶香轻盈。" },
      { title: "中层红豆沙", text: "绵密细腻，清甜不腻。" },
      { title: "内芯咸蛋黄", text: "沙糯流心，咸香满足。" },
    ],
    summary: "茶香、豆香、咸香层层递进，一口清爽不腻。",
  },
  infoGift: {
    title: "产品信息",
    specs: [
      { label: "单枚规格", value: "约30g" },
      { label: "礼盒规格", value: "6枚 / 12枚装" },
      { label: "保质期", value: "15天" },
      { label: "储存方式", value: "阴凉密封保存" },
      { label: "食用建议", value: "搭配绿茶 / 乌龙茶更佳" },
      { label: "发货方式", value: "现做现发" },
    ],
    giftTitle: "自食解馋，送礼有面",
    scenes: [
      { title: "下午茶", text: "搭配清茶，轻松解腻。" },
      { title: "节日伴手礼", text: "黑金礼盒，心意满满。" },
      { title: "企业团购", text: "多规格可选，体面有礼。" },
    ],
    image: matchaPastryImages.giftBox,
  },
  bottomCta: {
    title: "每日现烤限量，建议提前预订",
    subtitle: "短保锁鲜，新鲜出炉，茶香与流心直达。",
    primaryCta: { href: "/reserve", label: "立即下单" } satisfies DetailLink,
    secondaryCta: { href: "#gift-specs", label: "查看礼盒规格" } satisfies DetailLink,
    guarantees: ["官方直营", "现做现发", "加固包装", "售后无忧"],
  },
} as const;
