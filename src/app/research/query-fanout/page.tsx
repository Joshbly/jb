import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { SubpageNav } from "@/components/layout/SubpageNav";
import { DisplayH2, Section, SectionHeader } from "@/components/shared/Section";
import { site } from "@/content/site";

const pageUrl = `${site.url}/research/query-fanout`;
const title = "Query fan-out: how AI search turns one prompt into many searches";
const description =
  "Observed query fan-out behavior in ChatGPT and Claude, including search counts, Google overlap, year insertion, repetition, limitations, and a practical diagnostic workflow.";
const publishedDate = "2026-09-02";

const chatgptSearchCounts = [
  { label: "Two searches", value: "36.4%" },
  { label: "Three searches", value: "52.9%" },
  { label: "One, four, or five", value: "10.7%" },
] as const;

const engineDifferences = [
  {
    measure: "Fan-outs containing a year",
    claude: "94%",
    chatgpt: "17%",
    note: "Measured with 2025 and 2026 in the observed query strings; sample size is unpublished.",
  },
  {
    measure: "Repeated fan-out strings",
    claude: "~65%",
    chatgpt: "Not reported",
    note: "The repetition count and matching rule are not public.",
  },
  {
    measure: "Citation-domain overlap",
    claude: "8% with ChatGPT",
    chatgpt: "8% with Claude",
    note: "Average domain overlap across more than 600 queries; the public article does not publish the formula.",
  },
] as const;

const diagnosticSteps = [
  {
    title: "Confirm that the engine searched",
    detail:
      "A live page cannot enter the retrieval path when the answer was generated without web search. Record the product mode and search trigger first.",
  },
  {
    title: "Save the underlying query strings",
    detail:
      "Keep each fan-out exactly as issued, including dates, comparison language, locations, and other terms the engine added.",
  },
  {
    title: "Inspect the candidate results",
    detail:
      "Run the fan-out strings through the relevant search index when that index is known. Compare domains, URLs, page types, and passages—not only rank.",
  },
  {
    title: "Trace the selected evidence",
    detail:
      "Record which candidate pages were cited, which claim each citation supports, and whether the brand was included accurately in the final answer.",
  },
  {
    title: "Change the smallest useful source",
    detail:
      "Improve an existing page, publish a focused source, correct product information, or earn corroboration where the engine already looks. Do not create one page per fan-out.",
  },
  {
    title: "Rerun the same prompt",
    detail:
      "Keep engine, market, account state, and other filters fixed. A different fan-out can explain movement even when the page did not change.",
  },
] as const;

const queryFanoutJsonLd = {
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
        { "@type": "Thing", name: "Query fan-out" },
        { "@type": "Thing", name: "AI search retrieval" },
      ],
      citation: [
        `${site.url}/research/250-million-ai-search-results`,
        `${site.url}/research/state-of-aeo-2026`,
        `${site.url}/research/findings`,
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

export default function QueryFanoutPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is generated from the static query fan-out reference rendered below
        dangerouslySetInnerHTML={{ __html: JSON.stringify(queryFanoutJsonLd) }}
      />

      <main>
        <header className="px-6 pt-6">
          <div className="mx-auto max-w-7xl">
            <SubpageNav activeHref="/research" />
            <div className="py-24 md:py-32">
              <p className="font-mono text-xs uppercase tracking-widest text-foreground/60">
                Retrieval reference · Published September 2, 2026
              </p>
              <h1 className="mt-4 max-w-6xl font-display text-hero-name font-normal leading-[0.9] tracking-tight">
                Query fan-out
              </h1>
              <p className="mt-8 max-w-3xl font-body text-xl leading-relaxed text-foreground/85 md:text-2xl">
                Query fan-out is the set of underlying searches an answer engine generates from one
                user prompt before it composes an answer. The prompt is the request. The fan-outs
                reveal what the engine decided it needed to retrieve.
              </p>
              <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest">
                <a href="#chatgpt" className="hover:text-accent hover:underline">
                  ChatGPT findings ↓
                </a>
                <a href="#engines" className="hover:text-accent hover:underline">
                  Engine differences ↓
                </a>
                <a href="#inspect" className="hover:text-accent hover:underline">
                  Inspect fan-out ↓
                </a>
              </div>
            </div>
          </div>
        </header>

        <Section layout="split">
          <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <DisplayH2>A prompt is not a keyword with extra words</DisplayH2>
          </div>
          <div className="max-w-3xl space-y-6 font-body text-lg leading-relaxed text-foreground/90">
            <p>
              An answer engine can decide whether to search, rewrite the request, add a year or
              location, branch into comparison questions, and consult several result sets. Those
              branches create the candidate pages available to the answer.
            </p>
            <p>
              This changes the unit of analysis. Matching the exact prompt wording is not enough if
              the retrieval system searches for something else. A page can answer the original
              question and still never enter the candidate set.
            </p>
            <p>
              Fan-out is diagnostic, not a content-production queue. The useful question is which
              branch created the gap and which source is best suited to close it—not how quickly a
              team can create a page for every generated string.
            </p>
          </div>
        </Section>

        <Section id="chatgpt">
          <SectionHeader
            title="ChatGPT usually issued two or three searches"
            eyebrow="Measured sample"
            className="mb-10 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <div className="grid gap-px border border-foreground/20 bg-foreground/20 md:grid-cols-3">
            {chatgptSearchCounts.map((searchCount) => (
              <div key={searchCount.label} className="bg-background p-8">
                <p className="font-display text-5xl italic text-accent">{searchCount.value}</p>
                <p className="mt-4 font-mono text-xs uppercase tracking-widest text-foreground/60">
                  {searchCount.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-3xl space-y-6 font-body text-lg leading-relaxed text-foreground/90">
            <p>
              In the published ChatGPT fan-out sample, 36.4% of prompts produced two searches and
              52.9% produced three. Together, 89.3% produced two or three underlying searches. The
              remaining 10.7% produced one, four, or five.
            </p>
            <p>
              The public study does not disclose the fan-out sample size. These percentages describe
              the measured prompt mix and should not be presented as a universal ChatGPT rate.
            </p>
            <Link
              href="/research/250-million-ai-search-results"
              className="font-mono text-xs uppercase tracking-widest underline decoration-accent/60 underline-offset-4 hover:text-accent"
            >
              Read the 250M-response study →
            </Link>
          </div>
        </Section>

        <Section layout="split">
          <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <DisplayH2>Fan-out and Google overlapped, but they were not the same</DisplayH2>
          </div>
          <div className="max-w-3xl space-y-6 font-body text-lg leading-relaxed text-foreground/90">
            <p>
              A paired analysis of 1,000 Google result pages and 1,000 ChatGPT executions found 39%
              overlap between ChatGPT&apos;s fan-out results and Google&apos;s results. The study
              supports a connection between search visibility and the candidate set. It does not
              show that copying a fan-out into a title causes a citation.
            </p>
            <p>
              The practical use is to inspect the branches. If an engine searched a comparison the
              site does not answer, that is a content gap. If the right page ranked but the engine
              selected another passage, the problem sits later in the path. Retrieval and citation
              selection are related, not interchangeable.
            </p>
          </div>
        </Section>

        <Section id="engines">
          <SectionHeader
            title="Claude did not fan out like ChatGPT"
            eyebrow="Keep engines separate"
            className="mb-10 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <div className="overflow-x-auto border border-foreground/20">
            <table className="w-full min-w-200 border-collapse text-left">
              <thead className="bg-foreground text-background">
                <tr className="font-mono text-xs uppercase tracking-wider">
                  <th className="px-5 py-4 font-normal">Measure</th>
                  <th className="px-5 py-4 font-normal">Claude</th>
                  <th className="px-5 py-4 font-normal">ChatGPT</th>
                  <th className="px-5 py-4 font-normal">Reading rule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-foreground/20">
                {engineDifferences.map((difference) => (
                  <tr key={difference.measure} className="align-top">
                    <th className="px-5 py-5 font-display text-xl font-medium">
                      {difference.measure}
                    </th>
                    <td className="px-5 py-5 font-mono text-sm text-accent">{difference.claude}</td>
                    <td className="px-5 py-5 font-mono text-sm">{difference.chatgpt}</td>
                    <td className="px-5 py-5 font-body text-sm leading-relaxed text-foreground/70">
                      {difference.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10 max-w-3xl space-y-6 font-body text-lg leading-relaxed text-foreground/90">
            <p>
              In a separate alignment analysis, adding a year to the page title increased query
              similarity by 17%. That is an observed relationship in the measured set, not an
              instruction to add the current year to every title.
            </p>
            <Link
              href="/research/state-of-aeo-2026"
              className="font-mono text-xs uppercase tracking-widest underline decoration-accent/60 underline-offset-4 hover:text-accent"
            >
              Read the State of AEO study →
            </Link>
          </div>
        </Section>

        <Section layout="split">
          <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <DisplayH2>Fan-out changes over time</DisplayH2>
          </div>
          <div className="max-w-3xl space-y-6 font-body text-lg leading-relaxed text-foreground/90">
            <p>
              In a separate 2026 follow-up, the share of measured ChatGPT fan-outs explicitly adding
              Reddit rose from 0.15% in January to 3.68% by late May. The analysis used roughly
              seven million recent citations and a different time window from the original Reddit
              study.
            </p>
            <p>
              That movement is why fan-out language belongs in the measurement record. A page can
              stay unchanged while the engine changes how it researches the same prompt. The
              follow-up should not be pooled with the 2025 six-engine Reddit aggregate.
            </p>
            <Link
              href="/research/reddit-ai-search-data"
              className="font-mono text-xs uppercase tracking-widest underline decoration-accent/60 underline-offset-4 hover:text-accent"
            >
              Read the Reddit citation study →
            </Link>
          </div>
        </Section>

        <Section id="inspect">
          <SectionHeader
            title="How to inspect a fan-out gap"
            eyebrow="Six steps"
            className="mb-10 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <ol className="grid gap-px border border-foreground/20 bg-foreground/20 md:grid-cols-2">
            {diagnosticSteps.map((step, stepIndex) => (
              <li key={step.title} className="bg-background p-7">
                <span className="font-mono text-xs text-accent">0{stepIndex + 1}</span>
                <h3 className="mt-3 font-display text-2xl font-medium">{step.title}</h3>
                <p className="mt-4 font-body text-base leading-relaxed text-foreground/75">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
          <a
            href="https://www.linkedin.com/posts/joshua-blyskal_everyone-in-aeogeo-should-know-how-to-do-activity-7399096886990897152-Udvx"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block font-mono text-xs uppercase tracking-widest underline decoration-accent/60 underline-offset-4 hover:text-accent"
          >
            See the network-log inspection tutorial ↗
          </a>
        </Section>

        <Section layout="split">
          <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <DisplayH2>Limits of the public record</DisplayH2>
          </div>
          <div className="max-w-3xl space-y-6 font-body text-lg leading-relaxed text-foreground/90">
            <p>
              The published fan-out findings come from separate analyses with different units and
              subsamples. The ChatGPT fan-out count, Google overlap, Claude year insertion, and
              Reddit trend are not one pooled experiment.
            </p>
            <p>
              The public material does not include the ChatGPT fan-out denominator, Claude fan-out
              sample size, overlap formula, or raw query logs. Those omissions limit the claims this
              page can make. It reports the observations and the workflow they inform without
              inventing missing precision.
            </p>
          </div>
        </Section>

        <Section>
          <SectionHeader
            title="Continue through the answer path"
            eyebrow="Related references"
            className="mb-10 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <div className="grid gap-px border border-foreground/20 bg-foreground/20 md:grid-cols-3">
            {[
              {
                href: "/research/how-to-measure-ai-visibility",
                label: "Measure AI visibility",
                detail:
                  "Keep the prompt, fan-outs, sources, and answer in one comparable baseline.",
              },
              {
                href: "/research/findings",
                label: "Citable findings",
                detail: "Review samples, methods, dates, and limitations behind the numbers.",
              },
              {
                href: "/research/sage-aeo-method",
                label: "Run the SAGE loop",
                detail: "Turn a retrieval diagnosis into the smallest useful intervention.",
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
