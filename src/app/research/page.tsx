import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Section, SectionHeader } from "@/components/shared/Section";
import { researchArticles } from "@/content/research";
import { site } from "@/content/site";
import { formatDate } from "@/lib/time";

const title = "AI search research";
const description =
  "Original studies by Josh Blyskal and collaborators on answer-engine citations, ChatGPT intent, Reddit, Claude, and AI search behavior.";

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
            <nav className="flex items-center justify-between font-mono text-xs uppercase tracking-widest">
              <Link href="/" className="transition-colors hover:text-accent">
                {site.name}
              </Link>
              <Link href="/about" className="nav-bracket transition-colors hover:text-accent">
                About
              </Link>
            </nav>
            <div className="py-24 md:py-32">
              <p className="font-mono text-xs uppercase tracking-widest text-foreground/60">
                AI strategy & research
              </p>
              <h1 className="mt-4 max-w-4xl font-display text-hero-name font-normal leading-[0.9] tracking-tight">
                AI search research
              </h1>
              <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-foreground/80 md:text-xl">
                Studies on what people ask AI, which sources the systems choose, and how retrieval
                differs across ChatGPT, Claude, Perplexity, and Google.
              </p>
            </div>
          </div>
        </header>

        <Section layout="narrow">
          <SectionHeader
            title="Published studies"
            eyebrow="Ref. List 03"
            className="mb-16 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <div className="space-y-8">
            {researchArticles.map((study, studyIndex) => (
              <article key={study.slug}>
                <Link
                  href={`/research/${study.slug}`}
                  className="group grid gap-4 rounded-sm p-4 transition-colors hover:bg-foreground/5 md:-mx-4 md:grid-cols-[100px_1fr] md:gap-8"
                >
                  <div className="hidden text-right font-mono text-xs uppercase tracking-wider text-foreground/50 md:block">
                    <time className="block" dateTime={study.date}>
                      {formatDate(study.date)}
                    </time>
                    <span className="mt-1 block text-[10px]">{study.readTime}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-accent">
                        Study 0{studyIndex + 1}
                      </span>
                      <h2 className="font-display text-xl font-bold leading-snug decoration-1 underline-offset-4 group-hover:underline">
                        {study.title}
                      </h2>
                    </div>
                    <p className="max-w-xl font-body text-sm leading-relaxed text-foreground/70">
                      {study.finding}
                    </p>
                    <div className="flex gap-3 font-mono text-xs uppercase tracking-wider text-foreground/50 md:hidden">
                      <time dateTime={study.date}>{formatDate(study.date)}</time>
                      <span aria-hidden="true">·</span>
                      <span>{study.readTime}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
