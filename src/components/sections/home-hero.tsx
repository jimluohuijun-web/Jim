"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";

import { BrandImage } from "@/components/ui/brand-image";
import { heroImages } from "@/data/images";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_24%,rgb(255_250_242_/_95%),transparent_28rem),radial-gradient(circle_at_78%_20%,rgb(216_210_200_/_38%),transparent_24rem),linear-gradient(140deg,#f8f3ea_0%,#fffaf2_48%,#eee5d7_100%)]" />
      <div className="absolute left-1/2 top-16 -z-10 size-[36rem] -translate-x-1/2 rounded-full border border-soft-gold/20 opacity-55" />
      <div className="absolute right-8 top-28 -z-10 hidden h-72 w-72 rounded-full border border-primary/10 md:block" />

      <div className="ysj-container grid min-h-[calc(100svh-4rem)] items-center gap-12 py-16 md:grid-cols-[1.03fr_0.97fr] md:py-20">
        <div className="flex flex-col gap-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.78, ease }}
            className="flex flex-col gap-6"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-primary/80">
              Yun Su Ji · Vancouver
            </p>
            <h1 className="ysj-title-xl max-w-4xl text-balance">云上酥香，一口东方</h1>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.78, delay: 0.16, ease }}
            className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl md:leading-9"
          >
            新中式手作甜点品牌「云酥记」，将东方点心的细腻、云雾般的轻盈口感，与温哥华的生活美学融合在一起。
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.78, delay: 0.28, ease }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/reserve"
              className="ysj-button-primary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-medium"
            >
              <CalendarDays data-icon="inline-start" />
              预约品尝
            </Link>
            <Link
              href="/products"
              className="ysj-button-secondary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-medium"
            >
              查看产品
              <ArrowRight data-icon="inline-end" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: [0, -10, 0], scale: 1 }}
          transition={{
            opacity: { duration: 0.9, delay: 0.25, ease },
            scale: { duration: 0.9, delay: 0.25, ease },
            y: { duration: 7.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative mx-auto w-full max-w-[27rem]"
        >
          <div className="ysj-card relative overflow-hidden p-4 md:p-5">
            <div className="absolute inset-x-8 top-8 h-20 rounded-full bg-white/35 blur-2xl" />
            <div className="absolute -right-14 top-20 size-56 rounded-full border border-soft-gold/35" />
            <div className="absolute -bottom-24 -left-16 size-72 rounded-full bg-mist-gray/28 blur-3xl" />

            <div className="relative">
              <BrandImage
                src={heroImages.primary.src}
                alt={heroImages.primary.alt}
                ratio="4:5"
                variant="plain"
                priority
                sizes="(min-width: 768px) 42vw, 92vw"
                className="rounded-[1.45rem]"
              />

              <div className="absolute left-5 top-5 rounded-full border border-soft-gold/35 bg-cloud-white/65 px-4 py-2 text-xs uppercase tracking-[0.24em] text-muted-foreground backdrop-blur-md">
                Handmade
              </div>
              <div className="absolute right-5 top-5 flex size-14 items-center justify-center rounded-full border border-primary/25 bg-cloud-white/62 text-base font-semibold text-primary backdrop-blur-md">
                酥
              </div>
              <div className="absolute inset-x-5 bottom-5 rounded-[1.25rem] border border-soft-gold/20 bg-cloud-white/72 p-4 backdrop-blur-md">
                <div className="grid grid-cols-[1fr_auto] items-end gap-5">
                  <p className="text-sm leading-6 text-muted-foreground">
                    云雾般轻盈的口感，配以克制的东方甜香。
                  </p>
                  <span className="text-xs uppercase tracking-[0.24em] text-primary">VAN</span>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-3 -left-3 hidden rounded-full border border-soft-gold/30 bg-cloud-white/70 p-5 backdrop-blur md:block">
              <div className="flex size-12 items-center justify-center rounded-full border border-primary/25 text-sm font-semibold text-primary">
                  酥
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
