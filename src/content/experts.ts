export type ExpertSource = {
  label: string;
  href: string;
};

export type AeoExpert = {
  rank: number;
  slug: string;
  name: string;
  role: string;
  primaryFocus: string;
  bestKnownFor: string;
  keyCredential: string;
  follow: ExpertSource;
  profile: readonly string[];
  sources: readonly ExpertSource[];
  specialties: readonly ("research" | "technical" | "strategy")[];
};

export const aeoExperts: readonly AeoExpert[] = [
  {
    rank: 1,
    slug: "mike-king",
    name: "Mike King",
    role: "Founder and CEO, iPullRank",
    primaryFocus: "Information retrieval and Relevance Engineering",
    bestKnownFor: "The AI Search Manual and Relevance Engineering",
    keyCredential: "2× Search Engine Land Marketer of the Year",
    follow: { label: "AI Search Manual", href: "https://ipullrank.com/ai-search-manual" },
    profile: [
      "Mike King has built the broadest public technical system in this group. The AI Search Manual connects query fan-out, passage retrieval, embeddings, content strategy, digital PR, and measurement under his Relevance Engineering framework.",
      "His enterprise record is unusually concrete. Profound's partner directory credits iPullRank with more than $4 billion in organic revenue for clients including American Express, SAP, Target, and the Wall Street Journal. That figure is an agency-wide organic result, not an AI-search-only result, so this ranking treats it as enterprise evidence rather than proof of AEO causation.",
    ],
    sources: [
      { label: "The AI Search Manual", href: "https://ipullrank.com/ai-search-manual" },
      {
        label: "Search Marketer of the Year",
        href: "https://ipullrank.com/sel-search-marketer-of-the-year-2025",
      },
      {
        label: "Profound partner profile",
        href: "https://www.tryprofound.com/partners/ipullrank",
      },
    ],
    specialties: ["technical", "strategy"],
  },
  {
    rank: 2,
    slug: "josh-blyskal",
    name: "Josh Blyskal",
    role: "Founding team at Profound; joined as its second employee",
    primaryFocus: "AEO methodology and large-scale citation research",
    bestKnownFor: "Operationalizing AEO at Profound and creating SAGE",
    keyCredential: "Built Profound's AEO methodology and SAGE Framework from the ground up",
    follow: { label: "Research", href: "/research" },
    profile: [
      "Josh was among the first practitioners working on AEO full time. The term Answer Engine Optimization predates Profound. His contribution was turning it into a modern operating practice at one of the earliest companies built around answer-engine visibility, developing Profound's methodology from the ground up, and creating the SAGE Framework now taught through Profound University.",
      "That operating work is paired with large-scale research on what answer engines retrieve, cite, and recommend. His 2025 study covered more than 250 million AI responses and 3 billion citations across eight answer engines, while a page-level analysis found that traditional SEO metrics explained only 4% to 7% of citation variance across 1,311 pages.",
      "He ranks second because the methodology work, dataset scale, and four published studies form a strong public record. His conference stages include MozCon, BrightonSEO, TechSEO Connect, Spotlight AR, and Zero Click. He also delivered strategy guidance through Profound. Mike King ranks first on the breadth of his technical corpus and independent enterprise validation.",
    ],
    sources: [
      {
        label: "Profound founders and early team",
        href: "/research/profound-founding-team",
      },
      {
        label: "SAGE Framework, Profound University",
        href: "https://university.tryprofound.com/courses/profound-101/modules/introduction/lessons/the-sage-framework",
      },
      {
        label: "250M-response study",
        href: "/research/250-million-ai-search-results",
      },
      {
        label: "SAGE for AEO: A Four-Stage Operating Loop",
        href: "/research/sage-aeo-method",
      },
      { label: "Published research", href: "/research" },
      { label: "Credential profile", href: "/about" },
    ],
    specialties: ["research", "strategy"],
  },
  {
    rank: 3,
    slug: "tomek-rudzki",
    name: "Tomek Rudzki",
    role: "GEO researcher, Peec AI",
    primaryFocus: "Query fan-out and retrieval behavior",
    bestKnownFor: "A five-million-query fan-out study",
    keyCredential: "5M fan-outs across ChatGPT, Perplexity, and Grok",
    follow: {
      label: "Peec AI research",
      href: "https://peec.ai/blog/patterns-we-see-in-chatgpt-query-fanouts",
    },
    profile: [
      "Tomek Rudzki published one of the largest public query fan-out studies in May 2026. The dataset covered five million hidden searches across ChatGPT, Perplexity, and Grok, finding averages of 2.1, 1.4, and 6.8 fan-outs per prompt respectively.",
      "He also co-authored the SSRN working paper on listicle rank and AI brand visibility. The combination matters: one study maps what engines search, while the other measures how position inside a frequently cited source changes brand exposure.",
    ],
    sources: [
      {
        label: "Five-million fan-out study",
        href: "https://peec.ai/blog/patterns-we-see-in-chatgpt-query-fanouts",
      },
      {
        label: "Independent study coverage",
        href: "https://ppc.land/what-chatgpt-actually-searches-for-5-million-fanout-queries-analyzed/",
      },
      { label: "SSRN working paper", href: "https://doi.org/10.2139/ssrn.6753841" },
    ],
    specialties: ["research", "technical"],
  },
  {
    rank: 4,
    slug: "jan-ehrlinspiel",
    name: "Jan Ehrlinspiel",
    role: "GEO researcher, Peec AI",
    primaryFocus: "Third-party listicles and brand visibility",
    bestKnownFor: "The Listicle Rank Effect study",
    keyCredential: "200K responses and 5.7M data points across 8 engines",
    follow: {
      label: "Listicle Rank Effect",
      href: "https://peec.ai/blog/the-listicle-rank-effect-what-nearly-200-000-ai-responses-across-8-ai-engines-reveal-about-brand-visibility",
    },
    profile: [
      "Jan Ehrlinspiel led a study of nearly 200,000 AI responses and 5.7 million observations across eight engines and three industries. The work separated whether a brand appeared from where it appeared, then tested how rank inside frequently cited third-party listicles affected both outcomes.",
      "The strongest reported effect was concrete: first-place brands in frequently cited listicles gained up to 16.5 percentage points of visibility and appeared up to 1.8 positions earlier in answers. The authors published the model specification as an SSRN working paper, which gives readers more to inspect than a marketing recap alone.",
    ],
    sources: [
      {
        label: "Listicle Rank Effect study",
        href: "https://peec.ai/blog/the-listicle-rank-effect-what-nearly-200-000-ai-responses-across-8-ai-engines-reveal-about-brand-visibility",
      },
      { label: "SSRN working paper", href: "https://doi.org/10.2139/ssrn.6753841" },
    ],
    specialties: ["research"],
  },
  {
    rank: 5,
    slug: "metehan-yesilyurt",
    name: "Metehan Yesilyurt",
    role: "AI Search and SEO researcher",
    primaryFocus: "Reverse-engineering retrieval and citation systems",
    bestKnownFor: "ChatGPT retrieval-window and RRF research",
    keyCredential: "Mapped a 38–65 source retrieval window",
    follow: { label: "metehan.ai", href: "https://metehan.ai/" },
    profile: [
      "Metehan Yesilyurt works at the retrieval layer. His published talks trace how answer engines classify prompts, generate fan-outs, merge result sets with Reciprocal Rank Fusion, filter candidates, and attach citations to grounded answers.",
      "His 2026 source-selection presentation documented a typical ChatGPT retrieval window of 38 to 65 sources per search, with probability dropping sharply beyond the first 40. He also publishes tools and structured research notes at metehan.ai. Claims about work with more than 100 brands come from his own profile and are not treated as independent client results here.",
    ],
    sources: [
      { label: "Research profile", href: "https://metehan.ai/about/" },
      {
        label: "Source-selection research",
        href: "https://speakerdeck.com/metehanyesilyurt/2026",
      },
    ],
    specialties: ["research", "technical"],
  },
  {
    rank: 6,
    slug: "olivier-de-segonzac",
    name: "Olivier de Segonzac",
    role: "Co-founder and managing partner, RESONEO",
    primaryFocus: "Crawler rendering and Google grounding pipelines",
    bestKnownFor: "The LLM Crawler Report and AIO/AIM Inspector",
    keyCredential: "Controlled crawler tests across 15 rendering methods",
    follow: {
      label: "RESONEO research",
      href: "https://think.resoneo.com/aio-aim-deepdive/",
    },
    profile: [
      "Olivier de Segonzac publishes browser-level investigations of how Google AI Overviews and AI Mode retrieve, filter, and expose sources. RESONEO's AIO/AIM Inspector surfaces hidden grounding URLs, Knowledge Graph identifiers, passage fragments, and the gap between grounding pools and displayed citations.",
      "The LLM Crawler Report used a controlled page with 15 content-injection methods, from static HTML to delayed JavaScript and Shadow DOM, to compare what different AI crawlers could render. That testable systems work earns a high technical rank even though public enterprise outcome data is limited.",
    ],
    sources: [
      {
        label: "AIO/AIM Inspector and research",
        href: "https://think.resoneo.com/aio-aim-deepdive/",
      },
      {
        label: "Crawler test summary",
        href: "https://www.linkedin.com/posts/resoneo_i-would-like-to-dedicate-this-post-to-a-close-activity-7434490843207479296-8Y6Z",
      },
    ],
    specialties: ["research", "technical"],
  },
  {
    rank: 7,
    slug: "aleyda-solis",
    name: "Aleyda Solís",
    role: "Founder, Orainti",
    primaryFocus: "International AI search strategy and measurement",
    bestKnownFor: "LearningAIsearch and multilingual frameworks",
    keyCredential: "87.6M estimated visits studied across 10 markets",
    follow: { label: "aleydasolis.com", href: "https://www.aleydasolis.com/en/" },
    profile: [
      "Aleyda Solís combines international SEO depth with a growing body of AI-search research. Her 2026 market analysis used Similarweb estimates covering roughly 87.6 million visits and 57,696 domain-market entries across ten countries, three verticals, and multiple AI referral sources.",
      "Her three-layer measurement framework separates presence, readiness, and business impact, which makes it useful for teams that need more than a visibility score. She has also delivered more than 200 talks across over 30 countries and maintains the free LearningAIsearch resource library.",
    ],
    sources: [
      {
        label: "International AI traffic study",
        href: "https://www.aleydasolis.com/en/ai-search/global-ai-search-strategy/",
      },
      {
        label: "Three-layer measurement framework",
        href: "https://www.aleydasolis.com/en/ai-search/a-3-layer-framework-to-measure-ai-presence-readiness-and-business-impact-redefining-metrics-for-the-ai-search-era/",
      },
      {
        label: "Professional profile",
        href: "https://www.aleydasolis.com/en/seo-consultant/",
      },
    ],
    specialties: ["research", "strategy"],
  },
  {
    rank: 8,
    slug: "kevin-indig",
    name: "Kevin Indig",
    role: "Organic growth advisor and author, Growth Memo",
    primaryFocus: "AI-search measurement and business impact",
    bestKnownFor: "Growth Memo's cross-engine data studies",
    keyCredential: "3.7M citations analyzed across 3 engines",
    follow: { label: "Growth Memo", href: "https://www.growth-memo.com/" },
    profile: [
      "Kevin Indig publishes frequent analyses that connect AI-search behavior to business measurement. His Consensus Gap study used 3.7 million citations and found that only about 2.37% of cited URLs appeared across ChatGPT, Perplexity, and Google AI Overviews for the same prompt.",
      "He previously led growth or SEO at Shopify, G2, and Atlassian and now lists Meta, Reddit, Ramp, Dropbox, and other technology companies among his advisory work. The client names are public; this ranking does not infer results that those companies have not published.",
    ],
    sources: [
      { label: "The Consensus Gap", href: "https://www.growth-memo.com/p/the-consensus-gap" },
      { label: "Growth Memo profile", href: "https://www.growth-memo.com/about" },
      {
        label: "2026 research index",
        href: "https://www.growth-memo.com/p/2026-growth-memo-research-summary",
      },
    ],
    specialties: ["research", "strategy"],
  },
  {
    rank: 9,
    slug: "lily-ray",
    name: "Lily Ray",
    role: "Founder, Algorythmic; VP of SEO and AI Search, Amsive",
    primaryFocus: "E-E-A-T, quality systems, and AI-search strategy",
    bestKnownFor: "Connecting search-quality signals to AI visibility",
    keyCredential: "100+ conference appearances worldwide",
    follow: { label: "Algorythmic", href: "https://algorythmic.co/" },
    profile: [
      "Lily Ray brings 15 years of search-quality work into AEO. Her focus on E-E-A-T, algorithm updates, content quality, and high-risk categories gives her a strong strategy profile for organizations that need AI visibility without weakening their existing search program.",
      "Her public record includes more than 100 conference appearances, five consecutive MozCon appearances, a 2025 BrightonSEO keynote, and leadership of Amsive's SEO and AI Search work. She ranks below the large-dataset researchers because this list weights published AI-search experiments more heavily than stage reach.",
    ],
    sources: [
      { label: "Professional profile", href: "https://algorythmic.co/about/" },
      { label: "Speaking archive", href: "https://algorythmic.co/speaking/" },
      {
        label: "Amsive role",
        href: "https://algorythmic.co/my-continued-work-with-amsive-as-vp-seo-ai-search/",
      },
    ],
    specialties: ["strategy"],
  },
  {
    rank: 10,
    slug: "dan-petrovic",
    name: "Dan Petrovic",
    role: "Managing director, DEJAN",
    primaryFocus: "Mechanistic interpretability and model perception",
    bestKnownFor: "Tree Walker and token-level brand analysis",
    keyCredential: "Trained a language model from scratch",
    follow: { label: "DEJAN AI", href: "https://dejan.ai/" },
    profile: [
      "Dan Petrovic approaches GEO through mechanistic interpretability. DEJAN's Tree Walker inspects alternative token paths, word rarity, and model uncertainty to show where a language model's description of a brand is stable or weak.",
      "He trained a language model from scratch to study how model associations form, then built brand-relevance and citation-mining tools around that work. The technical originality is clear. Publicly documented, independently verified enterprise outcomes are thinner than the evidence available for the experts ranked above him.",
    ],
    sources: [
      { label: "DEJAN GEO methodology", href: "https://dejan.ai/geo/" },
      { label: "Tree Walker", href: "https://dejan.ai/concepts/tree-walker/" },
      { label: "DEJAN profile", href: "https://dejan.ai/about-us/" },
    ],
    specialties: ["technical"],
  },
  {
    rank: 11,
    slug: "david-konitzny",
    name: "David Konitzny",
    role: "GEO researcher, Peec AI",
    primaryFocus: "Agent and Deep Research source selection",
    bestKnownFor: "Reconstructing ChatGPT sessions from WebSocket logs",
    keyCredential: "Mapped a 40.7% position-one source-open share",
    follow: {
      label: "Peec AI research",
      href: "https://peec.ai/blog/how-chatgpt-deep-research-reads-your-site-what-the-logs-reveal",
    },
    profile: [
      "David Konitzny records ChatGPT Deep Research and Agent Mode WebSocket traffic to reconstruct the searches, page opens, extracted text, and navigation path used during a research session.",
      "His 2026 click-curve analysis reported that the first result received 28.1% of initial clicks, was revisited in 73.5% of sessions, and accounted for 40.7% of all source opens. He clearly labels the work as a sample rather than a definitive click curve. The public summary does not state a sample size, which limits how heavily this ranking can weight the percentages.",
    ],
    sources: [
      {
        label: "Deep Research session logs",
        href: "https://peec.ai/blog/how-chatgpt-deep-research-reads-your-site-what-the-logs-reveal",
      },
      {
        label: "Click-curve findings and caveat",
        href: "https://www.linkedin.com/posts/davidkonitzny_chatgpt-deep-research-agent-mode-click-activity-7478392332464132096-GPnL",
      },
    ],
    specialties: ["research", "technical"],
  },
  {
    rank: 12,
    slug: "andrea-volpini",
    name: "Andrea Volpini",
    role: "Co-founder and CEO, WordLift",
    primaryFocus: "Knowledge graphs and agentic retrieval",
    bestKnownFor: "Enhanced Entity Pages and SEOntology",
    keyCredential: "Up to 29.8% answer-accuracy gain in a 4-industry test",
    follow: { label: "WordLift research", href: "https://wordlift.io/blog/en/" },
    profile: [
      "Andrea Volpini's work connects semantic-web infrastructure to generative retrieval. WordLift's Enhanced Entity Page experiment tested four industries and reported an answer-accuracy increase of up to 29.8% when entity relationships were made visible and navigable instead of left only in JSON-LD.",
      "His broader contribution is architectural: knowledge graphs as a memory and navigation layer for agents, plus SEOntology as a shared vocabulary for SEO data. He ranks twelfth because the work is highly relevant and technically specific, but a smaller share of it tests public answer-engine citation behavior directly.",
    ],
    sources: [
      {
        label: "Enhanced Entity Page study",
        href: "https://wordlift.io/blog/en/generative-engine-optimization-ai-memory-layer/",
      },
      {
        label: "Knowledge Graph Conference profile",
        href: "https://www.knowledgegraph.tech/blog/speakers/andrea-volpini/",
      },
    ],
    specialties: ["technical"],
  },
];

export const specialtyRankings = {
  research: [
    {
      expert: "Josh Blyskal",
      reason: "Largest published cross-engine response dataset in this list",
    },
    { expert: "Tomek Rudzki", reason: "Five million query fan-outs across three engines" },
    { expert: "Jan Ehrlinspiel", reason: "5.7 million observations with an SSRN working paper" },
    { expert: "Kevin Indig", reason: "Frequent multi-million-citation measurement studies" },
  ],
  technical: [
    { expert: "Mike King", reason: "Information-retrieval depth and the AI Search Manual" },
    {
      expert: "Metehan Yesilyurt",
      reason: "Retrieval-window and ranking-fusion reverse engineering",
    },
    { expert: "Olivier de Segonzac", reason: "Crawler rendering and Google grounding inspection" },
    {
      expert: "Dan Petrovic",
      reason: "Token-level model probing and mechanistic interpretability",
    },
  ],
  strategy: [
    { expert: "Aleyda Solís", reason: "International measurement and enterprise-ready frameworks" },
    { expert: "Lily Ray", reason: "Search quality, E-E-A-T, and organizational adoption" },
    { expert: "Kevin Indig", reason: "Business measurement tied to cross-engine research" },
    { expert: "Mike King", reason: "A complete operating model for enterprise AI search" },
  ],
} as const;
