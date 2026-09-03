import Link from "next/link";
import { ArchiveEntry } from "@/components/shared/ArchiveEntry";
import { Reveal } from "@/components/shared/Reveal";
import { DisplayH2, Section, SectionHeader } from "@/components/shared/Section";
import { researchArticles } from "@/content/research";
import { formatDate } from "@/lib/time";

export function ResearchCredentials() {
  const selectedStudies = researchArticles.slice(0, 2);

  return (
    <Section id="research" layout="split">
      <Reveal>
        <div className="lg:sticky lg:top-32">
          <DisplayH2 className="mb-6">
            I study what makes a brand appear in an AI-generated answer.
          </DisplayH2>
          <p className="mb-5 max-w-md font-body text-lg leading-relaxed text-foreground/80">
            That includes the prompts people ask, the fanouts an agent/answer engine runs, and the
            websites, product data, and public information it uses to understand and recommend a
            brand to a user.
          </p>
          <p className="mb-8 max-w-md font-body text-lg leading-relaxed text-foreground/80">
            That work grew into the methodology Profound uses with enterprise teams. What I learn
            ends up here, with the sample and limitations attached.
          </p>
          <Link
            href="/research"
            className="font-mono text-xs uppercase tracking-widest underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent"
          >
            Browse all research →
          </Link>
        </div>
      </Reveal>

      <div>
        <Reveal>
          <SectionHeader
            title="Original research"
            className="mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
        </Reveal>
        <Reveal index={0}>
          <ArchiveEntry
            source="Measurement essay"
            sourceDetail="12 min"
            date="2026-09-02"
            dateLabel="Sep 2, 2026"
            title="How I measure AI visibility"
            href="/research/how-to-measure-ai-visibility"
            description="Why I read visibility rank before score, how citations reveal what shaped an answer, and where attribution breaks."
          />
        </Reveal>
        {selectedStudies.map((study, index) => (
          <Reveal key={study.slug} index={index + 1}>
            <ArchiveEntry
              source="Research"
              sourceDetail={study.readTime}
              date={study.date}
              dateLabel={formatDate(study.date)}
              title={study.title}
              href={`/research/${study.slug}`}
              description={study.finding}
            />
          </Reveal>
        ))}
        <Reveal index={3}>
          <div className="grid gap-px border-b border-foreground/20 bg-foreground/20 sm:grid-cols-2">
            <Link
              href="/research/findings"
              className="group bg-background py-6 pr-6 transition-colors hover:bg-foreground/5 sm:p-6"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                Data reference
              </span>
              <span className="mt-2 block font-display text-xl font-medium group-hover:underline">
                Citable AI search findings →
              </span>
            </Link>
            <Link
              href="/research/what-is-answer-engine-optimization"
              className="group bg-background py-6 pr-6 transition-colors hover:bg-foreground/5 sm:p-6"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                Practitioner reference
              </span>
              <span className="mt-2 block font-display text-xl font-medium group-hover:underline">
                What is AEO? →
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
