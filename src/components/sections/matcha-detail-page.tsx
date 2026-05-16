import type React from "react";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bean,
  Egg,
  Gift,
  HandHeart,
  Layers3,
  Leaf,
  PackageCheck,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Star,
} from "lucide-react";

import type { matchaProductData } from "@/data/matcha-detail";

type ProductData = typeof matchaProductData;
type IconKey = "egg" | "layers" | "beans" | "hand" | "leaf" | "scale";

type ButtonData = {
  label: string;
  href: string;
  variant?: string;
};

const iconMap = {
  egg: Egg,
  layers: Layers3,
  beans: Bean,
  hand: HandHeart,
  leaf: Leaf,
  scale: Scale,
} satisfies Record<IconKey, typeof Egg>;

function SectionShell({
  children,
  tone = "cream",
}: {
  children: React.ReactNode;
  tone?: "white" | "cream" | "soft";
}) {
  const bg = tone === "white" ? "bg-[#fffaf3]" : tone === "soft" ? "bg-[#eef1e6]" : "bg-[#f7f1e7]";

  return (
    <section className={`${bg} px-4 py-12 sm:px-6 lg:px-8`}>
      {children}
    </section>
  );
}

function MatchaButton({
  button,
  children,
  variant = "primary",
}: {
  button: ButtonData;
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "bg-[#2f5a32] text-[#fffaf0] shadow-[0_16px_36px_rgba(47,90,50,0.2)] hover:bg-[#234626]"
      : "border border-[#2f5a32]/55 bg-white/75 text-[#2f5a32] hover:bg-[#f0f5e8]";

  return (
    <Link
      href={button.href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-base font-semibold transition duration-200 hover:scale-[1.03] ${className}`}
    >
      {children}
      {button.label}
      <ArrowRight className="size-4" />
    </Link>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      {eyebrow ? <p className="text-sm tracking-[0.18em] text-[#9b6a2f]">{eyebrow}</p> : null}
      <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#24452a] sm:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-base leading-8 text-[#675f52] sm:text-lg">{subtitle}</p> : null}
      <span className="mx-auto mt-5 block h-1 w-12 rounded-full bg-[#2f5a32]" />
    </div>
  );
}

function ModuleImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative overflow-hidden rounded-[1.45rem] border border-[#c8a96b]/75 bg-[#f5eddc] shadow-[0_18px_52px_rgba(47,90,50,0.10)]">
      <div className="relative aspect-[16/10]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 1120px, (min-width: 768px) 92vw, 96vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

// 1. Hero 模块
export function MatchaHeroSection({ data }: { data: ProductData["hero"] }) {
  const primaryButton = data.buttons[0];
  const secondaryButton = data.buttons[1];

  return (
    <section className="relative isolate overflow-hidden bg-[#f6f1e7] px-4 py-12 text-[#3f3026] sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_12%,rgba(47,90,50,0.14),transparent_30%),linear-gradient(135deg,#fffaf2_0%,#edf2e6_48%,#fff7eb_100%)]" />
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#c8a96b]/75 bg-[#fffaf2]/88 p-4 shadow-[0_28px_90px_rgba(47,90,50,0.10)] backdrop-blur sm:p-6 lg:p-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.03fr_0.97fr] lg:gap-12">
          <div className="rounded-[1.6rem] border border-dashed border-[#c8a96b]/55 bg-[#fffaf2]/82 p-6 sm:p-8 lg:p-10">
            <p className="mb-4 inline-flex rounded-full border border-[#2f5a32]/20 bg-[#eef5e7] px-4 py-2 text-sm font-medium tracking-[0.14em] text-[#2f5a32]">
              {data.eyebrow}
            </p>
            <h1 className="text-balance font-serif text-3xl font-semibold leading-tight text-[#24452a] sm:text-4xl lg:text-[2.65rem]">
              {data.name}
            </h1>
            <p className="mt-5 text-balance text-3xl font-semibold leading-tight text-[#2f5a32] sm:text-4xl lg:text-[2.9rem]">
              {data.slogan}
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#675f52]">{data.subtitle}</p>

            <div className="mt-7 space-y-3">
              {data.painPoints.map((point) => (
                <div key={point.title} className="rounded-2xl border border-[#d8c6a4]/75 bg-white/65 px-4 py-3 shadow-[0_10px_28px_rgba(47,90,50,0.05)]">
                  <p className="font-semibold text-[#2f5a32]">{point.title}</p>
                  <p className="mt-1 text-[#675f52]">{point.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 grid overflow-hidden rounded-2xl border border-[#c8a96b]/70 bg-[#f8f1e4] sm:grid-cols-2">
              <div className="border-b border-[#decba4] p-4 sm:border-b-0 sm:border-r">
                <p className="mb-3 font-semibold text-[#8f3c2f]">普通抹茶酥</p>
                <div className="space-y-2 text-sm text-[#6f675b]">
                  {data.comparison.bad.map((item) => (
                    <p key={item}>× {item}</p>
                  ))}
                </div>
              </div>
              <div className="p-4">
                <p className="mb-3 font-semibold text-[#2f5a32]">云酥坊抹茶酥</p>
                <div className="space-y-2 text-sm font-medium text-[#2f5a32]">
                  {data.comparison.good.map((item) => (
                    <p key={item}>✓ {item}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <MatchaButton button={primaryButton}>
                <ShoppingCart className="size-5" />
              </MatchaButton>
              <MatchaButton button={secondaryButton} variant="secondary">
                <Gift className="size-5" />
              </MatchaButton>
            </div>
          </div>

          <ModuleImage src={data.image} alt={data.imageAlt} priority />
        </div>
      </div>
    </section>
  );
}

// 2. 核心卖点模块
export function MatchaCoreFeatures({ data }: { data: ProductData["coreFeatures"] }) {
  return (
    <SectionShell>
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#c8a96b]/75 bg-[#fffaf3]/88 px-4 py-10 shadow-[0_24px_80px_rgba(47,90,50,0.08)] sm:px-6 lg:px-8 lg:py-14">
        <SectionTitle eyebrow={data.eyebrow} title={data.title} subtitle={data.intro} />
        <div className="mt-10">
          <ModuleImage src={data.moduleImage} alt={data.moduleImageAlt} />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <article key={feature.title} className="group flex flex-col rounded-[1.35rem] border border-[#c8a96b]/80 bg-[#fffaf2]/90 px-5 py-6 shadow-[0_14px_42px_rgba(47,90,50,0.06)] transition hover:-translate-y-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-16 items-center justify-center rounded-full border border-[#c8a96b]/55 bg-[#fffdf7] text-[#2f5a32]">
                    <Icon className="size-8 stroke-[1.45]" />
                  </div>
                  <span className="rounded-full bg-[#2f5a32] px-3 py-1 text-xs font-semibold text-white">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold leading-snug text-[#24452a]">{feature.title}</h3>
                <p className="mt-3 text-base leading-8 text-[#675f52]">{feature.text}</p>
                <span className="mt-5 inline-flex w-fit rounded-full bg-[#eef5e7] px-3 py-1 text-sm font-semibold text-[#2f5a32]">{feature.tag}</span>
              </article>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}

// 3. 精选原料模块
export function MatchaIngredients({ data }: { data: ProductData["ingredients"] }) {
  return (
    <SectionShell tone="white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#c8a96b]/75 bg-[#fffaf3] p-5 shadow-[0_22px_70px_rgba(47,90,50,0.07)] lg:p-8">
        <SectionTitle title={data.title} subtitle={data.slogan} />
        <div className="mt-10">
          <ModuleImage src={data.moduleImage} alt={data.moduleImageAlt} />
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {data.items.map((item, index) => (
            <article key={item.name} className="overflow-hidden rounded-[1.3rem] border border-[#c8a96b]/80 bg-[#fffaf2] shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image src={item.image} alt={item.name} fill sizes="(min-width: 1280px) 22vw, (min-width: 768px) 45vw, 92vw" className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-2xl font-semibold text-[#24452a]">
                  <span className="mr-2 inline-flex size-8 items-center justify-center rounded-full bg-[#2f5a32] text-sm text-white">{index + 1}</span>
                  {item.name}
                </h3>
                <p className="mt-4 leading-8 text-[#675f52]">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-3 rounded-2xl border border-[#c8a96b]/75 bg-white/55 p-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.trust.map((item) => (
            <div key={item} className="flex items-center justify-center gap-2 font-semibold text-[#38503a]">
              <ShieldCheck className="size-5 text-[#2f5a32]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

// 4. 层次口感解析
export function MatchaLayeredTaste({ data }: { data: ProductData["layeredTaste"] }) {
  return (
    <SectionShell>
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#c8a96b]/75 bg-[#fffaf3] p-5 shadow-[0_22px_70px_rgba(47,90,50,0.07)] lg:p-8">
        <SectionTitle title={data.title} />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <ModuleImage src={data.moduleImage} alt={data.moduleImageAlt} />
            <div className="relative min-h-[300px] overflow-hidden rounded-[1.5rem] border border-[#c8a96b]/80 bg-[#eef1e6] lg:min-h-[420px]">
              <Image src={data.image} alt={data.imageAlt} fill sizes="(min-width: 1024px) 44vw, 92vw" className="object-cover" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {data.layers.map((layer, index) => {
              const Icon = iconMap[layer.icon];
              return (
                <article key={layer.title} className="grid grid-cols-[4.5rem_1fr] gap-4 rounded-2xl border border-[#c8a96b]/80 bg-[#fffaf2] p-5 shadow-sm">
                  <div className="flex size-16 items-center justify-center rounded-full border border-[#c8a96b]/60 text-[#2f5a32]">
                    <Icon className="size-8" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-[#24452a]">
                      <span className="mr-2 text-[#2f5a32]">{index + 1}</span>
                      {layer.title}
                    </h3>
                    <p className="mt-2 leading-8 text-[#675f52]">{layer.text}</p>
                  </div>
                </article>
              );
            })}
            <div className="rounded-2xl border border-[#c8a96b]/80 bg-[#eef5e7] p-5 font-semibold leading-8 text-[#24452a]">{data.summary}</div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

// 5. 匠心制作工艺
export function MatchaCrafting({ data }: { data: ProductData["crafting"] }) {
  return (
    <SectionShell tone="white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#c8a96b]/75 bg-[#fffaf3] p-5 lg:p-8">
        <SectionTitle title={data.title} subtitle={data.difference} />
        <div className="mt-10">
          <ModuleImage src={data.moduleImage} alt={data.moduleImageAlt} />
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {data.steps.map((step, index) => (
            <article key={step.title} className="rounded-[1.35rem] border border-dashed border-[#c8a96b] bg-[#fffaf2] p-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#eef1e6]">
                <Image src={step.image} alt={step.title} fill sizes="(min-width: 1280px) 22vw, (min-width: 768px) 45vw, 92vw" className="object-cover" />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-[#24452a]">
                <span className="mr-2 inline-flex size-9 items-center justify-center rounded-full bg-[#2f5a32] text-sm text-white">{String(index + 1).padStart(2, "0")}</span>
                {step.title}
              </h3>
              <p className="mt-4 leading-8 text-[#675f52]">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

// 6. 产品参数规格
export function MatchaProductSpecs({ data }: { data: ProductData["productSpecs"] }) {
  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#c8a96b]/75 bg-[#fffaf3] p-5 lg:p-8">
        <SectionTitle title={data.title} />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="overflow-hidden rounded-2xl border border-[#c8a96b]/80">
            {data.rows.map(([label, value]) => (
              <div key={label} className="grid gap-3 border-b border-[#eadbc0] bg-white/45 p-4 last:border-b-0 sm:grid-cols-[8rem_1fr]">
                <div className="font-semibold text-[#2f5a32]">{label}</div>
                <div className="leading-8 text-[#5f4c3d]">{value}</div>
              </div>
            ))}
          </div>
          <div className="space-y-5">
            <ModuleImage src={data.moduleImage} alt={data.moduleImageAlt} />
            <div className="grid gap-4 sm:grid-cols-2">
              {data.badges.map((badge) => (
                <div key={badge} className="rounded-2xl border border-[#c8a96b]/80 bg-white/55 p-5 text-center font-serif text-xl font-semibold text-[#24452a]">
                  <PackageCheck className="mx-auto mb-3 size-8 text-[#2f5a32]" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

// 7. 礼盒场景展示
export function MatchaGiftBox({ data }: { data: ProductData["giftBox"] }) {
  return (
    <SectionShell>
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#c8a96b]/75 bg-[#fffaf3] p-5 lg:p-8">
        <SectionTitle title={data.title} />
        <div className="mt-10">
          <ModuleImage src={data.moduleImage} alt={data.moduleImageAlt} />
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {data.scenes.map((scene) => (
            <article key={scene.title} className="rounded-[1.4rem] border border-dashed border-[#c8a96b] bg-[#fffaf2] p-5">
              <h3 className="font-serif text-3xl font-semibold text-[#24452a]">{scene.title}</h3>
              <p className="mt-3 leading-8 text-[#675f52]">{scene.text}</p>
              <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={scene.image} alt={scene.title} fill sizes="(min-width: 1024px) 45vw, 92vw" className="object-cover" />
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 grid gap-3 rounded-2xl border border-[#c8a96b]/75 p-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.points.map((point) => (
            <div key={point} className="flex justify-center gap-2 font-semibold text-[#38503a]">
              <Gift className="size-5 text-[#2f5a32]" />
              {point}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

// 8. 同系列搭配
export function MatchaCrossSell({ data }: { data: ProductData["crossSell"] }) {
  return (
    <SectionShell tone="white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#c8a96b]/75 bg-[#fffaf3] p-5 lg:p-8">
        <SectionTitle title={data.title} subtitle={data.note} />
        <div className="mt-10">
          <ModuleImage src={data.moduleImage} alt={data.moduleImageAlt} />
        </div>
        <div className="mt-8 flex gap-5 overflow-x-auto pb-3 [scrollbar-width:thin]">
          {data.products.map((product) => (
            <article key={product.name} className="min-w-[17rem] rounded-[1.3rem] border border-[#c8a96b]/80 bg-[#fffaf2] p-4 shadow-sm sm:min-w-[20rem]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={product.image} alt={product.name} fill sizes="20rem" className="object-cover" />
              </div>
              <h3 className="mt-5 font-serif text-3xl font-semibold text-[#24452a]">{product.name}</h3>
              <p className="mt-2 text-[#675f52]">{product.flavor}</p>
              <Link href="/reserve" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-[#2f5a32]/50 px-5 font-semibold text-[#2f5a32] transition hover:scale-[1.03] hover:bg-[#eef5e7]">
                搭配购买
              </Link>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

// 9. 底部 CTA 转化
export function MatchaBottomCTA({ data }: { data: ProductData["bottomCTA"] }) {
  const primaryButton = data.buttons[0];
  const secondaryButton = data.buttons[1];

  return (
    <>
      <SectionShell>
        <div className="mx-auto max-w-7xl rounded-[2rem] border-4 border-[#2f5a32] bg-[#fffaf3] p-4 shadow-[0_26px_70px_rgba(47,90,50,0.14)] lg:p-6">
          <div className="mb-6">
            <ModuleImage src={data.moduleImage} alt={data.moduleImageAlt} />
          </div>
          <div className="grid items-center gap-5 lg:grid-cols-[1.05fr_1fr_1.1fr]">
            <div className="flex gap-4">
              <div className="relative size-28 shrink-0 overflow-hidden rounded-2xl">
                <Image src={data.image} alt={data.productName} fill sizes="7rem" className="object-cover" />
              </div>
              <div>
                <p className="text-sm text-[#675f52]">产品规格：</p>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-[#24452a]">{data.productName}</h2>
                <p className="mt-3 text-[#675f52]">抹茶清香 × 红豆沙绵密 × 流心咸蛋黄</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {data.specs.map((spec) => (
                <div key={spec.name} className="rounded-2xl border border-dashed border-[#2f5a32]/45 bg-white/55 p-4 text-center">
                  <p className="font-semibold text-[#24452a]">{spec.name}</p>
                  <p className="mt-1 text-4xl font-bold text-[#2f5a32]">{spec.price}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4 rounded-2xl border border-[#c8a96b]/80 bg-[#f7f3e9] p-5">
              <p className="font-semibold leading-8 text-[#2f5a32]">{data.urgency}</p>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <MatchaButton button={primaryButton}>
                  <ShoppingCart className="size-6" />
                </MatchaButton>
                <MatchaButton button={secondaryButton} variant="secondary">
                  <Star className="size-5" />
                </MatchaButton>
              </div>
              <p className="text-sm font-semibold text-[#24452a]">{data.riskFree}</p>
              <p className="text-sm text-[#675f52]">{data.afterSale}</p>
            </div>
          </div>
          <div className="mt-5 grid gap-3 border-t border-[#c8a96b]/80 pt-5 sm:grid-cols-2 lg:grid-cols-4">
            {data.guarantees.map((item) => (
              <div key={item} className="flex items-center justify-center gap-2 font-semibold text-[#38503a]">
                <BadgeCheck className="size-6 text-[#2f5a32]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </SectionShell>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#c8a96b]/80 bg-[#fffaf3]/95 px-4 py-3 shadow-[0_-14px_40px_rgba(47,90,50,0.12)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate font-semibold text-[#24452a]">{data.productName}</p>
            <p className="font-bold text-[#2f5a32]">
              {data.price}
              <span className="ml-1 text-sm text-[#675f52]">/ 盒起</span>
            </p>
          </div>
          <Link href={primaryButton.href} className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-[#2f5a32] px-6 font-semibold text-white transition hover:scale-[1.03]">
            立即下单
          </Link>
        </div>
      </div>
    </>
  );
}
