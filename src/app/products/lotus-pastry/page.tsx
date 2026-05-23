import type { Metadata } from "next";

import {
  LotusCTA,
  LotusCraft,
  LotusHero,
  LotusHighlights,
  LotusInfoGift,
  LotusProblems,
  LotusTaste,
} from "@/components/sections/lotus-detail-page";

export const metadata: Metadata = {
  title: "荷花酥｜云酥坊 YUN SU FANG",
  description:
    "云酥坊荷花酥详情页，主打手工荷花造型、低糖莲蓉馅、36层手工薄酥和现做现发，适合自食、长辈礼赠与企业礼赠。",
  keywords: ["云酥坊", "荷花酥", "低糖莲蓉", "中式糕点礼盒", "长辈礼赠", "企业礼赠"],
};

export default function LotusPastryPage() {
  return (
    <main className="overflow-hidden bg-[#070604] text-[#BCA77F]">
      <LotusHero />
      <LotusProblems />
      <LotusHighlights />
      <LotusCraft />
      <LotusTaste />
      <LotusInfoGift />
      <LotusCTA />
    </main>
  );
}
