import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { SubpageNav } from "@/components/layout/SubpageNav";
import { ArchiveEntry } from "@/components/shared/ArchiveEntry";
import { Section, SectionHeader } from "@/components/shared/Section";
import { sageLessonUrl } from "@/content/methodology";
import { researchArticles } from "@/content/research";
import { site } from "@/content/site";
import { researchPageJsonLd } from "@/lib/seo";
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
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [site.ogImage],
  },
};

export default function ResearchIndexPage() {
  const latestStudy = researchArticles[0];
  const majorStudies = researchArticles.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is generated from the static research index rendered below
        dangerouslySetInnerHTML={{ __html: JSON.stringify(researchPageJsonLd) }}
      />
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
              <p className="mt-5 max-w-2xl font-mono text-xs uppercase leading-relaxed tracking-wider text-foreground/55">
                <Link href="/research/findings" className="hover:text-accent hover:underline">
                  Statistics
                </Link>{" "}
                · studies for evidence ·{" "}
                <Link
                  href="/research/sage-aeo-method"
                  className="hover:text-accent hover:underline"
                >
                  SAGE for operations
                </Link>{" "}
                ·{" "}
                <Link
                  href="/research/what-is-answer-engine-optimization"
                  className="hover:text-accent hover:underline"
                >
                  AEO definition
                </Link>
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
            description="SAGE helps teams decide which part of an AEO process needs attention next."
            links={[{ label: "Profound 101 lesson", href: sageLessonUrl }]}
          />

          <SectionHeader
            title="Reference"
            eyebrow="6 pages"
            className="mt-20 mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <ArchiveEntry
            source="Data reference"
            date="2026-08-03"
            dateLabel="Aug 3, 2026"
            title="AI search statistics and research findings"
            href="/research/findings"
            description="A citable compendium of Josh Blyskal's AI search findings with samples, dates, methods, limitations, and citation formats."
          />
          <ArchiveEntry
            source="Practitioner reference"
            date="2026-08-03"
            dateLabel="Aug 3, 2026"
            title="What is answer engine optimization (AEO)?"
            href="/research/what-is-answer-engine-optimization"
            description="A definitive guide to how AEO works, how it differs from SEO, and why AEO and GEO are two names for the same discipline."
          />
          <ArchiveEntry
            source="Measurement reference"
            date="2026-09-02"
            dateLabel="Sep 2, 2026"
            title="How to measure AI visibility"
            href="/research/how-to-measure-ai-visibility"
            description="A defensible way to design prompt panels, define visibility metrics, separate engines, and read change without overstating precision."
          />
          <ArchiveEntry
            source="Retrieval reference"
            date="2026-09-02"
            dateLabel="Sep 2, 2026"
            title="Query fan-out: how AI search turns one prompt into many searches"
            href="/research/query-fanout"
            description="Observed fan-out behavior across ChatGPT and Claude, with samples, limitations, and a practical diagnostic workflow."
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
