import type { Metadata } from "next";

import {
  EggYolkCTA,
  EggYolkCraft,
  EggYolkHero,
  EggYolkHighlights,
  EggYolkInfoGift,
  EggYolkProblems,
  EggYolkTaste,
} from "@/components/sections/classic-egg-yolk-pastry-detail-page";

export const metadata: Metadata = {
  title: "经典蛋黄酥｜云酥坊 YUN SU FANG",
  description:
    "云酥坊经典蛋黄酥详情页，主打整颗咸蛋黄、低糖红豆沙、36层手工薄酥和现做现发，适合自食、节日伴手礼与礼盒预订。",
  keywords: ["云酥坊", "经典蛋黄酥", "蛋黄酥", "咸蛋黄", "低糖红豆沙", "中式糕点礼盒"],
};

export default function ClassicEggYolkPastryPage() {
  return (
    <main className="overflow-hidden bg-[#070604] text-[#BCA77F]">
      <EggYolkHero />
      <EggYolkProblems />
      <EggYolkHighlights />
      <EggYolkCraft />
      <EggYolkTaste />
      <EggYolkInfoGift />
      <EggYolkCTA />
    </main>
  );
}
