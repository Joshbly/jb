import { Reveal } from "@/components/shared/Reveal";
import { DisplayH2, Section } from "@/components/shared/Section";
import { site } from "@/content/site";

export function Inquiry() {
  return (
    <Section id="inquiries" layout="split">
      <Reveal>
        <div>
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-foreground/55">
            Get in touch
          </p>
          <DisplayH2>If you want to talk about the research, I&apos;m easy to reach.</DisplayH2>
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
