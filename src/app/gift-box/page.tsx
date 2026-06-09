import type { Metadata } from "next";
import Link from "next/link";
import { BriefcaseBusiness, CalendarDays, Gift } from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { SeoFaqSection, SeoInternalLinks } from "@/components/seo/seo-content-blocks";
import { BrandImage } from "@/components/ui/brand-image";
import { pageMoodImages } from "@/data/images";
import { featuredMidAutumnGift, giftBoxes, signatureProducts } from "@/data/products";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildMetadata, pageSeoMap } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pageSeoMap.giftBox);

const giftBoxFaqs = [
  {
    question: "云酥坊中式酥点礼盒适合哪些加拿大送礼场景？",
    answer:
      "中式酥点礼盒适合华人伴手礼、中秋送礼、春节拜访、家庭聚会、企业团购和客户答谢，可搭配蛋黄酥、花酥、凤梨酥、抹茶酥与月饼。",
  },
  {
    question: "企业团购礼盒可以如何沟通？",
    answer:
      "企业团购可先确认人数、预算、送礼时间、口味偏好和是否需要月饼或酥点组合，云酥坊会根据批次与产能提供礼盒建议。",
  },
  {
    question: "礼盒是否可以搭配月饼和花酥？",
    answer:
      "可以。中秋季节可优先考虑月饼礼盒，日常与春节伴手礼可搭配蛋黄酥、桃花酥、荷花酥、牡丹酥、凤梨酥等中式手工酥点。",
  },
];

const giftBoxLinks = [
  { label: "中秋月饼礼盒", href: "/mooncakes", description: "查看加拿大中秋送礼月饼口味" },
  { label: "产品系列", href: "/products", description: "浏览蛋黄酥、花酥、凤梨酥与抹茶酥" },
  { label: "试吃登记", href: "/reserve", description: "提前了解新品试吃与礼盒开放批次" },
  { label: "联系我们", href: "/contact", description: "咨询企业团购和节日礼盒方案" },
];

export default function GiftBoxPage() {
  return (
    <main className="ysf-pc-home overflow-hidden bg-[#1A0F0A] text-[#E8CFA4]">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "首页", path: "/" },
          { name: "中式酥点礼盒", path: "/gift-box" },
        ])}
      />
      <JsonLd data={buildFaqJsonLd(giftBoxFaqs)} />

      <section className="relative isolate overflow-hidden border-b border-[#D89A42]/16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_16%,rgb(242_195_107_/_16%),transparent_28rem),radial-gradient(circle_at_84%_18%,rgb(116_67_32_/_28%),transparent_26rem),linear-gradient(180deg,#1A0F0A,#120905_68%,#1A0F0A)]" />
        <div className="ysj-container ysj-section grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div className="flex max-w-4xl flex-col gap-7">
            <p className="text-sm uppercase tracking-[0.28em] text-[#D89A42]">
              Gift Box｜Corporate & Family
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-[1.05] text-[#F8E6BF] md:text-7xl">
              适合加拿大华人送礼的中式酥点礼盒
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-[#E8CFA4]/90 md:text-xl md:leading-9">
              云酥坊中式酥点礼盒面向加拿大华人伴手礼、节日送礼、企业团购与家庭聚会场景，可组合蛋黄酥、桃花酥、荷花酥、牡丹酥、凤梨酥、抹茶酥和中秋月饼。
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="ysj-button-primary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-semibold">
                <BriefcaseBusiness className="size-4" />
                咨询企业团购
              </Link>
              <Link href="/reserve" className="ysj-button-secondary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-semibold">
                <CalendarDays className="size-4" />
                加入试吃名单
              </Link>
            </div>
          </div>

          <BrandImage
            src={pageMoodImages.giftboxConcept.src}
            alt={pageMoodImages.giftboxConcept.alt}
            ratio="4:5"
            variant="plain"
            priority
            sizes="(min-width: 1024px) 34vw, 90vw"
            className="rounded-[1.75rem] border border-[#D89A42]/32 bg-[#2A1710]/72 shadow-[0_34px_96px_rgb(0_0_0_/_42%)]"
          />
        </div>
      </section>

      <section className="ysj-section-tight bg-[#120905]">
        <div className="ysj-container grid gap-10 lg:grid-cols-[0.84fr_1fr] lg:items-start">
          <div className="flex flex-col gap-5">
            <span className="h-px w-16 bg-[#D89A42]" />
            <p className="text-sm uppercase tracking-[0.28em] text-[#D89A42]">
              Gift Plans｜礼盒方案
            </p>
            <h2 className="text-balance text-4xl font-semibold leading-tight text-[#F8E6BF] md:text-5xl">
              从中秋礼盒到日常伴手礼
            </h2>
            <p className="text-base leading-8 text-[#E8CFA4]/88 md:text-lg">
              {featuredMidAutumnGift.description} 日常礼赠可搭配云酥坊招牌中式手工酥点，让礼盒既有传统风味，也有国风审美记忆点。
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[featuredMidAutumnGift, ...giftBoxes].map((box) => (
              <article key={box.id} className="rounded-[1.35rem] border border-[#D89A42]/24 bg-[#2A1710]/60 p-5 shadow-[0_22px_60px_rgb(0_0_0_/_20%)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#E8CFA4]/78">{box.englishName}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-[#F8E6BF]">{box.name}</h3>
                  </div>
                  <Gift className="size-6 shrink-0 text-[#F2C36B]" />
                </div>
                <p className="mt-4 text-sm leading-7 text-[#E8CFA4]/86">{box.occasion}</p>
                <ul className="mt-5 grid gap-2 text-sm text-[#E8CFA4]/88">
                  {box.contents.map((item) => (
                    <li key={item} className="rounded-full border border-[#D89A42]/18 bg-[#1A0F0A]/38 px-3 py-2">
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={box.href} className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-[#F2C36B]/34 px-5 text-sm font-medium text-[#F2C36B] transition-colors hover:border-[#F2C36B]/70">
                  {box.ctaLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ysj-section-tight bg-[#1A0F0A]">
        <div className="ysj-container flex flex-col gap-8">
          <div className="max-w-3xl">
            <h2 className="text-balance text-4xl font-semibold leading-tight text-[#F8E6BF] md:text-5xl">
              常用礼盒搭配关键词
            </h2>
            <p className="mt-4 text-base leading-8 text-[#E8CFA4]/88 md:text-lg">
              加拿大华人伴手礼常见需求包括中秋月饼礼盒、春节伴手礼、企业团购、客户答谢、家庭聚会点心和中式下午茶。云酥坊会围绕这些场景规划低糖不腻、手工开酥、适合分享的中式糕点组合。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {signatureProducts.map((product) => (
              <Link key={product.id} href={product.href} className="rounded-full border border-[#D89A42]/28 bg-[#2A1710]/68 px-4 py-2 text-sm font-medium text-[#E8CFA4] transition-colors hover:border-[#F2C36B]/52 hover:text-[#F2C36B]">
                {product.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SeoFaqSection eyebrow="Gift Box FAQ｜礼盒常见问题" title="中式酥点礼盒与企业团购" faqs={giftBoxFaqs} />
      <SeoInternalLinks title="继续了解送礼方案" links={giftBoxLinks} />
    </main>
  );
}
