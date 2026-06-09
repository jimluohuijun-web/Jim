import type { Metadata } from "next";

import { ProductSeoJsonLd } from "@/components/seo/product-seo-json-ld";
import {
  PeachCTA,
  PeachCraft,
  PeachHero,
  PeachHighlights,
  PeachInfoGift,
  PeachProblems,
  PeachTaste,
} from "@/components/sections/peach-detail-page";
import { buildMetadata, productSeoMap } from "@/lib/seo";

const productPath = "/products/peach-blossom-pastry";

export const metadata: Metadata = buildMetadata(productSeoMap[productPath]);

export default function PeachBlossomPastryPage() {
  return (
    <main className="overflow-hidden bg-[#070604] text-[#D6C09A]">
      <ProductSeoJsonLd path={productPath} category="中式手工酥点" />
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
