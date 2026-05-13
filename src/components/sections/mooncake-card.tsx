import { BrandImage } from "@/components/ui/brand-image";
import type { MooncakeProduct } from "@/data/products";
import { fallbackImage, productImageMap } from "@/lib/site-images";

type MooncakeCardProps = {
  mooncake: MooncakeProduct;
};

export function MooncakeCard({ mooncake }: MooncakeCardProps) {
  const image = productImageMap[mooncake.id] ?? fallbackImage;

  return (
    <article id={mooncake.id} className="ysj-card h-full overflow-hidden p-4">
      <BrandImage
        src={image.src}
        alt={image.alt}
        ratio="1:1"
        variant="soft"
        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 42vw, 88vw"
        className="rounded-[1.25rem]"
      />
      <div className="flex flex-col gap-3 p-2 pt-5">
        <div className="flex flex-col gap-1">
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
            {mooncake.englishName}
          </p>
          <h3 className="text-2xl font-semibold leading-tight text-foreground">{mooncake.name}</h3>
        </div>
        <p className="text-sm leading-7 text-muted-foreground">{mooncake.tagline}</p>
        <span className="mt-auto w-fit rounded-full border border-soft-gold/35 bg-cloud-white/60 px-3 py-1 text-xs text-primary">
          {mooncake.status}
        </span>
      </div>
    </article>
  );
}
