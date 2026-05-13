"use client";

import { motion } from "framer-motion";
import { Cloud, HandHeart, Wheat } from "lucide-react";

const values = [
  {
    title: "云雾感",
    description: "口感轻盈，视觉柔和，像云一样不厚重。",
    icon: Cloud,
  },
  {
    title: "东方酥香",
    description: "保留豆沙、莲蓉、咸蛋黄、玫瑰与茶香等东方味觉记忆。",
    icon: Wheat,
  },
  {
    title: "小批量手作",
    description: "以更克制的节奏制作，让每一批产品保持稳定和细腻。",
    icon: HandHeart,
  },
];

export function AboutValues() {
  return (
    <section className="ysj-section-tight">
      <div className="ysj-container flex flex-col gap-10">
        <div className="flex max-w-2xl flex-col gap-4">
          <span className="h-px w-16 bg-primary" />
          <p className="text-sm uppercase tracking-[0.28em] text-primary/80">Brand Words</p>
          <h2 className="ysj-title-lg text-balance">三个关键词</h2>
          <p className="text-base leading-8 text-muted-foreground md:text-lg">
            从口感、风味到制作节奏，慢慢靠近云酥坊想呈现的温柔秩序。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
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
                className="ysj-card relative min-h-72 overflow-hidden p-7"
              >
                <div className="absolute -right-16 top-10 size-48 rounded-full border border-soft-gold/25" />
                <div className="relative flex h-full flex-col justify-between gap-8">
                  <span className="flex size-12 items-center justify-center rounded-full border border-soft-gold/35 bg-cloud-white/55 text-primary">
                    <Icon data-icon="inline-start" />
                  </span>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-semibold leading-tight">{value.title}</h3>
                    <p className="text-base leading-7 text-muted-foreground">{value.description}</p>
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
