import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BrandImage } from "@/components/ui/brand-image";
import { productSeries } from "@/data/home-sections";

export function ProductSeries() {
  const seriesProducts = productSeries.filter((product) => Boolean(product.image));

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
              甄选多款东方酥点与礼盒之作，满足日常分享、节令送礼与企业定制需求。
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
          {seriesProducts.map((product) => {
            const image = product.image;

            if (!image) {
              return null;
            }

            return (
              <article
                key={product.id}
                className="ysf-series-card group flex min-h-full flex-col overflow-hidden rounded-[1.05rem] border border-soft-gold/24 bg-[linear-gradient(180deg,rgb(42_23_16_/_88%),rgb(18_10_7_/_96%))] p-2.5 shadow-[0_18px_48px_rgb(0_0_0_/_24%)] transition-all duration-500 hover:-translate-y-1 hover:border-soft-gold/58 hover:shadow-[0_22px_62px_rgb(216_154_66_/_12%)]"
              >
                <BrandImage
                  src={image.src}
                  alt={image.alt}
                  ratio={image.ratio ?? "4:3"}
                  variant="plain"
                  sizes="(min-width: 1280px) 22vw, (min-width: 768px) 45vw, 92vw"
                  className="rounded-[0.85rem] border border-soft-gold/18 bg-[#120a06]"
                  imageClassName="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                <div className="flex flex-1 flex-col gap-3 px-3 pb-3 pt-4">
                  <h3 className="text-xl font-semibold leading-tight text-foreground">{product.name}</h3>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
