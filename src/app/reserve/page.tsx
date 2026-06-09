import type { Metadata } from "next";
import Link from "next/link";
import { BriefcaseBusiness, CalendarCheck, Gift, Moon, Sparkles } from "lucide-react";

import { BrandImage } from "@/components/ui/brand-image";
import { ReserveForm } from "@/components/sections/reserve-form";
import { ReserveInfoCard } from "@/components/sections/reserve-info-card";
import { JsonLd } from "@/components/seo/json-ld";
import { SeoFaqSection, SeoInternalLinks } from "@/components/seo/seo-content-blocks";
import { pageMoodImages } from "@/data/images";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildMetadata, pageSeoMap } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pageSeoMap.reserve);

const reserveTags = ["新品试吃", "中秋礼盒", "企业团购", "现做现发"];

const reserveScenes = [
  {
    title: "新品试吃",
    description: "优先体验云酥坊新品酥点，填写偏好后等待名额确认。",
    icon: Sparkles,
  },
  {
    title: "中秋礼盒预订",
    description: "提前锁定中秋批次，适合家庭礼赠、亲友分享。",
    icon: Moon,
  },
  {
    title: "企业福利团购",
    description: "支持批量采购、礼盒组合、企业定制与代发咨询。",
    icon: BriefcaseBusiness,
  },
];

const reserveFaqs = [
  {
    question: "云酥坊试吃登记适合哪些用户？",
    answer:
      "适合想提前了解加拿大中式手工酥点、蛋黄酥、花酥、凤梨酥、抹茶酥和中秋月饼礼盒的华人客户、家庭用户与企业团购联系人。",
  },
  {
    question: "登记后会马上确认订单吗？",
    answer:
      "试吃登记主要用于收集口味偏好和礼盒需求。云酥坊会根据新品批次、产能和中秋礼盒开放时间，再通知试吃、预订或团购咨询安排。",
  },
  {
    question: "中秋月饼礼盒也可以通过这里登记吗？",
    answer:
      "可以。登记时可说明月饼礼盒、企业团购、家庭送礼或具体口味偏好，方便后续优先接收中秋月饼礼盒开放提醒。",
  },
];

const reserveLinks = [
  { label: "产品系列", href: "/products", description: "浏览蛋黄酥、花酥、凤梨酥与抹茶酥" },
  { label: "中秋月饼礼盒", href: "/mooncakes", description: "查看加拿大中秋送礼月饼口味" },
  { label: "中式酥点礼盒", href: "/gift-box", description: "了解伴手礼、节日礼盒和企业团购" },
  { label: "联系我们", href: "/contact", description: "咨询批量礼盒、活动合作与预订问题" },
];

export default function ReservePage() {
  return (
    <main className="ysf-pc-home overflow-hidden bg-[#1A0F0A] text-[#E8CFA4]">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "首页", path: "/" },
          { name: "试吃登记", path: "/reserve" },
        ])}
      />
      <JsonLd data={buildFaqJsonLd(reserveFaqs)} />
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgb(242_195_107_/_16%),transparent_27rem),radial-gradient(circle_at_82%_16%,rgb(116_67_32_/_28%),transparent_24rem),linear-gradient(180deg,#1A0F0A,#120905_62%,#1A0F0A)]" />
        <div className="pointer-events-none absolute left-[-10rem] top-20 size-[26rem] rounded-full border border-[#D89A42]/12" />
        <div className="pointer-events-none absolute right-[-7rem] top-10 size-[32rem] rounded-full border border-[#F2C36B]/10" />
        <div className="ysj-container ysj-section grid gap-10 lg:grid-cols-[1.02fr_0.78fr] lg:items-center">
          <div className="flex max-w-4xl flex-col gap-8">
            <div className="flex flex-wrap gap-2">
              {reserveTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#D89A42]/34 bg-[#2A1710]/72 px-4 py-2 text-xs font-medium tracking-[0.18em] text-[#F2C36B]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-balance text-5xl font-semibold leading-[1.05] text-[#F8E6BF] md:text-7xl">
                云酥坊中式酥点试吃登记
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-[#E8CFA4]/90 md:text-xl md:leading-9">
                提前了解云酥坊蛋黄酥、花酥、凤梨酥、抹茶酥和中秋月饼礼盒批次，登记试吃、预订提醒或企业团购需求。
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#reserve-form"
                className="ysj-button-primary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-semibold"
              >
                <CalendarCheck className="size-4" />
                立即填写预约
              </a>
              <Link
                href="/contact"
                className="ysj-button-secondary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-semibold"
              >
                <BriefcaseBusiness className="size-4" />
                咨询企业团购
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border border-[#D89A42]/12" />
            <BrandImage
              src={pageMoodImages.reserveMood.src}
              alt={pageMoodImages.reserveMood.alt}
              ratio="4:5"
              variant="plain"
              priority
              sizes="(min-width: 1024px) 34vw, 90vw"
              className="rounded-[1.75rem] border border-[#D89A42]/32 bg-[#2A1710]/72 shadow-[0_34px_96px_rgb(0_0_0_/_42%)]"
              imageClassName="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="ysj-section-tight border-y border-[#D89A42]/16 bg-[#120905]">
        <div className="ysj-container max-w-4xl">
          <p className="text-base leading-8 text-[#E8CFA4]/90 md:text-lg md:leading-9">
            云酥坊试吃登记页面用于收集加拿大华人客户对中式手工酥点的真实偏好。无论你想先尝试经典蛋黄酥、桃花酥、荷花酥、牡丹酥、凤梨酥、抹茶酥，还是想提前了解中秋月饼礼盒、春节伴手礼、企业福利团购和家庭聚会点心，都可以在这里留下需求。我们会根据小批量现做、手工开酥、低糖不腻和礼盒批次安排，优先通知合适的试吃、预订与咨询机会。
          </p>
        </div>
      </section>

      <section className="ysj-section-tight border-y border-[#D89A42]/16 bg-[#120905]">
        <div className="ysj-container grid gap-5 md:grid-cols-3">
          {reserveScenes.map((scene) => {
            const Icon = scene.icon;

            return (
              <article
                key={scene.title}
                className="group relative overflow-hidden rounded-[1.5rem] border border-[#D89A42]/24 bg-[#2A1710]/60 p-6 shadow-[0_22px_60px_rgb(0_0_0_/_22%)] transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="absolute -right-14 top-6 size-40 rounded-full border border-[#D89A42]/12" />
                <div className="relative flex flex-col gap-5">
                  <span className="flex size-12 items-center justify-center rounded-full border border-[#F2C36B]/32 bg-[#1A0F0A]/72 text-[#F2C36B]">
                    <Icon className="size-5" />
                  </span>
                  <div className="flex flex-col gap-3">
                    <h2 className="text-2xl font-semibold text-[#F8E6BF]">{scene.title}</h2>
                    <p className="text-sm leading-7 text-[#E8CFA4]/88">{scene.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="reserve-form" className="ysf-trial ysj-section-tight scroll-mt-24 bg-[#1A0F0A]">
        <div className="ysj-container grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <ReserveInfoCard />
          <ReserveForm />
        </div>
      </section>

      <section className="ysj-section-tight border-t border-[#D89A42]/16 bg-[linear-gradient(180deg,#120905,#1A0F0A)]">
        <div className="ysj-container">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[#D89A42]/28 bg-[#2A1710]/72 p-7 shadow-[0_26px_80px_rgb(0_0_0_/_34%)] md:p-10">
            <div className="absolute -right-16 top-0 size-56 rounded-full border border-[#F2C36B]/14" />
            <div className="absolute -bottom-24 left-10 size-72 rounded-full bg-[#D89A42]/10 blur-3xl" />
            <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div className="flex max-w-3xl flex-col gap-3">
                <Gift className="size-6 text-[#F2C36B]" />
                <h2 className="text-3xl font-semibold leading-tight text-[#F8E6BF]">
                  想先了解产品再预约？
                </h2>
                <p className="text-base leading-8 text-[#E8CFA4]/88 md:text-lg">
                  先查看云酥坊酥点、花酥与中秋月饼系列，再留下试吃或礼盒咨询需求。
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Link
                  href="/products"
                  className="ysj-button-primary inline-flex min-h-12 items-center justify-center px-6 text-sm font-semibold"
                >
                  查看产品系列
                </Link>
                <Link
                  href="/contact"
                  className="ysj-button-secondary inline-flex min-h-12 items-center justify-center px-6 text-sm font-semibold"
                >
                  联系企业团购
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SeoFaqSection eyebrow="Reserve FAQ｜试吃登记常见问题" title="新品试吃与中秋预订提醒" faqs={reserveFaqs} />
      <SeoInternalLinks title="登记前可先查看这些内容" links={reserveLinks} />
    </main>
  );
}
