import Link from "next/link";
import { ArchiveEntry } from "@/components/shared/ArchiveEntry";
import { Reveal } from "@/components/shared/Reveal";
import { Section, SectionHeader } from "@/components/shared/Section";
import { featuredWrittenWorks } from "@/content/media";
import { formatDate } from "@/lib/time";

export function Writing() {
  return (
    <Section id="writing">
      <Reveal>
        <SectionHeader
          title="Selected writing"
          eyebrow={`${featuredWrittenWorks.length} selected`}
          className="mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
        />
      </Reveal>
      <div className="grid md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
        {featuredWrittenWorks.map((post, index) => (
          <Reveal key={post.id} index={index}>
            <ArchiveEntry
              source={post.href.startsWith("/") ? post.kind : post.outlet}
              sourceDetail={post.href.startsWith("/") ? undefined : post.kind}
              date={post.date}
              dateLabel={formatDate(post.date)}
              title={post.title}
              displayTitle={post.listTitle}
              href={post.href}
            />
          </Reveal>
        ))}
      </div>

      <Link
        href="/media#writing"
        className="mt-8 inline-block font-mono text-xs uppercase tracking-widest transition-colors hover:text-accent"
      >
        All writing →
      </Link>
    </Section>
  );
}
