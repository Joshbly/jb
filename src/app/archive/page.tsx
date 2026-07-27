import type { Metadata } from "next";
import Image from "next/image";
import { ArchiveDatabase } from "@/components/archive/ArchiveDatabase";
import { Footer } from "@/components/layout/Footer";
import { SubpageNav } from "@/components/layout/SubpageNav";
import { archiveRecords, parseArchiveFilters } from "@/content/archive-records";
import { linkedinArchiveNote } from "@/content/media";
import { site } from "@/content/site";
import { archivePageJsonLd } from "@/lib/seo";

const pageUrl = `${site.url}/archive`;
const title = "Archive";
const description =
  "Josh Blyskal's public archive of talks, podcasts, interviews, press, writing, decks, recordings, and LinkedIn research.";

const representativeMarks = [
  { name: "MozCon", href: "https://moz.com/mozcon", domain: "moz.com" },
  { name: "BrightonSEO", href: "https://brightonseo.com", domain: "brightonseo.com" },
  {
    name: "TechSEO Connect",
    href: "https://www.tryprofound.com/blog/josh-blyskal-tech-seo-connect-deck-2025",
    domain: "techseoconnect.com",
  },
  {
    name: "Adweek",
    href: "https://www.adweek.com/media/profound-launches-an-ai-agent-to-manage-end-to-end-marketing/",
    domain: "adweek.com",
  },
  {
    name: "The Verge",
    href: "https://www.theverge.com/ai-artificial-intelligence/841156/ai-companies-aaif-anthropic-mcp-model-context-protocol",
    domain: "theverge.com",
  },
  {
    name: "Ad Age",
    href: "https://adage.com/technology/ai/aa-chatgpt-browser-atlas-brands/",
    domain: "adage.com",
  },
] as const;

export const metadata: Metadata = {
  title: { absolute: `${title} | ${site.name}` },
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    images: [{ url: site.ogImage, alt: title }],
  },
};

type ArchivePageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ArchivePage({ searchParams }: ArchivePageProps) {
  const resolvedSearchParams = await searchParams;
  const initialFilters = parseArchiveFilters((parameterName) => {
    const parameterValue = resolvedSearchParams[parameterName];
    return Array.isArray(parameterValue) ? (parameterValue[0] ?? null) : (parameterValue ?? null);
  });

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is generated from the static archive rendered below
        dangerouslySetInnerHTML={{ __html: JSON.stringify(archivePageJsonLd) }}
      />
      <main>
        <header id="archive-top" tabIndex={-1} className="px-6 pt-6 outline-none">
          <div className="mx-auto max-w-7xl">
            <SubpageNav activeHref="/archive" />
            <div className="py-20 md:py-28">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-foreground/55">
                    Public archive · {archiveRecords.length} records
                  </p>
                  <h1 className="mt-5 max-w-4xl font-display text-hero-name font-normal leading-[0.92] tracking-tight">
                    Archive
                  </h1>
                  <p className="mt-7 max-w-2xl font-body text-lg leading-relaxed text-foreground/75 md:text-xl">
                    Talks, interviews, coverage, writing, and field notes in one searchable record.
                  </p>
                </div>
                <p className="border-l border-foreground/25 pl-5 font-mono text-[11px] uppercase leading-relaxed tracking-wider text-foreground/50">
                  Every appearance appears once. Recordings, slides, and related research travel
                  with it.
                </p>
              </div>

              <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-foreground/20 pt-7 sm:grid-cols-3 lg:grid-cols-6">
                {representativeMarks.map((mark) => (
                  <a
                    key={mark.name}
                    href={mark.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-foreground/65 transition-colors hover:text-accent"
                  >
                    <Image
                      src={`https://www.google.com/s2/favicons?domain=${mark.domain}&sz=128`}
                      alt=""
                      width={24}
                      height={24}
                      unoptimized
                      className="size-6 shrink-0 object-contain grayscale transition-all group-hover:grayscale-0"
                    />
                    <span className="font-display text-base font-medium leading-none">
                      {mark.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </header>

        <ArchiveDatabase
          records={archiveRecords}
          initialFilters={initialFilters}
          linkedinArchiveNote={linkedinArchiveNote}
        />
      </main>
      <Footer />
    </div>
  );
}
