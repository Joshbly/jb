import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { DisplayH2, Section, SectionHeader } from "@/components/shared/Section";
import { researchArticles } from "@/content/research";
import { site } from "@/content/site";
import { profilePageJsonLd } from "@/lib/seo";
import { formatDate } from "@/lib/time";

const title = `About ${site.name}`;
const description =
  "Josh Blyskal researches how ChatGPT, Claude, Google, Perplexity, and other answer engines retrieve, cite, and recommend information.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${site.url}/about` },
  openGraph: {
    title,
    description,
    url: `${site.url}/about`,
    images: [{ url: site.headshot, width: 1200, height: 630, alt: site.name }],
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
      <main>
        <header className="px-6 pt-6">
          <div className="mx-auto max-w-7xl">
            <nav className="flex items-center justify-between font-mono text-xs uppercase tracking-widest">
              <Link href="/" className="transition-colors hover:text-accent">
                {site.name}
              </Link>
              <Link href="/research" className="nav-bracket transition-colors hover:text-accent">
                Research
              </Link>
            </nav>

            <div className="grid gap-12 py-24 md:grid-cols-[minmax(0,1fr)_20rem] md:items-center md:py-32">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-foreground/60">
                  {site.role} · {site.location}
                </p>
                <h1 className="mt-4 font-display text-hero-name font-normal leading-[0.9] tracking-tight">
                  Josh Blyskal
                </h1>
                <p className="mt-8 max-w-lg font-body text-lg leading-relaxed text-foreground/80 md:text-xl">
                  I study how AI answer engines find sources, decide what to cite, and turn those
                  sources into recommendations.
                </p>
              </div>
              <div className="relative aspect-4/5 w-full max-w-sm overflow-hidden border border-foreground">
                <Image
                  src={site.headshot}
                  alt={site.name}
                  fill
                  sizes="(min-width: 768px) 320px, 60vw"
                  className="object-cover grayscale"
                  priority
                />
              </div>
            </div>
          </div>
        </header>

        <Section layout="split">
          <div className="sticky top-32">
            <DisplayH2>Current work</DisplayH2>
          </div>
          <div className="max-w-2xl space-y-6 font-body text-lg leading-relaxed text-foreground/90">
            <p>
              I lead AI strategy and research at{" "}
              <a
                href={site.employer.url}
                className="underline decoration-1 underline-offset-4 hover:text-accent"
              >
                Profound
              </a>
              . My work uses frontend monitoring of systems such as ChatGPT, Claude, Perplexity, and
              Google AI products to measure the answers people receive and the pages those answers
              cite.
            </p>
            <p>
              My data spans tens of billions of citations, billions of real user prompts, and
              hundreds of millions of AI fanouts, searches, and browsing results across eight-plus
              major answer engines. I use it to understand where AI systems search, what they cite,
              and how brands show up in the answer.
            </p>
            <p>
              Before Profound, I worked at HubSpot, where I co-founded its Marketing AI practice and
              built the AI Search Grader. I now spend most of my time tracing retrieval systems,
              comparing citation sets, and explaining what the differences mean for marketers.
            </p>
          </div>
        </Section>

        <Section>
          <SectionHeader
            title="By the numbers"
            eyebrow="Fig. 2"
            className="mb-16 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <div className="grid grid-cols-2 gap-px border border-foreground/20 bg-foreground/20 md:grid-cols-4">
            {[
              { value: "10B+", label: "Citations across major answer engines" },
              { value: "1B+", label: "Real user prompts" },
              { value: "100M+", label: "AI fanouts and web research results" },
              { value: "8+", label: "Major answer engines" },
            ].map((metric) => (
              <div key={metric.label} className="bg-background p-6">
                <p className="font-display text-4xl font-medium">{metric.value}</p>
                <p className="mt-2 font-body text-sm leading-relaxed text-foreground/70">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section layout="split">
          <div className="sticky top-32 space-y-6">
            <DisplayH2>Research</DisplayH2>
            <p className="max-w-sm font-body text-lg leading-relaxed text-foreground/80">
              Original studies on how answer engines search, cite, and recommend.
            </p>
            <Link
              href="/research"
              className="inline-block font-mono text-xs uppercase tracking-widest transition-colors hover:text-accent"
            >
              All research →
            </Link>
          </div>
          <div>
            <SectionHeader
              title="Published studies"
              eyebrow="Ref. List 03"
              className="mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
            />
            <div>
              {researchArticles.map((study) => (
                <Link
                  key={study.slug}
                  href={`/research/${study.slug}`}
                  className="group block border-b border-foreground/20 px-4 py-8 transition-colors hover:bg-foreground/5"
                >
                  <p className="font-mono text-xs uppercase tracking-wider text-accent">
                    {formatDate(study.date)}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold leading-snug group-hover:underline">
                    {study.title}
                  </h3>
                  <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-foreground/70">
                    {study.finding}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
