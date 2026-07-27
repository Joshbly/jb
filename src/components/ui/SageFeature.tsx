import Link from "next/link";
import { SageLoop } from "@/components/methodology/SageLoop";
import { Reveal } from "@/components/shared/Reveal";
import { DisplayH2, Section } from "@/components/shared/Section";
import { sageLessonUrl } from "@/content/methodology";

export function SageFeature() {
  return (
    <Section id="sage" layout="split">
      <Reveal>
        <div className="lg:sticky lg:top-32">
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-foreground/55">
            SAGE for AEO
          </p>
          <DisplayH2 className="mb-6">SAGE helps a team decide what to do next.</DisplayH2>
          <p className="mb-8 max-w-md font-body text-lg leading-relaxed text-foreground/80">
            It organizes AEO work into four stages. A team starts by identifying the output it
            cannot trust or does not yet have, then works in the stage responsible for producing it.
          </p>
          <div className="flex flex-col items-start gap-4 font-mono text-xs uppercase tracking-widest">
            <Link
              href="/research/sage-aeo-method"
              className="underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent"
            >
              Read SAGE for AEO →
            </Link>
            <a
              href={sageLessonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-accent"
            >
              Watch Profound 101 ↗
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <SageLoop />
      </Reveal>
    </Section>
  );
}
