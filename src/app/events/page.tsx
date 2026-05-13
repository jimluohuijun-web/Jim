import type { Metadata } from "next";

import { EventsCollaboration } from "@/components/sections/events-collaboration";
import { EventsCta } from "@/components/sections/events-cta";
import { EventsHero } from "@/components/sections/events-hero";
import { EventsPreview } from "@/components/sections/events-preview";
import { EventsProcess } from "@/components/sections/events-process";

export const metadata: Metadata = {
  title: "活动 / 快闪｜云酥坊温哥华计划",
  description:
    "查看云酥坊 2026 年 7-8 月温哥华第一阶段活动计划预告，包括小批量试吃、下午茶分享、礼盒咨询和轻量快闪合作意向。",
};

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <EventsPreview />
      <EventsCollaboration />
      <EventsProcess />
      <EventsCta />
    </>
  );
}
