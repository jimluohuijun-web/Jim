"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, CalendarDays, Gift, Handshake } from "lucide-react";

const entries = [
  {
    title: "企业团购",
    description: "适合员工福利、客户答谢、节日礼赠。",
    button: "提交团购需求",
    href: "/reserve",
    icon: BriefcaseBusiness,
  },
  {
    title: "节日礼盒定制",
    description: "支持多规格组合、节令产品搭配与礼盒方案咨询。",
    button: "查看产品系列",
    href: "/products",
    icon: Gift,
  },
  {
    title: "新品试吃",
    description: "欢迎预约试吃名额，提前体验云酥坊新品。",
    button: "预约试吃",
    href: "/reserve",
    icon: CalendarDays,
  },
  {
    title: "品牌合作",
    description: "适合活动快闪、联名合作、茶席体验与渠道洽谈。",
    button: "沟通合作",
    href: "/reserve",
    icon: Handshake,
  },
];

export function ContactEntryCards() {
  return (
    <section className="ysj-section-tight border-y border-[#D89A42]/16 bg-[#120905]">
      <div className="ysj-container flex flex-col gap-10">
        <div className="flex max-w-3xl flex-col gap-4">
          <span className="h-px w-16 bg-[#D89A42]" />
          <p className="text-sm uppercase tracking-[0.28em] text-[#D89A42]">Contact Entry</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight text-[#F8E6BF] md:text-5xl">
            选择适合的联系入口
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {entries.map((entry, index) => {
            const Icon = entry.icon;

            return (
              <motion.article
                key={entry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.68,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-[1.5rem] border border-[#D89A42]/24 bg-[#2A1710]/60 p-7 shadow-[0_22px_60px_rgb(0_0_0_/_22%)] transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="absolute -right-16 top-8 size-56 rounded-full border border-[#D89A42]/12" />
                <div className="relative flex min-h-64 flex-col justify-between gap-8">
                  <div className="grid gap-5 sm:grid-cols-[3rem_1fr]">
                    <span className="flex size-12 items-center justify-center rounded-full border border-[#F2C36B]/32 bg-[#1A0F0A]/72 text-[#F2C36B]">
                      <Icon data-icon="inline-start" />
                    </span>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-3xl font-semibold leading-tight text-[#F8E6BF]">
                        {entry.title}
                      </h3>
                      <p className="text-base leading-7 text-[#E8CFA4]/88">
                        {entry.description}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={entry.href}
                    className="ysj-button-secondary inline-flex min-h-11 w-fit items-center justify-center gap-2 px-5 text-sm font-medium"
                  >
                    {entry.button}
                    <ArrowRight data-icon="inline-end" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
