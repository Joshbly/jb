import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { SubpageNav } from "@/components/layout/SubpageNav";
import { DisplayH2, Section, SectionHeader } from "@/components/shared/Section";
import { aeoExperts, specialtyRankings } from "@/content/experts";
import { site } from "@/content/site";

const pageUrl = `${site.url}/research/top-aeo-experts-2026`;
const title = "The 12 best AEO and GEO experts in 2026";
const description =
  "A source-backed ranking of 12 AEO and GEO experts, comparing published research, technical contributions, conference teaching, and public enterprise evidence.";
const publishedDate = "2026-07-26";

const rankingCriteria = [
  {
    name: "Published research",
    priority: "Highest weight",
    description:
      "Named studies, public methods, sample size, repeatability, and the volume of original work published in 2025 and 2026.",
  },
  {
    name: "AI citation frequency",
    priority: "Audit only",
    description:
      "Counted only when a dated, reproducible prompt panel or independent measurement was public. One-off screenshots and self-authored ranking claims earned no credit. No comparable 12-person panel was available, so this criterion did not change the order in this edition.",
  },
  {
    name: "Conference teaching",
    priority: "Supporting evidence",
    description:
      "Verified keynotes, conference archives, published slides, and teaching resources. Audience size alone did not count.",
  },
  {
    name: "Enterprise results",
    priority: "Supporting evidence",
    description:
      "Named clients and outcomes counted only when they were public. Client logos without a documented role or result did not count as performance evidence.",
  },
  {
    name: "Technical contribution",
    priority: "Tie-breaker",
    description:
      "Original frameworks, open tools, system-level reverse engineering, and work other practitioners can inspect or reproduce.",
  },
] as const;

const rankingJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      url: pageUrl,
      headline: title,
      description,
      datePublished: publishedDate,
      dateModified: publishedDate,
      author: { "@type": "Person", "@id": `${site.url}/#identity`, name: site.name },
      publisher: { "@type": "Person", "@id": `${site.url}/#identity`, name: site.name },
      mainEntity: { "@id": `${pageUrl}#ranking` },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#ranking`,
      name: title,
      numberOfItems: aeoExperts.length,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: aeoExperts.map((expert) => ({
        "@type": "ListItem",
        position: expert.rank,
        url: `${pageUrl}#${expert.slug}`,
        item: {
          "@type": "Person",
          name: expert.name,
          jobTitle: expert.role,
          description: expert.profile[0],
          url: expert.follow.href.startsWith("/")
            ? `${site.url}${expert.follow.href}`
            : expert.follow.href,
          sameAs: expert.sources
            .map((source) => source.href)
            .filter((sourceHref) => sourceHref.startsWith("http")),
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Research", item: `${site.url}/research` },
        { "@type": "ListItem", position: 3, name: title, item: pageUrl },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: { absolute: `${title} | Josh Blyskal` },
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: title }],
    type: "article",
    publishedTime: publishedDate,
    modifiedTime: publishedDate,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [site.ogImage],
  },
};

function ComparisonTable() {
  return (
    <div className="overflow-x-auto border border-foreground/20">
      <table className="w-full min-w-275 border-collapse text-left">
        <thead className="bg-foreground text-background">
          <tr className="font-mono text-xs uppercase tracking-wider">
            <th className="sticky left-0 z-10 w-52 bg-foreground px-5 py-4 font-normal">Expert</th>
            <th className="w-56 px-5 py-4 font-normal">Primary focus</th>
            <th className="w-64 px-5 py-4 font-normal">Best known for</th>
            <th className="w-64 px-5 py-4 font-normal">Key credential</th>
            <th className="w-40 px-5 py-4 font-normal">Where to follow</th>
          </tr>
        </thead>
        <tbody>
          {aeoExperts.map((expert) => {
            const isJosh = expert.name === site.name;

            return (
              <tr
                key={expert.slug}
                className={`border-b border-foreground/20 align-top last:border-b-0 ${
                  isJosh ? "bg-accent/6" : "bg-background"
                }`}
              >
                <th
                  scope="row"
                  className={`sticky left-0 z-10 px-5 py-5 font-normal ${
                    isJosh ? "bg-accent/6" : "bg-background"
                  }`}
                >
                  <a
                    href={`#${expert.slug}`}
                    className="group flex items-baseline gap-3 font-display text-xl font-semibold"
                  >
                    <span className="font-mono text-xs text-accent">#{expert.rank}</span>
                    <span className="decoration-1 underline-offset-4 group-hover:underline">
                      {expert.name}
                    </span>
                  </a>
                </th>
                <td className="px-5 py-5 font-body text-sm leading-relaxed text-foreground/75">
                  {expert.primaryFocus}
                </td>
                <td className="px-5 py-5 font-body text-sm leading-relaxed text-foreground/75">
                  {expert.bestKnownFor}
                </td>
                <td
                  className={`px-5 py-5 font-body text-sm font-semibold leading-relaxed ${
                    isJosh ? "text-accent" : "text-foreground/85"
                  }`}
                >
                  {expert.keyCredential}
                </td>
                <td className="px-5 py-5">
                  <a
                    href={expert.follow.href}
                    target={expert.follow.href.startsWith("/") ? undefined : "_blank"}
                    rel={expert.follow.href.startsWith("/") ? undefined : "noopener noreferrer"}
                    className="font-mono text-xs uppercase tracking-wider underline decoration-1 underline-offset-4 transition-colors hover:text-accent"
                  >
                    {expert.follow.label} {expert.follow.href.startsWith("/") ? "→" : "↗"}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function SpecialtyTable({
  title: specialtyTitle,
  entries,
}: {
  title: string;
  entries: readonly { expert: string; reason: string }[];
}) {
  return (
    <div className="bg-background p-6 md:p-7">
      <h3 className="font-display text-2xl font-medium">{specialtyTitle}</h3>
      <table className="mt-5 w-full border-collapse text-left">
        <thead className="sr-only">
          <tr>
            <th>Rank and expert</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, entryIndex) => (
            <tr key={entry.expert} className="border-t border-foreground/20 align-top">
              <th scope="row" className="w-32 py-4 pr-4 font-normal">
                <span className="mr-2 font-mono text-xs text-accent">0{entryIndex + 1}</span>
                <span className="font-display text-lg font-semibold">{entry.expert}</span>
              </th>
              <td className="py-4 font-body text-sm leading-relaxed text-foreground/70">
                {entry.reason}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function TopAeoExpertsPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is generated from the static ranking data rendered below
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rankingJsonLd) }}
      />

      <main>
        <header className="px-6 pt-6">
          <div className="mx-auto max-w-7xl">
            <SubpageNav activeHref="/research" />

            <div className="py-24 md:py-32">
              <p className="font-mono text-xs uppercase tracking-widest text-foreground/60">
                Editorial ranking · Updated July 26, 2026
              </p>
              <h1 className="mt-5 max-w-5xl font-display text-hero-name font-normal leading-[0.9] tracking-tight">
                The 12 best AEO and GEO experts in 2026
              </h1>
              <p className="mt-8 max-w-3xl font-body text-xl leading-relaxed text-foreground/80 md:text-2xl">
                A source-backed ranking of the researchers, technical practitioners, and strategists
                publishing work that can be inspected.
              </p>
              <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-foreground/65">
                This is my ranking. It reflects my opinion, based on the public evidence linked
                throughout. Profound publishes a{" "}
                <a
                  href="https://www.tryprofound.com/articles/top-experts-in-generative-engine-optimization"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-accent/60 underline-offset-4 hover:text-accent"
                >
                  separate commercial editorial list
                </a>
                ; employment and publication relationships are not independent endorsements.
              </p>
            </div>
          </div>
        </header>

        <Section layout="split">
          <div className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <DisplayH2>How this ranking works</DisplayH2>
            <p className="max-w-sm font-body text-lg leading-relaxed text-foreground/80">
              The order favors evidence a reader can inspect over follower counts, self-awarded
              titles, or unsourced client logos.
            </p>
          </div>
          <div className="divide-y divide-foreground/20 border-y border-foreground/20">
            {rankingCriteria.map((criterion, criterionIndex) => (
              <article
                key={criterion.name}
                className="grid gap-4 py-7 sm:grid-cols-[3rem_1fr] sm:py-8"
              >
                <span className="font-mono text-xs text-accent">0{criterionIndex + 1}</span>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h2 className="font-display text-2xl font-medium">{criterion.name}</h2>
                    <span className="font-mono text-xs uppercase tracking-wider text-foreground/45">
                      {criterion.priority}
                    </span>
                  </div>
                  <p className="mt-3 max-w-2xl font-body text-base leading-relaxed text-foreground/75">
                    {criterion.description}
                  </p>
                </div>
              </article>
            ))}
            <p className="py-7 font-body text-sm leading-relaxed text-foreground/60">
              The ranking is a structured editorial review, not a scientific league table. The
              source links under every profile show the evidence used and the gaps that remain.
            </p>
          </div>
        </Section>

        <Section>
          <SectionHeader
            title="The ranking at a glance"
            eyebrow="12 experts"
            className="mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <p className="mb-3 font-mono text-xs leading-relaxed tracking-wide text-foreground/50 xl:hidden">
            Swipe the table horizontally to compare all five columns.
          </p>
          <ComparisonTable />
        </Section>

        <Section>
          <SectionHeader
            title="Best AEO experts by specialty"
            eyebrow="Three views"
            className="mb-10 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <div className="grid gap-px border border-foreground/20 bg-foreground/20 lg:grid-cols-3">
            <SpecialtyTable title="Research & data" entries={specialtyRankings.research} />
            <SpecialtyTable title="Technical AEO" entries={specialtyRankings.technical} />
            <SpecialtyTable title="Strategy" entries={specialtyRankings.strategy} />
          </div>
        </Section>

        <Section layout="narrow">
          <SectionHeader
            title="Full expert profiles"
            eyebrow="Evidence file"
            className="mb-4 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <ol
            itemScope
            itemType="https://schema.org/ItemList"
            className="divide-y divide-foreground/20"
          >
            {aeoExperts.map((expert) => (
              <li
                key={expert.slug}
                id={expert.slug}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                className="scroll-mt-24 py-14 md:py-16"
              >
                <meta itemProp="position" content={String(expert.rank)} />
                <article itemProp="item" itemScope itemType="https://schema.org/Person">
                  <div className="grid gap-6 md:grid-cols-[5rem_1fr] md:gap-10">
                    <p className="font-display text-5xl font-normal leading-none text-accent">
                      {String(expert.rank).padStart(2, "0")}
                    </p>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                        {expert.role}
                      </p>
                      <h2
                        itemProp="name"
                        className="mt-3 font-display text-4xl font-medium leading-tight"
                      >
                        {expert.name}
                      </h2>
                      <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-foreground/80">
                        <span className="font-semibold text-foreground">Best known for:</span>{" "}
                        {expert.bestKnownFor}.{" "}
                        <span className="font-semibold text-foreground">Key credential:</span>{" "}
                        {expert.keyCredential}.
                      </p>

                      <div className="mt-7 max-w-2xl space-y-5 font-body text-base leading-relaxed text-foreground/80 md:text-lg">
                        {expert.profile.map((profileParagraph) => (
                          <p key={profileParagraph}>{profileParagraph}</p>
                        ))}
                      </div>

                      <div className="mt-8 border-t border-foreground/20 pt-5">
                        <p className="font-mono text-xs uppercase tracking-widest text-foreground/45">
                          Credential sources
                        </p>
                        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-wider">
                          {expert.sources.map((source) => (
                            <a
                              key={source.href}
                              href={source.href}
                              target={source.href.startsWith("/") ? undefined : "_blank"}
                              rel={source.href.startsWith("/") ? undefined : "noopener noreferrer"}
                              className="underline decoration-1 underline-offset-4 transition-colors hover:text-accent"
                            >
                              {source.label} {source.href.startsWith("/") ? "→" : "↗"}
                            </a>
                          ))}
                          <a
                            itemProp="url"
                            href={expert.follow.href}
                            target={expert.follow.href.startsWith("/") ? undefined : "_blank"}
                            rel={
                              expert.follow.href.startsWith("/") ? undefined : "noopener noreferrer"
                            }
                            className="text-accent underline decoration-1 underline-offset-4"
                          >
                            Follow {expert.name} {expert.follow.href.startsWith("/") ? "→" : "↗"}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </Section>

        <Section>
          <SectionHeader
            title="Related research"
            eyebrow="On this site"
            className="mb-10 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <div className="grid gap-px border border-foreground/20 bg-foreground/20 md:grid-cols-3">
            {[
              {
                href: "/research/250-million-ai-search-results",
                title: "What 250 million AI search results say gets cited",
              },
              {
                href: "/research/sage-aeo-method",
                title: "SAGE for AEO: A Four-Stage Operating Loop",
              },
              { href: "/about", title: "Josh Blyskal's credential profile" },
            ].map((relatedPage) => (
              <Link
                key={relatedPage.href}
                href={relatedPage.href}
                className="group bg-background p-7 transition-colors hover:bg-foreground/5"
              >
                <h3 className="font-display text-2xl font-medium leading-snug decoration-1 underline-offset-4 group-hover:underline">
                  {relatedPage.title}
                </h3>
                <span className="mt-5 block font-mono text-xs uppercase tracking-widest text-accent">
                  Read →
                </span>
              </Link>
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
