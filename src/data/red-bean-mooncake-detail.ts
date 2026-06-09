import type { SiteImage } from "@/lib/site-images";

type DetailLink = {
  href: string;
  label: string;
};

type DetailImage = Pick<SiteImage, "src" | "alt" | "ratio">;

export const redBeanMooncakeImages = {
  hero: {
    src: "/images/products/red-bean-mooncake/hero.jpg",
    alt: "云酥坊经典豆沙月饼黑金中秋首屏主图",
    ratio: "16:9",
  } satisfies DetailImage,
  cutOpen: {
    src: "/images/products/red-bean-mooncake/cut-open.jpg",
    alt: "经典豆沙月饼切面展示绵密红豆沙馅",
    ratio: "16:9",
  } satisfies DetailImage,
  redBeans: {
    src: "/images/products/red-bean-mooncake-process-1-red-beans.jpg",
    alt: "经典豆沙月饼红小豆原料展示",
    ratio: "4:3",
  } satisfies DetailImage,
  redBeanPaste: {
    src: "/images/products/red-bean-mooncake-process-2-paste.jpg",
    alt: "经典豆沙月饼低糖豆沙馅展示",
    ratio: "4:3",
  } satisfies DetailImage,
  processWrapping: {
    src: "/images/products/red-bean-mooncake-process-3-wrapping.jpg",
    alt: "经典豆沙月饼精准称重包馅工艺展示",
    ratio: "4:3",
  } satisfies DetailImage,
  processFinished: {
    src: "/images/products/red-bean-mooncake-process-4-finished.jpg",
    alt: "经典豆沙月饼切面展示深红豆沙馅",
    ratio: "4:3",
  } satisfies DetailImage,
  flour: {
    src: "/images/products/red-bean-mooncake/flour.jpg",
    alt: "经典豆沙月饼优质小麦粉原料展示",
    ratio: "4:3",
  } satisfies DetailImage,
  oilButter: {
    src: "/images/products/red-bean-mooncake/oil-butter.jpg",
    alt: "经典豆沙月饼优质黄油与植物油原料展示",
    ratio: "4:3",
  } satisfies DetailImage,
  mooncakeCrust: {
    src: "/images/products/red-bean-mooncake/mooncake-crust.jpg",
    alt: "经典豆沙月饼广式软皮与压模工艺展示",
    ratio: "4:3",
  } satisfies DetailImage,
  baking: {
    src: "/images/products/red-bean-mooncake/baking.jpg",
    alt: "经典豆沙月饼中秋现做现发展示",
    ratio: "4:3",
  } satisfies DetailImage,
  giftBox: {
    src: "/images/products/red-bean-mooncake/gift-box.jpg",
    alt: "云酥坊经典豆沙月饼黑金中秋礼盒展示",
    ratio: "16:9",
  } satisfies DetailImage,
  teaScene: {
    src: "/images/products/red-bean-mooncake/tea-scene.jpg",
    alt: "经典豆沙月饼搭配中式茶席场景",
    ratio: "16:9",
  } satisfies DetailImage,
};

export const redBeanMooncakeImagePrompts = {
  hero:
    "premium Cantonese red bean mooncake photography, luxury Chinese Mid-Autumn pastry, black and gold background, sliced red bean paste mooncake with smooth dark red bean filling, glossy thin mooncake crust, elegant oriental tea table, osmanthus flowers, red beans, warm cinematic lighting, champagne gold accents, shallow depth of field, high-end gift pastry photography, refined composition, no text, no watermark",
  cutOpen:
    "macro shot of sliced Cantonese red bean mooncake, smooth red bean paste filling, dense and silky texture, thin glossy mooncake crust, premium food photography, dark elegant background, warm light, high-end Chinese Mid-Autumn pastry, appetizing texture, no text, no watermark",
  redBeans:
    "premium red beans in ceramic bowl, rich natural texture, dark oriental table, warm cinematic lighting, champagne gold accents, refined ingredient photography, no text, no watermark",
  redBeanPaste:
    "smooth red bean paste, premium ingredient photography, deep red brown paste texture, red beans beside ceramic bowl, dark elegant background, warm cinematic lighting, refined composition, no text, no watermark",
  flour:
    "premium wheat flour in ceramic bowl, bakery ingredient photography, dark oriental table, warm golden lighting, black and gold luxury mood, refined composition, no text, no watermark",
  oilButter:
    "premium baking oil and butter ingredients, ceramic bowl, dark oriental table, warm cinematic lighting, champagne gold accents, refined bakery ingredient composition, no text, no watermark",
  mooncakeCrust:
    "Cantonese mooncake crust and traditional mooncake mold, glossy golden crust texture, handmade Chinese pastry process, dark kitchen table, warm golden lighting, premium bakery craftsmanship, elegant composition, no text, no watermark",
  baking:
    "freshly baked Cantonese red bean mooncakes on baking tray, golden glossy crust, clear traditional patterns, warm steam, premium bakery scene, dark background, cinematic warm lighting, handmade Chinese pastry, appetizing, no text, no watermark",
  giftBox:
    "luxury black and gold Chinese Mid-Autumn mooncake gift box, opened gift box with red bean mooncakes inside, elegant oriental packaging, tea set, osmanthus flowers, red beans, moonlight mood, premium food gift photography, dark background, champagne gold accents, no text, no watermark",
  teaScene:
    "red bean mooncake with Chinese tea set, elegant Mid-Autumn tea scene, osmanthus flowers, red beans, dark oriental table, black and gold aesthetic, warm natural light, premium Chinese pastry photography, refined minimal composition, no text, no watermark",
};

export const redBeanMooncakeProductData = {
  hero: {
    breadcrumb: [
      { label: "首页", href: "/" },
      { label: "产品系列", href: "/products" },
      { label: "豆沙月饼", href: "/products/red-bean-mooncake" },
    ],
    title: "低糖经典豆沙月饼",
    headline: "一口红豆香",
    subtitle: "低糖不齁腻，复刻温润广式中秋味",
    description:
      "精选颗粒饱满红小豆，浸泡慢熬、手工翻炒成沙，搭配柔润广式饼皮。入口绵密软糯，豆香自然，甜度温和，老少皆宜。",
    image: redBeanMooncakeImages.hero,
    primaryCta: { href: "/reserve", label: "立即预订" } satisfies DetailLink,
    secondaryCta: { href: "#gift-specs", label: "查看礼盒规格" } satisfies DetailLink,
    tags: ["真红豆慢熬", "低糖不齁", "广式软皮", "中秋现做"],
  },
  problems: {
    title: "先解决豆沙月饼常见的三个问题",
    items: [
      { title: "豆沙太甜？", text: "低糖配方，清甜温和，不齁不腻。" },
      { title: "没有豆香？", text: "真红豆慢熬成沙，无香精，豆香自然。" },
      { title: "皮厚馅少？", text: "广式软皮，皮薄馅足，绵密不干噎。" },
    ],
  },
  highlights: {
    title: "真红豆慢熬成沙，全家都爱的经典中秋味",
    items: [
      {
        title: "真红豆慢熬",
        text: "豆香自然，细腻成沙。",
        image: redBeanMooncakeImages.redBeans,
      },
      {
        title: "低糖清甜配方",
        text: "不粘牙，不齁喉。",
        image: redBeanMooncakeImages.redBeanPaste,
      },
      {
        title: "广式回油软皮",
        text: "皮薄馅足，柔润顺滑。",
        image: redBeanMooncakeImages.mooncakeCrust,
      },
      {
        title: "中秋现做现发",
        text: "短保锁鲜，无陈库存。",
        image: redBeanMooncakeImages.baking,
      },
    ],
  },
  craft: {
    title: "精选好料，自然本味",
    subtitle: "好豆沙，从一颗好红豆开始",
    items: [
      {
        title: "优质红小豆",
        text: "颗粒饱满，豆香纯粹。",
        image: redBeanMooncakeImages.redBeans,
      },
      {
        title: "低糖豆沙馅",
        text: "慢熬成沙，绵密细腻。",
        image: redBeanMooncakeImages.redBeanPaste,
      },
      {
        title: "优质小麦粉",
        text: "饼皮柔润，广式柔软。",
        image: redBeanMooncakeImages.flour,
      },
      {
        title: "优质黄油 / 植物油",
        text: "回油润泽，香气柔和。",
        image: redBeanMooncakeImages.oilButter,
      },
    ],
    badges: ["真红豆慢熬", "无香精", "无工业糖浆", "无劣质豆沙", "当季现做"],
  },
  taste: {
    title: "三层温润口感，豆香绵密回甘",
    image: redBeanMooncakeImages.cutOpen,
    items: [
      { title: "表层广式软皮", text: "柔润细腻，不干不裂。" },
      { title: "中层低糖豆沙", text: "绵密顺滑，清甜不齁。" },
      { title: "内芯红豆本香", text: "温润醇厚，越嚼越香。" },
    ],
    summary: "软、糯、绵、香，四重口感合一。",
  },
  process: {
    title: "慢熬豆沙，细作饼皮",
    steps: [
      {
        title: "人工筛选红豆",
        text: "剔除碎粒坏粒，豆香更纯。",
        image: redBeanMooncakeImages.redBeans,
      },
      {
        title: "文火慢熬成沙",
        text: "浸泡慢煮，手工翻炒。",
        image: redBeanMooncakeImages.redBeanPaste,
      },
      {
        title: "精准称重包馅",
        text: "皮薄馅足，大小均匀。",
        image: redBeanMooncakeImages.processWrapping,
      },
      {
        title: "分段烘烤回油",
        text: "饼皮柔润，豆香融合。",
        image: redBeanMooncakeImages.processFinished,
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
    giftTitle: "一盒经典豆沙月饼，装下温润团圆心意",
    scenes: [
      { title: "家庭团圆", text: "一口红豆香，温润又熟悉。" },
      { title: "长辈礼赠", text: "低糖温润，稳妥体面。" },
      { title: "企业团购", text: "国风礼盒，支持定制。" },
    ],
    image: redBeanMooncakeImages.giftBox,
  },
  recommendations: {
    title: "经典搭配，中秋送礼更周全",
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
        title: "经典五仁月饼",
        text: "真材五仁，长辈挚爱。",
        href: "/products/five-nuts-mooncake",
        image: {
          src: "/images/products/five-nuts-mooncake/cut-open.jpg",
          alt: "传统五仁月饼切面推荐图",
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
        title: "特色冬翅月饼",
        text: "新颖口感，丰富礼盒层次。",
        href: "/products/winter-melon-mooncake",
        image: redBeanMooncakeImages.teaScene,
      },
    ],
  },
  bottomCta: {
    title: "中秋时令限定，建议提前预订",
    subtitle: "经典大众款当季现做，节前订单持续增加，提前预订锁定新鲜批次。",
    primaryCta: { href: "/reserve", label: "立即预订" } satisfies DetailLink,
    secondaryCta: { href: "/contact", label: "企业团购" } satisfies DetailLink,
    guarantees: ["官方直营", "当季现做", "加固包装", "售后无忧"],
    notice:
      "因短保新鲜属性，非质量问题拆封后不支持退换。如有破损、变质等问题，请在签收24小时内联系客服处理。",
  },
} as const;
