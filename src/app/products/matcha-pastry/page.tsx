import type { Metadata } from "next";

import {
  MatchaCTA,
  MatchaCraft,
  MatchaHero,
  MatchaHighlights,
  MatchaInfoGift,
  MatchaProblems,
  MatchaTaste,
} from "@/components/sections/matcha-detail-page";

export const metadata: Metadata = {
  title: "抹茶酥｜云酥坊 YUN SU FANG",
  description:
    "云酥坊抹茶酥详情页，主打日本抹茶粉、整颗咸蛋黄、低糖红豆沙、36层手工酥皮和现做现发，适合自食与礼盒预订。",
  keywords: ["云酥坊", "抹茶酥", "日本抹茶粉", "咸蛋黄", "低糖红豆沙", "中式糕点礼盒"],
};

export default function MatchaPastryPage() {
  return (
    <main className="overflow-hidden bg-[#070604] text-[#BCA77F]">
      <MatchaHero />
      <MatchaProblems />
      <MatchaHighlights />
      <MatchaCraft />
      <MatchaTaste />
      <MatchaInfoGift />
      <MatchaCTA />
    </main>
  );
}
