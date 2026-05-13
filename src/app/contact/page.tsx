import type { Metadata } from "next";

import { ContactCollaboration } from "@/components/sections/contact-collaboration";
import { ContactCta } from "@/components/sections/contact-cta";
import { ContactEntryCards } from "@/components/sections/contact-entry-cards";
import { ContactHero } from "@/components/sections/contact-hero";
import { ContactRegion } from "@/components/sections/contact-region";
import { ContactSocial } from "@/components/sections/contact-social";

export const metadata: Metadata = {
  title: "联系我们｜云酥记 Yun Su Ji",
  description:
    "联系云酥记，找到预约试吃、产品咨询、活动快闪合作、品牌故事和社交媒体占位等适合入口。当前为温哥华第一阶段准备期。",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactEntryCards />
      <ContactCollaboration />
      <ContactSocial />
      <ContactRegion />
      <ContactCta />
    </>
  );
}
