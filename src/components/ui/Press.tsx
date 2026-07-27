import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { Section, SectionHeader } from "@/components/shared/Section";
import { featuredPressRecords } from "@/content/media";
import { formatDate } from "@/lib/time";

export function Press() {
  return (
    <Section id="press">
      <Reveal>
        <SectionHeader
          title="Press & citations"
          eyebrow="Media log"
          className="mb-16 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
        />
      </Reveal>
      <div className="grid grid-cols-1 gap-px border border-foreground/20 bg-foreground/20 md:grid-cols-2 lg:grid-cols-3">
        {featuredPressRecords.map((mention, index) => (
          <Reveal key={mention.id} index={index}>
            <a
              href={mention.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-full flex-col bg-background p-8 transition-colors hover:bg-foreground/5"
            >
              <div className="mb-4 flex w-full items-start justify-between">
                <Image
                  src={`https://www.google.com/s2/favicons?domain=${mention.domain}&sz=64`}
                  alt={`${mention.outlet} logo`}
                  width={26}
                  height={26}
                  unoptimized
                  className="h-6.5 w-6.5 object-contain opacity-60 transition-opacity group-hover:opacity-100"
                />
                <span className="font-mono text-xs opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                  ↗
                </span>
              </div>
              <span className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
                {mention.outlet}
              </span>
              <h3 className="font-display text-xl font-medium leading-snug transition-colors group-hover:text-accent">
                {mention.title}
              </h3>
              <span className="mt-auto pt-6 font-mono text-xs uppercase tracking-widest text-foreground/40">
                {formatDate(mention.date)}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
      <Link
        href="/archive#press"
        className="mt-8 inline-block font-mono text-xs uppercase tracking-widest transition-colors hover:text-accent"
      >
        All press & citations →
      </Link>
    </Section>
  );
}
