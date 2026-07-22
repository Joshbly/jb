import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Signature } from "@/components/ui/Signature";
import { postBySlug, posts } from "@/content/posts";
import { site } from "@/content/site";
import { formatDate } from "@/lib/time";

export const dynamicParams = false;

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug[slug];
  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [site.name],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = postBySlug[slug];
  if (!post) {
    notFound();
  }
  const Body = post.Body;

  return (
    <article className="min-h-screen bg-background py-32">
      <div className="max-w-3xl mx-auto px-6">
        <header className="mb-16 border-b-2 border-foreground pb-8">
          <div className="flex items-baseline justify-between mb-4">
            <Link
              href="/"
              className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors"
            >
              ← {site.name}
            </Link>
            <div className="flex flex-col items-end font-mono text-xs uppercase tracking-widest text-foreground/50">
              <span>
                {formatDate(post.date)} · {post.readTime} read
              </span>
              <span className="mt-1">By {site.name}</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-normal italic text-foreground leading-tight">
            {post.title}
          </h1>
        </header>
        <Body />

        <div className="mt-24 pt-8 border-t-2 border-foreground/20 flex justify-between items-end">
          <Signature />
        </div>
      </div>
    </article>
  );
}
