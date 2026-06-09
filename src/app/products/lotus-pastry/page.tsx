import type { Metadata } from "next";

import { ProductSeoJsonLd } from "@/components/seo/product-seo-json-ld";
import {
  LotusCTA,
  LotusCraft,
  LotusHero,
  LotusHighlights,
  LotusInfoGift,
  LotusProblems,
  LotusTaste,
} from "@/components/sections/lotus-detail-page";
import { buildMetadata, productSeoMap } from "@/lib/seo";

const productPath = "/products/lotus-pastry";

export const metadata: Metadata = buildMetadata(productSeoMap[productPath]);

export default function LotusPastryPage() {
  return (
    <main className="overflow-hidden bg-[#070604] text-[#D6C09A]">
      <ProductSeoJsonLd path={productPath} category="中式手工酥点" />
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
