import type { SiteImage } from "@/lib/site-images";

type DetailLink = {
  href: string;
  label: string;
};

type DetailImage = Pick<SiteImage, "src" | "alt" | "ratio">;

export const eggYolkLotusMooncakeImages = {
  hero: {
    src: "/images/products/mooncake-combo-1-egg-yolk-lotus.jpg",
    alt: "云酥坊经典蛋黄莲蓉月饼完整蛋黄与莲蓉切面黑金首屏主图",
    ratio: "16:9",
  } satisfies DetailImage,
  cutOpen: {
    src: "/images/products/mooncake-combo-1-egg-yolk-lotus.jpg",
    alt: "蛋黄莲蓉月饼切面展示完整咸蛋黄与低糖莲蓉",
    ratio: "16:9",
  } satisfies DetailImage,
  saltedYolk: {
    src: "/images/products/mooncake-combo-1-egg-yolk-lotus.jpg",
    alt: "经典蛋黄莲蓉月饼整颗咸蛋黄切面展示",
    ratio: "4:3",
  } satisfies DetailImage,
  lotusPaste: {
    src: "/images/products/egg-yolk-lotus-mooncake/lotus-paste.jpg",
    alt: "经典蛋黄莲蓉月饼低糖莲蓉馅展示",
    ratio: "4:3",
  } satisfies DetailImage,
  lotusSeed: {
    src: "/images/products/egg-yolk-lotus-mooncake/lotus-seed.jpg",
    alt: "经典蛋黄莲蓉月饼优质莲子原料展示",
    ratio: "4:3",
  } satisfies DetailImage,
  mooncakeCrust: {
    src: "/images/products/egg-yolk-lotus-mooncake/mooncake-crust.jpg",
    alt: "经典蛋黄莲蓉月饼广式饼皮与压模工艺展示",
    ratio: "4:3",
  } satisfies DetailImage,
  baking: {
    src: "/images/products/egg-yolk-lotus-mooncake/baking.jpg",
    alt: "经典蛋黄莲蓉月饼中秋现做现发展示",
    ratio: "4:3",
  } satisfies DetailImage,
  giftBox: {
    src: "/images/products/egg-yolk-lotus-mooncake/gift-box.jpg",
    alt: "云酥坊经典蛋黄莲蓉月饼黑金中秋礼盒展示",
    ratio: "16:9",
  } satisfies DetailImage,
  teaScene: {
    src: "/images/products/egg-yolk-lotus-mooncake/tea-scene.jpg",
    alt: "经典蛋黄莲蓉月饼搭配中式茶席场景",
    ratio: "16:9",
  } satisfies DetailImage,
};

export const eggYolkLotusMooncakeImagePrompts = {
  hero:
    "premium egg yolk lotus seed paste mooncake photography, luxury Chinese Mid-Autumn pastry, black and gold background, whole mooncake and sliced mooncake with golden salted egg yolk lava filling, smooth lotus seed paste, thin Cantonese pastry skin, elegant oriental tea table, moonlight, osmanthus flowers, warm cinematic lighting, champagne gold accents, high-end bakery product photography, no text, no watermark",
  cutOpen:
    "macro shot of sliced egg yolk lotus mooncake, golden lava salted egg yolk center, smooth low sugar lotus paste, thin mooncake crust, premium food photography, dark elegant background, warm light, high-end Chinese mooncake, appetizing texture, no text, no watermark",
  saltedYolk:
    "whole golden salted egg yolks, glossy and sandy texture, premium ingredient photography, dark oriental table, warm cinematic lighting, champagne gold accents, refined composition, no text, no watermark",
  lotusPaste:
    "smooth low sugar lotus seed paste in ceramic bowl, premium ingredient photography, lotus seeds beside ceramic bowl, dark elegant background, warm cinematic lighting, refined composition, no text, no watermark",
  lotusSeed:
    "premium lotus seeds in ceramic bowl, lotus seed ingredients, dark oriental tea table, warm cinematic lighting, elegant black and gold mood, refined ingredient photography, no text, no watermark",
  mooncakeCrust:
    "Cantonese mooncake crust and traditional mooncake mold, glossy golden crust texture, handmade Chinese pastry process, dark kitchen table, warm golden lighting, premium bakery craftsmanship, elegant composition, no text, no watermark",
  baking:
    "freshly baked golden Cantonese mooncakes on baking tray, warm steam, premium bakery scene, dark background, cinematic warm lighting, Mid-Autumn Chinese pastry, appetizing, no text, no watermark",
  giftBox:
    "luxury black and gold Chinese Mid-Autumn mooncake gift box, opened gift box with egg yolk lotus mooncakes inside, elegant oriental packaging, tea set, moonlight and osmanthus flowers, premium food gift photography, dark background, champagne gold accents, no text, no watermark",
  teaScene:
    "egg yolk lotus mooncake with Chinese tea set, elegant Mid-Autumn tea scene, osmanthus flowers, dark oriental table, black and gold aesthetic, warm natural light, premium Chinese pastry photography, refined minimal composition, no text, no watermark",
};

export const eggYolkLotusMooncakeProductData = {
  hero: {
    breadcrumb: [
      { label: "首页", href: "/" },
      { label: "产品系列", href: "/products" },
      { label: "蛋黄莲蓉月饼", href: "/products/egg-yolk-lotus-mooncake" },
    ],
    title: "云酥坊 · 经典蛋黄莲蓉月饼",
    headline: "整颗沙糯蛋黄",
    subtitle: "低糖莲蓉，一口流心不腻口",
    description:
      "甄选完整咸蛋黄，搭配慢熬低糖莲蓉，复刻地道广式中秋味。皮薄馅足，咸甜平衡，自食是团圆本味，送礼是中秋体面。",
    image: eggYolkLotusMooncakeImages.hero,
    primaryCta: { href: "/reserve", label: "立即预订" } satisfies DetailLink,
    secondaryCta: { href: "#gift-specs", label: "查看礼盒规格" } satisfies DetailLink,
    tags: ["整颗蛋黄", "低糖莲蓉", "皮薄馅足", "中秋现做"],
  },
  problems: {
    title: "先解决月饼常见的三个问题",
    items: [
      { title: "蛋黄碎小？", text: "整颗咸蛋黄完整入馅，切开沙糯起沙。" },
      { title: "高糖齁甜？", text: "低糖莲蓉慢熬，温润清甜不腻口。" },
      { title: "厚皮少馅？", text: "正统广式皮薄馅足，软糯绵密不干噎。" },
    ],
  },
  highlights: {
    title: "甄选真材实料，告别流水线普通月饼",
    items: [
      {
        title: "完整整颗咸蛋黄",
        text: "沙糯起沙，切面完整。",
        image: eggYolkLotusMooncakeImages.saltedYolk,
      },
      {
        title: "手工低糖莲蓉",
        text: "细腻温润，清甜不齁。",
        image: eggYolkLotusMooncakeImages.lotusPaste,
      },
      {
        title: "广式皮薄馅足",
        text: "软糯绵密，咸甜平衡。",
        image: eggYolkLotusMooncakeImages.mooncakeCrust,
      },
      {
        title: "中秋现做现发",
        text: "短保锁鲜，无陈库存。",
        image: eggYolkLotusMooncakeImages.baking,
      },
    ],
  },
  craft: {
    title: "精选原料，自然本味",
    items: [
      {
        title: "整颗咸蛋黄",
        text: "色泽金黄，油脂饱满，沙糯咸香。",
        image: eggYolkLotusMooncakeImages.saltedYolk,
      },
      {
        title: "低糖莲蓉",
        text: "莲子慢熬成蓉，细腻清甜。",
        image: eggYolkLotusMooncakeImages.lotusPaste,
      },
      {
        title: "优质烘焙粉",
        text: "饼皮柔软透亮，不干不裂。",
        image: eggYolkLotusMooncakeImages.mooncakeCrust,
      },
      {
        title: "科学控糖配比",
        text: "减少甜腻，保留中秋本味。",
        image: eggYolkLotusMooncakeImages.teaScene,
      },
    ],
    badges: ["无碎蛋黄", "无工业糖浆", "无陈年库存", "当季现做"],
  },
  taste: {
    title: "三层黄金口感，咸甜均衡不腻",
    image: eggYolkLotusMooncakeImages.cutOpen,
    items: [
      { title: "表层广式饼皮", text: "轻薄柔润，回油透亮。" },
      { title: "中层低糖莲蓉", text: "细腻顺滑，清甜不齁。" },
      { title: "内芯整颗蛋黄", text: "沙糯起沙，咸香浓郁。" },
    ],
    summary: "软、糯、润、沙，层层递进，越嚼越香。",
  },
  process: {
    title: "匠心慢工，成就经典中秋味",
    steps: [
      {
        title: "人工精筛蛋黄",
        text: "逐颗筛选，剔除破损空心。",
        image: eggYolkLotusMooncakeImages.saltedYolk,
      },
      {
        title: "文火慢熬莲蓉",
        text: "莲子去芯，慢熬成蓉。",
        image: eggYolkLotusMooncakeImages.lotusPaste,
      },
      {
        title: "手工包馅压模",
        text: "黄金比例称重，纹样清晰。",
        image: eggYolkLotusMooncakeImages.mooncakeCrust,
      },
      {
        title: "恒温烘烤回油",
        text: "上色通透，软糯润香。",
        image: eggYolkLotusMooncakeImages.baking,
      },
    ],
  },
  infoGift: {
    title: "产品信息",
    specs: [
      { label: "单枚规格", value: "50g" },
      { label: "礼盒规格", value: "6 / 8 / 12枚装" },
      { label: "保质期", value: "30天" },
      { label: "储存方式", value: "阴凉干燥密封保存" },
      { label: "食用建议", value: "搭配普洱 / 乌龙 / 绿茶" },
      { label: "发货方式", value: "中秋现做现发" },
    ],
    giftTitle: "一盒正统中秋月饼，承载团圆心意",
    scenes: [
      { title: "家庭团圆", text: "一枚月饼，一壶清茶，共享中秋。" },
      { title: "长辈礼赠", text: "低糖温润，经典稳妥。" },
      { title: "企业团购", text: "国风礼盒，支持定制。" },
    ],
    image: eggYolkLotusMooncakeImages.giftBox,
  },
  recommendations: {
    title: "多口味组合搭配，一盒集齐中秋风味",
    items: [
      {
        title: "纯莲蓉月饼",
        text: "无蛋黄纯莲香，清甜纯粹。",
        href: "/products/egg-yolk-lotus-mooncake",
        image: eggYolkLotusMooncakeImages.lotusPaste,
      },
      {
        title: "经典豆沙月饼",
        text: "红豆醇香，老少通吃。",
        href: "/products/red-bean-mooncake",
        image: {
          src: "/images/products/egg-yolk-pastry/red-bean-paste.jpg",
          alt: "经典豆沙月饼红豆馅风味展示",
          ratio: "4:3",
        } satisfies DetailImage,
      },
      {
        title: "传统五仁月饼",
        text: "坚果醇香，长辈喜爱。",
        href: "/products/five-nuts-mooncake",
        image: {
          src: "/images/products/five-nut-mooncake.jpg",
          alt: "传统五仁月饼风味展示",
          ratio: "4:3",
        } satisfies DetailImage,
      },
      {
        title: "特色冬翅月饼",
        text: "新颖口感，丰富礼盒层次。",
        href: "/products/winter-melon-mooncake",
        image: eggYolkLotusMooncakeImages.teaScene,
      },
    ],
  },
  bottomCta: {
    title: "中秋时令限定，建议提前预订",
    subtitle: "每日限量现做，节前订单排期中，早预订早锁单。",
    primaryCta: { href: "/reserve", label: "立即预订" } satisfies DetailLink,
    secondaryCta: { href: "/contact", label: "企业团购" } satisfies DetailLink,
    guarantees: ["官方直营", "当季现做", "加固包装", "售后无忧"],
    notice:
      "因短保新鲜属性，非质量问题拆封后不支持退换。如有破损、变质等问题，请在签收24小时内联系客服处理。",
  },
} as const;
