import type { Metadata } from "next";

import { ProductSeoJsonLd } from "@/components/seo/product-seo-json-ld";
import {
  RedBeanMooncakeCTA,
  RedBeanMooncakeCraft,
  RedBeanMooncakeHero,
  RedBeanMooncakeHighlights,
  RedBeanMooncakeInfoGift,
  RedBeanMooncakeProblems,
  RedBeanMooncakeProcess,
  RedBeanMooncakeRecommendations,
  RedBeanMooncakeTaste,
} from "@/components/sections/red-bean-mooncake-detail-page";
import { buildMetadata, productSeoMap } from "@/lib/seo";

const productPath = "/products/red-bean-mooncake";

export const metadata: Metadata = buildMetadata(productSeoMap[productPath]);

export default function RedBeanMooncakePage() {
  return (
    <main className="overflow-hidden bg-[#070604] text-[#D6C09A]">
      <ProductSeoJsonLd path={productPath} category="中秋月饼礼盒" />
      <RedBeanMooncakeHero />
      <RedBeanMooncakeProblems />
      <RedBeanMooncakeHighlights />
      <RedBeanMooncakeCraft />
      <RedBeanMooncakeTaste />
      <RedBeanMooncakeProcess />
      <RedBeanMooncakeInfoGift />
      <RedBeanMooncakeRecommendations />
      <RedBeanMooncakeCTA />
    </main>
  );
}
