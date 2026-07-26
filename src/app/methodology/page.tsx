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

const title = "The SAGE Method | Josh Blyskal";
const description =
  "Josh Blyskal's practical AEO method for building a baseline, diagnosing visibility gaps, shipping fixes, and automating work that has already proved useful.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${site.url}/methodology` },
  openGraph: {
    title,
    description,
    url: `${site.url}/methodology`,
    images: [{ url: site.ogImage, alt: title }],
  },
};

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is built from the static, visible methodology content
        dangerouslySetInnerHTML={{ __html: JSON.stringify(methodologyPageJsonLd) }}
      />

      <main>
        <header className="px-6 pt-6">
          <div className="mx-auto max-w-7xl">
            <SubpageNav activeHref="/methodology" />

            <div className="py-24 md:py-32">
              <p className="font-mono text-xs uppercase tracking-widest text-foreground/60">
                Created by Josh Blyskal · Taught through Profound University
              </p>
              <h1 className="mt-5 max-w-5xl font-display text-hero-name font-normal leading-[0.9] tracking-tight">
                The SAGE Method
              </h1>
              <p className="mt-8 max-w-3xl font-body text-xl leading-relaxed text-foreground/85 md:text-2xl">
                SAGE is how I run AEO work: decide what to track, figure out why a brand is winning
                or losing, ship the right fix, then automate the pieces that have proved useful.
              </p>
              <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-foreground/70">
                I built it while working with enterprise teams at Profound and later used it to
                structure Profound 101. The question at the center is almost stupidly simple: what
                time is it?
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
            <DisplayH2>What time is it?</DisplayH2>
            <p className="max-w-sm font-body text-lg leading-relaxed text-foreground/80">
              You do not need every SAGE stage at once. You need the one that produces the missing
              output.
            </p>
          </div>
          <div className="max-w-3xl">
            <div className="space-y-6 font-body text-lg leading-relaxed text-foreground/90">
              <p>
                Teams make AEO harder when they do the jobs out of order. They generate hundreds of
                prompts before deciding what matters, then publish content because a dashboard
                turned red. I have also watched teams automate a workflow nobody has run
                successfully by hand. That usually creates faster confusion.
              </p>
              <p>
                If I cannot defend the baseline, it is Setup time. If a number moved and nobody can
                explain it, it is Analyze time. If the team knows the gap and nothing is live, it is
                Generate time. If the work is useful but exhausting to repeat, it is Engineer time.
              </p>
              <p>
                Once the baseline holds up, most weeks begin in Analyze. A new product, market, or
                buyer can send me back to Setup. That is normal.
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
                          A sane first pass
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
                            One head term, then two prompts
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
            <DisplayH2>The research underneath SAGE</DisplayH2>
            <p className="max-w-sm font-body text-lg leading-relaxed text-foreground/80">
              SAGE came out of work across several datasets, not one study. These four findings
              changed what I track and what I tell teams to do next.
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
            title="How I run SAGE with a team"
            eyebrow="Field use"
            className="mb-12 gap-2 [&>h2]:text-3xl sm:gap-4 sm:[&>h2]:text-4xl"
          />
          <p className="mb-10 max-w-3xl font-body text-lg leading-relaxed text-foreground/85">
            Most teams show up with too much stuff: a dashboard, prompts nobody remembers adding,
            and content requests from different parts of the company. We start by figuring out which
            SAGE output is missing.
          </p>
          <ol className="grid gap-px border border-foreground/20 bg-foreground/20 md:grid-cols-2">
            {[
              {
                name: "Setup",
                description:
                  "I cut the prompt list down until every topic has a reason to exist. Then we check demand, remove brand-led prompts, add the competitors that appear in the answers, and save the first baseline.",
              },
              {
                name: "Analyze",
                description:
                  "We open the actual answers. We look at the weak prompts engine by engine and follow the citations until we can explain what moved and why.",
              },
              {
                name: "Generate",
                description:
                  "We pick one fix that matches the diagnosis. It might be a cleaner page, a new comparison, a pitch to a publisher, or a product problem that content cannot solve.",
              },
              {
                name: "Engineer",
                description:
                  "I automate only after the sequence works by hand. The system pulls the same data, carries the baseline forward, and sends the diagnosis to the person who owns the decision.",
              },
            ].map((stage, stageIndex) => (
              <li key={stage.name} className="bg-background p-7 md:p-10">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  0{stageIndex + 1}
                </p>
                <h3 className="mt-3 font-display text-3xl font-medium leading-tight">
                  {stage.name}
                </h3>
                <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-foreground/80">
                  {stage.description}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest">
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
            <DisplayH2>Questions about the method</DisplayH2>
            <p className="max-w-sm font-body text-lg leading-relaxed text-foreground/80">
              The questions I get about SAGE.
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
                label: "Research hub",
                description: "The studies behind the numbers on this page.",
              },
              {
                href: "/media#stages",
                label: "Speaking & media",
                description: "Talks, podcasts, press, decks, and recordings.",
              },
              {
                href: "/media#writing",
                label: "Writing archive",
                description: "Published work here and elsewhere.",
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
