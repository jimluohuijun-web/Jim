import type { Metadata } from "next";

import { AboutCta } from "@/components/sections/about-cta";
import { AboutFounder } from "@/components/sections/about-founder";
import { AboutHero } from "@/components/sections/about-hero";
import { AboutJournal } from "@/components/sections/about-journal";
import { AboutStory } from "@/components/sections/about-story";
import { AboutValues } from "@/components/sections/about-values";
import { JsonLd } from "@/components/seo/json-ld";
import { SeoInternalLinks } from "@/components/seo/seo-content-blocks";
import { buildBreadcrumbJsonLd, buildMetadata, pageSeoMap } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pageSeoMap.about);

const aboutLinks = [
  { label: "产品系列", href: "/products", description: "了解蛋黄酥、花酥、凤梨酥与抹茶酥" },
  { label: "中秋月饼礼盒", href: "/mooncakes", description: "查看加拿大华人中秋月饼礼盒预告" },
  { label: "中式酥点礼盒", href: "/gift-box", description: "查看节日送礼、伴手礼和企业团购方案" },
  { label: "试吃登记", href: "/reserve", description: "加入新品酥点与月饼礼盒提醒名单" },
];

export default function AboutPage() {
  return (
    <main className="ysf-pc-home overflow-hidden bg-[#1A0F0A] text-[#E8CFA4]">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "首页", path: "/" },
          { name: "关于云酥坊", path: "/about" },
        ])}
      />
      <AboutHero />
      <AboutStory />
      <AboutJournal />
      <AboutValues />
      <AboutFounder />
      <AboutCta />
      <SeoInternalLinks title="继续了解云酥坊" links={aboutLinks} />
    </main>
  );
}
