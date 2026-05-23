"use client";

import { motion } from "framer-motion";

import { BrandImage } from "@/components/ui/brand-image";
import { pageMoodImages } from "@/data/images";

export function AboutStory() {
  return (
    <section className="ysj-section-tight border-y border-[#D89A42]/16 bg-[#120905]">
      <div className="ysj-container grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4"
        >
          <span className="h-px w-16 bg-[#D89A42]" />
          <p className="text-sm uppercase tracking-[0.28em] text-[#D89A42]">Brand Story</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight text-[#F8E6BF] md:text-5xl">
            从一枚点心，开始一份东方心意
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="ysj-card relative overflow-hidden p-7 md:p-10"
        >
          <div className="absolute -right-20 top-10 size-72 rounded-full border border-[#D89A42]/18" />
          <div className="absolute -bottom-24 left-8 size-72 rounded-full bg-[#D89A42]/10 blur-3xl" />
          <div className="relative grid gap-7 xl:grid-cols-[0.82fr_1.18fr] xl:items-center">
            <BrandImage
              src={pageMoodImages.aboutStory.src}
              alt={pageMoodImages.aboutStory.alt}
              ratio="3:2"
              variant="soft"
              sizes="(min-width: 1280px) 28vw, 86vw"
            />
            <div className="flex flex-col gap-6 text-base leading-8 text-[#E8CFA4]/78 md:text-lg md:leading-9">
              <p>
                云酥坊以中式糕点为核心，把蛋黄酥、凤梨酥、花酥与中秋月饼放进更现代的礼赠场景里。
              </p>
              <p>
                我们在意真实馅料、低糖口味和干净审美，让点心既适合自己慢慢品尝，也适合亲友分享、节令送礼与企业福利。
              </p>
              <p>
                从日常酥点到中秋礼盒，云酥坊希望把东方糕点做得克制、体面，也更容易进入当代生活。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
