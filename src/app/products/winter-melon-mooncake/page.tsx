import type { Metadata } from "next";

import { ProductSeoJsonLd } from "@/components/seo/product-seo-json-ld";
import {
  WinterMelonMooncakeCTA,
  WinterMelonMooncakeCraft,
  WinterMelonMooncakeHero,
  WinterMelonMooncakeHighlights,
  WinterMelonMooncakeInfoGift,
  WinterMelonMooncakeProblems,
  WinterMelonMooncakeProcess,
  WinterMelonMooncakeRecommendations,
  WinterMelonMooncakeTaste,
} from "@/components/sections/winter-melon-mooncake-detail-page";
import { buildMetadata, productSeoMap } from "@/lib/seo";

const productPath = "/products/winter-melon-mooncake";

export const metadata: Metadata = buildMetadata(productSeoMap[productPath]);

export default function WinterMelonMooncakePage() {
  return (
    <main className="overflow-hidden bg-[#070604] text-[#D6C09A]">
      <ProductSeoJsonLd path={productPath} category="中秋月饼礼盒" />
      <WinterMelonMooncakeHero />
      <WinterMelonMooncakeProblems />
      <WinterMelonMooncakeHighlights />
      <WinterMelonMooncakeCraft />
      <WinterMelonMooncakeTaste />
      <WinterMelonMooncakeProcess />
      <WinterMelonMooncakeInfoGift />
      <WinterMelonMooncakeRecommendations />
      <WinterMelonMooncakeCTA />
    </main>
  );
}
