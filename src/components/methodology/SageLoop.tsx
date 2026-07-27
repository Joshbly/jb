import { sagePhases } from "@/content/methodology";

export function SageLoop() {
  return (
    <figure aria-labelledby="sage-loop-title" className="border-y border-foreground/20 py-8">
      <figcaption id="sage-loop-title" className="mb-8">
        <span className="block font-display text-2xl font-medium">How the stages fit together</span>
        <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-foreground/65">
          Each stage produces a practical output. The diagnostic beneath it describes the situation
          in which that stage becomes useful.
        </p>
      </figcaption>

      <ol className="grid border-t border-l border-foreground/20 sm:grid-cols-2 lg:grid-cols-4">
        {sagePhases.map((phase, phaseIndex) => (
          <li key={phase.name} className="flex flex-col border-r border-b border-foreground/20 p-5">
            <div className="flex items-start justify-between gap-4">
              <span className="font-display text-4xl font-normal italic leading-none text-accent">
                {phase.name.at(0)}
              </span>
              <span className="font-mono text-xs text-foreground/40">0{phaseIndex + 1}</span>
            </div>
            <span className="mt-5 block font-display text-xl font-semibold">{phase.name}</span>
            <span className="mt-3 block font-body text-sm leading-relaxed text-foreground/65 sm:h-20">
              {phase.output}
            </span>

            <div className="mt-5 border-t border-foreground/15 pt-4">
              <span className="whitespace-nowrap font-mono text-xs uppercase tracking-wide text-foreground/45">
                {phase.name} time
              </span>
              <p className="mt-2 font-body text-sm leading-relaxed text-foreground/75">
                {phase.diagnostic}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-5 max-w-2xl font-body text-sm leading-relaxed text-foreground/65">
        Teams usually return to SAGE each week. They identify the output that is missing or
        unreliable, work in that stage, and move again when the situation changes.
      </p>
    </figure>
  );
}
