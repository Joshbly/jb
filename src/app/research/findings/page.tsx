import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { SubpageNav } from "@/components/layout/SubpageNav";
import { DisplayH2, Section, SectionHeader } from "@/components/shared/Section";
import { sageEvidence, sagePhases } from "@/content/methodology";
import { site } from "@/content/site";

const pageUrl = `${site.url}/research/findings`;
const pageTitle = "AI search statistics and research findings";
const metadataTitle = "AI Search Statistics 2026: Original Research | Josh Blyskal";
const description =
  "Original AI search statistics updated for 2026 from Josh Blyskal on citations, ChatGPT, Claude, Reddit, and AEO, with samples, methods, and limitations.";
const publishedDate = "2026-08-03";
const modifiedDate = "2026-09-02";

type FindingSource = {
  label: string;
  href: string;
};

type FindingRow = {
  id: string;
  metric: string;
  value: string;
  finding: string;
  sample: string;
  period: string;
  caveat: string;
  source: FindingSource;
};

type EmpiricalStudy = {
  id: string;
  title: string;
  shortTitle: string;
  published: string;
  description: string;
  scope: string;
  method: string;
  authors: readonly string[];
  contributors: readonly string[];
  fullWriteup: string;
  originalSources: readonly FindingSource[];
  limitations: readonly string[];
  findings: readonly FindingRow[];
};

const headlineFindings = [
  {
    id: "generative-intent",
    question: "What is the largest category of ChatGPT prompt intent?",
    answer:
      "Generative requests were the largest intent category at 37.5% of the classified sample drawn from a corpus of more than 50 million real ChatGPT prompts. The published source does not report the classified-sample size or collection window.",
    value: "37.5%",
    finding: "of classified prompts asked ChatGPT to create, draft, or complete something.",
    study: "50M+ ChatGPT prompt study",
    sample: "Classified sample from 50M+ prompts; classified n unpublished",
    href: "/research/chatgpt-intent-study",
  },
  {
    id: "seo-variance",
    question: "How much AI citation variance did traditional SEO metrics explain?",
    answer:
      "Across 1,311 pages, the tested traditional SEO metrics explained 4% to 7% of citation variance. The association was statistically reliable at p<0.001, but the observational analysis does not establish causation.",
    value: "4–7%",
    finding: "of citation variance was explained by the tested traditional SEO metrics.",
    study: "250M-response analysis",
    sample: "1,311 pages",
    href: "/research/250-million-ai-search-results",
  },
  {
    id: "citation-formats",
    question: "Which page formats supplied most classified AI citations?",
    answer:
      "Blogs and opinion pages supplied 34.2% of 8,500 classified citations, while comparison pages and listicles supplied 27.3%. Together, the two formats accounted for 61.5% of the classified set.",
    value: "61.5%",
    finding: "of classified citations came from blogs, opinion, comparisons, or listicles.",
    study: "250M-response analysis",
    sample: "8,500 classified citations",
    href: "/research/250-million-ai-search-results",
  },
  {
    id: "product-page-detail",
    question: "How did frequently shown product pages differ from the least shown group?",
    answer:
      "Among 16,000 product-detail pages observed from October 2 through November 2, 2025, the most frequently shown pages had 848% more FAQs and 103% more videos than the least shown group. The comparison is descriptive and does not establish that either feature caused visibility.",
    value: "+848% FAQs",
    finding: "on frequently shown product pages than on the least shown group.",
    study: "250M-response analysis",
    sample: "16,000 product-detail pages",
    href: "/research/250-million-ai-search-results",
  },
  {
    id: "claude-brave",
    question: "What share of Claude citations also appeared in Brave's top 10?",
    answer:
      "Across roughly 35,000 URLs associated with 400 tested queries, 79.2% of Claude's cited URLs also appeared in Brave positions one through ten. The observed match does not by itself prove that Brave directly caused Claude's source selection.",
    value: "79.2%",
    finding: "of Claude's cited URLs appeared in Brave's first ten results.",
    study: "State of AEO 2026",
    sample: "~35,000 URLs across 400 queries",
    href: "/research/state-of-aeo-2026",
  },
  {
    id: "cross-engine-overlap",
    question: "How much did Claude and ChatGPT citation domains overlap?",
    answer:
      "Across more than 600 tested queries, Claude and ChatGPT shared 8% of citation domains on average. The public materials do not report the overlap formula, collection window, or per-engine citation counts.",
    value: "8%",
    finding: "average citation-domain overlap between Claude and ChatGPT.",
    study: "State of AEO 2026",
    sample: "600+ queries; domain-level comparison",
    href: "/research/state-of-aeo-2026",
  },
  {
    id: "reddit-share",
    question: "What was the most-cited domain across the tracked answer engines?",
    answer:
      "Reddit ranked first in the aggregate analysis with 3.11% of more than 4 billion citations across the tracked answer engines from August 2024 through late October 2025. The pooled result masks engine differences, including a number 31 rank on Microsoft Copilot.",
    value: "3.11%",
    finding: "aggregate citation share made Reddit the most-cited domain in the measured set.",
    study: "Reddit citation study",
    sample: "4B+ citations and 300M responses",
    href: "/research/reddit-ai-search-data",
  },
  {
    id: "natural-language-urls",
    question: "Were natural-language URL slugs more common among highly cited pages?",
    answer:
      "In a comparison of 50,000 highly cited and 50,000 low-cited URLs, four-to-seven-word natural-language slugs were 11.4% more common in the highly cited group. This is observational enrichment, not evidence that changing a URL causes citation growth.",
    value: "+11.4%",
    finding: "more common among highly cited URLs for four-to-seven-word slugs.",
    study: "250M-response analysis",
    sample: "50,000 highly cited vs. 50,000 low-cited URLs",
    href: "/research/250-million-ai-search-results",
  },
] as const;

const chatgptIntentStudy: EmpiricalStudy = {
  id: "chatgpt-intent",
  title: "What 50 million ChatGPT prompts reveal about user intent",
  shortTitle: "50M+ ChatGPT prompt study",
  published: "June 25, 2025",
  description:
    "A prompt-intent study separating generative, informational, commercial, transactional, navigational, and connective conversational turns.",
  scope:
    "More than 50 million real ChatGPT prompts surfaced through Profound Prompt Volumes. The published percentages describe a classified sample drawn from that corpus.",
  method:
    "Prompt-intent classification, category-share calculation, and comparison of four shared categories with a published traditional-search baseline.",
  authors: ["Josh Blyskal", "Sartaj Rajpal"],
  contributors: [],
  fullWriteup: "/research/chatgpt-intent-study",
  originalSources: [
    {
      label: "Original Profound report",
      href: "https://www.tryprofound.com/blog/chatgpt-intent-landmark-study",
    },
  ],
  limitations: [
    "The classified-sample size, collection window, labeling procedure, traditional-search baseline source, and raw data are not public.",
    "The unit is prompts, not unique users. Follow-up turns are included, so the shares are not equivalent to first-turn search demand.",
  ],
  findings: [
    {
      id: "intent-generative",
      metric: "Generative intent",
      value: "37.5%",
      finding:
        "Generative requests were the largest category, five percentage points above informational prompts.",
      sample: "Classified sample from a 50M+ prompt corpus; classified n unpublished",
      period: "Collection window unpublished; report published June 25, 2025",
      caveat:
        "A generative prompt asks the model to produce an output, not simply retrieve information.",
      source: { label: "Full study", href: "/research/chatgpt-intent-study" },
    },
    {
      id: "intent-informational",
      metric: "Informational intent",
      value: "32.7%",
      finding: "Almost one-third of classified prompts asked for information or explanation.",
      sample: "Same classified sample; n unpublished",
      period: "Collection window unpublished",
      caveat: "The share was 20 percentage points below the traditional-search baseline used.",
      source: { label: "Full study", href: "/research/chatgpt-intent-study" },
    },
    {
      id: "intent-navigational",
      metric: "Navigational intent",
      value: "2.1%",
      finding:
        "Navigational prompts were 30.1 percentage points below the 32.2% traditional-search baseline.",
      sample: "Same classified sample; n unpublished",
      period: "Collection window unpublished",
      caveat:
        "The baseline source and its sampling method are not identified in the public report.",
      source: { label: "Full study", href: "/research/chatgpt-intent-study" },
    },
    {
      id: "intent-transactional",
      metric: "Transactional intent",
      value: "6.1%",
      finding:
        "Transactional prompts were 5.5 percentage points above the 0.6% traditional-search baseline.",
      sample: "Same classified sample; n unpublished",
      period: "Collection window unpublished",
      caveat: "A prompt can express purchase intent even when the transaction happens elsewhere.",
      source: { label: "Full study", href: "/research/chatgpt-intent-study" },
    },
    {
      id: "intent-no-intent",
      metric: "Connective turns",
      value: "12.1%",
      finding:
        "Turns such as thanks, please, and revision requests did not fit a conventional search intent.",
      sample: "Same classified sample; n unpublished",
      period: "Collection window unpublished",
      caveat: "Conversation logs contain dependent turns that keyword datasets usually omit.",
      source: { label: "Full study", href: "/research/chatgpt-intent-study" },
    },
  ],
};

const citationStudy: EmpiricalStudy = {
  id: "250-million",
  title: "What 250 million AI search results say gets cited",
  shortTitle: "250M-response analysis",
  published: "December 8, 2025",
  description:
    "A collection of analyses on SEO metrics, page formats, retrieval snippets, query fanout, freshness, URLs, and product-detail pages.",
  scope:
    "More than 250 million responses and 3 billion citations observed across ChatGPT, Perplexity, Google AI Overviews, Google AI Mode, Gemini, Copilot, Claude, and Meta AI.",
  method:
    "Several published subsamples were analyzed separately: association modeling, content classification, high-versus-low citation URL comparison, query-fanout comparison, and descriptive product-page analysis.",
  authors: ["Josh Blyskal"],
  contributors: [],
  fullWriteup: "/research/250-million-ai-search-results",
  originalSources: [
    {
      label: "Speaker Deck",
      href: "https://speakerdeck.com/joshbly/we-analyzed-250-million-ai-search-results-heres-what-i-found",
    },
    {
      label: "TechSEO Connect recording",
      href: "https://www.youtube.com/watch?v=ll_kZh5GVX0",
    },
    {
      label: "Original Profound post",
      href: "https://www.tryprofound.com/blog/josh-blyskal-tech-seo-connect-deck-2025",
    },
  ],
  limitations: [
    "The findings come from different units and subsamples; they must not be treated as one pooled sample.",
    "The 4–7% result is an observational association, not a causal estimate.",
    "A common collection window, full engine-level counts, model specification, and raw data are not public.",
  ],
  findings: [
    {
      id: "seo-explained-variance",
      metric: "SEO metrics and citation variance",
      value: "4–7%",
      finding:
        "The tested traditional SEO metrics explained a small share of variation in citation counts.",
      sample: "1,311 pages",
      period: "Published December 8, 2025; analysis window unpublished",
      caveat: "p<0.001, but association does not establish causation.",
      source: { label: "Full study", href: "/research/250-million-ai-search-results" },
    },
    {
      id: "seo-citation-association",
      metric: "Doubling tested SEO metrics",
      value: "+25–40%",
      finding:
        "Doubling the measured SEO metrics was associated with roughly 25% to 40% more citations.",
      sample: "1,311 pages",
      period: "Analysis window unpublished",
      caveat: "This is the same observational model as the 4–7% explained-variance result.",
      source: { label: "Full study", href: "/research/250-million-ai-search-results" },
    },
    {
      id: "page-formats",
      metric: "Blogs, opinion, comparisons, and listicles",
      value: "61.5%",
      finding:
        "Blogs and opinion supplied 34.2%; comparisons and listicles supplied another 27.3%.",
      sample: "8,500 classified citations",
      period: "Collection window unpublished",
      caveat:
        "This is citation composition, not the probability that a page of each type will be cited.",
      source: { label: "Full study", href: "/research/250-million-ai-search-results" },
    },
    {
      id: "homepage-share",
      metric: "Homepage citation share",
      value: "2.2%",
      finding: "Homepages were the smallest named page-type category in the classified set.",
      sample: "8,500 classified citations",
      period: "Collection window unpublished",
      caveat: "The result does not include later changes in hyperlinking or referral behavior.",
      source: { label: "Full study", href: "/research/250-million-ai-search-results" },
    },
    {
      id: "freshness",
      metric: "Age of top-cited pages",
      value: "50% <13 weeks",
      finding: "Half of the top-cited pages were less than thirteen weeks old.",
      sample: "Top-cited-page slice; subgroup denominator unpublished",
      period: "Collection window unpublished",
      caveat: "Page age is descriptive and may reflect query freshness or publication mix.",
      source: { label: "Full study", href: "/research/250-million-ai-search-results" },
    },
    {
      id: "natural-language-urls",
      metric: "Four-to-seven-word URL slugs",
      value: "+11.4%",
      finding:
        "Natural-language slugs of four to seven words were more common in the highly cited group.",
      sample: "50,000 highly cited URLs vs. 50,000 low-cited URLs",
      period: "Collection window unpublished",
      caveat: "Group prevalence does not prove that changing a URL causes citation growth.",
      source: { label: "Full study", href: "/research/250-million-ai-search-results" },
    },
    {
      id: "semantic-urls",
      metric: "URL similarity to the query",
      value: "Up to +5%",
      finding: "URLs semantically closer to the query received up to 5% more citations.",
      sample: "100,000-URL high-versus-low comparison",
      period: "Collection window unpublished",
      caveat: "The public materials do not publish the similarity model or confidence interval.",
      source: { label: "Full study", href: "/research/250-million-ai-search-results" },
    },
    {
      id: "fanout-count",
      metric: "Prompts generating two or three searches",
      value: "89.3%",
      finding: "36.4% generated two searches and 52.9% generated three.",
      sample: "Published ChatGPT fanout sample; n unpublished",
      period: "Collection window unpublished",
      caveat: "The result describes the measured prompt mix, not every ChatGPT mode or query.",
      source: { label: "Full study", href: "/research/250-million-ai-search-results" },
    },
    {
      id: "fanout-google-overlap",
      metric: "ChatGPT fanout overlap with Google",
      value: "39%",
      finding: "Generated ChatGPT search strings overlapped 39% with Google result sets.",
      sample: "1,000 Google SERP analyses and 1,000 ChatGPT executions",
      period: "Collection window unpublished",
      caveat: "The overlap unit and matching method should be read from the full study context.",
      source: { label: "Full study", href: "/research/250-million-ai-search-results" },
    },
    {
      id: "commerce-detail",
      metric: "Frequently shown product pages",
      value: "+848% FAQs",
      finding:
        "The most frequently shown product pages had 848% more FAQs and 103% more videos than the least shown group.",
      sample: "16,000 product-detail pages",
      period: "October 2–November 2, 2025",
      caveat: "The comparison is descriptive; it does not isolate the effect of FAQs or videos.",
      source: { label: "Full study", href: "/research/250-million-ai-search-results" },
    },
  ],
};

const stateOfAeoStudy: EmpiricalStudy = {
  id: "state-of-aeo",
  title: "The state of AEO in 2026: Claude is not ChatGPT",
  shortTitle: "State of AEO 2026",
  published: "July 22, 2026",
  description:
    "A set of engine-level analyses covering search invocation, source overlap, citation formats, query fanout, referral traffic, and AI search advertising.",
  scope:
    "Published analyses span Claude, ChatGPT, Brave Search, Google Search, and Google AI Mode. Each slice uses a different unit.",
  method:
    "Observed search invocation, matched Claude citations to Brave positions, compared domain overlap and content types, tracked repeated fanout strings, and separately observed referrals and ads.",
  authors: ["Josh Blyskal"],
  contributors: ["Jasman Singh, research lead"],
  fullWriteup: "/research/state-of-aeo-2026",
  originalSources: [
    {
      label: "Speaker Deck",
      href: "https://speakerdeck.com/joshbly/the-state-of-aeo-2026",
    },
    {
      label: "Zero Click New York",
      href: "https://www.tryprofound.com/zeroclick/ny",
    },
  ],
  limitations: [
    "Several slices still omit exact prompt or citation counts, retrieval-analysis dates, sampling procedures, and raw data.",
    "The 36.6% search rate reflects the tested mix of current recommendations and basic explainers.",
    "Prompt routing, citation overlap, content classification, referral traffic, and ad observations are separate analyses.",
  ],
  findings: [
    {
      id: "claude-search-rate",
      metric: "Claude web-search invocation",
      value: "36.6%",
      finding: "Claude searched for a little over one-third of tested prompts with search enabled.",
      sample: "Mixed recommendation and explainer prompt set; n unpublished",
      period: "Collection date unpublished; report published July 22, 2026",
      caveat:
        "The search rate depends on the tested prompt mix and should not be generalized universally.",
      source: { label: "Full study", href: "/research/state-of-aeo-2026" },
    },
    {
      id: "claude-brave-top-ten",
      metric: "Claude citations in Brave positions 1–10",
      value: "79.2%",
      finding: "Nearly four in five cited URLs appeared on Brave's first results page.",
      sample: "Approximately 35,000 URLs across 400 queries",
      period: "Collection date unpublished",
      caveat: "The match does not by itself prove that Brave directly caused source selection.",
      source: { label: "Full study", href: "/research/state-of-aeo-2026" },
    },
    {
      id: "google-domain-overlap",
      metric: "Citation-domain overlap with Google's top 50",
      value: "64% vs. 37%",
      finding:
        "Claude citation domains overlapped 64% with Google's top 50; ChatGPT citation domains overlapped 37%.",
      sample: "Pairwise domain comparison; n unpublished",
      period: "Collection date unpublished",
      caveat:
        "Against Google's top 10, the reported figures were 34% for Claude and 21% for ChatGPT.",
      source: { label: "Full study", href: "/research/state-of-aeo-2026" },
    },
    {
      id: "claude-chatgpt-overlap",
      metric: "Claude and ChatGPT citation-domain overlap",
      value: "8%",
      finding: "The two answer engines shared very few cited domains on average.",
      sample: "More than 600 queries; pairwise domain comparison",
      period: "Collection date unpublished",
      caveat:
        "The overlap formula, distribution around the average, and per-engine citation counts are unpublished.",
      source: { label: "Full study", href: "/research/state-of-aeo-2026" },
    },
    {
      id: "source-type-listicles",
      metric: "Listicle citation share",
      value: "36.4% vs. 19.7%",
      finding: "Claude used more listicles than ChatGPT in the classified citation set.",
      sample: "Classified citations; n unpublished",
      period: "Collection date unpublished",
      caveat: "Source-type labels describe composition, not page-level citation probability.",
      source: { label: "Full study", href: "/research/state-of-aeo-2026" },
    },
    {
      id: "source-type-forums",
      metric: "Forum and UGC citation share",
      value: "0.9% vs. 15.8%",
      finding: "Claude used far less forum and user-generated content than ChatGPT.",
      sample: "Classified citations; n unpublished",
      period: "Collection date unpublished",
      caveat: "The comparison is engine- and sample-specific.",
      source: { label: "Full study", href: "/research/state-of-aeo-2026" },
    },
    {
      id: "year-fanout",
      metric: "Fanouts containing a year",
      value: "94% vs. 17%",
      finding: "Claude added 2025 or 2026 to far more fanouts than ChatGPT.",
      sample: "Query-fanout sample; n unpublished",
      period: "Collection date unpublished",
      caveat: "The measured years and prompt mix make this a time-bound result.",
      source: { label: "Full study", href: "/research/state-of-aeo-2026" },
    },
    {
      id: "fanout-repeatability",
      metric: "Repeated Claude fanout strings",
      value: "~65%",
      finding: "The same query strings recurred in roughly two-thirds of repeated Claude fanouts.",
      sample: "Repeated fanout executions; n unpublished",
      period: "Collection date unpublished",
      caveat: "The number of repetitions and matching rule are not public.",
      source: { label: "Full study", href: "/research/state-of-aeo-2026" },
    },
    {
      id: "chatgpt-referral-change",
      metric: "Observed ChatGPT referral traffic",
      value: "+60%",
      finding:
        "Referral traffic rose roughly 60% overnight and settled near 1.6 times the prior global level.",
      sample: "Observed referral dataset; exact size unpublished",
      period: "May 7–May 22, 2026 comparison",
      caveat: "Referral behavior is a separate dataset from the retrieval and citation analyses.",
      source: { label: "Full study", href: "/research/state-of-aeo-2026" },
    },
  ],
};

const redditStudy: EmpiricalStudy = {
  id: "reddit",
  title: "Why Reddit became AI search's most-cited domain",
  shortTitle: "Reddit citation study",
  published: "Nov 2025 · May 2026 update",
  description:
    "An aggregate and engine-level analysis of Reddit citation share, source pairing, sentiment, community concentration, and cited-post age.",
  scope:
    "More than 4 billion citations and 300 million answer-engine responses in the main study, plus a separate follow-up using approximately 7 million recent ChatGPT citations and fanouts.",
  method:
    "Aggregate and engine-level domain ranking, source-pair review, sentiment-rate comparison, subreddit concentration, post-age analysis, and a later fanout trend comparison.",
  authors: ["Josh Blyskal", "Sartaj Rajpal"],
  contributors: ["Profound, in collaboration with Reddit"],
  fullWriteup: "/research/reddit-ai-search-data",
  originalSources: [
    {
      label: "Original Profound and Reddit report",
      href: "https://www.tryprofound.com/blog/the-data-on-reddit-and-ai-search",
    },
    {
      label: "May 2026 fanout follow-up",
      href: "https://www.linkedin.com/posts/joshua-blyskal_chatgpt-is-explicitly-searching-for-reddit-activity-7467567489535700993-oM4W",
    },
  ],
  limitations: [
    "The aggregate result pools answer engines with materially different behavior.",
    "Exact engine-level counts, subgroup sizes, labels, and raw data are not public.",
    "Citation share measures sourcing visibility, not whether a user saw, trusted, clicked, or acted on an answer.",
    "The May 2026 fanout finding is a separate ChatGPT-only follow-up and should not be pooled with the 2025 six-engine analysis.",
  ],
  findings: [
    {
      id: "reddit-aggregate-share",
      metric: "Aggregate Reddit citation share",
      value: "3.11%",
      finding: "Reddit ranked first among cited domains in the pooled engine dataset.",
      sample: "4B+ citations and 300M answer-engine responses",
      period: "August 2024–late October 2025",
      caveat: "No single domain supplied most citations; 3.11% led a fragmented source market.",
      source: { label: "Full study", href: "/research/reddit-ai-search-data" },
    },
    {
      id: "reddit-engine-ranks",
      metric: "Reddit rank by engine",
      value: "Top 3 on 5 of 6",
      finding:
        "Reddit ranked first on Perplexity, second on ChatGPT, AI Overviews, and Grok, and third on AI Mode.",
      sample: "Six tracked answer engines",
      period: "August 2024–late October 2025 aggregate window",
      caveat: "Microsoft Copilot was the outlier, ranking Reddit number 31.",
      source: { label: "Full study", href: "/research/reddit-ai-search-data" },
    },
    {
      id: "reddit-sentiment",
      metric: "Brand-sentiment citation rate",
      value: "6.1% negative / 5.0% positive",
      finding: "Negative and positive brand commentary was cited at similar rates.",
      sample: "Reddit content containing brand sentiment; subgroup n unpublished",
      period: "Observed in the 2025 study",
      caveat:
        "The result does not measure the sentiment of all Reddit content or resulting answers.",
      source: { label: "Full study", href: "/research/reddit-ai-search-data" },
    },
    {
      id: "subreddit-concentration",
      metric: "Communities used per query class",
      value: "3–5 subreddits",
      finding:
        "Answer engines often concentrated retrieval within a few topic-specific communities.",
      sample: "Query-class analysis; n unpublished",
      period: "Observed in the 2025 study",
      caveat: "The named communities varied by topic and purchase context.",
      source: { label: "Full study", href: "/research/reddit-ai-search-data" },
    },
    {
      id: "reddit-post-age",
      metric: "Average age of a cited Reddit post",
      value: "~1 year",
      finding: "Four percent of cited posts were published in 2019 or earlier.",
      sample: "Cited Reddit posts observed in 2025; n unpublished",
      period: "Post-age findings observed in 2025",
      caveat: "ChatGPT's cited set peaked in Q1 2025; Perplexity's peaked in Q1 2024.",
      source: { label: "Full study", href: "/research/reddit-ai-search-data" },
    },
    {
      id: "reddit-fanout-growth",
      metric: "ChatGPT fanouts explicitly adding Reddit",
      value: "0.15% → 3.68%",
      finding: "The share rose approximately twenty-fourfold between January and late May.",
      sample: "ChatGPT fanout trend plus ~7M recent citations",
      period: "January–late May 2026",
      caveat: "Country, language, industry, and prompt composition were not published.",
      source: {
        label: "LinkedIn",
        href: "https://www.linkedin.com/posts/joshua-blyskal_chatgpt-is-explicitly-searching-for-reddit-activity-7467567489535700993-oM4W",
      },
    },
    {
      id: "reddit-chatgpt-share",
      metric: "Reddit share of recent ChatGPT citations",
      value: "8.5%",
      finding: "Reddit returned to the number-one cited domain in the separate follow-up.",
      sample: "Approximately 7M recent ChatGPT citations",
      period: "Published June 2, 2026",
      caveat: "This is a later ChatGPT-only slice, not the 3.11% six-engine aggregate.",
      source: {
        label: "LinkedIn",
        href: "https://www.linkedin.com/posts/joshua-blyskal_chatgpt-is-explicitly-searching-for-reddit-activity-7467567489535700993-oM4W",
      },
    },
  ],
};

const empiricalStudies = [chatgptIntentStudy, citationStudy, stateOfAeoStudy, redditStudy] as const;

const fieldStudyFindings: readonly FindingRow[] = [
  {
    id: "run-frequency",
    metric: "One run vs. ten runs per prompt per day",
    value: "10.24% vs. 9.99%",
    finding:
      "In Profound economist Jennifer Zou's study, citation share differed by 0.25 percentage points despite ten times as many daily executions.",
    sample: "753 prompts, seven platforms, ~989,000 runs, and 6.66M citation slots",
    period: "United States, June 1–14, 2026",
    caveat:
      "The pooled portfolio result does not establish that one daily run is sufficient for an individual prompt.",
    source: {
      label: "Profound study",
      href: "https://www.tryprofound.com/blog/is-once-a-day-enough",
    },
  },
  {
    id: "run-frequency-drift",
    metric: "Daily movement after more prompt runs",
    value: "0.36 pp → 0.21 pp",
    finding:
      "Zou's portfolio analysis found that ten runs per prompt reduced daily citation-share movement by about 40%, but the remaining movement was already small.",
    sample: "Same 753-prompt, seven-platform, fourteen-day portfolio",
    period: "United States, June 1–14, 2026",
    caveat:
      "Portfolio averages can hide prompt-level and between-engine instability. The study also resampled 2,000 synthetic portfolios.",
    source: {
      label: "Profound study",
      href: "https://www.tryprofound.com/blog/is-once-a-day-enough",
    },
  },
  {
    id: "citation-time",
    metric: "Time to first ChatGPT or Claude citation",
    value: "6.81-day median",
    finding: "The 75th percentile was 18.68 days and the 90th percentile was 37.10 days.",
    sample: "Approximately 900 newly published marketing pages",
    period: "Published May 11, 2026; observation window unpublished",
    caveat:
      "The public post does not explain uncited-page handling, prompt exposure, engine splits, page selection, indexing lag, or collection method.",
    source: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/posts/joshua-blyskal_how-long-does-it-take-to-get-cited-in-chatgpt-activity-7459597424102223873-Ywuj",
    },
  },
  {
    id: "chatgpt-search-by-intent",
    metric: "ChatGPT web-search invocation by intent",
    value: "53.5% commercial",
    finding:
      "Commercial prompts searched at 53.5%, informational prompts at 18.7%, and generative prompts at 8.9%.",
    sample: "667,000 ChatGPT conversations",
    period: "Published January 8, 2026; collection window unpublished",
    caveat:
      "The public post does not disclose language, geography, industry mix, intent-labeling method, or first-turn handling.",
    source: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/posts/joshua-blyskal_i-pulled-667k-chatgpt-conversations-from-activity-7415035320527683584-vOgG",
    },
  },
  {
    id: "chatgpt-search-overall",
    metric: "Overall ChatGPT web-search invocation",
    value: "17.4%",
    finding: "ChatGPT used live web search in fewer than one in five conversations in the dataset.",
    sample: "667,000 ChatGPT conversations",
    period: "Published January 8, 2026; collection window unpublished",
    caveat: "The result describes this conversation mix and model period, not all ChatGPT usage.",
    source: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/posts/joshua-blyskal_i-pulled-667k-chatgpt-conversations-from-activity-7415035320527683584-vOgG",
    },
  },
  {
    id: "ai-mode-source-diversity",
    metric: "Unique cited domains per prompt",
    value: "8.98 vs. 5.12",
    finding: "Google AI Mode cited more unique domains per prompt than ChatGPT in the comparison.",
    sample: "19M Google AI Mode citations; ChatGPT comparison sample size unpublished",
    period: "Published July 9, 2025; collection window unpublished",
    caveat:
      "The public post does not disclose prompt mix, geography, or whether both products used matched prompts.",
    source: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/posts/joshua-blyskal_3-ai-search-insights-in-one-day-i-spent-activity-7348727459229454337-YKZn",
    },
  },
  {
    id: "citation-volatility",
    metric: "July cited domains absent in June",
    value: "40.5–59.3%",
    finding:
      "The share was 59.3% for Google AI Overviews, 54.1% for ChatGPT, 53.4% for Copilot, and 40.5% for Perplexity.",
    sample: "Approximately 80,000 prompts; platform-level denominator ambiguous",
    period: "June 11–13 vs. July 11–13, 2025",
    caveat:
      "Sources differ on whether ~80,000 prompts were tested per platform or across all four; this is an asymmetric new-in-July metric.",
    source: {
      label: "Profound study",
      href: "https://www.tryprofound.com/blog/ai-search-volatility",
    },
  },
];

const methodologyRows = [
  {
    study: "50M+ ChatGPT prompt study",
    publication: "June 25, 2025",
    unit: "Classified prompts",
    sample: "Sample drawn from 50M+ prompts; classified n and collection window not published",
    method: "Intent classification and category-share comparison",
    href: "/research/chatgpt-intent-study",
  },
  {
    study: "250M-response analysis",
    publication: "December 8, 2025",
    unit: "Pages, citations, URLs, prompts, SERPs, and product pages",
    sample:
      "250M+ responses and 3B citations overall; published subsamples range from 1,311 pages to 100,000 URLs",
    method: "Association, classification, comparison, and descriptive analyses",
    href: "/research/250-million-ai-search-results",
  },
  {
    study: "State of AEO 2026",
    publication: "July 22, 2026",
    unit: "Prompts, cited URLs, domains, fanouts, and referrals",
    sample:
      "Some slices report ~35,000 URLs across 400 queries or 600+ queries; other exact counts remain unpublished",
    method: "Routing observation, pairwise overlap, classification, and trend analysis",
    href: "/research/state-of-aeo-2026",
  },
  {
    study: "Reddit citation study",
    publication: "November 10, 2025",
    unit: "Responses, citations, domains, posts, and query classes",
    sample: "4B+ citations and 300M responses; subgroup counts not published",
    method: "Ranking, source pairing, sentiment, concentration, and post-age analysis",
    href: "/research/reddit-ai-search-data",
  },
  {
    study: "SAGE method",
    publication: "July 26, 2026",
    unit: "Operating stages",
    sample: "Practitioner method; no empirical sample",
    method: "Setup, Analyze, Generate, and Engineer operating loop",
    href: "/research/sage-aeo-method",
  },
  {
    study: "Selected field studies",
    publication: "July 2025–July 2026",
    unit: "Prompts, responses, citations, conversations, pages, and domains",
    sample: "Reported separately in each row; no pooled sample",
    method: "Portfolio comparison, time-to-event summaries, routing rates, and trend comparisons",
    href: "#field-studies",
  },
] as const;

const compendiumBibtex = `@misc{blyskal2026aisearchfindings,
  author       = {Josh Blyskal},
  title        = {AI Search Statistics and Research Findings},
  year         = {2026},
  month        = {August},
  howpublished = {\\url{https://www.joshblyskal.com/research/findings}},
  note         = {Published August 3, 2026. Accessed YYYY-MM-DD}
}`;

const findingsPageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: pageTitle,
      description,
      inLanguage: "en-US",
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      mainEntity: { "@id": `${pageUrl}#article` },
      hasPart: [
        { "@id": `${pageUrl}#faq` },
        { "@id": `${pageUrl}#headline-list` },
        { "@id": `${pageUrl}#sage-method` },
      ],
      isPartOf: {
        "@type": "CollectionPage",
        "@id": `${site.url}/research#collection`,
        name: "AI search research",
      },
    },
    {
      "@type": "TechArticle",
      "@id": `${pageUrl}#article`,
      url: pageUrl,
      headline: pageTitle,
      description,
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      datePublished: publishedDate,
      dateModified: modifiedDate,
      inLanguage: "en-US",
      image: `${site.url}${site.ogImage}`,
      author: {
        "@type": "Person",
        "@id": `${site.url}/#identity`,
        name: site.name,
        url: site.url,
      },
      publisher: {
        "@type": "Person",
        "@id": `${site.url}/#identity`,
        name: site.name,
        url: site.url,
      },
      about: [
        { "@type": "Thing", name: "AI search statistics" },
        { "@type": "Thing", name: "Answer Engine Optimization", alternateName: "AEO" },
        { "@type": "Thing", name: "AI citations" },
        { "@type": "Thing", name: "ChatGPT" },
        { "@type": "Thing", name: "Claude" },
      ],
      keywords:
        "AI search statistics, AI search research, AEO statistics, AI citation statistics, ChatGPT citation statistics, generative engine optimization research",
      articleSection: [
        "Headline findings",
        ...empiricalStudies.map((study) => study.shortTitle),
        "SAGE method",
        "Selected field studies",
        "Methodology",
        "How to cite this research",
      ],
      citation: [
        ...empiricalStudies.map((study) => `${site.url}${study.fullWriteup}`),
        `${site.url}/research/sage-aeo-method`,
        ...fieldStudyFindings.map((finding) => finding.source.href),
      ],
      hasPart: [{ "@id": `${pageUrl}#headline-list` }, { "@id": `${pageUrl}#sage-method` }],
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#headline-list`,
      name: "Headline AI search findings",
      numberOfItems: headlineFindings.length,
      itemListElement: headlineFindings.map((finding, findingIndex) => ({
        "@type": "ListItem",
        position: findingIndex + 1,
        url: `${pageUrl}#headline-${finding.id}`,
        name: finding.question,
        description: finding.answer,
      })),
      isPartOf: { "@id": `${pageUrl}#article` },
    },
    {
      "@type": "HowTo",
      "@id": `${pageUrl}#sage-method`,
      url: `${site.url}/research/sage-aeo-method`,
      name: "SAGE for AEO",
      description:
        "A four-stage operating loop for Setup, Analyze, Generate, and Engineer work in answer engine optimization.",
      author: { "@id": `${site.url}/#identity` },
      datePublished: "2026-07-26",
      step: sagePhases.map((phase, phaseIndex) => ({
        "@type": "HowToStep",
        position: phaseIndex + 1,
        name: phase.name,
        text: phase.summary,
        url: `${site.url}/research/sage-aeo-method#${phase.name.toLowerCase()}`,
      })),
      isPartOf: { "@id": `${pageUrl}#article` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Research", item: `${site.url}/research` },
        { "@type": "ListItem", position: 3, name: pageTitle, item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      url: `${pageUrl}#headline-findings`,
      isPartOf: { "@id": `${pageUrl}#webpage` },
      mainEntity: headlineFindings.map((finding) => ({
        "@type": "Question",
        url: `${pageUrl}#headline-${finding.id}`,
        name: finding.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: finding.answer,
        },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title: { absolute: metadataTitle },
  description,
  alternates: { canonical: pageUrl },
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    title: metadataTitle,
    description,
    type: "article",
    url: pageUrl,
    publishedTime: publishedDate,
    modifiedTime: modifiedDate,
    authors: [site.name],
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description,
    images: [site.ogImage],
  },
};

function SourceLink({ source }: { source: FindingSource }) {
  const sourceClassName =
    "block w-fit whitespace-nowrap font-mono text-xs uppercase tracking-wider underline decoration-1 underline-offset-4 transition-colors hover:text-accent";

  return source.href.startsWith("/") || source.href.startsWith("#") ? (
    <Link href={source.href} className={sourceClassName}>
      {source.label} →
    </Link>
  ) : (
    <a href={source.href} target="_blank" rel="noopener noreferrer" className={sourceClassName}>
      {source.label} ↗
    </a>
  );
}

function FindingsTable({
  caption,
  findings,
}: {
  caption: string;
  findings: readonly FindingRow[];
}) {
  return (
    <div className="overflow-x-auto border border-foreground/20">
      <table className="w-full min-w-300 border-collapse text-left">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-foreground text-background">
          <tr className="font-mono text-xs uppercase tracking-wider">
            <th className="w-48 px-5 py-4 font-normal">Measure</th>
            <th className="w-36 px-5 py-4 font-normal">Result</th>
            <th className="w-72 px-5 py-4 font-normal">Finding</th>
            <th className="w-64 px-5 py-4 font-normal">Sample and date</th>
            <th className="w-72 px-5 py-4 font-normal">Method note</th>
            <th className="w-36 px-5 py-4 font-normal">Source and link</th>
          </tr>
        </thead>
        <tbody>
          {findings.map((finding) => (
            <tr
              key={finding.id}
              id={finding.id}
              className="scroll-mt-24 border-b border-foreground/20 align-top last:border-b-0"
            >
              <th scope="row" className="px-5 py-5 font-body text-sm font-semibold leading-relaxed">
                {finding.metric}
              </th>
              <td className="px-5 py-5 font-display text-2xl font-medium leading-tight text-accent">
                {finding.value}
              </td>
              <td className="px-5 py-5 font-body text-sm leading-relaxed text-foreground/80">
                {finding.finding}
              </td>
              <td className="px-5 py-5 font-body text-sm leading-relaxed text-foreground/75">
                <p>{finding.sample}</p>
                <p className="mt-2 text-foreground/50">{finding.period}</p>
              </td>
              <td className="px-5 py-5 font-body text-sm leading-relaxed text-foreground/65">
                {finding.caveat}
              </td>
              <td className="space-y-3 px-5 py-5">
                <SourceLink source={finding.source} />
                <SourceLink source={{ label: "Permalink", href: `#${finding.id}` }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EmpiricalStudySection({ study }: { study: EmpiricalStudy }) {
  return (
    <Section id={study.id}>
      <SectionHeader
        title={study.title}
        eyebrow={study.published}
        className="mb-10 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
      />

      <div className="mb-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <p className="font-body text-xl leading-relaxed text-foreground/85">
            {study.description}
          </p>
          <p className="mt-5 font-body text-base leading-relaxed text-foreground/65">
            {study.scope}
          </p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/45">Method</p>
          <p className="mt-3 font-body text-base leading-relaxed text-foreground/75">
            {study.method}
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-foreground/55">
            By {study.authors.join(" and ")}
            {study.contributors.length > 0 ? ` · ${study.contributors.join(" · ")}` : ""}
          </p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
            <SourceLink source={{ label: "Full write-up", href: study.fullWriteup }} />
            {study.originalSources.map((source) => (
              <SourceLink key={source.href} source={source} />
            ))}
          </div>
        </div>
      </div>

      <p className="mb-3 font-mono text-xs leading-relaxed tracking-wide text-foreground/50 xl:hidden">
        Swipe horizontally to see samples, dates, method notes, and sources.
      </p>
      <FindingsTable caption={`${study.title} findings`} findings={study.findings} />

      <div className="mt-8 grid gap-4 border-l-2 border-accent pl-5 sm:grid-cols-3 sm:gap-8">
        {study.limitations.map((limitation) => (
          <p key={limitation} className="font-body text-sm leading-relaxed text-foreground/60">
            {limitation}
          </p>
        ))}
      </div>
    </Section>
  );
}

export default function ResearchFindingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is generated from the static findings rendered below
        dangerouslySetInnerHTML={{ __html: JSON.stringify(findingsPageJsonLd) }}
      />

      <main>
        <header className="px-6 pt-6">
          <div className="mx-auto max-w-7xl">
            <SubpageNav activeHref="/research" />

            <div className="py-24 md:py-32">
              <h1 className="max-w-6xl font-display text-hero-name font-normal leading-[0.9] tracking-tight">
                AI search statistics and research findings
              </h1>
              <p className="mt-8 max-w-4xl font-body text-xl leading-relaxed text-foreground/85 md:text-2xl">
                A citable reference to Josh Blyskal&apos;s original research on how ChatGPT, Claude,
                Google AI products, Perplexity, and other answer engines search, retrieve, cite, and
                represent information, including AI citation statistics, query fan-out, prompt
                behavior, and cross-engine retrieval.
              </p>
              <p className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-foreground/70">
                Every row preserves the reported number, unit, sample, date, source, and material
                limitation. These studies use overlapping corpora and different units; their sample
                sizes should not be added together.
              </p>
              <p className="mt-6 font-mono text-xs uppercase tracking-widest text-foreground/55">
                By{" "}
                <Link
                  href="/about"
                  rel="author"
                  className="underline decoration-accent/60 underline-offset-4 hover:text-accent"
                >
                  Josh Blyskal
                </Link>
                , AI Strategy &amp; Research at Profound. Study-level credits below.
              </p>
              <p className="mt-3 font-mono text-xs uppercase tracking-widest text-foreground/45">
                Published August 3, 2026 · Updated September 2, 2026
              </p>
              <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest">
                <a
                  href="#headline-findings"
                  className="transition-colors hover:text-accent hover:underline"
                >
                  Headline findings ↓
                </a>
                <a
                  href="#chatgpt-intent"
                  className="transition-colors hover:text-accent hover:underline"
                >
                  Behavior &amp; intent ↓
                </a>
                <a
                  href="#250-million"
                  className="transition-colors hover:text-accent hover:underline"
                >
                  Retrieval &amp; citations ↓
                </a>
                <a
                  href="#field-studies"
                  className="transition-colors hover:text-accent hover:underline"
                >
                  Volatility &amp; measurement ↓
                </a>
                <a
                  href="#methodology"
                  className="transition-colors hover:text-accent hover:underline"
                >
                  Methodology ↓
                </a>
                <a href="#cite" className="transition-colors hover:text-accent hover:underline">
                  Citation formats ↓
                </a>
                <a
                  href="/data/ai-search-findings.json"
                  download
                  className="transition-colors hover:text-accent hover:underline"
                >
                  Download JSON ↓
                </a>
              </div>
            </div>
          </div>
        </header>

        <Section id="headline-findings">
          <SectionHeader
            title="Headline findings"
            eyebrow="8 citable answers"
            className="mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <p className="mb-8 max-w-3xl font-body text-lg leading-relaxed text-foreground/75">
            These are the findings most likely to answer a direct question. The answer text in this
            table also appears in the page&apos;s FAQPage structured data.
          </p>
          <p className="mb-3 font-mono text-xs leading-relaxed tracking-wide text-foreground/50 xl:hidden">
            Swipe horizontally to see the study, sample, and source for each answer.
          </p>

          <div className="overflow-x-auto border border-foreground/20">
            <table className="w-full min-w-275 border-collapse text-left">
              <caption className="sr-only">
                Eight headline findings from Josh Blyskal&apos;s AI search research
              </caption>
              <thead className="bg-foreground text-background">
                <tr className="font-mono text-xs uppercase tracking-wider">
                  <th className="w-72 px-5 py-4 font-normal">Question</th>
                  <th className="w-36 px-5 py-4 font-normal">Answer</th>
                  <th className="w-72 px-5 py-4 font-normal">Finding</th>
                  <th className="w-52 px-5 py-4 font-normal">Study</th>
                  <th className="w-60 px-5 py-4 font-normal">Sample</th>
                  <th className="w-28 px-5 py-4 font-normal">Source and link</th>
                </tr>
              </thead>
              <tbody>
                {headlineFindings.map((finding) => (
                  <tr
                    key={finding.id}
                    id={`headline-${finding.id}`}
                    className="border-b border-foreground/20 align-top last:border-b-0"
                  >
                    <th
                      scope="row"
                      className="px-5 py-5 font-body text-sm font-semibold leading-relaxed"
                    >
                      {finding.question}
                    </th>
                    <td className="px-5 py-5 font-display text-2xl font-medium leading-tight text-accent">
                      {finding.value}
                    </td>
                    <td className="px-5 py-5 font-body text-sm leading-relaxed text-foreground/80">
                      {finding.finding}
                    </td>
                    <td className="px-5 py-5 font-body text-sm leading-relaxed text-foreground/70">
                      {finding.study}
                    </td>
                    <td className="px-5 py-5 font-body text-sm leading-relaxed text-foreground/60">
                      {finding.sample}
                    </td>
                    <td className="space-y-3 px-5 py-5">
                      <SourceLink source={{ label: "Source", href: finding.href }} />
                      <SourceLink
                        source={{
                          label: "Permalink",
                          href: `#headline-${finding.id}`,
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section layout="split">
          <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <DisplayH2>How to read these numbers</DisplayH2>
          </div>
          <div className="max-w-3xl">
            <p className="font-body text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
              Treat every finding as a statement about its measured sample, not a universal law of
              AI search.
            </p>
            <div className="mt-8 space-y-6 font-body text-lg leading-relaxed text-foreground/80">
              <p>
                Answer engines change by model, mode, index, prompt, location, and date. A
                percentage from Claude cannot be transferred to ChatGPT. A result about cited
                domains does not automatically describe cited URLs, answer language, clicks, or
                purchases.
              </p>
              <p>
                The most reliable rows have a public denominator and a defined unit. When a source
                publishes a percentage but not the subgroup size, this page says so. When an
                analysis is observational, the wording uses associated with or more common rather
                than caused.
              </p>
              <p>
                The compendium favors primary work authored or co-authored by Josh. Public archive
                claims without enough information to identify the measure or sample were reviewed
                but left out. A smaller set of inspectable numbers is more useful than a long list
                of unsupported statistics.
              </p>
            </div>

            <h3 className="mt-12 font-display text-3xl font-medium">Metric definitions</h3>
            <dl className="mt-6 grid gap-px border border-foreground/20 bg-foreground/20 sm:grid-cols-2">
              {[
                {
                  term: "Web-search invocation",
                  meaning:
                    "The share of observed responses in which the product called a live web-search tool.",
                },
                {
                  term: "Citation share",
                  meaning:
                    "The fraction of observed citations attributed to a domain or content class, not the share of all answers.",
                },
                {
                  term: "Domain overlap",
                  meaning:
                    "The share of domains common to two measured source sets. It does not require matching URLs or passages.",
                },
                {
                  term: "Query fanout",
                  meaning:
                    "The underlying searches an answer engine generates from one user prompt before composing an answer.",
                },
                {
                  term: "Intent share",
                  meaning:
                    "The fraction of classified prompts assigned to an intent category, not the fraction of unique users.",
                },
                {
                  term: "Referral traffic",
                  meaning:
                    "Visits carrying an answer-engine referrer. Citations and unlinked mentions can influence users without creating one.",
                },
              ].map((metricDefinition) => (
                <div key={metricDefinition.term} className="bg-background p-5">
                  <dt className="font-body text-sm font-semibold">{metricDefinition.term}</dt>
                  <dd className="mt-2 font-body text-sm leading-relaxed text-foreground/65">
                    {metricDefinition.meaning}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        {empiricalStudies.map((study) => (
          <EmpiricalStudySection key={study.id} study={study} />
        ))}

        <Section id="sage-method">
          <SectionHeader
            title="SAGE: the operating method behind the research"
            eyebrow="Published July 26, 2026"
            className="mb-10 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <div className="mb-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <p className="font-body text-xl leading-relaxed text-foreground/85">
                SAGE is a four-stage method for turning answer-engine observations into repeatable
                work: Setup, Analyze, Generate, and Engineer.
              </p>
              <p className="mt-5 font-body text-base leading-relaxed text-foreground/65">
                It is a practitioner method, not an empirical dataset. The numbers below are
                operating heuristics or linked research evidence and should not be presented as a
                controlled validation of the framework.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-foreground/45">
                Provenance
              </p>
              <p className="mt-3 font-body text-base leading-relaxed text-foreground/75">
                Built at Profound and taught in Profound 101. The method keeps teams from automating
                an AEO workflow before its prompts, diagnosis, and handoff make sense by hand.
              </p>
              <div className="mt-5">
                <SourceLink
                  source={{ label: "Full SAGE method", href: "/research/sage-aeo-method" }}
                />
              </div>
            </div>
          </div>

          <p className="mb-3 font-mono text-xs leading-relaxed tracking-wide text-foreground/50 xl:hidden">
            Swipe horizontally to see each stage&apos;s question, process, and output.
          </p>
          <div className="overflow-x-auto border border-foreground/20">
            <table className="w-full min-w-250 border-collapse text-left">
              <caption className="sr-only">The four stages of the SAGE method for AEO</caption>
              <thead className="bg-foreground text-background">
                <tr className="font-mono text-xs uppercase tracking-wider">
                  <th className="w-28 px-5 py-4 font-normal">Stage</th>
                  <th className="w-72 px-5 py-4 font-normal">Question</th>
                  <th className="w-72 px-5 py-4 font-normal">What happens</th>
                  <th className="w-72 px-5 py-4 font-normal">Output</th>
                </tr>
              </thead>
              <tbody>
                {sagePhases.map((phase, phaseIndex) => (
                  <tr
                    key={phase.name}
                    className="border-b border-foreground/20 align-top last:border-b-0"
                  >
                    <th scope="row" className="px-5 py-5 font-normal">
                      <span className="font-mono text-xs text-accent">0{phaseIndex + 1}</span>
                      <span className="mt-2 block font-display text-2xl font-semibold">
                        {phase.name}
                      </span>
                    </th>
                    <td className="px-5 py-5 font-body text-sm font-semibold leading-relaxed">
                      {phase.question}
                    </td>
                    <td className="px-5 py-5 font-body text-sm leading-relaxed text-foreground/75">
                      {phase.summary}
                    </td>
                    <td className="px-5 py-5 font-body text-sm leading-relaxed text-foreground/75">
                      {phase.output}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-14 font-display text-3xl font-medium">Evidence used inside SAGE</h3>
          <div className="mt-6 grid gap-px border border-foreground/20 bg-foreground/20 md:grid-cols-2">
            {sageEvidence.map((evidence) => (
              <Link
                key={evidence.href}
                href={evidence.href}
                className="group bg-background p-6 transition-colors hover:bg-foreground/5 md:p-7"
              >
                <p className="font-display text-4xl font-normal italic text-accent">
                  {evidence.value}
                </p>
                <h4 className="mt-3 font-display text-2xl font-medium leading-snug decoration-1 underline-offset-4 group-hover:underline">
                  {evidence.title}
                </h4>
                <p className="mt-3 font-body text-sm leading-relaxed text-foreground/70">
                  {evidence.description}
                </p>
              </Link>
            ))}
          </div>
        </Section>

        <Section id="field-studies">
          <SectionHeader
            title="Selected field studies from the archive"
            eyebrow="July 2025–July 2026"
            className="mb-10 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <div className="mb-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <p className="font-body text-xl leading-relaxed text-foreground/85">
              These public analyses have clear numeric claims and identifiable samples but do not
              yet have full study pages on this site. They are included because they answer
              recurring practitioner questions about measurement, retrieval, citation speed, source
              diversity, and volatility.
            </p>
            <div className="border-l-2 border-accent pl-5">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Evidence tier
              </p>
              <p className="mt-3 font-body text-base leading-relaxed text-foreground/70">
                Treat these as public field notes. Each row links to the original post and states
                what the post did not disclose. They are not pooled with the four full studies
                above.
              </p>
            </div>
          </div>
          <p className="mb-3 font-mono text-xs leading-relaxed tracking-wide text-foreground/50 xl:hidden">
            Swipe horizontally to see samples, dates, method notes, and original posts.
          </p>
          <FindingsTable
            caption="Selected AI search field studies from Josh Blyskal's archive"
            findings={fieldStudyFindings}
          />
        </Section>

        <Section id="methodology">
          <SectionHeader
            title="Methodology"
            eyebrow="Source map"
            className="mb-10 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <p className="max-w-3xl font-body text-xl leading-relaxed text-foreground/85">
            This page is a structured index of published findings, not a new pooled analysis. The
            underlying studies used different collection systems, samples, periods, engines, and
            units. The underlying raw data is not distributed or licensed through this page.
          </p>

          <p className="mb-3 mt-12 font-mono text-xs leading-relaxed tracking-wide text-foreground/50 xl:hidden">
            Swipe horizontally to compare every study&apos;s unit, sample disclosure, and method.
          </p>
          <div className="overflow-x-auto border border-foreground/20 xl:mt-12">
            <table className="w-full min-w-250 border-collapse text-left">
              <caption className="sr-only">
                Methodology and sample disclosure for every research group
              </caption>
              <thead className="bg-foreground text-background">
                <tr className="font-mono text-xs uppercase tracking-wider">
                  <th className="w-48 px-5 py-4 font-normal">Study</th>
                  <th className="w-36 px-5 py-4 font-normal">Published</th>
                  <th className="w-48 px-5 py-4 font-normal">Unit</th>
                  <th className="w-72 px-5 py-4 font-normal">Sample disclosure</th>
                  <th className="w-64 px-5 py-4 font-normal">Method</th>
                </tr>
              </thead>
              <tbody>
                {methodologyRows.map((methodology) => (
                  <tr
                    key={methodology.study}
                    className="border-b border-foreground/20 align-top last:border-b-0"
                  >
                    <th scope="row" className="px-5 py-5 font-normal">
                      <Link
                        href={methodology.href}
                        className="font-body text-sm font-semibold leading-relaxed underline decoration-accent/60 underline-offset-4"
                      >
                        {methodology.study}
                      </Link>
                    </th>
                    <td className="px-5 py-5 font-body text-sm leading-relaxed text-foreground/70">
                      {methodology.publication}
                    </td>
                    <td className="px-5 py-5 font-body text-sm leading-relaxed text-foreground/70">
                      {methodology.unit}
                    </td>
                    <td className="px-5 py-5 font-body text-sm leading-relaxed text-foreground/70">
                      {methodology.sample}
                    </td>
                    <td className="px-5 py-5 font-body text-sm leading-relaxed text-foreground/70">
                      {methodology.method}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-3xl font-medium">Inclusion standard</h3>
              <ul className="mt-5 space-y-3 font-body text-base leading-relaxed text-foreground/75">
                <li>Josh authored, co-authored, presented, or publicly documented the analysis.</li>
                <li>The claim has a numeric value and an identifiable unit.</li>
                <li>A primary public source remains accessible.</li>
                <li>Missing denominators, dates, or procedures are stated rather than inferred.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-3xl font-medium">What this page does not claim</h3>
              <ul className="mt-5 space-y-3 font-body text-base leading-relaxed text-foreground/75">
                <li>The samples are not representative of every AI answer or user.</li>
                <li>Observed associations do not prove that a tactic caused the result.</li>
                <li>
                  Citation share is not equivalent to user attention, traffic, trust, or revenue.
                </li>
                <li>
                  The public materials do not provide enough raw data or procedural detail for
                  independent replication.
                </li>
                <li>Engine behavior measured on one date may change after a product update.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-y border-foreground/20 py-8">
            <h3 className="font-display text-3xl font-medium">Full study write-ups</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  href: "/research/chatgpt-intent-study",
                  title: "What 50 million ChatGPT prompts reveal about user intent",
                },
                {
                  href: "/research/250-million-ai-search-results",
                  title: "What 250 million AI search results say gets cited",
                },
                {
                  href: "/research/state-of-aeo-2026",
                  title: "The state of AEO in 2026: Claude is not ChatGPT",
                },
                {
                  href: "/research/reddit-ai-search-data",
                  title: "Why Reddit became AI search's most-cited domain",
                },
                {
                  href: "/research/sage-aeo-method",
                  title: "SAGE for AEO: A Four-Stage Operating Loop",
                },
              ].map((writeup) => (
                <Link
                  key={writeup.href}
                  href={writeup.href}
                  className="group border border-foreground/20 p-5 transition-colors hover:bg-foreground/5"
                >
                  <h4 className="font-display text-xl font-medium leading-snug decoration-1 underline-offset-4 group-hover:underline">
                    {writeup.title}
                  </h4>
                  <span className="mt-4 block font-mono text-xs uppercase tracking-widest text-accent">
                    Read methods and limitations →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Section>

        <Section id="cite" layout="narrow">
          <SectionHeader
            title="How to cite this research"
            eyebrow="Citation guide"
            className="mb-10 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <p className="max-w-3xl font-body text-xl leading-relaxed text-foreground/85">
            Cite this compendium when referencing the collection. Cite the individual study when
            using a specific finding so readers can inspect its methods and limitations.
          </p>

          <div className="mt-12">
            <h3 className="font-display text-3xl font-medium">Commonly misquoted findings</h3>
            <ul className="mt-6 space-y-5 border-y border-foreground/20 py-6 font-body text-base leading-relaxed text-foreground/75">
              <li>
                <strong>4–7% is not “SEO only matters 7%.”</strong> It is the explained citation
                variance from an observational model across 1,311 pages.
              </li>
              <li>
                <strong>3.11% and 8.5% are not competing Reddit estimates.</strong> The first is a
                pooled six-engine result from the main study; the second is a later ChatGPT-only
                slice.
              </li>
              <li>
                <strong>8% domain overlap does not mean 92% of citations contradicted.</strong> It
                compares cited domain sets across more than 600 queries, not claim accuracy.
              </li>
              <li>
                <strong>89.3% is not a universal fan-out rate.</strong> It describes the measured
                ChatGPT sample, whose public denominator remains unpublished.
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">APA-style</p>
            <p className="mt-4 border-y border-foreground/20 py-6 font-body text-lg leading-relaxed text-foreground/85">
              Blyskal, J. (2026, August 3). <em>AI search statistics and research findings</em>.
              JoshBlyskal.com.{" "}
              <span className="mt-2 block break-all sm:mt-0 sm:inline sm:break-normal">
                https://www.joshblyskal.com/research/findings
              </span>
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-foreground/60">
              Suggested in-text citation: (Blyskal, 2026). For a direct statistic, include the study
              name and measured sample in the surrounding sentence.
            </p>
          </div>

          <div className="mt-12">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">BibTeX</p>
            <pre className="mt-4 overflow-x-auto border border-foreground/20 bg-foreground p-6 font-mono text-sm leading-relaxed text-background">
              <code>{compendiumBibtex}</code>
            </pre>
          </div>

          <div className="mt-12">
            <h3 className="font-display text-3xl font-medium">Individual study citations</h3>
            <ol className="mt-6 space-y-5 font-body text-base leading-relaxed text-foreground/75">
              <li>
                Blyskal, J., &amp; Rajpal, S. (2025, June 25).{" "}
                <Link
                  href="/research/chatgpt-intent-study"
                  className="underline decoration-accent/60 underline-offset-4"
                >
                  What 50 million ChatGPT prompts reveal about user intent
                </Link>
                . JoshBlyskal.com.
              </li>
              <li>
                Blyskal, J. (2025, December 8).{" "}
                <Link
                  href="/research/250-million-ai-search-results"
                  className="underline decoration-accent/60 underline-offset-4"
                >
                  What 250 million AI search results say gets cited
                </Link>
                . JoshBlyskal.com.
              </li>
              <li>
                Blyskal, J. (2026, July 22).{" "}
                <Link
                  href="/research/state-of-aeo-2026"
                  className="underline decoration-accent/60 underline-offset-4"
                >
                  The state of AEO in 2026: Claude is not ChatGPT
                </Link>
                . JoshBlyskal.com. Research lead: Jasman Singh.
              </li>
              <li>
                Blyskal, J., &amp; Rajpal, S. (2025, November 10).{" "}
                <Link
                  href="/research/reddit-ai-search-data"
                  className="underline decoration-accent/60 underline-offset-4"
                >
                  Why Reddit became AI search&apos;s most-cited domain
                </Link>
                . JoshBlyskal.com.
              </li>
              <li>
                Blyskal, J. (2026, July 26).{" "}
                <Link
                  href="/research/sage-aeo-method"
                  className="underline decoration-accent/60 underline-offset-4"
                >
                  SAGE for AEO: A Four-Stage Operating Loop
                </Link>
                . JoshBlyskal.com.
              </li>
            </ol>
          </div>

          <div className="mt-14 border-l-4 border-accent pl-6">
            <p className="font-display text-3xl font-normal italic leading-tight">
              Do not strip the sample from the statistic.
            </p>
            <p className="mt-4 font-body text-lg leading-relaxed text-foreground/75">
              Write &ldquo;4% to 7% across 1,311 pages,&rdquo; not simply &ldquo;SEO explains 7% of
              AI citations.&rdquo; The unit and denominator are part of the finding.
            </p>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
