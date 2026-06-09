import type { Metadata } from "next";

import { ProductSeoJsonLd } from "@/components/seo/product-seo-json-ld";
import {
  FreshMeatCTA,
  FreshMeatCraft,
  FreshMeatGift,
  FreshMeatHero,
  FreshMeatHighlights,
  FreshMeatInfo,
  FreshMeatProblems,
  FreshMeatTaste,
} from "@/components/sections/suzhou-meat-mooncake-detail-page";
import { buildMetadata, productSeoMap } from "@/lib/seo";

const productPath = "/products/suzhou-fresh-meat-mooncake";

export const metadata: Metadata = buildMetadata(productSeoMap[productPath]);

export default function SuzhouFreshMeatMooncakePage() {
  return (
    <main className="overflow-hidden bg-[#070604] text-[#D6C09A]">
      <ProductSeoJsonLd path={productPath} category="中秋月饼礼盒" />
      <FreshMeatHero />
      <FreshMeatProblems />
      <FreshMeatHighlights />
      <FreshMeatCraft />
      <FreshMeatTaste />
      <FreshMeatInfo />
      <FreshMeatGift />
      <FreshMeatCTA />
    </main>
  );
}
