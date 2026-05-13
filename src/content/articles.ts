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
    title: "ChatGPT Intent: A Landmark Study",
    outlet: "Profound",
    description: "A deep dive into user intent classification within Large Language Models.",
    link: "https://www.tryprofound.com/blog/chatgpt-intent-landmark-study",
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
    title: "The Data on Reddit and AI Search",
    outlet: "Profound",
    description: "Why Reddit is winning the war for AI visibility and what brands can do about it.",
    link: "https://www.tryprofound.com/blog/the-data-on-reddit-and-ai-search",
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
