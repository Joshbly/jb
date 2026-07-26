import Link from "next/link";
import type { ResearchArticle } from "@/content/research";

type ResearchArticleFooterProps = {
  study: ResearchArticle;
  relatedStudies: readonly ResearchArticle[];
};

const methodologyFields = [
  { key: "dataSource", label: "Data source" },
  { key: "sampleSize", label: "Sample size" },
  { key: "period", label: "Study period" },
  { key: "approach", label: "Analysis approach" },
] as const;

export function ResearchArticleFooter({ study, relatedStudies }: ResearchArticleFooterProps) {
  return (
    <>
      <section id="methodology" className="scroll-mt-12 border-t-2 border-foreground pt-12">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-3xl font-normal italic md:text-[2rem]">Methodology</h2>
          <Link
            href="/research/methodology"
            className="font-mono text-[10px] uppercase tracking-widest text-accent hover:underline"
          >
            Read the full methodology record →
          </Link>
        </div>
        <dl className="divide-y divide-foreground/20 border-y border-foreground/20">
          {methodologyFields.map(({ key, label }) => (
            <div key={key} className="grid gap-2 py-5 md:grid-cols-[9rem_1fr] md:gap-8">
              <dt className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                {label}
              </dt>
              <dd className="font-body text-base leading-relaxed text-foreground/80">
                {study.methodology[key]}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 border-l-4 border-accent bg-foreground/5 p-5">
          <p className="font-mono text-[10px] uppercase tracking-widest text-accent">Limits</p>
          <p className="mt-2 font-body text-base leading-relaxed text-foreground/75">
            {study.methodology.limitations}
          </p>
        </div>
      </section>

      <section className="border-t border-foreground/20 pt-10">
        <h2 className="font-display text-xl font-normal italic md:text-2xl">Primary sources</h2>
        <ol className="mt-5 space-y-4">
          {study.sources.map((source, sourceIndex) => (
            <li key={source.url} className="flex gap-4">
              <span className="font-mono text-xs text-accent">{sourceIndex + 1}.</span>
              <div>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-base underline decoration-1 underline-offset-4 hover:text-accent md:text-[1.0625rem]"
                >
                  {source.name}
                </a>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-foreground/50">
                  {source.publisher}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t-2 border-foreground pt-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
              Continue the series
            </p>
            <h2 className="mt-2 font-display text-2xl font-normal italic md:text-[1.75rem]">
              Related research
            </h2>
          </div>
          <Link
            href="/about"
            className="font-mono text-[10px] uppercase tracking-widest hover:text-accent"
          >
            About the researcher →
          </Link>
        </div>
        <div className="mt-8 divide-y divide-foreground/20 border-y border-foreground/20">
          {relatedStudies.map((relatedStudy) => (
            <Link
              key={relatedStudy.slug}
              href={`/research/${relatedStudy.slug}`}
              className="group grid gap-2 py-5 md:grid-cols-[9rem_1fr_auto] md:items-baseline md:gap-6"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-foreground/45">
                {relatedStudy.date}
              </span>
              <span className="font-display text-lg font-semibold group-hover:underline">
                {relatedStudy.title}
              </span>
              <span className="font-mono text-xs text-accent transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
