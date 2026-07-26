import Link from "next/link";
import { ArchiveEntry } from "@/components/shared/ArchiveEntry";
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
          eyebrow={`${featuredPodcastAppearances.length} selected`}
          className="mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
        />
      </Reveal>

      <div className="grid md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
        {featuredPodcastAppearances.map((appearance, index) => (
          <Reveal key={appearance.id} index={index}>
            <ArchiveEntry
              source={appearance.event}
              sourceDetail={appearance.kind}
              date={appearance.date}
              dateLabel={formatDate(appearance.date)}
              title={appearance.title}
              displayTitle={appearance.listTitle}
              href={appearance.href}
              links={
                appearance.recording ? [{ label: "Watch", href: appearance.recording }] : undefined
              }
            />
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
