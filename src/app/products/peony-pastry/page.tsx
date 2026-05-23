import type { Metadata } from "next";

import {
  PeonyCTA,
  PeonyCraft,
  PeonyHero,
  PeonyHighlights,
  PeonyInfoGift,
  PeonyProblems,
  PeonyTaste,
} from "@/components/sections/peony-detail-page";

export const metadata: Metadata = {
  title: "牡丹酥｜云酥坊 YUN SU FANG",
  description:
    "云酥坊牡丹酥详情页，主打手工牡丹造型、低糖紫薯馅、36层手工薄酥和现做现发，花开富贵寓意，适合自食与礼盒预订。",
  keywords: ["云酥坊", "牡丹酥", "低糖紫薯馅", "花开富贵", "中式糕点礼盒", "现做现发"],
};

export default function PeonyPastryPage() {
  return (
    <main className="overflow-hidden bg-[#070604] text-[#BCA77F]">
      <PeonyHero />
      <PeonyProblems />
      <PeonyHighlights />
      <PeonyCraft />
      <PeonyTaste />
      <PeonyInfoGift />
      <PeonyCTA />
    </main>
  );
}
