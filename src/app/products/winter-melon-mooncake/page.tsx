import type { Metadata } from "next";

import {
  WinterMelonMooncakeCTA,
  WinterMelonMooncakeCraft,
  WinterMelonMooncakeHero,
  WinterMelonMooncakeHighlights,
  WinterMelonMooncakeInfoGift,
  WinterMelonMooncakeProblems,
  WinterMelonMooncakeProcess,
  WinterMelonMooncakeRecommendations,
  WinterMelonMooncakeTaste,
} from "@/components/sections/winter-melon-mooncake-detail-page";

export const metadata: Metadata = {
  title: "特色古法冬翅月饼｜云酥坊 YUN SU FANG",
  description:
    "云酥坊特色古法冬翅月饼详情页，主打古法冬瓜熬冬翅、低糖清甜、广式软皮、清爽解腻和中秋现做现发，适合礼盒混搭、长辈礼赠与企业团购。",
  keywords: [
    "云酥坊",
    "特色古法冬翅月饼",
    "冬翅月饼",
    "冬瓜月饼",
    "低糖月饼",
    "广式月饼",
    "中秋月饼",
    "中秋礼盒",
    "企业团购",
  ],
};

export default function WinterMelonMooncakePage() {
  return (
    <main className="overflow-hidden bg-[#070604] text-[#BCA77F]">
      <WinterMelonMooncakeHero />
      <WinterMelonMooncakeProblems />
      <WinterMelonMooncakeHighlights />
      <WinterMelonMooncakeCraft />
      <WinterMelonMooncakeTaste />
      <WinterMelonMooncakeProcess />
      <WinterMelonMooncakeInfoGift />
      <WinterMelonMooncakeRecommendations />
      <WinterMelonMooncakeCTA />
    </main>
  );
}
