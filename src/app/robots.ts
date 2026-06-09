import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/preview/", "/test-results/", "/_next/webpack-hmr"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
