"use client";

import { motion } from "framer-motion";

import { BrandImage } from "@/components/ui/brand-image";
import { pageMoodImages } from "@/data/images";

export function AboutStory() {
  return (
    <section className="ysj-section-tight border-t border-border/60 bg-background/48">
      <div className="ysj-container grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4"
        >
          <span className="h-px w-16 bg-soft-gold" />
          <p className="text-sm uppercase tracking-[0.28em] text-primary/80">Story</p>
          <h2 className="ysj-title-lg text-balance">从一口酥香开始</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="ysj-card relative overflow-hidden p-7 md:p-10"
        >
          <div className="absolute -right-20 top-10 size-72 rounded-full border border-soft-gold/25" />
          <div className="absolute -bottom-24 left-8 size-72 rounded-full bg-mist-gray/28 blur-3xl" />
          <div className="relative grid gap-7 xl:grid-cols-[0.82fr_1.18fr] xl:items-center">
            <BrandImage
              src={pageMoodImages.aboutStory.src}
              alt={pageMoodImages.aboutStory.alt}
              ratio="3:2"
              variant="soft"
              sizes="(min-width: 1280px) 28vw, 86vw"
            />
            <div className="flex flex-col gap-6 text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
              <p>
                云酥记不是把传统点心简单复刻一遍。我们更在意东方点心里那些细腻的层次：酥皮松开的声音、豆沙和芝麻慢慢散开的香气，以及手作留下来的温度。
              </p>
              <p>
                在这个基础上，云酥记希望用更轻、更柔、更现代的方式呈现酥点。不追求过分甜腻，也不把东方元素做得喧闹，而是在口感、留白和细节里保留安静的东方气质。
              </p>
              <p>
                现在，品牌正在为温哥华市场做第一阶段准备。我们会先从小批量试吃、预约意向和产品测试开始，慢慢找到适合本地生活节奏的甜点表达。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
