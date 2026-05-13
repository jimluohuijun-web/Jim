"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgb(255_250_242_/_92%),transparent_30rem),radial-gradient(circle_at_78%_18%,rgb(216_210_200_/_32%),transparent_24rem)]" />
      <div className="absolute left-1/2 top-20 -z-10 size-[34rem] -translate-x-1/2 rounded-full border border-soft-gold/20" />
      <div className="ysj-container ysj-section flex flex-col gap-6">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease }}
          className="text-sm uppercase tracking-[0.32em] text-primary/80"
        >
          yunsucake · About
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease }}
          className="flex max-w-4xl flex-col gap-5"
        >
          <h1 className="ysj-title-xl text-balance">关于云酥坊</h1>
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">
            云酥坊，是一个从东方点心出发的新中式手作点心品牌。我们希望把蛋黄酥、花酥、凤梨酥与节日礼盒做得更轻盈、更温柔，也更适合温哥华的日常生活。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
