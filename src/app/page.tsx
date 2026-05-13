import type { Metadata } from "next";

import { HomeHero } from "@/components/sections/home-hero";
import { HomePreviewSections } from "@/components/sections/home-preview-sections";

export const metadata: Metadata = {
  title: "云酥记 Yun Su Ji｜云上酥香，一口东方",
  description:
    "云酥记是面向温哥华市场的新中式手作甜点品牌，计划于 2026 年 7-8 月开启小批量试吃与预约意向收集。",
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomePreviewSections />
    </>
  );
}
