import Link from "next/link";
import { ArchiveEntry } from "@/components/shared/ArchiveEntry";
import { ResearchScopeGrid } from "@/components/shared/ResearchScopeGrid";
import { Reveal } from "@/components/shared/Reveal";
import { DisplayH2, Section, SectionHeader } from "@/components/shared/Section";
import { researchArticles } from "@/content/research";
import { formatDate } from "@/lib/time";

export function ResearchCredentials() {
  const latestStudy = researchArticles[0];

  return (
    <Section id="research" layout="split">
      <Reveal>
        <div className="lg:sticky lg:top-32">
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-foreground/55">
            AEO & GEO research
          </p>
          <DisplayH2 className="mb-6">
            I research how answer engines choose their sources.
          </DisplayH2>
          <p className="mb-8 max-w-md font-body text-lg leading-relaxed text-foreground/80">
            I study how ChatGPT, Claude, Gemini, Google AI Mode, and other answer engines search the
            web, retrieve sources, and decide what makes it into an answer.
          </p>
          <div className="flex flex-col items-start gap-4 font-mono text-xs uppercase tracking-widest">
            <Link
              href="/media"
              className="group inline-flex items-center gap-3 transition-colors hover:text-accent"
            >
              Browse all research
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/research"
              className="group inline-flex items-center gap-3 transition-colors hover:text-accent"
            >
              Check out my research blog
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/methodology"
              className="group inline-flex items-center gap-3 transition-colors hover:text-accent"
            >
              Learn about the SAGE methodology
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
            title="Research scope by the numbers"
            className="mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
        </Reveal>
        <Reveal>
          <ResearchScopeGrid />
        </Reveal>

        <Reveal className="mt-10">
          <ArchiveEntry
            source="Latest study"
            date={latestStudy.date}
            dateLabel={formatDate(latestStudy.date)}
            title={latestStudy.title}
            href={`/research/${latestStudy.slug}`}
          />
        </Reveal>
      </div>
    </Section>
  );
}
