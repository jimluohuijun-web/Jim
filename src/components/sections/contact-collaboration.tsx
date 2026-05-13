"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Handshake } from "lucide-react";

export function ContactCollaboration() {
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
          <div className="absolute -right-20 top-4 size-72 rounded-full border border-soft-gold/25" />
          <div className="absolute -bottom-28 left-10 size-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex max-w-3xl flex-col gap-5">
              <span className="h-px w-16 bg-primary" />
              <div className="flex flex-col gap-4">
                <p className="text-sm uppercase tracking-[0.28em] text-primary/80">Collaboration</p>
                <h2 className="ysj-title-lg text-balance">合作咨询</h2>
              </div>
              <p className="text-base leading-8 text-muted-foreground md:text-lg">
                如果你正在筹备小型聚会、品牌活动、下午茶分享、节日礼盒或轻量快闪合作，可以先通过预约意向页留下备注。请在备注里写明活动时间、人数、区域和大致需求。
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <span className="flex size-16 items-center justify-center rounded-full border border-soft-gold/35 bg-cloud-white/55 text-primary">
                <Handshake data-icon="inline-start" />
              </span>
              <Link
                href="/reserve"
                className="ysj-button-primary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-medium"
              >
                提交合作意向
                <ArrowRight data-icon="inline-end" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
