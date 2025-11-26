import { WhatWeDontSay } from "@/components/blog/WhatWeDontSay";
import { Metadata } from "next";

// Only one post for now, but structured for future additions
const blogPosts = {
  "what-we-dont-say-at-conferences": {
    title: "What We Don't Say at Conferences",
    component: WhatWeDontSay,
    date: "2025-11-24",
    readTime: "6 min",
    description: "Is marketing as we know it done? We're witnessing the end of the website as the atomic unit of the internet. The only marketing that works now is marketing that isn't trying to be marketing.",
    image: "/images/liminal-mall.png"
  }
};

// Correctly type the Page props for Next.js 15+
// Params are now a Promise in newer Next.js versions, but let's handle both
type PageProps = {
  params: Promise<{ slug: string }>;
};

// Generate Metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Josh Blyskal`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Josh Blyskal"],
      images: [
        {
          url: post.image, // Uses the mall image
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image], // Uses the mall image
    },
  };
}

export default async function Page({ params }: PageProps) {
  // Await the params object
  const { slug } = await params;
  
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return <div className="py-32 text-center font-mono">Post not found.</div>;
  }

  const Content = post.component;

  return (
    <article className="min-h-screen bg-background py-32">
      <Content />
    </article>
  );
}
