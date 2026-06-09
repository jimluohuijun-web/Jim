import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/site-shell";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildBakeryJsonLd,
  buildMetadata,
  buildOrganizationJsonLd,
  buildWebSiteJsonLd,
  coreSeoKeywords,
  pageSeoMap,
  seoSite,
} from "@/lib/seo";

import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : seoSite.domain);

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoSite.defaultTitle,
    template: seoSite.titleTemplate,
  },
  description: seoSite.defaultDescription,
  keywords: [...coreSeoKeywords],
  applicationName: seoSite.name,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  alternates: buildMetadata(pageSeoMap.home).alternates,
  openGraph: buildMetadata(pageSeoMap.home).openGraph,
  twitter: buildMetadata(pageSeoMap.home).twitter,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans" className="h-full antialiased">
      <SiteShell>
        <JsonLd data={buildOrganizationJsonLd()} />
        <JsonLd data={buildBakeryJsonLd()} />
        <JsonLd data={buildWebSiteJsonLd()} />
        {children}
      </SiteShell>
    </html>
  );
}
