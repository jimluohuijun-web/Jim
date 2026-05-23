"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, Handshake } from "lucide-react";

export function EventsCta() {
  return (
    <section className="ysj-section-tight bg-[#1A0F0A]">
      <div className="ysj-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="ysj-card relative overflow-hidden p-8 md:p-12"
        >
          <div className="absolute -right-16 top-0 size-72 rounded-full border border-[#D89A42]/18" />
          <div className="absolute -bottom-28 left-10 size-72 rounded-full bg-[#D89A42]/10 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex max-w-3xl flex-col gap-4">
              <span className="h-px w-16 bg-[#D89A42]" />
              <h2 className="text-balance text-4xl font-semibold leading-tight text-[#F8E6BF] md:text-5xl">
                想参与下一场云酥坊试吃活动？
              </h2>
              <p className="text-base leading-8 text-[#E8CFA4]/76 md:text-lg">
                留下试吃预约，或直接联系合作，让一场东方糕点茶席进入你的活动现场。
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Link
                href="/reserve"
                className="ysj-button-primary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-medium"
              >
                <CalendarDays data-icon="inline-start" />
                预约试吃
              </Link>
              <Link
                href="/contact"
                className="ysj-button-secondary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-medium"
              >
                <Handshake data-icon="inline-start" />
                联系合作
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
