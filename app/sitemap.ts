import type { MetadataRoute } from "next";
import { getAllSymbols } from "@/lib/content";

const siteUrl = "https://eastern-mysticism-archive.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const symbols = getAllSymbols();

  const symbolUrls = symbols.map((symbol) => ({
    url: `${siteUrl}/symbols/${symbol.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/symbols`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...symbolUrls,
  ];
}