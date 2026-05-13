"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function EventsHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgb(255_250_242_/_92%),transparent_30rem),radial-gradient(circle_at_76%_18%,rgb(216_210_200_/_34%),transparent_24rem)]" />
      <div className="absolute left-1/2 top-20 -z-10 size-[34rem] -translate-x-1/2 rounded-full border border-soft-gold/20" />
      <div className="absolute right-8 top-28 -z-10 hidden size-72 rounded-full border border-primary/10 md:block" />
      <div className="ysj-container ysj-section flex flex-col gap-6">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease }}
          className="text-sm uppercase tracking-[0.32em] text-primary/80"
        >
          Yun Su Ji · Events
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease }}
          className="flex max-w-5xl flex-col gap-5"
        >
          <h1 className="ysj-title-xl text-balance">活动 / 快闪</h1>
          <p className="max-w-4xl text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">
            云酥记正在为 2026 年 7-8 月的温哥华第一阶段亮相做准备。我们计划从小批量试吃、朋友分享、礼盒咨询和轻量快闪开始，让更多人提前认识这份轻盈的东方酥香。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
