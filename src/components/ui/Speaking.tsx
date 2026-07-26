import Link from "next/link";
import { ArchiveEntry, type ArchiveEntryLink } from "@/components/shared/ArchiveEntry";
import { Reveal } from "@/components/shared/Reveal";
import { Section, SectionHeader } from "@/components/shared/Section";
import { featuredStageAppearances } from "@/content/media";
import { formatDate } from "@/lib/time";

function linksFor(appearance: (typeof featuredStageAppearances)[number]) {
  const links: ArchiveEntryLink[] = [];
  if (appearance.research) {
    links.push({ label: "Research", href: appearance.research });
  }
  if (appearance.slides) {
    links.push({ label: "Slides", href: appearance.slides });
  }
  if (appearance.recording) {
    links.push({ label: "Recording", href: appearance.recording });
  }
  return links;
}

export function Speaking() {
  return (
    <Section id="speaking">
      <Reveal>
        <SectionHeader
          title="Selected talks"
          eyebrow={`${featuredStageAppearances.length} selected`}
          className="mb-8 gap-2 [&>h2]:text-3xl sm:gap-4 sm:[&>h2]:text-4xl"
        />
      </Reveal>

      <div className="grid md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
        {featuredStageAppearances.map((appearance, index) => (
          <Reveal key={appearance.id} index={index}>
            <ArchiveEntry
              source={appearance.event}
              sourceDetail={appearance.location}
              date={appearance.date}
              dateLabel={formatDate(appearance.date)}
              title={appearance.title}
              displayTitle={appearance.listTitle}
              href={appearance.href}
              links={linksFor(appearance)}
            />
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
