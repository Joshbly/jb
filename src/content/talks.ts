export type Talk = {
  year: string;
  conference: string;
  location: string;
  title: string;
  description: string;
  link?: string;
  video?: string;
};

export const talks: readonly Talk[] = [
  {
    year: "December 2025",
    conference: "TechSEO Connect",
    location: "Durham, NC, USA",
    title: "We analyzed 250 million AI search results: here's what we found",
    description:
      "Deep dive into Profound's largest research study analyzing AI search patterns across 8 answer engines.",
    link: "https://speakerdeck.com/joshbly/we-analyzed-250-million-ai-search-results-heres-what-i-found",
    video: "https://www.youtube.com/watch?v=ll_kZh5GVX0",
  },
  {
    year: "October 2025",
    conference: "Zero Click",
    location: "NYC, NY, USA",
    title: "The Machine Customer Era",
    description:
      "Inaugural AI Search conference. Topic: how AI agents are becoming the primary customer.",
    link: "https://speakerdeck.com/joshbly/the-machine-customer-era-zero-click-2025",
    video: "https://www.youtube.com/watch?v=pBe1BcuVqBw",
  },
  {
    year: "Sept 2025",
    conference: "Spotlight AR",
    location: "Kansas City, MO, USA",
    title: "If Gen AI can't find you, neither can your buyers",
    description: "How analyst relations is now at the center of B2B AI visibility.",
    video: "https://www.youtube.com/watch?v=twkME1D_IhM",
  },
  {
    year: "Sept 2025",
    conference: "BrightonSEO",
    location: "San Diego, CA, USA",
    title: "I analyzed 40 million search results: here's what I found",
    description: "Expanding research on ChatGPT, Perplexity, and SGE patterns for US markets.",
    link: "https://speakerdeck.com/joshbly/josh-blyskal-profound-i-analyzed-40-million-search-results-heres-what-i-found",
  },
  {
    year: "April 2025",
    conference: "BrightonSEO",
    location: "Brighton, UK",
    title: "I analyzed 10,000,000 AI search results: here's what I found",
    description:
      "Revealing how AI-powered search results differ dramatically from traditional Google results.",
    link: "https://speakerdeck.com/joshbly/josh-blyskal-profound-we-analyed-10000-000-ai-search-results-dot-dot-dot",
    video: "https://www.youtube.com/watch?v=slE1sgPReTM",
  },
];

export const speakingTopics = [
  "AI Answer Engine Optimization (AEO)",
  "Large Language Model (LLM) Search Behavior",
  "AI-Driven Consumer Intent Analysis",
  "Entity-Based SEO Strategy",
  "The Transition from Search to Answer Engines",
] as const;
