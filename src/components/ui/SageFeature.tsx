import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { DisplayH2, Section } from "@/components/shared/Section";
import { sagePhases } from "@/content/methodology";

export function SageFeature() {
  return (
    <Section id="sage" layout="split">
      <Reveal>
        <div className="lg:sticky lg:top-32">
          <DisplayH2 className="mb-6">SAGE for AEO</DisplayH2>
          <p className="mb-8 max-w-md font-body text-lg leading-relaxed text-foreground/80">
            I invented SAGE to create a system for AEO so teams always know what the next constraint
            is—and what the next highest-leverage action should be.
          </p>
          <Link
            href="/research/sage-aeo-method"
            className="font-mono text-xs uppercase tracking-widest underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent"
          >
            Read the full method →
          </Link>
        </div>
      </Reveal>

      <Reveal>
        <div className="border-y border-foreground/20 py-8">
          <ol className="grid grid-cols-2 border-t border-l border-foreground/20 sm:grid-cols-4">
            {sagePhases.map((phase, phaseIndex) => (
              <li key={phase.name} className="border-r border-b border-foreground/20 p-5">
                <span className="font-mono text-xs text-foreground/40">0{phaseIndex + 1}</span>
                <span className="mt-4 block font-display text-2xl font-medium">{phase.name}</span>
              </li>
            ))}
          </ol>

          <div className="mt-8 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-foreground/50">
              A simple example
            </p>
            <p className="mt-3 font-body text-base leading-relaxed text-foreground/75 md:text-lg">
              Imagine the team tracks 20 prompts every week and the brand suddenly stops appearing
              in ChatGPT for five of them. Instead of immediately writing a new page, open those
              five responses and see what changed: which competitors now appear, which websites
              ChatGPT used, or maybe whether it searched for a different fanout phrase. SAGE exists
              as a system to orient the best marketing teams in the world.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
