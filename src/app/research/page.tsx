import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
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
        <header className="border-b-2 border-foreground px-6 pb-16 pt-8 md:pb-20 md:pt-10">
          <div className="mx-auto max-w-6xl">
            <nav className="flex flex-wrap items-center justify-between gap-5 font-mono text-[10px] uppercase tracking-widest">
              <Link href="/" className="hover:text-accent">
                ← {site.name}
              </Link>
              <div className="flex gap-6">
                <Link href="/research/methodology" className="hover:text-accent">
                  Methodology
                </Link>
                <Link href="/about" className="hover:text-accent">
                  About
                </Link>
              </div>
            </nav>
            <p className="mt-16 font-mono text-[10px] uppercase tracking-[0.22em] text-accent md:mt-20">
              Research archive · 2025–2026
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.75rem,7vw,5rem)] font-normal italic leading-[0.98]">
              AI search research
            </h1>
            <p className="mt-6 max-w-160 font-body text-lg leading-8 text-foreground/70 md:text-xl">
              Studies on what people ask AI, which sources the systems choose, and how retrieval
              differs across ChatGPT, Claude, Perplexity, and Google.
            </p>
          </div>
        </header>

        <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <div className="divide-y-2 divide-foreground border-y-2 border-foreground">
            {researchArticles.map((study, studyIndex) => (
              <article
                key={study.slug}
                className="grid gap-5 py-8 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-8 md:grid-cols-[7.5rem_minmax(0,1fr)] md:gap-12 md:py-11"
              >
                <div className="flex flex-wrap items-center gap-x-3 font-mono text-[10px] uppercase leading-5 tracking-[0.16em] text-foreground/50 sm:block">
                  <span className="block text-accent">Study 0{studyIndex + 1}</span>
                  <span className="text-foreground/25 sm:hidden">/</span>
                  <time className="sm:mt-2 sm:block" dateTime={study.date}>
                    {formatDate(study.date)}
                  </time>
                  <span className="text-foreground/25 sm:hidden">/</span>
                  <span className="sm:mt-1 sm:block">{study.readTime}</span>
                </div>
                <div>
                  <p className="max-w-2xl font-body text-[0.9375rem] italic leading-6 text-foreground/60">
                    {study.question}
                  </p>
                  <h2 className="mt-2 max-w-3xl font-display text-[clamp(1.75rem,3.25vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.015em]">
                    <Link
                      href={`/research/${study.slug}`}
                      className="transition-colors hover:text-accent"
                    >
                      {study.title}
                    </Link>
                  </h2>
                  <p className="mt-4 max-w-2xl font-body text-base leading-7 text-foreground/75 md:text-[1.0625rem]">
                    {study.finding}
                  </p>
                  <Link
                    href={`/research/${study.slug}`}
                    aria-label={`Read ${study.title}`}
                    className="mt-5 inline-block font-mono text-[10px] uppercase tracking-[0.16em] text-accent hover:underline"
                  >
                    Read the study →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
