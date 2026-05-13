"use client";

import { motion } from "framer-motion";

const steps = [
  {
    phase: "阶段 1",
    title: "提前预约意向收集",
    description: "在正式开放前，先收集对产品、口味和取货区域的兴趣。",
  },
  {
    phase: "阶段 2",
    title: "小批量试吃",
    description: "根据预约人数与产品测试情况，逐步开放第一批试吃名额。",
  },
  {
    phase: "阶段 3",
    title: "礼盒与活动合作",
    description: "未来探索节日礼盒、下午茶分享和小型快闪合作。",
  },
];

export function AboutTimeline() {
  return (
    <section className="ysj-section-tight">
      <div className="ysj-container flex flex-col gap-10">
        <div className="flex max-w-3xl flex-col gap-4">
          <span className="h-px w-16 bg-soft-gold" />
          <p className="text-sm uppercase tracking-[0.28em] text-primary/80">Vancouver Plan</p>
          <h2 className="ysj-title-lg text-balance">温哥华第一阶段计划</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.68,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="ysj-card relative overflow-hidden p-7"
            >
              <div className="absolute right-6 top-6 flex size-14 items-center justify-center rounded-full border border-soft-gold/30 text-sm text-primary">
                {index + 1}
              </div>
              <div className="relative flex min-h-64 flex-col justify-between gap-8">
                <div className="flex flex-col gap-4">
                  <p className="text-sm uppercase tracking-[0.22em] text-primary/80">{step.phase}</p>
                  <h3 className="max-w-[15rem] text-3xl font-semibold leading-tight">{step.title}</h3>
                </div>
                <p className="text-base leading-7 text-muted-foreground">{step.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
