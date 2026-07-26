import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { Section, SectionHeader } from "@/components/shared/Section";
import { featuredPodcastAppearances } from "@/content/media";
import { formatDate } from "@/lib/time";

export function Podcasts() {
  return (
    <Section id="podcasts">
      <Reveal>
        <SectionHeader
          title="Selected podcasts"
          eyebrow="Media log"
          className="mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
        />
      </Reveal>

      <div className="grid md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
        {featuredPodcastAppearances.map((appearance, index) => (
          <Reveal
            as="article"
            key={appearance.id}
            index={index}
            className="h-full border-t border-foreground/20 py-8"
          >
            <div className="flex items-start justify-between gap-5 font-mono text-xs uppercase tracking-wider">
              <div>
                <p className="text-accent">{appearance.event}</p>
                <p className="mt-1 text-foreground/45">{appearance.role}</p>
              </div>
              <time className="shrink-0 text-foreground/40" dateTime={appearance.date}>
                {formatDate(appearance.date)}
              </time>
            </div>
            <h3 className="mt-4 max-w-xl font-display text-2xl font-semibold leading-snug">
              {appearance.title}
            </h3>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-foreground/55">
              <a
                href={appearance.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Episode ↗
              </a>
              {appearance.recording && appearance.recording !== appearance.href ? (
                <a
                  href={appearance.recording}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  Watch ↗
                </a>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>

      <Link
        href="/media#podcasts"
        className="mt-8 inline-block font-mono text-xs uppercase tracking-widest transition-colors hover:text-accent"
      >
        All podcasts & interviews →
      </Link>
    </Section>
  );
}
