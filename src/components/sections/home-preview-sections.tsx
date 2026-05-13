import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ProductCard } from "@/components/sections/product-card";
import { products } from "@/data/products";

export function HomePreviewSections() {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      <section className="ysj-section-tight border-t border-border/60 bg-background/52">
        <div className="ysj-container flex flex-col gap-10">
          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div className="flex flex-col gap-4">
              <span className="h-px w-16 bg-soft-gold" />
              <h2 className="max-w-xl text-4xl font-semibold leading-tight text-balance md:text-5xl">
                东方甜点，轻盈新作
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground md:justify-self-end md:text-lg">
              以手作酥点为起点，将东方味觉做得更轻、更柔，也更适合温哥华的日常下午茶。
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} compact />
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              href="/products"
              className="ysj-button-secondary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-medium"
            >
              查看全部产品
              <ArrowRight data-icon="inline-end" />
            </Link>
          </div>
        </div>
      </section>

      <section className="ysj-section-tight bg-[linear-gradient(180deg,rgb(255_250_242_/_46%),rgb(248_243_234_/_72%))]">
        <div className="ysj-container">
          <div className="ysj-card relative overflow-hidden p-8 md:p-12">
            <div className="absolute -right-20 top-0 size-72 rounded-full border border-soft-gold/25" />
            <div className="absolute -bottom-28 left-8 size-80 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div className="flex max-w-2xl flex-col gap-4">
                <span className="h-px w-16 bg-primary" />
                <h2 className="ysj-title-lg">温哥华预订即将开启</h2>
                <p className="text-base leading-8 text-muted-foreground md:text-lg">
                  为 2026 年 7-8 月品牌温哥华第一阶段准备提前收集预约意向。第一批小量试吃将优先通知已留下意向的朋友。
                </p>
              </div>
              <Link
                href="/reserve"
                className="ysj-button-primary inline-flex min-h-12 items-center justify-center px-6 text-sm font-medium"
              >
                预约品尝
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
