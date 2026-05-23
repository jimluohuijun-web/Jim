import type { Metadata } from "next";

import {
  FiveNutsMooncakeCTA,
  FiveNutsMooncakeCraft,
  FiveNutsMooncakeHero,
  FiveNutsMooncakeHighlights,
  FiveNutsMooncakeInfoGift,
  FiveNutsMooncakeProblems,
  FiveNutsMooncakeProcess,
  FiveNutsMooncakeRecommendations,
  FiveNutsMooncakeTaste,
} from "@/components/sections/five-nuts-mooncake-detail-page";

export const metadata: Metadata = {
  title: "传统广式五仁月饼｜云酥坊 YUN SU FANG",
  description:
    "云酥坊传统广式五仁月饼详情页，主打无青红丝、真五仁满料、低糖不腻、广式回油软皮、坚果本香和中秋现做现发，适合长辈礼赠与企业团购。",
  keywords: ["云酥坊", "五仁月饼", "传统广式五仁月饼", "无青红丝", "低糖月饼", "中秋礼盒", "企业团购"],
};

export default function FiveNutsMooncakePage() {
  return (
    <main className="overflow-hidden bg-[#070604] text-[#BCA77F]">
      <FiveNutsMooncakeHero />
      <FiveNutsMooncakeProblems />
      <FiveNutsMooncakeHighlights />
      <FiveNutsMooncakeCraft />
      <FiveNutsMooncakeTaste />
      <FiveNutsMooncakeProcess />
      <FiveNutsMooncakeInfoGift />
      <FiveNutsMooncakeRecommendations />
      <FiveNutsMooncakeCTA />
    </main>
  );
}
