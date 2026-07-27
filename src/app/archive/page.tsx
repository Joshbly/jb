import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { SubpageNav } from "@/components/layout/SubpageNav";
import { MediaHashNavigation } from "@/components/media/MediaHashNavigation";
import { MediaPhotoBreak } from "@/components/media/MediaPhotoBreak";
import { ArchiveEntry, type ArchiveEntryLink } from "@/components/shared/ArchiveEntry";
import { SectionHeader } from "@/components/shared/Section";
import type { Appearance } from "@/content/media";
import {
  decks,
  linkedinArchiveNote,
  linkedinPosts,
  podcastAppearances,
  pressRecords,
  recordings,
  stageAppearances,
  writtenWorks,
} from "@/content/media";
import { site } from "@/content/site";
import { archivePageJsonLd } from "@/lib/seo";
import { formatDate } from "@/lib/time";

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

const archiveSections = [
  { href: "#stages", label: "Stages", count: stageAppearances.length },
  {
    href: "#podcasts",
    label: "Podcasts & interviews",
    count: podcastAppearances.length,
  },
  { href: "#press", label: "Press & citations", count: pressRecords.length },
  { href: "#writing", label: "Writing", count: writtenWorks.length },
  {
    href: "#decks",
    label: "Decks & recordings",
    count: decks.length + recordings.length,
  },
  { href: "#linkedin", label: "LinkedIn", count: linkedinPosts.length },
] as const;

const archiveAssets = [
  ...decks.map((deck) => ({
    ...deck,
    source: deck.event,
    sourceDetail: "Deck",
  })),
  ...recordings.map((recording) => ({
    ...recording,
    sourceDetail: "Recording",
  })),
].sort((firstAsset, secondAsset) => secondAsset.date.localeCompare(firstAsset.date));

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

function ArchiveSection({
  id,
  title: sectionTitle,
  count,
  children,
}: {
  id: string;
  title: string;
  count: number;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      tabIndex={-1}
      className="scroll-mt-20 border-t-2 border-foreground py-14 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="sticky top-0 z-20 bg-background py-2">
          <SectionHeader
            title={sectionTitle}
            eyebrow={`${count} entries`}
            className="[&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
        </div>
        <div className="mt-2">{children}</div>
      </div>
    </section>
  );
}

function linksFor(appearance: Appearance) {
  const links: ArchiveEntryLink[] = [];
  if (appearance.recording) {
    links.push({ label: "Recording", href: appearance.recording });
  }
  if (appearance.slides) {
    links.push({ label: "Slides", href: appearance.slides });
  }
  if (appearance.research) {
    links.push({ label: "Research", href: appearance.research });
  }
  return links;
}

function appearanceDate(appearance: Appearance) {
  const date = appearance.dateLabel ?? formatDate(appearance.date);
  return appearance.status === "upcoming" ? `Upcoming · ${date}` : date;
}

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-background">
      <MediaHashNavigation />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is generated from the static archive rendered below
        dangerouslySetInnerHTML={{ __html: JSON.stringify(archivePageJsonLd) }}
      />
      <main>
        <header className="px-6 pt-6">
          <div className="mx-auto max-w-7xl">
            <SubpageNav activeHref="/archive" />
            <div className="py-24 md:py-32">
              <p className="font-mono text-xs uppercase tracking-widest text-foreground/55">
                Public archive
              </p>
              <h1 className="mt-5 max-w-4xl font-display text-hero-name font-normal leading-[0.92] tracking-tight">
                Archive
              </h1>
              <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-foreground/80 md:text-xl">
                Talks, podcasts, press, writing, decks, recordings, and research notes.
              </p>
            </div>
          </div>
        </header>

        <section className="border-t-2 border-foreground py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
              {representativeMarks.map((mark) => (
                <a
                  key={mark.name}
                  href={mark.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-foreground/70 transition-colors hover:text-accent"
                >
                  <Image
                    src={`https://www.google.com/s2/favicons?domain=${mark.domain}&sz=128`}
                    alt=""
                    width={28}
                    height={28}
                    unoptimized
                    className="size-7 shrink-0 object-contain grayscale transition-all group-hover:grayscale-0"
                  />
                  <span className="font-display text-lg font-medium leading-none">{mark.name}</span>
                </a>
              ))}
            </div>

            <nav
              aria-label="Archive sections"
              className="mt-14 grid border-t border-l border-foreground/20 sm:grid-cols-2 lg:grid-cols-3"
            >
              {archiveSections.map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  className="group flex items-center justify-between gap-4 border-r border-b border-foreground/20 px-5 py-5 transition-colors hover:bg-foreground/5"
                >
                  <span className="font-display text-xl font-medium group-hover:underline">
                    {section.label}
                  </span>
                  <span className="font-mono text-xs text-foreground/40">{section.count}</span>
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <MediaPhotoBreak
          src="/images/media/zero-click-nyc-2025.jpg"
          alt="Josh Blyskal presenting a ChatGPT shopping example onstage at Zero Click New York"
          kicker="Zero Click New York · Oct 2025"
          caption="The Machine Customer Era, live at the inaugural Zero Click conference."
          sourceHref="https://www.tryprofound.com/blog/zero-click-new-york-inagaural-ai-search-nyc-summit"
          sourceLabel="Event archive"
          layout="wide"
          priority
        />

        <ArchiveSection id="stages" title="Stages" count={stageAppearances.length}>
          <div className="grid md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
            {stageAppearances.map((appearance) => (
              <ArchiveEntry
                key={appearance.id}
                source={appearance.event}
                sourceDetail={appearance.location}
                date={appearance.date}
                dateLabel={appearanceDate(appearance)}
                title={appearance.title}
                displayTitle={appearance.listTitle}
                href={appearance.href}
                links={linksFor(appearance)}
              />
            ))}
          </div>
        </ArchiveSection>

        <MediaPhotoBreak
          src="/images/media/techseo-connect-2025.jpg"
          alt="TechSEO Connect title card for Josh Blyskal's 250 million AI response study"
          kicker="TechSEO Connect · Raleigh · Dec 2025"
          caption="Presenting research drawn from 250 million AI responses."
          sourceHref="https://www.youtube.com/watch?v=ll_kZh5GVX0"
          sourceLabel="Watch the recording"
        />

        <ArchiveSection
          id="podcasts"
          title="Podcasts & interviews"
          count={podcastAppearances.length}
        >
          <div className="grid md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
            {podcastAppearances.map((appearance) => (
              <ArchiveEntry
                key={appearance.id}
                source={appearance.event}
                sourceDetail={appearance.kind}
                date={appearance.date}
                dateLabel={appearanceDate(appearance)}
                title={appearance.title}
                displayTitle={appearance.listTitle}
                href={appearance.href}
                links={linksFor(appearance)}
              />
            ))}
          </div>
        </ArchiveSection>

        <ArchiveSection id="press" title="Press & citations" count={pressRecords.length}>
          <div className="grid md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
            {pressRecords.map((record) => (
              <ArchiveEntry
                key={record.id}
                source={record.outlet}
                sourceDetail={record.kind === "quoted" ? "Quoted" : "Research cited"}
                date={record.date}
                dateLabel={record.dateLabel ?? formatDate(record.date)}
                title={record.title}
                displayTitle={record.listTitle}
                href={record.href}
                links={record.alternateLinks}
              />
            ))}
          </div>
        </ArchiveSection>

        <ArchiveSection id="writing" title="Writing" count={writtenWorks.length}>
          <div className="grid md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
            {writtenWorks.map((work) => (
              <ArchiveEntry
                key={work.id}
                source={work.href.startsWith("/") ? work.kind : work.outlet}
                sourceDetail={work.href.startsWith("/") ? undefined : work.kind}
                date={work.date}
                dateLabel={formatDate(work.date)}
                title={work.title}
                displayTitle={work.listTitle}
                href={work.href}
                links={work.editions}
              />
            ))}
          </div>
        </ArchiveSection>

        <ArchiveSection
          id="decks"
          title="Decks & recordings"
          count={decks.length + recordings.length}
        >
          <div className="grid md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
            {archiveAssets.map((asset) => (
              <ArchiveEntry
                key={asset.id}
                source={asset.source}
                sourceDetail={asset.sourceDetail}
                date={asset.date}
                dateLabel={formatDate(asset.date)}
                title={asset.title}
                displayTitle={asset.listTitle}
                href={asset.href}
              />
            ))}
          </div>
        </ArchiveSection>

        <MediaPhotoBreak
          src="/images/media/brightonseo-san-diego-2025.jpg"
          alt="Josh Blyskal presenting semantic URL citation research at brightonSEO San Diego"
          kicker="brightonSEO · San Diego · Sep 2025"
          caption="A field note on semantic URLs and AI citations."
          sourceHref="https://www.linkedin.com/posts/joshua-blyskal_thats-a-wrap-on-brighton-seo-san-diego-2025-activity-7377089308924739584-VOVN"
          sourceLabel="Original post"
          layout="split-reverse"
        />

        <ArchiveSection id="linkedin" title="LinkedIn" count={linkedinPosts.length}>
          <p className="mb-4 font-body text-sm text-foreground/55">{linkedinArchiveNote}</p>
          <div className="grid md:grid-cols-2 md:gap-x-12 xl:grid-cols-3 xl:gap-x-10">
            {linkedinPosts.map((post) => (
              <ArchiveEntry
                key={post.id}
                source="LinkedIn"
                sourceDetail={post.kind}
                date={post.date}
                dateLabel={formatDate(post.date)}
                title={post.title}
                displayTitle={post.listTitle}
                href={post.href}
              />
            ))}
          </div>
        </ArchiveSection>
      </main>
      <Footer />
    </div>
  );
}
