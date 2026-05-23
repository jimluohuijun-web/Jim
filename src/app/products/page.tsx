import type { Metadata } from "next";
import Link from "next/link";
import {
  BriefcaseBusiness,
  CalendarDays,
  Gift,
  Moon,
  Sparkles,
} from "lucide-react";

import { MooncakeCard } from "@/components/sections/mooncake-card";
import { ProductCard } from "@/components/sections/product-card";
import { BrandImage } from "@/components/ui/brand-image";
import { mooncakePreview, signatureProducts } from "@/data/products";
import { pageMoodImages } from "@/data/images";

export const metadata: Metadata = {
  title: "云酥坊点心系列｜云酥坊 yunsucake",
  description:
    "查看云酥坊 yunsucake 招牌酥点、加拿大本地季节风味与 2026 中秋月饼礼盒预告，包括蛋黄酥、牡丹花酥、凤梨酥和中秋月饼。",
};

const heroTags = ["酥点系列", "花酥系列", "中秋月饼", "企业团购"];

const categoryAnchors = [
  { label: "爆款推荐", href: "#featured-recommendations" },
  { label: "酥点系列", href: "#signature-pastries" },
  { label: "花酥系列", href: "#flower-pastries" },
  { label: "中秋月饼", href: "#mid-autumn-preview" },
  { label: "礼盒团购", href: "#gift-corporate" },
];

const giftServices = [
  {
    title: "节日礼盒",
    description: "月饼与酥点组合，适合亲友礼赠与节令拜访。",
    detail: "多规格组合 / 中秋批次 / 预约提醒",
  },
  {
    title: "企业团购",
    description: "员工福利、客户答谢与商务伴手礼方案咨询。",
    detail: "批量采购 / 预算确认 / 交付安排",
  },
  {
    title: "试吃预约",
    description: "先体验新品酥点与中秋风味，再确认礼盒方案。",
    detail: "新品试吃 / 口味偏好 / 名额通知",
  },
];

export default function ProductsPage() {
  const pastryProducts = signatureProducts.slice(0, 3);
  const flowerPastryProducts = signatureProducts.slice(3);
  const featuredMooncake = mooncakePreview.find((product) => product.id === "egg-yolk-lotus-mooncake");

  return (
    <main className="ysf-pc-home overflow-hidden bg-[#1A0F0A] text-[#E8CFA4]">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_14%,rgb(242_195_107_/_16%),transparent_28rem),radial-gradient(circle_at_84%_18%,rgb(116_67_32_/_30%),transparent_26rem),linear-gradient(180deg,#1A0F0A,#120905_62%,#1A0F0A)]" />
        <div className="pointer-events-none absolute left-[-10rem] top-20 size-[26rem] rounded-full border border-[#D89A42]/12" />
        <div className="pointer-events-none absolute right-[-7rem] top-10 size-[32rem] rounded-full border border-[#F2C36B]/10" />
        <div className="ysj-container ysj-section grid gap-10 lg:grid-cols-[1.02fr_0.78fr] lg:items-center">
          <div className="flex max-w-4xl flex-col gap-8">
            <div className="flex flex-wrap gap-2">
              {heroTags.map((tag) => (
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
                云酥坊点心系列
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-[#E8CFA4]/82 md:text-xl md:leading-9">
                从日常酥点到中秋礼盒，一站式挑选东方糕点好礼。
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#featured-recommendations"
                className="ysj-button-primary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-semibold"
              >
                <Sparkles className="size-4" />
                查看爆款推荐
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
              src={pageMoodImages.giftboxConcept.src}
              alt={pageMoodImages.giftboxConcept.alt}
              ratio="4:5"
              variant="plain"
              priority
              sizes="(min-width: 1024px) 34vw, 90vw"
              className="rounded-[1.75rem] border border-[#D89A42]/32 bg-[#2A1710]/72 shadow-[0_34px_96px_rgb(0_0_0_/_42%)]"
            />
          </div>
        </div>
      </section>

      <section className="sticky top-16 z-40 border-y border-[#D89A42]/16 bg-[#120905]/92 py-4 backdrop-blur-xl lg:top-[5.75rem]">
        <nav
          className="ysj-container flex gap-3 overflow-x-auto"
          aria-label="产品分类导航"
        >
          {categoryAnchors.map((anchor) => (
            <a
              key={anchor.href}
              href={anchor.href}
              className="shrink-0 rounded-full border border-[#D89A42]/28 bg-[#2A1710]/68 px-4 py-2 text-sm font-medium text-[#E8CFA4] transition-colors hover:border-[#F2C36B]/52 hover:text-[#F2C36B]"
            >
              {anchor.label}
            </a>
          ))}
        </nav>
      </section>

      <section id="featured-recommendations" className="ysj-section-tight scroll-mt-32 border-b border-[#D89A42]/16 bg-[#120905]">
        <div className="ysj-container flex flex-col gap-10">
          <div className="flex max-w-3xl flex-col gap-4">
            <span className="h-px w-16 bg-[#D89A42]" />
            <p className="text-sm uppercase tracking-[0.28em] text-[#D89A42]">
              Featured Picks｜爆款推荐
            </p>
            <h2 className="text-balance text-4xl font-semibold leading-tight text-[#F8E6BF] md:text-5xl">
              先从最适合尝鲜与送礼的几款开始
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pastryProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                anchorId={`featured-${product.id}`}
                tone="dark"
              />
            ))}
            {featuredMooncake ? (
              <MooncakeCard
                mooncake={featuredMooncake}
                tone="dark"
                anchorId="featured-egg-yolk-lotus-mooncake"
              />
            ) : null}
          </div>
        </div>
      </section>

      <section id="signature-pastries" className="ysj-section-tight scroll-mt-32 bg-[#1A0F0A]">
        <div className="ysj-container flex flex-col gap-10">
          <div className="grid gap-6 md:grid-cols-[1fr_0.9fr] md:items-end">
            <div className="flex flex-col gap-4">
              <span className="h-px w-16 bg-[#D89A42]" />
              <p className="text-sm uppercase tracking-[0.28em] text-[#D89A42]">
                Pastry Series｜酥点系列
              </p>
              <h2 className="text-balance text-4xl font-semibold leading-tight text-[#F8E6BF] md:text-5xl">
                经典酥点，适合日常分享与伴手礼
              </h2>
            </div>
            <p className="text-base leading-8 text-[#E8CFA4]/76 md:text-lg">
              蛋黄酥、凤梨酥与抹茶酥是云酥坊的基础主力，覆盖咸甜经典、果香伴手礼与茶点偏好。
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {pastryProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                tone="dark"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="flower-pastries" className="ysj-section-tight scroll-mt-32 border-y border-[#D89A42]/16 bg-[#120905]">
        <div className="ysj-container flex flex-col gap-10">
          <div className="grid gap-6 md:grid-cols-[1fr_0.9fr] md:items-end">
            <div className="flex flex-col gap-4">
              <span className="h-px w-16 bg-[#D89A42]" />
              <p className="text-sm uppercase tracking-[0.28em] text-[#D89A42]">
                Flower Pastries｜花酥系列
              </p>
              <h2 className="text-balance text-4xl font-semibold leading-tight text-[#F8E6BF] md:text-5xl">
                花型开酥，适合礼盒与茶席
              </h2>
            </div>
            <p className="text-base leading-8 text-[#E8CFA4]/76 md:text-lg">
              桃花酥、荷花酥与牡丹酥保留东方花型意象，作为礼盒中的视觉记忆点。
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {flowerPastryProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                compact
                tone="dark"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="mid-autumn-preview" className="relative isolate scroll-mt-32 overflow-hidden border-y border-[#D89A42]/16 bg-[#1A0F0A] py-[var(--section-y)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_12%,rgb(242_195_107_/_14%),transparent_24rem),radial-gradient(circle_at_18%_78%,rgb(116_67_32_/_24%),transparent_28rem)]" />
        <div className="pointer-events-none absolute right-[-8rem] top-8 size-[30rem] rounded-full border border-[#D89A42]/12" />
        <div className="ysj-container flex flex-col gap-10">
          <div className="grid gap-6 md:grid-cols-[1fr_0.92fr] md:items-end">
            <div className="flex flex-col gap-4">
              <span className="h-px w-16 bg-[#D89A42]" />
              <p className="text-sm uppercase tracking-[0.28em] text-[#D89A42]">
                Mid-Autumn Preview｜中秋月饼
              </p>
              <h2 className="flex items-center gap-3 text-balance text-4xl font-semibold leading-tight text-[#F8E6BF] md:text-5xl">
                <Moon className="size-8 text-[#F2C36B]" />
                中秋月饼 · 五款风味预告
              </h2>
            </div>
            <p className="text-base leading-8 text-[#E8CFA4]/76 md:text-lg">
              从蛋黄莲蓉、豆沙、五仁、冬翅到苏式鲜肉，把东方中秋做成一组值得期待的温柔礼物。
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {mooncakePreview.map((mooncake) => (
              <MooncakeCard key={mooncake.id} mooncake={mooncake} tone="dark" />
            ))}
          </div>
        </div>
      </section>

      <section id="gift-corporate" className="ysj-section-tight scroll-mt-32 bg-[linear-gradient(180deg,#120905,#1A0F0A)]">
        <div className="ysj-container">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[#D89A42]/28 bg-[#2A1710]/72 p-7 shadow-[0_26px_80px_rgb(0_0_0_/_34%)] md:p-10">
            <div className="absolute -right-16 top-0 size-72 rounded-full border border-[#F2C36B]/14" />
            <div className="absolute -bottom-28 left-10 size-72 rounded-full bg-[#D89A42]/10 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[0.9fr_0.55fr] lg:items-center">
              <div className="flex max-w-3xl flex-col gap-6">
                <span className="h-px w-16 bg-[#D89A42]" />
                <div className="flex flex-col gap-4">
                  <p className="text-sm uppercase tracking-[0.28em] text-[#D89A42]">
                    Gift & Corporate｜礼盒 / 企业团购
                  </p>
                  <h2 className="text-balance text-4xl font-semibold leading-tight text-[#F8E6BF] md:text-5xl">
                    节日礼盒与企业团购
                  </h2>
                  <p className="text-base leading-8 text-[#E8CFA4]/76 md:text-lg">
                    支持多规格礼盒、员工福利、客户答谢与批量定制咨询。
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {giftServices.map((service) => (
                    <article
                      key={service.title}
                      className="rounded-2xl border border-[#D89A42]/20 bg-[#1A0F0A]/46 p-4"
                    >
                      <h3 className="text-lg font-semibold text-[#F8E6BF]">{service.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#E8CFA4]/72">
                        {service.description}
                      </p>
                      <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[#D89A42]">
                        {service.detail}
                      </p>
                    </article>
                  ))}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="ysj-button-primary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-semibold"
                  >
                    <BriefcaseBusiness className="size-4" />
                    咨询企业团购
                  </Link>
                  <Link
                    href="/reserve"
                    className="ysj-button-secondary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-semibold"
                  >
                    <CalendarDays className="size-4" />
                    预约试吃
                  </Link>
                </div>
              </div>
              <BrandImage
                src={pageMoodImages.contactMood.src}
                alt={pageMoodImages.contactMood.alt}
                ratio="4:5"
                variant="plain"
                sizes="(min-width: 1024px) 28vw, 88vw"
                className="rounded-[1.35rem] border border-[#D89A42]/24 shadow-[0_20px_58px_rgb(0_0_0_/_28%)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="ysj-section-tight border-t border-[#D89A42]/16 bg-[#1A0F0A]">
        <div className="ysj-container">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[#D89A42]/28 bg-[#2A1710]/72 p-8 shadow-[0_26px_80px_rgb(0_0_0_/_34%)] md:p-12">
            <div className="absolute right-10 top-8 size-40 rounded-full border border-[#F2C36B]/14" />
            <div className="absolute -bottom-28 -left-8 size-80 rounded-full bg-[#D89A42]/10 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div className="flex max-w-2xl flex-col gap-4">
                <span className="h-px w-16 bg-[#D89A42]" />
                <h2 className="text-4xl font-semibold leading-tight text-[#F8E6BF]">
                  想加入试吃或礼盒提醒？
                </h2>
                <p className="text-base leading-8 text-[#E8CFA4]/76 md:text-lg">
                  云酥坊正在为温哥华第一阶段小批量试吃、季节风味测试与中秋礼盒预告收集意向。你可以先留下联系方式，我们会在开放时优先通知。
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Link
                  href="/reserve"
                  className="ysj-button-primary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-medium"
                >
                  <CalendarDays data-icon="inline-start" />
                  加入试吃名单
                </Link>
                <Link
                  href="/products#mid-autumn-preview"
                  className="ysj-button-secondary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-medium"
                >
                  <Gift data-icon="inline-start" />
                  中秋礼盒预告
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
