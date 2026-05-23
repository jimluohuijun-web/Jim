"use client";

import { motion } from "framer-motion";

const processSteps = [
  "提交预约",
  "确认名额",
  "到场试吃",
  "礼盒预订 / 合作咨询",
];

export function EventsProcess() {
  return (
    <section className="ysj-section-tight border-y border-[#D89A42]/16 bg-[#120905]">
      <div className="ysj-container flex flex-col gap-10">
        <div className="flex max-w-3xl flex-col gap-4">
          <span className="h-px w-16 bg-[#D89A42]" />
          <p className="text-sm uppercase tracking-[0.28em] text-[#D89A42]">Process</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight text-[#F8E6BF] md:text-5xl">
            从预约到见面
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.article
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.66,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="ysj-card relative overflow-hidden p-6"
            >
              <div className="absolute -right-10 top-4 size-32 rounded-full border border-[#D89A42]/18" />
              <div className="relative flex min-h-48 flex-col justify-between gap-8">
                <span className="text-sm uppercase tracking-[0.24em] text-[#D89A42]">
                  Step {index + 1}
                </span>
                <h3 className="text-2xl font-semibold leading-tight text-[#F8E6BF]">{step}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
