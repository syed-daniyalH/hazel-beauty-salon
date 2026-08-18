import type { MetadataRoute } from "next";

import { HAZEL_PATHS } from "@/lib/hazel-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

  return HAZEL_PATHS.map((path) => ({
    url: `${baseUrl}${path.href === "/" ? "" : path.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path.href === "/" ? 1 : 0.8,
  }));
}

