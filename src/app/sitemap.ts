import type { MetadataRoute } from "next";
import { latestPostDate, posts } from "@/content/posts";
import { latestResearchDate, researchArticles } from "@/content/research";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestContentDate = new Date(
    Math.max(latestPostDate.getTime(), latestResearchDate.getTime()),
  );

  return [
    {
      url: site.url,
      lastModified: latestContentDate,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/research`,
      lastModified: latestResearchDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/research/methodology`,
      lastModified: latestResearchDate,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${site.url}/about`,
      lastModified: latestResearchDate,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    ...researchArticles.map((study) => ({
      url: `${site.url}/research/${study.slug}`,
      lastModified: new Date(study.date),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
    ...posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
