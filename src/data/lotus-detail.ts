import type { SiteImage } from "@/lib/site-images";

type DetailLink = {
  href: string;
  label: string;
};

type DetailImage = Pick<SiteImage, "src" | "alt" | "ratio">;

export const lotusPastryImages = {
  hero: {
    src: "/images/products/lotus-pastry/hero.jpg",
    alt: "云酥坊荷花酥黑金茶席首屏主图",
    ratio: "16:9",
  } satisfies DetailImage,
  cutOpen: {
    src: "/images/products/lotus-pastry/cut-open.jpg",
    alt: "荷花酥切面展示浅金酥皮与低糖莲蓉馅",
    ratio: "16:9",
  } satisfies DetailImage,
  lotusShape: {
    src: "/images/products/lotus-pastry/lotus-shape.jpg",
    alt: "荷花酥手工荷花造型特写",
    ratio: "4:3",
  } satisfies DetailImage,
  lotusPaste: {
    src: "/images/products/lotus-pastry/lotus-paste.jpg",
    alt: "荷花酥低糖莲蓉馅原料展示",
    ratio: "4:3",
  } satisfies DetailImage,
  lotusSeed: {
    src: "/images/products/lotus-pastry/lotus-seed.jpg",
    alt: "荷花酥优质莲子原料展示",
    ratio: "4:3",
  } satisfies DetailImage,
  pastryLayers: {
    src: "/images/products/lotus-pastry/pastry-layers.jpg",
    alt: "荷花酥36层手工薄酥层次展示",
    ratio: "4:3",
  } satisfies DetailImage,
  baking: {
    src: "/images/products/lotus-pastry/baking.jpg",
    alt: "荷花酥现做现发烘焙展示",
    ratio: "4:3",
  } satisfies DetailImage,
  giftBox: {
    src: "/images/products/lotus-pastry/gift-box.jpg",
    alt: "云酥坊荷花酥黑金国风礼盒展示",
    ratio: "16:9",
  } satisfies DetailImage,
  teaScene: {
    src: "/images/products/lotus-pastry/tea-scene.jpg",
    alt: "荷花酥搭配中式茶具下午茶场景",
    ratio: "16:9",
  } satisfies DetailImage,
};

export const lotusImagePrompts = {
  hero:
    "premium lotus pastry photography, luxury Chinese pastry, black and gold background, lotus flower shaped pastry, sliced pastry with low sugar lotus seed paste filling, elegant oriental tea table, lotus leaf line art, warm cinematic lighting, champagne gold accents, shallow depth of field, high-end bakery product photography, refined composition, no text, no watermark",
  cutOpen:
    "macro shot of sliced lotus pastry, pale gold flaky pastry layers, smooth lotus seed paste filling, delicate lotus flower shaped crust, premium food photography, dark elegant background, warm light, high-end Chinese pastry, appetizing texture, no text, no watermark",
  lotusShape:
    "close up of lotus flower shaped pastry, delicate pale pink and lotus white petal texture, handmade Chinese pastry, dark luxury background, warm cinematic lighting, champagne gold accents, elegant oriental composition, no text, no watermark",
  lotusPaste:
    "smooth low sugar lotus seed paste in ceramic bowl, premium ingredient photography, lotus seeds beside ceramic bowl, dark elegant background, warm cinematic lighting, refined composition, no text, no watermark",
  lotusSeed:
    "premium lotus seeds in ceramic bowl, lotus seed ingredients, dark oriental table, warm cinematic lighting, elegant black and gold mood, refined ingredient photography, no text, no watermark",
  pastryLayers:
    "pale gold layered pastry dough, many delicate flaky layers, handmade Chinese pastry process, dark kitchen table, warm golden lighting, premium bakery craftsmanship, elegant composition, no text, no watermark",
  baking:
    "freshly baked lotus pastries on baking tray, flower shaped flaky crust, warm steam, premium bakery scene, dark background, cinematic warm lighting, handmade Chinese pastry, appetizing, no text, no watermark",
  giftBox:
    "luxury black and gold Chinese pastry gift box, opened gift box with lotus pastries inside, elegant oriental packaging, tea set, lotus flower, pale gold accents, premium food gift photography, dark background, champagne gold accents, no text, no watermark",
  teaScene:
    "lotus pastry with Chinese tea set and floral tea, elegant afternoon tea scene, lotus flower and leaves, dark oriental table, black and gold aesthetic, warm natural light, premium Chinese pastry photography, refined minimal composition, no text, no watermark",
};

export const lotusProductData = {
  hero: {
    breadcrumb: [
      { label: "首页", href: "/" },
      { label: "产品系列", href: "/products" },
      { label: "荷花酥", href: "/products/lotus-pastry" },
    ],
    title: "云酥坊 · 荷花酥",
    headline: "层层荷花绽放",
    subtitle: "莲香温润清甜，36层酥皮一口酥到心里",
    description:
      "手工捏制清雅荷花造型，搭配低糖莲蓉馅与36层手工薄酥。浅金缀白，莲香温润，自食有仪式感，送礼显格调。",
    image: lotusPastryImages.hero,
    primaryCta: { href: "/reserve", label: "立即抢购" } satisfies DetailLink,
    secondaryCta: { href: "#gift-specs", label: "查看礼盒规格" } satisfies DetailLink,
    tags: ["手工荷花造型", "低糖莲蓉馅", "36层薄酥", "现做现发"],
  },
  problems: {
    title: "先解决荷花酥常见的三个问题",
    items: [
      { title: "外观普通？", text: "手工荷花造型，花瓣层层舒展，摆盘出片。" },
      { title: "莲蓉太甜？", text: "低糖莲蓉慢熬，莲香温润，清甜不齁。" },
      { title: "皮厚不酥？", text: "36层手工薄酥，层层分明，入口轻盈。" },
    ],
  },
  highlights: {
    title: "一朵好荷花酥，只认好造型、好莲蓉、好酥皮、好工艺",
    items: [
      {
        title: "手工荷花造型",
        text: "花瓣舒展，清雅立体。",
        image: lotusPastryImages.lotusShape,
      },
      {
        title: "低糖莲蓉馅",
        text: "绵密温润，清甜不齁。",
        image: lotusPastryImages.lotusPaste,
      },
      {
        title: "36层手工薄酥",
        text: "层层起酥，入口轻盈。",
        image: lotusPastryImages.pastryLayers,
      },
      {
        title: "现做现发",
        text: "每日现烤，新鲜送达。",
        image: lotusPastryImages.baking,
      },
    ],
  },
  craft: {
    title: "好荷花酥，从看得见的真材实料开始",
    image: lotusPastryImages.cutOpen,
    points: [
      { title: "优质莲子", text: "颗粒饱满，莲香自然。" },
      { title: "低糖莲蓉", text: "细腻绵润，清甜不齁。" },
      { title: "手工开酥", text: "传统工艺，层层分明。" },
      { title: "恒温慢烤", text: "锁住莲香，口感不焦不干。" },
    ],
  },
  taste: {
    title: "酥 · 香 · 绵 · 润",
    image: lotusPastryImages.cutOpen,
    items: [
      { title: "外层薄酥", text: "层层酥脆，轻咬掉渣。" },
      { title: "中层莲蓉", text: "绵密温润，清甜不腻。" },
      { title: "荷花层次", text: "花瓣舒展，清雅有格调。" },
    ],
    summary: "一口酥香，莲香温润，层层有回甘。",
  },
  infoGift: {
    title: "产品信息",
    specs: [
      { label: "单枚规格", value: "约30g" },
      { label: "礼盒规格", value: "6枚 / 12枚装" },
      { label: "保质期", value: "15天" },
      { label: "储存方式", value: "阴凉密封保存" },
      { label: "食用建议", value: "搭配绿茶 / 乌龙茶 / 花茶更佳" },
      { label: "发货方式", value: "现做现发" },
    ],
    giftTitle: "自食清雅，送礼体面",
    scenes: [
      { title: "下午茶", text: "搭配清茶，莲香温润。" },
      { title: "长辈礼赠", text: "低糖清甜，稳妥体面。" },
      { title: "商务伴手礼", text: "国风礼盒，高级有格调。" },
    ],
    image: lotusPastryImages.giftBox,
  },
  bottomCta: {
    title: "每日现烤限量，建议提前预订",
    subtitle: "手工捏制，新鲜出炉，莲香酥润直达。",
    primaryCta: { href: "/reserve", label: "立即下单" } satisfies DetailLink,
    secondaryCta: { href: "#gift-specs", label: "查看礼盒规格" } satisfies DetailLink,
    guarantees: ["官方直营", "现做现发", "加固包装", "售后无忧"],
  },
} as const;
