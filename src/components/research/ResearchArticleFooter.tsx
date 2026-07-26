import Link from "next/link";
import { SectionHeader } from "@/components/shared/Section";
import type { ResearchArticle } from "@/content/research";
import { site } from "@/content/site";

type ResearchArticleFooterProps = {
  study: ResearchArticle;
  relatedStudies: readonly ResearchArticle[];
};

export function ResearchArticleFooter({ study, relatedStudies }: ResearchArticleFooterProps) {
  return (
    <>
      <section className="border-t border-foreground/20 pt-8">
        <div className="grid gap-6 sm:grid-cols-[9rem_1fr] sm:gap-8">
          <h2 className="font-mono text-xs uppercase tracking-widest text-accent">
            Original research
          </h2>
          <div>
            <ol className="space-y-4">
              {study.sources.map((source, sourceIndex) => (
                <li key={source.url} className="flex gap-4">
                  <span className="font-mono text-xs text-accent">{sourceIndex + 1}.</span>
                  <div>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-base underline decoration-1 underline-offset-4 hover:text-accent"
                    >
                      {source.name}
                    </a>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-foreground/50">
                      {source.publisher}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-7 font-body text-sm text-foreground/65">
              Questions about the research?{" "}
              <a
                href={`mailto:${site.email}`}
                className="underline decoration-1 underline-offset-4 hover:text-accent"
              >
                Email Josh.
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="pt-16">
        <SectionHeader
          title="Related research"
          eyebrow="Ref. List 04"
          className="mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
        />
        <div className="divide-y divide-foreground/20 border-y border-foreground/20">
          {relatedStudies.map((relatedStudy) => (
            <Link
              key={relatedStudy.slug}
              href={`/research/${relatedStudy.slug}`}
              className="group grid gap-2 py-6 md:grid-cols-[9rem_1fr_auto] md:items-baseline md:gap-6"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-foreground/50">
                {relatedStudy.date}
              </span>
              <span className="font-display text-xl font-bold leading-snug group-hover:underline">
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
