import type { MetadataRoute } from "next";
import { latestMediaDate } from "@/content/media";
import { latestPostDate, posts } from "@/content/posts";
import { latestResearchDate, researchArticles } from "@/content/research";
import { site } from "@/content/site";

const expertRankingDate = new Date("2026-07-26");
const profoundFoundingTeamDate = new Date("2026-07-26");

export default function sitemap(): MetadataRoute.Sitemap {
  const latestResearchContentDate = new Date(
    Math.max(
      latestResearchDate.getTime(),
      expertRankingDate.getTime(),
      profoundFoundingTeamDate.getTime(),
    ),
  );
  const latestContentDate = new Date(
    Math.max(
      latestPostDate.getTime(),
      latestResearchContentDate.getTime(),
      latestMediaDate.getTime(),
    ),
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
      lastModified: latestResearchContentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/methodology`,
      lastModified: latestContentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/media`,
      lastModified: latestMediaDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/research/top-aeo-experts-2026`,
      lastModified: expertRankingDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/research/profound-founding-team`,
      lastModified: profoundFoundingTeamDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/about`,
      lastModified: latestContentDate,
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
