"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Gift, Handshake, Sparkles } from "lucide-react";

const collaborations = [
  {
    title: "新品上市",
    description: "以新品试吃与口味反馈，建立首批用户的真实体验。",
    icon: Sparkles,
  },
  {
    title: "中秋礼盒",
    description: "适合月饼礼盒展示、预订说明与企业团购咨询。",
    icon: Gift,
  },
  {
    title: "企业福利",
    description: "可作为员工下午茶、客户答谢与节令福利方案。",
    icon: BadgeCheck,
  },
  {
    title: "品牌联名",
    description: "适合茶席体验、生活方式空间与节日快闪合作。",
    icon: Handshake,
  },
];

export function EventsCollaboration() {
  return (
    <section className="ysj-section-tight bg-[#1A0F0A]">
      <div className="ysj-container flex flex-col gap-10">
        <div className="flex max-w-3xl flex-col gap-4">
          <span className="h-px w-16 bg-[#D89A42]" />
          <p className="text-sm uppercase tracking-[0.28em] text-[#D89A42]">Scenes</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight text-[#F8E6BF] md:text-5xl">
            适合这些活动场景
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {collaborations.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.66,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="ysj-card group relative overflow-hidden p-7 transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="absolute -right-20 top-6 size-56 rounded-full border border-[#D89A42]/18" />
                <div className="relative grid gap-5 sm:grid-cols-[3rem_1fr]">
                  <span className="flex size-12 items-center justify-center rounded-full border border-[#F2C36B]/32 bg-[#1A0F0A]/72 text-[#F2C36B]">
                    <Icon data-icon="inline-start" />
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-semibold leading-tight text-[#F8E6BF]">
                      {item.title}
                    </h3>
                    <p className="text-base leading-7 text-[#E8CFA4]/76">{item.description}</p>
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
