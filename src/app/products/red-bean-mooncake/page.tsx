import type { Metadata } from "next";

import {
  RedBeanMooncakeCTA,
  RedBeanMooncakeCraft,
  RedBeanMooncakeHero,
  RedBeanMooncakeHighlights,
  RedBeanMooncakeInfoGift,
  RedBeanMooncakeProblems,
  RedBeanMooncakeProcess,
  RedBeanMooncakeRecommendations,
  RedBeanMooncakeTaste,
} from "@/components/sections/red-bean-mooncake-detail-page";

export const metadata: Metadata = {
  title: "经典豆沙月饼｜云酥坊 YUN SU FANG",
  description:
    "云酥坊经典豆沙月饼详情页，主打真红豆慢熬、低糖不齁、广式软皮、皮薄馅足和中秋现做现发，适合家庭团圆、长辈礼赠与企业团购。",
  keywords: [
    "云酥坊",
    "经典豆沙月饼",
    "豆沙月饼",
    "红豆沙月饼",
    "低糖月饼",
    "广式月饼",
    "中秋礼盒",
    "企业团购",
  ],
};

export default function RedBeanMooncakePage() {
  return (
    <main className="overflow-hidden bg-[#070604] text-[#BCA77F]">
      <RedBeanMooncakeHero />
      <RedBeanMooncakeProblems />
      <RedBeanMooncakeHighlights />
      <RedBeanMooncakeCraft />
      <RedBeanMooncakeTaste />
      <RedBeanMooncakeProcess />
      <RedBeanMooncakeInfoGift />
      <RedBeanMooncakeRecommendations />
      <RedBeanMooncakeCTA />
    </main>
  );
}
