import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BrandImage } from "@/components/ui/brand-image";
import { brandStory } from "@/data/home-sections";

export function BrandStory() {
  return (
    <section id="brand-story" className="ysf-section ysf-story ysj-section-tight scroll-mt-28">
      <div className="ysj-container grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div className="ysf-section-head flex flex-col gap-6">
          <span className="h-px w-16 bg-soft-gold" />
          <div className="flex flex-col gap-4">
            <h2 className="ysj-title-lg text-balance">{brandStory.title}</h2>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
              {brandStory.description}
            </p>
          </div>
          <Link
            href={brandStory.cta.href}
            className="ysf-button-secondary inline-flex min-h-12 w-fit items-center justify-center gap-2 px-6 text-sm font-medium"
          >
            {brandStory.cta.label}
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <BrandImage
          src={brandStory.image.src}
          alt={brandStory.image.alt}
          ratio={brandStory.image.ratio ?? "3:2"}
          variant="soft"
          sizes="(min-width: 1024px) 48vw, 92vw"
          className="ysf-image-frame"
        />
      </div>
    </section>
  );
}
