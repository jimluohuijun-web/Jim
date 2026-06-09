"use client";

import { motion } from "framer-motion";

import { BrandImage } from "@/components/ui/brand-image";
import { pageMoodImages } from "@/data/images";

const originParagraphs = [
  "五代十国，是中国历史上一段短促而纷乱的岁月。中原兵戈不息，东南一隅却自有山海、茶香、商旅与烟火。",
  "闽国立于东南，国祚不过三十余年，却留下了一片极适合东方点心生长的文化土壤。这里山海相接，物产丰饶；茶风兴盛，市井温润。商旅往来之间，茶席、小食、糕饼与节令礼俗，慢慢沉淀成闽地独有的生活滋味。",
  "云酥坊的品牌灵感，便取自这段短暂而神秘的闽国风物。",
  "我们没有把云酥坊说成遥不可考的宫廷秘方，也不愿用虚浮的传说遮盖真正的手艺。我们更相信，中式点心的高级感，不在夸张的来历，而在入口那一刻的分寸：酥而不散，甜而不腻，香而不俗。",
];

const craftParagraphs = [
  "传说闽地旧时制酥，最重「层、香、心」三字。",
  "云酥坊以此为意，重作中式酥点。我们以三十六层手工开酥，做出层层分明、簌簌轻落的口感；以低糖豆沙、整颗咸蛋黄、花果馅心，调和甜、咸、香、润之间的平衡；以桃花、荷花、牡丹、月饼诸形，承接东方人对四时花月、节令团圆与体面礼赠的审美。",
  "一枚酥点，看似小，却藏着中式点心最难得的克制。",
  "太甜，则腻；太重，则俗；太轻，又少了记忆。",
];

const closingParagraphs = [
  "云酥坊想做的，是刚刚好的那一口：有酥皮的层次，有馅心的温度，有茶席旁的余韵，也有节日礼盒里的郑重。",
  "古人写小饼：「小饼如嚼月，中有酥与饴。」云酥坊愿做的，正是这样一枚有月色、有酥香、有回甘的东方点心。",
  "它可以是一盒体面的伴手礼，也可以是一盏茶旁的小小安慰；可以出现在中秋团圆的桌上，也可以成为年轻人重新认识中式糕点的第一口。",
  "我们取意闽国风物，却不止步于复古。我们尊重传统手艺，也用更适合现代人的低糖口味、干净配方与东方审美，让中式酥点重新回到今天的生活里。",
  "云起闽山，酥藏花月。",
  "云酥坊，以闽国风物为引，把东方人的雅致、温情与团圆，做成一枚可以入口的点心。",
];

const craftPrinciples = [
  {
    title: "层",
    description: "薄如云雪，烘后轻落。",
  },
  {
    title: "香",
    description: "温润入茶，不夺本味。",
  },
  {
    title: "心",
    description: "咸甜相济，入口回甘。",
  },
];

const storyGroups = [
  {
    label: "Origin",
    title: "闽地风物",
    paragraphs: originParagraphs,
  },
  {
    label: "Craft",
    title: "层、香、心",
    paragraphs: craftParagraphs,
  },
  {
    label: "Today",
    title: "今日一口",
    paragraphs: closingParagraphs,
  },
];

export function AboutStory() {
  return (
    <section className="relative isolate overflow-hidden border-y border-[#D89A42]/16 bg-[#120905]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_20%,rgb(216_154_66_/_13%),transparent_24rem),radial-gradient(circle_at_84%_18%,rgb(242_195_107_/_10%),transparent_26rem),linear-gradient(180deg,#120905,#1A0F0A_46%,#100704)]" />
      <div className="pointer-events-none absolute left-[-12rem] top-32 size-[34rem] rounded-full border border-[#D89A42]/10" />
      <div className="pointer-events-none absolute right-[-10rem] top-24 size-[30rem] rounded-full border border-[#F2C36B]/10" />

      <div className="ysj-container flex flex-col gap-10 py-16 md:gap-12 md:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center"
        >
          <span className="h-px w-16 bg-[#D89A42]" />
          <p className="text-sm uppercase tracking-[0.28em] text-[#D89A42]">Brand Story</p>
          <h2 className="text-balance font-serif text-[2.35rem] font-semibold leading-tight text-[#F8E6BF] md:text-6xl">
            闽国风物入酥，东方花月成点
          </h2>
          <p className="max-w-3xl text-base leading-8 text-[#E8CFA4]/88 md:text-lg">
            云起闽山，酥藏花月。以一段短暂而神秘的闽国风物为引，把东方人的雅致、温情与团圆，做成可以入口的点心。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch"
        >
          <div className="ysj-card relative overflow-hidden p-3 md:p-4">
            <BrandImage
              src={pageMoodImages.aboutStory.src}
              alt={pageMoodImages.aboutStory.alt}
              ratio="16:9"
              variant="plain"
              sizes="(min-width: 1024px) 52vw, 92vw"
              className="rounded-[1.4rem] border border-[#D89A42]/28"
              imageClassName="object-[58%_center]"
            />
            <div className="pointer-events-none absolute inset-3 rounded-[1.4rem] bg-[linear-gradient(90deg,rgb(18_9_5_/_42%),transparent_46%,rgb(18_9_5_/_18%))]" />
          </div>

          <div className="ysj-card relative overflow-hidden p-7 md:p-9">
            <div className="absolute -right-20 top-8 size-64 rounded-full border border-[#D89A42]/18" />
            <div className="relative flex h-full flex-col justify-between gap-8">
              <div className="flex flex-col gap-5">
                <p className="text-xs uppercase tracking-[0.28em] text-[#D89A42]">Poetic Core</p>
                <blockquote className="font-serif text-3xl font-semibold leading-snug text-[#F8E6BF] md:text-4xl">
                  小饼如嚼月，
                  <br />
                  中有酥与饴。
                </blockquote>
                <p className="text-base leading-8 text-[#E8CFA4]/88">
                  云酥坊愿做的，正是这样一枚有月色、有酥香、有回甘的东方点心。
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {craftPrinciples.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.15rem] border border-[#D89A42]/22 bg-[#1A0F0A]/58 p-4"
                  >
                    <p className="font-serif text-3xl font-semibold text-[#F8E6BF]">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-[#E8CFA4]/86">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {storyGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.72,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="ysj-card relative overflow-hidden p-6 md:p-7"
            >
              <div className="absolute -right-20 top-12 size-56 rounded-full border border-[#D89A42]/14" />
              <div className="relative flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <span className="h-px w-12 bg-[#D89A42]" />
                  <p className="text-xs uppercase tracking-[0.28em] text-[#D89A42]">{group.label}</p>
                  <h3 className="font-serif text-3xl font-semibold leading-tight text-[#F8E6BF]">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-4 text-sm leading-7 text-[#E8CFA4]/88 md:text-[0.95rem]">
                  {group.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
