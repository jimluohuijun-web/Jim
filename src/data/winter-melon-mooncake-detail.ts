import type { SiteImage } from "@/lib/site-images";

type DetailLink = {
  href: string;
  label: string;
};

type DetailImage = Pick<SiteImage, "src" | "alt" | "ratio">;

export const winterMelonMooncakeImages = {
  hero: {
    src: "/images/products/winter-melon-mooncake/hero.jpg",
    alt: "云酥坊特色古法冬翅月饼黑金中秋首屏主图",
    ratio: "16:9",
  } satisfies DetailImage,
  cutOpen: {
    src: "/images/products/winter-melon-mooncake/cut-open.jpg",
    alt: "特色古法冬翅月饼切面展示冬翅馅丝丝纹理",
    ratio: "16:9",
  } satisfies DetailImage,
  winterMelon: {
    src: "/images/products/winter-melon-mooncake/winter-melon.jpg",
    alt: "古法冬翅月饼新鲜冬瓜原料展示",
    ratio: "4:3",
  } satisfies DetailImage,
  process: {
    src: "/images/products/winter-melon-mooncake/process.jpg",
    alt: "古法冬翅月饼冬瓜切丝与手作工艺展示",
    ratio: "4:3",
  } satisfies DetailImage,
  winterMelonFilling: {
    src: "/images/products/winter-melon-mooncake/winter-melon-filling.jpg",
    alt: "古法冬翅月饼低糖冬翅馅展示",
    ratio: "4:3",
  } satisfies DetailImage,
  flour: {
    src: "/images/products/winter-melon-mooncake/flour.jpg",
    alt: "古法冬翅月饼优质小麦粉原料展示",
    ratio: "4:3",
  } satisfies DetailImage,
  oil: {
    src: "/images/products/winter-melon-mooncake/oil.jpg",
    alt: "古法冬翅月饼植物油与配料展示",
    ratio: "4:3",
  } satisfies DetailImage,
  mooncakeCrust: {
    src: "/images/products/winter-melon-mooncake/mooncake-crust.jpg",
    alt: "特色冬翅月饼广式软皮与压模工艺展示",
    ratio: "4:3",
  } satisfies DetailImage,
  baking: {
    src: "/images/products/winter-melon-mooncake/baking.jpg",
    alt: "特色冬翅月饼中秋现做现发展示",
    ratio: "4:3",
  } satisfies DetailImage,
  giftBox: {
    src: "/images/products/winter-melon-mooncake/gift-box.jpg",
    alt: "云酥坊特色冬翅月饼黑金中秋礼盒展示",
    ratio: "16:9",
  } satisfies DetailImage,
  teaScene: {
    src: "/images/products/winter-melon-mooncake/tea-scene.jpg",
    alt: "特色冬翅月饼搭配中式茶席场景",
    ratio: "16:9",
  } satisfies DetailImage,
};

export const winterMelonMooncakeImagePrompts = {
  hero:
    "premium Cantonese winter melon mooncake photography, luxury Chinese Mid-Autumn pastry, black and gold background, sliced winter melon mooncake with translucent shredded winter melon filling, glossy thin mooncake crust, elegant oriental tea table, osmanthus flowers, moonlight mood, warm cinematic lighting, champagne gold accents, shallow depth of field, high-end gift pastry photography, refined composition, no text, no watermark",
  cutOpen:
    "macro shot of sliced Cantonese winter melon mooncake, translucent shredded winter melon filling, silky fibrous texture, thin glossy mooncake crust, premium food photography, dark elegant background, warm light, high-end Chinese Mid-Autumn pastry, appetizing texture, no text, no watermark",
  winterMelon:
    "fresh winter melon ingredient photography, clean cut winter melon on elegant dark oriental table, warm light, premium food ingredient styling, black and gold mood, refined composition, no text, no watermark",
  process:
    "traditional Chinese pastry making process, winter melon being sliced and simmered, handmade Cantonese mooncake preparation, elegant warm light, dark refined background, premium craftsmanship photography, no text, no watermark",
  winterMelonFilling:
    "traditional winter melon filling, silky shredded translucent filling in ceramic bowl, premium Chinese pastry ingredient photography, elegant dark background, warm cinematic lighting, refined composition, no text, no watermark",
  flour:
    "premium wheat flour in ceramic bowl, bakery ingredient photography, dark oriental background, warm golden lighting, refined luxury composition, no text, no watermark",
  oil:
    "premium baking oil ingredient photography, elegant ceramic container, dark oriental table, warm cinematic lighting, black and gold luxury mood, refined composition, no text, no watermark",
  mooncakeCrust:
    "Cantonese mooncake crust and traditional mooncake mold, glossy golden crust texture, handmade Chinese pastry process, dark kitchen table, warm golden lighting, premium bakery craftsmanship, elegant composition, no text, no watermark",
  baking:
    "freshly baked Cantonese winter melon mooncakes on baking tray, golden glossy crust, clear traditional patterns, warm steam, premium bakery scene, dark background, cinematic warm lighting, handmade Chinese pastry, appetizing, no text, no watermark",
  giftBox:
    "luxury black and gold Chinese Mid-Autumn mooncake gift box, opened gift box with winter melon mooncakes inside, elegant oriental packaging, tea set, osmanthus flowers, moonlight mood, premium food gift photography, dark background, champagne gold accents, no text, no watermark",
  teaScene:
    "winter melon mooncake with Chinese tea set, elegant Mid-Autumn tea scene, osmanthus flowers, dark oriental table, black and gold aesthetic, warm natural light, premium Chinese pastry photography, refined minimal composition, no text, no watermark",
};

export const winterMelonMooncakeProductData = {
  hero: {
    breadcrumb: [
      { label: "首页", href: "/" },
      { label: "产品系列", href: "/products" },
      { label: "冬翅月饼", href: "/products/winter-melon-mooncake" },
    ],
    title: "云酥坊 · 特色古法冬翅月饼",
    headline: "古法冬瓜熬冬翅",
    subtitle: "清甜解腻，解锁中秋新式正统味",
    description:
      "甄选新鲜冬瓜古法慢熬冬翅馅，搭配正统广式软皮。丝丝绵柔、清甜温润、清爽不腻，自食轻甜本味，送礼新意体面。",
    image: winterMelonMooncakeImages.hero,
    primaryCta: { href: "/reserve", label: "立即预订" } satisfies DetailLink,
    secondaryCta: { href: "#gift-specs", label: "查看礼盒规格" } satisfies DetailLink,
    tags: ["古法冬翅", "低糖清甜", "广式软皮", "现做现发"],
  },
  problems: {
    title: "先解决月饼常见的三个问题",
    items: [
      { title: "月饼太腻？", text: "冬瓜真材制馅，清甜轻盈不厚重。" },
      { title: "口味太普通？", text: "冬翅丝绒口感，礼盒更有新意。" },
      { title: "甜食太齁？", text: "低糖克制配方，老少都更容易接受。" },
    ],
  },
  highlights: {
    title: "甄选冬瓜真材实料，一口解锁新式清爽味",
    items: [
      {
        title: "古法冬瓜冬翅",
        text: "丝丝分明，真料看得见。",
        image: winterMelonMooncakeImages.winterMelonFilling,
      },
      {
        title: "低糖轻甜配方",
        text: "清爽解腻，不油不齁。",
        image: winterMelonMooncakeImages.process,
      },
      {
        title: "正统广式软皮",
        text: "皮薄馅足，柔润顺滑。",
        image: winterMelonMooncakeImages.mooncakeCrust,
      },
      {
        title: "中秋现做现发",
        text: "短保锁鲜，风味更新鲜。",
        image: winterMelonMooncakeImages.baking,
      },
    ],
  },
  craft: {
    title: "精选好料，自然本味",
    subtitle: "好冬翅，从新鲜冬瓜真熬制开始",
    items: [
      {
        title: "新鲜冬瓜",
        text: "真材取馅，天然清润。",
        image: winterMelonMooncakeImages.winterMelon,
      },
      {
        title: "古法冬翅馅",
        text: "文火慢熬，丝丝绵柔。",
        image: winterMelonMooncakeImages.winterMelonFilling,
      },
      {
        title: "优质小麦粉",
        text: "饼皮柔软，广式质感。",
        image: winterMelonMooncakeImages.flour,
      },
      {
        title: "精控糖粉与植物油",
        text: "甜度克制，清爽不腻。",
        image: winterMelonMooncakeImages.oil,
      },
    ],
    badges: ["新鲜冬瓜制馅", "无人工香精", "无工业糖浆", "低糖清润", "当季现做"],
  },
  taste: {
    title: "柔、润、清、甜，层层递进",
    image: winterMelonMooncakeImages.cutOpen,
    items: [
      { title: "表层广式饼皮", text: "轻薄柔软，自然回油。" },
      { title: "中层冬翅馅", text: "丝丝绵柔，清甜不腻。" },
      { title: "内芯冬瓜本香", text: "风味干净，回甘清爽。" },
    ],
    summary: "告别传统月饼厚重甜腻，冬翅月饼更轻盈、更耐吃。",
  },
  process: {
    title: "守古法、弃重糖，以慢工艺做清爽中秋味",
    steps: [
      {
        title: "新鲜冬瓜切丝去涩",
        text: "甄选厚肉冬瓜，精切漂洗，口感更清润。",
        image: winterMelonMooncakeImages.process,
      },
      {
        title: "文火慢熬收汁成翅",
        text: "慢熬挂霜，形成丝绒冬翅质感。",
        image: winterMelonMooncakeImages.winterMelonFilling,
      },
      {
        title: "精准称重包馅",
        text: "皮馅比例均衡，手工成型更饱满。",
        image: winterMelonMooncakeImages.mooncakeCrust,
      },
      {
        title: "分段恒温烘烤",
        text: "广式软皮自然回油，口感更柔润。",
        image: winterMelonMooncakeImages.baking,
      },
    ],
    summary: "古法慢熬冬翅，现做现发，保留中秋更清爽的一面。",
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
    giftTitle: "一盒清爽冬翅风味，补足礼盒新意",
    scenes: [
      { title: "家庭团圆", text: "清甜温润，搭配清茶更合适。" },
      { title: "长辈礼赠", text: "低糖不腻，送长辈更贴心。" },
      { title: "企业团购", text: "礼盒高级，支持定制更体面。" },
    ],
    image: winterMelonMooncakeImages.giftBox,
  },
  recommendations: {
    title: "新意搭经典，一盒更有层次",
    items: [
      {
        title: "蛋黄莲蓉月饼",
        text: "整颗蛋黄，咸甜平衡。",
        href: "/products/egg-yolk-lotus-mooncake",
        image: {
          src: "/images/products/egg-yolk-lotus-mooncake/cut-open.jpg",
          alt: "蛋黄莲蓉月饼切面推荐图",
          ratio: "4:3",
        } satisfies DetailImage,
      },
      {
        title: "经典五仁月饼",
        text: "真材五仁，越嚼越香。",
        href: "/products/five-nuts-mooncake",
        image: {
          src: "/images/products/five-nuts-mooncake/cut-open.jpg",
          alt: "传统五仁月饼切面推荐图",
          ratio: "4:3",
        } satisfies DetailImage,
      },
      {
        title: "纯莲蓉月饼",
        text: "清甜温润，细腻顺滑。",
        href: "/products/egg-yolk-lotus-mooncake",
        image: {
          src: "/images/products/egg-yolk-lotus-mooncake/lotus-paste.jpg",
          alt: "纯莲蓉月饼口味推荐图",
          ratio: "4:3",
        } satisfies DetailImage,
      },
      {
        title: "经典豆沙月饼",
        text: "红豆醇香，老少都爱。",
        href: "/products/red-bean-mooncake",
        image: {
          src: "/images/products/red-bean-mooncake/cut-open.jpg",
          alt: "经典豆沙月饼切面推荐图",
          ratio: "4:3",
        } satisfies DetailImage,
      },
    ],
  },
  bottomCta: {
    title: "中秋时令限定，建议提前预订",
    subtitle: "冬翅馅料古法慢熬，工序繁琐，产能有限。提前锁定新鲜批次，避免节前断货。",
    primaryCta: { href: "/reserve", label: "立即预订" } satisfies DetailLink,
    secondaryCta: { href: "/contact", label: "企业团购" } satisfies DetailLink,
    guarantees: ["官方直营", "当季现做", "加固包装", "售后无忧"],
    notice:
      "因短保新鲜属性，非质量问题拆封后不支持退换。如有破损、变质等问题，请在签收24小时内联系客服处理。",
  },
};
