import type { Metadata } from "next";

import { getJournalHref, journalArticles } from "@/data/brand-journal";

export const seoSite = {
  name: "云酥坊 Yun Su Fang",
  shortName: "云酥坊",
  englishName: "Yun Su Fang",
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://www.yunsucake.com",
  defaultTitle: "云酥坊 Yun Su Fang｜加拿大中式手工酥点与中秋月饼礼盒",
  titleTemplate: "%s｜云酥坊 Yun Su Fang",
  defaultDescription:
    "云酥坊 Yun Su Fang 专注中式手工酥点、花酥、蛋黄酥与中秋月饼礼盒，为加拿大华人提供低糖不腻、手工制作、适合送礼与家庭分享的国风点心。",
  locale: "zh_CA",
  alternateLocales: ["en_CA", "zh_CN", "zh_TW"],
  ogImage: "/images/home/hero-main-mooncake-box.png",
} as const;

export type SeoEntry = {
  title: string;
  description: string;
  h1: string;
  keywords: string[];
  path: string;
  image?: string;
};

export const coreSeoKeywords = [
  "加拿大中式糕点",
  "加拿大中式酥点",
  "加拿大手工酥点",
  "加拿大蛋黄酥",
  "加拿大月饼礼盒",
  "加拿大中秋礼盒",
  "加拿大华人伴手礼",
  "多伦多中式点心",
  "温哥华中式点心",
  "华人送礼点心",
  "国风点心",
  "新中式糕点",
  "中式手工糕点",
  "低糖中式点心",
  "手工开酥",
  "花酥礼盒",
  "中式下午茶",
  "中秋送礼",
  "春节伴手礼",
  "Chinese pastries Canada",
  "handmade Chinese pastry Canada",
  "Chinese bakery Canada",
  "mooncake gift box Canada",
  "Mid-Autumn gift box Canada",
  "egg yolk pastry Canada",
  "Chinese dessert gift Canada",
  "Asian pastry gift box",
  "traditional Chinese pastry",
  "low sugar Chinese pastry",
  "Yun Su Fang",
  "Yunsufang",
  "YunSuFang pastry",
  "云酥坊",
  "云酥坊加拿大",
  "云酥坊蛋黄酥",
  "云酥坊月饼",
] as const;

export const pageSeoMap = {
  home: {
    path: "/",
    title: "云酥坊 Yun Su Fang｜加拿大中式手工酥点与中秋月饼礼盒",
    description:
      "云酥坊 Yun Su Fang 面向加拿大华人客户，提供中式手工酥点、蛋黄酥、花酥、凤梨酥与中秋月饼礼盒。低糖不腻，手工开酥，适合伴手礼、节日送礼与家庭下午茶。",
    h1: "加拿大华人喜爱的中式手工酥点",
    keywords: ["加拿大中式手工酥点", "加拿大蛋黄酥", "加拿大月饼礼盒", "华人伴手礼", "国风点心", "低糖中式点心", "Chinese pastries Canada"],
  },
  products: {
    path: "/products",
    title: "中式手工酥点系列｜蛋黄酥、花酥、凤梨酥",
    description:
      "浏览云酥坊中式手工酥点系列，包括蛋黄酥、桃花酥、荷花酥、牡丹酥、凤梨酥、抹茶酥等。手工制作，层层起酥，适合加拿大华人送礼、下午茶与节日分享。",
    h1: "中式手工酥点系列",
    keywords: ["中式手工酥点", "蛋黄酥", "花酥", "桃花酥", "荷花酥", "凤梨酥", "加拿大华人点心"],
  },
  mooncakes: {
    path: "/mooncakes",
    title: "加拿大中秋月饼礼盒｜广式月饼与苏式鲜肉月饼",
    description:
      "云酥坊为加拿大华人准备中秋月饼礼盒，包含蛋黄莲蓉、豆沙、五仁、苏式鲜肉月饼等口味。适合家庭团圆、节日送礼、企业团购与华人伴手礼。",
    h1: "加拿大华人中秋月饼礼盒",
    keywords: ["加拿大中秋月饼礼盒", "加拿大月饼", "华人中秋送礼", "广式月饼", "苏式鲜肉月饼", "mooncake gift box Canada"],
  },
  giftBox: {
    path: "/gift-box",
    title: "中式酥点礼盒｜加拿大华人伴手礼与节日送礼",
    description:
      "云酥坊中式酥点礼盒适合加拿大华人伴手礼、节日送礼、企业团购和家庭聚会。可搭配蛋黄酥、桃花酥、荷花酥、凤梨酥与中秋月饼。",
    h1: "适合加拿大华人送礼的中式酥点礼盒",
    keywords: ["加拿大华人伴手礼", "中式酥点礼盒", "中秋送礼", "春节伴手礼", "企业团购", "Chinese dessert gift Canada"],
  },
  reserve: {
    path: "/reserve",
    title: "云酥坊试吃登记｜加拿大中式手工酥点预订",
    description:
      "登记云酥坊中式手工酥点试吃，了解蛋黄酥、花酥、凤梨酥和中秋月饼礼盒。适合加拿大华人客户提前预订、节日送礼与家庭分享。",
    h1: "云酥坊中式酥点试吃登记",
    keywords: ["中式酥点试吃", "加拿大手工酥点预订", "蛋黄酥试吃", "月饼礼盒预订"],
  },
  about: {
    path: "/about",
    title: "关于云酥坊｜加拿大中式手工酥点品牌",
    description:
      "云酥坊 Yun Su Fang 是面向加拿大华人客户的中式手工酥点品牌，专注花酥、蛋黄酥、月饼礼盒与国风点心，以手工开酥、低糖不腻和东方审美传递传统糕点之美。",
    h1: "关于云酥坊 Yun Su Fang",
    keywords: ["加拿大中式手工酥点品牌", "国风点心品牌", "手工开酥", "东方花酥", "加拿大华人糕点"],
  },
  contact: {
    path: "/contact",
    title: "联系云酥坊｜加拿大中式酥点预订与礼盒咨询",
    description:
      "联系云酥坊 Yun Su Fang，咨询加拿大中式手工酥点、蛋黄酥、花酥、中秋月饼礼盒、企业团购与节日伴手礼预订。",
    h1: "联系云酥坊",
    keywords: ["加拿大中式酥点预订", "月饼礼盒咨询", "企业团购", "华人伴手礼预订"],
  },
  events: {
    path: "/events",
    title: "云酥坊活动快闪｜加拿大中式点心试吃与礼盒咨询",
    description:
      "查看云酥坊加拿大中式点心试吃、下午茶分享、礼盒咨询和企业团购快闪合作计划，适合华人家庭聚会、节日送礼与公司茶歇。",
    h1: "云酥坊活动与快闪计划",
    keywords: ["加拿大中式点心", "中式下午茶", "企业团购礼盒", "节日礼盒", "华人家庭聚会"],
  },
} satisfies Record<string, SeoEntry>;

export const productSeoMap = {
  "/products/classic-egg-yolk-pastry": {
    path: "/products/classic-egg-yolk-pastry",
    title: "加拿大蛋黄酥｜手工开酥咸蛋黄酥",
    description:
      "云酥坊蛋黄酥采用手工开酥工艺，层层酥皮包裹咸蛋黄与细腻馅心，低糖不腻，适合作为加拿大华人伴手礼、中秋礼盒与下午茶点心。",
    h1: "加拿大手工蛋黄酥",
    keywords: ["加拿大蛋黄酥", "手工蛋黄酥", "咸蛋黄酥", "中秋蛋黄酥", "华人伴手礼", "egg yolk pastry Canada"],
    image: "/images/products/egg-yolk-pastry/hero.jpg",
  },
  "/products/peach-blossom-pastry": {
    path: "/products/peach-blossom-pastry",
    title: "桃花酥｜高颜值中式花酥｜云酥坊加拿大",
    description:
      "云酥坊桃花酥以东方花型美学呈现手工酥点，外形精致，口感酥香，适合春季伴手礼、下午茶与加拿大华人节日送礼。",
    h1: "东方花型手工桃花酥",
    keywords: ["桃花酥", "中式花酥", "国风点心", "春季伴手礼", "加拿大中式点心"],
    image: "/images/products/peach-blossom-pastry/hero.jpg",
  },
  "/products/lotus-pastry": {
    path: "/products/lotus-pastry",
    title: "荷花酥｜中式花酥与国风点心",
    description:
      "云酥坊荷花酥以层层开酥呈现荷花绽放造型，酥皮轻盈，馅心细腻，是适合加拿大华人下午茶、节日礼盒与国风送礼的中式手工点心。",
    h1: "层层绽放的中式荷花酥",
    keywords: ["荷花酥", "中式花酥", "国风点心", "夏日酥点", "加拿大中式糕点", "handmade Chinese pastry"],
    image: "/images/products/lotus-pastry/hero.jpg",
  },
  "/products/peony-pastry": {
    path: "/products/peony-pastry",
    title: "牡丹酥｜国风花酥伴手礼",
    description:
      "云酥坊牡丹酥融合中式花酥造型与手工开酥工艺，外形大气，适合节日送礼、企业伴手礼与加拿大华人家庭分享。",
    h1: "大气国风牡丹酥",
    keywords: ["牡丹酥", "花酥礼盒", "国风伴手礼", "中式手工酥点", "加拿大华人送礼"],
    image: "/images/products/peony-pastry/hero.jpg",
  },
  "/products/classic-pineapple-cake": {
    path: "/products/classic-pineapple-cake",
    title: "凤梨酥｜手工中式茶点与伴手礼",
    description:
      "云酥坊凤梨酥采用手工制作，酸甜清爽，酥香不腻，适合加拿大华人下午茶、伴手礼与节日礼盒搭配。",
    h1: "酸甜酥香的手工凤梨酥",
    keywords: ["凤梨酥", "中式茶点", "华人伴手礼", "加拿大中式点心", "Chinese pastry gift"],
    image: "/images/products/pineapple-cake/hero.jpg",
  },
  "/products/matcha-pastry": {
    path: "/products/matcha-pastry",
    title: "抹茶酥｜新中式茶香酥点",
    description:
      "云酥坊抹茶酥融合茶香与中式开酥工艺，口感清新，适合喜欢低甜茶点、下午茶与新中式糕点的加拿大华人客户。",
    h1: "茶香清新的新中式抹茶酥",
    keywords: ["抹茶酥", "新中式糕点", "茶香酥点", "低糖中式点心", "加拿大华人下午茶"],
    image: "/images/products/matcha-pastry/hero.jpg",
  },
  "/products/egg-yolk-lotus-mooncake": {
    path: "/products/egg-yolk-lotus-mooncake",
    title: "广式蛋黄莲蓉月饼｜加拿大中秋月饼礼盒",
    description:
      "云酥坊蛋黄莲蓉月饼以低糖莲蓉和整颗咸蛋黄制作，适合加拿大华人中秋送礼、家庭团圆和企业团购礼盒。",
    h1: "广式蛋黄莲蓉月饼",
    keywords: ["广式莲蓉月饼", "蛋黄莲蓉月饼", "加拿大月饼礼盒", "中秋送礼", "mooncake gift box Canada"],
    image: "/images/products/egg-yolk-lotus-mooncake/hero.jpg",
  },
  "/products/red-bean-mooncake": {
    path: "/products/red-bean-mooncake",
    title: "豆沙月饼｜加拿大中秋礼盒低糖月饼",
    description:
      "云酥坊豆沙月饼使用真红豆慢熬低糖豆沙，适合加拿大华人中秋礼盒、长辈送礼和家庭分享。",
    h1: "低糖经典豆沙月饼",
    keywords: ["豆沙月饼", "加拿大中秋礼盒", "低糖月饼", "长辈送礼", "传统 Chinese pastry"],
    image: "/images/products/red-bean-mooncake/hero.jpg",
  },
  "/products/five-nuts-mooncake": {
    path: "/products/five-nuts-mooncake",
    title: "五仁月饼｜传统广式月饼与加拿大中秋礼盒",
    description:
      "云酥坊五仁月饼精选坚果籽仁，低糖不腻，适合加拿大华人长辈送礼、客户伴手礼和中秋月饼礼盒。",
    h1: "传统广式五仁月饼",
    keywords: ["五仁月饼", "传统广式月饼", "加拿大中秋礼盒", "客户伴手礼", "Mid-Autumn gift box Canada"],
    image: "/images/products/five-nuts-mooncake/hero.jpg",
  },
  "/products/winter-melon-mooncake": {
    path: "/products/winter-melon-mooncake",
    title: "冬翅月饼｜低糖广式月饼与中秋礼盒",
    description:
      "云酥坊冬翅月饼以冬瓜蓉丝感馅心呈现清甜口感，适合加拿大华人中秋送礼、家庭聚会和礼盒混搭。",
    h1: "特色低糖冬翅月饼",
    keywords: ["冬翅月饼", "冬瓜月饼", "低糖广式月饼", "加拿大月饼礼盒", "华人中秋送礼"],
    image: "/images/products/winter-melon-mooncake/hero.jpg",
  },
  "/products/suzhou-fresh-meat-mooncake": {
    path: "/products/suzhou-fresh-meat-mooncake",
    title: "苏式鲜肉月饼｜加拿大中秋月饼礼盒",
    description:
      "云酥坊苏式鲜肉月饼主打酥皮鲜肉爆汁口感，适合加拿大华人中秋礼盒、节日聚会和咸口月饼试吃预订。",
    h1: "苏式鲜肉月饼",
    keywords: ["苏式鲜肉月饼", "鲜肉月饼", "加拿大中秋月饼", "咸口月饼", "华人家庭聚会"],
    image: "/images/products/fresh-meat-mooncake/fresh-meat-mooncake-hero.webp",
  },
} satisfies Record<string, SeoEntry>;

export function absoluteUrl(path = "/") {
  return new URL(path, seoSite.domain).toString();
}

export function buildCanonicalUrl(path: string) {
  return absoluteUrl(path);
}

export function buildAlternates(path: string): Metadata["alternates"] {
  return {
    canonical: buildCanonicalUrl(path),
    languages: {
      "zh-CA": buildCanonicalUrl(path),
      "x-default": absoluteUrl("/"),
    },
  };
}

export function buildOpenGraph(entry: SeoEntry): Metadata["openGraph"] {
  const title = buildPageTitle(entry);

  return {
    title,
    description: entry.description,
    siteName: seoSite.name,
    locale: seoSite.locale,
    alternateLocale: [...seoSite.alternateLocales],
    type: "website",
    url: buildCanonicalUrl(entry.path),
    images: [
      {
        url: entry.image ?? seoSite.ogImage,
        alt: `${seoSite.name} 加拿大中式手工酥点与中秋月饼礼盒`,
      },
    ],
  };
}

export function buildMetadata(entry: SeoEntry): Metadata {
  const title = buildPageTitle(entry);

  return {
    title: {
      absolute: title,
    },
    description: entry.description,
    keywords: [...coreSeoKeywords, ...entry.keywords],
    alternates: buildAlternates(entry.path),
    openGraph: buildOpenGraph(entry),
    twitter: {
      card: "summary_large_image",
      title,
      description: entry.description,
      images: [entry.image ?? seoSite.ogImage],
    },
  };
}

export function buildPageTitle(entry: SeoEntry) {
  return entry.title.includes("云酥坊")
    ? entry.title
    : `${entry.title}｜云酥坊 Yun Su Fang`;
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seoSite.name,
    alternateName: ["云酥坊", "Yunsufang", "YunSuFang pastry"],
    url: absoluteUrl("/"),
    logo: absoluteUrl("/images/logo/yunsucake-seal-logo.png"),
    description: seoSite.defaultDescription,
  };
}

export function buildBakeryJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: seoSite.name,
    url: absoluteUrl("/"),
    image: absoluteUrl(seoSite.ogImage),
    description: seoSite.defaultDescription,
    areaServed: [
      { "@type": "Country", name: "Canada" },
      { "@type": "City", name: "Vancouver" },
      { "@type": "City", name: "Toronto" },
      { "@type": "City", name: "Montreal" },
    ],
    servesCuisine: ["Chinese pastry", "Mooncake", "Asian dessert"],
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoSite.name,
    url: absoluteUrl("/"),
    inLanguage: "zh-CA",
    potentialAction: {
      "@type": "SearchAction",
      target: `${absoluteUrl("/products")}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildProductJsonLd(entry: SeoEntry, category: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: entry.h1,
    description: entry.description,
    image: absoluteUrl(entry.image ?? seoSite.ogImage),
    brand: {
      "@type": "Brand",
      name: seoSite.name,
    },
    category,
    url: absoluteUrl(entry.path),
  };
}

export function buildFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildJournalSitemapRoutes() {
  return journalArticles.map((article) => getJournalHref(article));
}
