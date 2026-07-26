import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ResearchArticleFooter } from "@/components/research/ResearchArticleFooter";
import { Signature } from "@/components/ui/Signature";
import { researchArticles, researchBySlug } from "@/content/research";
import { site } from "@/content/site";
import { researchArticleJsonLd } from "@/lib/seo";
import { formatDate } from "@/lib/time";

export const dynamicParams = false;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return researchArticles.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = researchBySlug[slug];
  if (!study) {
    return {};
  }

  const articleUrl = `${site.url}/research/${study.slug}`;

  return {
    title: study.title,
    description: study.description,
    alternates: { canonical: articleUrl },
    authors: study.authors.map((author) => ({
      name: author.name,
      url: author.profile ? `${site.url}${author.profile}` : undefined,
    })),
    openGraph: {
      title: study.title,
      description: study.description,
      type: "article",
      url: articleUrl,
      publishedTime: study.date,
      authors: study.authors.map((author) => author.name),
      images: [{ url: study.image, width: 1200, height: 630, alt: study.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.description,
      images: [study.image],
    },
  };
}

export default async function ResearchArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const study = researchBySlug[slug];
  if (!study) {
    notFound();
  }

  const Body = study.Body;
  const relatedStudies = researchArticles.filter((candidate) => candidate.slug !== study.slug);

  return (
    <article className="min-h-screen bg-background py-16 md:py-24">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires inline serialization, and study metadata is static
        dangerouslySetInnerHTML={{ __html: JSON.stringify(researchArticleJsonLd(study)) }}
      />
      <div className="mx-auto max-w-4xl px-6">
        <header className="border-b-2 border-foreground pb-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
            <Link
              href="/research"
              className="font-mono text-xs uppercase tracking-widest hover:text-accent"
            >
              ← Research
            </Link>
            <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
              {formatDate(study.date)} · {study.readTime} read
            </span>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
            {study.question}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.5rem,4.75vw,3.25rem)] font-normal italic leading-[1.06] text-foreground">
            {study.title}
          </h1>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-wider text-foreground/55">
            {study.authors.map((author) => (
              <span key={author.name}>
                {author.name} · {author.role}
              </span>
            ))}
          </div>
        </header>

        <section className="border-b-2 border-foreground bg-foreground px-6 py-8 text-background md:px-10 md:py-10">
          <p className="font-mono text-[10px] uppercase tracking-widest text-background/55">
            The answer
          </p>
          <p className="mt-4 max-w-3xl font-display text-[clamp(1.625rem,2.75vw,2rem)] font-medium leading-[1.22]">
            {study.finding}
          </p>
        </section>

        <div className="space-y-16 py-12 md:py-16">
          <Body />
          <ResearchArticleFooter study={study} relatedStudies={relatedStudies} />
          <div className="flex items-end justify-between border-t-2 border-foreground/20 pt-8">
            <Signature />
            <Link
              href="/research"
              className="pb-4 font-mono text-[10px] uppercase tracking-widest hover:text-accent"
            >
              All research →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
