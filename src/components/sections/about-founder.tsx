"use client";

import { motion } from "framer-motion";

export function AboutFounder() {
  return (
    <section className="ysj-section-tight border-y border-border/60 bg-background/50">
      <div className="ysj-container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="ysj-card relative overflow-hidden p-7 md:p-12"
        >
          <div className="absolute -right-24 top-8 size-80 rounded-full border border-soft-gold/25" />
          <div className="absolute -bottom-28 left-12 size-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div className="flex flex-col gap-4">
              <span className="h-px w-16 bg-soft-gold" />
              <p className="text-sm uppercase tracking-[0.28em] text-primary/80">Founder</p>
              <h2 className="ysj-title-lg text-balance">由「飞舞」发起</h2>
            </div>
            <div className="flex flex-col gap-6 text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
              <p>
                飞舞希望把东方甜点带到温哥华，但不是急着做一个普通电商甜点站。云酥记更想先从真实的品尝、朋友之间的分享和礼盒咨询开始。
              </p>
              <p>
                这个品牌还在准备第一阶段：小批量试吃、口味测试、取货安排和预约意向收集。比起快速铺开，飞舞更希望慢慢建立一个有温度、有审美，也有稳定品质的甜点品牌。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
