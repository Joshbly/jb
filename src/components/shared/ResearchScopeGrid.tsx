const researchScope = [
  { value: "10B+", label: "AI citations" },
  { value: "1.5B", label: "Real user prompts" },
  { value: "1B+", label: "AI fanouts and web research results" },
  { value: "8", label: "Answer engines" },
] as const;

export function ResearchScopeGrid() {
  return (
    <dl className="grid grid-cols-2 gap-px border border-foreground/20 bg-foreground/20 md:grid-cols-4">
      {researchScope.map((metric) => (
        <div key={metric.label} className="bg-background p-5 md:p-6">
          <dd className="font-display text-4xl font-medium leading-none">{metric.value}</dd>
          <dt className="mt-3 max-w-44 font-mono text-xs uppercase leading-relaxed tracking-wider text-foreground/55">
            {metric.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}
