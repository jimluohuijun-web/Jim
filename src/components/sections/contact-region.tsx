"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const notes = ["当前没有固定门店", "当前为准备期", "后续会根据预约情况逐步开放"];

export function ContactRegion() {
  return (
    <section className="ysj-section-tight">
      <div className="ysj-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="ysj-card relative overflow-hidden p-8 md:p-12"
        >
          <div className="absolute -right-16 top-0 size-72 rounded-full border border-soft-gold/25" />
          <div className="absolute -bottom-24 left-8 size-72 rounded-full bg-mist-gray/30 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="flex flex-col gap-4">
              <span className="h-px w-16 bg-soft-gold" />
              <p className="text-sm uppercase tracking-[0.28em] text-primary/80">Region</p>
              <h2 className="ysj-title-lg text-balance">温哥华第一阶段区域</h2>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-base leading-8 text-muted-foreground md:text-lg">
                云酥记第一阶段将优先关注 Vancouver、Richmond、Burnaby 及周边区域。实际试吃、取货或活动安排，会根据预约人数、产品测试和可执行条件逐步确认。
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {notes.map((note) => (
                  <div
                    key={note}
                    className="flex items-center gap-3 rounded-2xl border border-soft-gold/25 bg-cloud-white/45 p-4"
                  >
                    <MapPin data-icon="inline-start" className="text-primary" />
                    <span className="text-sm leading-6 text-foreground">{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
