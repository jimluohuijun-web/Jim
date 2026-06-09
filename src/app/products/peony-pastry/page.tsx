import type { Metadata } from "next";

import { ProductSeoJsonLd } from "@/components/seo/product-seo-json-ld";
import {
  PeonyCTA,
  PeonyCraft,
  PeonyHero,
  PeonyHighlights,
  PeonyInfoGift,
  PeonyProblems,
  PeonyTaste,
} from "@/components/sections/peony-detail-page";
import { buildMetadata, productSeoMap } from "@/lib/seo";

const productPath = "/products/peony-pastry";

export const metadata: Metadata = buildMetadata(productSeoMap[productPath]);

export default function PeonyPastryPage() {
  return (
    <main className="overflow-hidden bg-[#070604] text-[#D6C09A]">
      <ProductSeoJsonLd path={productPath} category="中式手工酥点" />
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
