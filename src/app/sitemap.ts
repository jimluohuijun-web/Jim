import type { MetadataRoute } from "next";

import { getJournalHref, journalArticles } from "@/data/brand-journal";
import { absoluteUrl } from "@/lib/seo";

const staticRoutes = [
  "/",
  "/products",
  "/reserve",
  "/about",
  "/events",
  "/contact",
  "/products/classic-egg-yolk-pastry",
  "/products/classic-pineapple-cake",
  "/products/matcha-pastry",
  "/products/peach-blossom-pastry",
  "/products/lotus-pastry",
  "/products/peony-pastry",
  "/products/egg-yolk-lotus-mooncake",
  "/products/red-bean-mooncake",
  "/products/five-nuts-mooncake",
  "/products/winter-melon-mooncake",
  "/products/suzhou-fresh-meat-mooncake",
  "/mooncakes",
  "/gift-box",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route),
      lastModified: now,
      changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "/" ? 1 : 0.7,
    })),
    ...journalArticles.map((article) => ({
      url: absoluteUrl(getJournalHref(article)),
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: article.featured ? 0.8 : 0.65,
    })),
  ];
}
