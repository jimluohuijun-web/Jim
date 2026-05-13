"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgb(255_250_242_/_92%),transparent_30rem),radial-gradient(circle_at_78%_16%,rgb(216_210_200_/_34%),transparent_24rem)]" />
      <div className="absolute left-1/2 top-20 -z-10 size-[34rem] -translate-x-1/2 rounded-full border border-soft-gold/20" />
      <div className="ysj-container ysj-section flex flex-col gap-6">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease }}
          className="text-sm uppercase tracking-[0.32em] text-primary/80"
        >
          Yun Su Ji · Contact
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease }}
          className="flex max-w-5xl flex-col gap-5"
        >
          <h1 className="ysj-title-xl text-balance">联系我们</h1>
          <p className="max-w-4xl text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">
            无论你想提前预约试吃、了解产品、咨询礼盒，或讨论小型活动合作，都可以从这里找到适合的入口。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
