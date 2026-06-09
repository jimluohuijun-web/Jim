import type { Metadata } from "next";

import { ContactCollaboration } from "@/components/sections/contact-collaboration";
import { ContactCta } from "@/components/sections/contact-cta";
import { ContactEntryCards } from "@/components/sections/contact-entry-cards";
import { ContactHero } from "@/components/sections/contact-hero";
import { ContactRegion } from "@/components/sections/contact-region";
import { ContactSocial } from "@/components/sections/contact-social";
import { JsonLd } from "@/components/seo/json-ld";
import { SeoFaqSection, SeoInternalLinks } from "@/components/seo/seo-content-blocks";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildMetadata, pageSeoMap } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pageSeoMap.contact);

const contactFaqs = [
  {
    question: "联系云酥坊可以咨询哪些内容？",
    answer:
      "可以咨询加拿大中式手工酥点预订、蛋黄酥与花酥试吃、中秋月饼礼盒、企业团购、节日伴手礼和活动合作。",
  },
  {
    question: "企业团购和礼盒需求需要准备什么信息？",
    answer:
      "建议准备预算、数量、送礼时间、收礼对象、偏好口味和是否需要月饼或酥点组合，方便云酥坊确认批次与礼盒建议。",
  },
];

const contactLinks = [
  { label: "试吃登记", href: "/reserve", description: "提交新品试吃、月饼预订与礼盒提醒" },
  { label: "中式酥点礼盒", href: "/gift-box", description: "查看加拿大华人伴手礼与企业团购方案" },
  { label: "中秋月饼礼盒", href: "/mooncakes", description: "了解中秋月饼口味与礼盒入口" },
];

export default function ContactPage() {
  return (
    <main className="ysf-pc-home overflow-hidden bg-[#1A0F0A] text-[#E8CFA4]">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "首页", path: "/" },
          { name: "联系我们", path: "/contact" },
        ])}
      />
      <JsonLd data={buildFaqJsonLd(contactFaqs)} />
      <ContactHero />
      <ContactEntryCards />
      <ContactCollaboration />
      <ContactSocial />
      <ContactRegion />
      <ContactCta />
      <SeoFaqSection eyebrow="Contact FAQ｜联系常见问题" title="预订、礼盒与企业团购咨询" faqs={contactFaqs} />
      <SeoInternalLinks title="常用咨询入口" links={contactLinks} />
    </main>
  );
}
