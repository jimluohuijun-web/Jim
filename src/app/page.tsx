import type { Metadata } from "next";
import { headers } from "next/headers";

import { JsonLd } from "@/components/seo/json-ld";
import { SeoFaqSection, SeoInternalLinks } from "@/components/seo/seo-content-blocks";
import { BrandStory } from "@/components/sections/brand-story";
import { Craftsmanship } from "@/components/sections/craftsmanship";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { GiftSection } from "@/components/sections/gift-section";
import { HomeHero } from "@/components/sections/home-hero";
import { MobileHomeSections } from "@/components/sections/mobile-home-sections";
import { ProductSeries } from "@/components/sections/product-series";
import { TrialRegistration } from "@/components/sections/trial-registration";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildMetadata, pageSeoMap } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pageSeoMap.home);

export const dynamic = "force-dynamic";

function isMobileUserAgent(userAgent: string) {
  return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(userAgent);
}

export default async function Home() {
  const requestHeaders = await headers();
  const isMobileRequest = isMobileUserAgent(requestHeaders.get("user-agent") ?? "");
  const homeJsonLd = (
    <>
      <JsonLd data={buildBreadcrumbJsonLd([{ name: "首页", path: "/" }])} />
      <JsonLd
        data={buildFaqJsonLd([
          {
            question: "云酥坊适合加拿大华人节日送礼吗？",
            answer:
              "适合。云酥坊围绕加拿大华人伴手礼、中秋送礼、春节伴手礼和家庭下午茶设计中式手工酥点与月饼礼盒。",
          },
          {
            question: "云酥坊的点心会不会太甜？",
            answer:
              "云酥坊强调低糖不腻和手工开酥，让蛋黄酥、花酥、凤梨酥和月饼礼盒更适合现代口味。",
          },
          {
            question: "加拿大可以预订中秋月饼礼盒吗？",
            answer:
              "可以先通过试吃登记或联系页面提交中秋月饼礼盒预订咨询，具体配送范围和批次请以云酥坊确认为准。",
          },
        ])}
      />
    </>
  );

  if (isMobileRequest) {
    return (
      <>
        {homeJsonLd}
        <MobileHomeSections />
      </>
    );
  }

  return (
    <div className="ysf-pc-home">
      {homeJsonLd}
      <HomeHero />
      <FeaturedProducts />
      <ProductSeries />
      <BrandStory />
      <Craftsmanship />
      <GiftSection />
      <TrialRegistration />
      <SeoFaqSection
        title="加拿大华人客户常见问题"
        description="围绕加拿大中式手工酥点、月饼礼盒、低糖点心和节日送礼，整理预订前最常见的几个问题。"
        faqs={[
          {
            question: "云酥坊主要做哪些中式手工酥点？",
            answer:
              "云酥坊 Yun Su Fang 主要筹备蛋黄酥、桃花酥、荷花酥、牡丹酥、凤梨酥、抹茶酥，以及适合中秋送礼的月饼礼盒。",
          },
          {
            question: "是否适合加拿大华人伴手礼和家庭聚会？",
            answer:
              "适合。云酥坊的国风点心强调送礼体面、低糖不腻和东方审美，适合华人家庭聚会、客户伴手礼、公司茶歇和节日礼盒。",
          },
          {
            question: "是否支持加拿大本地配送？",
            answer:
              "当前配送范围会根据批次和城市确认。多伦多、温哥华、蒙特利尔等加拿大华人客户如需本地配送、节日预订或企业团购，请联系云酥坊确认。",
          },
          {
            question: "云酥坊的点心是低糖的吗？",
            answer:
              "云酥坊产品方向是低糖不腻、手工开酥和新中式糕点口感，让蛋黄酥、花酥和月饼礼盒更适合现代下午茶与送礼场景。",
          },
          {
            question: "如何预订蛋黄酥或月饼礼盒？",
            answer:
              "可以通过新品试吃登记页留下需求，也可以在联系页面咨询中秋月饼礼盒、企业团购礼盒和加拿大中式酥点预订。",
          },
          {
            question: "是否支持企业团购礼盒？",
            answer:
              "支持企业团购咨询。云酥坊可根据节日送礼、客户伴手礼、员工福利和公司茶歇场景沟通礼盒组合。",
          },
        ]}
      />
      <SeoInternalLinks
        title="加拿大中式酥点与礼盒入口"
        description="从蛋黄酥、花酥到月饼礼盒，云酥坊为加拿大华人家庭准备适合送礼与分享的中式点心。"
        links={[
          { label: "浏览中式手工酥点系列", href: "/products", description: "查看蛋黄酥、花酥、凤梨酥、抹茶酥等国风点心。" },
          { label: "了解加拿大中秋月饼礼盒", href: "/mooncakes", description: "查看广式月饼、苏式鲜肉月饼和中秋礼盒预订说明。" },
          { label: "提交中式酥点试吃登记", href: "/reserve", description: "提前登记蛋黄酥试吃、月饼礼盒预订和企业团购需求。" },
        ]}
      />
    </div>
  );
}
