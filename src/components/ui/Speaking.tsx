import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { Section, SectionHeader } from "@/components/shared/Section";
import { featuredStageAppearances } from "@/content/media";
import { formatDate } from "@/lib/time";

export function Speaking() {
  return (
    <Section id="speaking">
      <Reveal>
        <SectionHeader
          title="Selected talks"
          eyebrow="Ref. List 01"
          className="mb-8 gap-2 [&>h2]:text-3xl sm:gap-4 sm:[&>h2]:text-4xl"
        />
      </Reveal>

      <Reveal>
        <p className="mb-8 max-w-2xl font-body text-lg leading-relaxed text-foreground/80">
          I present original research on AI retrieval, citation behavior, and user intent. Slides
          and recordings are published wherever possible.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
        {featuredStageAppearances.map((appearance, index) => (
          <Reveal
            as="article"
            key={appearance.id}
            index={index}
            className="h-full border-t border-foreground/20 py-8"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="font-mono text-xs uppercase tracking-wider">
                <span className="font-bold">{appearance.event}</span>
                {appearance.location ? (
                  <span className="mt-1 block text-foreground/50">{appearance.location}</span>
                ) : null}
              </div>
              <time
                className="font-mono text-xs uppercase tracking-wider text-foreground/40"
                dateTime={appearance.date}
              >
                {formatDate(appearance.date)}
              </time>
            </div>

            <h3 className="mt-4 max-w-xl font-display text-2xl font-semibold leading-snug">
              {appearance.title}
            </h3>
            {appearance.summary ? (
              <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-foreground/70">
                {appearance.summary}
              </p>
            ) : null}
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-widest">
              <a
                href={appearance.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 transition-colors hover:text-accent"
              >
                Event ↗
              </a>
              {appearance.research ? (
                <Link
                  href={appearance.research}
                  className="text-foreground/60 transition-colors hover:text-accent"
                >
                  Read research →
                </Link>
              ) : null}
              {appearance.slides && appearance.slides !== appearance.href ? (
                <a
                  href={appearance.slides}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 transition-colors hover:text-accent"
                >
                  View slides ↗
                </a>
              ) : null}
              {appearance.recording && appearance.recording !== appearance.href ? (
                <a
                  href={appearance.recording}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 transition-colors hover:text-accent"
                >
                  Watch recording ↗
                </a>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>

      <Link
        href="/media#stages"
        className="mt-8 inline-block font-mono text-xs uppercase tracking-widest transition-colors hover:text-accent"
      >
        All stages & sessions →
      </Link>
    </Section>
  );
}
