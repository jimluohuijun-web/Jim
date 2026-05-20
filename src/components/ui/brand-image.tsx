import Image from "next/image";

import type { ImageRatio } from "@/lib/site-images";
import { cn } from "@/lib/utils";

type BrandImageVariant = "card" | "hero" | "soft" | "plain";

type BrandImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
  sizes?: string;
  ratio?: ImageRatio;
  variant?: BrandImageVariant;
};

const ratioStyles: Record<ImageRatio, string> = {
  "1:1": "aspect-square",
  "3:2": "aspect-[3/2]",
  "4:3": "aspect-[4/3]",
  "4:5": "aspect-[4/5]",
  "16:9": "aspect-video",
};

const variantStyles: Record<BrandImageVariant, string> = {
  card: "border border-soft-gold/25 bg-cloud-white/60 shadow-[0_24px_70px_rgb(36_32_29_/_10%)]",
  hero: "border border-soft-gold/35 bg-cloud-white/70 shadow-[0_34px_92px_rgb(36_32_29_/_13%)]",
  soft: "border border-border/70 bg-cloud-white/55 shadow-[0_18px_52px_rgb(36_32_29_/_8%)]",
  plain: "",
};

export function BrandImage({
  src,
  alt,
  className,
  imageClassName,
  loading = "lazy",
  priority = false,
  sizes = "(min-width: 1024px) 42vw, 92vw",
  ratio = "4:5",
  variant = "card",
}: BrandImageProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-[1.75rem]",
        ratioStyles[ratio],
        variantStyles[variant],
        className
      )}
    >
      {variant !== "plain" ? (
        <>
          <span className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(135deg,rgb(255_250_242_/_18%),transparent_42%,rgb(200_169_104_/_10%))]" />
          <span className="pointer-events-none absolute inset-x-6 top-5 z-10 h-16 rounded-full bg-white/20 blur-2xl" />
        </>
      ) : null}
      <Image
        src={src}
        alt={alt}
        fill
        loading={priority ? undefined : loading}
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
      />
    </div>
  );
}
