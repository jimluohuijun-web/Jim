import type { Metadata } from "next";

import { HomeHero } from "@/components/sections/home-hero";
import { HomePreviewSections } from "@/components/sections/home-preview-sections";

export const metadata: Metadata = {
  title: "云酥坊 yunsucake｜温哥华手作新中式酥点",
  description:
    "云酥坊 yunsucake 是面向温哥华市场的新中式手作点心品牌，展示蛋黄酥、牡丹花酥、加拿大季节风味与 2026 中秋礼盒预告。",
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomePreviewSections />
    </>
  );
}
