import { articles } from "@/content/articles";
import { press } from "@/content/press";
import { type ResearchArticle, researchArticles } from "@/content/research";
import { site } from "@/content/site";

const HUBSPOT_AUTHOR = "https://blog.hubspot.com/marketing/author/josh-blyskal";

const altNames = ["Joshua Blyskal"];

const alumniOf = [
  {
    type: "Organization",
    name: "HubSpot",
    sameAs: "https://www.wikidata.org/wiki/Q5926631",
  },
  {
    type: "EducationalOrganization",
    name: "University of Illinois Urbana-Champaign",
    sameAs: "https://www.wikidata.org/wiki/Q457281",
  },
];

const knowsAbout = [
  { name: "Answer Engine Optimization", sameAs: "https://www.wikidata.org/wiki/Q97171941" },
  { name: "Generative Engine Optimization", sameAs: "https://www.wikidata.org/wiki/Q134083964" },
  { name: "Search Engine Optimization", sameAs: "https://www.wikidata.org/wiki/Q180711" },
];

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/#identity`,
  name: site.name,
  alternateName: altNames,
  url: site.url,
  image: `${site.url}${site.headshot}`,
  email: site.email,
  gender: "Male",
  nationality: "American",
  homeLocation: {
    "@type": "Place",
    name: site.location,
    sameAs: "https://www.wikidata.org/wiki/Q60",
  },
  sameAs: [...site.socials.map((s) => s.href), HUBSPOT_AUTHOR],
  jobTitle: site.role,
  worksFor: { "@type": "Organization", name: site.employer.name, url: site.employer.url },
  alumniOf: alumniOf.map((a) => ({ "@type": a.type, name: a.name, sameAs: a.sameAs })),
  description: site.bio,
  knowsAbout: knowsAbout.map((k) => ({ "@type": "Thing", name: k.name, sameAs: k.sameAs })),
  subjectOf: [
    ...[...press, ...articles]
      .filter((item) => !item.link.startsWith("/research/"))
      .map((item) => ({
        "@type": "Article",
        headline: item.title,
        url: item.link.startsWith("/") ? `${site.url}${item.link}` : item.link,
        publisher: { "@type": "Organization", name: item.outlet },
      })),
    ...researchArticles.map((study) => ({
      "@type": "Article",
      "@id": `${site.url}/research/${study.slug}#article`,
      headline: study.title,
      url: `${site.url}/research/${study.slug}`,
    })),
  ],
};

export function researchArticleJsonLd(study: ResearchArticle) {
  const articleUrl = `${site.url}/research/${study.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${articleUrl}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    headline: study.title,
    description: study.description,
    datePublished: study.date,
    image: `${site.url}${study.image}`,
    author: study.authors.map((author) =>
      author.profile
        ? { "@type": "Person", "@id": `${site.url}/#identity`, name: author.name }
        : { "@type": "Person", name: author.name, jobTitle: author.role },
    ),
    publisher: {
      "@type": "Person",
      "@id": `${site.url}/#identity`,
      name: site.name,
    },
    citation: study.sources.map((source) => ({
      "@type": "CreativeWork",
      name: source.name,
      url: source.url,
      publisher: {
        "@type": "Organization",
        name: source.publisher,
      },
    })),
    about: [
      { "@type": "Thing", name: "Answer Engine Optimization" },
      { "@type": "Thing", name: "AI search" },
    ],
    isPartOf: {
      "@type": "CollectionPage",
      "@id": `${site.url}/research#collection`,
      name: "AI search research",
    },
  };
}

export const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${site.url}/about#profile`,
  url: `${site.url}/about`,
  name: `About ${site.name}`,
  mainEntity: {
    "@type": "Person",
    "@id": `${site.url}/#identity`,
  },
};
