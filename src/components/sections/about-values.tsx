"use client";

import { motion } from "framer-motion";
import { Gift, HandHeart, Leaf, Wheat } from "lucide-react";

const values = [
  {
    title: "真材实料",
    description: "坚持清晰配料和真实馅料，不靠香精堆味。",
    icon: Wheat,
  },
  {
    title: "手作匠心",
    description: "重视开酥、包馅、捏花、慢烤等关键工序。",
    icon: HandHeart,
  },
  {
    title: "低糖轻负担",
    description: "减少传统糕点齁甜厚重感，让更多人容易接受。",
    icon: Leaf,
  },
  {
    title: "国风礼赠",
    description: "以东方审美包装节令心意，适合亲友与商务礼赠。",
    icon: Gift,
  },
];

export function AboutValues() {
  return (
    <section className="ysj-section-tight bg-[#1A0F0A]">
      <div className="ysj-container flex flex-col gap-10">
        <div className="flex max-w-2xl flex-col gap-4">
          <span className="h-px w-16 bg-[#D89A42]" />
          <p className="text-sm uppercase tracking-[0.28em] text-[#D89A42]">Brand Values</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight text-[#F8E6BF] md:text-5xl">
            值得被选择的四个理由
          </h2>
          <p className="text-base leading-8 text-[#E8CFA4]/76 md:text-lg">
            从原料、工序、口味到礼赠体验，建立云酥坊的稳定信任感。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="ysj-card group relative min-h-72 overflow-hidden p-7 transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="absolute -right-16 top-10 size-48 rounded-full border border-[#D89A42]/18" />
                <div className="relative flex h-full flex-col justify-between gap-8">
                  <span className="flex size-12 items-center justify-center rounded-full border border-[#F2C36B]/32 bg-[#1A0F0A]/72 text-[#F2C36B]">
                    <Icon data-icon="inline-start" />
                  </span>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-semibold leading-tight text-[#F8E6BF]">
                      {value.title}
                    </h3>
                    <p className="text-base leading-7 text-[#E8CFA4]/76">{value.description}</p>
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
