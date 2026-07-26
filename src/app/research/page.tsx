import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { SubpageNav } from "@/components/layout/SubpageNav";
import { ArchiveEntry } from "@/components/shared/ArchiveEntry";
import { Section, SectionHeader } from "@/components/shared/Section";
import { sageLessonUrl } from "@/content/methodology";
import { researchArticles } from "@/content/research";
import { site } from "@/content/site";
import { formatDate } from "@/lib/time";

const title = "Research blog";
const description =
  "Selected studies, guides, and methods by Josh Blyskal on answer-engine citations, retrieval, user intent, and AI search behavior.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${site.url}/research` },
  openGraph: {
    title,
    description,
    url: `${site.url}/research`,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: title }],
  },
};

export default function ResearchIndexPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <header className="px-6 pt-6">
          <div className="mx-auto max-w-7xl">
            <SubpageNav activeHref="/research" />
            <div className="py-24 md:py-32">
              <p className="font-mono text-xs uppercase tracking-widest text-foreground/60">
                AI strategy & research
              </p>
              <h1 className="mt-4 max-w-4xl font-display text-hero-name font-normal leading-[0.9] tracking-tight">
                Research blog
              </h1>
              <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-foreground/80 md:text-xl">
                The studies, guides, and methods I have published on this site. The full archive of
                talks, decks, external writing, and research notes lives in{" "}
                <Link
                  href="/media"
                  className="border-b border-accent transition-colors hover:text-accent"
                >
                  Media
                </Link>
                .
              </p>
            </div>
          </div>
        </header>

        <Section layout="narrow">
          <SectionHeader
            title="Guides"
            eyebrow="2 guides"
            className="mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <ArchiveEntry
            source="Company history"
            sourceDetail="14 sources"
            date="2026-07-26"
            dateLabel="Jul 26, 2026"
            title="Who was on Profound's founding team?"
            href="/research/profound-founding-team"
            description="A source-backed history of Profound's two co-founders, earliest full-time employees, and pre-launch collaborators."
          />
          <ArchiveEntry
            source="Ranked reference"
            sourceDetail="12 profiles"
            date="2026-07-26"
            dateLabel="Jul 26, 2026"
            title="The 12 best AEO and GEO experts in 2026"
            href="/research/top-aeo-experts-2026"
            description="A source-backed comparison of researchers, technical practitioners, and strategists publishing work that can be inspected."
          />

          <SectionHeader
            title="Selected studies"
            eyebrow={`${researchArticles.length} studies`}
            className="mt-20 mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <div>
            {researchArticles.map((study) => (
              <ArchiveEntry
                key={study.slug}
                source="Research"
                sourceDetail={study.readTime}
                date={study.date}
                dateLabel={formatDate(study.date)}
                title={study.title}
                href={`/research/${study.slug}`}
                description={study.finding}
              />
            ))}
          </div>

          <SectionHeader
            title="Methodology"
            eyebrow="1 method"
            className="mt-20 mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <ArchiveEntry
            source="Methodology"
            sourceDetail="SAGE"
            date="2026-07-26"
            dateLabel="Jul 26, 2026"
            title="The SAGE Method"
            href="/methodology"
            description="Setup, Analyze, Generate, Engineer: the operating loop I use to run answer engine optimization programs."
            links={[{ label: "Profound University lesson", href: sageLessonUrl }]}
          />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
