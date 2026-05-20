"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Flower2, HandHeart, Leaf, Sprout } from "lucide-react";

import { homeHeroContent } from "@/data/home-sections";
import { heroHome } from "@/lib/site-images";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const highlights = [
  { icon: HandHeart, label: "手作酥皮" },
  { icon: Sprout, label: "精选馅料" },
  { icon: Leaf, label: "低糖轻负担" },
  { icon: Flower2, label: "新中式花型" },
];

const [heroTitleFirstLine, heroTitleSecondLine] = homeHeroContent.title.split("，");

export function HomeHero() {
  return (
    <section className="ysf-hero relative isolate min-h-[680px] overflow-hidden border-b border-soft-gold/10 bg-[#080604] md:min-h-[720px] xl:min-h-[760px]">
      <Image
        src={heroHome.src}
        alt={heroHome.alt}
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[66%_center] md:object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#080604_0%,rgb(8_6_4_/_94%)_24%,rgb(8_6_4_/_58%)_39%,rgb(8_6_4_/_5%)_52%,transparent_66%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(8_6_4_/_16%)_0%,transparent_70%,rgb(8_6_4_/_34%)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(8_6_4_/_82%)_0%,rgb(8_6_4_/_62%)_46%,rgb(8_6_4_/_92%)_100%)] md:hidden" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_52%,rgb(242_195_107_/_18%),transparent_42rem)]" />
      <div className="absolute left-8 top-28 -z-10 hidden h-28 w-36 rounded-[50%] border-l border-t border-soft-gold/25 md:block" />

      <div className="ysj-container relative z-10 flex min-h-[680px] items-center pb-16 pt-14 md:min-h-[720px] md:pb-20 md:pt-16 xl:min-h-[760px]">
        <div className="flex w-full max-w-[620px] flex-col gap-7 md:pl-12 lg:w-[48%]">
          <motion.div
            initial={false}
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.78, ease }}
            className="flex flex-col gap-5"
          >
            <div className="flex items-center gap-3">
              <h1 className="ysj-title-display max-w-4xl">
                <span className="block sm:whitespace-nowrap">
                  {heroTitleFirstLine}
                  {heroTitleSecondLine ? "，" : ""}
                </span>
                {heroTitleSecondLine ? (
                  <span className="block sm:whitespace-nowrap">{heroTitleSecondLine}</span>
                ) : null}
              </h1>
              <span className="ysf-seal hidden rounded-sm border px-1.5 py-2 text-xs leading-none sm:inline-flex [writing-mode:vertical-rl]">
                手作酥点
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-medium tracking-[0.18em] text-foreground md:text-[2rem]">
                云酥坊 YUN SU FANG
              </p>
              <p className="max-w-xl text-base leading-8 tracking-[0.08em] text-soft-gold md:text-xl md:tracking-[0.16em]">
                {homeHeroContent.subtitle}
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={false}
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.78, delay: 0.16, ease }}
            className="max-w-xl text-base leading-8 text-muted-foreground md:text-lg"
          >
            蛋黄酥、荷花酥、桃花酥与中式礼盒正在小批量筹备中，把东方酥香做成日常分享与节令礼赠的心意。
          </motion.p>

          <motion.div
            initial={false}
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.78, delay: 0.28, ease }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href={homeHeroContent.primaryCta.href}
              className="ysf-button-primary inline-flex min-h-12 items-center justify-center gap-2 px-7 text-sm font-medium"
            >
              {homeHeroContent.primaryCta.label}
              <ArrowRight data-icon="inline-end" />
            </Link>
            <Link
              href={homeHeroContent.secondaryCta.href}
              className="ysf-button-secondary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-medium"
            >
              {homeHeroContent.secondaryCta.label}
            </Link>
          </motion.div>

          <motion.div
            initial={false}
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.78, delay: 0.38, ease }}
            className="grid max-w-xl grid-cols-2 gap-4 pt-4 sm:grid-cols-4"
          >
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 border-r border-soft-gold/22 last:border-r-0"
                >
                  <Icon className="size-7 stroke-[1.35] text-soft-gold" />
                  <span className="text-sm text-foreground/78">{item.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
