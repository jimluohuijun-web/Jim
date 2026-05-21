import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Flower2,
  Gift,
  HandHeart,
  Heart,
  Home,
  Layers3,
  Leaf,
  Phone,
  ShieldCheck,
  Sparkles,
  Sprout,
  Wheat,
} from "lucide-react";

import { ReserveForm } from "@/components/sections/reserve-form";
import {
  brandStory,
  craftSteps,
  featuredProducts,
  giftHighlights,
  giftSection,
  homeHeroContent,
  productSeries,
} from "@/data/home-sections";
import { heroHome } from "@/lib/site-images";

const heroHighlights = [
  { icon: Leaf, label: "甄选原料" },
  { icon: HandHeart, label: "匠心手作" },
  { icon: Flower2, label: "新鲜现做" },
];

const brandPoints = [
  {
    icon: Wheat,
    title: "严选原料",
    description: "甄选优质食材，天然健康，只为成就一口好酥。",
  },
  {
    icon: Layers3,
    title: "层层手作",
    description: "多道工序，手工起酥，片片酥脆，层层用心。",
  },
  {
    icon: Gift,
    title: "东方礼感",
    description: "雅致礼盒，东方美学，心意满满，礼赠佳选。",
  },
];

const craftIconMap = {
  wheat: Wheat,
  layers: Layers3,
  sparkles: Sparkles,
  shield: ShieldCheck,
};

const giftIconMap = {
  gift: Gift,
  handHeart: HandHeart,
  heart: Heart,
  shield: ShieldCheck,
};

const bottomItems = [
  { icon: Home, label: "首页", href: "#home" },
  { icon: Flower2, label: "精选", href: "#featured-products" },
  { icon: Sprout, label: "试吃", href: "#trial", featured: true },
  { icon: Gift, label: "礼盒", href: "#gift-section" },
  { icon: Phone, label: "联系", href: "/contact" },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: { href: string; label: string };
}) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div className="min-w-0">
        {eyebrow ? (
          <p className="mb-2 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-[#D9B46A]/78">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-serif text-[1.45rem] font-semibold leading-tight text-[#F5E7C8]">
          {title}
        </h2>
        {description ? (
          <p className="mt-2 max-w-[19rem] text-sm leading-6 text-[#BCA77F]">{description}</p>
        ) : null}
      </div>
      {action ? (
        <Link
          href={action.href}
          className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-[#F0C978]"
        >
          {action.label}
          <ArrowRight className="size-3.5" />
        </Link>
      ) : null}
    </div>
  );
}

export function MobileHomeSections() {
  return (
    <div className="overflow-hidden bg-[#080604] pb-[calc(5.75rem+env(safe-area-inset-bottom))] text-[#BCA77F] lg:hidden">
      <section id="home" className="relative isolate min-h-[620px] scroll-mt-20 overflow-hidden px-5 pb-7 pt-8">
        <Image
          src={heroHome.src}
          alt={heroHome.alt}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-30 object-cover object-[65%_center]"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#080604_0%,rgb(8_6_4_/_88%)_32%,rgb(8_6_4_/_28%)_72%,rgb(8_6_4_/_20%)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(8_6_4_/_72%)_0%,rgb(8_6_4_/_36%)_38%,#080604_100%)]" />
        <div className="pointer-events-none absolute -left-24 top-20 -z-10 size-72 rounded-full bg-[rgb(216_154_66_/_12%)] blur-3xl" />

        <div className="flex min-h-[560px] max-w-[22rem] flex-col justify-center gap-4 md:max-w-[34rem]">
          <div className="flex flex-col gap-2.5">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#D9B46A]">
              云酥坊 YUN SU FANG
            </p>
            <h1 className="font-serif text-[clamp(2.55rem,11.6vw,4.3rem)] font-semibold leading-[0.98] tracking-[0.03em] text-[#F8E6BF]">
              一口酥香，
              <br />
              东方新味
            </h1>
            <span className="h-px w-20 bg-[linear-gradient(90deg,#F0C978,transparent)]" />
            <p className="max-w-[17rem] whitespace-pre-line text-[0.92rem] leading-6 text-[#E8CFA4] md:max-w-[26rem]">
              匠心手作中式酥点，
              <br />
              传承经典，创新东方味道
            </p>
            <p className="max-w-[19rem] text-sm leading-6 text-[#BCA77F]/82 md:max-w-[28rem]">
              蛋黄酥、凤梨酥、花酥与中式礼盒正在小批量筹备中，把东方酥香做成日常分享与节令礼赠的心意。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Link
              href={homeHeroContent.primaryCta.href}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#F0C978,#D89A42_56%,#A96828)] px-4 text-sm font-semibold text-[#160E07] shadow-[0_14px_34px_rgb(216_154_66_/_22%)]"
            >
              立即探索产品
            </Link>
            <Link
              href="#trial"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#D9B46A]/42 bg-[#120C07]/62 px-4 text-sm font-semibold text-[#F5E7C8]"
            >
              预约新品试吃
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-1.5 pt-1">
            {heroHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                  <span className="grid size-10 place-items-center rounded-full border border-[#D9B46A]/30 bg-[#080604]/58 text-[#F0C978]">
                    <Icon className="size-5" strokeWidth={1.6} />
                  </span>
                  <span className="text-xs leading-5 text-[#E8CFA4]">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="featured-products"
        className="scroll-mt-20 border-t border-[#D9B46A]/16 bg-[#0B0704] px-5 py-6"
      >
        <SectionHeading
          eyebrow="Featured"
          title="人气精选 · 匠心之作"
          description="精选风味，广受喜爱"
        />
        <div className="grid gap-3">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className="grid min-h-[132px] grid-cols-[40%_1fr] overflow-hidden rounded-[1.15rem] border border-[#D9B46A]/24 bg-[linear-gradient(135deg,rgb(42_23_16_/_76%),rgb(8_6_4_/_92%))] shadow-[0_16px_36px_rgb(0_0_0_/_22%)]"
            >
              <div className="relative min-h-[132px] overflow-hidden">
                {product.image ? (
                  <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    fill
                    loading="lazy"
                    sizes="42vw"
                    className="object-cover"
                  />
                ) : null}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgb(8_6_4_/_18%))]" />
              </div>
              <div className="flex min-w-0 flex-col justify-center gap-1.5 p-3">
                <h3 className="font-serif text-[1.35rem] font-semibold leading-tight text-[#F5E7C8]">
                  {product.name}
                </h3>
                <p className="line-clamp-1 text-xs leading-5 text-[#BCA77F]">
                  {product.description}
                </p>
                <div className="mt-1 flex items-end justify-between gap-3">
                  <span className="shrink-0 font-serif text-[1.25rem] text-[#F0C978]">
                    {product.price}
                  </span>
                  <Link
                    href={product.href}
                    className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#F0C978,#B8893D)] px-3.5 text-xs font-semibold text-[#160E07]"
                  >
                    立即选购
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-label="品牌卖点" className="bg-[#080604] px-5 py-1">
        <div className="grid gap-2.5 min-[430px]:grid-cols-3">
          {brandPoints.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[1.05rem] border border-[#D9B46A]/22 bg-[#120C07]/86 p-3.5 shadow-[0_12px_28px_rgb(0_0_0_/_16%)]"
              >
                <Icon className="mb-3 size-7 text-[#F0C978]" strokeWidth={1.6} />
                <h3 className="font-serif text-base font-semibold text-[#F5E7C8]">
                  {item.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#BCA77F]">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section
        id="pastries"
        className="scroll-mt-20 border-y border-[#D9B46A]/16 bg-[linear-gradient(180deg,#080604,#120C07_48%,#080604)] px-5 py-6"
      >
        <span id="mooncakes" className="sr-only">
          月饼官宣
        </span>
        <SectionHeading
          eyebrow="Series"
          title="产品系列 · 更多美味"
          description="甄选多款东方酥点与礼盒之作。"
          action={{ href: "/products", label: "查看全部" }}
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {productSeries.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="group overflow-hidden rounded-[1.05rem] border border-[#D9B46A]/24 bg-[#2A1710]/72 shadow-[0_12px_30px_rgb(0_0_0_/_18%)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {product.image ? (
                  <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 768px) 24vw, 46vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : null}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgb(8_6_4_/_62%))]" />
              </div>
              <div className="flex min-h-[7.6rem] flex-col p-2.5">
                <h3 className="font-serif text-lg font-semibold text-[#F5E7C8]">
                  {product.name}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-[#BCA77F]">
                  {product.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 pt-2 text-xs font-semibold text-[#F0C978]">
                  {product.ctaLabel}
                  <ArrowRight className="size-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="brand" className="scroll-mt-20 bg-[#080604] px-5 py-6">
        <div className="overflow-hidden rounded-[1.3rem] border border-[#D9B46A]/22 bg-[#120C07] shadow-[0_16px_38px_rgb(0_0_0_/_22%)]">
          <div className="p-4">
            <p className="mb-2 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-[#D9B46A]/78">
              Story
            </p>
            <h2 className="font-serif text-[1.55rem] font-semibold leading-tight text-[#F5E7C8]">
              {brandStory.title}
            </h2>
            <p className="mt-3 line-clamp-3 whitespace-pre-line text-sm leading-6 text-[#BCA77F]">
              云酥坊，源于对东方酥点的热爱与传承。
              {"\n"}我们甄选优质原料，坚持现做工艺，
              {"\n"}让传统糕点更精致，也更适合现代人的口味。
            </p>
            <Link
              href={brandStory.cta.href}
              className="mt-4 inline-flex min-h-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#F0C978,#B8893D)] px-5 text-xs font-semibold text-[#160E07]"
            >
              {brandStory.cta.label}
            </Link>
          </div>
          <div className="relative aspect-[16/8] min-h-[180px] overflow-hidden">
            <Image
              src={brandStory.image.src}
              alt={brandStory.image.alt}
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(18_12_7_/_10%),rgb(8_6_4_/_38%))]" />
          </div>
        </div>
      </section>

      <section id="craft" className="scroll-mt-20 border-y border-[#D9B46A]/16 bg-[#0B0704] px-5 py-6">
        <SectionHeading eyebrow="Craft" title="匠心工艺 · 层层把控" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {craftSteps.map((step) => {
            const Icon = craftIconMap[step.icon];

            return (
              <article
                key={step.id}
                className="relative min-h-[138px] overflow-hidden rounded-[1rem] border border-[#D9B46A]/22 bg-[#120C07]"
              >
                <Image
                  src={step.image.src}
                  alt={step.image.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) 24vw, 46vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(8_6_4_/_88%),rgb(8_6_4_/_42%))]" />
                <div className="relative z-10 flex h-full min-h-[138px] flex-col justify-end p-3">
                  <Icon className="mb-2 size-5 text-[#F0C978]" strokeWidth={1.6} />
                  <h3 className="font-serif text-base font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/86">{step.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section
        id="gift-section"
        className="scroll-mt-20 bg-[linear-gradient(180deg,#080604,#120C07_58%,#080604)] px-5 py-6"
      >
        <div className="overflow-hidden rounded-[1.3rem] border border-[#D9B46A]/24 bg-[#0B0704] shadow-[0_16px_38px_rgb(0_0_0_/_22%)]">
          <div className="p-4">
            <p className="mb-2 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-[#D9B46A]/78">
              Gift
            </p>
            <h2 className="font-serif text-[1.6rem] font-semibold leading-tight text-[#F5E7C8]">
              {giftSection.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#BCA77F]">{giftSection.description}</p>
          </div>
          <div className="relative h-[220px] overflow-hidden">
            <Image
              src={giftSection.image.src}
              alt={giftSection.image.alt}
              fill
              loading="lazy"
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(8_6_4_/_8%),rgb(8_6_4_/_34%))]" />
          </div>
          <div className="grid grid-cols-2 gap-2.5 p-4 pt-3">
            {giftHighlights.map((item) => {
              const Icon = giftIconMap[item.icon];

              return (
                <div
                  key={item.id}
                  className="flex items-center gap-2.5 rounded-2xl border border-[#D9B46A]/22 bg-[#120C07]/78 p-2.5"
                >
                  <span className="grid size-10 place-items-center rounded-full border border-[#D9B46A]/32 text-[#F0C978]">
                    <Icon className="size-5" strokeWidth={1.6} />
                  </span>
                  <span className="text-sm font-medium text-[#F5E7C8]">{item.title}</span>
                </div>
              );
            })}
          </div>
          <div className="px-4 pb-4">
            <Link
              href={giftSection.cta.href}
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#F0C978,#B8893D)] px-5 text-sm font-semibold text-[#160E07]"
            >
              {giftSection.cta.label}
            </Link>
          </div>
        </div>
      </section>

      <section
        id="trial"
        className="relative scroll-mt-20 overflow-hidden border-y border-[#D9B46A]/16 bg-[#080604] px-5 py-7"
      >
        <span id="tasting-register" className="sr-only">
          新品试吃登记
        </span>
        <div className="pointer-events-none absolute -left-28 bottom-3 size-72 rounded-full border border-[#D9B46A]/10" />
        <div className="pointer-events-none absolute -right-28 top-8 size-72 rounded-full bg-[rgb(217_180_106_/_8%)] blur-3xl" />
        <div className="relative z-10 mb-4 text-center">
          <p className="mb-2 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-[#D9B46A]/78">
            Trial
          </p>
          <h2 className="font-serif text-[1.75rem] font-semibold text-[#F5E7C8]">
            新品试吃登记
          </h2>
          <p className="mx-auto mt-2 max-w-[20rem] text-sm leading-6 text-[#BCA77F]">
            填写信息，优先获得新品试吃与上市通知
          </p>
        </div>
        <ReserveForm variant="compact" tone="trial" />
      </section>

      <section id="contact" className="scroll-mt-20 bg-[#080604] px-5 py-6">
        <div className="rounded-[1.2rem] border border-[#D9B46A]/22 bg-[#120C07]/78 p-4">
          <h2 className="font-serif text-2xl font-semibold text-[#F5E7C8]">联系我们</h2>
          <p className="mt-2 text-sm leading-7 text-[#BCA77F]">
            如需试吃登记、企业团购或礼盒定制，可以通过联系入口与云酥坊沟通。
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex min-h-10 items-center justify-center rounded-full border border-[#D9B46A]/34 px-5 text-xs font-semibold text-[#F0C978]"
          >
            联系订购
          </Link>
        </div>
      </section>

      <nav
        className="fixed inset-x-4 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-50 grid grid-cols-5 items-center rounded-full border border-[#D9B46A]/26 bg-[#120C07]/94 px-3 py-2 shadow-[0_18px_46px_rgb(0_0_0_/_34%)] backdrop-blur-xl lg:hidden"
        aria-label="手机端底部导航"
      >
        {bottomItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                item.featured
                  ? "mx-auto flex -translate-y-5 flex-col items-center gap-1 rounded-full bg-[linear-gradient(135deg,#F0C978,#B8893D)] px-4 py-3 text-xs font-semibold text-[#160E07] shadow-[0_14px_34px_rgb(216_154_66_/_24%)]"
                  : "flex min-h-12 flex-col items-center justify-center gap-1 text-xs text-[#E8CFA4]"
              }
            >
              <Icon className="size-5" strokeWidth={1.6} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
