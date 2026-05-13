"use client";

import { motion } from "framer-motion";
import { CalendarDays, Gift, MapPin, Sparkles } from "lucide-react";

import { BrandImage } from "@/components/ui/brand-image";
import { pageMoodImages } from "@/data/images";

const details = [
  {
    icon: CalendarDays,
    label: "预计开放",
    value: "2026 年 7-8 月",
  },
  {
    icon: MapPin,
    label: "地点",
    value: "Vancouver / Richmond / Burnaby 周边优先",
  },
  {
    icon: Gift,
    label: "形式",
    value: "小批量手作、限量试吃、礼盒咨询",
  },
  {
    icon: Sparkles,
    label: "提醒",
    value: "当前为预约意向收集，并非正式下单",
  },
];

export function ReserveInfoCard() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className="ysj-card relative overflow-hidden p-7 md:p-8"
    >
      <div className="absolute -right-24 top-10 size-72 rounded-full border border-soft-gold/25" />
      <div className="absolute -bottom-20 left-6 size-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative flex flex-col gap-7">
        <div className="flex flex-col gap-4">
          <span className="h-px w-16 bg-soft-gold" />
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.28em] text-primary/80">Vancouver Preview</p>
            <h2 className="text-3xl font-semibold leading-tight text-balance">预约前的小提示</h2>
          </div>
        </div>

        <BrandImage
          src={pageMoodImages.reserveMood.src}
          alt={pageMoodImages.reserveMood.alt}
          ratio="4:5"
          variant="soft"
          sizes="(min-width: 1024px) 32vw, 88vw"
          className="rounded-[1.35rem]"
        />

        <div className="grid gap-4">
          {details.map((detail) => {
            const Icon = detail.icon;

            return (
              <div
                key={detail.label}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-border/70 pt-4"
              >
                <span className="flex size-10 items-center justify-center rounded-full border border-soft-gold/30 bg-cloud-white/55 text-primary">
                  <Icon data-icon="inline-start" />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-muted-foreground">{detail.label}</span>
                  <span className="text-base leading-7 text-foreground">{detail.value}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.aside>
  );
}
