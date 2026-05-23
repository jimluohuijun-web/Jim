"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, Gift, Sparkles } from "lucide-react";

import { BrandImage } from "@/components/ui/brand-image";
import { pageMoodImages } from "@/data/images";

const ease = [0.22, 1, 0.36, 1] as const;
const heroTags = ["东方糕点", "低糖轻负担", "手作匠心", "节令礼赠"];

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_14%,rgb(242_195_107_/_16%),transparent_28rem),radial-gradient(circle_at_84%_18%,rgb(116_67_32_/_30%),transparent_26rem),linear-gradient(180deg,#1A0F0A,#120905_62%,#1A0F0A)]" />
      <div className="pointer-events-none absolute left-[-10rem] top-20 size-[26rem] rounded-full border border-[#D89A42]/12" />
      <div className="pointer-events-none absolute right-[-7rem] top-10 size-[32rem] rounded-full border border-[#F2C36B]/10" />
      <div className="ysj-container ysj-section">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease }}
          className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center"
        >
          <div className="flex max-w-5xl flex-col gap-8">
            <div className="flex flex-wrap gap-2">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#D89A42]/34 bg-[#2A1710]/72 px-4 py-2 text-xs font-medium tracking-[0.18em] text-[#F2C36B]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-balance text-5xl font-semibold leading-[1.05] text-[#F8E6BF] md:text-7xl">
                关于云酥坊
              </h1>
              <p className="max-w-4xl text-lg leading-8 text-[#E8CFA4]/82 md:text-xl md:leading-9">
                以东方点心美学，重塑中式糕点的当代礼赠体验。
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="ysj-button-primary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-semibold"
              >
                <Gift className="size-4" />
                查看产品系列
              </Link>
              <Link
                href="/reserve"
                className="ysj-button-secondary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-semibold"
              >
                <CalendarDays className="size-4" />
                预约试吃
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border border-[#D89A42]/12" />
            <BrandImage
              src={pageMoodImages.giftboxConcept.src}
              alt={pageMoodImages.giftboxConcept.alt}
              ratio="4:5"
              variant="plain"
              priority
              sizes="(min-width: 1024px) 34vw, 90vw"
              className="rounded-[1.75rem] border border-[#D89A42]/32 bg-[#2A1710]/72 shadow-[0_34px_96px_rgb(0_0_0_/_42%)]"
            />
            <div className="absolute -bottom-5 left-5 right-5 rounded-[1.25rem] border border-[#D89A42]/28 bg-[#1A0F0A]/82 p-4 shadow-[0_18px_48px_rgb(0_0_0_/_32%)] backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full border border-[#F2C36B]/30 text-[#F2C36B]">
                  <Sparkles className="size-5" />
                </span>
                <p className="text-sm leading-6 text-[#E8CFA4]/82">
                  从日常酥点到中秋礼盒，把体面心意做进每一枚东方糕点。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
