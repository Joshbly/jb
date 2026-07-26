import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { SubpageNav } from "@/components/layout/SubpageNav";
import type { Appearance, MediaLink } from "@/content/media";
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
import { mediaPageJsonLd } from "@/lib/seo";
import { formatDate } from "@/lib/time";

const pageUrl = `${site.url}/media`;
const title = "Speaking & media";
const description =
  "The public archive of Josh Blyskal's talks, podcasts, interviews, press, writing, decks, recordings, and LinkedIn research.";

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

function MediaSectionHeader({
  title: sectionTitle,
  count,
}: {
  title: string;
  count: number;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b-2 border-foreground pb-4">
      <h2 className="font-display text-3xl font-normal italic sm:text-4xl">{sectionTitle}</h2>
      <span className="shrink-0 font-mono text-xs uppercase tracking-widest text-foreground/45">
        {count}
      </span>
    </div>
  );
}

function ItemLinks({ links }: { links: readonly MediaLink[] }) {
  const uniqueLinks = links.filter(
    (link, linkIndex) => links.findIndex((candidate) => candidate.href === link.href) === linkIndex,
  );

  return (
    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-foreground/55">
      {uniqueLinks.map((link) => {
        const external = !link.href.startsWith("/");
        return (
          <Link
            key={`${link.label}-${link.href}`}
            href={link.href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="transition-colors hover:text-accent"
          >
            {link.label} {external ? "↗" : "→"}
          </Link>
        );
      })}
    </div>
  );
}

function AppearanceGrid({ appearances: items }: { appearances: readonly Appearance[] }) {
  return (
    <div className="grid md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
      {items.map((appearance) => {
        const links: MediaLink[] = [{ label: "Source", href: appearance.href }];
        if (appearance.recording) {
          links.push({ label: "Recording", href: appearance.recording });
        }
        if (appearance.slides) {
          links.push({ label: "Slides", href: appearance.slides });
        }
        if (appearance.research) {
          links.push({ label: "Research", href: appearance.research });
        }

        return (
          <article key={appearance.id} className="border-t border-foreground/20 py-7">
            <div className="flex items-start justify-between gap-5 font-mono text-xs uppercase tracking-wider">
              <div>
                <p className="text-accent">{appearance.event}</p>
                <p className="mt-1 text-foreground/45">
                  {[appearance.role, appearance.location].filter(Boolean).join(" · ")}
                </p>
              </div>
              <time className="shrink-0 text-right text-foreground/40" dateTime={appearance.date}>
                {appearance.status === "upcoming"
                  ? `Upcoming · ${appearance.dateLabel ?? formatDate(appearance.date)}`
                  : (appearance.dateLabel ?? formatDate(appearance.date))}
              </time>
            </div>
            <h3 className="mt-4 max-w-xl font-display text-xl font-semibold leading-snug">
              {appearance.title}
            </h3>
            {appearance.coSpeakers?.length ? (
              <p className="mt-2 font-body text-sm leading-relaxed text-foreground/60">
                With {appearance.coSpeakers.join(", ")}
              </p>
            ) : null}
            <ItemLinks links={links} />
          </article>
        );
      })}
    </div>
  );
}

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is generated from the static media archive rendered below
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mediaPageJsonLd) }}
      />
      <main>
        <header className="px-6 pt-6">
          <div className="mx-auto max-w-7xl">
            <SubpageNav activeHref="/media" />
            <div className="py-24 md:py-32">
              <p className="font-mono text-xs uppercase tracking-widest text-foreground/55">
                Public archive
              </p>
              <h1 className="mt-5 max-w-4xl font-display text-hero-name font-normal leading-[0.92] tracking-tight">
                Speaking & media
              </h1>
              <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-foreground/80 md:text-xl">
                Talks, podcasts, interviews, press, writing, decks, recordings, and public research
                notes.
              </p>
            </div>
          </div>
        </header>

        <section className="border-t-2 border-foreground py-20 md:py-24">
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
              aria-label="Media archive sections"
              className="mt-14 grid border-t border-l border-foreground/20 sm:grid-cols-2 lg:grid-cols-3"
            >
              {archiveSections.map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  className="group flex min-h-28 items-end justify-between gap-4 border-r border-b border-foreground/20 p-5 transition-colors hover:bg-foreground/5"
                >
                  <span className="font-display text-2xl font-medium group-hover:underline">
                    {section.label}
                  </span>
                  <span className="font-mono text-xs text-foreground/40">{section.count}</span>
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <section id="stages" className="scroll-mt-20 border-t-2 border-foreground py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <MediaSectionHeader title="Stages" count={stageAppearances.length} />
            <AppearanceGrid appearances={stageAppearances} />
          </div>
        </section>

        <section id="podcasts" className="scroll-mt-20 border-t-2 border-foreground py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <MediaSectionHeader
              title="Podcasts & interviews"
              count={podcastAppearances.length}
            />
            <AppearanceGrid appearances={podcastAppearances} />
          </div>
        </section>

        <section id="press" className="scroll-mt-20 border-t-2 border-foreground py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <MediaSectionHeader title="Press & citations" count={pressRecords.length} />
            <div className="grid md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
              {pressRecords.map((record) => (
                <article key={record.id} className="border-t border-foreground/20 py-7">
                  <div className="flex items-start justify-between gap-5 font-mono text-xs uppercase tracking-wider">
                    <p className="text-accent">{record.outlet}</p>
                    <time className="text-foreground/40" dateTime={record.date}>
                      {formatDate(record.date)}
                    </time>
                  </div>
                  <p className="mt-2 font-mono text-xs uppercase tracking-wider text-foreground/45">
                    {record.kind === "quoted" ? "Quoted" : "Research cited"}
                  </p>
                  <h3 className="mt-4 max-w-xl font-display text-xl font-semibold leading-snug">
                    {record.title}
                  </h3>
                  <ItemLinks
                    links={[
                      { label: "Read", href: record.href },
                      ...(record.alternateLinks ?? []),
                    ]}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="writing" className="scroll-mt-20 border-t-2 border-foreground py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <MediaSectionHeader title="Writing" count={writtenWorks.length} />
            <div className="grid md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
              {writtenWorks.map((work) => (
                <article key={work.id} className="border-t border-foreground/20 py-7">
                  <div className="flex items-start justify-between gap-5 font-mono text-xs uppercase tracking-wider">
                    <div className="flex flex-wrap gap-x-3">
                      <span className="text-accent">{work.outlet}</span>
                      <span className="text-foreground/40">{work.kind}</span>
                    </div>
                    <time className="text-foreground/40" dateTime={work.date}>
                      {formatDate(work.date)}
                    </time>
                  </div>
                  <h3 className="mt-4 max-w-xl font-display text-xl font-semibold leading-snug">
                    {work.title}
                  </h3>
                  <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-foreground/65">
                    {work.summary}
                  </p>
                  <ItemLinks
                    links={[
                      { label: "Read", href: work.href },
                      ...(work.editions ?? []),
                    ]}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="decks" className="scroll-mt-20 border-t-2 border-foreground py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <MediaSectionHeader
              title="Decks & recordings"
              count={decks.length + recordings.length}
            />
            <div className="grid gap-12 pt-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <h3 className="font-display text-2xl font-medium">Decks</h3>
                <div className="mt-4">
                  {decks.map((deck) => (
                    <a
                      key={deck.id}
                      href={deck.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block border-t border-foreground/20 py-5"
                    >
                      <div className="flex justify-between gap-5 font-mono text-xs uppercase tracking-wider text-foreground/45">
                        <span>{deck.event}</span>
                        <time dateTime={deck.date}>{formatDate(deck.date)}</time>
                      </div>
                      <p className="mt-3 font-display text-lg font-semibold leading-snug group-hover:underline">
                        {deck.title} ↗
                      </p>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl font-medium">Recordings</h3>
                <div className="mt-4">
                  {recordings.map((recording) => (
                    <a
                      key={recording.id}
                      href={recording.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block border-t border-foreground/20 py-5"
                    >
                      <div className="flex justify-between gap-5 font-mono text-xs uppercase tracking-wider text-foreground/45">
                        <span>{recording.source}</span>
                        <time dateTime={recording.date}>{formatDate(recording.date)}</time>
                      </div>
                      <p className="mt-3 font-display text-lg font-semibold leading-snug group-hover:underline">
                        {recording.title} ↗
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="linkedin" className="scroll-mt-20 border-t-2 border-foreground py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <MediaSectionHeader title="LinkedIn" count={linkedinPosts.length} />
            <p className="mt-5 max-w-2xl font-body text-sm leading-relaxed text-foreground/55">
              {linkedinArchiveNote}
            </p>
            <div className="mt-8 grid md:grid-cols-2 md:gap-x-12 xl:grid-cols-3 xl:gap-x-10">
              {linkedinPosts.map((post) => (
                <a
                  key={post.id}
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-t border-foreground/20 py-6"
                >
                  <div className="flex justify-between gap-4 font-mono text-xs uppercase tracking-wider">
                    <span className="text-accent">{post.kind}</span>
                    <time className="text-foreground/40" dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug group-hover:underline">
                    {post.title} ↗
                  </h3>
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
