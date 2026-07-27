import { PullQuote, ResearchSection } from "@/components/research/ResearchArticleElements";
import {
  BarChart,
  DumbbellChart,
  RankPlot,
  StatStrip,
  TimelineChart,
} from "@/components/research/ResearchCharts";
import { ResearchFigure } from "@/components/research/ResearchFigures";
import type { ResearchMeta } from "@/content/research";

const sources = [
  {
    name: "The Data on Reddit and AI Search",
    publisher: "Profound",
    url: "https://www.tryprofound.com/blog/the-data-on-reddit-and-ai-search",
  },
] as const;

export const meta = {
  slug: "reddit-ai-search-data",
  title: "Why Reddit became AI search's most-cited domain",
  finding:
    "Reddit ranked first in the aggregate dataset, appearing in 3.11% of citations across the tracked answer engines.",
  date: "2025-11-10",
  readTime: "10 min",
  description:
    "An analysis of 4 billion citations and 300 million answer-engine responses finds Reddit is the most-cited domain in aggregate and a top-three source on five major platforms.",
  excerpt:
    "Reddit led the aggregate citation ranking at 3.11 percent, and the average cited post was about one year old.",
  image: "/images/header2.png",
  authors: [
    {
      name: "Josh Blyskal",
      role: "Co-author",
      profile: "/about",
    },
    {
      name: "Sartaj Rajpal",
      role: "Co-author and researcher",
    },
  ],
  sources,
  studyNotes: {
    dataset: [
      "More than 4 billion citations and 300 million answer-engine responses analyzed by Profound in collaboration with Reddit.",
      "Published slices include per-engine Reddit ranks, citations containing positive or negative brand sentiment, subreddit concentration by query class, and cited-post publication dates.",
    ],
    collectionWindow:
      "Aggregate citation ranking: August 2024 through late October 2025; post-age findings describe citations observed in 2025.",
    products: [
      "Perplexity",
      "ChatGPT",
      "Google AI Mode",
      "Google AI Overviews",
      "Grok",
      "Microsoft Copilot",
    ],
    sample: [
      "The aggregate ranking pools citation share across tracked answer engines; the platform view ranks Reddit separately within each engine.",
      "The sentiment comparison covers Reddit content containing positive or negative brand sentiment.",
    ],
    analysis: [
      "Aggregate and engine-level domain ranking, source-pairing review, brand-sentiment citation-rate comparison, subreddit concentration by query class, and cited-post age analysis.",
    ],
    contributors: [
      "Josh Blyskal, co-author",
      "Sartaj Rajpal, co-author and researcher",
      "Profound, in collaboration with Reddit",
    ],
    access: sources,
    limitations: [
      "The aggregate ranking pools engines with materially different behavior; Microsoft Copilot ranked Reddit 31st while five others placed it in the top three.",
      "Citation share measures sourcing visibility, not whether users saw, trusted, or acted on the answer.",
    ],
    detailsNotPublished:
      "Exact engine-level counts, subgroup sizes, labeling procedures, and raw-data access are not provided in the available article.",
  },
} satisfies ResearchMeta;

const citedDomains = [
  { label: "Reddit", value: 3.11 },
  { label: "YouTube", value: 2.13 },
  { label: "Wikipedia", value: 1.35 },
  { label: "Forbes", value: 0.8 },
  { label: "NerdWallet", value: 0.47 },
  { label: "TechRadar", value: 0.44 },
  { label: "TripAdvisor", value: 0.43 },
  { label: "LinkedIn", value: 0.41 },
  { label: "Gartner", value: 0.4 },
  { label: "Quora", value: 0.39 },
] as const;

const redditRanks = [
  { label: "Perplexity", rank: 1 },
  { label: "ChatGPT", rank: 2 },
  { label: "Google AI Mode", rank: 3 },
  { label: "Google AI Overviews", rank: 2 },
  { label: "Grok", rank: 2 },
  { label: "Microsoft Copilot", rank: 31 },
] as const;

const sentimentComparison = [
  {
    label: "Brand-sentiment citation rate",
    first: 5,
    second: 6.1,
  },
] as const;

export default function RedditAiSearchStudy() {
  return (
    <div className="space-y-20">
      <ResearchSection title="Reddit led the aggregate source ranking">
        <p>
          No single domain supplied most AI citations. Reddit's 3.11 percent share was enough to
          rank first because answer engines draw from a fragmented web. The gap to YouTube was 0.98
          percentage points. The gap to Wikipedia was 1.76 points.
        </p>

        <ResearchFigure
          number={1}
          title="Reddit was the most-cited domain across tracked engines"
          description="Aggregate share of citations from August 2024 through late October 2025."
          source="Profound analysis of more than 4 billion citations"
        >
          <BarChart
            series={citedDomains}
            domain={[0, 3.2]}
            ticks={[0, 1, 2, 3]}
            ariaLabel="Citation share for the ten most-cited domains, led by Reddit at 3.11 percent"
            mark="lollipop"
          />
        </ResearchFigure>

        <p>
          Aggregation can hide platform differences, so we checked the rank on each engine. Reddit
          was first on Perplexity, second on ChatGPT, third on Google AI Mode, second on Google AI
          Overviews, and second on Grok. Microsoft Copilot was the exception at number 31.
        </p>

        <ResearchFigure
          number={2}
          title="Reddit ranked top three on five of six measured engines"
          description="A lower rank is better. Copilot was the clear outlier."
          source="Profound and Reddit citation analysis"
        >
          <RankPlot
            series={redditRanks}
            maximumRank={31}
            ticks={[1, 10, 20, 31]}
            ariaLabel="Reddit ranked first on Perplexity, second on ChatGPT, second on Google AI Overviews, second on Grok, third on Google AI Mode, and thirty-first on Microsoft Copilot"
          />
        </ResearchFigure>
      </ResearchSection>

      <ResearchSection title="AI search uses Reddit for the part official pages omit">
        <p>
          A product page can list dimensions, materials, and warranty terms. It usually will not say
          that the zipper fails after six months or that the cheaper model is better for a small
          apartment. Reddit contains those judgments in the language of someone answering another
          person.
        </p>
        <p>
          We found answer engines building a source stack. Factual sources handled the what, while
          conversations supplied lived experience and a judgment about whether the facts mattered.
          ChatGPT often paired Reddit with Wikipedia, review sites, and news. Google AI Overviews
          paired it with YouTube and Quora.
        </p>
        <PullQuote>
          A niche subreddit can function like a panel of subject-matter experts, with all the
          disagreement left in.
        </PullQuote>
        <p>
          Query-specific communities were more useful than Reddit as a single brand. Purchase
          questions repeatedly led to communities such as r/whatcarshouldIbuy, r/BuyItForLife, and
          r/Frugal. Technical questions produced a different group. The study found that an answer
          engine often concentrated on three to five subreddits for a query class.
        </p>
      </ResearchSection>

      <ResearchSection title="What made Reddit content useful">
        <p>
          Upvotes alone did not decide which comments won. The cited material tended to use a
          question-and-response structure, give a direct recommendation, and admit tradeoffs.
          Popularity can help a thread become visible. A clear recommendation gives the retriever
          something useful to quote.
        </p>

        <ResearchFigure
          number={3}
          title="Negative and positive brand sentiment were cited at similar rates"
          description="Citation rates for Reddit content containing brand sentiment."
          source="Profound and Reddit sentiment analysis"
        >
          <DumbbellChart
            series={sentimentComparison}
            firstLabel="Positive"
            secondLabel="Negative"
            domain={[0, 7]}
            ticks={[0, 2, 4, 6]}
            ariaLabel="Positive brand sentiment had a 5 percent citation rate and negative brand sentiment had a 6.1 percent citation rate"
          />
        </ResearchFigure>

        <p>
          Negative brand sentiment had a 6.1 percent citation rate. Positive sentiment was 5.0
          percent. The systems cited both. Reddit's value came from evaluation itself, whether the
          verdict was positive or negative.
        </p>
      </ResearchSection>

      <ResearchSection title="The cited post was usually older than the current campaign">
        <p>
          The average cited post in 2025 was about one year old. Four percent of cited posts came
          from 2019 or earlier. ChatGPT leaned toward newer posts, with a peak in the first quarter
          of 2025. Perplexity's cited set peaked a year earlier, in the first quarter of 2024.
        </p>

        <ResearchFigure
          number={4}
          title="Reddit citations rewarded years of useful answers"
          description="Average cited-post age, long-tail share, and peak publication quarter by engine."
          source="Profound analysis of cited Reddit post dates"
        >
          <TimelineChart
            events={[
              {
                position: 0,
                value: "≤2019",
                label: "4% of cited posts",
                lane: "above",
                tone: "ink",
              },
              {
                position: 83,
                value: "Q1 2024",
                label: "Perplexity peak",
                lane: "above",
                tone: "ink",
              },
              {
                position: 100,
                value: "Q1 2025",
                label: "ChatGPT peak",
                lane: "below",
                tone: "accent",
              },
            ]}
            startLabel="2019"
            endLabel="2025"
            ariaLabel="Cited Reddit post timeline: 4 percent were from 2019 or earlier, Perplexity peaked at first-quarter 2024 posts, and ChatGPT peaked at first-quarter 2025 posts"
          />
          <div className="mt-6">
            <StatStrip
              stats={[
                { value: "~1 year", label: "Average age of a cited post" },
                { value: "4%", label: "Published in 2019 or earlier" },
              ]}
            />
          </div>
        </ResearchFigure>

        <p>
          That age profile changes the economics of community work. A useful answer can sit quietly,
          get indexed, and surface months later when an answer engine needs the same judgment. A
          short campaign built around engagement this week will miss that value.
        </p>
      </ResearchSection>

      <ResearchSection title="How brands can contribute useful answers">
        <p>
          Start with the prompts customers use when they compare products, look for failure modes,
          or ask whether something is worth the money. Record which subreddits appear. Read enough
          of those communities to understand what they consider a complete answer and what behavior
          they reject.
        </p>
        <p>
          Then answer questions you can answer honestly. State who the product is for, who should
          buy something else, and what goes wrong in practice. The sentiment chart explains why the
          last part matters. An answer engine does not need a thread to flatter the brand. It needs
          the thread to help settle the question.
        </p>
        <p>
          Reddit led because useful answers kept working long after the thread fell off the front
          page. The average cited post was about a year old.
        </p>
      </ResearchSection>
    </div>
  );
}
