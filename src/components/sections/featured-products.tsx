import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BrandImage } from "@/components/ui/brand-image";
import { featuredProducts } from "@/data/home-sections";

export function FeaturedProducts() {
  return (
    <section id="featured-products" className="ysf-section ysj-section-tight scroll-mt-28">
      <div className="ysj-container">
        <div className="ysf-section-head mb-8 flex flex-col gap-3 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-soft-gold">Featured</p>
          <h2 className="ysj-title-lg text-balance">人气精选 · 匠心之作</h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground">
            从经典酥香到节令风味，先把云酥坊最适合尝鲜与分享的单品呈现出来。
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className="ysf-product-card group flex min-h-full flex-col overflow-hidden rounded-[1.5rem] border border-soft-gold/22 bg-cloud-white/72 p-3 shadow-[0_18px_52px_rgb(79_95_78_/_6%)] transition-all duration-500 hover:-translate-y-1 hover:border-soft-gold/45 hover:shadow-[0_24px_70px_rgb(79_95_78_/_10%)]"
            >
              {product.image ? (
                <BrandImage
                  src={product.image.src}
                  alt={product.image.alt}
                  ratio={product.image.ratio ?? "1:1"}
                  variant="plain"
                  sizes="(min-width: 1024px) 30vw, 92vw"
                  className="rounded-[1.15rem] bg-[#f7f3ec]"
                  imageClassName="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              ) : (
                <div className="grid aspect-square place-items-center rounded-[1.15rem] border border-soft-gold/20 bg-[#f7f3ec]/80 text-center text-sm text-muted-foreground">
                  图片筹备中
                </div>
              )}

              <div className="flex flex-1 flex-col gap-4 px-3 pb-3 pt-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-semibold leading-tight">{product.name}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{product.description}</p>
                  </div>
                  {product.price ? (
                    <p className="shrink-0 pt-1 text-lg font-semibold text-soft-gold">{product.price}</p>
                  ) : null}
                </div>

                <Link
                  href={product.href}
                  className="ysf-button-secondary mt-auto inline-flex min-h-11 items-center justify-center gap-2 px-5 text-sm font-medium"
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
