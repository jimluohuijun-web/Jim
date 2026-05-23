import type React from "react";

import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Beef,
  ChefHat,
  ChevronRight,
  Clock3,
  Flame,
  Gift,
  HeartHandshake,
  PackageCheck,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Thermometer,
  Utensils,
} from "lucide-react";

import { suzhouFreshMeatMooncakeData as pageData } from "@/data/suzhou-fresh-meat-mooncake-detail";

type IconComponent = typeof Sparkles;

const problemIcons: IconComponent[] = [ShieldCheck, Flame, Utensils];
const highlightIcons: IconComponent[] = [Beef, ChefHat, Sparkles, PackageCheck];
const craftIcons: IconComponent[] = [Beef, ChefHat, Sparkles, Flame];
const tasteIcons: IconComponent[] = [Sparkles, Beef, Utensils];
const specIcons: IconComponent[] = [BadgeCheck, Gift, Clock3, Thermometer];
const reheatIcons: IconComponent[] = [Flame, ChefHat, Utensils];
const sceneIcons: IconComponent[] = [Utensils, HeartHandshake, Sparkles, PackageCheck];

function GoldButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "border-[#F2C36B]/40 bg-[linear-gradient(135deg,#F2C36B,#D89A42_52%,#A96828)] text-[#160E07] shadow-[0_16px_44px_rgb(216_154_66_/_24%)] hover:brightness-110"
      : "border-[rgba(217,180,106,0.34)] bg-[#120C07]/70 text-[#F5E7C8] hover:border-[#F0C978]/70 hover:text-[#F0C978]";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border px-7 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 sm:w-auto ${className}`}
    >
      {children}
    </Link>
  );
}

function SectionTitle({
  title,
  subtitle,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
      <span
        className={`mb-5 block h-px w-16 bg-[#D9B46A] ${align === "center" ? "mx-auto" : ""}`}
      />
      <h2 className="font-serif text-[1.75rem] font-semibold leading-tight tracking-[0.04em] text-[#F8E6BF] text-balance md:text-5xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-base leading-8 text-[#BCA77F] md:text-lg">{subtitle}</p> : null}
    </div>
  );
}

function ImagePanel({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.15rem] border border-[rgba(217,180,106,0.28)] bg-[#120C07] shadow-[0_30px_90px_rgb(0_0_0_/_38%)] md:rounded-[1.45rem] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1280px) 46vw, (min-width: 768px) 60vw, 92vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,transparent_0%,transparent_48%,rgb(8_6_4_/_70%)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgb(8_6_4_/_34%)_100%)]" />
    </div>
  );
}

function DetailCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`relative overflow-hidden rounded-[1.1rem] border border-[rgba(217,180,106,0.24)] bg-[linear-gradient(145deg,rgb(42_23_16_/_72%),rgb(8_6_4_/_94%))] shadow-[0_20px_62px_rgb(0_0_0_/_28%)] md:rounded-[1.35rem] ${className}`}
    >
      {children}
    </article>
  );
}

export function FreshMeatHero() {
  const { hero, breadcrumb } = pageData;

  return (
    <section className="relative isolate overflow-hidden border-b border-[rgba(217,180,106,0.18)] bg-[#070604]">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_72%_32%,rgb(216_154_66_/_18%),transparent_32rem),linear-gradient(135deg,#070604_0%,#120b06_48%,#070604_100%)]" />
      <div className="absolute right-0 top-0 -z-10 h-full w-2/3 bg-[radial-gradient(ellipse_at_center,rgb(240_201_120_/_10%),transparent_62%)]" />

      <div className="ysj-container grid gap-7 py-10 md:min-h-[720px] md:gap-10 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="flex flex-col gap-5 md:gap-7">
          <nav className="flex flex-wrap items-center gap-2 text-xs tracking-[0.12em] text-[#BCA77F]">
            {breadcrumb.map((item, index) => (
              <span key={item.href} className="inline-flex items-center gap-2">
                <Link href={item.href} className="transition-colors hover:text-[#F0C978]">
                  {item.label}
                </Link>
                {index < breadcrumb.length - 1 ? <ChevronRight className="size-3 text-[#D9B46A]" /> : null}
              </span>
            ))}
          </nav>

          <div className="flex flex-col gap-4 md:gap-5">
            <span className="w-fit rounded-full border border-[rgba(217,180,106,0.32)] bg-[#120C07]/78 px-4 py-2 text-sm tracking-[0.18em] text-[#D9B46A]">
              {hero.tag}
            </span>
            <h1 className="font-serif text-[clamp(2.55rem,12vw,4rem)] font-semibold leading-[0.98] tracking-[0.03em] text-[#F8E6BF] md:text-[clamp(3.8rem,7vw,6.8rem)] md:leading-[0.92]">
              {hero.title}
            </h1>
            <p className="text-lg font-medium leading-8 tracking-[0.04em] text-[#D9B46A] md:text-2xl md:tracking-[0.08em]">
              {hero.subtitle}
            </p>
            <p className="max-w-2xl text-sm leading-7 text-[#BCA77F] md:text-lg md:leading-8">{hero.description}</p>
          </div>

          <div className="grid gap-3 sm:flex sm:flex-row">
            <GoldButton href={hero.primaryCta.href}>
              <ShoppingCart className="size-5" />
              {hero.primaryCta.label}
            </GoldButton>
            <GoldButton href={hero.secondaryCta.href} variant="secondary">
              <Gift className="size-5" />
              {hero.secondaryCta.label}
            </GoldButton>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {hero.highlights.map((item, index) => {
              const Icon = highlightIcons[index] ?? Sparkles;

              return (
                <DetailCard key={item.title} className="p-4 md:p-4">
                  <div className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[rgba(217,180,106,0.34)] text-[#F0C978]">
                      <Icon className="size-5" strokeWidth={1.45} />
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-[#F5E7C8]">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#BCA77F]">{item.text}</p>
                    </div>
                  </div>
                </DetailCard>
              );
            })}
          </div>
        </div>

        <ImagePanel
          src={hero.image.src}
          alt={hero.image.alt}
          priority
          className="min-h-[300px] md:min-h-[520px] lg:min-h-[640px]"
        />
      </div>
    </section>
  );
}

export function FreshMeatProblems() {
  const { problems } = pageData;

  return (
    <section className="border-y border-[rgba(217,180,106,0.16)] bg-[#0B0704] py-11 md:py-18">
      <div className="ysj-container">
        <SectionTitle title={problems.title} />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {problems.items.map((item, index) => {
            const Icon = problemIcons[index] ?? ShieldCheck;

            return (
              <DetailCard key={item.title} className="min-h-[9.5rem] p-5 md:p-7">
                <div className="absolute -right-12 top-0 size-40 rounded-full border border-[rgba(217,180,106,0.14)]" />
                <div className="relative flex gap-5">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-[rgba(240,201,120,0.42)] bg-[#050302]/60 text-[#F0C978] md:size-14">
                    <Icon className="size-6 md:size-7" strokeWidth={1.45} />
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-[#F5E7C8]">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-[#BCA77F]">{item.text}</p>
                  </div>
                </div>
              </DetailCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FreshMeatHighlights() {
  const { highlights } = pageData;

  return (
    <section className="bg-[#070604] py-11 md:py-18">
      <div className="ysj-container">
        <SectionTitle title={highlights.title} />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {highlights.items.map((item, index) => {
            const Icon = highlightIcons[index] ?? Sparkles;

            return (
              <DetailCard key={item.title} className="group">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-[rgba(217,180,106,0.18)]">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 1280px) 23vw, (min-width: 768px) 45vw, 92vw"
                    className="object-cover brightness-[0.78] transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgb(8_6_4_/_70%)_100%)]" />
                </div>
                <div className="p-4 md:p-5">
                  <span className="mb-4 flex size-11 items-center justify-center rounded-full border border-[rgba(217,180,106,0.34)] text-[#F0C978]">
                    <Icon className="size-5" strokeWidth={1.45} />
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-[#F5E7C8]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#BCA77F]">{item.text}</p>
                </div>
              </DetailCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FreshMeatCraft() {
  const { craft } = pageData;

  return (
    <section className="border-y border-[rgba(217,180,106,0.16)] bg-[#0B0704] py-11 md:py-18">
      <div className="ysj-container">
        <div className="relative overflow-hidden rounded-[1.25rem] border border-[rgba(217,180,106,0.26)] bg-[linear-gradient(135deg,rgb(18_12_7_/_92%),rgb(7_6_4_/_98%))] p-3 shadow-[0_28px_90px_rgb(0_0_0_/_36%)] md:rounded-[1.6rem] md:p-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgb(217_180_106_/_10%),transparent_22rem),radial-gradient(circle_at_86%_76%,rgb(216_154_66_/_8%),transparent_20rem)]" />
          <div className="relative grid gap-6 lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
            <ImagePanel src={craft.image.src} alt={craft.image.alt} className="min-h-[280px] lg:min-h-[500px]" />
            <div className="p-1 md:p-4 lg:pr-6">
              <SectionTitle title={craft.title} align="left" />
              <div className="mt-7 grid gap-3 md:gap-4">
                {craft.points.map((item, index) => {
                  const Icon = craftIcons[index] ?? Sparkles;

                  return (
                    <div
                      key={item.title}
                      className="rounded-[1rem] border border-[rgba(217,180,106,0.18)] bg-[#050302]/38 p-4 shadow-[inset_0_1px_0_rgb(248_230_191_/_5%)] md:p-5"
                    >
                      <div className="flex gap-4">
                        <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-[rgba(217,180,106,0.38)] bg-[#120C07]/70 text-[#F0C978]">
                          <Icon className="size-5" strokeWidth={1.45} />
                        </span>
                        <div>
                          <h3 className="font-serif text-xl font-semibold text-[#F5E7C8]">{item.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-[#CDB98D]">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FreshMeatTaste() {
  const { taste } = pageData;

  return (
    <section className="bg-[#070604] py-11 md:py-18">
      <div className="ysj-container">
        <div className="relative overflow-hidden rounded-[1.25rem] border border-[rgba(217,180,106,0.26)] bg-[linear-gradient(135deg,rgb(7_6_4_/_98%),rgb(22_16_10_/_92%))] p-3 shadow-[0_28px_90px_rgb(0_0_0_/_36%)] md:rounded-[1.6rem] md:p-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_64%,rgb(240_201_120_/_9%),transparent_24rem),linear-gradient(90deg,transparent,rgb(216_154_66_/_5%))]" />
          <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <ImagePanel src={taste.image.src} alt={taste.image.alt} className="min-h-[300px] lg:min-h-[500px]" />
            <div className="p-1 md:p-4 lg:pl-6">
              <SectionTitle title={taste.title} align="left" />
              <div className="mt-7 grid gap-3 md:grid-cols-3 lg:grid-cols-3">
                {taste.items.map((item, index) => {
                  const Icon = tasteIcons[index] ?? Sparkles;

                  return (
                    <div
                      key={item.title}
                      className="flex min-h-[170px] flex-col justify-between rounded-[1rem] border border-[rgba(217,180,106,0.22)] bg-[#050302]/42 p-5 text-left shadow-[inset_0_1px_0_rgb(248_230_191_/_5%)]"
                    >
                      <span className="flex size-12 items-center justify-center rounded-full border border-[rgba(217,180,106,0.38)] bg-[#120C07]/70 text-[#F0C978]">
                        <Icon className="size-6" strokeWidth={1.45} />
                      </span>
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-[#F5E7C8]">{item.title}</h3>
                        <p className="mt-3 whitespace-pre-line text-base leading-7 text-[#CDB98D]">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FreshMeatInfo() {
  const { info } = pageData;

  return (
    <section id="gift-specs" className="border-y border-[rgba(217,180,106,0.16)] bg-[#0B0704] py-11 scroll-mt-28 md:py-18">
      <div className="ysj-container">
        <DetailCard className="p-4 md:p-9">
          <SectionTitle title={info.title} />
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {info.specs.map((item, index) => {
              const Icon = specIcons[index] ?? BadgeCheck;

              return (
                <div
                  key={item.label}
                  className="rounded-[1rem] border border-[rgba(217,180,106,0.18)] bg-[#050302]/42 p-4 text-center md:p-5"
                >
                  <Icon className="mx-auto size-7 text-[#F0C978] md:size-8" strokeWidth={1.45} />
                  <p className="mt-3 text-xs text-[#D9B46A] md:text-sm">{item.label}</p>
                  <p className="mt-2 font-serif text-lg font-semibold text-[#F5E7C8] md:text-xl">{item.value}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid gap-3 md:mt-8 md:grid-cols-3 md:gap-4">
            {info.reheating.map((item, index) => {
              const Icon = reheatIcons[index] ?? Flame;

              return (
                <div
                  key={item.label}
                  className="rounded-[1rem] border border-[rgba(217,180,106,0.18)] bg-[#120C07]/72 p-4 md:p-5"
                >
                  <Icon className="size-8 text-[#F0C978]" strokeWidth={1.45} />
                  <p className="mt-4 font-serif text-xl font-semibold text-[#F5E7C8]">{item.label}</p>
                  <p className="mt-2 text-base text-[#BCA77F]">{item.value}</p>
                </div>
              );
            })}
          </div>

          <p className="mt-6 border-t border-[rgba(217,180,106,0.16)] pt-5 text-sm leading-7 text-[#BCA77F]">
            {info.note}
          </p>
          <div className="mt-5 flex flex-col gap-3 rounded-[1rem] border border-[rgba(217,180,106,0.2)] bg-[#070604]/70 p-4 md:flex-row md:items-center md:justify-between md:p-5">
            <div>
              <p className="font-serif text-lg font-semibold text-[#F5E7C8]">想确认试吃名额或礼盒规格？</p>
              <p className="mt-1 text-sm leading-6 text-[#BCA77F]">留下信息，我们为你确认现烤批次、礼盒规格与企业团购方案。</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
              <GoldButton href="/reserve">预约试吃</GoldButton>
              <GoldButton href="/contact" variant="secondary">
                咨询礼盒
              </GoldButton>
            </div>
          </div>
        </DetailCard>
      </div>
    </section>
  );
}

export function FreshMeatGift() {
  const { gift } = pageData;

  return (
    <section className="bg-[#070604] py-11 md:py-18">
      <div className="ysj-container grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <SectionTitle title={gift.title} align="left" />
          <div className="mt-7 grid gap-3 sm:grid-cols-2 md:gap-4">
            {gift.scenes.map((item, index) => {
              const Icon = sceneIcons[index] ?? Gift;

              return (
                <DetailCard key={item.title} className="p-4 md:p-5">
                  <Icon className="size-8 text-[#F0C978]" strokeWidth={1.45} />
                  <h3 className="mt-4 font-serif text-xl font-semibold text-[#F5E7C8]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#BCA77F]">{item.text}</p>
                </DetailCard>
              );
            })}
          </div>
        </div>
        <ImagePanel src={gift.image.src} alt={gift.image.alt} className="min-h-[260px] md:min-h-[340px] lg:min-h-[500px]" />
      </div>
    </section>
  );
}

export function FreshMeatCTA() {
  const { bottomCta } = pageData;

  return (
    <section className="relative isolate overflow-hidden border-y border-[rgba(217,180,106,0.18)] bg-[#070604] py-12 md:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgb(240_201_120_/_12%),transparent_30rem),linear-gradient(180deg,#0F0B07_0%,#070604_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-[radial-gradient(ellipse_at_bottom,rgb(217_180_106_/_10%),transparent_70%)]" />
      <div className="ysj-container text-center">
        <h2 className="font-serif text-[2rem] font-semibold leading-tight text-[#F8E6BF] text-balance md:text-6xl">
          {bottomCta.title}
        </h2>
        <p className="mt-4 text-base leading-7 text-[#BCA77F] md:text-lg">{bottomCta.subtitle}</p>
        <div className="mt-7 grid justify-center gap-3 sm:flex sm:flex-row">
          <GoldButton href={bottomCta.primaryCta.href}>
            <ShoppingCart className="size-5" />
            {bottomCta.primaryCta.label}
          </GoldButton>
          <GoldButton href={bottomCta.secondaryCta.href} variant="secondary">
            <Gift className="size-5" />
            {bottomCta.secondaryCta.label}
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
