import Link from "next/link";

import { BrandImage } from "@/components/ui/brand-image";
import type { MooncakeProduct } from "@/data/products";
import { fallbackImage, productImageMap } from "@/lib/site-images";

type MooncakeCardProps = {
  mooncake: MooncakeProduct;
  tone?: "light" | "dark";
};

export function MooncakeCard({ mooncake, tone = "light" }: MooncakeCardProps) {
  const image = productImageMap[mooncake.id] ?? fallbackImage;
  const isDark = tone === "dark";

  return (
    <article
      id={mooncake.id}
      className={
        isDark
          ? "h-full overflow-hidden rounded-[1.25rem] border border-[#fffaf4]/16 bg-[#fffaf4]/10 p-3 backdrop-blur"
          : "h-full overflow-hidden rounded-[1.5rem] border border-soft-gold/24 bg-cloud-white/58 p-4 shadow-[0_18px_54px_rgb(36_32_29_/_6%)]"
      }
    >
      <Link href={mooncake.href} className="group block h-full">
        <BrandImage
          src={image.src}
          alt={image.alt}
          ratio="1:1"
          variant={isDark ? "plain" : "soft"}
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 42vw, 88vw"
          className={isDark ? "rounded-[1rem]" : "rounded-[1.15rem]"}
          imageClassName="transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="flex flex-col gap-3 p-2 pt-5">
          <div className="flex flex-col gap-1">
            <p className={isDark ? "text-xs uppercase tracking-[0.2em] text-[#fffaf4]/54" : "text-xs uppercase tracking-[0.24em] text-muted-foreground"}>
              {mooncake.englishName}
            </p>
            <h3 className={isDark ? "text-xl font-semibold leading-tight text-[#fffaf4]" : "text-2xl font-semibold leading-tight text-foreground"}>{mooncake.name}</h3>
          </div>
          <p className={isDark ? "text-sm leading-6 text-[#fffaf4]/70" : "text-sm leading-7 text-muted-foreground"}>{mooncake.tagline}</p>
          <span className={isDark ? "mt-auto w-fit rounded-full border border-soft-gold/35 bg-[#fffaf4]/10 px-3 py-1 text-xs text-[#fffaf4]/86" : "mt-auto w-fit rounded-full border border-soft-gold/35 bg-cloud-white/60 px-3 py-1 text-xs text-primary"}>
            {mooncake.ctaLabel ?? mooncake.status}
          </span>
        </div>
      </Link>
    </article>
  );
}
