import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/site-shell";
import { seoKeywords, siteConfig } from "@/data/site";

import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "云酥坊 yunsucake｜新中式手作酥点",
    template: "%s",
  },
  description: siteConfig.description,
  keywords: [...seoKeywords],
  applicationName: "云酥坊 yunsucake",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "云酥坊 yunsucake｜新中式手作酥点",
    description: siteConfig.description,
    siteName: "云酥坊 yunsucake",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "云酥坊 yunsucake｜新中式手作酥点",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "云酥坊 yunsucake｜新中式手作酥点",
    description: siteConfig.description,
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans" className="h-full antialiased">
      <SiteShell>{children}</SiteShell>
    </html>
  );
}
