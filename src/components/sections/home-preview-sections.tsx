import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bell, MessageCircle, PackageCheck, Phone, Sparkles, Truck } from "lucide-react";

import { ReserveForm } from "@/components/sections/reserve-form";
import { BrandImage } from "@/components/ui/brand-image";
import type { PastryProduct } from "@/data/products";
import { mooncakePreview, signatureProducts } from "@/data/products";
import { fallbackImage, mooncakeAnnouncementBanner, pageMoodImages, productImageMap } from "@/lib/site-images";

const aboutImages = [
  pageMoodImages.aboutStory,
  pageMoodImages.afternoonTea,
  productImageMap["egg-yolk-pastry"] ?? fallbackImage,
];

function FlowerPastryCard({ product }: { product: PastryProduct }) {
  const image = productImageMap[product.id] ?? fallbackImage;

  return (
    <article className="group relative flex min-w-[11.25rem] flex-col rounded-[1.25rem] border border-soft-gold/24 bg-[#fffaf4]/82 p-3 shadow-[0_14px_36px_rgb(79_95_78_/_5%)] transition-all duration-700 hover:-translate-y-1 hover:border-soft-gold/52 hover:shadow-[0_22px_52px_rgb(79_95_78_/_9%)] sm:min-w-0">
      <BrandImage
        src={image.src}
        alt={image.alt}
        ratio="1:1"
        variant="plain"
        sizes="(min-width: 1280px) 180px, (min-width: 1024px) 280px, 45vw"
        className="rounded-[0.95rem] bg-[#f7f0e5]"
      />
      <div className="flex flex-1 flex-col items-center gap-2 px-1 pb-1 pt-4 text-center">
        <h3 className="text-[1.35rem] font-semibold leading-tight text-foreground">{product.name}</h3>
        <p className="min-h-10 text-xs leading-5 text-muted-foreground">{product.flavor}</p>
        <p className="min-h-10 text-sm leading-5 text-foreground/78">{product.tagline}</p>
        <Link
          href={product.href}
          className="mt-auto inline-flex items-center gap-2 pt-1 text-sm font-medium text-soft-gold transition-colors duration-500 group-hover:text-primary"
        >
          {product.ctaLabel}
          <span className="flex size-7 items-center justify-center rounded-full border border-soft-gold/35">
            <ArrowRight className="size-3.5" />
          </span>
        </Link>
      </div>
    </article>
  );
}

const serviceItems = [
  { icon: PackageCheck, title: "试吃登记", text: "抢先体验新品", href: "#tasting-register" },
  { icon: Bell, title: "新品通知", text: "不错过每一次上新", href: "#tasting-register" },
  { icon: Truck, title: "同城配送", text: "新鲜送到家", href: "/contact" },
  { icon: Phone, title: "联系订购", text: "企业团购 / 礼盒定制", href: "/contact" },
];

export function HomePreviewSections() {
  return (
    <>
      <section id="flower-pastries" className="ysj-section-tight scroll-mt-28">
        <div className="ysj-container rounded-[1.75rem] border border-soft-gold/18 bg-[#fffaf4]/78 px-4 py-9 shadow-[0_20px_70px_rgb(79_95_78_/_6%)] md:px-9 md:py-11">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <span className="ysj-cloud-line w-28" />
            <h2 className="ysj-title-lg text-balance">花酥系列 · 六款手作酥点</h2>
            <p className="text-base leading-8 text-muted-foreground md:text-lg">
              以传统酥皮为底，融入花型造型与经典馅料，轻甜不腻，适合日常分享与节令赠礼。
            </p>
          </div>

          <div className="mt-8 flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3 xl:grid-cols-6">
            {signatureProducts.map((product) => (
              <FlowerPastryCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="mooncake-announcement"
        className="ysj-section-tight scroll-mt-28"
      >
        <div className="ysj-container overflow-hidden rounded-[1.85rem] border border-soft-gold/20 bg-[linear-gradient(180deg,rgb(255_250_244_/_86%),rgb(239_231_219_/_72%))] p-2 shadow-[0_30px_88px_rgb(79_95_78_/_9%)] md:p-3">
          <div className="ysj-ink-panel relative overflow-hidden rounded-[1.45rem] px-6 py-7 shadow-[0_20px_56px_rgb(76_92_71_/_15%)] md:px-10 md:py-9">
            <Image
              src={mooncakeAnnouncementBanner.src}
              alt={mooncakeAnnouncementBanner.alt}
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 1320px, 94vw"
              className="absolute inset-0 object-cover opacity-24 mix-blend-soft-light"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(76_92_71_/_96%)_0%,rgb(76_92_71_/_84%)_42%,rgb(76_92_71_/_62%)_100%)]" />
            <div className="absolute -left-10 top-5 size-56 rounded-full bg-[radial-gradient(circle,rgb(248_229_178_/_24%)_0%,rgb(248_229_178_/_12%)_48%,transparent_70%)] blur-[0.5px]" />
            <div className="absolute left-5 top-10 size-40 rounded-full border border-soft-gold/20" />
            <div className="absolute left-8 top-[3.25rem] size-[8.5rem] rounded-full border border-[#fffaf4]/10" />
            <div className="absolute left-7 top-10 h-px w-20 bg-soft-gold/70" />
            <div className="absolute -bottom-16 left-1/4 h-44 w-[34rem] rounded-[50%] border-t border-soft-gold/10" />
            <div className="absolute bottom-8 left-12 hidden h-24 w-64 opacity-35 ysj-mountain-wash md:block" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top_right,rgb(255_250_244_/_18%),transparent_22rem),radial-gradient(circle_at_62%_74%,rgb(200_169_107_/_10%),transparent_18rem)]" />
            <div className="absolute right-5 top-5 hidden h-28 w-64 rounded-full border-t border-soft-gold/24 md:block" />
            <div className="absolute right-10 bottom-5 hidden h-20 w-80 rounded-full border-b border-soft-gold/14 md:block" />
            <div className="absolute inset-x-10 top-1/2 hidden h-px bg-[linear-gradient(90deg,transparent,rgb(200_169_107_/_18%),transparent)] lg:block" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
              <div className="relative flex flex-col gap-5 rounded-[1.25rem]">
                <span className="h-px w-20 bg-soft-gold" />
                <div className="flex flex-col gap-3">
                  <h2 className="text-3xl font-semibold leading-tight text-[#fffaf4] text-balance md:text-[2.55rem]">
                    中秋月饼系列 · 即将官宣
                  </h2>
                  <p className="max-w-md text-base leading-8 text-[#fffaf4]/78 md:text-lg">
                    莲蓉、豆沙、五仁、冬翅团圆传统风味，正在筹备中。
                  </p>
                </div>
                <Link
                  href="#tasting-register"
                  className="inline-flex min-h-11 w-fit items-center justify-center rounded-full border border-soft-gold/40 bg-[#fffaf4]/12 px-5 text-sm font-medium text-[#fffaf4] transition-all duration-500 hover:bg-[#fffaf4]/20"
                >
                  预约上新通知
                </Link>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {mooncakePreview.map((mooncake) => {
                  const image = productImageMap[mooncake.id] ?? fallbackImage;

                  return (
                    <article key={mooncake.id} className="flex flex-col items-center rounded-[1.25rem] px-2 py-2 text-center text-[#fffaf4] transition-colors duration-500 hover:bg-[#fffaf4]/6">
                      <BrandImage
                        src={image.src}
                        alt={image.alt}
                        ratio="1:1"
                        variant="plain"
                        sizes="(min-width: 1280px) 128px, (min-width: 1024px) 140px, 42vw"
                        className="mb-3 w-28 rounded-full bg-[#fffaf4]/10 shadow-[0_16px_38px_rgb(36_32_29_/_18%)] sm:w-32"
                      />
                      <h3 className="text-xl font-semibold leading-tight text-[#fffaf4] drop-shadow-[0_1px_10px_rgb(36_32_29_/_16%)]">{mooncake.name}</h3>
                      <p className="mt-2 whitespace-pre-line text-sm leading-6 text-[#fffaf4]/78">
                        {mooncake.tagline.replace("，", "\n")}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          <div id="tasting-register" className="relative scroll-mt-28 overflow-hidden rounded-b-[1.55rem] px-5 py-9 md:px-12 md:py-12">
            <Image
              src="/images/backgrounds/home-bg-mid.webp"
              alt=""
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 1320px, 94vw"
              className="absolute inset-0 object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-[linear-gradient(100deg,rgb(255_250_244_/_82%),rgb(255_250_244_/_58)_56%,rgb(255_250_244_/_26)),radial-gradient(circle_at_12%_20%,rgb(200_169_107_/_13%),transparent_18rem)]" />
            <div className="absolute -left-24 bottom-0 size-72 rounded-full bg-soft-gold/10 blur-3xl" />
            <div className="absolute left-0 top-0 hidden h-full w-[38%] bg-[linear-gradient(100deg,rgb(255_250_244_/_36%),transparent_74%)] md:block" />
            <div className="absolute left-8 top-8 hidden h-[82%] w-64 rounded-[2rem] border-l border-soft-gold/12 bg-[linear-gradient(90deg,rgb(200_169_107_/_7%),transparent)] md:block" />
            <div className="absolute left-8 top-10 hidden h-[74%] w-52 bg-[repeating-linear-gradient(90deg,rgb(95_115_88_/_7%)_0_1px,transparent_1px_3.4rem)] opacity-35 md:block" />
            <div className="absolute right-0 top-0 hidden h-full w-80 bg-[linear-gradient(90deg,transparent,rgb(255_250_244_/_72))] md:block" />
            <div className="absolute bottom-2 right-28 hidden h-72 w-72 rounded-full border border-soft-gold/14 md:block" />
            <div className="absolute -bottom-28 right-12 hidden size-80 rounded-full bg-[radial-gradient(circle,rgb(200_169_107_/_10%),transparent_66%)] md:block" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className="relative flex flex-col gap-6 rounded-[1.5rem] border border-soft-gold/10 bg-[#fffaf4]/18 p-5 shadow-[0_18px_56px_rgb(79_95_78_/_4%)] md:p-6">
                <div className="absolute -left-3 top-8 h-20 w-1 rounded-full bg-soft-gold/45" />
                <div className="absolute right-8 top-6 size-12 rounded-sm border border-[#b65d4e]/18 opacity-70" />
                <div className="flex flex-col gap-4">
                  <span className="h-px w-20 bg-soft-gold" />
                  <h2 className="ysj-title-lg text-balance">新品试吃登记</h2>
                  <p className="text-base leading-8 text-muted-foreground md:text-lg">
                    云酥坊正在邀请首批用户参与新品试吃。填写信息后，我们将优先通知花酥试吃名额及月饼上新消息。
                  </p>
                </div>

                <div className="grid gap-4 pt-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  <p className="flex flex-col items-center gap-2 rounded-2xl border border-soft-gold/12 bg-[#fffaf4]/34 p-3 text-center sm:items-start sm:text-left">
                    <Sparkles className="size-8 shrink-0 stroke-[1.35] text-soft-gold" />
                    <span className="text-sm leading-6 text-muted-foreground">优先体验<br />新品尝鲜</span>
                  </p>
                  <p className="flex flex-col items-center gap-2 rounded-2xl border border-soft-gold/12 bg-[#fffaf4]/34 p-3 text-center sm:items-start sm:text-left">
                    <MessageCircle className="size-8 shrink-0 stroke-[1.35] text-soft-gold" />
                    <span className="text-sm leading-6 text-muted-foreground">专属通知<br />上新提醒</span>
                  </p>
                  <p className="flex flex-col items-center gap-2 rounded-2xl border border-soft-gold/12 bg-[#fffaf4]/34 p-3 text-center sm:items-start sm:text-left">
                    <Sparkles className="size-8 shrink-0 stroke-[1.35] text-soft-gold" />
                    <span className="text-sm leading-6 text-muted-foreground">真实反馈<br />共创美味</span>
                  </p>
                </div>
              </div>

              <ReserveForm variant="compact" />
            </div>
          </div>
        </div>
      </section>

      <section id="brand-story" className="ysj-section-tight relative isolate scroll-mt-28 overflow-hidden">
        <Image
          src="/images/backgrounds/home-bg-bottom.webp"
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover opacity-82"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(247_243_236_/_80%),rgb(255_250_244_/_52)_48%,rgb(247_243_236_/_64%))]" />
        <div className="ysj-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <span className="h-px w-16 bg-primary" />
            <div className="flex flex-col gap-5">
              <h2 className="ysj-title-lg text-balance">关于云酥坊</h2>
              <p className="text-lg leading-9 text-muted-foreground">
                云酥坊专注新中式手作酥点，以传统酥皮技法为基础，结合花型造型与经典馅料，让点心不只是节令礼物，也成为日常分享的一份东方甜意。
              </p>
            </div>
            <Link
              href="/about"
              className="ysj-button-secondary inline-flex min-h-12 w-fit items-center justify-center gap-2 px-6 text-sm font-medium"
            >
              阅读品牌故事
              <ArrowRight data-icon="inline-end" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {aboutImages.map((image, index) => (
              <BrandImage
                key={image.id}
                src={image.src}
                alt={image.alt}
                ratio={index === 1 ? "3:2" : "4:5"}
                variant="soft"
                sizes="(min-width: 1024px) 240px, 72vw"
                className={index === 1 ? "sm:mt-10" : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact-business" className="py-6 scroll-mt-28">
        <div className="ysj-container">
          <div className="grid overflow-hidden rounded-[1.25rem] border-y border-soft-gold/20 bg-cloud-white/58 shadow-[0_18px_46px_rgb(36_32_29_/_5%)] sm:grid-cols-2 lg:grid-cols-4">
            {serviceItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex items-center justify-center gap-4 border-b border-soft-gold/16 px-5 py-6 transition-colors duration-500 hover:bg-[#fffaf4]/80 sm:border-r lg:border-b-0"
                >
                  <Icon className="size-8 shrink-0 stroke-[1.35] text-soft-gold transition-colors duration-500 group-hover:text-primary" />
                  <span className="flex flex-col gap-1">
                    <span className="text-base font-medium text-foreground">{item.title}</span>
                    <span className="text-sm text-muted-foreground">{item.text}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
