import type { Metadata } from "next";

import {
  FreshMeatCTA,
  FreshMeatCraft,
  FreshMeatGift,
  FreshMeatHero,
  FreshMeatHighlights,
  FreshMeatInfo,
  FreshMeatProblems,
  FreshMeatTaste,
} from "@/components/sections/suzhou-meat-mooncake-detail-page";

export const metadata: Metadata = {
  title: "苏式鲜肉月饼｜云酥坊 YUN SU FANG",
  description:
    "云酥坊苏式鲜肉月饼详情页，主打黑毛猪鲜肉爆汁、12层酥皮、现烤现发与咸香不腻口感，适合中秋礼盒、企业团购和试吃预订。",
  keywords: ["云酥坊", "苏式鲜肉月饼", "鲜肉月饼", "黑毛猪", "12层酥皮", "中秋礼盒"],
};

export default function SuzhouFreshMeatMooncakePage() {
  return (
    <main className="overflow-hidden bg-[#070604] text-[#BCA77F]">
      <FreshMeatHero />
      <FreshMeatProblems />
      <FreshMeatHighlights />
      <FreshMeatCraft />
      <FreshMeatTaste />
      <FreshMeatInfo />
      <FreshMeatGift />
      <FreshMeatCTA />
    </main>
  );
}
