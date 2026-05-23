import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Gift } from "lucide-react";

import { GiftBoxCard } from "@/components/sections/gift-box-card";
import { MooncakeCard } from "@/components/sections/mooncake-card";
import { ProductCard } from "@/components/sections/product-card";
import {
  featuredMidAutumnGift,
  giftBoxes,
  mooncakePreview,
  signatureProducts,
} from "@/data/products";

export const metadata: Metadata = {
  title: "点心系列｜云酥坊 yunsucake",
  description:
    "查看云酥坊 yunsucake 招牌酥点、加拿大本地季节风味与 2026 中秋月饼礼盒预告，包括蛋黄酥、牡丹花酥、凤梨酥和中秋月饼。",
};

export default function ProductsPage() {
  const pastryProducts = signatureProducts.slice(0, 3);
  const flowerPastryProducts = signatureProducts.slice(3);
  const featuredMooncake = mooncakePreview.find((product) => product.id === "egg-yolk-lotus-mooncake");

  return (
    <>
      <section className="ysj-container ysj-section flex flex-col gap-6">
        <p className="text-sm uppercase tracking-[0.32em] text-primary/80">
          yunsucake · Pastry Collection
        </p>
        <div className="flex max-w-4xl flex-col gap-5">
          <h1 className="ysj-title-xl text-balance">点心系列</h1>
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">
            云酥坊以新中式手作酥点为起点，把蛋黄酥、牡丹花酥、凤梨酥与加拿大本地季节风味，做成适合温哥华分享与送礼的温柔点心。
          </p>
        </div>
      </section>

      <section id="featured-recommendations" className="ysj-section-tight border-t border-border/60 bg-background/50">
        <div className="ysj-container flex flex-col gap-10">
          <div className="flex max-w-3xl flex-col gap-4">
            <span className="h-px w-16 bg-soft-gold" />
            <p className="text-sm uppercase tracking-[0.28em] text-primary/80">
              Featured Picks｜爆款推荐
            </p>
            <h2 className="ysj-title-lg text-balance">先从最适合尝鲜与送礼的几款开始</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pastryProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
            {featuredMooncake ? (
              <MooncakeCard mooncake={featuredMooncake} />
            ) : null}
          </div>
        </div>
      </section>

      <section id="signature-pastries" className="ysj-section-tight bg-[linear-gradient(180deg,rgb(255_250_242_/_54%),rgb(248_243_234_/_78%))]">
        <div className="ysj-container flex flex-col gap-10">
          <div className="grid gap-6 md:grid-cols-[1fr_0.9fr] md:items-end">
            <div className="flex flex-col gap-4">
              <span className="h-px w-16 bg-primary" />
              <p className="text-sm uppercase tracking-[0.28em] text-primary/80">
                Pastry Series｜酥点系列
              </p>
              <h2 className="ysj-title-lg text-balance">经典酥点，适合日常分享与伴手礼</h2>
            </div>
            <p className="text-base leading-8 text-muted-foreground md:text-lg">
              蛋黄酥、凤梨酥与抹茶酥是云酥坊的基础主力，覆盖咸甜经典、果香伴手礼与茶点偏好。
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {pastryProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="flower-pastries" className="ysj-section-tight border-y border-border/60 bg-background/55">
        <div className="ysj-container flex flex-col gap-10">
          <div className="grid gap-6 md:grid-cols-[1fr_0.9fr] md:items-end">
            <div className="flex flex-col gap-4">
              <span className="h-px w-16 bg-soft-gold" />
              <p className="text-sm uppercase tracking-[0.28em] text-primary/80">
                Flower Pastries｜花酥系列
              </p>
              <h2 className="ysj-title-lg text-balance">花型开酥，适合礼盒与茶席</h2>
            </div>
            <p className="text-base leading-8 text-muted-foreground md:text-lg">
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
              />
            ))}
          </div>
        </div>
      </section>

      <section id="mid-autumn-preview" className="ysj-section-tight border-y border-border/60 bg-background/55">
        <div className="ysj-container flex flex-col gap-10">
          <div className="grid gap-6 md:grid-cols-[1fr_0.92fr] md:items-end">
            <div className="flex flex-col gap-4">
              <span className="h-px w-16 bg-soft-gold" />
              <p className="text-sm uppercase tracking-[0.28em] text-primary/80">
                Mid-Autumn Preview｜中秋礼盒预告
              </p>
              <h2 className="ysj-title-lg text-balance">中秋月饼 · 五款风味预告</h2>
            </div>
            <p className="text-base leading-8 text-muted-foreground md:text-lg">
              从蛋黄莲蓉、豆沙、五仁、冬翅到苏式鲜肉，把东方中秋做成一组值得期待的温柔礼物。
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {mooncakePreview.map((mooncake) => (
              <MooncakeCard key={mooncake.id} mooncake={mooncake} />
            ))}
          </div>
        </div>
      </section>

      <section id="gift-corporate" className="ysj-section-tight border-b border-border/60 bg-[linear-gradient(180deg,rgb(255_250_242_/_48%),rgb(248_243_234_/_78%))]">
        <div className="ysj-container flex flex-col gap-10">
          <div className="grid gap-6 md:grid-cols-[1fr_0.92fr] md:items-end">
            <div className="flex flex-col gap-4">
              <span className="h-px w-16 bg-primary" />
              <p className="text-sm uppercase tracking-[0.28em] text-primary/80">
                Gift & Corporate｜礼盒 / 企业团购
              </p>
              <h2 className="ysj-title-lg text-balance">节庆礼盒与企业心意入口</h2>
            </div>
            <p className="text-base leading-8 text-muted-foreground md:text-lg">
              礼盒目前为预展示与意向收集，个人预订进入预约页，企业礼盒咨询进入联系页。
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {giftBoxes.map((giftBox) => (
              <GiftBoxCard key={giftBox.id} giftBox={giftBox} />
            ))}
          </div>

          <GiftBoxCard giftBox={featuredMidAutumnGift} />
        </div>
      </section>

      <section className="ysj-section-tight">
        <div className="ysj-container">
          <div className="ysj-card relative overflow-hidden p-8 md:p-12">
            <div className="absolute right-10 top-8 size-40 rounded-full border border-soft-gold/30" />
            <div className="absolute -bottom-28 -left-8 size-80 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div className="flex max-w-2xl flex-col gap-4">
                <span className="h-px w-16 bg-soft-gold" />
                <h2 className="ysj-title-lg">想加入试吃或礼盒提醒？</h2>
                <p className="text-base leading-8 text-muted-foreground md:text-lg">
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
    </>
  );
}
