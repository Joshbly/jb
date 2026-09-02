import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { SubpageNav } from "@/components/layout/SubpageNav";
import { DisplayH2, Section, SectionHeader } from "@/components/shared/Section";
import { site } from "@/content/site";

const pageUrl = `${site.url}/research/how-to-measure-ai-visibility`;
const title = "How to measure AI visibility";
const description =
  "A defensible method for measuring AI visibility across prompts, answer engines, citations, mentions, rankings, and changes over time.";
const publishedDate = "2026-09-02";

const metricDefinitions = [
  {
    name: "Visibility rate",
    formula: "Responses that name the brand ÷ eligible responses observed",
    use: "Shows whether the brand entered the answer at all. State whether a passing mention, recommendation, or any appearance counts.",
  },
  {
    name: "Answer rank",
    formula: "The brand's position among named options in each response",
    use: "Separates appearing from being recommended first. Report ties and unordered lists rather than forcing a rank.",
  },
  {
    name: "Citation share",
    formula: "Citations to the domain or source class ÷ citations observed",
    use: "Measures sourcing visibility. It is not the share of answers, and it does not prove that a user read or trusted the citation.",
  },
  {
    name: "Mention share",
    formula: "Brand mentions ÷ all tracked brand mentions",
    use: "Useful for comparisons when the same competitor set and prompt panel stay fixed.",
  },
  {
    name: "Representation",
    formula: "A review of the claims and language attached to the brand",
    use: "Records whether the answer is accurate, current, favorable, and supported by the cited source.",
  },
  {
    name: "Referral traffic",
    formula: "Visits carrying an answer-engine referrer",
    use: "Measures a click outcome. Citations and mentions can still influence a decision without producing a referral.",
  },
] as const;

const baselineFields = [
  "Prompt and the buyer question it represents",
  "Engine, product mode, model when known, and logged-in state",
  "Country, language, device, persona, and any other fixed filters",
  "Date, time, and number of runs",
  "Full answer, included brands, ordering, and exact brand language",
  "Cited domains, URLs, and which claims each citation supports",
] as const;

const reliabilityFindings = [
  {
    value: "0.25 pp",
    title: "One run and ten runs produced similar portfolio citation share",
    detail:
      "Across 753 prompts, seven platforms, roughly 989,000 runs, and 6.66 million citation slots, citation share was 10.24% at one run per day and 9.99% at ten. The result applies to the measured portfolio, not every individual prompt.",
    href: "https://www.tryprofound.com/blog/is-once-a-day-enough",
  },
  {
    value: "40.5–59.3%",
    title: "Citation domains changed materially over one month",
    detail:
      "Across roughly 80,000 prompts per platform, the share of July domains absent from June ranged from 40.5% to 59.3%. The published metric is asymmetric and should not be read as a universal churn rate.",
    href: "/research/findings#field-studies",
  },
  {
    value: "6.81 days",
    title: "New pages did not appear in citations immediately",
    detail:
      "A study of roughly 900 new marketing pages reported a 6.81-day median to first ChatGPT or Claude citation, with a 37.10-day 90th percentile. Many procedural details remain unpublished.",
    href: "/research/findings#field-studies",
  },
] as const;

const measurementJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description,
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      mainEntity: { "@id": `${pageUrl}#article` },
      isPartOf: { "@id": `${site.url}/research#collection` },
    },
    {
      "@type": "TechArticle",
      "@id": `${pageUrl}#article`,
      url: pageUrl,
      headline: title,
      description,
      datePublished: publishedDate,
      dateModified: publishedDate,
      author: { "@id": `${site.url}/#identity`, name: site.name },
      publisher: { "@id": `${site.url}/#identity`, name: site.name },
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      image: `${site.url}${site.ogImage}`,
      about: [
        { "@type": "Thing", name: "AI visibility measurement" },
        { "@type": "Thing", name: "Answer Engine Optimization" },
      ],
      citation: [
        `${site.url}/research/findings`,
        `${site.url}/research/sage-aeo-method`,
        `${site.url}/research/state-of-aeo-2026`,
        "https://www.tryprofound.com/blog/is-once-a-day-enough",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Research", item: `${site.url}/research` },
        { "@type": "ListItem", position: 3, name: title, item: pageUrl },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: { absolute: `${title} | Josh Blyskal` },
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    type: "article",
    publishedTime: publishedDate,
    modifiedTime: publishedDate,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [site.ogImage],
  },
};

export default function MeasureAiVisibilityPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is generated from the static measurement reference rendered below
        dangerouslySetInnerHTML={{ __html: JSON.stringify(measurementJsonLd) }}
      />

      <main>
        <header className="px-6 pt-6">
          <div className="mx-auto max-w-7xl">
            <SubpageNav activeHref="/research" />
            <div className="py-24 md:py-32">
              <p className="font-mono text-xs uppercase tracking-widest text-foreground/60">
                Measurement reference · Published September 2, 2026
              </p>
              <h1 className="mt-4 max-w-5xl font-display text-hero-name font-normal leading-[0.9] tracking-tight">
                How to measure AI visibility
              </h1>
              <p className="mt-8 max-w-3xl font-body text-xl leading-relaxed text-foreground/85 md:text-2xl">
                AI visibility is measured by rerunning a stable set of buyer questions and recording
                whether, where, and how a brand appears. The denominator matters as much as the
                score: prompts, engines, markets, dates, and run frequency have to remain visible.
              </p>
              <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest">
                <a href="#metrics" className="hover:text-accent hover:underline">
                  Metric dictionary ↓
                </a>
                <a href="#baseline" className="hover:text-accent hover:underline">
                  Build a baseline ↓
                </a>
                <a href="#reliability" className="hover:text-accent hover:underline">
                  Reliability ↓
                </a>
              </div>
            </div>
          </div>
        </header>

        <Section layout="split">
          <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <DisplayH2>Start with the decision</DisplayH2>
            <p className="max-w-sm font-body text-lg leading-relaxed text-foreground/80">
              A measurement system is useful when it changes what somebody does next.
            </p>
          </div>
          <div className="max-w-3xl space-y-6 font-body text-lg leading-relaxed text-foreground/90">
            <p>
              Before building a dashboard, decide whether the team is trying to discover missing
              categories, compare engines, diagnose a visibility change, audit brand language, or
              measure referrals. Those questions need different metrics. A single composite score
              can make them look interchangeable.
            </p>
            <p>
              I begin with roughly 20 prompts somebody on the team has read and can defend. Brand
              names stay out of visibility prompts. The first useful baseline is small enough to
              inspect answer by answer and stable enough to rerun without changing the question
              halfway through the comparison.
            </p>
            <p>
              The operating sequence comes from{" "}
              <Link
                href="/research/sage-aeo-method"
                className="underline decoration-accent/60 underline-offset-4 hover:text-accent"
              >
                SAGE
              </Link>
              : establish a baseline, read the movement underneath the aggregate, make one
              diagnosis-led change, then measure the same panel again.
            </p>
          </div>
        </Section>

        <Section id="metrics">
          <SectionHeader
            title="A metric dictionary with denominators"
            eyebrow="Six measures"
            className="mb-10 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <div className="divide-y divide-foreground/20 border-y border-foreground/20">
            {metricDefinitions.map((metric) => (
              <article
                key={metric.name}
                className="grid gap-4 py-7 md:grid-cols-[12rem_1fr_1fr] md:gap-8"
              >
                <h3 className="font-display text-2xl font-medium">{metric.name}</h3>
                <p className="font-mono text-xs uppercase leading-relaxed tracking-wider text-foreground/55">
                  {metric.formula}
                </p>
                <p className="font-body text-base leading-relaxed text-foreground/80">
                  {metric.use}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl font-body text-lg leading-relaxed text-foreground/80">
            Keep counts alongside rates. “Citation share rose” is incomplete without the number of
            prompts, runs, eligible responses, and observed citations. A denominator that changes
            between periods can manufacture movement.
          </p>
        </Section>

        <Section id="baseline" layout="split">
          <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <DisplayH2>Build a baseline another person can inspect</DisplayH2>
            <p className="max-w-sm font-body text-lg leading-relaxed text-foreground/80">
              Save the answer, not only the score.
            </p>
          </div>
          <div>
            <ol className="divide-y divide-foreground/20 border-y border-foreground/20">
              {baselineFields.map((field, fieldIndex) => (
                <li
                  key={field}
                  className="grid gap-4 py-6 sm:grid-cols-[3rem_1fr] sm:items-baseline"
                >
                  <span className="font-mono text-xs text-accent">0{fieldIndex + 1}</span>
                  <span className="font-body text-lg leading-relaxed text-foreground/85">
                    {field}
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-10 border-l-2 border-accent pl-6">
              <h3 className="font-display text-2xl font-medium">A practical 20-prompt panel</h3>
              <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-foreground/80">
                A useful first panel might cover five category-discovery questions, five
                comparisons, five evaluation or objection questions, and five questions about
                implementation. That is a template, not a universal allocation. Read the first
                answers before expanding it.
              </p>
            </div>
          </div>
        </Section>

        <Section layout="split">
          <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <DisplayH2>Separate the engines</DisplayH2>
          </div>
          <div className="max-w-3xl space-y-6 font-body text-lg leading-relaxed text-foreground/90">
            <p>
              Claude and ChatGPT shared 8% of citation domains on average in one sample of more than
              600 queries. A combined score would hide most of that difference. Keep engine-level
              answers, cited domains, and visibility alongside any portfolio summary.
            </p>
            <p>
              Search invocation also changes what can be optimized. Claude searched the web for
              36.6% of prompts in a measured recommendation-and-explainer set. When an engine does
              not search, a newly published page cannot enter that live retrieval path. The rate is
              specific to the tested prompt mix, not a platform constant.
            </p>
            <Link
              href="/research/state-of-aeo-2026"
              className="font-mono text-xs uppercase tracking-widest underline decoration-accent/60 underline-offset-4 hover:text-accent"
            >
              Read the cross-engine study →
            </Link>
          </div>
        </Section>

        <Section id="reliability">
          <SectionHeader
            title="What the reliability studies actually show"
            eyebrow="Do not universalize"
            className="mb-10 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <div className="grid gap-px border border-foreground/20 bg-foreground/20 lg:grid-cols-3">
            {reliabilityFindings.map((finding) => {
              const content = (
                <>
                  <span className="font-display text-4xl italic text-accent">{finding.value}</span>
                  <h3 className="mt-5 font-display text-2xl font-medium leading-snug">
                    {finding.title}
                  </h3>
                  <p className="mt-4 font-body text-sm leading-relaxed text-foreground/70">
                    {finding.detail}
                  </p>
                </>
              );

              return finding.href.startsWith("http") ? (
                <a
                  key={finding.title}
                  href={finding.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background p-7 transition-colors hover:bg-foreground/5"
                >
                  {content}
                </a>
              ) : (
                <Link
                  key={finding.title}
                  href={finding.href}
                  className="bg-background p-7 transition-colors hover:bg-foreground/5"
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </Section>

        <Section layout="split">
          <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <DisplayH2>What AI visibility does not prove</DisplayH2>
          </div>
          <div className="max-w-3xl space-y-6 font-body text-lg leading-relaxed text-foreground/90">
            <p>
              Visibility is not attention, trust, revenue, or causality. A citation can appear below
              the fold. A brand mention can be negative. A referral can come from an answer where
              the brand was not recommended. Keep those outcomes separate.
            </p>
            <p>
              Movement is not automatically an optimization effect. Prompt sampling, product mode,
              model updates, retrieval volatility, seasonality, and competitors can all change the
              answer. Record the intervention and preserve a comparable panel before crediting it.
            </p>
            <p>
              Statistical precision is also easy to overstate. This site does not publish a
              universal margin-of-error formula for AI visibility. The right uncertainty treatment
              depends on the sampling design, outcome, and decision being made.
            </p>
          </div>
        </Section>

        <Section>
          <SectionHeader
            title="Use the measurement, then read the evidence"
            eyebrow="Continue"
            className="mb-10 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <div className="grid gap-px border border-foreground/20 bg-foreground/20 md:grid-cols-3">
            {[
              {
                href: "/research/sage-aeo-method",
                label: "Run the SAGE loop",
                detail:
                  "Move from baseline to diagnosis, shipped work, and repeatable measurement.",
              },
              {
                href: "/research/findings",
                label: "Check the findings",
                detail: "Samples, dates, methods, limitations, and citation formats.",
              },
              {
                href: "/research/query-fanout",
                label: "Inspect query fan-out",
                detail: "See how one prompt can create several underlying searches.",
              },
            ].map((relatedPage) => (
              <Link
                key={relatedPage.href}
                href={relatedPage.href}
                className="group bg-background p-7 transition-colors hover:bg-foreground/5"
              >
                <h3 className="font-display text-2xl font-medium group-hover:underline">
                  {relatedPage.label}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-foreground/70">
                  {relatedPage.detail}
                </p>
              </Link>
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
