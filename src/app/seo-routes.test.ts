import { describe, expect, test } from "bun:test";
import { metadata as homeMetadata } from "@/app/page";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { metadata as smoothMetadata } from "@/app/smooth/layout";
import { site } from "@/content/site";

describe("indexable route inventory", () => {
  const sitemapEntries = sitemap();
  const urls = sitemapEntries.map((entry) => entry.url);

  test("keeps intended authority pages in the sitemap", () => {
    expect(urls).toContain(`${site.url}/speaking`);
    expect(urls).toContain(`${site.url}/research/reddit-ai-search-data`);
    expect(urls).toContain(`${site.url}/research/how-to-measure-ai-visibility`);
    expect(urls).toContain(`${site.url}/research/query-fanout`);
  });

  test("keeps private and redirect routes out of the sitemap", () => {
    expect(urls.some((url) => url.includes("/smooth"))).toBe(false);
    expect(urls).not.toContain(`${site.url}/media`);
    expect(urls).not.toContain(`${site.url}/methodology`);
  });

  test("does not emit duplicate URLs", () => {
    expect(new Set(urls).size).toBe(urls.length);
  });
});

describe("crawl directives and canonicals", () => {
  test("publishes the canonical homepage URL", () => {
    expect(homeMetadata.alternates?.canonical).toBe(site.url);
  });

  test("allows crawlers to read route-level noindex directives", () => {
    const rules = robots().rules;
    expect(rules).toEqual({ userAgent: "*", allow: "/" });
  });

  test("marks the private screenplay section noindex in HTML", () => {
    expect(smoothMetadata.robots).toEqual({ index: false, follow: false });
  });
});
