"use client";

import { motion } from "framer-motion";
import { CalendarDays, Gift, MapPin, Sparkles } from "lucide-react";

import { BrandImage } from "@/components/ui/brand-image";
import { pageMoodImages } from "@/data/images";

const details = [
  {
    icon: CalendarDays,
    label: "提交后确认",
    value: "工作人员会联系确认试吃、礼盒或团购需求",
  },
  {
    icon: MapPin,
    label: "偏好备注",
    value: "可备注口味、低糖、过敏信息与取货区域",
  },
  {
    icon: Gift,
    label: "企业团购",
    value: "请填写数量、预算、交付时间与礼盒需求",
  },
  {
    icon: Sparkles,
    label: "节令档期",
    value: "中秋期间建议提前预约，以便安排生产批次",
  },
];

export function ReserveInfoCard() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[1.75rem] border border-[#D89A42]/28 bg-[linear-gradient(145deg,rgb(42_23_16_/_76%),rgb(18_9_5_/_88%))] p-7 shadow-[0_26px_80px_rgb(0_0_0_/_34%)] md:p-8"
    >
      <div className="absolute -right-24 top-10 size-72 rounded-full border border-[#F2C36B]/14" />
      <div className="absolute -bottom-20 left-6 size-64 rounded-full bg-[#D89A42]/10 blur-3xl" />
      <div className="relative flex flex-col gap-7">
        <div className="flex flex-col gap-4">
          <span className="h-px w-16 bg-[#D89A42]" />
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.28em] text-[#D89A42]">
              Reservation Notes
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-balance text-[#F8E6BF]">
              预约说明
            </h2>
          </div>
        </div>

        <BrandImage
          src={pageMoodImages.reserveMood.src}
          alt={pageMoodImages.reserveMood.alt}
          ratio="4:5"
          variant="plain"
          sizes="(min-width: 1024px) 32vw, 88vw"
          className="rounded-[1.35rem] border border-[#D89A42]/24 shadow-[0_20px_58px_rgb(0_0_0_/_28%)]"
        />

        <div className="grid gap-4">
          {details.map((detail) => {
            const Icon = detail.icon;

            return (
              <div
                key={detail.label}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-[#D89A42]/18 pt-4"
              >
                <span className="flex size-10 items-center justify-center rounded-full border border-[#F2C36B]/28 bg-[#1A0F0A]/72 text-[#F2C36B]">
                  <Icon data-icon="inline-start" />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-[#D89A42]">{detail.label}</span>
                  <span className="text-base leading-7 text-[#E8CFA4]/82">{detail.value}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.aside>
  );
}
