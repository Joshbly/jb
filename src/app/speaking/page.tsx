import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { SubpageNav } from "@/components/layout/SubpageNav";
import { DisplayH2, Section, SectionHeader } from "@/components/shared/Section";
import { type Appearance, appearances } from "@/content/media";
import { site } from "@/content/site";
import { speakingPageJsonLd } from "@/lib/seo";

type RecordedAppearance = Appearance & { recording: string };

function appearanceById(appearanceId: string) {
  return appearances.find((appearance) => appearance.id === appearanceId) as Appearance;
}

function recordedAppearanceById(appearanceId: string) {
  return appearanceById(appearanceId) as RecordedAppearance;
}

function youtubeVideoId(recordingUrl: string) {
  return new URL(recordingUrl).searchParams.get("v") as string;
}

const pageUrl = `${site.url}/speaking`;
const title = "Speaking";
const description =
  "Talks and booking information for Josh Blyskal on making brands visible in AI search.";
const bookingHref = `mailto:${site.email}?subject=Speaking%20inquiry`;
const speakerDeck = site.socials.find(
  (social) => social.label === "Speaker Deck",
) as (typeof site.socials)[number];

const techSeoTalk = recordedAppearanceById("2025-12-05-techseo-connect");
const brightonTalk = recordedAppearanceById("2025-04-11-brightonseo-uk");
const brightonVideoId = youtubeVideoId(brightonTalk.recording);

const talkTopics = [
  {
    talkFamilyId: "state-of-aeo-2026",
    title: "The state of AEO",
    description:
      "A current read on ChatGPT, Claude, Google AI Mode, AI Overviews, and advertising in answer engines.",
  },
  {
    talkFamilyId: "large-scale-ai-search-research",
    title: "How brands get found in AI search",
    description:
      "Research on the pages, product information, third-party coverage, and query fanouts that shape whether a brand appears.",
  },
  {
    talkFamilyId: "marketing-engineering-2026",
    title: "The marketing engineer",
    description:
      "How marketers can use agents and repeatable workflows to find visibility gaps and act on them.",
  },
  {
    talkFamilyId: "machine-customer-era",
    title: "The machine customer era",
    description:
      "How brands need to prepare for AI agents that research products, make comparisons, and shape the purchase.",
  },
].map((talkTopic) => ({
  ...talkTopic,
  appearances: appearances.filter(
    (appearance) => appearance.talkFamilyId === talkTopic.talkFamilyId,
  ),
}));

const completeRecordings = [
  { appearance: brightonTalk, duration: "19:39" },
  { appearance: techSeoTalk, duration: "28:28" },
];

const stageCredits = [
  {
    label: "MozCon",
    detail: "New York · 2026",
    appearance: appearanceById("2026-07-14-mozcon"),
  },
  {
    label: "BrightonSEO",
    detail: "Brighton and San Diego · 2025",
    appearance: brightonTalk,
  },
  {
    label: "TechSEO Connect",
    detail: "Raleigh · 2025",
    appearance: techSeoTalk,
  },
  {
    label: "Zero Click",
    detail: "New York, London, and San Francisco",
    appearance: appearanceById("2025-10-08-zero-click-nyc"),
  },
  {
    label: "Spotlight AR",
    detail: "Kansas City · 2025",
    appearance: appearanceById("2025-09-29-spotlight-ar"),
  },
  {
    label: "Shenzhen SEO Conference",
    detail: "Upcoming · September 2026",
    appearance: appearanceById("2026-09-shenzhen-seo"),
  },
];

const commentaryTopics = [
  "How brands become visible in ChatGPT, Claude, Gemini, and Google AI products",
  "Answer engine optimization and what replaces the traditional ranking playbook",
  "How AI agents find, compare, and recommend brands",
  "What real user prompts reveal about how people discover products in AI search",
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    images: [
      {
        url: `https://i.ytimg.com/vi/${brightonVideoId}/maxresdefault.jpg`,
        width: 1280,
        height: 720,
        alt: `${brightonTalk.title} at BrightonSEO`,
      },
    ],
  },
};

export default function SpeakingPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is generated from the static speaking details below
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakingPageJsonLd) }}
      />
      <main>
        <header className="px-6 pt-6">
          <div className="mx-auto max-w-7xl">
            <SubpageNav activeHref="/speaking" />
            <div className="grid gap-12 py-24 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end lg:py-32">
              <div className="min-w-0">
                <p className="font-mono text-xs uppercase tracking-widest text-foreground/55">
                  AI search research, onstage
                </p>
                <h1 className="mt-5 max-w-4xl font-display text-hero-name font-normal leading-[0.92] tracking-tight">
                  Speaking
                </h1>
                <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-foreground/80 md:text-xl">
                  Josh gives research-led talks on how brands get found and recommended in AI
                  search, how agents shape buying decisions, and what marketing teams can do about
                  it.
                </p>
                <div className="mt-9 flex flex-wrap gap-x-7 gap-y-4 font-mono text-xs uppercase tracking-widest">
                  <a
                    href={bookingHref}
                    className="bg-foreground px-5 py-3 text-background transition-colors hover:bg-accent"
                  >
                    Book Josh to speak
                  </a>
                  <a
                    href={brightonTalk.recording}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-1 py-3 underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent"
                  >
                    Watch a full talk ↗
                  </a>
                </div>
              </div>
              <div className="min-w-0 border-t-2 border-foreground pt-5">
                <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                  Booking and press
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-4 block break-all font-display text-2xl italic underline decoration-accent/40 underline-offset-6 transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
                <Link
                  href="/archive"
                  className="mt-5 inline-block font-mono text-xs uppercase tracking-widest transition-colors hover:text-accent"
                >
                  Browse the full archive →
                </Link>
              </div>
            </div>
          </div>
        </header>

        <Section>
          <SectionHeader
            title="Talk topics"
            eyebrow="Four current talks"
            className="mb-10 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <div className="grid gap-px border border-foreground/20 bg-foreground/20 md:grid-cols-2">
            {talkTopics.map((talkTopic) => (
              <article key={talkTopic.talkFamilyId} className="min-w-0 bg-background p-7 md:p-9">
                <h2 className="font-display text-3xl font-medium leading-tight">
                  {talkTopic.title}
                </h2>
                <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-foreground/75">
                  {talkTopic.description}
                </p>
                <p className="mt-7 font-mono text-xs uppercase leading-relaxed tracking-wider text-foreground/45">
                  {talkTopic.appearances.map((appearance) => appearance.event).join(" · ")}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section layout="split">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-5 font-mono text-xs uppercase tracking-widest text-accent">
              Transcript-verified excerpt · 5:10–7:10
            </p>
            <DisplayH2>
              This two-minute section explains why the answer engines rank differently.
            </DisplayH2>
            <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-foreground/75">
              This cut explains why a brand that performs well in Google may still be absent from
              ChatGPT, then compares the parts of the web each answer engine relies on.
            </p>
            <a
              href={`${brightonTalk.recording}&t=310s`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block font-mono text-xs uppercase tracking-widest underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent"
            >
              Open this moment on YouTube ↗
            </a>
          </div>
          <div className="min-w-0">
            <div className="aspect-video overflow-hidden border border-foreground bg-foreground">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${brightonVideoId}?start=310&end=430&rel=0`}
                title="Two-minute BrightonSEO excerpt from Josh Blyskal"
                className="size-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <p className="mt-4 font-mono text-xs uppercase leading-relaxed tracking-wider text-foreground/50">
              {brightonTalk.event} · {brightonTalk.location}
            </p>
          </div>
        </Section>

        <Section>
          <SectionHeader
            title="Complete recordings"
            eyebrow="2 talks"
            className="mb-10 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
          />
          <div className="grid gap-12 lg:grid-cols-2">
            {completeRecordings.map(({ appearance, duration }) => (
              <article key={appearance.id} className="min-w-0">
                <div className="aspect-video overflow-hidden border border-foreground bg-foreground">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId(appearance.recording)}?rel=0`}
                    title={`${appearance.title}, full recording`}
                    loading="lazy"
                    className="size-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <p className="mt-5 font-mono text-xs uppercase tracking-widest text-accent">
                  {appearance.event} · {duration}
                </p>
                <h3 className="mt-3 font-display text-2xl font-medium leading-snug">
                  {appearance.title}
                </h3>
                <a
                  href={appearance.recording}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block font-mono text-xs uppercase tracking-widest underline decoration-dotted underline-offset-4 transition-colors hover:text-accent"
                >
                  Watch on YouTube ↗
                </a>
              </article>
            ))}
          </div>
        </Section>

        <Section layout="split">
          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <DisplayH2>Where Josh has spoken</DisplayH2>
            <p className="max-w-sm font-body text-lg leading-relaxed text-foreground/75">
              Conference talks, owned events, and analyst gatherings across the U.S. and U.K., with
              Shenzhen next.
            </p>
          </div>
          <div className="border-y border-foreground/20">
            {stageCredits.map(({ label, detail, appearance }) => (
              <a
                key={label}
                href={appearance.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid min-w-0 gap-2 border-b border-foreground/20 py-5 last:border-b-0 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline sm:gap-6"
              >
                <span className="font-display text-2xl font-medium underline decoration-accent/30 underline-offset-4 transition-colors group-hover:text-accent">
                  {label}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-foreground/50">
                  {detail}
                </span>
              </a>
            ))}
          </div>
        </Section>

        <Section>
          <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-24">
            <div className="min-w-0">
              <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
                Short bio
              </p>
              <h2 className="mt-5 font-display text-4xl font-normal italic">About Josh</h2>
              <div className="mt-7 space-y-5 font-body text-lg leading-relaxed text-foreground/80">
                <p>
                  Josh Blyskal leads AI Strategy & Research at Profound, where he works on making
                  brands visible in answer engines and to the agents that use them.
                </p>
                <p>
                  Before Profound, he co-founded HubSpot&apos;s Marketing AI practice and built the
                  AI Search Grader. He lives in Brooklyn.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4 font-mono text-xs uppercase tracking-widest">
                <a
                  href={speakerDeck.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent"
                >
                  Speaker Deck ↗
                </a>
                <Link
                  href="/about"
                  className="underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-accent"
                >
                  Full bio →
                </Link>
              </div>
            </div>

            <div className="min-w-0">
              <SectionHeader
                title="Organizer files"
                className="mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
              />
              <div className="grid gap-8 sm:grid-cols-2">
                <figure className="min-w-0">
                  <div className="relative aspect-4/5 overflow-hidden border border-foreground">
                    <Image
                      src={site.headshot}
                      alt={`Portrait of ${site.name}`}
                      fill
                      sizes="(min-width: 640px) 25vw, 100vw"
                      className="object-cover grayscale"
                    />
                  </div>
                  <figcaption className="mt-4">
                    <a
                      href={site.headshot}
                      download="josh-blyskal-headshot.png"
                      className="font-mono text-xs uppercase tracking-widest underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent"
                    >
                      Download headshot · PNG
                    </a>
                    <p className="mt-2 font-body text-sm text-foreground/55">1509 × 1726 pixels</p>
                  </figcaption>
                </figure>
                <figure className="min-w-0">
                  <div className="relative aspect-4/5 overflow-hidden border border-foreground">
                    <Image
                      src={site.heroImage.src}
                      alt={site.heroImage.alt}
                      fill
                      sizes="(min-width: 640px) 25vw, 100vw"
                      className="object-cover grayscale"
                    />
                  </div>
                  <figcaption className="mt-4">
                    <a
                      href={site.heroImage.src}
                      download="josh-blyskal-onstage.png"
                      className="font-mono text-xs uppercase tracking-widest underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent"
                    >
                      Download stage photo · PNG
                    </a>
                    <p className="mt-2 font-body text-sm text-foreground/55">4000 × 6000 pixels</p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </Section>

        <Section layout="split">
          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <DisplayH2>Press and research commentary</DisplayH2>
            <p className="max-w-sm font-body text-lg leading-relaxed text-foreground/75">
              Josh is available for interviews, panels, and research collaboration on how brands
              show up in AI search.
            </p>
          </div>
          <div className="min-w-0">
            <ul className="border-y border-foreground/20">
              {commentaryTopics.map((commentaryTopic) => (
                <li
                  key={commentaryTopic}
                  className="border-b border-foreground/20 py-5 font-display text-xl font-medium leading-snug last:border-b-0 md:text-2xl"
                >
                  {commentaryTopic}
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${site.email}`}
              className="mt-9 block break-all font-display text-3xl italic underline decoration-accent/50 underline-offset-8 transition-colors hover:text-accent md:text-4xl"
            >
              {site.email}
            </a>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 font-mono text-xs uppercase tracking-widest">
              <a href={bookingHref} className="transition-colors hover:text-accent hover:underline">
                Speaking inquiry →
              </a>
              <Link
                href="/archive#press"
                className="transition-colors hover:text-accent hover:underline"
              >
                Press archive →
              </Link>
              <Link href="/archive" className="transition-colors hover:text-accent hover:underline">
                Full archive →
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
