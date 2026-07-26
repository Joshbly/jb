import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";
import { Section, SectionHeader } from "@/components/shared/Section";
import { press } from "@/content/press";

const homepagePress = press.filter((mention) =>
  [
    "Adweek",
    "The Verge",
    "Search Engine Land",
    "AdAge",
    "Boston Consulting Group",
    "Business of Fashion",
  ].includes(mention.outlet),
);

export function Press() {
  return (
    <Section id="press">
      <Reveal>
        <SectionHeader title="Press & Citations" eyebrow="Media Log" className="mb-16" />
      </Reveal>
      <div className="grid grid-cols-1 gap-px border border-foreground/20 bg-foreground/20 md:grid-cols-2 lg:grid-cols-3">
        {homepagePress.map((mention, index) => (
          <Reveal key={mention.link} index={index}>
            <a
              href={mention.link}
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
                {mention.year}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
