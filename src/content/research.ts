import type { ComponentType } from "react";
import * as chatgptIntent from "./research/chatgpt-intent-study";
import * as redditAiSearch from "./research/reddit-ai-search-data";
import * as stateOfAeo from "./research/state-of-aeo-2026";
import * as twoHundredFiftyMillion from "./research/two-hundred-fifty-million";

export type ResearchAuthor = {
  name: string;
  role: string;
  profile?: string;
};

export type ResearchSource = {
  name: string;
  publisher: string;
  url: string;
};

export type ResearchStudyNotes = {
  dataset?: readonly string[];
  collectionWindow?: string;
  products?: readonly string[];
  sample?: readonly string[];
  analysis?: readonly string[];
  contributors?: readonly string[];
  access?: readonly ResearchSource[];
  limitations?: readonly string[];
  detailsNotPublished?: string;
};

export type ResearchMeta = {
  slug: string;
  title: string;
  finding: string;
  date: string;
  modifiedDate?: string;
  readTime: string;
  description: string;
  excerpt: string;
  image: string;
  authors: readonly ResearchAuthor[];
  sources: readonly ResearchSource[];
  studyNotes?: ResearchStudyNotes;
};

export type ResearchArticle = ResearchMeta & {
  Body: ComponentType;
};

const modules: readonly { meta: ResearchMeta; default: ComponentType }[] = [
  stateOfAeo,
  twoHundredFiftyMillion,
  redditAiSearch,
  chatgptIntent,
];

export const researchArticles: readonly ResearchArticle[] = modules
  .map((study) => ({ ...study.meta, Body: study.default }))
  .sort((firstStudy, secondStudy) => secondStudy.date.localeCompare(firstStudy.date));

export const researchBySlug: Record<string, ResearchArticle> = Object.fromEntries(
  researchArticles.map((study) => [study.slug, study]),
);

export const relatedStudySlugs: Record<string, readonly string[]> = {
  "state-of-aeo-2026": ["250-million-ai-search-results", "reddit-ai-search-data"],
  "250-million-ai-search-results": ["state-of-aeo-2026", "chatgpt-intent-study"],
  "reddit-ai-search-data": ["250-million-ai-search-results", "state-of-aeo-2026"],
  "chatgpt-intent-study": ["250-million-ai-search-results", "state-of-aeo-2026"],
};

export const latestResearchDate = new Date(
  Math.max(
    ...researchArticles.map((study) => new Date(study.modifiedDate ?? study.date).getTime()),
  ),
);
