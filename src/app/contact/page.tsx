import type { Metadata } from "next";

import { ContactCollaboration } from "@/components/sections/contact-collaboration";
import { ContactCta } from "@/components/sections/contact-cta";
import { ContactEntryCards } from "@/components/sections/contact-entry-cards";
import { ContactHero } from "@/components/sections/contact-hero";
import { ContactRegion } from "@/components/sections/contact-region";
import { ContactSocial } from "@/components/sections/contact-social";

export const metadata: Metadata = {
  title: "联系我们｜云酥坊 yunsucake",
  description:
    "联系云酥坊，找到预约试吃、点心咨询、活动快闪合作、品牌故事和社交媒体占位等适合入口。当前为温哥华第一阶段准备期。",
};

export default function ContactPage() {
  return (
    <main className="ysf-pc-home overflow-hidden bg-[#1A0F0A] text-[#E8CFA4]">
      <ContactHero />
      <ContactEntryCards />
      <ContactCollaboration />
      <ContactSocial />
      <ContactRegion />
      <ContactCta />
    </main>
  );
}
