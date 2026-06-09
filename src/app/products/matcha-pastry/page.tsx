import type { Metadata } from "next";

import { ProductSeoJsonLd } from "@/components/seo/product-seo-json-ld";
import {
  MatchaCTA,
  MatchaCraft,
  MatchaHero,
  MatchaHighlights,
  MatchaInfoGift,
  MatchaProblems,
  MatchaTaste,
} from "@/components/sections/matcha-detail-page";
import { buildMetadata, productSeoMap } from "@/lib/seo";

const productPath = "/products/matcha-pastry";

export const metadata: Metadata = buildMetadata(productSeoMap[productPath]);

export default function MatchaPastryPage() {
  return (
    <main className="overflow-hidden bg-[#070604] text-[#D6C09A]">
      <ProductSeoJsonLd path={productPath} category="中式手工酥点" />
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
