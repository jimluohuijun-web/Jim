import Link from "next/link";
import { ArrowRight, Gift, HandHeart, Heart, ShieldCheck } from "lucide-react";

import { BrandImage } from "@/components/ui/brand-image";
import { giftHighlights, giftSection, type HomeGiftHighlight } from "@/data/home-sections";

const giftIcons: Record<HomeGiftHighlight["icon"], typeof Gift> = {
  gift: Gift,
  handHeart: HandHeart,
  heart: Heart,
  shield: ShieldCheck,
};

export function GiftSection() {
  return (
    <section id="gift-section" className="ysf-section ysf-gift ysj-section-tight scroll-mt-28">
      <span
        id="mooncake-announcement"
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 scroll-mt-28"
        aria-hidden="true"
      />
      <div className="ysf-gift-panel ysj-container overflow-hidden rounded-[1.75rem] border border-soft-gold/20 bg-cloud-white/68 p-5 shadow-[0_24px_76px_rgb(79_95_78_/_8%)] md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div className="ysf-section-head flex flex-col gap-6">
            <span className="h-px w-16 bg-soft-gold" />
            <div className="flex flex-col gap-4">
              <h2 className="ysj-title-lg text-balance">{giftSection.title}</h2>
              <p className="max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
                {giftSection.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {giftHighlights.map((item) => {
                const Icon = giftIcons[item.icon];

                return (
                  <div
                    key={item.id}
                    className="ysf-gift-highlight flex items-center gap-3 rounded-2xl border border-soft-gold/18 bg-rice-white/50 px-4 py-3"
                  >
                    <Icon className="size-5 text-soft-gold" strokeWidth={1.5} />
                    <span className="text-sm font-medium text-foreground">{item.title}</span>
                  </div>
                );
              })}
            </div>

            <Link
              href={giftSection.cta.href}
              className="ysf-button-primary inline-flex min-h-12 w-fit items-center justify-center gap-2 px-7 text-sm font-medium"
            >
              {giftSection.cta.label}
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <BrandImage
            src={giftSection.image.src}
            alt={giftSection.image.alt}
            ratio={giftSection.image.ratio ?? "4:5"}
            variant="hero"
            sizes="(min-width: 1024px) 48vw, 92vw"
            className="ysf-image-frame mx-auto w-full max-w-[34rem]"
          />
        </div>
      </div>
    </section>
  );
}
