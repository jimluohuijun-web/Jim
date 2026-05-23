import type { Metadata } from "next";

import {
  EggYolkLotusMooncakeCTA,
  EggYolkLotusMooncakeCraft,
  EggYolkLotusMooncakeHero,
  EggYolkLotusMooncakeHighlights,
  EggYolkLotusMooncakeInfoGift,
  EggYolkLotusMooncakeProblems,
  EggYolkLotusMooncakeProcess,
  EggYolkLotusMooncakeRecommendations,
  EggYolkLotusMooncakeTaste,
} from "@/components/sections/egg-yolk-lotus-mooncake-detail-page";

export const metadata: Metadata = {
  title: "经典蛋黄莲蓉月饼｜云酥坊 YUN SU FANG",
  description:
    "云酥坊经典蛋黄莲蓉月饼详情页，主打整颗咸蛋黄、低糖莲蓉、流心切面、皮薄馅足、正统广式工艺和中秋现做现发，适合送礼与企业团购。",
  keywords: [
    "云酥坊",
    "经典蛋黄莲蓉月饼",
    "蛋黄莲蓉月饼",
    "流心月饼",
    "低糖莲蓉",
    "中秋礼盒",
    "企业团购",
  ],
};

export default function EggYolkLotusMooncakePage() {
  return (
    <main className="overflow-hidden bg-[#070604] text-[#BCA77F]">
      <EggYolkLotusMooncakeHero />
      <EggYolkLotusMooncakeProblems />
      <EggYolkLotusMooncakeHighlights />
      <EggYolkLotusMooncakeCraft />
      <EggYolkLotusMooncakeTaste />
      <EggYolkLotusMooncakeProcess />
      <EggYolkLotusMooncakeInfoGift />
      <EggYolkLotusMooncakeRecommendations />
      <EggYolkLotusMooncakeCTA />
    </main>
  );
}
