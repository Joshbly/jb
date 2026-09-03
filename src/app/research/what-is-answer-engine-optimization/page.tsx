import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { SubpageNav } from "@/components/layout/SubpageNav";
import { DisplayH2, Section } from "@/components/shared/Section";
import { site } from "@/content/site";

const pageUrl = `${site.url}/research/what-is-answer-engine-optimization`;
const pageTitle = "What is answer engine optimization (AEO)?";
const metadataTitle = "What Is Answer Engine Optimization (AEO)? | Josh Blyskal";
const description =
  "Answer engine optimization is the work of improving retrieval, citation, inclusion, position, and accuracy in AI-generated answers. A practitioner-led guide to AEO, GEO, and SEO.";
const publishedDate = "2026-08-03";
const modifiedDate = "2026-09-02";

const aeoAtAGlance = [
  {
    label: "Unit of work",
    value: "A buyer question, its retrieval path, the available sources, and the generated answer.",
  },
  {
    label: "Primary outcomes",
    value: "Retrieval, citation, brand inclusion, position, and accuracy.",
  },
  {
    label: "Core measures",
    value:
      "Visibility rank, visibility score, position, citation share, cited URLs, accuracy, and answer language.",
  },
  {
    label: "When to start smaller",
    value:
      "When buyer demand, the prompt set, or the facts the team can maintain are still unclear.",
  },
] as const;

const aeoQuestions = {
  definition: {
    question: "What is AEO?",
    answer:
      "Answer engine optimization, or AEO, is the practice of improving whether and how a brand, idea, or source is retrieved, cited, included, and represented in an AI-generated answer. The work spans the full answer path: what people ask, whether an engine searches, which sources it retrieves, what it cites, what the final answer says, and how those outcomes change over time.",
  },
  geo: {
    question: "Is AEO the same as GEO?",
    answer:
      "Yes, in current AI-search practice, AEO and GEO are two names for the same discipline. Both use the same inputs, systems, actions, outputs, and success metrics to improve visibility, position, and accuracy in generated answers. A claimed difference matters only when it produces a materially different workflow or measurement system.",
  },
  seo: {
    question: "What is the difference between AEO and SEO?",
    answer:
      "SEO primarily improves a page's eligibility and position in ranked search results, while AEO improves whether and how a source or brand becomes part of a generated answer. SEO remains a foundation because many answer engines retrieve from search indexes, but rankings and clicks alone do not measure citation, inclusion, position, or accuracy inside the answer.",
  },
  competingDefinitions: {
    question: "Why do people say AEO and GEO are different?",
    answer:
      "Competing definitions usually reflect category ownership, software positioning, consulting differentiation, or a preference for one acronym, not evidence of two operational disciplines. The strongest convention reserves AEO for a broader set of direct-answer surfaces and GEO for generative answers, but changing the boundary of a label does not create different work where the workflows overlap.",
  },
  workflow: {
    question: "How does AEO work?",
    answer:
      "AEO works by tracing and improving five linked stages: retrieval, citation selection, answer generation, brand inclusion, and measurement. A practitioner studies the prompts and searches that create the candidate set, the sources and passages selected from it, the language produced in the answer, and the repeatable metrics that show whether a change helped.",
  },
  audience: {
    question: "Who needs AEO?",
    answer:
      "AEO matters most to organizations whose customers use AI systems to research a category, compare options, evaluate claims, or choose a provider. It is especially useful when an answer engine can shape demand before a buyer visits a website, or when the accuracy of the generated description matters as much as receiving a citation.",
  },
  start: {
    question: "How do you start with AEO?",
    answer:
      "Start with a small, defensible set of real buyer questions, run them across the answer engines that matter, and record the answers, citations, competitors, and brand language. Diagnose one visible gap before changing content, then publish or improve the source best suited to close it and measure the same prompt set again.",
  },
  challenge: {
    question: "What would prove AEO and GEO are different?",
    answer:
      "A real distinction would identify a GEO input, activity, target system, output, or success metric that is not also part of AEO and would lead a practitioner to make a different decision. A new name, a narrower definition, or a different emphasis does not pass that test by itself.",
  },
} as const;

const faqEntries = Object.values(aeoQuestions);

const aeoGeoComparisons = [
  {
    distinction: "AEO extracts direct answers; GEO synthesizes narratives.",
    workflow:
      "Research the question, make the source retrievable, publish a clear and supported passage, inspect the cited sources, and rerun the answer.",
    outcome: "Citation or inclusion in a generated answer, with the source used accurately.",
    verdict: "Different descriptions of the presentation layer; no separate practitioner workflow.",
  },
  {
    distinction: "AEO is on-site content; GEO is off-site authority.",
    workflow:
      "Audit owned and third-party sources, improve the best candidate, earn credible corroboration, and monitor which source the engine selects.",
    outcome: "The brand or source enters the retrieval set and influences the answer.",
    verdict: "On-site and off-site work are two workstreams inside the same visibility program.",
  },
  {
    distinction: "AEO earns citations; GEO earns mentions and recommendations.",
    workflow:
      "Map prompts, entities, competitors, evidence, and source gaps; then improve the information available to the engine.",
    outcome: "Citation, mention, recommendation, or a more accurate description in the response.",
    verdict: "The desired answer behavior changes, but the discipline does not.",
  },
  {
    distinction: "AEO targets answer engines; GEO targets generative engines.",
    workflow:
      "Trace search invocation, query fanout, ranking or retrieval, source selection, and answer generation for each platform.",
    outcome:
      "Visibility in ChatGPT, Claude, Gemini, Perplexity, Copilot, AI Overviews, or another direct-answer surface.",
    verdict: "The named products substantially overlap, so the system boundary does not hold.",
  },
  {
    distinction: "AEO measures answer ownership; GEO measures share of model.",
    workflow:
      "Run a fixed prompt panel by engine and measure visibility, citations, mentions, position, sentiment, and answer language.",
    outcome: "A repeatable view of whether and how the brand appears.",
    verdict: "Different dashboard labels for the same family of observations.",
  },
] as const;

const answerPath = [
  {
    name: "Retrieval",
    description:
      "The engine first decides whether it needs current information and where to look. It may answer from model knowledge, call a search index, consult a product or place database, or generate several related searches. In Josh's 2026 tests, Claude searched the web for 36.6% of the tested prompts. No live page optimization can enter the retrieval path when the engine does not search.",
  },
  {
    name: "Citation selection",
    description:
      "The retriever and ranking systems create a candidate set, then the answer system selects sources and passages that support the response. In the same research, 79.2% of Claude's cited URLs appeared in Brave's top 10. Search visibility can therefore determine the shortlist even though the final citation decision has additional requirements.",
  },
  {
    name: "Answer generation",
    description:
      "The model combines retrieved evidence with its instructions and prior knowledge. It may quote a source, paraphrase it, attach a citation to a claim, or use the evidence without naming every contributor. Clear, specific, current passages make the source easier to use, but no formatting trick guarantees selection.",
  },
  {
    name: "Brand inclusion",
    description:
      "A brand can appear as the cited source, an option in a comparison, the subject of a recommendation, or an entity described by third-party evidence. AEO therefore covers more than winning a link. It also asks whether the brand was included, what claim it was attached to, and whether the answer got the facts right.",
  },
  {
    name: "Measurement",
    description:
      "The practitioner reruns a stable set of prompts and separates the results by engine, market, and intent. I read visibility rank first, then visibility score, position, citation share, cited URLs, accuracy, and the exact language used to describe the brand.",
  },
] as const;

const aeoReferencePageJsonLd = {
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
      hasPart: { "@id": `${pageUrl}#faq` },
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
        { "@type": "Thing", name: "Answer Engine Optimization", alternateName: "AEO" },
        { "@type": "Thing", name: "Generative Engine Optimization", alternateName: "GEO" },
        { "@type": "Thing", name: "AI search" },
      ],
      articleSection: faqEntries.map((faq) => faq.question),
      citation: [
        `${site.url}/research/250-million-ai-search-results`,
        `${site.url}/research/state-of-aeo-2026`,
        `${site.url}/research/sage-aeo-method`,
        "https://arxiv.org/abs/2311.09735",
        "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
        "https://ahrefs.com/blog/answer-engine-optimization/",
        "https://ahrefs.com/blog/geo-generative-engine-optimization/",
        "https://www.semrush.com/blog/answer-engine-optimization/",
        "https://www.semrush.com/blog/generative-engine-optimization/",
        "https://about.ads.microsoft.com/content/dam/sites/msa-about/global/common/content-lib/pdf/from-discovery-to-influence-a-guide-to-aeo-and-geo.pdf",
      ],
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
      url: `${pageUrl}#questions`,
      isPartOf: { "@id": `${pageUrl}#webpage` },
      mainEntity: faqEntries.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
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

export default function WhatIsAnswerEngineOptimizationPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is generated from the static reference content rendered below
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoReferencePageJsonLd) }}
      />

      <main>
        <header className="px-6 pt-6">
          <div className="mx-auto max-w-7xl">
            <SubpageNav activeHref="/research" />

            <div className="py-24 md:py-32">
              <p className="font-mono text-xs uppercase tracking-widest text-foreground/60">
                Practitioner reference · Published August 3, 2026 · Updated September 2, 2026
              </p>
              <h1 className="mt-5 max-w-5xl font-display text-hero-name font-normal leading-[0.9] tracking-tight">
                What is answer engine optimization?
              </h1>
              <p className="mt-8 max-w-4xl font-body text-xl leading-relaxed text-foreground/85 md:text-2xl">
                Answer engine optimization (AEO) is the practice of improving whether and how a
                brand, idea, or source is retrieved, cited, included, and represented in
                AI-generated answers. That definition reflects the work we can observe across
                Profound&apos;s analysis of more than 250 million responses and 3 billion citations:
                trace retrieval, inspect source selection, read the answer, and measure the
                brand&apos;s presence.
              </p>
              <dl className="mt-10 grid gap-px border border-foreground/20 bg-foreground/20 sm:grid-cols-2 lg:grid-cols-4">
                {aeoAtAGlance.map((glanceItem) => (
                  <div key={glanceItem.label} className="bg-background p-5">
                    <dt className="font-mono text-xs uppercase tracking-widest text-accent">
                      {glanceItem.label}
                    </dt>
                    <dd className="mt-3 font-body text-sm leading-relaxed text-foreground/75">
                      {glanceItem.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <blockquote className="mt-10 max-w-4xl border-l-4 border-accent pl-6 font-display text-3xl font-normal italic leading-tight md:text-5xl">
                AEO and GEO are two names for the same discipline. Change my mind.
              </blockquote>
              <p className="mt-8 max-w-3xl font-body text-lg leading-relaxed text-foreground/70">
                Both describe the work of improving whether and how a brand, idea, or source appears
                in AI-generated answers. This page uses AEO for the discipline and tests every
                proposed distinction from GEO against the work a practitioner actually does.
              </p>
              <p className="mt-5 max-w-3xl font-body text-base leading-relaxed text-foreground/65">
                AEO, GEO, LLM SEO, LLMO, and AI search optimization are overlapping labels. This
                page uses AEO because the work begins with the answer path, then tests whether a
                naming distinction changes the practitioner&apos;s workflow.
              </p>
              <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest">
                <a
                  href="#questions"
                  className="transition-colors hover:text-accent hover:underline"
                >
                  Read the eight questions ↓
                </a>
                <a href="#aeo-vs-seo" className="hover:text-accent hover:underline">
                  AEO vs SEO ↓
                </a>
                <a href="#aeo-vs-geo" className="hover:text-accent hover:underline">
                  AEO vs GEO ↓
                </a>
                <a href="#start-aeo" className="hover:text-accent hover:underline">
                  How to start ↓
                </a>
              </div>
            </div>
          </div>
        </header>

        <div id="questions">
          <Section id="what-is-aeo" layout="split">
            <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">Definition</p>
              <DisplayH2>{aeoQuestions.definition.question}</DisplayH2>
            </div>

            <div className="max-w-3xl">
              <p className="font-body text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
                {aeoQuestions.definition.answer}
              </p>
              <div className="mt-8 space-y-6 font-body text-lg leading-relaxed text-foreground/80">
                <p>
                  The unit of work is not a keyword or a page by itself. It is the relationship
                  between a question, the retrieval systems an engine invokes, the sources those
                  systems make available, and the generated response a person sees. A page can rank
                  and still be left out. A brand can be mentioned without receiving the citation. A
                  cited source can be used to support a competitor. AEO measures and improves all
                  three cases.
                </p>
                <p>
                  This makes AEO an operating discipline, not a writing template. Clear answers,
                  crawlable pages, structured data, original research, product feeds, third-party
                  coverage, and entity consistency can all matter, but only when they address a
                  diagnosed part of the answer path. There is no universal markup or paragraph
                  length that bypasses retrieval and source selection.
                </p>
              </div>

              <aside className="mt-12 border-2 border-foreground p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-foreground/20 pb-5">
                  <h3 className="font-display text-3xl font-medium">Key findings</h3>
                  <span className="font-mono text-xs uppercase tracking-widest text-foreground/45">
                    Josh&apos;s research
                  </span>
                </div>
                <div className="grid gap-8 pt-7 md:grid-cols-3">
                  <div>
                    <p className="font-display text-5xl font-normal italic text-accent">89.3%</p>
                    <p className="mt-3 font-body text-sm leading-relaxed text-foreground/75">
                      of prompts in the measured sample produced two or three underlying searches.
                    </p>
                    <Link
                      href="/research/250-million-ai-search-results"
                      className="mt-4 inline-block font-mono text-xs uppercase tracking-wider underline decoration-1 underline-offset-4"
                    >
                      250M-response study →
                    </Link>
                  </div>
                  <div>
                    <p className="font-display text-5xl font-normal italic text-accent">4–7%</p>
                    <p className="mt-3 font-body text-sm leading-relaxed text-foreground/75">
                      of citation variance across 1,311 pages was explained by the tested
                      traditional SEO metrics.
                    </p>
                    <Link
                      href="/research/250-million-ai-search-results"
                      className="mt-4 inline-block font-mono text-xs uppercase tracking-wider underline decoration-1 underline-offset-4"
                    >
                      Citation analysis →
                    </Link>
                  </div>
                  <div>
                    <p className="font-display text-5xl font-normal italic text-accent">8%</p>
                    <p className="mt-3 font-body text-sm leading-relaxed text-foreground/75">
                      average citation-domain overlap between Claude and ChatGPT in the measured
                      set.
                    </p>
                    <Link
                      href="/research/state-of-aeo-2026"
                      className="mt-4 inline-block font-mono text-xs uppercase tracking-wider underline decoration-1 underline-offset-4"
                    >
                      State of AEO 2026 →
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </Section>

          <Section id="aeo-vs-geo" layout="split">
            <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                One discipline, two acronyms
              </p>
              <DisplayH2>{aeoQuestions.geo.question}</DisplayH2>
            </div>

            <div className="min-w-0">
              <p className="max-w-3xl font-body text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
                {aeoQuestions.geo.answer}
              </p>

              <div className="mt-8 max-w-3xl space-y-6 font-body text-lg leading-relaxed text-foreground/80">
                <p>
                  The published definitions converge. The original{" "}
                  <a
                    href="https://arxiv.org/abs/2311.09735"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-accent hover:text-accent"
                  >
                    GEO paper
                  </a>{" "}
                  defines generative engine optimization as improving content visibility in
                  generative-engine responses.{" "}
                  <a
                    href="https://ahrefs.com/blog/answer-engine-optimization/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-accent hover:text-accent"
                  >
                    Ahrefs defines AEO
                  </a>{" "}
                  as making content visible and useful to systems that deliver direct answers, with
                  mentions and citations as the outcome.{" "}
                  <a
                    href="https://www.semrush.com/blog/answer-engine-optimization/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-accent hover:text-accent"
                  >
                    Semrush&apos;s AEO definition
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.semrush.com/blog/generative-engine-optimization/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-accent hover:text-accent"
                  >
                    its GEO definition
                  </a>{" "}
                  both target appearance in AI-generated answers.
                </p>
                <p>
                  Google&apos;s official guidance refers to AEO and GEO together when discussing
                  optimization claims, then gives one set of advice for generative AI search. Ahrefs
                  explicitly calls GEO &ldquo;also known as AEO or LLMO.&rdquo; Those sources can
                  disagree about whether the work is a branch of SEO, but they do not establish
                  separate AEO and GEO production systems.
                </p>
              </div>

              <h3 className="mt-14 font-display text-3xl font-medium leading-tight md:text-4xl">
                AEO vs GEO: Is there an actual difference?
              </h3>
              <p className="mt-3 font-mono text-xs leading-relaxed tracking-wide text-foreground/50 xl:hidden">
                Swipe the table horizontally to compare all four columns.
              </p>
              <div className="mt-6 overflow-x-auto border border-foreground/20">
                <table className="w-full min-w-250 border-collapse text-left">
                  <thead className="bg-foreground text-background">
                    <tr className="font-mono text-xs uppercase tracking-wider">
                      <th className="w-64 px-5 py-4 font-normal">Claimed distinction</th>
                      <th className="w-72 px-5 py-4 font-normal">Practical workflow</th>
                      <th className="w-64 px-5 py-4 font-normal">Measured outcome</th>
                      <th className="w-64 px-5 py-4 font-normal">Verdict</th>
                    </tr>
                  </thead>
                  <tbody>
                    {aeoGeoComparisons.map((comparison) => (
                      <tr
                        key={comparison.distinction}
                        className="border-b border-foreground/20 align-top last:border-b-0"
                      >
                        <th
                          scope="row"
                          className="px-5 py-5 font-body text-sm font-semibold leading-relaxed"
                        >
                          {comparison.distinction}
                        </th>
                        <td className="px-5 py-5 font-body text-sm leading-relaxed text-foreground/75">
                          {comparison.workflow}
                        </td>
                        <td className="px-5 py-5 font-body text-sm leading-relaxed text-foreground/75">
                          {comparison.outcome}
                        </td>
                        <td className="px-5 py-5 font-body text-sm font-semibold leading-relaxed text-accent">
                          {comparison.verdict}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-14 border-y-2 border-foreground py-9">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  Operational standard
                </p>
                <h3 className="mt-3 font-display text-3xl font-medium leading-tight md:text-4xl">
                  The test for a real distinction
                </h3>
                <p className="mt-5 max-w-3xl font-body text-xl leading-relaxed text-foreground/85">
                  If two disciplines use the same inputs, actions, systems, outputs, and success
                  metrics, the naming difference does not establish a separate practice.
                </p>
                <p className="mt-5 max-w-3xl font-body text-base leading-relaxed text-foreground/70 md:text-lg">
                  A useful distinction should change what a practitioner does. It should require an
                  exclusive input, introduce an activity that the other discipline does not perform,
                  target a different class of system, produce a different kind of output, or use a
                  success metric that leads to a different decision. If the same team audits the
                  same prompts, sources, citations, mentions, and answer language, then the split is
                  taxonomic rather than operational.
                </p>
              </div>
            </div>
          </Section>

          <Section id="competing-definitions" layout="split">
            <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                How categories form
              </p>
              <DisplayH2>{aeoQuestions.competingDefinitions.question}</DisplayH2>
            </div>

            <div className="max-w-3xl">
              <p className="font-body text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
                {aeoQuestions.competingDefinitions.answer}
              </p>

              <div className="mt-12 grid gap-px border border-foreground/20 bg-foreground/20 sm:grid-cols-2">
                {[
                  {
                    title: "Category ownership",
                    description:
                      "A new acronym creates a category that an author, company, or community can define. Naming the category can make the namer look like its origin or authority.",
                  },
                  {
                    title: "Software positioning",
                    description:
                      "A product benefits when the category definition maps neatly to the product's strongest feature, whether that feature is content scoring, citation monitoring, entity tracking, or digital PR.",
                  },
                  {
                    title: "Consulting differentiation",
                    description:
                      "A consultancy can make a familiar workflow appear proprietary by drawing a boundary around one part of it and assigning that part a new name.",
                  },
                  {
                    title: "Acronym preference",
                    description:
                      "Some teams simply prefer answer, generative, AI search, LLM, or organic visibility as the umbrella term. Vocabulary can differ without changing the operating model.",
                  },
                ].map((definitionDriver) => (
                  <article key={definitionDriver.title} className="bg-background p-6 md:p-7">
                    <h3 className="font-display text-2xl font-medium">{definitionDriver.title}</h3>
                    <p className="mt-4 font-body text-base leading-relaxed text-foreground/75">
                      {definitionDriver.description}
                    </p>
                  </article>
                ))}
              </div>

              <p className="mt-8 font-body text-sm leading-relaxed text-foreground/55">
                These incentives do not prove bad faith. They explain why a market can produce
                several confident taxonomies before it produces evidence that the underlying work is
                different.
              </p>

              <div className="mt-14">
                <h3 className="font-display text-3xl font-medium leading-tight">
                  How an unsupported distinction starts to look established
                </h3>
                <div className="mt-5 space-y-5 font-body text-lg leading-relaxed text-foreground/80">
                  <p>
                    An article can assert that AEO is on-site while GEO is off-site, or that AEO
                    earns quotations while GEO earns recommendations, without showing a different
                    retrieval system or workflow. Later articles summarize that claim. AI-generated
                    articles are especially able to turn repeated wording into a tidy comparison
                    table. Once enough pages repeat the split, search results make repetition look
                    like independent agreement.
                  </p>
                  <p>
                    That is definition laundering, not validation. The remedy is to trace claims
                    back to system documentation, observed outputs, or a workflow that makes a
                    different prediction. Google&apos;s{" "}
                    <a
                      href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b border-accent hover:text-accent"
                    >
                      generative AI search guide
                    </a>{" "}
                    groups AEO and GEO together and warns that many associated hacks are
                    unsupported. Its advice is to build valuable, retrievable content on a sound
                    search foundation, not to follow a special acronym-specific format.
                  </p>
                </div>
              </div>

              <div className="mt-14 border-l-4 border-accent pl-6">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  Strongest counterargument
                </p>
                <h3 className="mt-3 font-display text-3xl font-medium leading-tight">
                  AEO can name more answer surfaces than GEO
                </h3>
                <p className="mt-5 font-body text-lg leading-relaxed text-foreground/80">
                  Some practitioners use AEO for every surface that returns a direct answer,
                  including featured snippets and voice assistants, while reserving GEO for
                  generative responses. That convention is coherent. It gives AEO a broader boundary
                  and GEO a narrower one.
                </p>
                <p className="mt-5 font-body text-lg leading-relaxed text-foreground/80">
                  It still does not establish two practices inside their shared AI-answer scope. The
                  practitioner may add a voice-answer metric or a featured-snippet report, just as
                  an SEO program adds local or image-search measurements. The engine-specific task
                  changes, but retrieval, source eligibility, answer selection, and measurement
                  remain part of the same operating discipline.
                </p>
                <p className="mt-5 font-body text-base leading-relaxed text-foreground/65">
                  Microsoft offers another naming convention: AEO for clarity and enriched data, GEO
                  for credibility and authority. Its own workflow combines feeds, crawled pages,
                  off-site evidence, retrieval, and recommendation. That is a useful division of
                  work, but not evidence that either half can operate as an independent discipline.
                </p>
              </div>
            </div>
          </Section>

          <Section id="how-aeo-works" layout="split">
            <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                How AEO works
              </p>
              <DisplayH2>{aeoQuestions.workflow.question}</DisplayH2>
            </div>

            <div className="max-w-3xl">
              <p className="font-body text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
                {aeoQuestions.workflow.answer}
              </p>

              <ol className="mt-12 divide-y divide-foreground/20 border-y border-foreground/20">
                {answerPath.map((answerStage, stageIndex) => (
                  <li
                    key={answerStage.name}
                    className="grid gap-5 py-9 sm:grid-cols-[4rem_1fr] sm:gap-8"
                  >
                    <span className="font-display text-4xl font-normal italic text-accent">
                      0{stageIndex + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-3xl font-medium">{answerStage.name}</h3>
                      <p className="mt-4 font-body text-lg leading-relaxed text-foreground/78">
                        {answerStage.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-10 bg-foreground p-7 text-background md:p-9">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  Practitioner rule
                </p>
                <p className="mt-4 font-display text-3xl font-normal italic leading-tight">
                  Diagnose the stage before prescribing the tactic.
                </p>
                <p className="mt-5 font-body text-base leading-relaxed text-background/75 md:text-lg">
                  A citation problem caused by retrieval will not be fixed by rewriting the final
                  paragraph. An accurate citation with a missing brand mention may need a different
                  passage or third-party source. A one-week visibility change may need another
                  measurement before it needs new content.
                </p>
                <Link
                  href="/research/sage-aeo-method"
                  className="mt-6 inline-block font-mono text-xs uppercase tracking-widest underline decoration-accent underline-offset-4"
                >
                  Use SAGE to run the loop →
                </Link>
              </div>
            </div>
          </Section>

          <Section id="aeo-vs-seo" layout="split">
            <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Related, not interchangeable
              </p>
              <DisplayH2>{aeoQuestions.seo.question}</DisplayH2>
            </div>

            <div className="max-w-3xl">
              <p className="font-body text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
                {aeoQuestions.seo.answer}
              </p>

              <dl className="mt-12 divide-y divide-foreground/20 border-y border-foreground/20">
                {[
                  {
                    term: "Primary surface",
                    seo: "SEO: a ranked list, result feature, map, image, or product result.",
                    aeo: "AEO: a generated or direct answer that selects, combines, and presents information.",
                  },
                  {
                    term: "Unit of visibility",
                    seo: "SEO: usually the page or listing and its position.",
                    aeo: "AEO: the source, passage, entity, claim, citation, position, and accuracy of the resulting brand description.",
                  },
                  {
                    term: "Query path",
                    seo: "SEO: the submitted query and the result set it returns.",
                    aeo: "AEO: the prompt plus any search decision, fanout queries, indexes, tools, and source-selection steps.",
                  },
                  {
                    term: "Core measurement",
                    seo: "SEO: rankings, impressions, clicks, traffic, and conversions.",
                    aeo: "AEO: visibility rank, visibility score, position, citation share, accuracy, answer language, and downstream behavior.",
                  },
                ].map((seoDifference) => (
                  <div
                    key={seoDifference.term}
                    className="grid gap-4 py-7 sm:grid-cols-[10rem_1fr] sm:gap-8"
                  >
                    <dt className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                      {seoDifference.term}
                    </dt>
                    <dd className="space-y-2 font-body text-base leading-relaxed text-foreground/80">
                      <p>{seoDifference.seo}</p>
                      <p>{seoDifference.aeo}</p>
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 space-y-5 font-body text-lg leading-relaxed text-foreground/80">
                <p>
                  The boundary is not a wall. Google says its generative features use core Search
                  ranking and quality systems, retrieval-augmented generation, and query fanout. A
                  page generally has to be crawlable, indexed, and eligible for a snippet before
                  Google can use it in a generative answer. Similar dependencies appear elsewhere:
                  Josh found 79.2% of Claude&apos;s citations in Brave&apos;s top 10 for the tested
                  set.
                </p>
                <p>
                  But a search rank is not the final AEO outcome. Across 1,311 pages, the
                  traditional SEO metrics Josh tested explained only 4% to 7% of citation variance.
                  That association was statistically reliable, but most of the citation decision
                  remained unexplained by those measures. AEO starts with the SEO foundation and
                  continues through the answer.
                </p>
              </div>

              <Link
                href="/research/250-million-ai-search-results"
                className="mt-8 inline-block font-mono text-xs uppercase tracking-widest underline decoration-accent underline-offset-4"
              >
                Read the 250M-response study →
              </Link>
            </div>
          </Section>

          <Section id="who-needs-aeo" layout="split">
            <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Where it matters
              </p>
              <DisplayH2>{aeoQuestions.audience.question}</DisplayH2>
            </div>

            <div className="max-w-3xl">
              <p className="font-body text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
                {aeoQuestions.audience.answer}
              </p>

              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                {[
                  {
                    title: "Brands in evaluated categories",
                    description:
                      "Buyers ask for a shortlist, comparison, recommendation, or explanation before they know which sites to visit.",
                  },
                  {
                    title: "Publishers and expert sources",
                    description:
                      "Original research, reporting, documentation, reviews, or reference material can become evidence inside many answers.",
                  },
                  {
                    title: "Products with structured facts",
                    description:
                      "Price, availability, specifications, locations, policies, and other changing details must be retrievable and represented accurately.",
                  },
                  {
                    title: "Organizations with reputation risk",
                    description:
                      "An incomplete or wrong generated description can affect trust even when the answer never sends a click.",
                  },
                ].map((aeoAudience) => (
                  <article key={aeoAudience.title}>
                    <h3 className="font-display text-2xl font-medium">{aeoAudience.title}</h3>
                    <p className="mt-3 font-body text-base leading-relaxed text-foreground/75">
                      {aeoAudience.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-12 border-t border-foreground/20 pt-8">
                <h3 className="font-display text-3xl font-medium">
                  Not every team needs a large program
                </h3>
                <p className="mt-4 font-body text-lg leading-relaxed text-foreground/80">
                  If buyers rarely use answer engines for the category, the brand has no meaningful
                  prompt set, or the team cannot maintain the facts it publishes, start with a small
                  baseline instead of a content factory. The first useful result may be learning
                  that another channel matters more.
                </p>
                <Link
                  href="/research/how-to-measure-ai-visibility"
                  className="mt-7 inline-block font-mono text-xs uppercase tracking-widest underline decoration-accent underline-offset-4"
                >
                  Build a defensible measurement baseline →
                </Link>
              </div>
            </div>
          </Section>

          <Section id="start-aeo" layout="split">
            <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                First operating cycle
              </p>
              <DisplayH2>{aeoQuestions.start.question}</DisplayH2>
            </div>

            <div className="max-w-3xl">
              <p className="font-body text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
                {aeoQuestions.start.answer}
              </p>

              <ol className="mt-12 space-y-10">
                {[
                  {
                    title: "Choose the questions",
                    description:
                      "Begin with three to five category topics and roughly 20 prompts that somebody on the team has read and can defend. Include discovery, comparison, evaluation, and objection questions. Keep brand names out of visibility prompts.",
                  },
                  {
                    title: "Save a baseline",
                    description:
                      "Record the engine, location, date, answer, cited domains and URLs, included brands, ordering, and exact language used about the brand. Keep those settings fixed for the first comparison.",
                  },
                  {
                    title: "Trace one gap",
                    description:
                      "Pick a consequential miss and inspect whether the engine searched, which fanout it used, what ranked or entered the candidate set, and why the selected source answered the question better.",
                  },
                  {
                    title: "Make the smallest useful change",
                    description:
                      "Improve an existing page, create a focused source, correct structured product information, or earn coverage where the engine already looks. The diagnosis should determine where the work lives.",
                  },
                  {
                    title: "Measure before scaling",
                    description:
                      "Rerun the same panel, read the answers, and record what changed. Repeat the manual cycle before automating collection or generating a larger content plan.",
                  },
                ].map((startingStep, startingStepIndex) => (
                  <li
                    key={startingStep.title}
                    className="grid gap-5 sm:grid-cols-[4rem_1fr] sm:gap-8"
                  >
                    <span className="font-mono text-xs text-accent">0{startingStepIndex + 1}</span>
                    <div>
                      <h3 className="font-display text-3xl font-medium">{startingStep.title}</h3>
                      <p className="mt-4 font-body text-lg leading-relaxed text-foreground/78">
                        {startingStep.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-14 border-y border-foreground/20 py-8">
                <h3 className="font-display text-3xl font-medium">Research and operating guides</h3>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {[
                    {
                      href: "/research/findings",
                      title: "AI search research findings",
                      description:
                        "Citable statistics with samples, dates, methods, and limitations.",
                    },
                    {
                      href: "/research/sage-aeo-method",
                      title: "SAGE for AEO",
                      description: "The Setup, Analyze, Generate, Engineer operating loop.",
                    },
                    {
                      href: "/research/how-to-measure-ai-visibility",
                      title: "How I measure AI visibility",
                      description:
                        "Why I read visibility rank first, then score, position, citation share, and accuracy.",
                    },
                    {
                      href: "/research/query-fanout",
                      title: "Query fan-out",
                      description:
                        "How one prompt becomes several searches across different engines.",
                    },
                    {
                      href: "/research/250-million-ai-search-results",
                      title: "250 million AI search results",
                      description:
                        "What the citation data says about retrieval and source formats.",
                    },
                    {
                      href: "/research/state-of-aeo-2026",
                      title: "The State of AEO 2026",
                      description: "How Claude, ChatGPT, Brave, and Google follow different paths.",
                    },
                  ].map((operatingGuide) => (
                    <Link
                      key={operatingGuide.href}
                      href={operatingGuide.href}
                      className="group border border-foreground/20 p-5 transition-colors hover:bg-foreground/5"
                    >
                      <h4 className="font-display text-2xl font-medium decoration-1 underline-offset-4 group-hover:underline">
                        {operatingGuide.title}
                      </h4>
                      <p className="mt-3 font-body text-sm leading-relaxed text-foreground/70">
                        {operatingGuide.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-display text-3xl font-medium">
                  Sources behind the terminology
                </h3>
                <ul className="mt-6 space-y-4 font-body text-base leading-relaxed text-foreground/75">
                  {[
                    {
                      href: "https://arxiv.org/abs/2311.09735",
                      label: "Aggarwal et al., GEO: Generative Engine Optimization",
                      note: "The 2024 paper's definition and black-box optimization framework.",
                    },
                    {
                      href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
                      label: "Google Search Central, optimizing for generative AI features",
                      note: "Official retrieval, fanout, technical, content, and measurement guidance.",
                    },
                    {
                      href: "https://ahrefs.com/blog/geo-is-just-seo/",
                      label: "Ahrefs, GEO, LLMO, AEO… It's All Just SEO",
                      note: "An explicit argument that the AI-search acronyms name the same idea.",
                    },
                    {
                      href: "https://about.ads.microsoft.com/content/dam/sites/msa-about/global/common/content-lib/pdf/from-discovery-to-influence-a-guide-to-aeo-and-geo.pdf",
                      label: "Microsoft Advertising, A guide to AEO and GEO",
                      note: "A clear example of the proposed clarity-versus-credibility distinction.",
                    },
                  ].map((terminologySource) => (
                    <li key={terminologySource.href}>
                      <a
                        href={terminologySource.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold underline decoration-accent/60 underline-offset-4 hover:text-accent"
                      >
                        {terminologySource.label} ↗
                      </a>
                      <span className="text-foreground/60"> — {terminologySource.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          <Section id="challenge" layout="split">
            <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Falsifiable challenge
              </p>
              <DisplayH2>{aeoQuestions.challenge.question}</DisplayH2>
            </div>

            <div className="max-w-3xl">
              <p className="font-body text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
                {aeoQuestions.challenge.answer}
              </p>
              <p className="mt-8 font-display text-4xl font-normal italic leading-tight md:text-5xl">
                Identify one GEO activity, input, output, system, or metric that is not also part of
                AEO.
              </p>
              <div className="mt-10 space-y-5 font-body text-lg leading-relaxed text-foreground/80">
                <p>
                  Make the distinction concrete. Name the task, show the different workflow, and
                  explain which decision changes because the practitioner calls it GEO instead of
                  AEO. A difference in emphasis is useful, but it is not enough. A definition that
                  excludes overlapping work by fiat is circular.
                </p>
                <p>
                  If a proposed distinction survives the inputs-actions-systems-outputs-metrics
                  test, I will update this page and credit the evidence. Until then, AEO and GEO are
                  competing names for the same practice.
                </p>
              </div>
              <a
                href="mailto:josh@tryprofound.com?subject=AEO%20vs%20GEO%3A%20a%20concrete%20distinction"
                className="mt-10 inline-block border-b-2 border-accent pb-1 font-mono text-xs uppercase tracking-widest transition-colors hover:text-accent"
              >
                Submit a distinction that passes the test →
              </a>
            </div>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
