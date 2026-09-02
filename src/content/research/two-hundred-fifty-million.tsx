import { PullQuote, ResearchSection } from "@/components/research/ResearchArticleElements";
import {
  BarChart,
  ProportionChart,
  RangeShareChart,
  StatStrip,
} from "@/components/research/ResearchCharts";
import { ResearchFigure } from "@/components/research/ResearchFigures";
import type { ResearchMeta } from "@/content/research";

const sources = [
  {
    name: "We analyzed 250 million AI search results: here's what I found",
    publisher: "Speaker Deck",
    url: "https://speakerdeck.com/joshbly/we-analyzed-250-million-ai-search-results-heres-what-i-found",
  },
  {
    name: "TechSEO Connect presentation recording",
    publisher: "YouTube",
    url: "https://www.youtube.com/watch?v=ll_kZh5GVX0",
  },
] as const;

export const meta = {
  slug: "250-million-ai-search-results",
  title: "What 250 million AI search results say gets cited",
  finding:
    "Traditional SEO metrics explained only 4% to 7% of citation variance across 1,311 pages.",
  date: "2025-12-08",
  readTime: "12 min",
  description:
    "Research across 250 million AI responses and 3 billion citations on the page signals, formats, and query behavior behind AI search visibility.",
  excerpt:
    "Traditional SEO metrics explain 4 to 7 percent of citation variance. Content format, freshness, URLs, and query fanout fill in more of the picture.",
  image: "/images/header2.jpg",
  authors: [
    {
      name: "Josh Blyskal",
      role: "Author",
      profile: "/about",
    },
  ],
  sources,
  studyNotes: {
    dataset: [
      "More than 250 million responses and 3 billion citations from frontend monitoring across eight answer engines.",
      "Published subsamples: 1,311 pages; 8,500 citations; 50,000 top-cited and 50,000 bottom-cited URLs; 1,000 Google SERP analyses and 1,000 ChatGPT executions; and 16,000 product detail pages.",
    ],
    collectionWindow: "Product detail pages were queried from October 2 to November 2, 2025.",
    products: [
      "ChatGPT",
      "Perplexity",
      "Google AI Overviews",
      "Google AI Mode",
      "Google Gemini",
      "Microsoft Copilot",
      "Claude",
      "Meta AI",
    ],
    sample: [
      "The published query analyses used commercial and informational intent.",
      "The URL study compared top-cited with bottom-cited pages; the commerce study compared the most with the least frequently shown product pages.",
    ],
    analysis: [
      "Statistical association analysis of traditional SEO metrics and citation counts, reporting explained variance and a p-value.",
      "Content classification, high-versus-low citation URL comparison, ChatGPT fanout and Google SERP overlap, and descriptive product-page comparison.",
    ],
    contributors: ["Josh Blyskal, author and presenter"],
    access: sources,
    limitations: [
      "The article combines analyses with different units and subsamples, so its percentages are not estimates from one common sample.",
      "The 4–7% figure describes measured associations across 1,311 pages; it does not establish a causal effect of SEO metrics on citations.",
    ],
    detailsNotPublished:
      "A common collection window, full engine-level counts, sampling frame, model specification, and raw-data access are not provided in the available deck or recording page.",
  },
} satisfies ResearchMeta;

const contentCategories = [
  { label: "Blogs and opinion", value: 34.2, tone: "accent" },
  { label: "Comparative pages and listicles", value: 27.3, tone: "accentSoft" },
  { label: "Documentation and wikis", value: 15.8, tone: "ink" },
  { label: "Commercial and store pages", value: 14.8, tone: "inkSoft" },
  { label: "Community and forums", value: 5, tone: "muted" },
  { label: "Homepages", value: 2.2, tone: "pale" },
] as const;

const userGeneratedShare = [
  { label: "ChatGPT", value: 17.4 },
  { label: "Perplexity", value: 15.8 },
  { label: "Google AI Overviews", value: 12.3 },
  { label: "Microsoft Copilot", value: 4.6 },
] as const;

const productPageFactors = [
  { label: "Product rating", value: 36, displayValue: "36% higher" },
  { label: "Specification entries", value: 23, displayValue: "23% more" },
  { label: "Product title length", value: 18, displayValue: "18% longer" },
  { label: "Price", value: 11, displayValue: "11% higher" },
  { label: "Natural-language URLs", value: 7.7, displayValue: "7.7% more" },
  { label: "Discounts shown", value: 5.3, displayValue: "5.3% more" },
] as const;

export default function TwoHundredFiftyMillionStudy() {
  return (
    <div className="space-y-20">
      <ResearchSection title="The 4 to 7 percent problem">
        <p>
          Traditional SEO metrics still moved citations in the expected direction. Doubling those
          metrics was associated with roughly 25 to 40 percent more citations, and the relationship
          was statistically reliable at p&lt;0.001. It was also weak. The models explained 4 to 7
          percent of the variation in citation counts.
        </p>

        <ResearchFigure
          number={1}
          title="Traditional SEO metrics leave at least 93% unexplained"
          description="Share of citation variance explained across 1,311 pages."
          source="Profound analysis of 1,311 pages"
        >
          <RangeShareChart
            range={[4, 7]}
            rangeLabel="Variance explained by SEO metrics"
            complementLabel="Variance left to other factors"
            ariaLabel="SEO metrics explained between 4 and 7 percent of citation variance, leaving between 93 and 96 percent unexplained"
          />
        </ResearchFigure>

        <p>
          That does not make links, rankings, or domain authority useless. It means they are table
          stakes with diminishing returns. A strong domain can improve the odds, but it cannot tell
          an answer engine which passage resolves the query, whether the claim is current, or
          whether the page looks useful from the retrieval snippet.
        </p>
        <PullQuote>
          The relationship was real. It just left almost the entire citation decision unexplained.
        </PullQuote>
      </ResearchSection>

      <ResearchSection title="The formats engines kept choosing">
        <p>
          We classified 8,500 citations by page type. Blogs and opinion pages had moved ahead of
          comparative pages and listicles, but the useful grouping was the combination: those two
          formats supplied 61.5 percent of citations.
        </p>

        <ResearchFigure
          number={2}
          title="Blogs and comparisons supplied 61.5% of classified citations"
          description="Share of 8,500 citations by the type of page that received the citation."
          source="Profound content classification, 8,500 citations"
        >
          <ProportionChart
            segments={contentCategories}
            ariaLabel="Composition of 8,500 citations by page type: blogs and opinion 34.2 percent, comparative pages and listicles 27.3 percent, documentation and wikis 15.8 percent, commercial and store pages 14.8 percent, community and forums 5 percent, and homepages 2.2 percent"
          />
        </ResearchFigure>

        <p>
          Both formats do a job that answer engines need. They name the question, gather candidate
          answers, and make a recommendation in a few self-contained passages. A homepage rarely
          does that. Homepages made up 2.2 percent of this sample.
        </p>
        <p>
          Freshness mattered too. Fifty percent of top-cited pages were less than 13 weeks old. That
          gives teams a practical job: rerun the work, replace stale examples, and make the current
          answer easy to locate.
        </p>
      </ResearchSection>

      <ResearchSection title="Retrieval happens before a model reads the page">
        <p>
          During retrieval, an answer engine may decide between candidates from a title,
          description, URL, and a short snippet. In our tests, that snippet was around 100
          characters. The full article cannot rescue a candidate that looks irrelevant at this
          stage.
        </p>
        <p>
          We compared 50,000 highly cited URLs with 50,000 low-cited URLs. Slugs written as four to
          seven natural-language words were 11.4 percent more common in the highly cited group. URLs
          that were semantically closer to the query received up to 5 percent more citations.
        </p>
        <p>
          The URL is a small retrieval document. So are the title and description. Each one should
          say what the page answers without making the retriever decode an internal ID or a vague
          brand phrase.
        </p>

        <p>
          The same retrieval behavior helps explain the amount of user-generated content in AI
          answers. Forums and video transcripts contain plain-language questions, direct
          recommendations, and the exact phrases people use when they are deciding what to buy.
        </p>

        <ResearchFigure
          number={3}
          title="User-generated content share varied sharply by engine"
          description="Percentage of each platform's citations classified as user-generated content."
          source="Profound answer-engine citation analysis"
        >
          <BarChart
            series={userGeneratedShare}
            domain={[0, 20]}
            ticks={[0, 5, 10, 15, 20]}
            ariaLabel="User-generated content citation share by answer engine"
            labelColumns="wide"
          />
        </ResearchFigure>
      </ResearchSection>

      <ResearchSection title="One prompt becomes several searches">
        <p>
          A ChatGPT prompt is not a keyword with extra words. The system turns it into query fanout,
          then searches those branches. In the observed sample, 36.4 percent of prompts produced two
          searches and 52.9 percent produced three. Nearly nine in ten produced two or three.
        </p>

        <ResearchFigure
          number={4}
          title="Most prompts generated two or three searches"
          description="Share of prompts by number of generated searches."
          source="Profound ChatGPT query-fanout analysis"
        >
          <ProportionChart
            segments={[
              {
                label: "Two queries",
                value: 36.4,
                tone: "accent",
              },
              {
                label: "Three queries",
                value: 52.9,
                tone: "ink",
              },
              {
                label: "One, four, or five queries",
                value: 10.7,
                displayValue: "10.7%",
                tone: "pale",
              },
            ]}
            ariaLabel="36.4 percent of prompts generated two queries, 52.9 percent generated three, and 10.7 percent generated one, four, or five"
          />
        </ResearchFigure>

        <p>
          Across 1,000 SERP analyses and 1,000 ChatGPT executions, ChatGPT query fanouts overlapped
          39 percent with Google results.
        </p>

        <p>
          This is why optimizing only for the exact wording of a prompt misses the retrieval path.
          The better content brief asks which follow-up searches the model needs to answer before it
          can respond with confidence.
        </p>
      </ResearchSection>

      <ResearchSection title="Commerce made the pattern harder to ignore">
        <p>
          The product analysis compared 16,000 product detail pages queried from October 2 through
          November 2, 2025. The most frequently shown products had 848 percent more FAQs than the
          least frequently shown group. They had 103 percent more videos. Ratings, specifications,
          descriptive titles, availability signals, and readable URLs all moved in the same
          direction.
        </p>

        <ResearchFigure
          number={5}
          title="Frequently shown products supplied more answerable detail"
          description="Difference between the most and least frequently shown product pages."
          source="Profound analysis of 16,000 product detail pages"
        >
          <StatStrip
            stats={[
              { value: "+848%", label: "FAQs" },
              { value: "+103%", label: "Videos" },
            ]}
          />
          <div className="mt-8">
            <BarChart
              series={productPageFactors}
              domain={[0, 40]}
              ticks={[0, 10, 20, 30, 40]}
              ariaLabel="Relative differences in product-page factors among frequently shown products"
              labelColumns="wide"
            />
          </div>
        </ResearchFigure>

        <p>
          The FAQ number is extreme, but the direction is ordinary. Product pages win when they
          expose the facts needed to finish a specific decision. A feed with current inventory,
          reviews, dimensions, and clear question-and-answer fields gives the agent less work to do.
        </p>
      </ResearchSection>

      <ResearchSection title="The work I would prioritize">
        <p>
          I would keep the SEO foundation, then spend the next unit of effort on retrieval clarity.
          Give the page a title and URL that name the question. Put the answer in a passage that can
          survive outside the page. Update it when the facts change. For products, expose the fields
          an agent needs to compare options without guessing.
        </p>
        <p>
          Traditional SEO remains the foundation. The 4 to 7 percent result shows how much work
          begins after that foundation. Traditional SEO metrics left at least 93 percent of citation
          variance unexplained.
        </p>
      </ResearchSection>
    </div>
  );
}
