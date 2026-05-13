import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

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

export function HomePreviewSections() {
  return (
    <>
      <section id="signature-pastries" className="ysj-section-tight border-t border-border/60 bg-background/52">
        <div className="ysj-container flex flex-col gap-10">
          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div className="flex flex-col gap-4">
              <span className="h-px w-16 bg-soft-gold" />
              <p className="text-sm uppercase tracking-[0.28em] text-primary/80">
                Signature Pastries
              </p>
              <h2 className="max-w-xl text-4xl font-semibold leading-tight text-balance md:text-5xl">
                招牌酥点
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground md:justify-self-end md:text-lg">
              从蛋黄酥、牡丹花酥到凤梨酥，云酥坊以小批量手作方式，把东方酥香做得更轻盈、更适合温哥华的日常分享。
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {signatureProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} compact />
            ))}
          </div>
        </div>
      </section>

      <section id="seasonal-flavours" className="ysj-section-tight bg-[linear-gradient(180deg,rgb(255_250_242_/_54%),rgb(248_243_234_/_76%))]">
        <div className="ysj-container flex flex-col gap-10">
          <div className="grid gap-6 md:grid-cols-[1fr_0.9fr] md:items-end">
            <div className="flex flex-col gap-4">
              <span className="h-px w-16 bg-primary" />
              <p className="text-sm uppercase tracking-[0.28em] text-primary/80">
                Seasonal Flavours
              </p>
              <h2 className="ysj-title-lg text-balance">季节风味</h2>
            </div>
            <p className="text-base leading-8 text-muted-foreground md:text-lg">
              用加拿大当季风味，重新打开中式点心。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {seasonalProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                compact
                anchorId={`${product.id}-seasonal-home`}
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
                Mid-Autumn Preview
              </p>
              <h2 className="ysj-title-lg text-balance">月满云酥｜2026 中秋礼盒预告</h2>
            </div>
            <p className="text-base leading-8 text-muted-foreground md:text-lg">
              从经典莲蓉到低糖芋泥，把东方中秋做成一盒值得期待的温柔礼物。当前为预展示与兴趣收集，尚未开放正式销售。
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

      <section className="ysj-section-tight bg-[linear-gradient(180deg,rgb(255_250_242_/_46%),rgb(248_243_234_/_72%))]">
        <div className="ysj-container">
          <div className="ysj-card relative overflow-hidden p-8 md:p-12">
            <div className="absolute right-10 top-8 size-40 rounded-full border border-soft-gold/30" />
            <div className="absolute -bottom-28 -left-8 size-80 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div className="flex max-w-2xl flex-col gap-4">
                <span className="h-px w-16 bg-primary" />
                <h2 className="ysj-title-lg">温哥华试吃与礼盒提醒</h2>
                <p className="text-base leading-8 text-muted-foreground md:text-lg">
                  云酥坊正在为 2026 年 7-8 月第一阶段试吃、季节风味测试与中秋礼盒预告收集预约意向。
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
                  href="/products"
                  className="ysj-button-secondary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-medium"
                >
                  查看全部点心
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
