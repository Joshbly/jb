import { WhatWeDontSay } from "@/components/blog/WhatWeDontSay";

// Only one post for now, but structured for future additions
const blogPosts = {
  "what-we-dont-say-at-conferences": {
    title: "What We Don't Say at Conferences",
    component: WhatWeDontSay,
    date: "2025-11-24",
    readTime: "6 min"
  }
};

// Correctly type the Page props for Next.js 15+
// Params are now a Promise in newer Next.js versions, but let's handle both
type PageProps = {
  params: Promise<{ slug: string }>;
};

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
