import type { SiteImage } from "@/lib/site-images";

type DetailLink = {
  href: string;
  label: string;
};

type DetailImage = Pick<SiteImage, "src" | "alt" | "ratio">;

export const fiveNutsMooncakeImages = {
  hero: {
    src: "/images/products/five-nuts-mooncake/hero.jpg",
    alt: "云酥坊传统广式五仁月饼黑金中秋首屏主图",
    ratio: "16:9",
  } satisfies DetailImage,
  cutOpen: {
    src: "/images/products/five-nuts-mooncake/cut-open.jpg",
    alt: "传统广式五仁月饼切面展示坚果满料",
    ratio: "16:9",
  } satisfies DetailImage,
  fiveNutsMix: {
    src: "/images/products/five-nuts-mooncake/five-nuts-mix.jpg",
    alt: "五仁月饼核桃杏仁瓜子仁白芝麻花生仁原料展示",
    ratio: "4:3",
  } satisfies DetailImage,
  walnut: {
    src: "/images/products/five-nuts-mooncake/walnut.jpg",
    alt: "五仁月饼核桃仁原料展示",
    ratio: "4:3",
  } satisfies DetailImage,
  almond: {
    src: "/images/products/five-nuts-mooncake/almond.jpg",
    alt: "五仁月饼杏仁与坚果原料展示",
    ratio: "4:3",
  } satisfies DetailImage,
  sunflowerSeeds: {
    src: "/images/products/five-nuts-mooncake/sunflower-seeds.jpg",
    alt: "五仁月饼酥脆瓜子仁原料展示",
    ratio: "4:3",
  } satisfies DetailImage,
  whiteSesame: {
    src: "/images/products/five-nuts-mooncake/white-sesame.jpg",
    alt: "五仁月饼醇香白芝麻原料展示",
    ratio: "4:3",
  } satisfies DetailImage,
  peanut: {
    src: "/images/products/five-nuts-mooncake/peanut.jpg",
    alt: "五仁月饼饱满花生仁原料展示",
    ratio: "4:3",
  } satisfies DetailImage,
  mooncakeCrust: {
    src: "/images/products/five-nuts-mooncake/mooncake-crust.jpg",
    alt: "传统广式五仁月饼回油软皮与压模工艺展示",
    ratio: "4:3",
  } satisfies DetailImage,
  baking: {
    src: "/images/products/five-nuts-mooncake/baking.jpg",
    alt: "传统广式五仁月饼中秋现做现发展示",
    ratio: "4:3",
  } satisfies DetailImage,
  giftBox: {
    src: "/images/products/five-nuts-mooncake/gift-box.jpg",
    alt: "云酥坊传统广式五仁月饼黑金中秋礼盒展示",
    ratio: "16:9",
  } satisfies DetailImage,
  teaScene: {
    src: "/images/products/five-nuts-mooncake/tea-scene.jpg",
    alt: "传统广式五仁月饼搭配中式茶席场景",
    ratio: "16:9",
  } satisfies DetailImage,
};

export const fiveNutsMooncakeImagePrompts = {
  hero:
    "premium Cantonese five nuts mooncake photography, luxury Chinese Mid-Autumn pastry, black and gold background, sliced five nuts mooncake filled with walnuts almonds sunflower seeds sesame peanuts, glossy thin mooncake crust, elegant oriental tea table, osmanthus flowers, warm cinematic lighting, champagne gold accents, shallow depth of field, high-end gift pastry photography, refined composition, no text, no watermark",
  cutOpen:
    "macro shot of sliced Cantonese five nuts mooncake, dense mixed nut filling, walnuts almonds sunflower seeds sesame peanuts, thin glossy mooncake crust, premium food photography, dark elegant background, warm light, high-end Chinese Mid-Autumn pastry, appetizing texture, no text, no watermark",
  fiveNutsMix:
    "premium mixed nuts for Chinese five nuts mooncake, walnuts almonds sunflower seeds sesame peanuts, dark oriental table, warm cinematic lighting, black and gold luxury mood, refined ingredient photography, no text, no watermark",
  walnut:
    "premium walnut kernels, rich natural texture, dark oriental table, warm cinematic lighting, champagne gold accents, refined ingredient photography, no text, no watermark",
  almond:
    "premium almonds, clean natural nut texture, ceramic bowl, dark oriental table, warm cinematic lighting, elegant black and gold mood, refined ingredient photography, no text, no watermark",
  sunflowerSeeds:
    "premium sunflower seed kernels, golden natural texture, dark elegant background, warm cinematic lighting, refined ingredient photography, no text, no watermark",
  whiteSesame:
    "roasted white sesame seeds, premium ingredient photography, ceramic bowl, dark oriental table, warm golden lighting, refined composition, no text, no watermark",
  peanut:
    "roasted peanut kernels, premium ingredient photography, dark oriental table, warm cinematic lighting, champagne gold accents, refined composition, no text, no watermark",
  mooncakeCrust:
    "Cantonese mooncake crust and traditional mooncake mold, glossy golden crust texture, handmade Chinese pastry process, dark kitchen table, warm golden lighting, premium bakery craftsmanship, elegant composition, no text, no watermark",
  baking:
    "freshly baked Cantonese five nuts mooncakes on baking tray, golden glossy crust, clear traditional patterns, warm steam, premium bakery scene, dark background, cinematic warm lighting, handmade Chinese pastry, appetizing, no text, no watermark",
  giftBox:
    "luxury black and gold Chinese Mid-Autumn mooncake gift box, opened gift box with five nuts mooncakes inside, elegant oriental packaging, tea set, osmanthus flowers, nuts, moonlight mood, premium food gift photography, dark background, champagne gold accents, no text, no watermark",
  teaScene:
    "five nuts mooncake with Chinese tea set, elegant Mid-Autumn tea scene, osmanthus flowers, mixed nuts, dark oriental table, black and gold aesthetic, warm natural light, premium Chinese pastry photography, refined minimal composition, no text, no watermark",
};

export const fiveNutsMooncakeProductData = {
  hero: {
    breadcrumb: [
      { label: "首页", href: "/" },
      { label: "产品系列", href: "/products" },
      { label: "五仁月饼", href: "/products/five-nuts-mooncake" },
    ],
    title: "云酥坊 · 传统广式五仁月饼",
    headline: "无青红丝真五仁",
    subtitle: "满料坚果香，一口地道老式中秋味",
    description:
      "摒弃廉价青红丝、工业香精糖浆与粘牙齁甜。精选五种原生坚果，广式软皮文火细作，坚果本香纯粹，甜度克制，越嚼越香。",
    image: fiveNutsMooncakeImages.hero,
    primaryCta: { href: "/reserve", label: "立即预订" } satisfies DetailLink,
    secondaryCta: { href: "#gift-specs", label: "查看礼盒规格" } satisfies DetailLink,
    tags: ["无青红丝", "真五仁满料", "低糖不腻", "中秋现做"],
  },
  problems: {
    title: "先解决五仁月饼常见的三个问题",
    items: [
      { title: "青红丝太杂？", text: "零青红丝，纯坚果入馅，颗颗看得见。" },
      { title: "香精糖浆重？", text: "低糖原生配方，无香精，只留坚果本香。" },
      { title: "皮硬干噎？", text: "广式回油软皮，酥润扎实，不干不散。" },
    ],
  },
  highlights: {
    title: "弃廉价套路，守正统老味",
    items: [
      {
        title: "零青红丝纯坚果",
        text: "满料果仁，真材实料。",
        image: fiveNutsMooncakeImages.fiveNutsMix,
      },
      {
        title: "低糖原生配方",
        text: "不粘牙，不齁腻。",
        image: fiveNutsMooncakeImages.almond,
      },
      {
        title: "广式回油软皮",
        text: "皮薄馅足，酥润耐嚼。",
        image: fiveNutsMooncakeImages.mooncakeCrust,
      },
      {
        title: "中秋现做现发",
        text: "短保锁鲜，无陈库存。",
        image: fiveNutsMooncakeImages.baking,
      },
    ],
  },
  craft: {
    title: "精选五仁原料，自然本味",
    subtitle: "正宗好五仁，从不靠杂料凑数，只靠真坚果取胜",
    items: [
      {
        title: "饱满核桃仁",
        text: "醇厚浓香，咀嚼感十足。",
        image: fiveNutsMooncakeImages.walnut,
      },
      {
        title: "清香杏仁",
        text: "香气清润，无苦涩味。",
        image: fiveNutsMooncakeImages.almond,
      },
      {
        title: "酥脆瓜子仁",
        text: "颗粒饱满，丰富层次。",
        image: fiveNutsMooncakeImages.sunflowerSeeds,
      },
      {
        title: "醇香白芝麻",
        text: "微烘出香，回味悠长。",
        image: fiveNutsMooncakeImages.whiteSesame,
      },
      {
        title: "饱满花生仁",
        text: "酥香绵润，老式风味。",
        image: fiveNutsMooncakeImages.peanut,
      },
    ],
    badges: ["无青红丝", "无人工香精", "无工业糖浆", "无陈年坚果", "无碎末边角料"],
  },
  taste: {
    title: "一饼五味，酥润回甘",
    image: fiveNutsMooncakeImages.cutOpen,
    items: [
      { title: "表层广式饼皮", text: "自然回油，柔软不干。" },
      { title: "中层低糖坚果馅", text: "甜咸适度，不粘牙。" },
      { title: "内芯五仁满料", text: "果仁酥香，越嚼越香。" },
    ],
    summary: "酥、香、润、脆、醇，五重口感合一。",
  },
  process: {
    title: "守古法，去杂料，重匠心",
    steps: [
      {
        title: "人工精筛坚果",
        text: "剔除干瘪、碎末和油耗次品。",
        image: fiveNutsMooncakeImages.fiveNutsMix,
      },
      {
        title: "低温烘焙锁香",
        text: "激发天然熟香，不靠香精。",
        image: fiveNutsMooncakeImages.baking,
      },
      {
        title: "精准配比拌馅",
        text: "果仁分布均匀，馅料扎实。",
        image: fiveNutsMooncakeImages.sunflowerSeeds,
      },
      {
        title: "分段烘烤回油",
        text: "饼皮柔润，风味融合。",
        image: fiveNutsMooncakeImages.mooncakeCrust,
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
    giftTitle: "一盒正统老式五仁，撑得起中秋体面",
    scenes: [
      { title: "家庭团圆", text: "一口软皮果仁，复刻老味中秋。" },
      { title: "长辈礼赠", text: "低糖不腻，经典稳妥。" },
      { title: "企业团购", text: "国风礼盒，支持定制。" },
    ],
    image: fiveNutsMooncakeImages.giftBox,
  },
  recommendations: {
    title: "老味搭新味，中秋送礼更周全",
    items: [
      {
        title: "蛋黄莲蓉月饼",
        text: "整颗蛋黄，咸甜经典。",
        href: "/products/egg-yolk-lotus-mooncake",
        image: {
          src: "/images/products/egg-yolk-lotus-mooncake/cut-open.jpg",
          alt: "蛋黄莲蓉月饼切面推荐图",
          ratio: "4:3",
        } satisfies DetailImage,
      },
      {
        title: "纯莲蓉月饼",
        text: "清甜温润，口感细腻。",
        href: "/products/egg-yolk-lotus-mooncake",
        image: {
          src: "/images/products/egg-yolk-lotus-mooncake/lotus-paste.jpg",
          alt: "纯莲蓉月饼口味推荐图",
          ratio: "4:3",
        } satisfies DetailImage,
      },
      {
        title: "经典豆沙月饼",
        text: "红豆醇香，老少通吃。",
        href: "/products/red-bean-mooncake",
        image: {
          src: "/images/products/egg-yolk-pastry/red-bean-paste.jpg",
          alt: "经典豆沙月饼口味推荐图",
          ratio: "4:3",
        } satisfies DetailImage,
      },
      {
        title: "特色冬翅月饼",
        text: "新颖口感，丰富礼盒层次。",
        href: "/products/winter-melon-mooncake",
        image: fiveNutsMooncakeImages.teaScene,
      },
    ],
  },
  bottomCta: {
    title: "中秋时令限定，建议提前预订",
    subtitle: "纯坚果人工筛选，产能有限。节前订单持续排期，提前预订锁定新鲜批次。",
    primaryCta: { href: "/reserve", label: "立即预订" } satisfies DetailLink,
    secondaryCta: { href: "/contact", label: "企业团购" } satisfies DetailLink,
    guarantees: ["官方直营", "当季现做", "加固包装", "售后无忧"],
    notice: "因短保新鲜属性，非质量问题拆封后不支持退换。如有破损、变质等问题，请在签收24小时内联系客服处理。",
  },
} as const;
