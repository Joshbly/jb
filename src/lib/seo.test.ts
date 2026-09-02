import { describe, expect, test } from "bun:test";
import { statSync } from "node:fs";
import { researchArticles } from "@/content/research";
import { site } from "@/content/site";
import { personJsonLd, researchArticleJsonLd, researchPageJsonLd } from "@/lib/seo";

describe("SEO entity graph", () => {
  test("keeps the global person entity focused", () => {
    expect(personJsonLd["@id"]).toBe(`${site.url}/#identity`);
    expect(personJsonLd.sameAs).toContain("https://linkedin.com/in/joshua-blyskal");
    expect(personJsonLd).not.toHaveProperty("subjectOf");
    expect(personJsonLd).not.toHaveProperty("gender");
    expect(personJsonLd).not.toHaveProperty("nationality");
  });

  test("defines the research collection referenced by articles", () => {
    const collectionId = `${site.url}/research#collection`;
    const collection = researchPageJsonLd["@graph"].find((node) => node["@id"] === collectionId);
    const itemList = researchPageJsonLd["@graph"].find(
      (node) => node["@id"] === `${site.url}/research#list`,
    );

    expect(collection?.["@type"]).toBe("CollectionPage");
    expect(itemList?.["@type"]).toBe("ItemList");
    expect(JSON.stringify(itemList)).toContain("/research/how-to-measure-ai-visibility");
    expect(JSON.stringify(itemList)).toContain("/research/query-fanout");

    for (const study of researchArticles) {
      expect(researchArticleJsonLd(study).isPartOf["@id"]).toBe(collectionId);
    }
  });
});

describe("social and source images", () => {
  test("uses a generated 1200 by 630 social image instead of a portrait photo", () => {
    expect(site.ogImage).toBe("/opengraph-image");
  });

  test("keeps optimized photo sources below one megabyte", () => {
    expect(statSync("public/images/header3.jpg").size).toBeLessThan(1_000_000);
    expect(statSync("public/images/header2.jpg").size).toBeLessThan(1_000_000);
  });
});
