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
  Lock,
  PackageCheck,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Truck,
  Wheat,
  Layers3,
} from "lucide-react";

import type { eggYolkProductData } from "@/data/egg-yolk-detail";

type ProductData = typeof eggYolkProductData;
type IconKey = "egg" | "layers" | "scale" | "hand" | "beans" | "wheat" | "truck" | "shield" | "gift" | "lock";

type ButtonData = {
  label: string;
  href: string;
  variant?: string;
};

const iconMap = {
  egg: Egg,
  layers: Layers3,
  scale: Scale,
  hand: HandHeart,
  beans: Bean,
  wheat: Wheat,
  truck: Truck,
  shield: ShieldCheck,
  gift: Gift,
  lock: Lock,
} satisfies Record<IconKey, typeof Egg>;

function SectionShell({
  children,
  tone = "cream",
}: {
  children: React.ReactNode;
  tone?: "white" | "cream" | "soft";
}) {
  const bg = tone === "white" ? "bg-[#fffaf3]" : tone === "soft" ? "bg-[#f3eadc]" : "bg-[#fbf1e4]";

  return <section className={`${bg} px-4 py-12 sm:px-6 lg:px-8`}>{children}</section>;
}

function RedButton({ button, children }: { button: ButtonData; children?: React.ReactNode }) {
  return (
    <Link
      href={button.href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#b8241c] px-7 text-base font-semibold text-white shadow-[0_16px_36px_rgba(184,36,28,0.2)] transition duration-200 hover:scale-[1.03] hover:bg-[#9f1f18]"
    >
      {children}
      {button.label}
      <ArrowRight className="size-4" />
    </Link>
  );
}

function OutlineButton({ button, children }: { button: ButtonData; children?: React.ReactNode }) {
  return (
    <Link
      href={button.href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#b8241c]/60 bg-white/70 px-7 text-base font-semibold text-[#9f1f18] transition duration-200 hover:scale-[1.03] hover:bg-[#fff2ee]"
    >
      {children}
      {button.label}
      <ArrowRight className="size-4" />
    </Link>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? <p className="text-sm tracking-[0.18em] text-[#8b7449]">{eyebrow}</p> : null}
      <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#3f3026] sm:text-4xl lg:text-[2.55rem]">
        {title}
      </h2>
      <span className="mx-auto mt-5 block h-1 w-12 rounded-full bg-[#b8241c]" />
    </div>
  );
}

// 1. Hero 模块：JSON 数据入口 productData.hero
export function HeroSection({ data }: { data: ProductData["hero"] }) {
  const primaryButton = data.buttons[0];
  const secondaryButton = data.buttons[1];

  return (
    <section className="relative isolate overflow-hidden bg-[#fbf5eb] px-4 py-12 text-[#4f3a2c] sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(200,169,107,0.18),transparent_28%),linear-gradient(135deg,#fffaf2_0%,#f7efe3_48%,#fff8ee_100%)]" />
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d8c6a4]/70 bg-[#fffbf4]/78 p-4 shadow-[0_28px_90px_rgba(79,58,44,0.10)] backdrop-blur sm:p-6 lg:p-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <div className="rounded-[1.6rem] border border-dashed border-[#c8a96b]/45 bg-[#fffaf2]/72 p-6 sm:p-8 lg:p-10">
            <p className="mb-4 inline-flex rounded-full border border-[#b73b2f]/20 bg-[#fff2ee] px-4 py-2 text-sm font-medium tracking-[0.14em] text-[#a92f25]">
              {data.eyebrow}
            </p>
            <h1 className="text-balance font-serif text-3xl font-semibold leading-tight text-[#3f3026] sm:text-4xl lg:text-[2.65rem]">
              {data.name}
            </h1>
            <p className="mt-5 text-balance text-3xl font-semibold leading-tight text-[#b8241c] sm:text-4xl lg:text-[2.9rem]">
              {data.slogan}
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6a6258]">{data.subtitle}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {data.tags.map((tag) => (
                <div key={tag} className="rounded-2xl border border-[#d8c6a4]/80 bg-[#fffaf3] p-4 text-center shadow-[0_14px_36px_rgba(79,58,44,0.06)]">
                  <Sparkles className="mx-auto mb-3 size-8 text-[#b8241c]" />
                  <p className="font-semibold text-[#4f3a2c]">{tag}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <RedButton button={primaryButton}>
                <ShoppingCart className="size-5" />
              </RedButton>
              <OutlineButton button={secondaryButton}>
                <Gift className="size-5" />
              </OutlineButton>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[1.6rem] border border-[#d8c6a4]/70 bg-[#f7eadb] shadow-[0_26px_70px_rgba(79,58,44,0.14)] sm:min-h-[560px] lg:min-h-[640px]">
            <Image src={data.image} alt={data.imageAlt} fill priority sizes="(min-width: 1280px) 46vw, (min-width: 1024px) 48vw, 92vw" className="object-cover object-center" />
          </div>
        </div>
      </div>
    </section>
  );
}

// 2. 核心卖点模块：JSON 数据入口 productData.coreFeatures
export function CoreFeatures({ data }: { data: ProductData["coreFeatures"] }) {
  return (
    <SectionShell>
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d8c6a4]/70 bg-[#fffaf3]/82 px-4 py-10 shadow-[0_24px_80px_rgba(79,58,44,0.08)] sm:px-6 lg:px-8 lg:py-14">
        <SectionTitle eyebrow={data.intro} title={data.title} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <article key={feature.title} className="group flex min-h-[23rem] flex-col items-center rounded-[1.35rem] border border-[#d8c6a4]/85 bg-[#fffaf2]/88 px-5 py-8 text-center shadow-[0_14px_42px_rgba(79,58,44,0.06)] transition hover:-translate-y-1">
                <div className="flex size-28 items-center justify-center rounded-full border border-[#c8a96b]/55 bg-[#fffdf7] text-[#9b5f2c]">
                  <Icon className="size-14 stroke-[1.35]" />
                </div>
                <span className="mt-5 inline-flex size-9 items-center justify-center rounded-full bg-[#b8241c] text-sm font-semibold text-white">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 font-serif text-2xl font-semibold leading-snug text-[#9f1f18]">{feature.title}</h3>
                <p className="mt-4 text-base leading-8 text-[#6a6258]">{feature.text}</p>
                <span className="mt-auto block h-1 w-10 rounded-full bg-[#b8241c]/85" />
              </article>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}

// 3. 精选原料模块：JSON 数据入口 productData.ingredients
export function Ingredients({ data }: { data: ProductData["ingredients"] }) {
  return (
    <SectionShell tone="white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d8c6a4]/70 bg-[#fffaf3] p-5 shadow-[0_22px_70px_rgba(79,58,44,0.07)] lg:p-8">
        <SectionTitle title={data.title} />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {data.items.map((item, index) => (
            <article key={item.name} className="overflow-hidden rounded-[1.3rem] border border-[#d8c6a4]/80 bg-[#fffaf2] shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image src={item.image} alt={item.name} fill sizes="(min-width: 1280px) 22vw, (min-width: 768px) 45vw, 92vw" className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-2xl font-semibold text-[#9f1f18]"><span className="mr-2 inline-flex size-8 items-center justify-center rounded-full bg-[#b8241c] text-sm text-white">{index + 1}</span>{item.name}</h3>
                <p className="mt-4 leading-8 text-[#6a6258]">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-3 rounded-2xl border border-[#d8c6a4]/75 bg-white/55 p-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.trust.map((item) => <div key={item} className="flex items-center justify-center gap-2 font-semibold text-[#6a4b34]"><ShieldCheck className="size-5 text-[#b8241c]" />{item}</div>)}
        </div>
      </div>
    </SectionShell>
  );
}

// 4. 层次口感模块：JSON 数据入口 productData.layeredTaste
export function LayeredTaste({ data }: { data: ProductData["layeredTaste"] }) {
  return (
    <SectionShell>
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d8c6a4]/70 bg-[#fffaf3] p-5 shadow-[0_22px_70px_rgba(79,58,44,0.07)] lg:p-8">
        <SectionTitle title={data.title} />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] border border-[#d8c6a4]/80 bg-[#f6eadc] lg:min-h-[560px]">
            <Image src={data.image} alt={data.imageAlt} fill sizes="(min-width: 1024px) 46vw, 92vw" className="object-cover" />
          </div>
          <div className="flex flex-col gap-4">
            {data.layers.map((layer, index) => {
              const Icon = iconMap[layer.icon];
              return (
                <article key={layer.title} className="grid grid-cols-[4.5rem_1fr] gap-4 rounded-2xl border border-[#d8c6a4]/80 bg-[#fffaf2] p-5 shadow-sm">
                  <div className="flex size-16 items-center justify-center rounded-full border border-[#c8a96b]/60 text-[#9f1f18]"><Icon className="size-8" /></div>
                  <div><h3 className="font-serif text-2xl font-semibold text-[#3f3026]"><span className="mr-2 text-[#b8241c]">{index + 1}</span>{layer.title}</h3><p className="mt-2 leading-8 text-[#6a6258]">{layer.text}</p></div>
                </article>
              );
            })}
            <div className="rounded-2xl border border-[#d8c6a4]/80 bg-[#fff4e6] p-5 font-semibold leading-8 text-[#9f1f18]">{data.summary}</div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

// 5. 匠心工艺模块：JSON 数据入口 productData.crafting
export function Crafting({ data }: { data: ProductData["crafting"] }) {
  return (
    <SectionShell tone="white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d8c6a4]/70 bg-[#fffaf3] p-5 lg:p-8">
        <SectionTitle title={data.title} />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {data.steps.map((step, index) => (
            <article key={step.title} className="rounded-[1.35rem] border border-dashed border-[#d8c6a4] bg-[#fffaf2] p-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#f4eadc]"><Image src={step.image} alt={step.title} fill sizes="(min-width: 1280px) 22vw, (min-width: 768px) 45vw, 92vw" className="object-cover" /></div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-[#9f1f18]"><span className="mr-2 inline-flex size-9 items-center justify-center rounded-full bg-[#b8241c] text-sm text-white">{String(index + 1).padStart(2, "0")}</span>{step.title}</h3>
              <p className="mt-4 leading-8 text-[#6a6258]">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

// 6. 产品参数模块：JSON 数据入口 productData.productSpecs
export function ProductSpecs({ data }: { data: ProductData["productSpecs"] }) {
  return (
    <SectionShell tone="soft">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d8c6a4]/70 bg-[#fffaf3] p-5 lg:p-8">
        <SectionTitle title={data.title} />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.35fr_0.9fr]">
          <div className="overflow-hidden rounded-2xl border border-[#d8c6a4]/80">
            {data.rows.map(([label, value]) => (
              <div key={label} className="grid gap-3 border-b border-[#eadbc0] bg-white/45 p-4 last:border-b-0 sm:grid-cols-[9rem_1fr]"><div className="font-semibold text-[#9f1f18]">{label}</div><div className="leading-8 text-[#5f4c3d]">{value}</div></div>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {data.badges.map((badge) => <div key={badge} className="rounded-2xl border border-[#d8c6a4]/80 bg-white/55 p-6 text-center font-serif text-2xl font-semibold text-[#4f3a2c]"><PackageCheck className="mx-auto mb-3 size-9 text-[#9f1f18]" />{badge}</div>)}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

// 7. 礼盒场景模块：JSON 数据入口 productData.giftBox
export function GiftBox({ data }: { data: ProductData["giftBox"] }) {
  return (
    <SectionShell>
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d8c6a4]/70 bg-[#fffaf3] p-5 lg:p-8">
        <SectionTitle title={data.title} />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {data.scenes.map((scene) => (
            <article key={scene.title} className="rounded-[1.4rem] border border-dashed border-[#d8c6a4] bg-[#fffaf2] p-5">
              <h3 className="font-serif text-3xl font-semibold text-[#4f3a2c]">{scene.title}</h3>
              <p className="mt-3 leading-8 text-[#6a6258]">{scene.text}</p>
              <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-2xl"><Image src={scene.image} alt={scene.title} fill sizes="(min-width: 1024px) 45vw, 92vw" className="object-cover" /></div>
            </article>
          ))}
        </div>
        <div className="mt-6 grid gap-3 rounded-2xl border border-[#d8c6a4]/75 p-4 sm:grid-cols-2 lg:grid-cols-4">{data.points.map((point) => <div key={point} className="flex justify-center gap-2 font-semibold text-[#6a4b34]"><Gift className="size-5 text-[#9f1f18]" />{point}</div>)}</div>
      </div>
    </SectionShell>
  );
}

// 8. 同系列搭配模块：JSON 数据入口 productData.crossSell
export function CrossSell({ data }: { data: ProductData["crossSell"] }) {
  return (
    <SectionShell tone="white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d8c6a4]/70 bg-[#fffaf3] p-5 lg:p-8">
        <SectionTitle title={data.title} />
        <div className="mt-10 flex gap-5 overflow-x-auto pb-3 [scrollbar-width:thin]">
          {data.products.map((product) => (
            <article key={product.name} className="min-w-[17rem] rounded-[1.3rem] border border-[#d8c6a4]/80 bg-[#fffaf2] p-4 shadow-sm sm:min-w-[20rem]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl"><Image src={product.image} alt={product.name} fill sizes="20rem" className="object-cover" /></div>
              <h3 className="mt-5 font-serif text-3xl font-semibold text-[#3f3026]">{product.name}</h3>
              <p className="mt-2 text-[#6a6258]">{product.flavor}</p>
              <Link href="/reserve" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-[#b8241c]/50 px-5 font-semibold text-[#9f1f18] transition hover:scale-[1.03] hover:bg-[#fff2ee]">搭配购买</Link>
            </article>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-[#d8c6a4]/75 bg-white/55 p-5 font-semibold leading-8 text-[#6a4b34]"><ShoppingCart className="mr-2 inline size-5 text-[#9f1f18]" />{data.note}</div>
      </div>
    </SectionShell>
  );
}

// 9. 底部 CTA 转化模块：JSON 数据入口 productData.bottomCTA
export function BottomCTA({ data }: { data: ProductData["bottomCTA"] }) {
  return (
    <>
      <SectionShell>
        <div className="mx-auto max-w-7xl rounded-[2rem] border-4 border-[#b8241c] bg-[#fffaf3] p-4 shadow-[0_26px_70px_rgba(184,36,28,0.14)] lg:p-6">
          <div className="grid items-center gap-5 lg:grid-cols-[1.1fr_0.9fr_1fr]">
            <div className="flex gap-4"><div className="relative size-28 shrink-0 overflow-hidden rounded-2xl"><Image src={data.image} alt={data.productName} fill sizes="7rem" className="object-cover" /></div><div><p className="text-sm text-[#6a6258]">产品规格：</p><h2 className="mt-2 font-serif text-2xl font-semibold text-[#3f3026]">{data.productName}</h2><p className="mt-3 text-[#6a6258]">精美礼盒包装，送礼自用两相宜</p></div></div>
            <div className="rounded-2xl border border-dashed border-[#b8241c]/45 p-4"><p className="font-semibold text-[#4f3a2c]">爆款售价：</p><p className="mt-1 text-5xl font-bold text-[#b8241c]">{data.price}<span className="ml-2 text-lg text-[#4f3a2c]">/ 盒</span></p><p className="mt-3 font-semibold text-[#9f1f18]">{data.urgency}</p></div>
            <RedButton button={data.button}><ShoppingCart className="size-6" /></RedButton>
          </div>
          <div className="mt-5 grid gap-3 border-t border-[#d8c6a4]/80 pt-5 sm:grid-cols-2 lg:grid-cols-4">{data.guarantees.map((item) => <div key={item} className="flex items-center justify-center gap-2 font-semibold text-[#5f4c3d]"><BadgeCheck className="size-6 text-[#9f1f18]" />{item}</div>)}</div>
        </div>
      </SectionShell>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#d8c6a4]/80 bg-[#fffaf3]/95 px-4 py-3 shadow-[0_-14px_40px_rgba(79,58,44,0.12)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <div className="min-w-0"><p className="truncate font-semibold text-[#3f3026]">{data.productName}</p><p className="font-bold text-[#b8241c]">{data.price}<span className="ml-1 text-sm text-[#6a6258]">/ 盒</span></p></div>
          <Link href={data.button.href} className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-[#b8241c] px-6 font-semibold text-white transition hover:scale-[1.03]">{data.button.label}</Link>
        </div>
      </div>
    </>
  );
}
