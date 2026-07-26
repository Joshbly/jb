import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { Section, SectionHeader } from "@/components/shared/Section";
import { articles } from "@/content/articles";

export function Writing() {
  return (
    <Section id="writing" layout="narrow">
      <Reveal>
        <SectionHeader title="Selected Writing" eyebrow="Ref. List 02" className="mb-16" />
      </Reveal>
      <div className="space-y-8">
        {articles.map((post, i) => (
          <Reveal key={post.link} index={i}>
            <Link
              href={post.link}
              target={post.link.startsWith("/") ? undefined : "_blank"}
              rel={post.link.startsWith("/") ? undefined : "noopener noreferrer"}
              className="group grid grid-cols-[1fr_auto] md:grid-cols-[100px_1fr_auto] gap-4 md:gap-8 items-baseline hover:bg-foreground/5 p-4 -mx-4 rounded-sm transition-colors"
            >
              <div className="hidden md:block font-mono text-xs text-foreground/50 text-right uppercase tracking-wider">
                {post.year}
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    {post.outlet}
                  </span>
                  <h3 className="font-display text-xl font-bold leading-snug group-hover:underline decoration-1 underline-offset-4">
                    {post.title}
                  </h3>
                </div>
                <p className="font-body text-sm text-foreground/70 max-w-xl leading-relaxed">
                  {post.description}
                </p>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest border border-foreground/20 px-2 py-0.5 rounded-full opacity-50 group-hover:opacity-100 group-hover:border-accent group-hover:text-accent transition-all">
                {post.tag}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
