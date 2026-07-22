import { articles } from "@/content/articles";
import { press } from "@/content/press";
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
  subjectOf: [...press, ...articles].map((item) => ({
    "@type": "Article",
    headline: item.title,
    url: item.link,
    publisher: { "@type": "Organization", name: item.outlet },
  })),
};
