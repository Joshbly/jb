import { PullQuote, ResearchSection } from "@/components/research/ResearchArticleElements";
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
  finding:
    "The largest intent category is generative: 37.5% of prompts ask ChatGPT to create, draft, or complete something.",
  date: "2025-06-25",
  readTime: "9 min",
  description:
    "A study of more than 50 million ChatGPT prompts finds that generative intent is larger than informational, commercial, navigational, or transactional intent.",
  excerpt:
    "Generative requests account for 37.5 percent of classified ChatGPT prompts, while navigational intent falls from 32.2 percent in traditional search to 2.1 percent.",
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
    <div className="space-y-20">
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
          In the largest intent category, ChatGPT returns the first version of the task itself.
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
          description="The four intent categories shared by ChatGPT and traditional search."
          source="Profound ChatGPT intent study"
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
          source="Profound ChatGPT intent study"
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
        <p>
          A prompt log contains connective language that keyword research would throw away. If we
          study only the first turn, we miss the rejection, constraint, or revision that reveals
          whether the first answer worked.
        </p>
      </ResearchSection>

      <ResearchSection title="The old funnel measures the handoff, not the work">
        <p>
          Consider a person asking ChatGPT to create a software budget for a small company. The
          response can research the category, compare tools, recommend a stack, and put prices into
          a table. Several brands may influence the decision. None is guaranteed a visit.
        </p>
        <p>
          Referral traffic captures only part of this. Citations, mentions, recommendation language,
          and the prompts that produced them show the work happening before a click. Revenue
          measurement picks up the sale; click-based attribution sees little of this earlier stage.
        </p>
        <p>
          At 37.5 percent, generative intent changes what content has to do. A large share of users
          arrive with a verb and expect the model to return a usable object. Content earns influence
          when the model can use it inside that object, even when the user never opens the source.
        </p>
      </ResearchSection>
    </div>
  );
}
