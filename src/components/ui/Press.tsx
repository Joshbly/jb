import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";
import { Section, SectionHeader } from "@/components/shared/Section";
import { press } from "@/content/press";

export function Press() {
  return (
    <Section id="press">
      <Reveal>
        <SectionHeader title="Press & Citations" eyebrow="Media Log" className="mb-16" />
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/20 border border-foreground/20">
        {press.map((item, i) => (
          <Reveal key={item.link} index={i}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background p-8 hover:bg-foreground/5 transition-colors relative flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4 w-full">
                <Image
                  src={`https://www.google.com/s2/favicons?domain=${item.domain}&sz=64`}
                  alt={`${item.outlet} logo`}
                  width={26}
                  height={26}
                  unoptimized
                  className="h-6.5 w-6.5 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                />
                <span className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
                  ↗
                </span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">
                {item.outlet}
              </span>
              <h3 className="font-display text-xl font-medium leading-snug group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 mt-auto pt-6">
                {item.year}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
