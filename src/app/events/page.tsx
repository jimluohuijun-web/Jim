import type { Metadata } from "next";

import { EventsCollaboration } from "@/components/sections/events-collaboration";
import { EventsCta } from "@/components/sections/events-cta";
import { EventsHero } from "@/components/sections/events-hero";
import { EventsPreview } from "@/components/sections/events-preview";
import { EventsProcess } from "@/components/sections/events-process";
import { JsonLd } from "@/components/seo/json-ld";
import { buildBreadcrumbJsonLd, buildMetadata, pageSeoMap } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pageSeoMap.events);

export default function EventsPage() {
  return (
    <main className="ysf-pc-home overflow-hidden bg-[#1A0F0A] text-[#E8CFA4]">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "首页", path: "/" },
          { name: "活动快闪", path: "/events" },
        ])}
      />
      <EventsHero />
      <EventsPreview />
      <EventsCollaboration />
      <EventsProcess />
      <EventsCta />
    </main>
  );
}
