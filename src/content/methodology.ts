export const sageLessonUrl =
  "https://university.tryprofound.com/courses/profound-101/modules/introduction/lessons/the-sage-framework";

type MethodSource = {
  label: string;
  href: string;
  external?: boolean;
};

export type SagePhase = {
  name: "Setup" | "Analyze" | "Generate" | "Engineer";
  diagnostic: string;
  question: string;
  summary: string;
  inputs: readonly string[];
  actions: readonly string[];
  output: string;
  example: string;
  sources: readonly MethodSource[];
};

export const sagePhases: readonly SagePhase[] = [
  {
    name: "Setup",
    diagnostic: "The team is still deciding what is worth tracking.",
    question: "Could I explain why every topic and prompt belongs in this setup?",
    summary:
      "Setup is where I decide what the measurement is actually for. A large prompt list does not reassure me, because I have seen plenty of large setups that nobody on the team has read. I start with the short category terms customers use, check the demand around them, read real prompt examples, and then write a small set that covers the category and the buyer questions we care about. I should be able to explain why each prompt is there before I add another hundred.",
    inputs: [
      "The short category terms customers use for the problem",
      "Prompt volume and anonymized examples around those terms",
      "Buyer roles, evaluation criteria, constraints, and buying moments",
      "Competitors that appear in the answers, including unexpected ones",
      "The main fan-outs and the language the engines add to the original question",
    ],
    actions: [
      "Begin with three to five broad topics and a smaller set of deeper buyer questions",
      "Write a few prompts for each topic, run them, and read the answers before expanding",
      "Leave brand names out of visibility prompts so the baseline is not inflated",
      "Record the engines, region, persona, competitor set, and start date",
    ],
    output: "A baseline with a clear reason for every topic, prompt, competitor, and filter.",
    example:
      "I would start with roughly 20 prompts that somebody on the team has actually read and can defend. Once those answers are in front of us, it becomes much easier to see whether the setup is missing a buyer, a comparison, or a part of the category. That is a better reason to expand than an arbitrary target of 500 prompts.",
    sources: [
      {
        label: "Setup lessons in Profound 101",
        href: "https://university.tryprofound.com/courses/profound-101/modules/setup/lessons/setting-up-your-topics-and-prompts",
        external: true,
      },
      {
        label: "50M-prompt intent study",
        href: "/research/chatgpt-intent-study",
      },
    ],
  },
  {
    name: "Analyze",
    diagnostic: "A number moved and the team does not yet know why.",
    question: "What changed, where did it change, and which source helps explain it?",
    summary:
      "When a dashboard changes, I start with the prompts underneath the number. I read the answers, separate the engines, and inspect the exact pages they cited. Sometimes the explanation is a new publisher, sometimes it is a competitor page, and sometimes the engine simply changed how it framed the question. The analysis is finished when I can describe what happened in plain language and point to the evidence behind it.",
    inputs: [
      "The prompts inside the topic, especially the ones that moved",
      "Visibility, rank, and citation share for each engine separately",
      "The domains and pages that supplied the answer",
      "How the engine described the brand over several weeks",
      "Whether the expected page was fetched, selected, and easy to quote",
    ],
    actions: [
      "Read the affected prompts before explaining the topic average",
      "Separate engines when their source sets differ",
      "Decide whether the gap belongs on the brand site, a third-party site, or in the product",
      "Write down what changed, why it probably changed, and who can act on it",
    ],
    output: "A prioritized set of gaps with evidence behind each diagnosis.",
    example:
      "Suppose ChatGPT visibility falls while citation share looks healthy overall. I would isolate the ChatGPT citations, find the publisher or competitor that gained, and read the page it started using. From there, the team can decide whether it needs a better page of its own or a credible place in the source that already shapes the answer.",
    sources: [
      {
        label: "Citation portfolio lesson",
        href: "https://university.tryprofound.com/courses/profound-101/modules/analyze/lessons/building-your-content-portfolio-from-citation-data",
        external: true,
      },
      {
        label: "Cross-engine retrieval study",
        href: "/research/state-of-aeo-2026",
      },
    ],
  },
  {
    name: "Generate",
    diagnostic: "The team understands the gap, but the relevant work is still not live.",
    question: "What can we publish or change that responds to the gap we found?",
    summary:
      "Once the gap is specific enough to explain, I decide what kind of work would address it. A new page is one option, although an existing page often needs a clearer answer or a narrower job. There are also topics where publishers, communities, or product information supply most of the evidence, which means another article on the brand site may do very little. The diagnosis should determine the work, including where that work lives.",
    inputs: [
      "One or two gaps the team can explain without relying on a dashboard",
      "The format and level of detail in the pages already being cited",
      "The existing page that should answer the question, if one exists",
      "The brand's writing rules and an example worth using as a reference",
    ],
    actions: [
      "Improve the existing page when it covers the right question poorly",
      "Create a focused page when the current one is trying to answer several unrelated questions",
      "Use a format the engine already retrieves for that prompt",
      "Use generated copy as a working brief and have an editor finish it",
    ],
    output: "A published page or another concrete change that responds to the diagnosed gap.",
    example:
      "If the cited results are focused comparison pages and the brand only has a broad category guide, I would create the comparison instead of adding more sections to the guide. The title and URL should make the question obvious, and the team should monitor that page against the prompt that led to it.",
    sources: [
      {
        label: "Content creation lesson",
        href: "https://university.tryprofound.com/courses/profound-101/modules/generate/lessons/creating-content-in-profound",
        external: true,
      },
      {
        label: "250M-response citation study",
        href: "/research/250-million-ai-search-results",
      },
    ],
  },
  {
    name: "Engineer",
    diagnostic: "The process works, although the team is rebuilding it by hand each time.",
    question: "Which part of the process has been repeated enough that the team can trust it?",
    summary:
      "I leave automation until the team has run the workflow by hand more than once and agrees on what a good result looks like. Automating earlier makes the same unresolved judgment call recur at a higher speed. Once the sequence is familiar, I automate the repetitive collection and reporting while leaving the diagnosis and decision with a person.",
    inputs: [
      "A manual workflow the team has already repeated",
      "The previous baseline and the current visibility and citation data",
      "The person responsible for the next decision",
      "Filters that keep visibility prompts separate from brand-led sentiment prompts",
    ],
    actions: [
      "Compare the same topics and engines from one period to the next",
      "Collect the change, draft the diagnosis, send it to the owner, and save the new baseline",
      "Notify a person when there is a decision to make",
      "Store the prompts and filters somewhere the next person can inspect",
    ],
    output: "A repeatable workflow that keeps a person responsible for the decision.",
    example:
      "A basic weekly agent can read the previous baseline, pull the current visibility and citation domains, draft a short diagnosis, send it to Slack, and save the new baseline. If it cannot explain what changed, it should hand the problem to a person instead of recommending a fix.",
    sources: [
      {
        label: "AEO operating system lesson",
        href: "https://university.tryprofound.com/courses/profound-101/modules/engineer/lessons/agent-strategy-your-aeo-operating-system",
        external: true,
      },
    ],
  },
];

export const setupWalkthrough = {
  introduction:
    "A head term and a tracked prompt do different jobs. I use the short head term to understand demand, then write the full questions I want to monitor. A 12-word prompt often returns zero in a volume tool because the lookup is too specific, not because nobody asks anything like it.",
  steps: [
    {
      title: "Start with the category language",
      description:
        "Write down 10 to 20 short phrases from product navigation, customer calls, sales material, and the words buyers use when they compare options. For an AI visibility company, that might include AI search, brand visibility, citation tracking, and prompt monitoring.",
    },
    {
      title: "Check demand before writing the prompt set",
      description:
        "Run those terms through Prompt Volumes and read the anonymized examples around them. Phrase Match is useful when the wording varies, while Exact Match is better when word order changes the meaning. If a term has no useful signal, shorten it and try again. Teams without volume data can use site search logs, customer interviews, support tickets, and real prompt exports, although the estimate will be less precise.",
    },
    {
      title: "Turn the demand into a small tracked set",
      description:
        "Write questions that add a buyer, criterion, or constraint to the category. I begin with a few broad topics and a smaller set of deeper buyer questions, then expand the areas that prove useful after the team has read the first answers. Brand names stay out of visibility prompts.",
    },
    {
      title: "Keep the first baseline fixed",
      description:
        "Add the competitors that appear in the answers, including the ones missing from the sales deck. Save the engines, region, persona, competitor set, and date, then leave that setup alone for the first weekly comparison so the team knows what actually changed.",
    },
  ],
  example: [
    {
      label: "Too narrow for a volume check",
      value: "AI search visibility software for enterprise marketing teams",
    },
    { label: "Head term", value: "AI search" },
    {
      label: "Coverage prompt",
      value: "What are the best AI search platforms for enterprise marketing teams?",
    },
    {
      label: "Depth prompt",
      value: "Which AI search platform tracks historical visibility and supports Salesforce?",
    },
  ],
} as const;

export const sageEvidence = [
  {
    value: "37.5%",
    title: "ChatGPT prompt demand includes more than keyword-style searches",
    description:
      "Generative requests were the largest intent class at 37.5% in a classified sample drawn from more than 50 million ChatGPT prompts, while navigational intent was 2.1%. I use that difference as a reminder to build a prompt set from real conversation demand instead of starting with an old keyword export.",
    href: "/research/chatgpt-intent-study",
  },
  {
    value: "89.3%",
    title: "One prompt can produce several underlying searches",
    description:
      "In the measured sample, 36.4% of prompts produced two searches and 52.9% produced three. The language in those searches shows what the model thought it needed and which sources competed to answer it.",
    href: "/research/250-million-ai-search-results",
  },
  {
    value: "8%",
    title: "Claude and ChatGPT relied on largely different citation domains",
    description:
      "Claude and ChatGPT shared 8% of citation domains on average in the sample. I keep their analysis separate because a combined visibility score would hide most of that difference.",
    href: "/research/state-of-aeo-2026",
  },
  {
    value: "4–7%",
    title: "The tested SEO metrics explained 4% to 7% of citation variance",
    description:
      "Across 1,311 pages, the tested SEO metrics explained a small share of citation variance. I still inspect the exact answer, page format, freshness, and the passage the model could reuse.",
    href: "/research/250-million-ai-search-results",
  },
] as const;

export const methodologyFaqs = [
  {
    question: "What is SAGE for AEO?",
    answer:
      "SAGE is the way I organize recurring AEO work. Setup establishes what the team will track and why. Analyze explains what changed. Generate turns that diagnosis into published work or another concrete fix. Engineer makes the parts that have worked by hand easier to repeat.",
  },
  {
    question: 'What does "What time is it?" mean in SAGE?',
    answer:
      "The question is a quick way to identify the part of the process that is missing. A prompt set the team cannot defend belongs in Setup. Unexplained movement belongs in Analyze. A known gap with no live response belongs in Generate. A useful manual process that keeps repeating belongs in Engineer.",
  },
  {
    question: "What is a head term in SAGE Setup?",
    answer:
      'A head term is the short category phrase I use to check demand. "AI search" is a head term, while "What are the best AI search platforms for enterprise marketing teams?" is a tracked prompt. I look at the demand and real examples around the head term before deciding which full questions belong in the setup.',
  },
  {
    question: "Is SAGE a one-time checklist?",
    answer:
      "SAGE is meant to be revisited. Once a baseline is stable, a team may spend several weeks in Analyze and Generate. A new market, product, or buyer can make part of the Setup uncertain again, and the team can return there without restarting everything else.",
  },
  {
    question: "How do you measure a SAGE cycle?",
    answer:
      "I keep the prompt set and filters fixed for the period being compared, then review visibility, rank, citations, cited pages, and the language in the answer for each engine. The useful output is an explanation that a specific person can act on.",
  },
  {
    question: "Can a team use SAGE without Profound?",
    answer:
      "Yes. Profound puts the prompt, citation, page, and agent data in one place, which makes the workflow easier to run. A team can use the method with other tools if it can collect comparable answers, preserve a baseline, inspect the cited sources, and keep a person responsible for the decision.",
  },
] as const;
