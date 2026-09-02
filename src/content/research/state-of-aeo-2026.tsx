import { PullQuote, ResearchSection } from "@/components/research/ResearchArticleElements";
import {
  BarChart,
  GroupedBarChart,
  ProportionChart,
  StatStrip,
} from "@/components/research/ResearchCharts";
import { ResearchFigure } from "@/components/research/ResearchFigures";
import type { ResearchMeta } from "@/content/research";

const sources = [
  {
    name: "The State of AEO 2026",
    publisher: "Speaker Deck",
    url: "https://speakerdeck.com/joshbly/the-state-of-aeo-2026",
  },
  {
    name: "Zero Click New York presentation",
    publisher: "Profound",
    url: "https://www.tryprofound.com/zeroclick/ny",
  },
  {
    name: "Claude and Brave citation comparison",
    publisher: "LinkedIn",
    url: "https://www.linkedin.com/posts/joshua-blyskal_792-of-claudes-citations-come-from-braves-activity-7472323829604995073-35e-",
  },
  {
    name: "Claude and ChatGPT source overlap",
    publisher: "LinkedIn",
    url: "https://www.linkedin.com/posts/joshua-blyskal_claude-and-chatgpt-only-cite-the-same-domains-activity-7479957866943193088-XB_D",
  },
] as const;

export const meta = {
  slug: "state-of-aeo-2026",
  title: "The state of AEO in 2026: Claude is not ChatGPT",
  finding:
    "Across roughly 35,000 URLs associated with 400 queries, 79.2% of Claude's cited URLs also appeared in Brave's top 10.",
  date: "2026-07-22",
  readTime: "11 min",
  description:
    "Research on Claude, ChatGPT, Brave, AI search ads, and Google AI Mode finds that each answer engine follows a distinct retrieval system.",
  excerpt:
    "Claude searched only 36.6 percent of the time; in a separate comparison, 79.2 percent of its cited URLs also appeared in Brave's top 10.",
  image: "/images/header2.jpg",
  authors: [
    {
      name: "Josh Blyskal",
      role: "Author",
      profile: "/about",
    },
    {
      name: "Jasman Singh",
      role: "Research lead",
    },
  ],
  sources,
  studyNotes: {
    dataset: [
      "Published analyses cover prompt routing, citation and search-result overlap, citation content types, repeated query fanouts, ChatGPT referral traffic, and observed ads.",
    ],
    collectionWindow: "ChatGPT referral-traffic slides compare May 7 and May 22, 2026.",
    products: ["Claude", "ChatGPT", "Brave Search", "Google Search", "Google AI Mode"],
    sample: [
      "The prompt set ranged from current product recommendations to basic explainers, with web search enabled for Claude and ChatGPT.",
      "Source-overlap figures are domain-level; content-type figures come from a classified citation set.",
      "The Brave comparison covered roughly 35,000 URLs associated with 400 tested queries.",
      "The Claude-versus-ChatGPT domain-overlap comparison covered more than 600 queries.",
    ],
    analysis: [
      "Observed search invocation; matched Claude citations to Brave positions 1–10; compared pairwise domain overlap, citation content types, repeated fanout strings, and year usage.",
      "Separately observed ChatGPT referral traffic and ad placement.",
    ],
    contributors: ["Josh Blyskal, author and presenter", "Jasman Singh, research lead"],
    access: sources,
    limitations: [
      "The prompt-routing, citation, referral, and ad analyses use different units; the deck does not present them as one common sample.",
      "Claude's 36.6% search rate reflects the tested mix of recommendations and basic explainers.",
      "Search-result overlap is observational and does not by itself establish a direct causal retrieval dependency.",
    ],
    detailsNotPublished:
      "The exact routing denominator, per-engine citation counts, overlap formula, retrieval-analysis dates, full sampling and labeling procedures, and raw-data access are not public.",
  },
} satisfies ResearchMeta;

const overlapRates = [
  {
    label: "Claude citation domains overlapping Google's top 50",
    value: 64,
    detail: "Domain overlap with Google's first 50 results.",
  },
  {
    label: "ChatGPT citation domains overlapping Google's top 50",
    value: 37,
    detail: "Domain overlap with Google's first 50 results.",
  },
  {
    label: "Claude and ChatGPT domain overlap",
    value: 8,
    detail: "Average overlap between the two answer engines.",
  },
] as const;

const contentTypeComparison = [
  { label: "Listicles", first: 36.4, second: 19.7 },
  { label: "Brand product pages", first: 17.6, second: 21.2 },
  { label: "Blogs and opinion", first: 13.2, second: 7.2 },
  { label: "News", first: 8.4, second: 11 },
  { label: "Forums and UGC", first: 0.9, second: 15.8 },
  { label: "Wikipedia", first: 0.6, second: 2.8 },
] as const;

export default function StateOfAeoStudy() {
  return (
    <div className="space-y-20">
      <ResearchSection title="Claude's first decision is whether to search">
        <p>
          We enabled web search on both models and tested prompts that ranged from current product
          recommendations to basic explainers. Claude searched 36.6 percent of the time. For the
          other 63.4 percent, any search optimization work was outside the path because the model
          answered without retrieving the web.
        </p>

        <ResearchFigure
          number={1}
          title="Claude searched for a little over one-third of tested prompts"
          description="Observed routing with web search enabled."
          source="Profound Claude search-trigger analysis"
        >
          <ProportionChart
            segments={[
              { label: "Invoked web search", value: 36.6, tone: "accent" },
              { label: "Answered without web search", value: 63.4, tone: "ink" },
            ]}
            ariaLabel="Claude invoked web search for 36.6 percent of tested prompts and answered without web search for 63.4 percent"
          />
        </ResearchFigure>

        <p>
          The language of the prompt changed the route. Terms such as "best," "near me," and a
          current year tended to trigger retrieval. Basic "what is" and "how does" prompts were more
          likely to stay inside the model, depending on the subject and freshness needed. Search
          invocation is the first gate, and that gate changes by prompt class.
        </p>
      </ResearchSection>

      <ResearchSection title="When Claude searches, its citations closely match Brave">
        <p>
          Across roughly 35,000 URLs associated with 400 tested queries, 79.2 percent of Claude's
          cited URLs also appeared within Brave positions one through ten. This is a strong observed
          match, not proof that Brave directly caused Claude's source selection.
        </p>

        <ResearchFigure
          number={2}
          title="Nearly four in five Claude citations also appeared in Brave's top 10"
          description="Share of Claude citations by whether the source ranked in Brave positions 1 through 10."
          source="Profound comparison of Claude citations with Brave results"
        >
          <ProportionChart
            segments={[
              { label: "Also in Brave positions 1–10", value: 79.2, tone: "accent" },
              { label: "Outside Brave's top 10", value: 20.8, tone: "pale" },
            ]}
            ariaLabel="79.2 percent of Claude citations also appeared in Brave positions one through ten and 20.8 percent appeared outside the top ten"
          />
        </ResearchFigure>

        <p>
          Claude gives us a route we can inspect. Check whether the prompt triggers search, inspect
          the fanout, then run those strings through Brave. The observed overlap makes Brave useful
          for diagnosis, while the missing retrieval logs keep the causal path unresolved.
        </p>
        <PullQuote>
          Claude's source selection looks different from ChatGPT because the retrieval path is
          different before either model writes a sentence.
        </PullQuote>
      </ResearchSection>

      <ResearchSection title="Claude looked more like Google, but the engines barely looked alike">
        <p>
          Claude's cited domains overlapped 64 percent with Google's top 50 results. ChatGPT's
          overlap was 37 percent. Against Google's top 10, the reported figures were 34 percent and
          21 percent. In a separate comparison covering more than 600 queries, Claude and ChatGPT
          shared only 8 percent of citation domains on average.
        </p>

        <ResearchFigure
          number={3}
          title="Source overlap depends on which two systems you compare"
          description="Pairwise domain overlap across Claude, ChatGPT, and Google's top 50."
          source="Profound citation and search-result comparison"
        >
          <BarChart
            series={overlapRates}
            domain={[0, 70]}
            ticks={[0, 20, 40, 60]}
            ariaLabel="Pairwise domain overlap: Claude with Google's top 50 at 64 percent, ChatGPT with Google's top 50 at 37 percent, and Claude with ChatGPT at 8 percent"
            mark="lollipop"
            labelColumns="wide"
          />
        </ResearchFigure>

        <p>
          There is no universal AEO result page hiding behind the interfaces. A page can be visible
          to Claude through Brave, visible to ChatGPT through a different fanout, and absent from
          another engine that never searched for that prompt.
        </p>
      </ResearchSection>

      <ResearchSection title="The source mix gives each engine a different voice">
        <p>
          Claude cited listicles in 36.4 percent of the classified set, compared with 19.7 percent
          for ChatGPT. ChatGPT used forums and user-generated content in 15.8 percent. Claude used
          them in 0.9 percent, a gap of more than seventeen times.
        </p>

        <ResearchFigure
          number={4}
          title="Claude favored listicles while ChatGPT used far more forum content"
          description="Share of citations across six selected content categories."
          source="Profound content-type classification"
        >
          <GroupedBarChart
            series={contentTypeComparison}
            firstLabel="Claude"
            secondLabel="ChatGPT"
            domain={[0, 40]}
            ticks={[0, 10, 20, 30, 40]}
            ariaLabel="Comparison of Claude and ChatGPT citation shares by content type"
          />
        </ResearchFigure>

        <p>
          The listicle finding fits the Brave dependency. Search results often reward pages that
          gather options under a current, query-shaped title. ChatGPT's larger forum share produces
          a different evidence base, with more first-person experience and disagreement.
        </p>
      </ResearchSection>

      <ResearchSection title="Claude's fanout was predictable enough to plan against">
        <p>
          The same query strings appeared in Claude's fanout roughly 65 percent of the time. It
          added "2026" or "2025" to 94 percent of fanouts, compared with 17 percent for ChatGPT.
          Adding the year to a title made it 17 percent more similar to the queries Claude generated
          in the measured set.
        </p>

        <ResearchFigure
          number={5}
          title="Claude put the year into almost every fanout"
          description="Share of generated searches containing a year, plus two related fanout findings."
          source="Profound query-fanout analysis"
        >
          <GroupedBarChart
            series={[{ label: "Fanouts containing a year", first: 94, second: 17 }]}
            firstLabel="Claude"
            secondLabel="ChatGPT"
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
            ariaLabel="Claude included a year in 94 percent of fanouts compared with 17 percent for ChatGPT"
          />
          <div className="mt-8">
            <StatStrip
              stats={[
                { value: "~65%", label: "Claude fanout strings repeated across runs" },
                {
                  value: "+17%",
                  label: "Query similarity after adding the year",
                  note: "Measured alignment with Claude's generated search strings.",
                },
              ]}
            />
          </div>
        </ResearchFigure>

        <p>
          Use a year when the answer actually changes with time, then update the evidence. Claude's
          behavior rewards recency language because it generates recency-shaped searches.
        </p>
      </ResearchSection>

      <ResearchSection title="ChatGPT changed where links and ads appeared">
        <p>
          In May 2026, we also saw a sharp change in ChatGPT referral traffic. It rose 60 percent
          overnight in the observed dataset and settled at roughly 1.6 times the prior global level.
          One in four clicks landed on a homepage. Brands were being hyperlinked more often inside
          answers, which gave homepages a role that earlier citation studies rarely showed.
        </p>
        <p>
          Ads were moving into the same conversation. The observed product used prompt context to
          match ad titles and descriptions, with roughly one ad per minute and one per conversation
          in the tested experience. I expect placements to move deeper into threads as inventory
          grows, with tighter matching to the conversation.
        </p>
      </ResearchSection>

      <ResearchSection title="Google AI Mode has its own two-route system">
        <p>
          Google AI Mode can answer from Google's first-party place and product systems or search
          third-party pages. A prompt such as "brunch near me" can stay close to Google's own data.
          A prompt asking whether a new phone is worth buying needs evidence from outside pages.
        </p>
        <p>
          That split changes the work. Local and inventory questions depend on complete entity data.
          Evaluative questions depend on clear third-party sentences that name the brand, product,
          place, and claim without relying on a pronoun two paragraphs away.
        </p>
        <p>
          My first step is to identify whether the engine searches, then trace the index, fanout,
          and source type for that prompt. Claude and ChatGPT share only 8 percent of citation
          domains on average, so one proxy metric cannot tell you where a page stands.
        </p>
      </ResearchSection>
    </div>
  );
}
