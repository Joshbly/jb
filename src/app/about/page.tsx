import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { SubpageNav } from "@/components/layout/SubpageNav";
import { ArchiveEntry } from "@/components/shared/ArchiveEntry";
import { ResearchScopeGrid } from "@/components/shared/ResearchScopeGrid";
import { DisplayH2, Section, SectionHeader } from "@/components/shared/Section";
import { aboutFaqs } from "@/content/about";
import { featuredPressRecords } from "@/content/media";
import { researchArticles } from "@/content/research";
import { site } from "@/content/site";
import { aboutFaqJsonLd, profilePageJsonLd } from "@/lib/seo";
import { formatDate } from "@/lib/time";

const title = `${site.name}, AEO & GEO researcher`;
const description =
  "Josh Blyskal is an AEO expert and GEO expert leading AI Strategy & Research at Profound. His research spans 10B+ citations, 1.5B real user prompts, and 8 answer engines.";

const mediaIndex = [
  { label: "Stages", href: "/media#stages" },
  { label: "Podcasts & interviews", href: "/media#podcasts" },
  { label: "Press & citations", href: "/media#press" },
  { label: "Writing", href: "/media#writing" },
  { label: "Decks & recordings", href: "/media#decks" },
  { label: "LinkedIn", href: "/media#linkedin" },
] as const;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${site.url}/about` },
  openGraph: {
    title,
    description,
    url: `${site.url}/about`,
    images: [{ url: site.headshot, alt: site.name }],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires inline serialization, and profile metadata is static
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD mirrors the visible FAQ content below
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutFaqJsonLd) }}
      />
      <main>
        <header className="px-6 pt-6">
          <div className="mx-auto max-w-7xl">
            <SubpageNav activeHref="/about" />

            <div className="grid gap-12 py-24 md:grid-cols-[minmax(0,1fr)_20rem] md:items-center md:py-32">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-foreground/60">
                  {site.role} · {site.employer.name}
                </p>
                <h1 className="mt-5 max-w-4xl font-display text-hero-name font-normal leading-[0.92] tracking-tight">
                  Research across 10B+ citations and 8 answer engines.
                </h1>
                <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-foreground/80 md:text-xl">
                  Josh Blyskal is an AEO and GEO researcher studying how ChatGPT, Claude, Gemini,
                  Google AI Mode, and other answer engines search, retrieve, cite, and recommend
                  information.
                </p>
                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest">
                  <Link
                    href="/research"
                    className="transition-colors hover:text-accent hover:underline"
                  >
                    Research blog →
                  </Link>
                  <Link
                    href="/media"
                    className="transition-colors hover:text-accent hover:underline"
                  >
                    Speaking & media →
                  </Link>
                  <a
                    href={`mailto:${site.email}`}
                    className="transition-colors hover:text-accent hover:underline"
                  >
                    Contact →
                  </a>
                </div>
              </div>
              <figure className="w-full max-w-sm md:justify-self-end">
                <div className="relative aspect-4/5 overflow-hidden border border-foreground">
                  <Image
                    src={site.headshot}
                    alt={`Portrait of ${site.name}`}
                    fill
                    sizes="(min-width: 768px) 320px, 60vw"
                    className="object-cover grayscale"
                    priority
                  />
                </div>
                <figcaption className="mt-3 font-mono text-xs uppercase tracking-wider text-foreground/50">
                  Fig. 1 · {site.name} · {site.location}
                </figcaption>
              </figure>
            </div>
          </div>
        </header>

        <Section layout="split">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <DisplayH2>Current work</DisplayH2>
          </div>
          <div className="max-w-2xl space-y-6 font-body text-lg leading-relaxed text-foreground/90">
            <p>
              I lead AI Strategy & Research at{" "}
              <a
                href={site.employer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-1 underline-offset-4 hover:text-accent"
              >
                Profound
              </a>
              , where I study how answer engines search the web, select sources, and construct
              answers. The work compares retrieval and citation behavior across ChatGPT, Claude,
              Gemini, Google AI products, and other major platforms.
            </p>
            <p>
              Before Profound, I worked at HubSpot, where I co-founded its Marketing AI practice and
              built the AI Search Grader, used by more than 100,000 marketers.
            </p>
          </div>
        </Section>

        <Section>
          <SectionHeader
            title="Research scope by the numbers"
            className="mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <ResearchScopeGrid />
        </Section>

        <Section layout="split">
          <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <DisplayH2>Credentials</DisplayH2>
            <p className="max-w-sm font-body text-lg leading-relaxed text-foreground/80">
              Named work, publications, and stages that can be checked outside this site.
            </p>
          </div>
          <dl className="divide-y divide-foreground/20 border-y border-foreground/20">
            <div className="py-8">
              <dt className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                Role & affiliation
              </dt>
              <dd className="mt-3 font-display text-2xl font-medium leading-snug md:text-3xl">
                AI Strategy & Research at{" "}
                <a
                  href={site.employer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-1 underline-offset-4 hover:text-accent"
                >
                  Profound
                </a>
              </dd>
            </div>

            <div className="py-8">
              <dt className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                AEO strategies created at Profound
              </dt>
              <dd className="mt-3 font-display text-2xl font-medium leading-snug md:text-3xl">
                Ramp · Indeed · U.S. Bank · Kaplan · Reddit · G2 · MongoDB · Kalshi · Mintlify ·
                Figma · Hatch · Eight Sleep · Golin
              </dd>
              <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-foreground/60">
                Created for these leading brands to make them visible in AI search.
              </p>
            </div>

            <div className="py-8">
              <dt className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                Quoted & cited
              </dt>
              <dd className="mt-4 flex max-w-2xl flex-wrap gap-x-6 gap-y-3">
                {featuredPressRecords.map((mention) => (
                  <a
                    key={mention.id}
                    href={mention.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-xl font-medium underline decoration-1 underline-offset-4 transition-colors hover:text-accent md:text-2xl"
                  >
                    {mention.outlet}
                  </a>
                ))}
              </dd>
            </div>

            <div className="py-8">
              <dt className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                Conference stages
              </dt>
              <dd className="mt-3 font-display text-2xl font-medium leading-snug md:text-3xl">
                MozCon · BrightonSEO · TechSEO Connect · Zero Click
              </dd>
              <p className="mt-3 font-mono text-xs uppercase tracking-wider text-foreground/50">
                Spotlight AR · U.S. & U.K. stages since 2025 · SEO Shenzhen upcoming
              </p>
            </div>
          </dl>
        </Section>

        <Section>
          <SectionHeader
            title="Speaking & media"
            eyebrow="Canonical index"
            className="mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <div className="grid border-t border-l border-foreground/20 sm:grid-cols-2 lg:grid-cols-3">
            {mediaIndex.map((entry) => (
              <Link
                key={entry.href}
                href={entry.href}
                className="group flex items-center border-r border-b border-foreground/20 px-5 py-5 transition-colors hover:bg-foreground/5"
              >
                <span className="font-display text-xl font-medium group-hover:underline">
                  {entry.label}
                </span>
              </Link>
            ))}
          </div>
        </Section>

        <Section layout="split">
          <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <DisplayH2>Research & publications</DisplayH2>
            <p className="max-w-sm font-body text-lg leading-relaxed text-foreground/80">
              Four original studies on retrieval, citations, user intent, and the sources answer
              engines choose.
            </p>
            <div className="flex flex-col items-start gap-4 font-mono text-xs uppercase tracking-widest">
              <Link href="/media" className="transition-colors hover:text-accent">
                All research →
              </Link>
              <Link href="/methodology" className="transition-colors hover:text-accent">
                SAGE Method →
              </Link>
            </div>
          </div>
          <div>
            <SectionHeader
              title="Published studies"
              eyebrow={`${researchArticles.length} studies`}
              className="mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
            />
            <div className="grid">
              {researchArticles.map((study) => (
                <ArchiveEntry
                  key={study.slug}
                  source="Research"
                  sourceDetail={study.readTime}
                  date={study.date}
                  dateLabel={formatDate(study.date)}
                  title={study.title}
                  href={`/research/${study.slug}`}
                />
              ))}
            </div>
          </div>
        </Section>

        <Section id="faq" layout="split">
          <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <DisplayH2>Questions about Josh</DisplayH2>
            <p className="max-w-sm font-body text-lg leading-relaxed text-foreground/80">
              Short answers to the questions most often used to identify his work and area of
              expertise.
            </p>
          </div>
          <div className="divide-y divide-foreground/20 border-y border-foreground/20">
            {aboutFaqs.map((faq) => (
              <article key={faq.question} className="py-8">
                <h3 className="font-display text-2xl font-medium leading-snug">{faq.question}</h3>
                <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-foreground/75 md:text-lg">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
