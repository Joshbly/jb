import {
  KeyFindings,
  PullQuote,
  ResearchNote,
  ResearchSection,
} from "@/components/research/ResearchArticleElements";
import {
  BarChart,
  GroupedBarChart,
  ProportionChart,
  StatStrip,
} from "@/components/research/ResearchCharts";
import { ResearchFigure } from "@/components/research/ResearchFigures";
import type { ResearchMeta } from "@/content/research";

export const meta = {
  slug: "state-of-aeo-2026",
  title: "The state of AEO in 2026: Claude is not ChatGPT",
  question: "How does Claude choose sources when it searches the web?",
  finding:
    "Claude drew 79.2% of its citations from Brave's top 10, but it used web search for only 36.6% of tested prompts.",
  date: "2026-07-22",
  readTime: "11 min",
  description:
    "Research on Claude, ChatGPT, Brave, AI search ads, and Google AI Mode finds that each answer engine follows a distinct retrieval system.",
  excerpt:
    "Claude searched only 36.6 percent of the time, but 79.2 percent of its citations came from Brave's top 10 results.",
  image: "/images/header2.png",
  authors: [
    {
      name: "Josh Blyskal",
      role: "Co-presenter",
      profile: "/about",
    },
    {
      name: "Jasman Singh",
      role: "Co-presenter and research lead",
    },
  ],
  sources: [
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
  ],
  methodology: {
    dataSource:
      "Profound's frontend answer-engine dataset, paired with controlled ChatGPT and Claude tests run with web search enabled, citation comparisons against Brave and Google, query-fanout inspection, and observed ChatGPT ad behavior.",
    sampleSize:
      "The public presentation reported percentages for each sub-analysis but did not publish the number of prompts, citations, domains, or ad impressions behind every finding.",
    period:
      "Presented in July 2026. The traffic and ChatGPT product observations centered on changes between May 7 and May 22, 2026; the Claude analysis used the current product behavior presented in the deck.",
    approach:
      "The team measured search invocation, mapped Claude citations to Brave result positions, compared Claude and ChatGPT citation domains with Google, classified cited page types, reviewed generated search strings, and observed ad placement across conversation intents.",
    limitations:
      "Without disclosed denominators and windows for each sub-study, these results describe the measured presentation dataset rather than a universal rate for every Claude or ChatGPT session. Third-party business-adoption claims from the deck are omitted here.",
  },
} satisfies ResearchMeta;

const overlapRates = [
  {
    label: "Claude citations overlapping Google",
    value: 64,
    detail: "Domain overlap with the Google result set.",
  },
  {
    label: "ChatGPT citations overlapping Google",
    value: 37,
    detail: "Measured with the same comparison framing in the deck.",
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
    <div className="space-y-8">
      <p className="max-w-[44rem] font-body text-xl leading-8 text-foreground/90 md:text-[1.375rem] md:leading-9">
        Claude and ChatGPT can receive the same prompt and return source sets with only 8 percent
        average domain overlap. The useful question in 2026 is no longer whether an AI assistant can
        search. It is which prompts make it search, which index it trusts, and what it does with the
        results.
      </p>

      <KeyFindings
        findings={[
          "Claude invoked web search for 36.6 percent of tested prompts even when search was enabled.",
          "When Claude searched, 79.2 percent of its citations came from Brave results ranked 1 through 10.",
          "Claude citation domains overlapped 64 percent with Google; ChatGPT overlapped 37 percent.",
          "Forums supplied 0.9 percent of Claude citations and 15.8 percent of ChatGPT citations.",
          "Claude added a year to 94 percent of its query fanouts, compared with 17 percent for ChatGPT.",
        ]}
      />

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
          likely to stay inside the model, depending on the subject and freshness needed.
        </p>
        <ResearchNote label="What the rate does not mean">
          <p>
            The deck did not publish the prompt count or category weights behind 36.6 percent. It
            should not be treated as a platform-wide usage estimate. It is evidence that search
            invocation is a measurable gate and that the gate differs by prompt class.
          </p>
        </ResearchNote>
      </ResearchSection>

      <ResearchSection title="When Claude searches, Brave supplies the shortlist">
        <p>
          Claude's citations followed Brave closely. We found 79.2 percent of cited URLs within
          Brave positions one through ten. The ordering was largely preserved rather than rebuilt
          through a separate visible ranking layer.
        </p>

        <ResearchFigure
          number={2}
          title="Nearly four in five Claude citations came from Brave's top 10"
          description="Share of Claude citations by whether the source ranked in Brave positions 1 through 10."
          source="Profound comparison of Claude citations with Brave results"
        >
          <ProportionChart
            segments={[
              { label: "Brave positions 1–10", value: 79.2, tone: "accent" },
              { label: "Outside Brave's top 10", value: 20.8, tone: "pale" },
            ]}
            ariaLabel="79.2 percent of Claude citations came from Brave positions one through ten and 20.8 percent came from outside the top ten"
          />
        </ResearchFigure>

        <p>
          This creates an unusually legible route into Claude. Check whether the prompt triggers
          search. Inspect the fanout. Search those strings in Brave. If the page is absent from the
          first page there, it is unlikely to enter Claude's citation set for that path.
        </p>
        <PullQuote>
          Claude's source selection looks different from ChatGPT because the retrieval path is
          different before either model writes a sentence.
        </PullQuote>
      </ResearchSection>

      <ResearchSection title="Claude looked more like Google, but the engines barely looked alike">
        <p>
          Claude's cited domains overlapped 64 percent with Google results. ChatGPT's overlap was 37
          percent. Yet Claude and ChatGPT shared only 8 percent of citation domains on average.
        </p>

        <ResearchFigure
          number={3}
          title="Source overlap depends on which two systems you compare"
          description="Domain-level overlap rates reported in the presentation."
          source="Profound citation and search-result comparison"
        >
          <BarChart
            series={overlapRates}
            domain={[0, 70]}
            ticks={[0, 20, 40, 60]}
            ariaLabel="Pairwise domain overlap: Claude with Google 64 percent, ChatGPT with Google 37 percent, and Claude with ChatGPT 8 percent"
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
          description="Selected cited-content categories. The public deck did not display a complete mutually exclusive distribution, so the bars should not be summed."
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
          Putting a year in every title would be a cheap reading of the result. Use it when the
          answer actually changes with time, then update the evidence. Claude's behavior rewards
          recency language because it generates recency-shaped searches.
        </p>
      </ResearchSection>

      <ResearchSection title="ChatGPT changed the link, ad, and homepage equation">
        <p>
          The presentation also tracked a sharp ChatGPT change in May 2026. Referral traffic rose 60
          percent overnight in the observed dataset and settled at roughly 1.6 times the prior
          global level. One in four clicks landed on a homepage. Brands were being hyperlinked more
          often inside answers, which gave homepages a role that earlier citation studies rarely
          showed.
        </p>
        <p>
          Ads were moving into the same conversation. The observed product used prompt context to
          match ad titles and descriptions, with roughly one ad per minute and one per conversation
          in the tested experience. The likely direction is more placements deeper in a thread and
          stronger matching as inventory grows. Those are predictions from the presentation, not
          measured outcomes.
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
          The state of AEO in 2026 is four separate routing problems, not one ranking checklist.
          Start by identifying whether the engine searches, then trace the index, fanout, and source
          type it uses for that prompt. Claude and ChatGPT disagree too often for one proxy metric
          to do the job.
        </p>
      </ResearchSection>
    </div>
  );
}
