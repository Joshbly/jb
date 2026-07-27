import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { DisplayH2, Section } from "@/components/shared/Section";
import { appearances } from "@/content/media";

const featuredTalk = appearances.find(
  (appearance) => appearance.id === "2025-04-11-brightonseo-uk",
);
const videoId = featuredTalk?.recording
  ? new URL(featuredTalk.recording).searchParams.get("v")
  : null;

export function SpeakingFeature() {
  if (!(featuredTalk?.recording && videoId)) {
    return null;
  }

  return (
    <Section id="speaking" layout="split">
      <Reveal>
        <div className="lg:sticky lg:top-32">
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-foreground/55">
            Featured presentation
          </p>
          <DisplayH2 className="mb-6">{featuredTalk.title}</DisplayH2>
          <p className="mb-8 max-w-md font-body text-lg leading-relaxed text-foreground/80">
            A BrightonSEO keynote on why the same brand can appear differently across ChatGPT,
            Google AI Overviews, Perplexity, and Copilot, and what marketers can do about it.
          </p>
          <div className="flex flex-col items-start gap-4 font-mono text-xs uppercase tracking-widest">
            <a
              href={featuredTalk.recording}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent"
            >
              Watch the presentation ↗
            </a>
            <Link
              href="/speaking"
              className="underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-accent"
            >
              Speaking information →
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="aspect-video overflow-hidden border border-foreground bg-foreground">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
            title={`${featuredTalk.title}, full recording`}
            loading="lazy"
            className="size-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <p className="mt-4 font-mono text-xs uppercase tracking-widest text-foreground/55">
          brightonSEO · Brighton, United Kingdom · April 2025
        </p>
      </Reveal>
    </Section>
  );
}
