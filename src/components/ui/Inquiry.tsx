import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";
import { DisplayH2, Section } from "@/components/shared/Section";
import { site } from "@/content/site";

export function Inquiry({ showStagePhoto = false }: { showStagePhoto?: boolean }) {
  return (
    <Section id="inquiries" layout="split">
      <Reveal>
        <div>
          <DisplayH2>If you want to talk, I&apos;m easy to reach.</DisplayH2>
          {showStagePhoto ? (
            <figure className="group mt-10 max-w-sm">
              <div className="relative aspect-4/5 overflow-hidden border border-foreground bg-black">
                <Image
                  src={site.stagePhoto.src}
                  alt={site.stagePhoto.alt}
                  fill
                  sizes="(min-width: 1024px) 24rem, 100vw"
                  className="object-cover grayscale transition-all duration-slow group-hover:grayscale-0"
                />
              </div>
              <figcaption className="mt-3 font-mono text-xs uppercase tracking-wider text-foreground/50">
                On stage at Zero Click
              </figcaption>
            </figure>
          ) : null}
        </div>
      </Reveal>
      <Reveal>
        <div className="max-w-2xl">
          <p className="font-body text-lg leading-relaxed text-foreground/80 md:text-xl">
            For conference bookings, research collaboration, or commentary on AI search, email me
            directly.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-block font-display text-3xl italic underline decoration-accent/50 underline-offset-8 transition-colors hover:text-accent md:text-4xl"
          >
            {site.email}
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
