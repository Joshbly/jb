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

export type ResearchMethodology = {
  dataSource: string;
  sampleSize: string;
  period: string;
  approach: string;
  limitations: string;
};

export type ResearchMeta = {
  slug: string;
  title: string;
  question: string;
  finding: string;
  date: string;
  readTime: string;
  description: string;
  excerpt: string;
  image: string;
  authors: readonly ResearchAuthor[];
  sources: readonly ResearchSource[];
  methodology: ResearchMethodology;
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

export const latestResearchDate = new Date(
  Math.max(...researchArticles.map((study) => new Date(study.date).getTime())),
);
