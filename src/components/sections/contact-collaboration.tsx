"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Handshake } from "lucide-react";

import { BrandImage } from "@/components/ui/brand-image";
import { pageMoodImages } from "@/data/images";

const processSteps = ["提交需求", "确认预算与数量", "定制礼盒方案", "安排生产与交付"];

export function ContactCollaboration() {
  return (
    <section className="ysj-section-tight bg-[#1A0F0A]">
      <div className="ysj-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[1.75rem] border border-[#D89A42]/28 bg-[linear-gradient(145deg,rgb(42_23_16_/_76%),rgb(18_9_5_/_88%))] p-8 shadow-[0_26px_80px_rgb(0_0_0_/_34%)] md:p-12"
        >
          <div className="absolute -right-20 top-4 size-72 rounded-full border border-[#F2C36B]/14" />
          <div className="absolute -bottom-28 left-10 size-72 rounded-full bg-[#D89A42]/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[0.92fr_0.46fr] lg:items-center">
            <div className="flex max-w-3xl flex-col gap-6">
              <span className="h-px w-16 bg-[#D89A42]" />
              <div className="flex flex-col gap-4">
                <p className="text-sm uppercase tracking-[0.28em] text-[#D89A42]">
                  Collaboration Process
                </p>
                <h2 className="text-balance text-4xl font-semibold leading-tight text-[#F8E6BF] md:text-5xl">
                  合作流程
                </h2>
              </div>
              <p className="text-base leading-8 text-[#E8CFA4]/88 md:text-lg">
                企业福利、客户答谢、节日礼盒与品牌联名，可以先提交需求。我们会根据数量、预算、交付时间与口味偏好，整理合适的糕点礼方案。
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {processSteps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 rounded-2xl border border-[#D89A42]/20 bg-[#1A0F0A]/46 p-4"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#F2C36B]/30 text-sm font-semibold text-[#F2C36B]">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium text-[#F8E6BF]">{step}</span>
                    <CheckCircle2 className="ml-auto size-4 text-[#D89A42]" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/reserve"
                  className="ysj-button-primary inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-medium"
                >
                  提交合作意向
                  <ArrowRight data-icon="inline-end" />
                </Link>
                <Link
                  href="/products"
                  className="ysj-button-secondary inline-flex min-h-12 items-center justify-center px-6 text-sm font-medium"
                >
                  查看产品
                </Link>
              </div>
            </div>
            <BrandImage
              src={pageMoodImages.giftboxConcept.src}
              alt={pageMoodImages.giftboxConcept.alt}
              ratio="4:5"
              variant="plain"
              sizes="(min-width: 1024px) 22vw, 82vw"
              className="rounded-[1.35rem] border border-[#D89A42]/24 shadow-[0_20px_58px_rgb(0_0_0_/_28%)]"
            />
            <span className="absolute right-8 top-8 hidden size-16 items-center justify-center rounded-full border border-[#F2C36B]/28 bg-[#1A0F0A]/70 text-[#F2C36B] lg:flex">
              <Handshake data-icon="inline-start" />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
