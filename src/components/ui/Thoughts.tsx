import Link from "next/link";

const latestThoughts = [
  {
    date: "2025.11.24",
    title: "What We Don't Say at Conferences",
    excerpt:
      "I had dinner with a Director of Search last week. Halfway through our second glass of wine, she asked me something nobody asks in public...",
    slug: "what-we-dont-say-at-conferences",
  },
];

export function Thoughts() {
  return (
    <section
      id="thoughts"
      className="py-32 border-b-2 border-foreground bg-background relative"
    >
      {/* Vertical line decor */}
      <div className="absolute top-0 bottom-0 left-12 md:left-24 w-px bg-foreground/20 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_2fr] gap-12">
        <div className="md:text-right md:pr-12 pt-2" data-reveal="idle">
          <h2 className="text-xl font-mono font-bold uppercase tracking-widest text-foreground sticky top-32">
            Thoughts <br />
            <span className="opacity-40 font-normal text-xs normal-case mt-2 block">
              / updated regularly
            </span>
          </h2>
        </div>

        <div className="space-y-16 max-w-2xl">
          {latestThoughts.map((post, index) => (
            <article
              key={post.slug}
              className="group cursor-pointer"
              data-reveal="idle"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <Link href={`/blog/${post.slug}`} className="block space-y-4">
                <div className="flex items-center gap-4 font-mono text-xs text-accent/80 uppercase tracking-wide">
                  <span>{post.date}</span>
                  <span className="h-px w-8 bg-accent/30" />
                </div>

                <h3 className="text-3xl font-display font-medium text-foreground group-hover:underline decoration-2 underline-offset-4 transition-all">
                  {post.title}
                </h3>

                <p className="text-lg text-foreground/70 leading-relaxed font-body">
                  {post.excerpt}
                </p>

                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-foreground mt-4 group-hover:translate-x-2 transition-transform">
                  Read Entry <span>→</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
