"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

export function ContactCta() {
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
          <div className="absolute -bottom-28 left-10 size-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex max-w-3xl flex-col gap-4">
              <span className="h-px w-16 bg-primary" />
              <h2 className="ysj-title-lg text-balance">先认识，再慢慢靠近</h2>
              <p className="text-base leading-8 text-muted-foreground md:text-lg">
                云酥记正在从一个小而认真的起点出发。感谢你愿意提前关注这份东方酥香，我们会把每一次试吃、每一份反馈都当作品牌生长的一部分。
              </p>
            </div>
            <Link
              href="/reserve"
              className="ysj-button-primary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-medium"
            >
              <CalendarDays data-icon="inline-start" />
              留下预约意向
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
