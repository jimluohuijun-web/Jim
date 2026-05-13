"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Product, ProductTheme } from "@/data/products";

type ProductCardProps = {
  product: Product;
  index?: number;
  compact?: boolean;
};

const themeStyles: Record<
  ProductTheme,
  {
    aura: string;
    dessert: string;
    stamp: string;
    line: string;
  }
> = {
  cloud: {
    aura: "bg-mist-gray/28",
    dessert: "from-cloud-white via-[#efe3d3] to-mist-gray",
    stamp: "border-soft-gold/45 text-primary",
    line: "bg-soft-gold",
  },
  rose: {
    aura: "bg-primary/16",
    dessert: "from-cloud-white via-[#eed0cc] to-[#d7b8b2]",
    stamp: "border-primary/35 text-primary",
    line: "bg-primary",
  },
  gold: {
    aura: "bg-soft-gold/20",
    dessert: "from-cloud-white via-[#ecd9b8] to-[#c8a968]",
    stamp: "border-soft-gold/55 text-[#8d6e34]",
    line: "bg-soft-gold",
  },
  ink: {
    aura: "bg-ink/10",
    dessert: "from-cloud-white via-[#bbb2a7] to-[#4d463f]",
    stamp: "border-ink/25 text-ink",
    line: "bg-ink",
  },
};

export function ProductCard({ product, index = 0, compact = false }: ProductCardProps) {
  const theme = themeStyles[product.theme];

  return (
    <motion.article
      id={product.id}
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
              "relative mx-auto my-9 flex items-center justify-center rounded-full bg-gradient-to-br shadow-[0_28px_58px_rgb(36_32_29_/_10%)] transition-transform duration-700 group-hover:scale-[1.015]",
              theme.dessert,
              compact ? "size-40" : "size-48"
            )}
          >
            <span className="absolute inset-5 rounded-full border border-soft-gold/45" />
            <span className="absolute size-24 rounded-[34%] bg-cloud-white/58 rotate-45" />
            <span className="absolute h-24 w-2 rotate-45 rounded-full bg-primary/16" />
            <span className="absolute h-24 w-2 -rotate-45 rounded-full bg-soft-gold/22" />
          </div>

          <div className="flex flex-1 flex-col justify-between gap-7">
            <div className="flex flex-col gap-5">
              <p className="text-base leading-7 text-muted-foreground">{product.description}</p>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-soft-gold/30 bg-cloud-white/48 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 border-t border-border/70 pt-5">
              <div className="grid gap-2 text-sm text-muted-foreground">
                <span className="text-xs uppercase tracking-[0.22em] text-primary/80">Flavors</span>
                <span>{product.flavors.join(" / ")}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className={cn("h-px w-10", theme.line)} />
                  <span className="text-sm text-foreground">{product.status}</span>
                </div>
                <ArrowUpRight data-icon="inline-end" className="text-primary transition-transform duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
