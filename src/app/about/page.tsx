import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { SubpageNav } from "@/components/layout/SubpageNav";
import { RevealRunner } from "@/components/shared/RevealRunner";
import { DisplayH2, Section } from "@/components/shared/Section";
import { Inquiry } from "@/components/ui/Inquiry";
import { featuredPressRecords } from "@/content/media";
import { site } from "@/content/site";
import { profilePageJsonLd } from "@/lib/seo";

const title = `${site.name}, AEO & GEO researcher`;
const description =
  "Josh Blyskal leads AI Strategy & Research at Profound and helps brands become visible in AI search.";

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
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is generated from the static profile rendered below
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <RevealRunner />
      <main>
        <header className="px-6 pt-6">
          <div className="mx-auto max-w-7xl">
            <SubpageNav activeHref="/about" />

            <div className="grid gap-12 py-24 md:grid-cols-[minmax(0,1fr)_20rem] md:items-center md:py-32">
              <div>
                <h1 className="max-w-4xl font-display text-hero-name font-normal leading-[0.92] tracking-tight">
                  I help brands become visible in AI search.
                </h1>
                <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-foreground/80 md:text-xl">
                  I joined Profound as its second employee and was part of its{" "}
                  <Link
                    href="/research/profound-founding-team"
                    className="border-b border-accent transition-colors hover:text-accent"
                  >
                    founding team
                  </Link>
                  . I now lead AI Strategy & Research and help teams understand how AI systems find,
                  describe, and recommend brands.
                </p>
                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest">
                  <Link
                    href="/research"
                    className="transition-colors hover:text-accent hover:underline"
                  >
                    Research →
                  </Link>
                  <Link
                    href="/speaking"
                    className="transition-colors hover:text-accent hover:underline"
                  >
                    Speaking →
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
                  {site.name} · Williamsburg, Brooklyn
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
              At{" "}
              <a
                href={site.employer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-1 underline-offset-4 hover:text-accent"
              >
                Profound
              </a>
              , I work with brands on how they appear in ChatGPT, Claude, Gemini, Google AI
              products, and other answer engines. I use large-scale research and real user prompts
              to see which questions include the brand, which comparisons exclude it, and whether
              agents can access the product information they need.
            </p>
            <p>
              Before Profound, I worked at HubSpot, where I co-founded its Marketing AI practice and
              built the AI Search Grader, used by more than 100,000 marketers.
            </p>
            <p>I live in Williamsburg, Brooklyn, with my wife, Macy.</p>
          </div>
        </Section>

        <Section layout="split">
          <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <DisplayH2>Selected credentials</DisplayH2>
            <p className="max-w-sm font-body text-lg leading-relaxed text-foreground/80">
              Work, publications, and stages that can be checked outside this site.
            </p>
          </div>
          <dl className="divide-y divide-foreground/20 border-y border-foreground/20">
            <div className="py-8">
              <dt className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                AEO programs at Profound
              </dt>
              <dd className="mt-3 font-display text-2xl font-medium leading-snug md:text-3xl">
                Ramp · Indeed · U.S. Bank · G2 · MongoDB · Golin
              </dd>
              <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-foreground/60">
                Contributed to AEO programs for teams at these brands through Profound.
              </p>
            </div>

            <div className="py-8">
              <dt className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                Quoted and cited
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
                MozCon · BrightonSEO · TechSEO Connect · Zero Click · Spotlight AR
              </dd>
              <p className="mt-3 font-mono text-xs uppercase tracking-wider text-foreground/50">
                U.S. and U.K. stages since 2025 · SEO Shenzhen upcoming
              </p>
            </div>
          </dl>
        </Section>

        <Inquiry />
      </main>
      <Footer />
    </div>
  );
}
