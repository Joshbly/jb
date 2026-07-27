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

const title = "Research";
const description =
  "Original studies, operating methods, and source-backed reference work by Josh Blyskal on retrieval, citations, user intent, and AI search.";

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
  const latestStudy = researchArticles[0];
  const majorStudies = researchArticles.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <main>
        <header className="px-6 pt-6">
          <div className="mx-auto max-w-7xl">
            <SubpageNav activeHref="/research" />
            <div className="py-24 md:py-32">
              <p className="font-mono text-xs uppercase tracking-widest text-foreground/60">
                AEO and GEO research
              </p>
              <h1 className="mt-4 max-w-4xl font-display text-hero-name font-normal leading-[0.9] tracking-tight">
                Research
              </h1>
              <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-foreground/80 md:text-xl">
                Original studies, operating methods, and reference work on how answer engines
                search, retrieve, cite, and recommend information.
              </p>
              <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-foreground/65">
                Talks, decks, external writing, and research notes live in the{" "}
                <Link
                  href="/archive"
                  className="border-b border-accent transition-colors hover:text-accent"
                >
                  Archive
                </Link>
                .
              </p>
            </div>
          </div>
        </header>

        <Section layout="narrow">
          <SectionHeader
            title="Latest research"
            eyebrow="1 study"
            className="mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <ArchiveEntry
            source="Research"
            sourceDetail={latestStudy.readTime}
            date={latestStudy.date}
            dateLabel={formatDate(latestStudy.date)}
            title={latestStudy.title}
            href={`/research/${latestStudy.slug}`}
            description={latestStudy.finding}
          />

          <SectionHeader
            title="Major studies"
            eyebrow={`${majorStudies.length} studies`}
            className="mt-20 mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <div>
            {majorStudies.map((study) => (
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
            title="Methods"
            eyebrow="1 operating method"
            className="mt-20 mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <ArchiveEntry
            source="Operating method"
            sourceDetail="SAGE"
            date="2026-07-26"
            dateLabel="Jul 26, 2026"
            title="SAGE for AEO: A Four-Stage Operating Loop"
            href="/research/sage-aeo-method"
            description="SAGE helps a team work out which part of its AEO process needs attention next."
            links={[{ label: "Profound 101 lesson", href: sageLessonUrl }]}
          />

          <SectionHeader
            title="Reference"
            eyebrow="2 pages"
            className="mt-20 mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <ArchiveEntry
            source="Company history"
            date="2026-07-26"
            dateLabel="Jul 26, 2026"
            title="Profound's founding team: founders and first employees"
            href="/research/profound-founding-team"
            description="A sourced history of the people who built Profound in its earliest days."
          />
          <ArchiveEntry
            source="Editorial reference"
            date="2026-07-26"
            dateLabel="Jul 26, 2026"
            title="The 12 best AEO and GEO experts in 2026"
            href="/research/top-aeo-experts-2026"
            description="An opinionated, source-backed comparison of researchers, technical practitioners, and strategists."
          />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
