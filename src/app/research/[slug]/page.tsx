import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { SubpageNav } from "@/components/layout/SubpageNav";
import { ResearchArticleFooter } from "@/components/research/ResearchArticleFooter";
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
    <div className="min-h-screen bg-background">
      <main>
        <header className="px-6 pt-6">
          <div className="mx-auto max-w-4xl">
            <SubpageNav activeHref="/research" />
          </div>
        </header>

        <article className="py-20 md:py-24">
          <script
            type="application/ld+json"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires inline serialization, and study metadata is static
            dangerouslySetInnerHTML={{ __html: JSON.stringify(researchArticleJsonLd(study)) }}
          />
          <div className="mx-auto max-w-4xl px-6">
            <header className="mb-20 border-b-2 border-foreground pb-10">
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <Link
                  href="/research"
                  className="font-mono text-xs uppercase tracking-widest transition-colors hover:text-accent"
                >
                  ← Research
                </Link>
                <div className="flex flex-col font-mono text-xs uppercase tracking-widest text-foreground/50 sm:items-end">
                  <span>
                    {formatDate(study.date)} · {study.readTime} read
                  </span>
                  <span className="mt-1">
                    By {study.authors.map((author) => author.name).join(" & ")}
                  </span>
                </div>
              </div>
              <h1 className="max-w-3xl font-display text-4xl font-normal italic leading-tight text-foreground md:text-6xl">
                {study.title}
              </h1>
              <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-foreground/80 md:text-xl">
                {study.finding}
              </p>
            </header>
            <div className="space-y-24">
              <Body />
              <ResearchArticleFooter study={study} relatedStudies={relatedStudies} />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
