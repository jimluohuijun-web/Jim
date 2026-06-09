import type { Metadata } from "next";

import { ProductSeoJsonLd } from "@/components/seo/product-seo-json-ld";
import {
  PineappleCakeCTA,
  PineappleCakeCraft,
  PineappleCakeHero,
  PineappleCakeHighlights,
  PineappleCakeInfoGift,
  PineappleCakeProblems,
  PineappleCakeTaste,
} from "@/components/sections/classic-pineapple-cake-detail-page";
import { buildMetadata, productSeoMap } from "@/lib/seo";

const productPath = "/products/classic-pineapple-cake";

export const metadata: Metadata = buildMetadata(productSeoMap[productPath]);

export default function ClassicPineappleCakePage() {
  return (
    <main className="overflow-hidden bg-[#070604] text-[#D6C09A]">
      <ProductSeoJsonLd path={productPath} category="中式手工酥点" />
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
