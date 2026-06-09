import type { SiteImage } from "@/lib/site-images";

type DetailLink = {
  href: string;
  label: string;
};

type DetailImage = Pick<SiteImage, "src" | "alt" | "ratio">;

export const peonyPastryImages = {
  hero: {
    src: "/images/products/peony-pastry/hero.jpg",
    alt: "云酥坊牡丹酥黑金茶席首屏主图",
    ratio: "16:9",
  } satisfies DetailImage,
  cutOpen: {
    src: "/images/products/peony-pastry/cut-open.jpg",
    alt: "牡丹酥切面展示浅紫酥皮与低糖紫薯馅",
    ratio: "16:9",
  } satisfies DetailImage,
  peonyShape: {
    src: "/images/products/peony-pastry/peony-shape.jpg",
    alt: "牡丹酥手工牡丹造型特写",
    ratio: "4:3",
  } satisfies DetailImage,
  purpleSweetPotato: {
    src: "/images/products/peony-pastry/purple-sweet-potato.jpg",
    alt: "牡丹酥优质紫薯原料展示",
    ratio: "4:3",
  } satisfies DetailImage,
  purplePotatoFilling: {
    src: "/images/products/peony-pastry/purple-potato-filling.jpg",
    alt: "牡丹酥低糖紫薯馅质感特写",
    ratio: "4:3",
  } satisfies DetailImage,
  pastryLayers: {
    src: "/images/products/peony-pastry/pastry-layers.jpg",
    alt: "牡丹酥36层手工薄酥层次展示",
    ratio: "4:3",
  } satisfies DetailImage,
  baking: {
    src: "/images/products/peony-pastry/baking.jpg",
    alt: "牡丹酥现做现发烘焙展示",
    ratio: "4:3",
  } satisfies DetailImage,
  giftBox: {
    src: "/images/products/peony-pastry/gift-box.jpg",
    alt: "云酥坊牡丹酥黑金国风礼盒展示",
    ratio: "16:9",
  } satisfies DetailImage,
  teaScene: {
    src: "/images/products/peony-pastry/tea-scene.jpg",
    alt: "牡丹酥搭配中式茶具下午茶场景",
    ratio: "16:9",
  } satisfies DetailImage,
};

export const peonyImagePrompts = {
  hero:
    "premium peony flower pastry photography, luxury Chinese pastry, black and gold background, pale pink and light purple peony shaped flaky pastry, sliced pastry with low sugar purple sweet potato filling, delicate peony petals, elegant oriental tea table, warm cinematic lighting, champagne gold accents, shallow depth of field, high-end bakery product photography, refined composition, no text, no watermark",
  cutOpen:
    "macro shot of sliced peony pastry, pale pink and light purple flaky pastry layers, smooth purple sweet potato filling, delicate peony flower shaped crust, premium food photography, dark elegant background, warm light, high-end Chinese pastry, appetizing texture, no text, no watermark",
  peonyShape:
    "close up of peony flower shaped pastry, delicate layered petals, pale pink and muted purple pastry color, handmade Chinese pastry, dark luxury background, warm cinematic lighting, champagne gold accents, elegant oriental composition, peony petals, no text, no watermark",
  purpleSweetPotato:
    "premium purple sweet potatoes, sliced purple sweet potato, natural rich purple color, ceramic bowl, dark oriental table, warm cinematic lighting, elegant black and gold mood, refined ingredient photography, no text, no watermark",
  purplePotatoFilling:
    "smooth purple sweet potato paste, premium ingredient photography, purple sweet potato pieces beside ceramic bowl, rich purple paste texture, dark elegant background, warm cinematic lighting, refined composition, no text, no watermark",
  pastryLayers:
    "pale pink and light purple layered pastry dough, many delicate flaky layers, handmade Chinese pastry process, dark kitchen table, warm golden lighting, premium bakery craftsmanship, elegant composition, no text, no watermark",
  baking:
    "freshly baked peony flower pastries on baking tray, pale pink flower shaped flaky crust, warm steam, premium bakery scene, dark background, cinematic warm lighting, handmade Chinese pastry, appetizing, no text, no watermark",
  giftBox:
    "luxury black gold Chinese pastry gift box, opened gift box with peony flower pastries inside, elegant oriental packaging, tea set, peony flowers, muted purple and champagne accents, premium food gift photography, dark background, no text, no watermark",
  teaScene:
    "peony pastry with Chinese tea set and floral tea, elegant afternoon tea scene, peony flowers, dark oriental table, black and gold aesthetic, warm natural light, premium Chinese pastry photography, refined minimal composition, no text, no watermark",
};

export const peonyProductData = {
  hero: {
    breadcrumb: [
      { label: "首页", href: "/" },
      { label: "产品系列", href: "/products" },
      { label: "牡丹酥", href: "/products/peony-pastry" },
    ],
    title: "大气国风牡丹酥",
    headline: "花开富贵牡丹形",
    subtitle: "酥香藏馅，一口绵甜不腻口",
    description:
      "老师傅手工捏制立体牡丹造型，裹上36层手工薄酥，内填慢蒸低糖紫薯馅。花瓣层层舒展，自食有仪式感，送礼承载富贵寓意。",
    image: peonyPastryImages.hero,
    primaryCta: { href: "/reserve", label: "立即抢购" } satisfies DetailLink,
    secondaryCta: { href: "#gift-specs", label: "查看礼盒规格" } satisfies DetailLink,
    tags: ["手工牡丹造型", "低糖紫薯馅", "36层薄酥", "现做现发"],
  },
  problems: {
    title: "先解决牡丹酥常见的三个问题",
    items: [
      { title: "外观普通？", text: "手工牡丹造型，花瓣分明，送礼有记忆点。" },
      { title: "馅料太腻？", text: "低糖紫薯馅，绵密清甜，不齁不腻。" },
      { title: "皮厚不酥？", text: "36层手工薄酥，层层分明，入口轻盈。" },
    ],
  },
  highlights: {
    title: "一朵好牡丹酥，只认好造型、好紫薯、好酥皮、好工艺",
    items: [
      {
        title: "手工牡丹造型",
        text: "花瓣舒展，富贵有寓意。",
        image: peonyPastryImages.peonyShape,
      },
      {
        title: "低糖紫薯馅",
        text: "绵密清甜，自然薯香。",
        image: peonyPastryImages.purplePotatoFilling,
      },
      {
        title: "36层手工薄酥",
        text: "层层起酥，入口轻盈。",
        image: peonyPastryImages.pastryLayers,
      },
      {
        title: "现做现发",
        text: "每日现烤，新鲜送达。",
        image: peonyPastryImages.baking,
      },
    ],
  },
  craft: {
    title: "好牡丹酥，从看得见的真材实料开始",
    image: peonyPastryImages.cutOpen,
    points: [
      { title: "优质紫薯", text: "自然薯香，色泽温润。" },
      { title: "低糖紫薯馅", text: "绵密细腻，清甜不齁。" },
      { title: "手工开酥", text: "传统工艺，层层分明。" },
      { title: "恒温慢烤", text: "锁住酥香，花型不塌。" },
    ],
  },
  taste: {
    title: "酥 · 香 · 绵 · 甜",
    image: peonyPastryImages.cutOpen,
    items: [
      { title: "外层薄酥", text: "层层酥脆，轻咬掉渣。" },
      { title: "中层紫薯馅", text: "绵密细腻，清甜不腻。" },
      { title: "花型层次", text: "牡丹舒展，富贵有仪式感。" },
    ],
    summary: "一口酥香，薯香温润，层层有回甘。",
  },
  infoGift: {
    title: "产品信息",
    specs: [
      { label: "单枚规格", value: "约30g" },
      { label: "礼盒规格", value: "6枚 / 12枚装 / 组合装" },
      { label: "保质期", value: "15天" },
      { label: "储存方式", value: "阴凉密封保存" },
      { label: "食用建议", value: "搭配绿茶 / 花茶更佳" },
      { label: "发货方式", value: "现做现发" },
    ],
    giftTitle: "自食有仪式感，送礼有富贵意头",
    scenes: [
      { title: "下午茶", text: "搭配清茶，酥香绵甜。" },
      { title: "长辈礼赠", text: "花开富贵，寓意体面。" },
      { title: "企业团购", text: "国风礼盒，高级有格调。" },
    ],
    image: peonyPastryImages.giftBox,
  },
  bottomCta: {
    title: "手工花型，现做现发，建议提前预订",
    subtitle: "短保锁鲜，新鲜出炉，花开酥香直达。",
    primaryCta: { href: "/reserve", label: "立即下单" } satisfies DetailLink,
    secondaryCta: { href: "#gift-specs", label: "查看礼盒规格" } satisfies DetailLink,
    guarantees: ["官方直营", "现做现发", "加固包装", "售后无忧"],
  },
} as const;
