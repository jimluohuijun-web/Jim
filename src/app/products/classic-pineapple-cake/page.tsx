import type { Metadata } from "next";

import {
  PineappleCakeCTA,
  PineappleCakeCraft,
  PineappleCakeHero,
  PineappleCakeHighlights,
  PineappleCakeInfoGift,
  PineappleCakeProblems,
  PineappleCakeTaste,
} from "@/components/sections/classic-pineapple-cake-detail-page";

export const metadata: Metadata = {
  title: "经典凤梨酥｜云酥坊 YUN SU FANG",
  description:
    "云酥坊经典凤梨酥详情页，主打100%凤梨果肉、馅多皮薄、酸甜不齁、36层薄酥、现做现发，适合自食与礼盒预订。",
  keywords: ["云酥坊", "经典凤梨酥", "凤梨酥", "凤梨果肉", "36层薄酥", "中式糕点礼盒"],
};

export default function ClassicPineappleCakePage() {
  return (
    <main className="overflow-hidden bg-[#070604] text-[#BCA77F]">
      <PineappleCakeHero />
      <PineappleCakeProblems />
      <PineappleCakeHighlights />
      <PineappleCakeCraft />
      <PineappleCakeTaste />
      <PineappleCakeInfoGift />
      <PineappleCakeCTA />
    </main>
  );
}
