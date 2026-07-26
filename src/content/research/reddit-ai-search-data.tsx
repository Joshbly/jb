import {
  KeyFindings,
  PullQuote,
  ResearchNote,
  ResearchSection,
} from "@/components/research/ResearchArticleElements";
import {
  BarChart,
  DumbbellChart,
  RankPlot,
  StatStrip,
  TimelineChart,
} from "@/components/research/ResearchCharts";
import { ResearchFigure } from "@/components/research/ResearchFigures";
import type { ResearchMeta } from "@/content/research";

export const meta = {
  slug: "reddit-ai-search-data",
  title: "Why Reddit became AI search's most-cited domain",
  question: "Which domain does AI search cite most across major answer engines?",
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
  sources: [
    {
      name: "The Data on Reddit and AI Search",
      publisher: "Profound",
      url: "https://www.tryprofound.com/blog/the-data-on-reddit-and-ai-search",
    },
  ],
  methodology: {
    dataSource:
      "Profound's monitoring of answer-engine responses and citations, analyzed in collaboration with Reddit. The study covered ChatGPT, Google AI Overviews, Google AI Mode, Perplexity, Grok, and Microsoft Copilot.",
    sampleSize: "More than 4 billion citations from 300 million answer-engine responses.",
    period: "The aggregate citation analysis ran from August 2024 through late October 2025.",
    approach:
      "The study ranked cited domains across engines, measured Reddit's engine-level rank and citation share over time, examined the age of cited posts, reviewed subreddit concentration by query, and compared positive with negative brand sentiment in cited Reddit content.",
    limitations:
      "The public article did not publish query selection, country mix, sentiment-model validation, or a formula for helpfulness. This version treats the collaboration and all unpublished method details as limits, not assumptions to fill in.",
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
    <div className="space-y-8">
      <p className="max-w-[44rem] font-body text-xl leading-8 text-foreground/90 md:text-[1.375rem] md:leading-9">
        Across more than 4 billion citations, Reddit was the most-cited domain in the aggregate
        dataset. The reason was not a single viral thread. Answer engines kept returning to old,
        specific conversations where someone asked a real question and another person gave a direct
        answer.
      </p>

      <KeyFindings
        findings={[
          "Reddit appeared in 3.11 percent of citations, ahead of YouTube at 2.13 percent and Wikipedia at 1.35 percent.",
          "Reddit ranked in the top three on Perplexity, ChatGPT, Google AI Mode, Google AI Overviews, and Grok.",
          "The average cited Reddit post was about one year old, and 4 percent came from 2019 or earlier.",
          "Positive and negative brand sentiment had similar citation rates: 5.0 percent and 6.1 percent.",
        ]}
      />

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

        <ResearchNote label="Do not mix the windows">
          <p>
            The 250-million-results presentation reported a separate 90-day slice with different
            engine-level citation shares. This article uses the longer August 2024 to October 2025
            analysis. The numbers answer different questions and should not be merged into one time
            series.
          </p>
        </ResearchNote>
      </ResearchSection>

      <ResearchSection title="AI search uses Reddit for the part official pages omit">
        <p>
          A product page can list dimensions, materials, and warranty terms. It usually will not say
          that the zipper fails after six months or that the cheaper model is better for a small
          apartment. Reddit contains those judgments in the language of someone answering another
          person.
        </p>
        <p>
          The source study described an answer engine's "source stack": factual sources handle the
          what, while conversations supply lived experience and a judgment about whether the facts
          matter. ChatGPT often paired Reddit with Wikipedia, review sites, and news. Google AI
          Overviews paired it with YouTube and Quora.
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

      <ResearchSection title="Helpful did not mean popular or positive">
        <p>
          The analysis did not find a simple rule where the highest-upvoted comment won. The cited
          material tended to use a question-and-response structure, give a direct recommendation,
          and admit tradeoffs. Popularity can help a thread become visible, but it was not the only
          selection signal described in the study.
        </p>

        <ResearchFigure
          number={3}
          title="Negative and positive brand sentiment were cited at similar rates"
          description="Reported citation rates for Reddit content containing brand sentiment."
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
          percent. That narrow gap does not prove an engine is neutral, and the public report did
          not publish the sentiment classifier's validation. It does cut against the idea that
          Reddit wins because AI systems want either praise or complaints. They pull evaluation from
          both.
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
          title="Reddit citations rewarded an archive, not one launch week"
          description="The public study reported average age and a long-tail share rather than a complete age distribution."
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

      <ResearchSection title="What brands can do without turning Reddit into an ad channel">
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
          Reddit's lead came from years of specific conversations. The unit of work is one useful
          answer that still makes sense when a model retrieves it a year later.
        </p>
      </ResearchSection>
    </div>
  );
}
