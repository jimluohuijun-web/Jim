"use client";

import { motion } from "framer-motion";

import { BrandImage } from "@/components/ui/brand-image";
import { pageMoodImages } from "@/data/images";

const brandStoryParagraphs = [
  "五代十国，是中国历史上一段短促而纷乱的岁月。中原兵戈不息，东南一隅却自有山海、茶香、商旅与烟火。",
  "闽国立于东南，国祚不过三十余年，却留下了一片极适合东方点心生长的文化土壤。这里山海相接，物产丰饶；茶风兴盛，市井温润。商旅往来之间，茶席、小食、糕饼与节令礼俗，慢慢沉淀成闽地独有的生活滋味。",
  "云酥坊的品牌灵感，便取自这段短暂而神秘的闽国风物。",
  "我们没有把云酥坊说成遥不可考的宫廷秘方，也不愿用虚浮的传说遮盖真正的手艺。我们更相信，中式点心的高级感，不在夸张的来历，而在入口那一刻的分寸：酥而不散，甜而不腻，香而不俗。",
  "传说闽地旧时制酥，最重「层、香、心」三字。",
  "层，要薄如云雪，烘后轻落；香，要温润入茶，不夺本味；心，要咸甜相济，入口回甘。",
  "云酥坊以此为意，重作中式酥点。我们以三十六层手工开酥，做出层层分明、簌簌轻落的口感；以低糖豆沙、整颗咸蛋黄、花果馅心，调和甜、咸、香、润之间的平衡；以桃花、荷花、牡丹、月饼诸形，承接东方人对四时花月、节令团圆与体面礼赠的审美。",
  "一枚酥点，看似小，却藏着中式点心最难得的克制。",
  "太甜，则腻；太重，则俗；太轻，又少了记忆。",
  "云酥坊想做的，是刚刚好的那一口：有酥皮的层次，有馅心的温度，有茶席旁的余韵，也有节日礼盒里的郑重。",
  "古人写小饼：「小饼如嚼月，中有酥与饴。」云酥坊愿做的，正是这样一枚有月色、有酥香、有回甘的东方点心。",
  "它可以是一盒体面的伴手礼，也可以是一盏茶旁的小小安慰；可以出现在中秋团圆的桌上，也可以成为年轻人重新认识中式糕点的第一口。",
  "我们取意闽国风物，却不止步于复古。我们尊重传统手艺，也用更适合现代人的低糖口味、干净配方与东方审美，让中式酥点重新回到今天的生活里。",
  "云起闽山，酥藏花月。",
  "云酥坊，以闽国风物为引，把东方人的雅致、温情与团圆，做成一枚可以入口的点心。",
];

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
            闽国风物入酥，东方花月成点
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
          <div className="relative grid gap-7 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
            <BrandImage
              src={pageMoodImages.aboutStory.src}
              alt={pageMoodImages.aboutStory.alt}
              ratio="16:9"
              variant="soft"
              sizes="(min-width: 1280px) 28vw, 86vw"
              className="xl:sticky xl:top-28"
            />
            <div className="flex flex-col gap-5 text-sm leading-7 text-[#E8CFA4]/78 md:text-base md:leading-8">
              {brandStoryParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
