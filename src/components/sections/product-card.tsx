"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
          "relative flex h-full overflow-hidden rounded-[1.5rem] border border-soft-gold/24 bg-cloud-white/58 p-4 shadow-[0_18px_54px_rgb(36_32_29_/_6%)] transition-all duration-700 hover:border-soft-gold/60 hover:bg-cloud-white/78 hover:shadow-[0_24px_68px_rgb(36_32_29_/_9%)] md:p-5",
          compact ? "min-h-[29rem]" : "min-h-[30rem]"
        )}
      >
        <span className={cn("absolute -right-20 top-12 size-52 rounded-full blur-3xl", theme.aura)} />
        <span className="absolute -bottom-24 -left-16 size-64 rounded-full bg-white/35 blur-3xl" />

        <div className="relative flex w-full flex-col gap-5">
          <div
            className={cn(
              "relative transition-transform duration-700 group-hover:scale-[1.012]",
              compact ? "mx-auto w-full max-w-72" : "w-full"
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
                "relative rounded-[1.2rem]",
                compact ? "shadow-[0_18px_46px_rgb(36_32_29_/_8%)]" : undefined
              )}
            />
          </div>

          <div className="flex flex-1 flex-col justify-between gap-5 px-1 pb-1">
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between gap-5">
                <div className="flex flex-col gap-1.5">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {product.englishName}
                  </p>
                  <h3 className="text-2xl font-semibold leading-tight text-foreground">
                    {product.name}
                  </h3>
                </div>
                <span
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-full border bg-card/45 text-xs font-semibold backdrop-blur",
                    theme.stamp
                  )}
                >
                  酥
                </span>
              </div>

              <p className="text-base leading-7 text-foreground/78">{product.tagline}</p>
              <p className="rounded-2xl border border-soft-gold/20 bg-white/32 px-4 py-3 text-sm leading-6 text-muted-foreground">
                <span className="text-primary/85">核心馅料：</span>
                {product.flavor}
              </p>
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-border/60 pt-4">
              <span className={cn("h-px w-10", theme.line)} />
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                {product.ctaLabel}
                <ArrowRight data-icon="inline-end" className="transition-transform duration-700 group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
