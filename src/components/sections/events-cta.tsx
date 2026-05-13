"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";

export function EventsCta() {
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
          <div className="absolute -bottom-28 left-10 size-72 rounded-full bg-mist-gray/30 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex max-w-3xl flex-col gap-4">
              <span className="h-px w-16 bg-primary" />
              <h2 className="ysj-title-lg text-balance">想参与第一阶段试吃或合作？</h2>
              <p className="text-base leading-8 text-muted-foreground md:text-lg">
                如果你在温哥华，或者正在筹备小型活动、下午茶分享、礼盒需求，可以先留下预约或合作意向。云酥记会在试吃与合作形式开放时优先联系你。
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Link
                href="/reserve"
                className="ysj-button-primary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-medium"
              >
                <CalendarDays data-icon="inline-start" />
                留下预约意向
              </Link>
              <Link
                href="/products"
                className="ysj-button-secondary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-medium"
              >
                查看产品系列
                <ArrowRight data-icon="inline-end" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
