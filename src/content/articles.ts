export type Article = {
  year: string;
  title: string;
  outlet: string;
  description: string;
  link: string;
  tag: string;
};

export const articles: readonly Article[] = [
  {
    year: "June 2025",
    title: "What 50 Million ChatGPT Prompts Reveal About User Intent",
    outlet: "Research",
    description:
      "Generative requests are ChatGPT's largest intent category, while navigational intent nearly disappears.",
    link: "/research/chatgpt-intent-study",
    tag: "Research",
  },
  {
    year: "Nov 2025",
    title: "ChatGPT's Entity Update",
    outlet: "Profound",
    description: "Analysis of how entity understanding is evolving to favor niche expertise.",
    link: "https://www.tryprofound.com/blog/chatgpt-entity-update",
    tag: "Research",
  },
  {
    year: "Nov 2025",
    title: "Why Reddit Became AI Search's Most-Cited Domain",
    outlet: "Research",
    description:
      "Across 4 billion citations, Reddit ranked first in aggregate and top three on five major engines.",
    link: "/research/reddit-ai-search-data",
    tag: "Research",
  },
  {
    year: "Dec 2023",
    title: "Navigating the AI Revolution",
    outlet: "HubSpot",
    description: "Op-ed distilling key trends and best practices for marketers adopting AI.",
    link: "https://blog.hubspot.com/marketing/ai-insights-for-new-year",
    tag: "Early Op-Ed",
  },
];
