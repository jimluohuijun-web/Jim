import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { BrandImage } from "@/components/ui/brand-image";
import { productSeries } from "@/data/home-sections";

export function ProductSeries() {
  return (
    <section id="product-series" className="ysf-section ysf-section-alt ysj-section-tight scroll-mt-28">
      <span
        id="flower-pastries"
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 scroll-mt-28"
        aria-hidden="true"
      />
      <div className="ysj-container">
        <div className="ysf-section-head mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-soft-gold">Series</p>
            <h2 className="ysj-title-lg text-balance">产品系列 · 更多美味</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              人气单品之外，首页保留更多系列入口，方便从口味、礼赠和上新提醒进入后续转化。
            </p>
          </div>
          <Link
            href="/products"
            className="ysf-button-secondary inline-flex min-h-11 w-fit items-center justify-center gap-2 px-5 text-sm font-medium"
          >
            查看全部
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {productSeries.map((product) => (
            <article
              key={product.id}
              className="ysf-series-card group flex min-h-full flex-col rounded-[1.35rem] border border-soft-gold/20 bg-cloud-white/62 p-3 shadow-[0_14px_42px_rgb(79_95_78_/_5%)] transition-all duration-500 hover:-translate-y-1 hover:border-soft-gold/42"
            >
              {product.image ? (
                <BrandImage
                  src={product.image.src}
                  alt={product.image.alt}
                  ratio={product.image.ratio ?? "1:1"}
                  variant="plain"
                  sizes="(min-width: 1280px) 22vw, (min-width: 768px) 45vw, 92vw"
                  className="rounded-[1rem] bg-[#f7f3ec]"
                  imageClassName="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              ) : (
                <div className="grid aspect-square place-items-center rounded-[1rem] border border-dashed border-soft-gold/35 bg-rice-white/62 text-center">
                  <div className="flex flex-col items-center gap-3 px-5">
                    <Sparkles className="size-8 text-soft-gold" strokeWidth={1.4} />
                    <p className="text-sm leading-6 text-muted-foreground">更多产品敬请期待</p>
                  </div>
                </div>
              )}

              <div className="flex flex-1 flex-col gap-3 px-2 pb-2 pt-4">
                <h3 className="text-xl font-semibold leading-tight">{product.name}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{product.description}</p>
                <Link
                  href={product.href}
                  className="ysf-text-link mt-auto inline-flex items-center gap-2 text-sm font-medium transition-colors duration-500"
                >
                  {product.ctaLabel}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
