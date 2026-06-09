import type { Metadata } from "next";

import { ProductSeoJsonLd } from "@/components/seo/product-seo-json-ld";
import {
  EggYolkCTA,
  EggYolkCraft,
  EggYolkHero,
  EggYolkHighlights,
  EggYolkInfoGift,
  EggYolkProblems,
  EggYolkTaste,
} from "@/components/sections/classic-egg-yolk-pastry-detail-page";
import { buildMetadata, productSeoMap } from "@/lib/seo";

const productPath = "/products/classic-egg-yolk-pastry";

export const metadata: Metadata = buildMetadata(productSeoMap[productPath]);

export default function ClassicEggYolkPastryPage() {
  return (
    <main className="overflow-hidden bg-[#070604] text-[#D6C09A]">
      <ProductSeoJsonLd path={productPath} category="中式手工酥点" />
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
