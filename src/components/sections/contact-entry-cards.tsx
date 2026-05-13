"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, CalendarDays, Gift, Sparkles } from "lucide-react";

const entries = [
  {
    title: "预约试吃",
    description: "想第一时间参与温哥华小批量试吃，可以先留下预约意向。",
    button: "前往预约",
    href: "/reserve",
    icon: CalendarDays,
  },
  {
    title: "产品咨询",
    description: "想了解云酥小方、豆沙雪酥、桂花云卷等产品，可以先查看产品系列。",
    button: "查看产品",
    href: "/products",
    icon: Gift,
  },
  {
    title: "活动 / 快闪合作",
    description: "适合小型活动、下午茶分享、礼盒咨询或轻量快闪合作意向。",
    button: "查看活动计划",
    href: "/events",
    icon: Sparkles,
  },
  {
    title: "品牌故事",
    description: "想了解云酥记的发起、理念和温哥华计划，可以先阅读品牌故事。",
    button: "关于云酥记",
    href: "/about",
    icon: BookOpen,
  },
];

export function ContactEntryCards() {
  return (
    <section className="ysj-section-tight border-t border-border/60 bg-background/48">
      <div className="ysj-container flex flex-col gap-10">
        <div className="flex max-w-3xl flex-col gap-4">
          <span className="h-px w-16 bg-soft-gold" />
          <p className="text-sm uppercase tracking-[0.28em] text-primary/80">Entry</p>
          <h2 className="ysj-title-lg text-balance">你可以这样找到云酥记</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {entries.map((entry, index) => {
            const Icon = entry.icon;

            return (
              <motion.article
                key={entry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.68,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="ysj-card relative overflow-hidden p-7"
              >
                <div className="absolute -right-16 top-8 size-56 rounded-full border border-soft-gold/25" />
                <div className="relative flex min-h-64 flex-col justify-between gap-8">
                  <div className="grid gap-5 sm:grid-cols-[3rem_1fr]">
                    <span className="flex size-12 items-center justify-center rounded-full border border-soft-gold/35 bg-cloud-white/55 text-primary">
                      <Icon data-icon="inline-start" />
                    </span>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-3xl font-semibold leading-tight">{entry.title}</h3>
                      <p className="text-base leading-7 text-muted-foreground">{entry.description}</p>
                    </div>
                  </div>
                  <Link
                    href={entry.href}
                    className="ysj-button-secondary inline-flex min-h-11 w-fit items-center justify-center gap-2 px-5 text-sm font-medium"
                  >
                    {entry.button}
                    <ArrowRight data-icon="inline-end" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
