import type { Metadata } from "next";
import { headers } from "next/headers";

import { BrandStory } from "@/components/sections/brand-story";
import { Craftsmanship } from "@/components/sections/craftsmanship";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { GiftSection } from "@/components/sections/gift-section";
import { HomeHero } from "@/components/sections/home-hero";
import { MobileHomeSections } from "@/components/sections/mobile-home-sections";
import { ProductSeries } from "@/components/sections/product-series";
import { TrialRegistration } from "@/components/sections/trial-registration";

export const metadata: Metadata = {
  title: "云酥坊 yunsucake｜新中式手作酥点",
  description:
    "云酥坊 yunsucake 是温哥华新中式手作酥点品牌，展示六款花酥系列、中秋月饼官宣、试吃登记与业务联系入口。",
};

export const dynamic = "force-dynamic";

function isMobileUserAgent(userAgent: string) {
  return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(userAgent);
}

export default async function Home() {
  const requestHeaders = await headers();
  const isMobileRequest = isMobileUserAgent(requestHeaders.get("user-agent") ?? "");

  if (isMobileRequest) {
    return <MobileHomeSections />;
  }

  return (
    <div className="ysf-pc-home">
      <HomeHero />
      <FeaturedProducts />
      <ProductSeries />
      <BrandStory />
      <Craftsmanship />
      <GiftSection />
      <TrialRegistration />
    </div>
  );
}
