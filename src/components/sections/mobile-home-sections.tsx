import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Flower2, HandHeart, Home, Leaf, Phone, Sprout } from "lucide-react";

import { ReserveForm } from "@/components/sections/reserve-form";
import { BrandImage } from "@/components/ui/brand-image";
import {
  fallbackImage,
  heroHome,
  mooncakeAnnouncementBanner,
  pageMoodImages,
  productImageMap,
} from "@/lib/site-images";

const brandPoints = [
  { icon: HandHeart, label: "手作酥皮" },
  { icon: Sprout, label: "精选馅料" },
  { icon: Leaf, label: "低糖轻负担" },
  { icon: Flower2, label: "新中式花型" },
];

const mobilePastries = [
  {
    id: "egg-yolk-pastry",
    name: "蛋黄酥",
    flavor: "咸蛋黄 × 红豆沙",
    href: "/products/classic-red-bean-egg-yolk-pastry",
  },
  { id: "pineapple-pastry", name: "凤梨酥", flavor: "凤梨 × 冬瓜" },
  { id: "matcha-pastry", name: "抹茶酥", flavor: "抹茶酥皮 × 红豆沙 × 咸蛋黄" },
  { id: "peach-blossom-pastry", name: "桃花酥", flavor: "桃花造型 × 红豆沙" },
  { id: "lotus-pastry", name: "荷花酥", flavor: "荷花造型 × 枣泥馅" },
  { id: "peony-pastry", name: "牡丹花酥", flavor: "牡丹花型 × 豆沙馅" },
];

const mobileMooncakes = [
  { id: "lotus-mooncake", name: "莲蓉月饼", note: "细腻莲香" },
  { id: "red-bean-mooncake", name: "豆沙月饼", note: "经典豆沙" },
  { id: "five-nut-mooncake", name: "五仁月饼", note: "果仁丰富" },
  { id: "winter-wing-mooncake", name: "冬翅月饼", note: "风味独特" },
];

const bottomItems = [
  { icon: Home, label: "首页", href: "#home" },
  { icon: Flower2, label: "花酥", href: "#pastries" },
  { icon: Sprout, label: "试吃", href: "#trial", featured: true },
  { icon: Leaf, label: "月饼", href: "#mooncakes" },
  { icon: Phone, label: "联系", href: "#contact" },
];

export function MobileHomeSections() {
  return (
    <div className="bg-[#f7f3ec] pb-[calc(7rem+env(safe-area-inset-bottom))] md:hidden">
      <section id="home" className="relative isolate scroll-mt-20 overflow-hidden px-5 pb-5 pt-4">
        <Image
          src="/images/backgrounds/home-bg-top.webp"
          alt=""
          fill
          loading="lazy"
          sizes="90vw"
          className="absolute inset-0 -z-20 object-cover object-center opacity-90"
        />
        <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-[#f7f3ec] via-[#f7f3ec]/84 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-[#f7f3ec] via-[#f7f3ec]/72 to-transparent" />
        <div className="relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-center gap-4 py-2">
          <div className="flex flex-col gap-2 pt-1">
            <div className="flex items-start gap-2">
              <h1 className="text-[clamp(2.5rem,15vw,4.6rem)] font-semibold leading-[0.92] tracking-[0.02em] text-foreground">
                云酥坊
              </h1>
              <span className="mt-2 inline-flex rounded-[0.35rem] border border-[#b94b38]/60 px-1.5 py-1 text-[0.65rem] leading-none text-[#b94b38] [writing-mode:vertical-rl]">
                手作
              </span>
            </div>
            <p className="text-[1.55rem] font-medium leading-tight tracking-[0.14em] text-foreground">
              新中式手作酥点
            </p>
            <p className="text-base tracking-[0.12em] text-soft-gold">
              一枚花酥，一口东方酥香
            </p>
            <p className="max-w-[18rem] text-sm leading-7 text-muted-foreground">
              首批六款花酥上线，月饼系列即将官宣。
            </p>
          </div>

          <div className="flex gap-3 pt-1">
            <Link
              href="#pastries"
              className="ysj-button-primary inline-flex min-h-12 flex-1 items-center justify-center text-sm font-medium"
            >
              查看花酥系列
            </Link>
            <Link
              href="#trial"
              className="ysj-button-secondary inline-flex min-h-12 flex-1 items-center justify-center border-soft-gold/45 bg-[#fffaf4]/70 text-sm font-medium"
            >
              登记试吃
            </Link>
          </div>

          <div className="relative -mx-2">
            <span className="pointer-events-none absolute -right-4 -top-5 z-10 h-20 w-28 rounded-full bg-[#fffaf4]/32 blur-xl" />
            <BrandImage
              src={heroHome.src}
              alt={heroHome.alt}
              ratio="16:9"
              variant="plain"
              priority
              loading="eager"
              sizes="100vw"
              className="rounded-[1.65rem] shadow-[0_20px_48px_rgb(79_95_78_/_10%)]"
              imageClassName="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section aria-label="品牌卖点" className="px-5 pb-6">
        <div className="grid grid-cols-4 rounded-[1.35rem] border border-soft-gold/16 bg-[#fffaf4]/62 px-2 py-4 shadow-[0_14px_34px_rgb(79_95_78_/_5%)] backdrop-blur">
          {brandPoints.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 border-soft-gold/14 px-1 text-center [&:not(:last-child)]:border-r"
              >
                <Icon className="size-7 text-soft-gold" strokeWidth={1.5} />
                <span className="text-xs leading-5 text-foreground/82">{item.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section id="pastries" className="ysj-mobile-deferred-section scroll-mt-20 px-5 py-5">
        <div className="rounded-[1.65rem] border border-soft-gold/20 bg-[#fffaf4]/82 p-4 shadow-[0_16px_44px_rgb(79_95_78_/_6%)] backdrop-blur">
          <div className="mb-4 flex items-start justify-between gap-4">
            <h2 className="max-w-[13rem] text-[1.45rem] font-semibold leading-tight">
              花酥系列 · 六款手作酥点
            </h2>
            <Link
              href="/products"
              className="mt-1 inline-flex shrink-0 items-center gap-1 text-xs font-medium text-soft-gold"
            >
              查看全部
              <ChevronRight className="size-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {mobilePastries.map((product) => {
              const image = productImageMap[product.id] ?? fallbackImage;

              return (
                <article
                  key={product.id}
                  className="group rounded-[1.15rem] border border-soft-gold/22 bg-[#fffaf4]/92 p-2.5 text-center shadow-[0_10px_26px_rgb(79_95_78_/_5%)] transition duration-500 hover:-translate-y-0.5 hover:border-soft-gold/40 hover:shadow-[0_16px_34px_rgb(79_95_78_/_8%)]"
                >
                  <BrandImage
                    src={image.src}
                    alt={image.alt}
                    ratio="1:1"
                    variant="plain"
                    loading="lazy"
                    sizes="45vw"
                    className="rounded-[0.9rem] bg-[#f7f3ec]"
                    imageClassName="object-cover"
                  />
                  <div className="flex min-h-[7.25rem] flex-col items-center px-1 pb-1 pt-3">
                    <h3 className="text-[1.12rem] font-semibold leading-tight">{product.name}</h3>
                    <p className="mt-1.5 min-h-10 overflow-hidden text-xs leading-5 text-muted-foreground [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]">
                      {product.flavor}
                    </p>
                    <Link
                      href={product.href ?? "#trial"}
                      className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-soft-gold"
                    >
                      了解口味
                      <ChevronRight className="size-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="mooncakes" className="ysj-mobile-deferred-section scroll-mt-20 px-5 py-5">
        <div className="relative overflow-hidden rounded-[1.4rem] bg-[#4c5c47] p-5 text-[#fffaf4] shadow-[0_18px_46px_rgb(22_60_51_/_18%)]">
          <Image
            src={mooncakeAnnouncementBanner.src}
            alt=""
            fill
            loading="lazy"
            sizes="92vw"
            className="absolute inset-0 object-cover opacity-18"
          />
          <div className="pointer-events-none absolute -left-8 top-4 size-28 rounded-full border border-soft-gold/20 bg-soft-gold/10" />
          <div className="pointer-events-none absolute right-5 top-5 size-14 rounded-full bg-[#f7dca3]/18 shadow-[0_0_42px_rgb(247_220_163_/_24%)]" />
          <div className="pointer-events-none absolute -right-10 bottom-2 h-24 w-40 rounded-full border-t border-soft-gold/20" />
          <div className="relative flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <div>
                <h2 className="text-2xl font-semibold leading-tight text-[#fffaf4]">
                  中秋月饼系列 · 即将官宣
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#fffaf4]/78">
                  莲蓉、豆沙、五仁、冬翅四款传统风味，正在筹备中。
                </p>
              </div>
              <Link
                href="#trial"
                className="inline-flex min-h-10 w-fit items-center rounded-full bg-[#fffaf4]/88 px-4 text-xs font-medium text-primary shadow-[0_12px_24px_rgb(22_60_51_/_12%)]"
              >
                预约上新通知
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {mobileMooncakes.map((mooncake) => {
                const image = productImageMap[mooncake.id] ?? fallbackImage;

                return (
                  <article
                    key={mooncake.id}
                    className="rounded-[1.1rem] border border-soft-gold/15 bg-[#fffaf4]/10 p-2.5 text-center"
                  >
                    <BrandImage
                      src={image.src}
                      alt={image.alt}
                      ratio="1:1"
                      variant="plain"
                      loading="lazy"
                      sizes="42vw"
                      className="mx-auto max-w-28 rounded-full bg-[#fffaf4]/12 ring-1 ring-soft-gold/18"
                      imageClassName="object-cover"
                    />
                    <h3 className="mt-2 text-sm font-medium leading-5 text-[#fffaf4]">
                      {mooncake.name}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-[#fffaf4]/72">
                      {mooncake.note}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="trial" className="ysj-mobile-deferred-section scroll-mt-20 px-5 py-5">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-soft-gold/20 bg-[#fffaf4]/78 p-4 shadow-[0_16px_42px_rgb(79_95_78_/_6%)]">
          <Image
            src="/images/backgrounds/home-bg-mid.webp"
            alt=""
            fill
            loading="lazy"
            sizes="92vw"
            className="absolute inset-0 -z-10 object-cover opacity-80"
          />
          <div className="mb-4">
            <h2 className="text-3xl font-semibold">新品试吃登记</h2>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              云酥坊正在邀请首批用户参与新品试吃。填写信息后，优先获得花酥试吃名额及月饼上新消息。
            </p>
          </div>
          <ReserveForm variant="compact" />
        </div>
      </section>

      <section id="brand" className="ysj-mobile-deferred-section relative isolate scroll-mt-20 overflow-hidden px-5 py-9">
        <Image
          src="/images/backgrounds/home-bg-bottom.webp"
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover opacity-80"
        />
        <div className="grid gap-5">
          <div>
            <h2 className="text-3xl font-semibold">关于云酥坊</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              云酥坊专注新中式手作酥点，
              <br />
              以传统酥皮技法为基础，
              <br />
              结合花型造型与经典馅料，
              <br />
              让点心成为日常分享的一份东方甜意。
            </p>
            <Link href="/about" className="ysj-button-secondary mt-4 inline-flex px-5 py-2 text-sm">
              了解更多
            </Link>
          </div>
          <div className="-mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[pageMoodImages.aboutStory, pageMoodImages.afternoonTea, productImageMap["egg-yolk-pastry"] ?? fallbackImage].map(
              (image) => (
                <BrandImage
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  ratio="3:2"
                  variant="plain"
                  loading="lazy"
                  sizes="72vw"
                  className="w-[72vw] shrink-0 snap-center rounded-[14px] border border-soft-gold/18 bg-[#fffaf4]/66 shadow-[0_12px_30px_rgb(79_95_78_/_7%)]"
                />
              )
            )}
          </div>
        </div>
      </section>

      <section id="contact" className="ysj-mobile-deferred-section scroll-mt-20 px-5 py-8">
        <div className="rounded-[1.5rem] border border-soft-gold/20 bg-[#fffaf4]/82 p-5 shadow-[0_14px_36px_rgb(79_95_78_/_5%)]">
          <h2 className="text-2xl font-semibold">联系我们</h2>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            如需试吃登记、月饼上新通知、企业团购或礼盒定制，可以通过联系入口与云酥坊沟通。
          </p>
          <Link href="/contact" className="ysj-button-primary mt-4 inline-flex px-5 py-2 text-sm">
            联系订购
          </Link>
        </div>
      </section>

      <nav
        className="fixed inset-x-4 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-50 grid grid-cols-5 items-center rounded-full border border-soft-gold/20 bg-[#fffaf4]/92 px-3 py-2 shadow-[0_16px_42px_rgb(79_95_78_/_16%)] backdrop-blur md:hidden"
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
                  ? "mx-auto flex -translate-y-5 flex-col items-center gap-1 rounded-full bg-primary px-4 py-3 text-xs text-[#fffaf4] shadow-[0_12px_30px_rgb(76_92_71_/_28%)]"
                  : "flex min-h-12 flex-col items-center justify-center gap-1 text-xs text-foreground"
              }
            >
              <Icon className="size-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
