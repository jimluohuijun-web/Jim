import type { SiteImage } from "@/lib/site-images";

type DetailLink = {
  href: string;
  label: string;
};

type DetailImage = Pick<SiteImage, "src" | "alt" | "ratio">;

export const classicEggYolkPastryImages = {
  hero: {
    src: "/images/products/egg-yolk-pastry/hero.jpg",
    alt: "云酥坊经典蛋黄酥黑金茶席主图",
    ratio: "4:3",
  } satisfies DetailImage,
  cutOpen: {
    src: "/images/products/egg-yolk-pastry/cut-open.jpg",
    alt: "云酥坊经典蛋黄酥切面特写",
    ratio: "4:3",
  } satisfies DetailImage,
  saltedYolk: {
    src: "/images/products/egg-yolk-pastry/salted-yolk.jpg",
    alt: "金黄色咸蛋黄原料特写",
    ratio: "4:3",
  } satisfies DetailImage,
  redBeanPaste: {
    src: "/images/products/egg-yolk-pastry/red-bean-paste.jpg",
    alt: "低糖红豆沙质感特写",
    ratio: "4:3",
  } satisfies DetailImage,
  pastryLayers: {
    src: "/images/products/egg-yolk-pastry/pastry-layers.jpg",
    alt: "蛋黄酥手工开酥层次图",
    ratio: "4:3",
  } satisfies DetailImage,
  highlightWholeYolk: {
    src: "/images/products/egg-yolk-pastry-highlight-1.jpg",
    alt: "切开的蛋黄酥展示完整饱满咸蛋黄与红豆沙层",
    ratio: "4:3",
  } satisfies DetailImage,
  highlightRedBeanPaste: {
    src: "/images/products/egg-yolk-pastry-highlight-2.jpg",
    alt: "切开的蛋黄酥展示细腻低糖红豆沙馅",
    ratio: "4:3",
  } satisfies DetailImage,
  baking: {
    src: "/images/products/egg-yolk-pastry/baking.jpg",
    alt: "蛋黄酥现做现发烘焙图",
    ratio: "4:3",
  } satisfies DetailImage,
  faqWholeYolk: {
    src: "/images/products/egg-yolk-faq-1.jpg",
    alt: "切开的蛋黄酥展示完整饱满咸蛋黄",
    ratio: "4:3",
  } satisfies DetailImage,
  faqRedBean: {
    src: "/images/products/egg-yolk-faq-2.jpg",
    alt: "切开的蛋黄酥展示细腻低糖红豆沙馅",
    ratio: "4:3",
  } satisfies DetailImage,
  faqPastryLayers: {
    src: "/images/products/egg-yolk-faq-3.jpg",
    alt: "蛋黄酥薄酥层次与自然掉渣细节",
    ratio: "4:3",
  } satisfies DetailImage,
  giftBox: {
    src: "/images/products/egg-yolk-pastry/gift-box.jpg",
    alt: "云酥坊经典蛋黄酥黑金礼盒展示",
    ratio: "16:9",
  } satisfies DetailImage,
  teaScene: {
    src: "/images/products/egg-yolk-pastry/tea-scene.jpg",
    alt: "经典蛋黄酥搭配中式茶具场景",
    ratio: "3:2",
  } satisfies DetailImage,
};

export const classicEggYolkPastryDetailData = {
  hero: {
    breadcrumb: [
      { label: "首页", href: "/" },
      { label: "产品系列", href: "/products" },
      { label: "经典蛋黄酥", href: "/products/classic-egg-yolk-pastry" },
    ],
    title: "云酥坊 · 经典蛋黄酥",
    headline: "整颗咸蛋黄爆沙流心",
    subtitle: "低糖红豆沙包裹，咸甜不腻一口满足",
    description:
      "严选整颗饱满咸蛋黄，搭配慢熬低糖红豆沙，裹上36层手工薄酥。外酥内软，咸甜平衡，自食解馋，送礼体面。",
    image: classicEggYolkPastryImages.hero,
    primaryCta: { href: "/reserve", label: "立即预订" } satisfies DetailLink,
    secondaryCta: { href: "#gift-specs", label: "查看礼盒规格" } satisfies DetailLink,
    tags: ["整颗蛋黄", "低糖豆沙", "36层薄酥", "现做现发"],
  },
  problems: {
    title: "先解决蛋黄酥最常见的三个问题",
    items: [
      {
        title: "蛋黄碎小？",
        text: "整颗咸蛋黄完整入馅，切开看得见。",
        image: classicEggYolkPastryImages.faqWholeYolk,
      },
      {
        title: "豆沙太甜？",
        text: "低糖红豆沙慢熬，清甜不齁。",
        image: classicEggYolkPastryImages.faqRedBean,
      },
      {
        title: "酥皮厚硬？",
        text: "36层手工薄酥，轻咬掉渣。",
        image: classicEggYolkPastryImages.faqPastryLayers,
      },
    ],
  },
  highlights: {
    title: "一枚好蛋黄酥，只认好蛋黄、好豆沙、薄酥皮",
    items: [
      {
        title: "整颗咸蛋黄",
        text: "饱满出油，沙糯咸香。",
        image: classicEggYolkPastryImages.highlightWholeYolk,
      },
      {
        title: "低糖红豆沙",
        text: "细腻顺滑，清甜不腻。",
        image: classicEggYolkPastryImages.highlightRedBeanPaste,
      },
      {
        title: "36层手工薄酥",
        text: "层层分明，入口轻盈。",
        image: classicEggYolkPastryImages.pastryLayers,
      },
      {
        title: "现做现发",
        text: "每日现烤，新鲜送达。",
        image: classicEggYolkPastryImages.baking,
      },
    ],
  },
  craft: {
    title: "原料与匠心",
    image: classicEggYolkPastryImages.cutOpen,
    points: [
      { title: "整颗蛋黄", text: "人工筛选完整蛋黄" },
      { title: "低糖豆沙", text: "慢火熬制，细腻清甜" },
      { title: "手工开酥", text: "反复折叠，层层分明" },
      { title: "恒温烘烤", text: "锁住酥香与湿润" },
    ],
  },
  taste: {
    title: "外酥 · 软糯 · 爆沙",
    image: classicEggYolkPastryImages.cutOpen,
    items: [
      { title: "外层薄酥", text: "层层酥脆" },
      { title: "中层豆沙", text: "绵密清甜" },
      { title: "内芯蛋黄", text: "沙糯流心" },
    ],
  },
  infoGift: {
    title: "产品信息",
    specs: [
      { label: "单枚规格", value: "约50g" },
      { label: "礼盒规格", value: "2 / 4 / 8枚装" },
      { label: "保质期", value: "15天" },
      { label: "储存方式", value: "阴凉密封保存" },
      { label: "发货方式", value: "现做现发" },
    ],
    reheatNote: "建议搭配清茶食用，微微复烤后酥香更明显。",
    reheatTips: [
      { label: "烤箱", value: "160°C 3-5分钟" },
      { label: "空气炸锅", value: "150°C 2-3分钟" },
      { label: "平底锅", value: "小火双面微热" },
    ],
    giftTitle: "自食解馋，送礼体面",
    scenes: [
      { title: "下午茶", text: "配一杯清茶，轻松解馋。" },
      { title: "节日伴手礼", text: "黑金礼盒，送人体面。" },
      { title: "企业团购", text: "多规格可选，适合批量礼赠。" },
    ],
    image: classicEggYolkPastryImages.giftBox,
  },
  bottomCta: {
    title: "每日现做限量，建议提前预订",
    subtitle: "短保锁鲜，新鲜出炉，整颗蛋黄酥香直达。",
    primaryCta: { href: "/reserve", label: "立即预订" } satisfies DetailLink,
    secondaryCta: { href: "#gift-specs", label: "查看礼盒规格" } satisfies DetailLink,
    guarantees: ["官方直营", "现做现发", "加固包装", "售后无忧"],
  },
};
