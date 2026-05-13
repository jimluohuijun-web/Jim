"use client";

import { motion } from "framer-motion";
import { CalendarDays, Coffee, Gift } from "lucide-react";

const eventPlans = [
  {
    title: "小批量试吃",
    time: "2026 年 7-8 月计划中",
    description: "面向提前预约的朋友，逐步开放少量试吃名额，收集口味反馈与取货区域需求。",
    status: "预约意向收集中",
    icon: CalendarDays,
  },
  {
    title: "东方下午茶分享",
    time: "筹备中",
    description: "以云酥小方、豆沙雪酥、桂花云卷等产品为基础，探索适合朋友聚会和小型下午茶的分享形式。",
    status: "形式规划中",
    icon: Coffee,
  },
  {
    title: "节日礼盒预告",
    time: "后续开放",
    description: "围绕中秋、圣诞、新年等节点，探索更适合送礼与分享的新中式甜点礼盒。",
    status: "礼盒方向测试中",
    icon: Gift,
  },
];

export function EventsPreview() {
  return (
    <section className="ysj-section-tight border-t border-border/60 bg-background/48">
      <div className="ysj-container flex flex-col gap-10">
        <div className="flex max-w-3xl flex-col gap-4">
          <span className="h-px w-16 bg-soft-gold" />
          <p className="text-sm uppercase tracking-[0.28em] text-primary/80">Preview</p>
          <h2 className="ysj-title-lg text-balance">即将开启的温哥华计划</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {eventPlans.map((event, index) => {
            const Icon = event.icon;

            return (
              <motion.article
                key={event.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="ysj-card relative min-h-[28rem] overflow-hidden p-7"
              >
                <div className="absolute -right-16 top-8 size-56 rounded-full border border-soft-gold/25" />
                <div className="absolute -bottom-24 left-0 size-64 rounded-full bg-primary/10 blur-3xl" />
                <div className="relative flex h-full flex-col justify-between gap-8">
                  <div className="flex items-start justify-between gap-5">
                    <span className="flex size-12 items-center justify-center rounded-full border border-soft-gold/35 bg-cloud-white/55 text-primary">
                      <Icon data-icon="inline-start" />
                    </span>
                    <span className="rounded-full border border-primary/25 bg-cloud-white/50 px-3 py-1 text-xs text-primary">
                      {event.status}
                    </span>
                  </div>

                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
                        {event.time}
                      </p>
                      <h3 className="text-3xl font-semibold leading-tight">{event.title}</h3>
                    </div>
                    <p className="text-base leading-7 text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
