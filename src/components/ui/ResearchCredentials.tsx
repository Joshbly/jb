import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { DisplayH2, Section, SectionHeader } from "@/components/shared/Section";
import { researchArticles } from "@/content/research";
import { formatDate } from "@/lib/time";

const researchScope = [
  { value: "10B+", label: "Citations across major answer engines" },
  { value: "1B+", label: "Real user prompts" },
  { value: "100M+", label: "AI fanouts and web research results" },
  { value: "8+", label: "Answer engines measured" },
] as const;

export function ResearchCredentials() {
  const latestStudy = researchArticles[0];

  return (
    <Section id="research" layout="split">
      <Reveal>
        <div className="lg:sticky lg:top-32">
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-foreground/55">
            AEO & GEO research
          </p>
          <DisplayH2 className="mb-6">How answer engines choose their sources</DisplayH2>
          <p className="mb-8 max-w-md font-body text-lg leading-relaxed text-foreground/80">
            I study how ChatGPT, Claude, Perplexity, Google AI Mode, and other answer engines search
            the web, retrieve sources, and decide what makes it into an answer.
          </p>
          <div className="flex flex-col items-start gap-4 font-mono text-xs uppercase tracking-widest">
            <Link
              href="/research"
              className="group inline-flex items-center gap-3 transition-colors hover:text-accent"
            >
              Browse all research
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/methodology"
              className="group inline-flex items-center gap-3 transition-colors hover:text-accent"
            >
              The SAGE Method
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </Reveal>

      <div>
        <Reveal>
          <SectionHeader
            title="Research scope"
            eyebrow="Measured corpus"
            className="mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
        </Reveal>
        <Reveal>
          <dl className="grid grid-cols-2 gap-px border border-foreground/20 bg-foreground/20">
            {researchScope.map((metric) => (
              <div key={metric.label} className="bg-background p-5 md:p-7">
                <dd className="font-display text-4xl font-medium leading-none md:text-5xl">
                  {metric.value}
                </dd>
                <dt className="mt-3 max-w-44 font-mono text-xs uppercase leading-relaxed tracking-wider text-foreground/55">
                  {metric.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal as="article" className="mt-12 border-t border-foreground/20 pt-8">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase tracking-wider text-foreground/50">
            <span>Latest study</span>
            <time dateTime={latestStudy.date}>{formatDate(latestStudy.date)}</time>
          </div>
          <Link href={`/research/${latestStudy.slug}`} className="group block">
            <h3 className="max-w-2xl font-display text-3xl font-medium leading-tight decoration-1 underline-offset-4 group-hover:underline">
              {latestStudy.title}
            </h3>
            <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-foreground/70">
              {latestStudy.finding}
            </p>
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
