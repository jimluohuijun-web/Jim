"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Gift } from "lucide-react";

export function ContactCta() {
  return (
    <section className="ysj-section-tight border-t border-[#D89A42]/16 bg-[linear-gradient(180deg,#120905,#1A0F0A)]">
      <div className="ysj-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[1.75rem] border border-[#D89A42]/28 bg-[#2A1710]/72 p-8 shadow-[0_26px_80px_rgb(0_0_0_/_34%)] md:p-12"
        >
          <div className="absolute -right-16 top-0 size-72 rounded-full border border-[#F2C36B]/14" />
          <div className="absolute -bottom-28 left-10 size-72 rounded-full bg-[#D89A42]/10 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex max-w-3xl flex-col gap-4">
              <span className="h-px w-16 bg-[#D89A42]" />
              <h2 className="text-balance text-4xl font-semibold leading-tight text-[#F8E6BF] md:text-5xl">
                准备定制一份体面的东方糕点礼？
              </h2>
              <p className="text-base leading-8 text-[#E8CFA4]/76 md:text-lg">
                留下预约、团购或合作需求，云酥坊会根据产品档期与交付需求为你确认下一步。
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Link
                href="/reserve"
                className="ysj-button-primary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-medium"
              >
                <CalendarDays data-icon="inline-start" />
                填写预约
                <ArrowRight data-icon="inline-end" />
              </Link>
              <Link
                href="/products"
                className="ysj-button-secondary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-medium"
              >
                <Gift data-icon="inline-start" />
                查看产品
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
