"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Coffee, Gift, Store } from "lucide-react";

import { BrandImage } from "@/components/ui/brand-image";
import { pageMoodImages, type SiteImage } from "@/data/images";

const eventPlans = [
  {
    title: "新品试吃会",
    time: "即将开放",
    description: "邀请用户体验新品酥点和节令口味，收集真实口味反馈。",
    status: "可预约咨询",
    href: "/reserve",
    cta: "预约试吃",
    icon: CalendarDays,
    image: pageMoodImages.eventsMood,
  },
  {
    title: "中秋礼盒预订会",
    time: "即将开放",
    description: "集中展示月饼礼盒、组合方案和企业团购选择。",
    status: "可预约咨询",
    href: "/products#mid-autumn-preview",
    cta: "查看中秋月饼",
    icon: Gift,
    image: pageMoodImages.giftboxConcept,
  },
  {
    title: "企业下午茶",
    time: "可预约咨询",
    description: "为企业团队提供东方糕点茶歇方案，适合福利、会议与客户接待。",
    status: "可预约咨询",
    href: "/contact",
    cta: "联系合作",
    icon: Coffee,
    image: pageMoodImages.afternoonTea,
  },
  {
    title: "快闪市集",
    time: "可预约咨询",
    description: "适合节日市集、社区活动和品牌联合快闪。",
    status: "合作洽谈中",
    href: "/contact",
    cta: "沟通快闪",
    icon: Store,
    image: pageMoodImages.eventsMood,
  },
] satisfies Array<{
  title: string;
  time: string;
  description: string;
  status: string;
  href: string;
  cta: string;
  icon: typeof CalendarDays;
  image: SiteImage;
}>;

export function EventsPreview() {
  return (
    <section className="ysj-section-tight border-y border-[#D89A42]/16 bg-[#120905]">
      <div className="ysj-container flex flex-col gap-10">
        <div className="flex max-w-3xl flex-col gap-4">
          <span className="h-px w-16 bg-[#D89A42]" />
          <p className="text-sm uppercase tracking-[0.28em] text-[#D89A42]">Event Types</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight text-[#F8E6BF] md:text-5xl">
            适合被预约的四类活动
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {eventPlans.map((event, index) => {
            const Icon = event.icon;

            return (
              <motion.article
                key={event.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="ysj-card group relative min-h-[32rem] overflow-hidden p-6 transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="absolute -right-16 top-8 size-56 rounded-full border border-[#D89A42]/18" />
                <div className="absolute -bottom-24 left-0 size-64 rounded-full bg-[#D89A42]/10 blur-3xl" />
                <div className="relative flex h-full flex-col justify-between gap-6">
                  <BrandImage
                    src={event.image.src}
                    alt={event.image.alt}
                    ratio="3:2"
                    variant="plain"
                    sizes="(min-width: 1024px) 28vw, 88vw"
                    className="rounded-[1.25rem] border border-[#D89A42]/24"
                  />
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
                    <span className="flex size-12 items-center justify-center rounded-full border border-[#F2C36B]/32 bg-[#1A0F0A]/72 text-[#F2C36B]">
                      <Icon data-icon="inline-start" />
                    </span>
                    <span className="rounded-full border border-[#F2C36B]/28 bg-[#1A0F0A]/54 px-3 py-1 text-xs text-[#F2C36B]">
                      {event.status}
                    </span>
                  </div>

                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <p className="text-sm uppercase tracking-[0.22em] text-[#E8CFA4]/54">
                        {event.time}
                      </p>
                      <h3 className="text-2xl font-semibold leading-tight text-[#F8E6BF]">
                        {event.title}
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-[#E8CFA4]/76">{event.description}</p>
                    <Link
                      href={event.href}
                      className="ysj-button-secondary inline-flex min-h-11 w-fit items-center justify-center gap-2 px-5 text-sm font-medium"
                    >
                      {event.cta}
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
