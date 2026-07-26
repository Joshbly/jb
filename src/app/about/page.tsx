import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { researchArticles } from "@/content/research";
import { site } from "@/content/site";
import { profilePageJsonLd } from "@/lib/seo";

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
        <header className="border-b-2 border-foreground px-6 pb-20 pt-10 md:pb-28">
          <div className="mx-auto max-w-6xl">
            <nav className="flex flex-wrap items-center justify-between gap-5 font-mono text-[10px] uppercase tracking-widest">
              <Link href="/" className="hover:text-accent">
                ← Home
              </Link>
              <div className="flex gap-6">
                <Link href="/research" className="hover:text-accent">
                  Research
                </Link>
                <Link href="/research/methodology" className="hover:text-accent">
                  Methodology
                </Link>
              </div>
            </nav>

            <div className="mt-20 grid gap-12 md:grid-cols-[minmax(0,1fr)_20rem] md:items-end">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                  {site.role} · {site.location}
                </p>
                <h1 className="mt-6 text-6xl font-display font-normal italic leading-none md:text-8xl">
                  Josh Blyskal
                </h1>
                <p className="mt-8 max-w-3xl font-body text-2xl leading-relaxed text-foreground/80">
                  I study how AI answer engines find sources, decide what to cite, and turn those
                  sources into recommendations.
                </p>
              </div>
              <div className="relative aspect-4/5 overflow-hidden border-2 border-foreground">
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

        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[12rem_1fr] md:gap-20 md:py-28">
          <h2 className="font-mono text-xs uppercase tracking-widest text-accent">Current work</h2>
          <div className="max-w-3xl space-y-7 font-body text-xl leading-relaxed text-foreground/85">
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
              The research on this site covers more than 300 million answer-engine responses, 4
              billion citations, and 50 million ChatGPT prompts across separate studies. Those
              figures should not be added into one master sample. They come from different questions
              and windows, which is why every article carries its own denominator and limits.
            </p>
            <p>
              Before Profound, I worked at HubSpot, where I co-founded its Marketing AI practice and
              built the AI Search Grader. I now spend most of my time tracing retrieval systems,
              comparing citation sets, and explaining what the differences mean for marketers.
            </p>
          </div>
        </section>

        <section className="border-y-2 border-foreground bg-foreground text-background">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-background/55">
              Research record
            </p>
            <div className="mt-10 grid gap-px bg-background/20 md:grid-cols-4">
              {[
                { value: "300M+", label: "Responses in the Reddit study" },
                { value: "4B+", label: "Citations in the Reddit study" },
                { value: "250M+", label: "Responses in the TechSEO study" },
                { value: "50M+", label: "Prompts in the intent corpus" },
              ].map((metric) => (
                <div key={metric.label} className="bg-foreground p-6">
                  <p className="font-display text-4xl font-semibold">{metric.value}</p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-background/65">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[12rem_1fr] md:gap-20">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-widest text-accent">
                Published studies
              </h2>
              <Link
                href="/research/methodology"
                className="mt-5 block font-mono text-[10px] uppercase tracking-widest hover:text-accent"
              >
                Methods and limits →
              </Link>
            </div>
            <div className="divide-y divide-foreground/20 border-y border-foreground/20">
              {researchArticles.map((study) => (
                <Link
                  key={study.slug}
                  href={`/research/${study.slug}`}
                  className="group block py-7"
                >
                  <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/45">
                    {study.date}
                  </p>
                  <h3 className="mt-2 text-2xl font-display font-semibold group-hover:text-accent">
                    {study.title}
                  </h3>
                  <p className="mt-3 max-w-2xl font-body leading-relaxed text-foreground/70">
                    {study.finding}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t-2 border-foreground">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[12rem_1fr] md:gap-20">
            <h2 className="font-mono text-xs uppercase tracking-widest text-accent">
              Contact and profiles
            </h2>
            <div className="flex flex-wrap gap-x-8 gap-y-4 font-mono text-xs uppercase tracking-widest">
              <a href={`mailto:${site.email}`} className="border-b hover:text-accent">
                {site.email}
              </a>
              {site.socials.map((profile) => (
                <a
                  key={profile.href}
                  href={profile.href}
                  rel="me"
                  className="border-b hover:text-accent"
                >
                  {profile.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
