import type React from "react";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CupSoda,
  Flame,
  Gift,
  Layers3,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Sprout,
  Store,
  Truck,
} from "lucide-react";

import { classicPineappleCakeDetailData as pageData } from "@/data/classic-pineapple-cake-detail";

type IconComponent = typeof Sparkles;

const problemIcons: IconComponent[] = [Sprout, Layers3, Flame];
const highlightIcons: IconComponent[] = [Sprout, Gift, Layers3, Truck];
const craftIcons: IconComponent[] = [Sprout, Sparkles, Layers3, Flame];
const tasteIcons: IconComponent[] = [Layers3, Sprout, Sparkles];
const specIcons: IconComponent[] = [PackageCheck, Gift, CalendarDays, ShieldCheck, CupSoda, Truck];
const sceneIcons: IconComponent[] = [Sparkles, Gift, Truck];
const guaranteeIcons: IconComponent[] = [Store, Truck, PackageCheck, ShieldCheck];

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

function ImagePanel({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(min-width: 1280px) 46vw, (min-width: 768px) 60vw, 92vw",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.15rem] border border-[rgba(217,180,106,0.28)] bg-[#120C07] shadow-[0_30px_90px_rgb(0_0_0_/_38%)] md:rounded-[1.45rem] ${className}`}
    >
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,transparent_0%,transparent_52%,rgb(8_6_4_/_70%)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgb(8_6_4_/_32%)_100%)]" />
    </div>
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

export function PineappleCakeHero() {
  const { hero } = pageData;

  return (
    <section className="relative isolate overflow-hidden border-b border-[rgba(217,180,106,0.18)] bg-[#070604]">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_72%_38%,rgb(216_154_66_/_22%),transparent_30rem),radial-gradient(circle_at_30%_18%,rgb(240_201_120_/_8%),transparent_22rem),linear-gradient(135deg,#050302_0%,#120B06_48%,#070604_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.14] [background-image:linear-gradient(rgba(217,180,106,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(217,180,106,0.08)_1px,transparent_1px)] [background-size:4rem_4rem]" />
      <div className="absolute -right-24 top-20 -z-10 h-72 w-72 rounded-full border border-[#D9B46A]/15 opacity-50 md:h-[34rem] md:w-[34rem]" />
      <div className="absolute inset-0 -z-10 lg:hidden">
        <Image
          src={hero.image.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_42%] opacity-70 brightness-[0.74] saturate-[1.08]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#070604_0%,rgb(7_6_4_/_86%)_45%,rgb(7_6_4_/_28%)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(7_6_4_/_34%)_0%,rgb(7_6_4_/_66%)_58%,#070604_100%)]" />
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[#070604] to-transparent" />

      <div className="ysj-container grid gap-8 py-8 md:min-h-[700px] md:gap-12 md:py-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div className="relative z-10 flex max-w-[42rem] flex-col gap-5 md:gap-6">
          <nav className="flex flex-wrap items-center gap-2 text-[0.72rem] text-[#BCA77F] md:text-sm">
            {hero.breadcrumb.map((item, index) => (
              <span key={item.href} className="inline-flex items-center gap-2">
                <Link href={item.href} className="transition-colors hover:text-[#F0C978]">
                  {item.label}
                </Link>
                {index < hero.breadcrumb.length - 1 ? <span className="text-[#D9B46A]/50">/</span> : null}
              </span>
            ))}
          </nav>

          <div>
            <p className="mb-4 inline-flex w-fit rounded-full border border-[#D9B46A]/30 bg-[#120C07]/70 px-4 py-2 text-xs font-medium tracking-[0.18em] text-[#D9B46A] shadow-[0_10px_34px_rgb(0_0_0_/_28%)] md:text-sm">
              {hero.title}
            </p>
            <h1 className="max-w-[8em] font-serif text-[clamp(3rem,13vw,4.2rem)] font-semibold leading-[1.02] tracking-[0.02em] text-[#F2C36B] drop-shadow-[0_10px_34px_rgb(0_0_0_/_55%)] md:text-[clamp(4.6rem,6vw,6.4rem)] md:leading-[0.98]">
              {hero.headline}
            </h1>
            <p className="mt-4 max-w-2xl text-lg font-medium leading-8 text-[#F8E6BF] md:text-[1.65rem] md:leading-10">
              {hero.subtitle}
            </p>
            <p className="mt-4 max-w-[37rem] text-sm leading-7 text-[#BCA77F] md:text-base md:leading-8">
              {hero.description}
            </p>
          </div>

          <div className="grid gap-3 pt-1 sm:flex">
            <GoldButton href={hero.primaryCta.href}>
              <ArrowRight className="size-5" />
              {hero.primaryCta.label}
            </GoldButton>
            <GoldButton href={hero.secondaryCta.href} variant="secondary">
              <Gift className="size-5" />
              {hero.secondaryCta.label}
            </GoldButton>
          </div>

          <div className="grid grid-cols-4 gap-2 pt-1 md:gap-3">
            {hero.tags.map((tag, index) => {
              const Icon = highlightIcons[index] ?? Sparkles;
              return (
                <div
                  key={tag}
                  className="rounded-[0.85rem] border border-[rgba(217,180,106,0.28)] bg-[#0B0704]/72 px-2.5 py-3 text-[#F5E7C8] shadow-[inset_0_1px_0_rgb(248_230_191_/_5%)] backdrop-blur-sm md:rounded-[0.9rem] md:px-4"
                >
                  <Icon className="mb-2 size-4 text-[#F0C978] md:size-5" strokeWidth={1.45} />
                  <p className="text-[0.68rem] font-medium leading-snug md:text-sm">{tag}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative hidden min-h-[270px] lg:block lg:min-h-[620px]">
          <div className="absolute inset-x-4 bottom-2 top-8 rounded-full bg-[#D89A42]/16 blur-3xl md:inset-x-12 md:top-20" />
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_52%_46%,rgb(240_201_120_/_15%),transparent_28rem)]" />
          <div className="relative h-full min-h-[270px] overflow-hidden rounded-[1.35rem] border border-[rgba(217,180,106,0.22)] bg-[#120C07]/50 shadow-[0_34px_110px_rgb(0_0_0_/_52%)] md:rounded-[2rem] lg:min-h-[620px]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(min-width: 1280px) 50vw, (min-width: 768px) 54vw, 92vw"
              className="object-cover object-[54%_50%] brightness-[0.86] saturate-[1.08]"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_56%_44%,transparent_0%,transparent_48%,rgb(7_6_4_/_66%)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(7_6_4_/_46%)_0%,transparent_30%,transparent_76%,rgb(7_6_4_/_48%)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#070604]/84 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function PineappleCakeProblems() {
  const { problems } = pageData;

  return (
    <section className="border-y border-[rgba(217,180,106,0.16)] bg-[#0B0704] py-14 md:py-20">
      <div className="ysj-container">
        <SectionTitle title={problems.title} />
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {problems.items.map((item, index) => {
            const Icon = problemIcons[index] ?? Sparkles;
            return (
              <DetailCard key={item.title} className="p-5 md:p-6">
                <div className="flex gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-[rgba(217,180,106,0.34)] text-[#F0C978]">
                    <Icon className="size-5" strokeWidth={1.45} />
                  </span>
                  <div>
                    <h3 className="font-serif text-[1.45rem] font-semibold text-[#F5E7C8]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#CDB98D] md:text-base">{item.text}</p>
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

export function PineappleCakeHighlights() {
  const { highlights } = pageData;

  return (
    <section className="bg-[#070604] py-14 md:py-20">
      <div className="ysj-container">
        <SectionTitle title={highlights.title} />
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.items.map((item) => (
            <DetailCard key={item.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden border-b border-[rgba(217,180,106,0.18)]">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 1280px) 23vw, (min-width: 768px) 45vw, 92vw"
                  className="object-cover brightness-[0.78] transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgb(8_6_4_/_72%)_100%)]" />
              </div>
              <div className="p-5 md:p-6">
                <span className="mb-4 block h-px w-12 bg-[#D9B46A]/70" />
                <h3 className="font-serif text-2xl font-semibold text-[#F5E7C8]">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#CDB98D]">{item.text}</p>
              </div>
            </DetailCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PineappleCakeCraft() {
  const { craft } = pageData;

  return (
    <section className="border-y border-[rgba(217,180,106,0.16)] bg-[#0B0704] py-14 md:py-20">
      <div className="ysj-container">
        <div className="relative overflow-hidden rounded-[1.25rem] border border-[rgba(217,180,106,0.3)] bg-[linear-gradient(135deg,rgb(18_12_7_/_92%),rgb(7_6_4_/_98%))] p-3 shadow-[0_28px_90px_rgb(0_0_0_/_36%)] md:rounded-[1.6rem] md:p-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgb(217_180_106_/_10%),transparent_22rem),radial-gradient(circle_at_86%_76%,rgb(216_154_66_/_8%),transparent_20rem)]" />
          <div className="absolute -right-16 -top-16 size-52 rounded-full border border-[#D9B46A]/10 opacity-60" />
          <div className="absolute -bottom-20 left-8 h-40 w-72 rounded-[999px] border border-[#D9B46A]/10 opacity-40" />
          <div className="relative grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <ImagePanel src={craft.image.src} alt={craft.image.alt} className="min-h-[320px] lg:min-h-[520px]" />
            <div className="p-1 md:p-4 lg:pr-6">
              <SectionTitle title={craft.title} align="left" />
              <div className="mt-8 grid gap-4">
                {craft.points.map((item, index) => {
                  const Icon = craftIcons[index] ?? Sparkles;
                  return (
                    <div key={item.title} className="rounded-[1rem] border border-[rgba(217,180,106,0.18)] bg-[#050302]/38 p-4 shadow-[inset_0_1px_0_rgb(248_230_191_/_5%)] md:p-5">
                      <div className="flex gap-4">
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[rgba(217,180,106,0.38)] bg-[#120C07]/70 text-[#F0C978] md:size-12">
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

export function PineappleCakeTaste() {
  const { taste } = pageData;

  return (
    <section className="bg-[#070604] py-14 md:py-20">
      <div className="ysj-container">
        <div className="relative overflow-hidden rounded-[1.25rem] border border-[rgba(217,180,106,0.26)] bg-[linear-gradient(135deg,rgb(7_6_4_/_98%),rgb(22_16_10_/_92%))] p-3 shadow-[0_28px_90px_rgb(0_0_0_/_36%)] md:rounded-[1.6rem] md:p-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_64%,rgb(240_201_120_/_9%),transparent_24rem),linear-gradient(90deg,transparent,rgb(216_154_66_/_5%))]" />
          <div className="relative grid gap-6 lg:grid-cols-[1.16fr_0.84fr] lg:items-center">
            <ImagePanel src={taste.image.src} alt={taste.image.alt} className="min-h-[320px] lg:min-h-[500px]" />
            <div className="p-1 md:p-4 lg:pl-6">
              <SectionTitle title={taste.title} align="left" />
              <div className="mt-8 grid gap-4">
                {taste.items.map((item, index) => {
                  const Icon = tasteIcons[index] ?? Sparkles;
                  return (
                    <div key={item.title} className="rounded-[1rem] border border-[rgba(217,180,106,0.24)] bg-[#050302]/42 p-5 text-left shadow-[inset_0_1px_0_rgb(248_230_191_/_5%)]">
                      <div className="flex gap-4">
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[rgba(217,180,106,0.38)] bg-[#120C07]/70 text-[#F0C978]">
                          <Icon className="size-5" strokeWidth={1.45} />
                        </span>
                        <div>
                          <h3 className="font-serif text-xl font-semibold text-[#F5E7C8]">{item.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-[#CDB98D] md:text-base">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {"summary" in taste ? (
                <p className="mt-5 rounded-full border border-[rgba(217,180,106,0.16)] bg-[#120C07]/54 px-5 py-3 text-center text-sm leading-7 text-[#F0C978] md:text-base">
                  {taste.summary}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PineappleCakeInfoGift() {
  const { infoGift } = pageData;

  return (
    <section id="gift-specs" className="border-y border-[rgba(217,180,106,0.16)] bg-[#0B0704] py-14 scroll-mt-28 md:py-20">
      <div className="ysj-container">
        <DetailCard className="p-4 md:p-7">
          <SectionTitle title={infoGift.title} />
          <div className="mt-8 grid gap-0 overflow-hidden rounded-[1.1rem] border border-[rgba(217,180,106,0.22)] bg-[#050302]/42 md:grid-cols-3 xl:grid-cols-6">
            {infoGift.specs.map((item, index) => {
              const Icon = specIcons[index] ?? PackageCheck;
              return (
                <div key={item.label} className="flex items-center gap-3 border-b border-[rgba(217,180,106,0.14)] p-4 last:border-b-0 md:flex-col md:items-start md:border-b md:border-r md:last:border-r-0 xl:border-b-0 xl:p-5">
                  <Icon className="size-6 shrink-0 text-[#F0C978]" strokeWidth={1.45} />
                  <div>
                    <p className="text-xs text-[#D9B46A] md:text-sm">{item.label}</p>
                    <p className="mt-1 font-serif text-base font-semibold text-[#F5E7C8] md:text-lg">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </DetailCard>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionTitle title={infoGift.giftTitle} align="left" />
            <div className="mt-7 grid gap-3">
              {infoGift.scenes.map((item, index) => {
                const Icon = sceneIcons[index] ?? Sparkles;
                return (
                  <div key={item.title} className="rounded-[1rem] border border-[rgba(217,180,106,0.2)] bg-[linear-gradient(135deg,rgb(18_12_7_/_78%),rgb(5_3_2_/_72%))] p-5">
                    <div className="flex gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[rgba(217,180,106,0.34)] text-[#F0C978]">
                        <Icon className="size-5" strokeWidth={1.45} />
                      </span>
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-[#F5E7C8]">{item.title}</h3>
                        <p className="mt-1 text-sm leading-7 text-[#CDB98D]">{item.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative min-h-[300px] lg:min-h-[470px]">
            <div className="absolute inset-x-8 bottom-4 top-12 rounded-full bg-[#D89A42]/14 blur-3xl" />
            <ImagePanel
              src={infoGift.image.src}
              alt={infoGift.image.alt}
              className="relative min-h-[300px] lg:min-h-[470px]"
              sizes="(min-width: 1024px) 58vw, 92vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function PineappleCakeCTA() {
  const { bottomCta } = pageData;

  return (
    <section className="relative isolate overflow-hidden border-y border-[rgba(217,180,106,0.18)] bg-[#070604] py-14 md:py-22">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_0%,rgb(240_201_120_/_13%),transparent_30rem),radial-gradient(circle_at_72%_78%,rgb(216_154_66_/_9%),transparent_24rem),linear-gradient(180deg,#0F0B07_0%,#070604_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 opacity-35 [background-image:radial-gradient(ellipse_at_center,transparent_35%,rgba(217,180,106,0.16)_36%,transparent_37%),linear-gradient(120deg,transparent_45%,rgba(217,180,106,0.12)_46%,transparent_48%)] [background-size:14rem_7rem,9rem_5rem]" />
      <div className="absolute -right-20 bottom-8 -z-10 size-56 rounded-full border border-[#D9B46A]/12" />
      <div className="ysj-container text-center">
        <h2 className="font-serif text-[2rem] font-semibold leading-tight text-[#F8E6BF] text-balance md:text-6xl">
          {bottomCta.title}
        </h2>
        <p className="mt-4 text-base leading-7 text-[#BCA77F] md:text-lg">{bottomCta.subtitle}</p>
        <div className="mt-7 grid justify-center gap-3 sm:flex sm:flex-row">
          <GoldButton href={bottomCta.primaryCta.href}>
            <ArrowRight className="size-5" />
            {bottomCta.primaryCta.label}
          </GoldButton>
          <GoldButton href={bottomCta.secondaryCta.href} variant="secondary">
            <Gift className="size-5" />
            {bottomCta.secondaryCta.label}
          </GoldButton>
        </div>
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
          {bottomCta.guarantees.map((item, index) => {
            const Icon = guaranteeIcons[index] ?? ShieldCheck;
            return (
              <div key={item} className="rounded-full border border-[rgba(217,180,106,0.2)] bg-[#120C07]/58 px-4 py-3 text-sm text-[#F5E7C8]">
                <span className="inline-flex items-center gap-2">
                  <Icon className="size-4 text-[#F0C978]" strokeWidth={1.45} />
                  {item}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
