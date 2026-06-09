import type { Metadata } from "next";

import { ProductSeoJsonLd } from "@/components/seo/product-seo-json-ld";
import {
  EggYolkLotusMooncakeCTA,
  EggYolkLotusMooncakeCraft,
  EggYolkLotusMooncakeHero,
  EggYolkLotusMooncakeHighlights,
  EggYolkLotusMooncakeInfoGift,
  EggYolkLotusMooncakeProblems,
  EggYolkLotusMooncakeProcess,
  EggYolkLotusMooncakeRecommendations,
  EggYolkLotusMooncakeTaste,
} from "@/components/sections/egg-yolk-lotus-mooncake-detail-page";
import { buildMetadata, productSeoMap } from "@/lib/seo";

const productPath = "/products/egg-yolk-lotus-mooncake";

export const metadata: Metadata = buildMetadata(productSeoMap[productPath]);

export default function EggYolkLotusMooncakePage() {
  return (
    <main className="overflow-hidden bg-[#070604] text-[#D6C09A]">
      <ProductSeoJsonLd path={productPath} category="中秋月饼礼盒" />
      <EggYolkLotusMooncakeHero />
      <EggYolkLotusMooncakeProblems />
      <EggYolkLotusMooncakeHighlights />
      <EggYolkLotusMooncakeCraft />
      <EggYolkLotusMooncakeTaste />
      <EggYolkLotusMooncakeProcess />
      <EggYolkLotusMooncakeInfoGift />
      <EggYolkLotusMooncakeRecommendations />
      <EggYolkLotusMooncakeCTA />
    </main>
  );
}
