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
    diagnostic: "We don't know what to track yet.",
    question: "Could I explain why every topic and prompt is in this setup?",
    summary:
      "I don't trust a setup because it has a lot of prompts. I trust it when I can trace each topic back to real demand and tell you what decision the prompt is testing. Coverage topics tell me whether the brand is in the category conversation. Depth topics test a buyer question I actually care about winning.",
    inputs: [
      "The plain category words customers use when they describe the problem",
      "Prompt volume and anonymized examples for those short head terms",
      "Buyer roles, evaluation criteria, constraints, and real buying moments",
      "Competitors that appear in the answers, even if sales never mentions them",
      "The highest-share fan-outs and the words the engine adds or removes",
    ],
    actions: [
      "Start with three to five coverage topics and two to five depth topics",
      "Write three to five prompts per topic before expanding the priority topics",
      "Keep brand names out of visibility prompts so they do not inflate the baseline",
      "Write down the engines, region, persona, competitor set, and start date",
    ],
    output: "A baseline you trust.",
    example:
      "I would rather start with 20 prompts I can defend than 500 prompts nobody on the team has read. Run the small set, read the answers, and add coverage where you can name the hole.",
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
    diagnostic: "We're not sure what's missing or why we're losing.",
    question: "What changed, where did it change, and which source explains it?",
    summary:
      "A dashboard can tell me that a number moved. That is not a diagnosis. I go down to the prompt, read the answer, split the engines apart, and inspect the sources they used. I want a reason I could explain without pointing at a chart.",
    inputs: [
      "The prompts inside the topic, especially the ones that moved",
      "Visibility, rank, and citation share for each engine on its own",
      "The domains and exact pages that supplied the answer",
      "How the engine describes the brand over several weeks",
      "Whether the page was fetched, chosen, and easy to quote",
    ],
    actions: [
      "Open the prompts before explaining the topic average",
      "Treat engines separately when they use different sources",
      "Work out whether the fix belongs on your site, someone else's site, or in the product",
      "Write one sentence that says what moved, where, why, and what you can do",
    ],
    output: "A gap list you believe.",
    example:
      "Say ChatGPT visibility falls while citation share looks healthy overall. I filter citations to ChatGPT, find the publisher or competitor that gained, and read the exact page. Then I decide whether we need our own answer or a place in theirs. 'Visibility fell' is not enough.",
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
    diagnostic: "We know the gap, but nothing is shipping.",
    question: "What can we ship this week that addresses the gap we actually found?",
    summary:
      "Once I can name the gap in one sentence, I decide what to ship. Sometimes that is a new page. Often the page already exists and needs a cleaner answer. If publishers own the sources for the topic, another page on your domain may be the wrong move.",
    inputs: [
      "One or two gaps the team can explain clearly",
      "The format and specificity of the pages already being cited",
      "The existing page that should answer the prompt, if there is one",
      "The brand's real writing rules and a piece worth copying",
    ],
    actions: [
      "Fix the existing page when it covers the right question badly",
      "Create a new page when the existing one is trying to answer five different questions",
      "Use the format the engine already fetches for that prompt",
      "Treat generated copy as a brief. An editor still has to finish it",
    ],
    output: "Content that addresses the gap.",
    example:
      "If every cited page is a focused comparison and your only page is a broad category guide, stop adding sections to the guide. Write the comparison. Publish it under a URL that says what it answers. Then watch that URL instead of the whole site.",
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
    diagnostic: "It works, but we're rebuilding it by hand every time.",
    question: "Which part have we repeated enough times to trust?",
    summary:
      "I automate last. If the team cannot run the workflow by hand and agree on the result, automation makes the confusion recur faster. Once the sequence is boring and repeatable, wire it up.",
    inputs: [
      "A manual workflow the team has already run more than once",
      "Last week's baseline and this week's visibility and citation data",
      "The person who owns the next decision",
      "Filters that keep visibility and brand-led sentiment prompts separate",
    ],
    actions: [
      "Compare the same topics and engines week over week",
      "Detect the change, write the diagnosis, send it, and save the new baseline",
      "Alert a person only when there is a decision to make",
      "Keep the filters and prompts somewhere the next person can inspect",
    ],
    output: "A system that compounds.",
    example:
      "My basic weekly agent reads last week's baseline, pulls the current visibility and citation domains, writes a short diagnosis, sends it to Slack, and replaces the baseline. If it cannot explain what changed, it should not recommend a fix.",
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
    "A head term and a tracked prompt are different things. The head term is the short phrase I use to find demand. The prompt is the full question I monitor. If I paste a 12-word prompt into a volume tool and get zero, I have not learned that demand is zero. I have probably asked the tool the wrong question.",
  steps: [
    {
      title: "Write down the short category terms",
      description:
        "Start with 10 to 20 phrases that are one or two words long. Pull them from the product navigation, customer calls, sales material, and the language people use when they compare options. For an AI visibility company, I might start with AI search, brand visibility, citation tracking, and prompt monitoring.",
    },
    {
      title: "Check demand before writing prompts",
      description:
        "Paste the terms into Prompt Volumes and run Bulk Analysis. I use Phrase Match first when the wording can move around. I use Exact Match when word order changes the meaning. Then I open one term in Single Keyword Analysis and read the anonymized prompt examples, intent mix, platform, and region. If there is no signal, I shorten the term and try again. Without Prompt Volumes, use site search logs, customer interviews, support tickets, and a small set of real prompt exports. Be honest that the demand estimate is weaker.",
    },
    {
      title: "Build a small prompt set",
      description:
        "Turn the demand into questions with a category, buyer, criterion, or constraint. I start with three to five coverage topics and two to five depth topics, with three to five prompts in each. Once those buckets hold up, I expand the priority topics toward 10 to 25 prompts. Brand names stay out of visibility prompts.",
    },
    {
      title: "Freeze the first baseline",
      description:
        "Add the competitors that appear in the answers, even when they are absent from the sales deck. Treat a persona as a test variable and use it only when the context should change the answer. Save the engines, region, persona, competitor set, and date. Do not rewrite the setup halfway through the first weekly read.",
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
    title: "ChatGPT demand is not a search keyword list",
    description:
      "Generative requests were the largest intent class in more than 50 million ChatGPT prompts. Navigational intent was only 2.1%. If the setup starts with an old SEO keyword sheet, it is measuring different behavior.",
    href: "/research/chatgpt-intent-study",
  },
  {
    value: "89.3%",
    title: "The prompt is only the front door",
    description:
      "In the measured sample, 36.4% of prompts produced two searches and 52.9% produced three. I want to see the language the engine searched, because that is where the source competition happens.",
    href: "/research/250-million-ai-search-results",
  },
  {
    value: "8%",
    title: "Claude and ChatGPT are separate systems",
    description:
      "Claude and ChatGPT shared only 8% of citation domains on average. I do not merge that into one AI visibility score and call the analysis finished.",
    href: "/research/state-of-aeo-2026",
  },
  {
    value: "4–7%",
    title: "Traditional authority leaves most citations unexplained",
    description:
      "Traditional SEO metrics explained 4% to 7% of citation variance across 1,311 pages. That is why I look at the exact answer, page format, freshness, and whether the model can lift a useful passage.",
    href: "/research/250-million-ai-search-results",
  },
] as const;

export const methodologyFaqs = [
  {
    question: "What is the SAGE Method by Profound?",
    answer:
      "I teach SAGE in Profound University as a weekly way to run AEO work. Setup gives you a baseline you trust. Analyze gives you a gap list you believe. Generate turns one of those gaps into shipped work. Engineer makes a process repeatable after it has worked by hand.",
  },
  {
    question: "Who created the SAGE Method?",
    answer:
      "I created SAGE from the sequence I used across enterprise AEO work at Profound, then used it to organize Profound 101. The public course and its operating examples are available through Profound University.",
  },
  {
    question: 'What does "What time is it?" mean in SAGE?',
    answer:
      "It tells me which output is missing. If I cannot defend the prompt set, it is Setup time. If a number moved and nobody knows why, it is Analyze time. If we know the gap and nothing is live, it is Generate time. If the work is useful but painfully manual, it is Engineer time.",
  },
  {
    question: "What is a head term in SAGE Setup?",
    answer:
      'A head term is a short category phrase used to check demand, usually one or two words. "AI search" is a head term. "What are the best AI search platforms for enterprise marketing teams?" is a tracked prompt. I check the head term in Prompt Volumes, read the real prompt examples around it, then write the questions I want to monitor.',
  },
  {
    question: "Is SAGE a one-time checklist?",
    answer:
      "No. Most weeks begin in Analyze once the setup is stable. A new market, product, or shift in buyer language can send the team back to Setup. I use the stage that produces the missing output instead of forcing all four stages into every Monday.",
  },
  {
    question: "How do you measure a SAGE cycle?",
    answer:
      "Keep the prompt set and filters fixed for the cycle. Measure visibility, rank, citations, cited pages, and the language in the answer for each engine. A useful weekly read ends with a reason and an owner. A dashboard movement without either one is still unfinished analysis.",
  },
  {
    question: "Can a team use SAGE without Profound?",
    answer:
      "Yes. Profound makes the workflow easier because the prompt, citation, page, and agent data are in one place. The method still works if a team can collect repeatable answers, preserve its baseline, inspect citations, and keep a human responsible for the decision.",
  },
] as const;
