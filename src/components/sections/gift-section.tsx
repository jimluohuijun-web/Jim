import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gift, HandHeart, Heart, ShieldCheck } from "lucide-react";

import { giftHighlights, giftSection, type HomeGiftHighlight } from "@/data/home-sections";

const giftIcons: Record<HomeGiftHighlight["icon"], typeof Gift> = {
  gift: Gift,
  handHeart: HandHeart,
  heart: Heart,
  shield: ShieldCheck,
};

export function GiftSection() {
  return (
    <section
      id="gift-section"
      className="ysf-section ysf-gift relative overflow-hidden border-y border-[rgba(217,180,106,0.18)] bg-[#080604] py-12 scroll-mt-28 md:py-14"
    >
      <span
        id="mooncake-announcement"
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 scroll-mt-28"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_20%,rgb(240_201_120_/_14%),transparent_28rem)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#080604_0%,rgb(8_6_4_/_92%)_24%,rgb(8_6_4_/_42%)_64%,#080604_100%)]" />

      <div className="ysj-container relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.45fr_0.7fr] lg:items-center">
          <div className="ysf-section-head flex flex-col items-start gap-5">
            <span className="h-px w-16 bg-soft-gold" />
            <h2 className="ysj-title-lg text-balance text-[#F5E7C8]">{giftSection.title}</h2>
            <p className="max-w-sm text-base leading-8 text-[#D6C09A] md:text-lg">
              {giftSection.description}
            </p>
            <Link
              href={giftSection.cta.href}
              className="ysf-button-primary inline-flex min-h-11 w-fit items-center justify-center gap-2 px-7 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
            >
              {giftSection.cta.label}
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="relative min-h-[14rem] overflow-hidden md:min-h-[18rem] lg:min-h-[20rem]">
            <Image
              src={giftSection.image.src}
              alt={giftSection.image.alt}
              fill
              sizes="(min-width: 1024px) 52vw, 92vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_50%,transparent_0%,transparent_48%,rgb(8_6_4_/_72%)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(8_6_4_/_78%)_0%,transparent_20%,transparent_72%,rgb(8_6_4_/_82%)_100%)]" />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-1 xl:grid-cols-2">
            {giftHighlights.map((item) => {
              const Icon = giftIcons[item.icon];

              return (
                <div
                  key={item.id}
                  className="ysf-gift-point flex flex-col items-center justify-center gap-2 rounded-2xl border border-[rgba(217,180,106,0.28)] bg-[#1A0F0A]/42 px-4 py-4 text-center backdrop-blur-sm"
                >
                  <span className="flex size-11 items-center justify-center rounded-full border border-[rgba(217,180,106,0.34)] text-[#F0C978]">
                    <Icon className="size-5" strokeWidth={1.45} />
                  </span>
                  <span className="text-sm font-medium text-[#F5E7C8]">{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
