import type { Metadata } from "next";

import { AboutCta } from "@/components/sections/about-cta";
import { AboutFounder } from "@/components/sections/about-founder";
import { AboutHero } from "@/components/sections/about-hero";
import { AboutStory } from "@/components/sections/about-story";
import { AboutTimeline } from "@/components/sections/about-timeline";
import { AboutValues } from "@/components/sections/about-values";

export const metadata: Metadata = {
  title: "关于云酥坊｜品牌故事与温哥华计划",
  description:
    "了解云酥坊的新中式手作点心理念、品牌发起故事，以及 2026 年 7-8 月温哥华第一阶段小批量试吃与中秋礼盒预告计划。",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutFounder />
      <AboutTimeline />
      <AboutCta />
    </>
  );
}
