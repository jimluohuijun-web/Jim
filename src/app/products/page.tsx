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
  seasonalProducts,
  signatureProducts,
} from "@/data/products";

export const metadata: Metadata = {
  title: "点心系列｜云酥坊 yunsucake",
  description:
    "查看云酥坊 yunsucake 招牌酥点、加拿大本地季节风味与 2026 中秋月饼礼盒预告，包括蛋黄酥、牡丹花酥、凤梨酥和中秋月饼。",
};

export default function ProductsPage() {
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

      <section id="signature-pastries" className="ysj-section-tight border-t border-border/60 bg-background/50">
        <div className="ysj-container flex flex-col gap-10">
          <div className="flex max-w-3xl flex-col gap-4">
            <span className="h-px w-16 bg-soft-gold" />
            <p className="text-sm uppercase tracking-[0.28em] text-primary/80">
              Signature Pastries｜招牌酥点
            </p>
            <h2 className="ysj-title-lg text-balance">日常分享，也适合作为礼盒主力</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {signatureProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="seasonal-flavours" className="ysj-section-tight bg-[linear-gradient(180deg,rgb(255_250_242_/_54%),rgb(248_243_234_/_78%))]">
        <div className="ysj-container flex flex-col gap-10">
          <div className="grid gap-6 md:grid-cols-[1fr_0.9fr] md:items-end">
            <div className="flex flex-col gap-4">
              <span className="h-px w-16 bg-primary" />
              <p className="text-sm uppercase tracking-[0.28em] text-primary/80">
                Seasonal Flavours｜季节风味
              </p>
              <h2 className="ysj-title-lg text-balance">用加拿大当季风味，重新打开中式点心。</h2>
            </div>
            <p className="text-base leading-8 text-muted-foreground md:text-lg">
              蓝莓、草莓、蔓越莓与枫糖核桃，会先以小批量测试与预约提醒的方式出现，逐步确认最适合温哥华的季节风味。
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {seasonalProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                compact
                anchorId={`${product.id}-seasonal`}
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
              <h2 className="ysj-title-lg text-balance">月满云酥｜2026 中秋礼盒预告</h2>
            </div>
            <p className="text-base leading-8 text-muted-foreground md:text-lg">
              从经典莲蓉到低糖芋泥，把东方中秋做成一盒值得期待的温柔礼物。这里是预展示与兴趣收集，不是正式销售页面。
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {mooncakePreview.map((mooncake) => (
              <MooncakeCard key={mooncake.id} mooncake={mooncake} />
            ))}
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
