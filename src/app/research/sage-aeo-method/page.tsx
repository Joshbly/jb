import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { SubpageNav } from "@/components/layout/SubpageNav";
import { SageLoop } from "@/components/methodology/SageLoop";
import { DisplayH2, Section, SectionHeader } from "@/components/shared/Section";
import {
  methodologyFaqs,
  sageEvidence,
  sageLessonUrl,
  sagePhases,
  setupWalkthrough,
} from "@/content/methodology";
import { site } from "@/content/site";
import { methodologyPageJsonLd } from "@/lib/seo";

const pageUrl = `${site.url}/research/sage-aeo-method`;
const title = "SAGE for AEO: A Four-Stage Operating Loop | Josh Blyskal";
const description =
  "SAGE is Josh Blyskal's four-stage way of organizing AEO work, from choosing what to track through diagnosis, execution, and repeatable workflows.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    images: [{ url: site.ogImage, alt: title }],
  },
};

export default function SageAeoMethodPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is built from the static, visible SAGE content
        dangerouslySetInnerHTML={{ __html: JSON.stringify(methodologyPageJsonLd) }}
      />

      <main>
        <header className="px-6 pt-6">
          <div className="mx-auto max-w-7xl">
            <SubpageNav activeHref="/research/sage-aeo-method" />

            <div className="py-24 md:py-32">
              <p className="font-mono text-xs uppercase tracking-widest text-foreground/60">
                Developed by Josh Blyskal at Profound and taught in Profound 101.
              </p>
              <h1 className="mt-5 max-w-5xl font-display text-hero-name font-normal leading-[0.9] tracking-tight">
                SAGE for AEO
              </h1>
              <p className="mt-8 max-w-3xl font-body text-xl leading-relaxed text-foreground/85 md:text-2xl">
                I use SAGE to keep AEO work in a sensible order. It starts with agreeing on what to
                track, then moves through diagnosis and execution. Automation comes later, after the
                team has a process that works by hand.
              </p>
              <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-foreground/70">
                I use the question &quot;what time is it?&quot; as shorthand. It keeps a team from
                jumping to a later stage before the earlier output is reliable.
              </p>
              <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest">
                <a
                  href={sageLessonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent hover:underline"
                >
                  Watch the six-minute lesson ↗
                </a>
                <Link
                  href="/research"
                  className="transition-colors hover:text-accent hover:underline"
                >
                  Read the underlying research →
                </Link>
              </div>
            </div>
          </div>
        </header>

        <Section layout="split">
          <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <DisplayH2>How I decide where to start</DisplayH2>
            <p className="max-w-sm font-body text-lg leading-relaxed text-foreground/80">
              &quot;What time is it?&quot; is a quick way to ask which part of the work is still
              uncertain.
            </p>
          </div>
          <div className="max-w-3xl">
            <div className="space-y-6 font-body text-lg leading-relaxed text-foreground/90">
              <p>
                When I look at a new AEO program, there is usually plenty of activity already
                underway. The team may have a large prompt set, a content calendar, and an
                automation plan, but no shared view of which decision each piece is supposed to
                support. SAGE gives me a way to slow that down and ask which part of the process is
                still uncertain.
              </p>
              <p>
                When the prompt set or baseline is still being debated, I work in Setup. A stable
                baseline with unexplained movement belongs in Analyze. Once the reason is clear, the
                team can move into Generate and decide what to publish or change. I only move the
                repeated parts into Engineer after the manual process has held up more than once.
              </p>
              <p>
                A mature program does not march through all four stages every week. Most weeks begin
                with analysis, although a new product, market, or buyer can make part of the setup
                uncertain again.
              </p>
            </div>
            <div className="mt-14">
              <SageLoop />
            </div>
          </div>
        </Section>

        <Section>
          <SectionHeader
            title="The four stages"
            eyebrow="S · A · G · E"
            className="mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <div>
            {sagePhases.map((phase, phaseIndex) => (
              <article
                key={phase.name}
                id={phase.name.toLowerCase()}
                className="scroll-mt-24 border-b border-foreground/20 py-12 md:py-16"
              >
                <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] lg:gap-20">
                  <header>
                    <p className="font-mono text-xs uppercase tracking-widest text-accent">
                      Stage 0{phaseIndex + 1} · {phase.name} time
                    </p>
                    <h3 className="mt-3 font-display text-4xl font-normal italic leading-tight">
                      {phase.name}
                    </h3>
                    <p className="mt-5 max-w-md font-body text-lg leading-relaxed text-foreground/80">
                      {phase.question}
                    </p>
                    <p className="mt-7 max-w-sm border-l-2 border-accent pl-4 font-mono text-xs uppercase leading-relaxed tracking-wider text-foreground/55">
                      {phase.diagnostic}
                    </p>
                  </header>

                  <div>
                    <p className="max-w-2xl font-body text-lg leading-relaxed text-foreground/90">
                      {phase.summary}
                    </p>

                    {phase.name === "Setup" ? (
                      <div className="mt-10 border-y border-foreground/20 py-8">
                        <p className="font-mono text-xs uppercase tracking-widest text-accent">
                          A practical way to begin
                        </p>
                        <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-foreground/85 md:text-lg">
                          {setupWalkthrough.introduction}
                        </p>

                        <ol className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
                          {setupWalkthrough.steps.map((step, stepIndex) => (
                            <li key={step.title}>
                              <p className="font-mono text-xs text-foreground/40">
                                0{stepIndex + 1}
                              </p>
                              <h4 className="mt-2 font-display text-2xl font-medium leading-snug">
                                {step.title}
                              </h4>
                              <p className="mt-3 font-body text-base leading-relaxed text-foreground/75">
                                {step.description}
                              </p>
                            </li>
                          ))}
                        </ol>

                        <div className="mt-10">
                          <h4 className="font-display text-2xl font-medium">
                            An example using one head term and two prompts
                          </h4>
                          <dl className="mt-5 divide-y divide-foreground/15 border-y border-foreground/15">
                            {setupWalkthrough.example.map((example) => (
                              <div
                                key={example.label}
                                className="grid gap-2 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6"
                              >
                                <dt className="font-mono text-xs uppercase leading-relaxed tracking-wider text-foreground/45">
                                  {example.label}
                                </dt>
                                <dd className="font-body text-base leading-relaxed text-foreground/85">
                                  {example.value}
                                </dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      </div>
                    ) : null}

                    {phase.name === "Setup" ? null : (
                      <div className="mt-10 grid gap-10 sm:grid-cols-2">
                        <div>
                          <h4 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                            What I look at
                          </h4>
                          <ul className="mt-4 space-y-3 font-body text-base leading-relaxed text-foreground/80">
                            {phase.inputs.map((phaseInput) => (
                              <li key={phaseInput} className="flex gap-3">
                                <span
                                  aria-hidden="true"
                                  className="mt-2 size-1.5 shrink-0 bg-accent"
                                />
                                <span>{phaseInput}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                            What I do
                          </h4>
                          <ul className="mt-4 space-y-3 font-body text-base leading-relaxed text-foreground/80">
                            {phase.actions.map((phaseAction) => (
                              <li key={phaseAction} className="flex gap-3">
                                <span
                                  aria-hidden="true"
                                  className="mt-2 size-1.5 shrink-0 bg-foreground/35"
                                />
                                <span>{phaseAction}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    <div className="mt-10 grid gap-px border border-foreground/20 bg-foreground/20 sm:grid-cols-[0.7fr_1.3fr]">
                      <div className="bg-background p-6">
                        <h4 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                          Leave with
                        </h4>
                        <p className="mt-4 font-display text-2xl font-medium leading-snug">
                          {phase.output}
                        </p>
                      </div>

                      <div className="bg-background p-6">
                        <h4 className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                          In practice
                        </h4>
                        <p className="mt-4 font-body text-base leading-relaxed text-foreground/80">
                          {phase.example}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-wider">
                      {phase.sources.map((source) =>
                        source.external ? (
                          <a
                            key={source.href}
                            href={source.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-accent hover:underline"
                          >
                            {source.label} ↗
                          </a>
                        ) : (
                          <Link
                            key={source.href}
                            href={source.href}
                            className="transition-colors hover:text-accent hover:underline"
                          >
                            {source.label} →
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section layout="split">
          <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <DisplayH2>Research that informs how I use SAGE</DisplayH2>
            <p className="max-w-sm font-body text-lg leading-relaxed text-foreground/80">
              I use these studies when I decide what belongs in a setup, how to read a change, and
              whether a proposed fix matches the evidence.
            </p>
            <Link
              href="/research"
              className="inline-block font-mono text-xs uppercase tracking-widest transition-colors hover:text-accent hover:underline"
            >
              Browse all research →
            </Link>
          </div>
          <ol className="divide-y divide-foreground/20 border-y border-foreground/20">
            {sageEvidence.map((finding) => (
              <li key={finding.title} className="py-8">
                <Link
                  href={finding.href}
                  className="group grid gap-5 sm:grid-cols-[6rem_1fr] sm:gap-8"
                >
                  <span className="font-display text-3xl font-normal italic text-accent md:text-4xl">
                    {finding.value}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-medium leading-snug decoration-1 underline-offset-4 group-hover:underline">
                      {finding.title}
                    </h3>
                    <p className="mt-3 max-w-2xl font-body text-base leading-relaxed text-foreground/75">
                      {finding.description}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </Section>

        <Section>
          <SectionHeader
            title="How one problem moves through the method"
            eyebrow="Worked example"
            className="mb-10 gap-2 [&>h2]:text-3xl sm:gap-4 sm:[&>h2]:text-4xl"
          />
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
            <div className="max-w-md space-y-5 font-body text-lg leading-relaxed text-foreground/85">
              <p>
                Imagine a team that wants to understand its visibility for the category AI search.
                The first setup might use that short head term to check demand, then track a small
                group of questions about enterprise marketing teams.
              </p>
              <p>
                The team records the engines, region, competitors, and start date before comparing
                one week with the next. As the work moves through the method, the diagnosis becomes
                more specific until it points to a page and a prompt set the team can monitor.
              </p>
            </div>
            <ol className="divide-y divide-foreground/20 border-y border-foreground/20">
              {[
                {
                  label: "Baseline",
                  description:
                    "The team starts with roughly 20 prompts it can defend and reads the answers before deciding where more coverage is useful.",
                },
                {
                  label: "Prompt-level diagnosis",
                  description:
                    "If ChatGPT visibility falls while citation share looks healthy overall, the analysis narrows to ChatGPT and the publisher or competitor that gained.",
                },
                {
                  label: "Page handoff",
                  description:
                    "When the cited pages are focused comparisons and the existing page is a broad category guide, the handoff is a focused comparison and the URL that will be monitored.",
                },
                {
                  label: "Repeatable read",
                  description:
                    "After the sequence works by hand, the team can compare the same topics and engines each week, send the diagnosis to the owner, and save the new baseline.",
                },
              ].map((handoff, handoffIndex) => (
                <li
                  key={handoff.label}
                  className="grid gap-4 py-7 sm:grid-cols-[3rem_1fr] sm:gap-6"
                >
                  <span className="font-mono text-xs text-accent">0{handoffIndex + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl font-medium leading-snug">
                      {handoff.label}
                    </h3>
                    <p className="mt-3 max-w-2xl font-body text-base leading-relaxed text-foreground/80">
                      {handoff.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest">
            <a
              href={sageLessonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent hover:underline"
            >
              Watch SAGE in Profound 101 ↗
            </a>
            <Link href="/about" className="transition-colors hover:text-accent hover:underline">
              About Josh →
            </Link>
          </div>
        </Section>

        <Section id="methodology-faq" layout="split">
          <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <DisplayH2>Questions about SAGE</DisplayH2>
            <p className="max-w-sm font-body text-lg leading-relaxed text-foreground/80">
              The questions I get about using the loop.
            </p>
          </div>
          <div className="divide-y divide-foreground/20 border-y border-foreground/20">
            {methodologyFaqs.map((faq) => (
              <article key={faq.question} className="py-8">
                <h3 className="font-display text-2xl font-medium leading-snug">{faq.question}</h3>
                <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-foreground/75 md:text-lg">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeader
            title="Keep reading"
            eyebrow="On this site"
            className="mb-10 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <div className="grid gap-px border border-foreground/20 bg-foreground/20 md:grid-cols-3">
            {[
              {
                href: "/research",
                label: "Research",
                description: "The studies behind the numbers on this page.",
              },
              {
                href: "/speaking",
                label: "Speaking",
                description: "Talk topics, recordings, stages, and booking information.",
              },
              {
                href: "/archive",
                label: "Archive",
                description: "Talks, podcasts, press, writing, decks, and public notes.",
              },
            ].map((relatedPage) => (
              <Link
                key={relatedPage.href}
                href={relatedPage.href}
                className="group bg-background p-7 transition-colors hover:bg-foreground/5"
              >
                <h3 className="font-display text-2xl font-medium decoration-1 underline-offset-4 group-hover:underline">
                  {relatedPage.label}
                </h3>
                <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-foreground/70">
                  {relatedPage.description}
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
