"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Flower2, HandHeart, Leaf, Sprout } from "lucide-react";

import { BrandImage } from "@/components/ui/brand-image";
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

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-soft-gold/10">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#f7f3ec_0%,#fffaf4_43%,#f2eadf_100%)]" />
      <Image
        src="/images/backgrounds/home-bg-top.webp"
        alt=""
        fill
        loading="lazy"
        sizes="100vw"
        className="absolute inset-0 -z-10 scale-105 object-cover object-[78%_18%] opacity-[0.16] blur-[1.5px] md:opacity-[0.14]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(247_243_236_/_92%)_0%,rgb(255_250_244_/_76%)_48%,rgb(255_250_244_/_86%)_100%)]" />
      <div className="absolute left-0 top-20 -z-10 h-[34rem] w-[32rem] bg-[radial-gradient(ellipse_at_left,rgb(95_115_88_/_10%),transparent_68%)]" />
      <div className="absolute bottom-0 left-0 -z-10 h-52 w-[38rem] opacity-45 ysj-mountain-wash" />
      <div className="absolute left-8 top-28 -z-10 hidden h-28 w-36 rounded-[50%] border-l border-t border-soft-gold/35 md:block" />
      <div className="absolute right-[2vw] top-8 -z-10 hidden h-48 w-[24rem] rotate-[-8deg] border-t border-soft-gold/12 opacity-60 md:block" />
      <div className="absolute right-0 top-28 -z-10 hidden h-[28rem] w-[30rem] rounded-l-full bg-[radial-gradient(ellipse_at_center,rgb(255_250_244_/_78%),transparent_68%)] md:block" />

      <div className="ysj-container relative grid min-h-[590px] items-center gap-10 pb-14 pt-8 md:min-h-[640px] md:grid-cols-[0.82fr_1.18fr] md:gap-10 md:pb-16 md:pt-10 lg:gap-12 xl:gap-20 2xl:gap-24">
        <div className="flex flex-col gap-7 pl-0 md:pl-12">
          <motion.div
            initial={false}
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.78, ease }}
            className="flex flex-col gap-5"
          >
            <div className="flex items-center gap-3">
              <h1 className="ysj-title-display max-w-4xl text-balance">云酥坊</h1>
              <span className="hidden rounded-sm border border-[#b65d4e]/60 px-1.5 py-2 text-xs leading-none text-[#b65d4e] sm:inline-flex [writing-mode:vertical-rl]">
                手作酥点
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-medium tracking-[0.18em] text-foreground md:text-[2rem]">
                新中式手作酥点
              </p>
              <p className="text-lg tracking-[0.16em] text-soft-gold md:text-xl">
                一枚花酥，一口东方酥香
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
            首批六款花酥上线，月饼系列即将官宣。
          </motion.p>

          <motion.div
            initial={false}
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.78, delay: 0.28, ease }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="#flower-pastries"
              className="ysj-button-primary inline-flex min-h-12 items-center justify-center gap-2 px-7 text-sm font-medium"
            >
              查看花酥系列
              <ArrowRight data-icon="inline-end" />
            </Link>
            <Link
              href="#tasting-register"
              className="ysj-button-secondary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-medium"
            >
              登记试吃
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

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: [0, -10, 0], scale: 1 }}
          transition={{
            opacity: { duration: 0.9, delay: 0.25, ease },
            scale: { duration: 0.9, delay: 0.25, ease },
            y: { duration: 7.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative z-20 mx-auto w-full max-w-[48rem] rounded-[1.65rem] bg-[#fffaf4]/42 p-2 shadow-[0_30px_78px_rgb(79_95_78_/_10%)] backdrop-blur-[2px] md:mr-0 md:p-3 xl:max-w-[52rem]"
        >
          <div className="absolute -right-8 -top-12 z-10 hidden h-32 w-72 rotate-[-6deg] rounded-full bg-[radial-gradient(ellipse_at_center,rgb(255_250_244_/_86%),transparent_68%)] blur-md md:block" />
          <div className="absolute left-8 top-8 z-30 flex gap-5">
            <span className="size-3 rounded-full bg-[#efb9b0]/75" />
            <span className="mt-9 size-2.5 rounded-full bg-soft-gold/55" />
            <span className="mt-3 size-2 rounded-full bg-[#efb9b0]/70" />
          </div>
          <BrandImage
            src={heroHome.src}
            alt={heroHome.alt}
            ratio="16:9"
            variant="plain"
            priority
            sizes="(min-width: 1440px) 52rem, (min-width: 1024px) 56vw, 92vw"
            className="relative z-20 mx-auto rounded-[1.35rem]"
            imageClassName="object-cover object-center drop-shadow-[0_30px_55px_rgb(79_95_78_/_16%)]"
          />
          <div className="absolute bottom-4 right-4 hidden size-28 rounded-full bg-[radial-gradient(circle,rgb(255_250_244_/_92%),transparent_68%)] md:block" />
        </motion.div>
      </div>
    </section>
  );
}
