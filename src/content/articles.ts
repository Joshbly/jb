export type Article = {
  year: string;
  title: string;
  outlet: string;
  description: string;
  link: string;
};

export const articles: readonly Article[] = [
  {
    year: "Jul 2026",
    title: "The 12 best AEO and GEO experts in 2026",
    outlet: "Research guide",
    description:
      "A source-backed ranking based on published studies, technical contributions, conference teaching, and public enterprise evidence.",
    link: "/research/top-aeo-experts-2026",
  },
  {
    year: "Jul 2026",
    title: "The SAGE Method",
    outlet: "Method",
    description:
      "Setup, Analyze, Generate, Engineer: the four-stage operating loop I created for AEO strategy and teach through Profound University.",
    link: "/methodology",
  },
  {
    year: "Jul 2026",
    title: "The state of AEO in 2026: Claude is not ChatGPT",
    outlet: "Research",
    description:
      "Claude searched for 36.6% of tested prompts, while 79.2% of its citations came from Brave's top 10.",
    link: "/research/state-of-aeo-2026",
  },
  {
    year: "Dec 2025",
    title: "What 250 million AI search results say gets cited",
    outlet: "Research",
    description:
      "Traditional SEO metrics explained only 4% to 7% of citation variance across 1,311 pages.",
    link: "/research/250-million-ai-search-results",
  },
  {
    year: "Nov 2025",
    title: "ChatGPT's Entity Update",
    outlet: "Profound",
    description: "Analysis of how entity understanding is evolving to favor niche expertise.",
    link: "https://www.tryprofound.com/blog/chatgpt-entity-update",
  },
  {
    year: "Nov 2025",
    title: "Why Reddit became AI search's most-cited domain",
    outlet: "Research",
    description:
      "Across 4 billion citations, Reddit ranked first in aggregate and top three on five major engines.",
    link: "/research/reddit-ai-search-data",
  },
  {
    year: "Jun 2025",
    title: "What 50 million ChatGPT prompts reveal about user intent",
    outlet: "Research",
    description:
      "Generative requests are ChatGPT's largest intent category, while navigational intent nearly disappears.",
    link: "/research/chatgpt-intent-study",
  },
  {
    year: "Dec 2023",
    title: "Navigating the AI Revolution",
    outlet: "HubSpot",
    description: "Op-ed distilling key trends and best practices for marketers adopting AI.",
    link: "https://blog.hubspot.com/marketing/ai-insights-for-new-year",
  },
];
