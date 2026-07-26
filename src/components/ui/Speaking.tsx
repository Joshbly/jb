import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { Section, SectionHeader } from "@/components/shared/Section";
import { talks } from "@/content/talks";

const TALK_LINKS = [
  { key: "research", label: "Read Research" },
  { key: "link", label: "View Slides" },
  { key: "video", label: "Watch Recording" },
] as const;

const homepageConferences = ["MozCon", "TechSEO Connect", "BrightonSEO", "Spotlight AR"];

const homepageTalks = talks.filter(
  (talk) =>
    homepageConferences.includes(talk.conference) ||
    (talk.conference === "Zero Click" && talk.location === "San Francisco, CA, USA"),
);

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
        {homepageTalks.map((talk, index) => (
          <Reveal
            as="article"
            key={`${talk.conference}-${talk.location}-${talk.year}-${talk.title}`}
            index={index}
            className="h-full border-t border-foreground/20 py-8"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="font-mono text-xs uppercase tracking-wider">
                <span className="font-bold">{talk.conference}</span>
                <span className="mt-1 block text-foreground/50">{talk.location}</span>
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-foreground/40">
                {talk.year}
              </span>
            </div>

            <h3 className="mt-4 max-w-xl font-display text-2xl font-semibold leading-snug">
              {talk.title}
            </h3>
            <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-foreground/70">
              {talk.description}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-widest">
              {TALK_LINKS.map(({ key, label }) => {
                const talkLink = talk[key];

                return talkLink ? (
                  <Link
                    key={key}
                    href={talkLink}
                    target={talkLink.startsWith("/") ? undefined : "_blank"}
                    rel={talkLink.startsWith("/") ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-2 text-foreground/60 transition-colors hover:text-accent"
                  >
                    <span>{label}</span>
                    <span aria-hidden="true">{talkLink.startsWith("/") ? "→" : "↗"}</span>
                  </Link>
                ) : null;
              })}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
