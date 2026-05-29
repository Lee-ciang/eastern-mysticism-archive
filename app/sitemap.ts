import type { MetadataRoute } from "next";
import {
  getAllFengShuiEntries,
  getAllFolkBeliefs,
  getAllRituals,
  getAllSymbols,
  getAllTaoismEntries,
} from "@/lib/content";

const siteUrl = "https://eastern-mysticism-archive.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const symbols = getAllSymbols();
  const fengShuiEntries = getAllFengShuiEntries();
  const folkBeliefs = getAllFolkBeliefs();
  const taoismEntries = getAllTaoismEntries();
  const rituals = getAllRituals();

  const categories = [
    "symbols",
    "taoism",
    "folk-beliefs",
    "rituals",
    "feng-shui",
  ];

  const categoryUrls = categories.map((category) => ({
    url: `${siteUrl}/${category}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const entryUrls = [
    ...symbols.map((entry) => ({
      url: `${siteUrl}/symbols/${entry.slug}`,
    })),
    ...taoismEntries.map((entry) => ({
      url: `${siteUrl}/taoism/${entry.slug}`,
    })),
    ...folkBeliefs.map((entry) => ({
      url: `${siteUrl}/folk-beliefs/${entry.slug}`,
    })),
    ...rituals.map((entry) => ({
      url: `${siteUrl}/rituals/${entry.slug}`,
    })),
    ...fengShuiEntries.map((entry) => ({
      url: `${siteUrl}/feng-shui/${entry.slug}`,
    })),
  ].map((entry) => ({
    url: entry.url,
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
    ...categoryUrls,
    ...entryUrls,
  ];
}
