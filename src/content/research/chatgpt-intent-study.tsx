import {
  KeyFindings,
  PullQuote,
  ResearchNote,
  ResearchSection,
} from "@/components/research/ResearchArticleElements";
import {
  DivergingBarChart,
  DumbbellChart,
  ProportionChart,
} from "@/components/research/ResearchCharts";
import { ResearchFigure } from "@/components/research/ResearchFigures";
import type { ResearchMeta } from "@/content/research";

export const meta = {
  slug: "chatgpt-intent-study",
  title: "What 50 million ChatGPT prompts reveal about user intent",
  question: "What are people actually trying to do when they use ChatGPT?",
  finding:
    "The largest intent category is generative: 37.5% of prompts ask ChatGPT to create, draft, or complete something.",
  date: "2025-06-25",
  readTime: "9 min",
  description:
    "A study of more than 50 million ChatGPT prompts finds that generative intent is larger than informational, commercial, navigational, or transactional intent.",
  excerpt:
    "Generative requests account for 37.5 percent of ChatGPT use, while navigational intent falls from 32.2 percent in traditional search to 2.1 percent.",
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
      name: "AI search intent study: What 50M+ ChatGPT prompts reveal",
      publisher: "Profound",
      url: "https://www.tryprofound.com/blog/chatgpt-intent-landmark-study",
    },
  ],
  methodology: {
    dataSource:
      "Real ChatGPT conversations observed through Profound's Prompt Volumes dataset. The source material describes these as user interactions rather than survey responses, third-party estimates, or synthetic prompts.",
    sampleSize:
      "The source corpus contained more than 50 million prompts. Profound extracted and classified a subset, but the exact size of that classified subset was not published.",
    period:
      "Published June 25, 2025. The original article did not disclose the collection window for the underlying conversations.",
    approach:
      "Prompts were assigned to six intent classes: generative, informational, no intent, commercial, transactional, and navigational. The resulting mix was compared with a traditional-search intent baseline.",
    limitations:
      "The public study did not publish the classifier, validation procedure, classified-sample size, or source citation for the traditional-search baseline. The percentages below reproduce the disclosed findings and do not infer missing method details.",
  },
} satisfies ResearchMeta;

const chatgptIntent = [
  { label: "Generative", value: 37.5, tone: "accent" },
  { label: "Informational", value: 32.7, tone: "ink" },
  { label: "No intent", value: 12.1, tone: "inkSoft" },
  { label: "Commercial", value: 9.5, tone: "accentSoft" },
  { label: "Transactional", value: 6.1, tone: "muted" },
  { label: "Navigational", value: 2.1, tone: "pale" },
] as const;

const sharedIntentComparison = [
  { label: "Informational", first: 32.7, second: 52.7 },
  { label: "Navigational", first: 2.1, second: 32.2 },
  { label: "Commercial", first: 9.5, second: 14.5 },
  { label: "Transactional", first: 6.1, second: 0.6 },
] as const;

const intentChanges = [
  { label: "Navigational", value: -30.1, displayValue: "−30.1 pp" },
  { label: "Informational", value: -20, displayValue: "−20.0 pp" },
  { label: "Commercial", value: -5, displayValue: "−5.0 pp" },
  { label: "Transactional", value: 5.5, displayValue: "+5.5 pp" },
] as const;

export default function ChatgptIntentStudy() {
  return (
    <div className="space-y-8">
      <p className="max-w-[44rem] font-body text-xl leading-8 text-foreground/90 md:text-[1.375rem] md:leading-9">
        Search intent used to describe the page a person wanted next. ChatGPT changes the unit. In
        the largest category we found, the user did not want a page at all. They wanted the model to
        make the thing.
      </p>

      <KeyFindings
        findings={[
          "Generative intent accounted for 37.5 percent of classified ChatGPT prompts.",
          "Informational intent fell from 52.7 percent in the traditional-search baseline to 32.7 percent in ChatGPT.",
          "Navigational intent fell from 32.2 percent to 2.1 percent.",
          "Transactional intent rose from 0.6 percent to 6.1 percent.",
        ]}
      />

      <ResearchSection title="Generative intent is the largest category">
        <p>
          Generative prompts ask for an output: write the email, build the budget, summarize the
          notes, create the itinerary, fix the code. They accounted for 37.5 percent of the
          classified sample, five points above informational prompts.
        </p>

        <ResearchFigure
          number={1}
          title="More prompts asked ChatGPT to create than to explain"
          description="Share of classified prompts in each intent category."
          source="Profound Prompt Volumes intent study"
        >
          <ProportionChart
            segments={chatgptIntent}
            ariaLabel="ChatGPT prompt intent composition: generative 37.5 percent, informational 32.7 percent, no intent 12.1 percent, commercial 9.5 percent, transactional 6.1 percent, and navigational 2.1 percent"
          />
        </ResearchFigure>

        <p>
          Traditional search taxonomies did not need this category. A search engine could help
          someone find a template, instructions, or software, but the work happened after the click.
          ChatGPT can return the draft in the response. The user judges the output there, then asks
          for revisions in the same thread.
        </p>
        <PullQuote>
          In the largest intent category, the answer is not a route to the task. It is the first
          version of the task.
        </PullQuote>
      </ResearchSection>

      <ResearchSection title="Information shrank, and navigation nearly disappeared">
        <p>
          Informational intent still made up almost a third of ChatGPT prompts. It did not vanish.
          Its share was 20 percentage points lower than the traditional-search baseline used in the
          study.
        </p>

        <ResearchFigure
          number={2}
          title="ChatGPT compressed the familiar search intents"
          description="The comparison includes the four categories shared by both taxonomies. Generative and no-intent prompts have no traditional-search counterpart in the source study."
          source="Profound study and the traditional-search baseline reported in the original article"
        >
          <DumbbellChart
            series={sharedIntentComparison}
            firstLabel="ChatGPT"
            secondLabel="Traditional search"
            domain={[0, 55]}
            ticks={[0, 10, 20, 30, 40, 50]}
            ariaLabel="Comparison of ChatGPT and traditional search intent shares"
          />
        </ResearchFigure>

        <p>
          The navigational drop was much larger. Traditional search measured 32.2 percent
          navigational intent. ChatGPT measured 2.1 percent. People still ask for sites and brands,
          but they usually enter the chat to get an answer or an artifact, not to use it as a
          bookmark bar.
        </p>
        <p>
          Transactional intent moved the other way, from 0.6 percent to 6.1 percent. The raw share
          remains smaller than informational or commercial use. The shift tells us that users are
          willing to bring purchase questions into a conversation even when the final checkout
          happens elsewhere.
        </p>

        <ResearchFigure
          number={3}
          title="The largest changes happened at opposite ends of the journey"
          description="Percentage-point change from the traditional-search baseline to ChatGPT."
          source="Calculated from percentages published by Profound"
        >
          <DivergingBarChart
            series={intentChanges}
            domain={[-40, 10]}
            ticks={[-40, -20, 0, 10]}
            ariaLabel="Percentage-point change from traditional search to ChatGPT: navigational down 30.1, informational down 20, commercial down 5, and transactional up 5.5"
            suffix=" pp"
          />
        </ResearchFigure>
      </ResearchSection>

      <ResearchSection title="Twelve percent did not fit a search intent at all">
        <p>
          The no-intent category covered 12.1 percent of prompts. These were conversational turns
          such as "thanks," "please," or "make it funnier." They matter because a chat is a
          sequence, not a stack of independent queries. A short correction can change what the user
          sees next even though it carries no standalone search intent.
        </p>
        <ResearchNote label="A boundary in the public data">
          <p>
            The original article did not publish the exact classified-sample size or the
            classifier's treatment of multi-turn context. I would not use this study to estimate the
            number of individual ChatGPT users or to claim that every conversational turn changed a
            model's long-term view of a brand.
          </p>
        </ResearchNote>
        <p>
          It does tell us that a prompt log contains connective language that keyword research would
          throw away. If we study only the first turn, we miss the rejection, the constraint, and
          the revision that reveal whether the first answer worked.
        </p>
      </ResearchSection>

      <ResearchSection title="The old funnel measures the handoff, not the work">
        <p>
          Consider a person asking ChatGPT to create a software budget for a small company. The
          response can research the category, compare tools, recommend a stack, and put prices into
          a table. Several brands may influence the decision. None is guaranteed a visit.
        </p>
        <p>
          That makes referral traffic a partial measure. Citations, mentions, recommendation
          language, and the prompts that produced them describe the work happening before a click.
          They do not replace revenue measurement. They explain a stage that click-based attribution
          barely sees.
        </p>
        <p>
          The 37.5 percent finding is the cleanest statement of the change. A large share of users
          arrive with a verb and expect the model to return a usable object. Content earns influence
          when the model can use it inside that object, even when the user never opens the source.
        </p>
      </ResearchSection>
    </div>
  );
}
