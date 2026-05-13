"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { BrandImage } from "@/components/ui/brand-image";
import { fallbackImage, productImageMap } from "@/lib/site-images";
import { cn } from "@/lib/utils";
import type { PastryProduct, ProductTheme } from "@/data/products";

type ProductCardProps = {
  product: PastryProduct;
  index?: number;
  compact?: boolean;
  anchorId?: string;
};

const themeStyles: Record<
  ProductTheme,
  {
    aura: string;
    stamp: string;
    line: string;
  }
> = {
  jade: {
    aura: "bg-primary/16",
    stamp: "border-primary/35 text-primary",
    line: "bg-primary",
  },
  deepJade: {
    aura: "bg-ink/12",
    stamp: "border-ink/25 text-ink",
    line: "bg-ink",
  },
  gold: {
    aura: "bg-soft-gold/20",
    stamp: "border-soft-gold/55 text-[#8d6e34]",
    line: "bg-soft-gold",
  },
  brown: {
    aura: "bg-warm-stone/12",
    stamp: "border-warm-stone/25 text-warm-stone",
    line: "bg-warm-stone",
  },
  berry: {
    aura: "bg-[#b57b72]/18",
    stamp: "border-[#b57b72]/35 text-[#8e5149]",
    line: "bg-[#b57b72]",
  },
};

export function ProductCard({ product, index = 0, compact = false, anchorId }: ProductCardProps) {
  const theme = themeStyles[product.theme];
  const image = productImageMap[product.id] ?? fallbackImage;

  return (
    <motion.article
      id={anchorId ?? product.id}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group h-full"
    >
      <Link
        href={product.href}
        className={cn(
          "ysj-card relative flex h-full overflow-hidden p-6 transition-all duration-700 hover:border-soft-gold/70 hover:shadow-[0_30px_86px_rgb(36_32_29_/_11%)] md:p-7",
          compact ? "min-h-[32rem]" : "min-h-[34rem]"
        )}
      >
        <span className={cn("absolute -right-20 top-12 size-56 rounded-full blur-3xl", theme.aura)} />
        <span className="absolute right-8 top-8 size-28 rounded-full border border-soft-gold/25" />
        <span className="absolute -bottom-24 -left-16 size-72 rounded-full bg-white/35 blur-3xl" />

        <div className="relative flex w-full flex-col">
          <div className="flex items-start justify-between gap-5">
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                {product.englishName}
              </p>
              <h3 className="text-3xl font-semibold leading-tight text-foreground">{product.name}</h3>
            </div>
            <span
              className={cn(
                "flex size-12 shrink-0 items-center justify-center rounded-full border bg-card/45 text-sm font-semibold backdrop-blur",
                theme.stamp
              )}
            >
              酥
            </span>
          </div>

          <div
            className={cn(
              "relative my-7 transition-transform duration-700 group-hover:scale-[1.012]",
              compact ? "mx-auto w-full max-w-64" : "w-full"
            )}
          >
            <span className={cn("absolute -inset-5 rounded-full blur-3xl", theme.aura)} />
            <BrandImage
              src={image.src}
              alt={image.alt}
              ratio="1:1"
              variant="soft"
              sizes={compact ? "(min-width: 1024px) 28vw, 78vw" : "(min-width: 768px) 42vw, 88vw"}
              className={cn(
                "relative rounded-[1.5rem]",
                compact ? "shadow-[0_22px_58px_rgb(36_32_29_/_9%)]" : undefined
              )}
            />
          </div>

          <div className="flex flex-1 flex-col justify-between gap-7">
            <div className="flex flex-col gap-5">
              <p className="text-base leading-7 text-muted-foreground">{product.tagline}</p>
              <div className="grid gap-3 rounded-[1.15rem] border border-soft-gold/20 bg-cloud-white/45 p-4 text-sm leading-6 text-muted-foreground">
                <p>
                  <span className="text-xs uppercase tracking-[0.22em] text-primary/80">Flavor</span>
                  <span className="mt-1 block text-foreground/82">{product.flavor}</span>
                </p>
                <p>
                  <span className="text-xs uppercase tracking-[0.22em] text-primary/80">Occasion</span>
                  <span className="mt-1 block">{product.occasion}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5 border-t border-border/70 pt-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className={cn("h-px w-10", theme.line)} />
                  <span className="text-sm text-foreground">{product.status}</span>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  {product.ctaLabel}
                  <ArrowUpRight data-icon="inline-end" className="transition-transform duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
