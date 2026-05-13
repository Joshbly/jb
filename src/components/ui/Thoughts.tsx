import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { Section } from "@/components/shared/Section";
import { posts } from "@/content/posts";

const dotDate = (iso: string) => iso.replaceAll("-", ".");

export function Thoughts() {
  return (
    <Section id="thoughts">
      <div
        aria-hidden="true"
        className="absolute top-0 bottom-0 left-12 md:left-24 w-px bg-foreground/20 hidden md:block"
      />
      <div className="grid md:grid-cols-[1fr_2fr] gap-12">
        <Reveal className="md:text-right md:pr-12 pt-2">
          <h2 className="text-xl font-mono font-bold uppercase tracking-widest sticky top-32">
            Thoughts <br />
            <span className="opacity-40 font-normal text-xs normal-case mt-2 block">
              / updated regularly
            </span>
          </h2>
        </Reveal>

        <div className="space-y-16 max-w-2xl">
          {posts.map((post, i) => (
            <Reveal key={post.slug} as="article" index={i} className="group cursor-pointer">
              <Link href={`/blog/${post.slug}`} className="block space-y-4">
                <div className="flex items-center gap-4 font-mono text-xs text-accent/80 uppercase tracking-wide">
                  <span>{dotDate(post.date)}</span>
                  <span className="h-px w-8 bg-accent/30" />
                </div>
                <h3 className="text-3xl font-display font-medium group-hover:underline decoration-2 underline-offset-4 transition-all">
                  {post.title}
                </h3>
                <p className="text-lg text-foreground/70 leading-relaxed font-body">
                  {post.excerpt}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest mt-4 group-hover:translate-x-2 transition-transform">
                  Read Entry <span>→</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
