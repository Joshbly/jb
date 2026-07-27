import Link from "next/link";
import { ArchiveEntry } from "@/components/shared/ArchiveEntry";
import { Reveal } from "@/components/shared/Reveal";
import { DisplayH2, Section, SectionHeader } from "@/components/shared/Section";
import { researchArticles } from "@/content/research";
import { formatDate } from "@/lib/time";

export function ResearchCredentials() {
  const selectedStudies = researchArticles.slice(0, 3);

  return (
    <Section id="research" layout="split">
      <Reveal>
        <div className="lg:sticky lg:top-32">
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-foreground/55">
            Original research
          </p>
          <DisplayH2 className="mb-6">
            I study what makes a brand appear in an AI-generated answer.
          </DisplayH2>
          <p className="mb-8 max-w-md font-body text-lg leading-relaxed text-foreground/80">
            That includes the questions people ask, the searches an engine runs, and the websites,
            product data, and public information it uses to understand a brand.
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
            title="Selected research"
            eyebrow={`${selectedStudies.length} studies`}
            className="mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
        </Reveal>
        {selectedStudies.map((study, index) => (
          <Reveal key={study.slug} index={index}>
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
      </div>
    </Section>
  );
}
