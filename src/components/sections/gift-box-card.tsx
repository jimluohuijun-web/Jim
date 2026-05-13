import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { BrandImage } from "@/components/ui/brand-image";
import type { GiftBoxProduct } from "@/data/products";
import { fallbackImage, productImageMap } from "@/lib/site-images";
import { cn } from "@/lib/utils";

type GiftBoxCardProps = {
  giftBox: GiftBoxProduct;
  className?: string;
};

export function GiftBoxCard({ giftBox, className }: GiftBoxCardProps) {
  const image = productImageMap[giftBox.id] ?? fallbackImage;

  return (
    <article
      id={giftBox.id}
      className={cn(
        "ysj-card grid h-full overflow-hidden p-4 md:p-5",
        giftBox.featured ? "gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-center" : "gap-5",
        className
      )}
    >
      <BrandImage
        src={image.src}
        alt={image.alt}
        ratio="4:5"
        variant={giftBox.featured ? "hero" : "soft"}
        sizes={giftBox.featured ? "(min-width: 1024px) 38vw, 88vw" : "(min-width: 1024px) 28vw, 88vw"}
        className="rounded-[1.35rem]"
      />
      <div className="flex flex-col gap-5 p-2">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
            {giftBox.englishName}
          </p>
          <h3 className="text-3xl font-semibold leading-tight text-foreground">{giftBox.name}</h3>
          {giftBox.tagline ? (
            <p className="text-base leading-7 text-primary">{giftBox.tagline}</p>
          ) : null}
        </div>

        {giftBox.description ? (
          <p className="text-sm leading-7 text-muted-foreground">{giftBox.description}</p>
        ) : null}

        <div className="rounded-[1.15rem] border border-soft-gold/25 bg-cloud-white/55 p-4">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-primary/80">Contents</p>
          <div className="flex flex-wrap gap-2">
            {giftBox.contents.map((item) => (
              <span key={item} className="rounded-full bg-white/55 px-3 py-1 text-sm text-muted-foreground">
                {item}
              </span>
            ))}
          </div>
        </div>

        <p className="text-sm leading-7 text-muted-foreground">{giftBox.occasion}</p>
        <Link
          href={giftBox.href}
          className="ysj-button-secondary inline-flex min-h-11 w-fit items-center justify-center gap-2 px-5 text-sm font-medium"
        >
          {giftBox.ctaLabel}
          <ArrowUpRight data-icon="inline-end" />
        </Link>
      </div>
    </article>
  );
}
