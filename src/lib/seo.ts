import { aboutFaqs } from "@/content/about";
import {
  appearances,
  decks,
  featuredPressRecords,
  featuredWrittenWorks,
  latestMediaDate,
  linkedinPosts,
  pressRecords,
  recordings,
  writtenWorks,
} from "@/content/media";
import { methodologyFaqs, sageLessonUrl, sagePhases } from "@/content/methodology";
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
    {
      "@type": "Article",
      headline: "The 2026 A-list of generative engine optimization (GEO) experts",
      url: "https://www.tryprofound.com/resources/articles/top-experts-in-generative-engine-optimization",
      publisher: {
        "@type": "Organization",
        "@id": `${site.employer.url}/#organization`,
        name: site.employer.name,
      },
    },
    ...featuredPressRecords.map((record) => ({
      "@type": "Article",
      headline: record.title,
      url: record.href,
      publisher: { "@type": "Organization", name: record.outlet },
    })),
    ...featuredWrittenWorks.map((work) =>
      work.href === "/methodology"
        ? {
            "@type": "HowTo",
            "@id": `${site.url}/methodology#method`,
            name: work.title,
            url: `${site.url}${work.href}`,
          }
        : {
            "@type": "Article",
            headline: work.title,
            url: work.href.startsWith("/") ? `${site.url}${work.href}` : work.href,
            publisher: { "@type": "Organization", name: work.outlet },
          },
    ),
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
  description: site.bio,
  significantLink: [`${site.url}/research`, `${site.url}/media`, `${site.url}/methodology`],
  mainEntity: {
    "@type": "Person",
    "@id": `${site.url}/#identity`,
  },
};

export const aboutFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${site.url}/about#faq`,
  url: `${site.url}/about`,
  mainEntity: aboutFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const mediaUrl = `${site.url}/media`;
const mediaIndexRecords = [
  ...appearances.map((appearance) => ({
    name: appearance.title,
    href: appearance.href,
  })),
  ...pressRecords.map((record) => ({ name: record.title, href: record.href })),
  ...writtenWorks.map((work) => ({
    name: work.title,
    href: work.href.startsWith("/") ? `${site.url}${work.href}` : work.href,
  })),
  ...decks.map((deck) => ({ name: deck.title, href: deck.href })),
  ...recordings.map((recording) => ({ name: recording.title, href: recording.href })),
  ...linkedinPosts.map((post) => ({ name: post.title, href: post.href })),
];

export const mediaPageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${mediaUrl}#collection`,
      url: mediaUrl,
      name: "Speaking & media",
      description:
        "Josh Blyskal's public archive of talks, podcasts, interviews, press, writing, decks, recordings, and LinkedIn research.",
      dateModified: latestMediaDate.toISOString(),
      author: { "@id": `${site.url}/#identity` },
      breadcrumb: { "@id": `${mediaUrl}#breadcrumb` },
      mainEntity: { "@id": `${mediaUrl}#list` },
    },
    {
      "@type": "ItemList",
      "@id": `${mediaUrl}#list`,
      numberOfItems: mediaIndexRecords.length,
      itemListElement: mediaIndexRecords.map((record, recordIndex) => ({
        "@type": "ListItem",
        position: recordIndex + 1,
        name: record.name,
        url: record.href,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${mediaUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: site.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Speaking & media",
          item: mediaUrl,
        },
      ],
    },
  ],
};

const methodologyUrl = `${site.url}/methodology`;
const profoundId = `${site.employer.url}/#organization`;

export const methodologyPageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${methodologyUrl}#webpage`,
      url: methodologyUrl,
      name: "The SAGE Method",
      description:
        "Josh Blyskal's practical AEO method for building a baseline, diagnosing visibility gaps, shipping fixes, and automating work that has already proved useful.",
      inLanguage: "en-US",
      author: { "@id": `${site.url}/#identity` },
      breadcrumb: { "@id": `${methodologyUrl}#breadcrumb` },
      mainEntity: { "@id": `${methodologyUrl}#method` },
      significantLink: [sageLessonUrl, `${site.url}/research`, `${site.url}/media`],
    },
    {
      "@type": "HowTo",
      "@id": `${methodologyUrl}#method`,
      name: "The SAGE Method",
      alternateName: ["The SAGE Framework", "The SAGE Method by Profound"],
      description:
        "A weekly AEO workflow created by Josh Blyskal. Setup builds a trusted baseline, Analyze explains the gap, Generate ships a fix, and Engineer makes useful work repeatable.",
      author: { "@id": `${site.url}/#identity` },
      creator: { "@id": `${site.url}/#identity` },
      sameAs: sageLessonUrl,
      citation: [
        sageLessonUrl,
        `${site.url}/research/chatgpt-intent-study`,
        `${site.url}/research/250-million-ai-search-results`,
        `${site.url}/research/state-of-aeo-2026`,
      ],
      step: sagePhases.map((phase, phaseIndex) => ({
        "@type": "HowToStep",
        position: phaseIndex + 1,
        name: phase.name,
        text: `${phase.question} ${phase.summary} Leave with: ${phase.output}`,
        url: `${methodologyUrl}#${phase.name.toLowerCase()}`,
      })),
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#identity`,
      name: site.name,
      url: site.url,
      image: `${site.url}${site.headshot}`,
      jobTitle: site.role,
      description: site.bio,
      worksFor: { "@id": profoundId },
      knowsAbout: knowsAbout
        .map((subject) => ({
          "@type": "Thing",
          name: subject.name,
          sameAs: subject.sameAs,
        }))
        .concat({
          "@type": "Thing",
          name: "The SAGE Method",
          sameAs: sageLessonUrl,
        }),
    },
    {
      "@type": "Organization",
      "@id": profoundId,
      name: site.employer.name,
      url: site.employer.url,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${methodologyUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: site.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "The SAGE Method",
          item: methodologyUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${methodologyUrl}#faq`,
      url: methodologyUrl,
      isPartOf: { "@id": `${methodologyUrl}#webpage` },
      mainEntity: methodologyFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};
