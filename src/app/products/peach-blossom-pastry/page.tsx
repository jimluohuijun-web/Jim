import type { Metadata } from "next";

import {
  PeachCTA,
  PeachCraft,
  PeachHero,
  PeachHighlights,
  PeachInfoGift,
  PeachProblems,
  PeachTaste,
} from "@/components/sections/peach-detail-page";

export const metadata: Metadata = {
  title: "桃花酥｜云酥坊 YUN SU FANG",
  description:
    "云酥坊桃花酥详情页，主打手工桃花造型、低糖红豆沙、36层手工薄酥和现做现发，适合自食与礼盒预订。",
  keywords: ["云酥坊", "桃花酥", "桃花造型", "低糖红豆沙", "中式糕点礼盒", "现做现发"],
};

export default function PeachBlossomPastryPage() {
  return (
    <main className="overflow-hidden bg-[#070604] text-[#BCA77F]">
      <PeachHero />
      <PeachProblems />
      <PeachHighlights />
      <PeachCraft />
      <PeachTaste />
      <PeachInfoGift />
      <PeachCTA />
    </main>
  );
}
