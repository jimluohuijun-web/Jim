import type { Metadata } from "next";

import { ProductSeoJsonLd } from "@/components/seo/product-seo-json-ld";
import {
  FiveNutsMooncakeCTA,
  FiveNutsMooncakeCraft,
  FiveNutsMooncakeHero,
  FiveNutsMooncakeHighlights,
  FiveNutsMooncakeInfoGift,
  FiveNutsMooncakeProblems,
  FiveNutsMooncakeProcess,
  FiveNutsMooncakeRecommendations,
  FiveNutsMooncakeTaste,
} from "@/components/sections/five-nuts-mooncake-detail-page";
import { buildMetadata, productSeoMap } from "@/lib/seo";

const productPath = "/products/five-nuts-mooncake";

export const metadata: Metadata = buildMetadata(productSeoMap[productPath]);

export default function FiveNutsMooncakePage() {
  return (
    <main className="overflow-hidden bg-[#070604] text-[#D6C09A]">
      <ProductSeoJsonLd path={productPath} category="中秋月饼礼盒" />
      <FiveNutsMooncakeHero />
      <FiveNutsMooncakeProblems />
      <FiveNutsMooncakeHighlights />
      <FiveNutsMooncakeCraft />
      <FiveNutsMooncakeTaste />
      <FiveNutsMooncakeProcess />
      <FiveNutsMooncakeInfoGift />
      <FiveNutsMooncakeRecommendations />
      <FiveNutsMooncakeCTA />
    </main>
  );
}
