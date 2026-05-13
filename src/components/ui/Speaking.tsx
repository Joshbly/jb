import { Reveal } from "@/components/shared/Reveal";
import { DisplayH2, Section, SectionHeader } from "@/components/shared/Section";
import { speakingTopics, talks } from "@/content/talks";

const TALK_LINKS = [
  { key: "link", label: "View Slides" },
  { key: "video", label: "Watch Recording" },
] as const;

export function Speaking() {
  return (
    <Section id="speaking" layout="split">
      <Reveal className="space-y-8">
        <div className="sticky top-32">
          <DisplayH2 className="mb-6">Speaking</DisplayH2>
          <p className="text-lg font-body leading-relaxed text-foreground/80 mb-8">
            Translating complex AI and search concepts into actionable insights. From keynote stages
            to webinars, sharing data-backed strategies on AEO and the future of discovery.
          </p>
          <div className="pt-8 border-t border-foreground/20">
            <h3 className="font-mono text-xs uppercase tracking-widest mb-4 opacity-60">
              Core Topics
            </h3>
            <ul className="space-y-2 font-mono text-xs">
              {speakingTopics.map((topic) => (
                <li key={topic} className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <div>
        <Reveal>
          <SectionHeader title="Speaking Engagements" eyebrow="Ref. List 01" className="mb-8" />
        </Reveal>
        {talks.map((talk, i) => (
          <Reveal
            key={talk.title}
            index={i}
            className="group block py-8 border-b border-foreground/20 px-4 -mx-4"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 mb-2">
              <div className="flex flex-col gap-1 font-mono text-xs text-accent w-32 shrink-0 uppercase tracking-wider">
                <span className="font-bold">{talk.conference}</span>
                <span className="text-foreground/60">{talk.location}</span>
                <span className="text-[10px] opacity-50 mt-1">{talk.year}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-display font-bold mb-3">{talk.title}</h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed max-w-xl mb-4">
                  {talk.description}
                </p>
                <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
                  {TALK_LINKS.map(({ key, label }) =>
                    talk[key] ? (
                      <a
                        key={key}
                        href={talk[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2 text-foreground/60 hover:text-accent transition-colors"
                      >
                        <span>{label}</span>
                        <span className="opacity-0 group-hover/link:opacity-100 transition-opacity -translate-x-1 group-hover/link:translate-x-0">
                          →
                        </span>
                      </a>
                    ) : null,
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
