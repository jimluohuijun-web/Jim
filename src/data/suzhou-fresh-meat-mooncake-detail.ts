import type { SiteImage } from "@/lib/site-images";

type DetailLink = {
  href: string;
  label: string;
};

type DetailImage = Pick<SiteImage, "src" | "alt" | "ratio">;

export const suzhouFreshMeatMooncakeData = {
  breadcrumb: [
    { label: "首页", href: "/" },
    { label: "产品系列", href: "/products" },
    { label: "苏式鲜肉月饼", href: "/products/suzhou-fresh-meat-mooncake" },
  ],
  hero: {
    tag: "咸口现烤系列",
    title: "苏式鲜肉月饼",
    subtitle: "12层苏式酥皮 · 黑毛猪鲜肉爆汁 · 咸香不腻",
    description:
      "严选黑毛猪后腿肉，肥瘦黄金3:7，搭配12层苏式手工酥皮。现烤现发，趁热一口酥皮簌簌掉渣，肉汁饱满鲜香。",
    primaryCta: { href: "/reserve", label: "立即预订" } satisfies DetailLink,
    secondaryCta: { href: "#gift-specs", label: "查看礼盒规格" } satisfies DetailLink,
    image: {
      src: "/images/products/meat-mooncake-card.webp",
      alt: "云酥坊苏式鲜肉月饼黑金茶席产品图",
      ratio: "4:3",
    } satisfies DetailImage,
    highlights: [
      { title: "12层苏酥", text: "层层起酥，酥脆掉渣" },
      { title: "鲜肉爆汁", text: "黑猪精选，肉香四溢" },
      { title: "现烤更香", text: "每日现烤，锁住鲜香" },
    ],
  },
  problems: {
    title: "先解决鲜肉月饼最常见的三个问题",
    items: [
      { title: "肉馅干柴", text: "黑毛猪后腿肉，手工现调，锁住肉汁" },
      { title: "酥皮油腻", text: "12层苏式起酥，层层酥脆，清香不腻" },
      { title: "甜口太腻", text: "咸口现烤爆款，中秋桌上更解腻" },
    ],
  },
  highlights: {
    title: "四大核心卖点，一口吃懂苏式鲜香",
    items: [
      {
        title: "黑毛猪后腿肉",
        text: "肉质紧实，鲜香弹嫩，油脂分布均匀",
        image: {
          src: "/images/home/craft-ingredients.jpg",
          alt: "云酥坊黑毛猪后腿肉与原料氛围图",
          ratio: "4:3",
        } satisfies DetailImage,
      },
      {
        title: "12层苏式酥皮",
        text: "手工起酥，层层分明，入口即化",
        image: {
          src: "/images/home/craft-layering.jpg",
          alt: "云酥坊苏式酥皮手工起酥图",
          ratio: "4:3",
        } satisfies DetailImage,
      },
      {
        title: "咸口解腻亮点",
        text: "秘制配方，咸香回甘，清爽不腻",
        image: {
          src: "/images/products/five-nut-mooncake.jpg",
          alt: "云酥坊咸香东方茶席风味图",
          ratio: "4:3",
        } satisfies DetailImage,
      },
      {
        title: "现烤现发",
        text: "每日现烤，锁鲜发货，新鲜送达",
        image: {
          src: "/images/home/craft-fresh.jpg",
          alt: "云酥坊每日现烤现发工艺图",
          ratio: "4:3",
        } satisfies DetailImage,
      },
    ],
  },
  craft: {
    title: "好鲜肉月饼，只用一块好肉、一张好酥皮",
    image: {
      src: "/images/home/craft-ingredients.jpg",
      alt: "云酥坊苏式鲜肉月饼切肉调馅手作氛围图",
      ratio: "4:3",
    } satisfies DetailImage,
    points: [
      {
        title: "精选黑毛猪后腿肉",
        text: "肥瘦黄金比例，手工现调，口感紧实多汁",
      },
      {
        title: "传承手工起酥工艺",
        text: "12层起酥，层层分明，酥脆不散",
      },
      {
        title: "秘制咸香配方",
        text: "轻盐轻料，突出肉香本味",
      },
      {
        title: "严格控温烘烤",
        text: "外皮金黄，内馅熟透，肉汁锁住",
      },
    ],
  },
  taste: {
    title: "外酥 · 内嫩 · 汁浓 · 香爆",
    image: {
      src: "/images/products/meat-mooncake-card.webp",
      alt: "云酥坊苏式鲜肉月饼切面近景",
      ratio: "4:3",
    } satisfies DetailImage,
    items: [
      { title: "酥到掉渣", text: "12层酥皮，一碰就碎" },
      { title: "肉馅多汁", text: "鲜肉紧实，汁水饱满" },
      { title: "咸香解腻", text: "咸香回甘，越吃越香" },
    ],
  },
  info: {
    title: "产品信息与复烤指南",
    specs: [
      { label: "单枚规格", value: "约50g" },
      { label: "礼盒规格", value: "6枚 / 12枚" },
      { label: "保质期", value: "4天（短保）" },
      { label: "储存方式", value: "冷藏（0–4℃）" },
    ],
    reheating: [
      { label: "空气炸锅", value: "180℃ · 3分钟" },
      { label: "烤箱", value: "160℃ · 5分钟" },
      { label: "平底锅", value: "小火 · 2分钟/面" },
    ],
    note: "复烤时间可根据设备和个人口感适当调整，以实际体验为准。",
  },
  gift: {
    title: "不是甜月饼，是中秋桌上更受欢迎的那一盘",
    image: {
      src: "/images/home/gift-box-banner.jpg",
      alt: "云酥坊黑金东方礼盒包装图",
      ratio: "16:9",
    } satisfies DetailImage,
    scenes: [
      { title: "中秋家宴", text: "咸香解腻，家人爱吃" },
      { title: "商务伴手礼", text: "体面大气，心意十足" },
      { title: "朋友小聚", text: "一口一个，抢手美味" },
      { title: "企业团购", text: "品质之选，专属定制" },
    ],
  },
  bottomCta: {
    title: "每日现烤限量，建议提前预订",
    subtitle: "新鲜出炉，顺丰冷链，安心直达",
    primaryCta: { href: "/reserve", label: "立即预订" } satisfies DetailLink,
    secondaryCta: { href: "/contact", label: "咨询礼盒" } satisfies DetailLink,
  },
};
