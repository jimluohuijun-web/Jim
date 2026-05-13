import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

import { ProductCard } from "@/components/sections/product-card";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "产品系列｜云酥记 Yun Su Ji",
  description:
    "查看云酥记第一阶段产品系列，包括云酥小方、豆沙雪酥、桂花云卷、墨芝麻酥等新中式手作甜点预告。",
};

export default function ProductsPage() {
  return (
    <>
      <section className="ysj-container ysj-section flex flex-col gap-6">
        <p className="text-sm uppercase tracking-[0.32em] text-primary/80">Yun Su Ji · Collection</p>
        <div className="flex max-w-4xl flex-col gap-5">
          <h1 className="ysj-title-xl text-balance">产品系列</h1>
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">
            从轻盈酥点到东方茶香，云酥记以小批量手作方式，为温哥华带来更温柔的新中式甜点体验。
          </p>
        </div>
      </section>

      <section className="ysj-section-tight border-t border-border/60 bg-background/50">
        <div className="ysj-container grid gap-5 md:grid-cols-2">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      <section className="ysj-section-tight">
        <div className="ysj-container">
          <div className="ysj-card relative overflow-hidden p-8 md:p-12">
            <div className="absolute right-10 top-8 size-40 rounded-full border border-soft-gold/30" />
            <div className="absolute -bottom-28 -left-8 size-80 rounded-full bg-mist-gray/30 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div className="flex max-w-2xl flex-col gap-4">
                <span className="h-px w-16 bg-soft-gold" />
                <h2 className="ysj-title-lg">想第一时间品尝？</h2>
                <p className="text-base leading-8 text-muted-foreground md:text-lg">
                  云酥记计划于 2026 年 7-8 月在温哥华开启预约意向收集和小批量试吃。你可以先留下意向，我们会在开放时优先通知。
                </p>
              </div>
              <Link
                href="/reserve"
                className="ysj-button-primary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-medium"
              >
                <CalendarDays data-icon="inline-start" />
                前往预约
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
