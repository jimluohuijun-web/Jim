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
  tone?: "light" | "dark";
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

export function ProductCard({
  product,
  index = 0,
  compact = false,
  anchorId,
  tone = "light",
}: ProductCardProps) {
  const theme = themeStyles[product.theme];
  const image = productImageMap[product.id] ?? fallbackImage;
  const isDark = tone === "dark";

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
          "relative flex h-full overflow-hidden rounded-[1.5rem] border p-4 transition-all duration-700 md:p-5",
          isDark
            ? "border-[#D89A42]/24 bg-[#2A1710]/60 shadow-[0_22px_60px_rgb(0_0_0_/_24%)] hover:border-[#F2C36B]/48 hover:bg-[#3A2116]/66 hover:shadow-[0_28px_76px_rgb(0_0_0_/_32%)]"
            : "border-soft-gold/24 bg-cloud-white/58 shadow-[0_18px_54px_rgb(36_32_29_/_6%)] hover:border-soft-gold/60 hover:bg-cloud-white/78 hover:shadow-[0_24px_68px_rgb(36_32_29_/_9%)]",
          compact ? "min-h-[29rem]" : "min-h-[30rem]"
        )}
      >
        <span className={cn("absolute -right-20 top-12 size-52 rounded-full blur-3xl", theme.aura)} />
        <span
          className={cn(
            "absolute -bottom-24 -left-16 size-64 rounded-full blur-3xl",
            isDark ? "bg-[#D89A42]/8" : "bg-white/35"
          )}
        />

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
              variant={isDark ? "plain" : "soft"}
              sizes={compact ? "(min-width: 1024px) 28vw, 78vw" : "(min-width: 768px) 42vw, 88vw"}
              className={cn(
                "relative rounded-[1.2rem]",
                isDark ? "border border-[#D89A42]/24 shadow-[0_20px_58px_rgb(0_0_0_/_28%)]" : undefined,
                compact ? "shadow-[0_18px_46px_rgb(36_32_29_/_8%)]" : undefined
              )}
            />
          </div>

          <div className="flex flex-1 flex-col justify-between gap-5 px-1 pb-1">
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between gap-5">
                <div className="flex flex-col gap-1.5">
                  <p
                    className={cn(
                      "text-xs uppercase tracking-[0.22em]",
                      isDark ? "text-[#E8CFA4]/88" : "text-muted-foreground"
                    )}
                  >
                    {product.englishName}
                  </p>
                  <h3
                    className={cn(
                      "text-2xl font-semibold leading-tight",
                      isDark ? "text-[#F8E6BF]" : "text-foreground"
                    )}
                  >
                    {product.name}
                  </h3>
                </div>
                <span
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-full border bg-card/45 text-xs font-semibold backdrop-blur",
                    isDark ? "border-[#F2C36B]/30 bg-[#1A0F0A]/60 text-[#F2C36B]" : theme.stamp
                  )}
                >
                  酥
                </span>
              </div>

              <p className={cn("text-base leading-7", isDark ? "text-[#E8CFA4]/88" : "text-foreground/78")}>
                {product.tagline}
              </p>
              <p
                className={cn(
                  "rounded-2xl border px-4 py-3 text-sm leading-6",
                  isDark
                    ? "border-[#D89A42]/20 bg-[#1A0F0A]/42 text-[#E8CFA4]/84"
                    : "border-soft-gold/20 bg-white/32 text-muted-foreground"
                )}
              >
                <span className={isDark ? "text-[#F2C36B]" : "text-primary/85"}>核心馅料：</span>
                {product.flavor}
              </p>
            </div>

            <div
              className={cn(
                "flex items-center justify-between gap-4 border-t pt-4",
                isDark ? "border-[#D89A42]/18" : "border-border/60"
              )}
            >
              <span className={cn("h-px w-10", isDark ? "bg-[#D89A42]" : theme.line)} />
              <span
                className={cn(
                  "inline-flex items-center gap-2 text-sm font-medium",
                  isDark ? "text-[#F2C36B]" : "text-primary"
                )}
              >
                {isDark ? "查看详情" : product.ctaLabel}
                <ArrowRight data-icon="inline-end" className="transition-transform duration-700 group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
