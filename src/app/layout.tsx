import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteShell } from "@/components/layout/site-shell";
import { seoKeywords, siteConfig } from "@/data/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "云酥记 Yun Su Ji｜温哥华新中式手作甜点",
    template: "%s",
  },
  description: siteConfig.description,
  keywords: [...seoKeywords],
  applicationName: "云酥记 Yun Su Ji",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "云酥记 Yun Su Ji｜温哥华新中式手作甜点",
    description: siteConfig.description,
    siteName: "云酥记 Yun Su Ji",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "云酥记 Yun Su Ji｜云上酥香，一口东方",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "云酥记 Yun Su Ji｜温哥华新中式手作甜点",
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
    <html
      lang="zh-Hans"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <SiteShell>{children}</SiteShell>
    </html>
  );
}
