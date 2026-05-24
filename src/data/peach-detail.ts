import type { SiteImage } from "@/lib/site-images";

type DetailLink = {
  href: string;
  label: string;
};

type DetailImage = Pick<SiteImage, "src" | "alt" | "ratio">;

export const peachPastryImages = {
  hero: {
    src: "/images/products/peach-blossom-pastry/hero.jpg",
    alt: "云酥坊桃花酥黑金茶席首屏主图",
    ratio: "16:9",
  } satisfies DetailImage,
  cutOpen: {
    src: "/images/products/peach-blossom-pastry/cut-open.jpg",
    alt: "桃花酥切面展示粉嫩酥皮与低糖红豆沙馅",
    ratio: "16:9",
  } satisfies DetailImage,
  peachShape: {
    src: "/images/products/peach-blossom-pastry/peach-shape.jpg",
    alt: "桃花酥手工桃花造型特写",
    ratio: "4:3",
  } satisfies DetailImage,
  redBeanPaste: {
    src: "/images/products/peach-blossom-pastry-red-bean-detail.jpg",
    alt: "桃花酥低糖红豆沙馅切面特写",
    ratio: "4:3",
  } satisfies DetailImage,
  pastryLayers: {
    src: "/images/products/peach-blossom-pastry/pastry-layers.jpg",
    alt: "桃花酥36层手工薄酥层次展示",
    ratio: "4:3",
  } satisfies DetailImage,
  baking: {
    src: "/images/products/peach-blossom-pastry/baking.jpg",
    alt: "桃花酥现做现发烘焙展示",
    ratio: "4:3",
  } satisfies DetailImage,
  giftBox: {
    src: "/images/products/peach-blossom-pastry/gift-box.jpg",
    alt: "云酥坊桃花酥黑金国风礼盒展示",
    ratio: "16:9",
  } satisfies DetailImage,
  teaScene: {
    src: "/images/products/peach-blossom-pastry/tea-scene.jpg",
    alt: "桃花酥搭配中式茶具下午茶场景",
    ratio: "16:9",
  } satisfies DetailImage,
};

export const peachImagePrompts = {
  hero:
    "premium peach blossom pastry photography, luxury Chinese pastry, black and gold background, pink flower shaped pastry, sliced pastry with red bean paste filling, delicate peach blossom petals, elegant oriental tea table, warm cinematic lighting, champagne gold accents, shallow depth of field, high-end bakery product photography, refined composition, no text, no watermark",
  cutOpen:
    "macro shot of sliced peach blossom pastry, pink flaky pastry layers, smooth red bean paste filling, delicate flower shaped crust, premium food photography, dark elegant background, warm light, high-end Chinese pastry, appetizing texture, no text, no watermark",
  peachShape:
    "close up of pink peach blossom shaped pastry, delicate flower petal texture, handmade Chinese pastry, dark luxury background, warm cinematic lighting, champagne gold accents, elegant oriental composition, no text, no watermark",
  redBeanPaste:
    "smooth red bean paste, premium ingredient photography, red beans beside ceramic bowl, dark elegant background, warm cinematic lighting, refined composition, no text, no watermark",
  pastryLayers:
    "pink layered pastry dough, many delicate flaky layers, handmade Chinese pastry process, dark kitchen table, warm golden lighting, premium bakery craftsmanship, elegant composition, no text, no watermark",
  baking:
    "freshly baked peach blossom pastries on baking tray, pink flower shaped flaky crust, warm steam, premium bakery scene, dark background, cinematic warm lighting, handmade Chinese pastry, appetizing, no text, no watermark",
  giftBox:
    "luxury black and gold Chinese pastry gift box, opened gift box with peach blossom pastries inside, elegant oriental packaging, tea set, peach blossom branches, delicate pink petals, premium food gift photography, dark background, champagne gold accents, no text, no watermark",
  teaScene:
    "peach blossom pastry with Chinese tea set and floral tea, elegant afternoon tea scene, peach blossom branches, dark oriental table, black and gold aesthetic, warm natural light, premium Chinese pastry photography, refined minimal composition, no text, no watermark",
};

export const peachProductData = {
  hero: {
    breadcrumb: [
      { label: "首页", href: "/" },
      { label: "产品系列", href: "/products" },
      { label: "桃花酥", href: "/products/peach-blossom-pastry" },
    ],
    title: "云酥坊 · 桃花酥",
    headline: "粉嫩桃花造型",
    subtitle: "酥香藏馅，清甜不腻",
    description:
      "手工捏制桃花造型，搭配低糖红豆沙与36层手工薄酥。花型精致，酥香清甜，自食有仪式感，送礼更体面。",
    image: peachPastryImages.hero,
    primaryCta: { href: "/reserve", label: "立即抢购" } satisfies DetailLink,
    secondaryCta: { href: "#gift-specs", label: "查看礼盒规格" } satisfies DetailLink,
    tags: ["手工桃花造型", "低糖红豆沙", "36层薄酥", "现做现发"],
  },
  problems: {
    title: "先解决桃花酥常见的三个问题",
    items: [
      { title: "外观单调？", text: "手工桃花造型，花瓣清晰，拍照出片。" },
      { title: "太甜太腻？", text: "低糖红豆沙慢熬，绵密清甜不齁。" },
      { title: "皮厚不酥？", text: "36层手工薄酥，层层分明，入口轻盈。" },
    ],
  },
  highlights: {
    title: "一朵好桃花酥，只认好造型、好酥皮、好红豆、好工艺",
    items: [
      {
        title: "手工桃花造型",
        text: "花瓣立体，颜值出众。",
        image: peachPastryImages.peachShape,
      },
      {
        title: "低糖红豆沙",
        text: "绵密清甜，甜而不齁。",
        image: peachPastryImages.redBeanPaste,
      },
      {
        title: "36层手工薄酥",
        text: "层层起酥，入口轻盈。",
        image: peachPastryImages.pastryLayers,
      },
      {
        title: "现做现发",
        text: "每日现烤，新鲜送达。",
        image: peachPastryImages.baking,
      },
    ],
  },
  craft: {
    title: "好桃花酥，从看得见的真材实料开始",
    image: peachPastryImages.cutOpen,
    points: [
      { title: "低糖红豆沙", text: "绵密细腻，清甜不腻。" },
      { title: "进口黄油", text: "奶香自然，酥香轻盈。" },
      { title: "手工开酥", text: "传统工艺，层层分明。" },
      { title: "恒温慢烤", text: "锁住酥香，口感不焦不干。" },
    ],
  },
  taste: {
    title: "酥 · 香 · 绵 · 甜",
    image: peachPastryImages.cutOpen,
    items: [
      { title: "外层薄酥", text: "层层酥脆，轻咬掉渣。" },
      { title: "中层红豆沙", text: "绵密细腻，清甜不腻。" },
      { title: "花型层次", text: "粉嫩精致，仪式感满满。" },
    ],
    summary: "一口清甜，层层有惊喜。",
  },
  infoGift: {
    title: "产品信息",
    specs: [
      { label: "单枚规格", value: "约30g" },
      { label: "礼盒规格", value: "6枚 / 12枚装" },
      { label: "保质期", value: "15天" },
      { label: "储存方式", value: "阴凉密封保存" },
      { label: "食用建议", value: "搭配花茶 / 乌龙茶更佳" },
      { label: "发货方式", value: "现做现发" },
    ],
    giftTitle: "自食解馋，送礼有面",
    scenes: [
      { title: "下午茶", text: "搭配花茶，轻松解腻。" },
      { title: "节日伴手礼", text: "国风礼盒，颜值出众。" },
      { title: "闺蜜互赠", text: "粉嫩造型，心意满满。" },
    ],
    image: peachPastryImages.giftBox,
  },
  bottomCta: {
    title: "每日现烤限量，建议提前预订",
    subtitle: "手工捏制，新鲜出炉，花开酥香直达。",
    primaryCta: { href: "/reserve", label: "立即下单" } satisfies DetailLink,
    secondaryCta: { href: "#gift-specs", label: "查看礼盒规格" } satisfies DetailLink,
    guarantees: ["官方直营", "现做现发", "加固包装", "售后无忧"],
  },
} as const;
