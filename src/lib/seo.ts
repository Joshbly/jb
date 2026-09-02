import {
  type Appearance,
  appearances,
  decks,
  latestArchiveDate,
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
  sameAs: [...site.socials.map((s) => s.href), HUBSPOT_AUTHOR],
  jobTitle: site.role,
  worksFor: { "@type": "Organization", name: site.employer.name, url: site.employer.url },
  alumniOf: alumniOf.map((a) => ({ "@type": a.type, name: a.name, sameAs: a.sameAs })),
  description: site.bio,
  knowsAbout: knowsAbout.map((k) => ({ "@type": "Thing", name: k.name, sameAs: k.sameAs })),
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
    dateModified: study.modifiedDate ?? study.date,
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
  significantLink: [
    `${site.url}/research`,
    `${site.url}/research/findings`,
    `${site.url}/research/what-is-answer-engine-optimization`,
    `${site.url}/research/how-to-measure-ai-visibility`,
    `${site.url}/research/query-fanout`,
    `${site.url}/research/profound-founding-team`,
    `${site.url}/research/sage-aeo-method`,
    `${site.url}/speaking`,
    `${site.url}/archive`,
  ],
  mainEntity: {
    "@type": "Person",
    "@id": `${site.url}/#identity`,
  },
};

const researchUrl = `${site.url}/research`;
const researchIndexRecords = [
  ...researchArticles.map((study) => ({
    name: study.title,
    url: `${researchUrl}/${study.slug}`,
  })),
  {
    name: "AI search statistics and research findings",
    url: `${researchUrl}/findings`,
  },
  {
    name: "What is answer engine optimization (AEO)?",
    url: `${researchUrl}/what-is-answer-engine-optimization`,
  },
  {
    name: "How to measure AI visibility",
    url: `${researchUrl}/how-to-measure-ai-visibility`,
  },
  {
    name: "Query fan-out: how AI search turns one prompt into many searches",
    url: `${researchUrl}/query-fanout`,
  },
  {
    name: "SAGE for AEO: A Four-Stage Operating Loop",
    url: `${researchUrl}/sage-aeo-method`,
  },
  {
    name: "Profound's founding team: founders and first employees",
    url: `${researchUrl}/profound-founding-team`,
  },
  {
    name: "The 12 best AEO and GEO experts in 2026",
    url: `${researchUrl}/top-aeo-experts-2026`,
  },
] as const;

export const researchPageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${researchUrl}#collection`,
      url: researchUrl,
      name: "AI search research",
      description:
        "Original studies, operating methods, and source-backed reference work by Josh Blyskal on retrieval, citations, user intent, measurement, and AI search.",
      dateModified: "2026-09-02",
      author: { "@id": `${site.url}/#identity` },
      breadcrumb: { "@id": `${researchUrl}#breadcrumb` },
      mainEntity: { "@id": `${researchUrl}#list` },
    },
    {
      "@type": "ItemList",
      "@id": `${researchUrl}#list`,
      numberOfItems: researchIndexRecords.length,
      itemListElement: researchIndexRecords.map((record, recordIndex) => ({
        "@type": "ListItem",
        position: recordIndex + 1,
        name: record.name,
        url: record.url,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${researchUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Research", item: researchUrl },
      ],
    },
  ],
};

const archiveUrl = `${site.url}/archive`;
const archiveIndexRecords = [
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

export const archivePageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${archiveUrl}#collection`,
      url: archiveUrl,
      name: "Archive",
      description:
        "Josh Blyskal's public archive of talks, podcasts, interviews, press, writing, decks, recordings, and LinkedIn research.",
      dateModified: latestArchiveDate.toISOString(),
      author: { "@id": `${site.url}/#identity` },
      breadcrumb: { "@id": `${archiveUrl}#breadcrumb` },
      mainEntity: { "@id": `${archiveUrl}#list` },
    },
    {
      "@type": "ItemList",
      "@id": `${archiveUrl}#list`,
      numberOfItems: archiveIndexRecords.length,
      itemListElement: archiveIndexRecords.map((record, recordIndex) => ({
        "@type": "ListItem",
        position: recordIndex + 1,
        name: record.name,
        url: record.href,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${archiveUrl}#breadcrumb`,
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
          name: "Archive",
          item: archiveUrl,
        },
      ],
    },
  ],
};

type RecordedAppearance = Appearance & { recording: string };

const speakingUrl = `${site.url}/speaking`;
const techSeoRecording = appearances.find(
  (appearance) => appearance.id === "2025-12-05-techseo-connect",
) as RecordedAppearance;
const brightonRecording = appearances.find(
  (appearance) => appearance.id === "2025-04-11-brightonseo-uk",
) as RecordedAppearance;

const speakingVideos = [
  {
    appearance: brightonRecording,
    name: "We Analyzed 10,000,000 AI Prompts: Here's what we found",
    uploadDate: "2025-05-23T12:57:51-07:00",
    duration: "PT19M39S",
  },
  {
    appearance: techSeoRecording,
    name: "We Analyzed 250,000,000 AI Search Responses: Here's What We Found",
    uploadDate: "2025-12-05T09:42:41-08:00",
    duration: "PT28M28S",
  },
].map(({ appearance, name, uploadDate, duration }) => {
  const videoId = new URL(appearance.recording).searchParams.get("v") as string;

  return {
    "@type": "VideoObject",
    "@id": `${speakingUrl}#video-${appearance.id}`,
    name,
    description: appearance.summary,
    thumbnailUrl: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    uploadDate,
    duration,
    contentUrl: appearance.recording,
    embedUrl: `https://www.youtube.com/embed/${videoId}`,
    inLanguage: "en",
    creator: { "@id": `${site.url}/#identity` },
    recordedAt: {
      "@type": "Event",
      name: appearance.event,
      startDate: appearance.date,
      location: {
        "@type": "Place",
        name: appearance.location,
      },
    },
    isPartOf: { "@id": `${speakingUrl}#webpage` },
  };
});

export const speakingPageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${speakingUrl}#webpage`,
      url: speakingUrl,
      name: `Speaking | ${site.name}`,
      description:
        "Talks and booking information for Josh Blyskal, an AI search researcher and speaker.",
      about: { "@id": `${site.url}/#identity` },
      mainEntity: { "@id": `${site.url}/#identity` },
      hasPart: speakingVideos.map((video) => ({ "@id": video["@id"] })),
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#identity`,
      name: site.name,
      url: site.url,
      image: `${site.url}${site.headshot}`,
    },
    ...speakingVideos,
  ],
};

const sageMethodUrl = `${site.url}/research/sage-aeo-method`;
const sageMethodTitle = "SAGE for AEO: A Four-Stage Operating Loop";
const sageMethodDescription =
  "SAGE is Josh Blyskal's AEO strategy framework for organizing setup, analysis, execution, measurement, and repeatable workflows, taught in Profound 101.";
const sageLessonId = `${sageLessonUrl}#learning-resource`;
const profoundId = `${site.employer.url}/#organization`;

export const methodologyPageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${sageMethodUrl}#webpage`,
      url: sageMethodUrl,
      name: sageMethodTitle,
      description: sageMethodDescription,
      inLanguage: "en-US",
      breadcrumb: { "@id": `${sageMethodUrl}#breadcrumb` },
      mainEntity: { "@id": `${sageMethodUrl}#article` },
      isPartOf: {
        "@type": "CollectionPage",
        "@id": `${site.url}/research#collection`,
        name: "AI search research",
      },
      relatedLink: [sageLessonUrl],
    },
    {
      "@type": "TechArticle",
      "@id": `${sageMethodUrl}#article`,
      url: sageMethodUrl,
      headline: sageMethodTitle,
      description: sageMethodDescription,
      mainEntityOfPage: { "@id": `${sageMethodUrl}#webpage` },
      datePublished: "2026-07-26",
      dateModified: "2026-09-02",
      inLanguage: "en-US",
      image: `${site.url}${site.ogImage}`,
      author: {
        "@type": "Person",
        "@id": `${site.url}/#identity`,
        name: site.name,
        url: site.url,
      },
      creator: {
        "@type": "Person",
        "@id": `${site.url}/#identity`,
        name: site.name,
        url: site.url,
      },
      about: [
        { "@type": "Thing", name: "Answer Engine Optimization" },
        {
          "@type": "Thing",
          name: "SAGE",
          alternateName: "The SAGE Framework",
        },
      ],
      articleSection: sagePhases.map((phase) => phase.name),
      citation: [
        { "@id": sageLessonId },
        `${site.url}/research/chatgpt-intent-study`,
        `${site.url}/research/250-million-ai-search-results`,
        `${site.url}/research/state-of-aeo-2026`,
      ],
    },
    {
      "@type": "LearningResource",
      "@id": sageLessonId,
      url: sageLessonUrl,
      name: "The SAGE Framework",
      description: "A six-minute Profound 101 lesson introducing the SAGE operating loop.",
      learningResourceType: "Lesson",
      provider: { "@id": profoundId },
      about: { "@type": "Thing", name: "Answer Engine Optimization" },
      teaches: sagePhases.map((phase) => `${phase.name}: ${phase.output}`),
    },
    {
      "@type": "Organization",
      "@id": profoundId,
      name: site.employer.name,
      url: site.employer.url,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${sageMethodUrl}#breadcrumb`,
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
          name: "Research",
          item: `${site.url}/research`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: sageMethodTitle,
          item: sageMethodUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${sageMethodUrl}#faq`,
      url: `${sageMethodUrl}#methodology-faq`,
      isPartOf: { "@id": `${sageMethodUrl}#webpage` },
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
