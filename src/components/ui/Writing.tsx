import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { Section, SectionHeader } from "@/components/shared/Section";
import { articles } from "@/content/articles";

export function Writing() {
  return (
    <Section id="writing">
      <Reveal>
        <SectionHeader
          title="Selected writing"
          eyebrow="Ref. List 02"
          className="mb-8 [&>h2]:text-3xl sm:[&>h2]:text-4xl"
        />
      </Reveal>
      <div className="grid md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
        {articles.map((post, index) => {
          const isExternal = !post.link.startsWith("/");

          return (
            <Reveal key={post.link} index={index} className="h-full">
              <Link
                href={post.link}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group block h-full border-t border-foreground/20 py-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-accent">
                      {post.outlet}
                    </span>
                    <span
                      className={`font-mono text-xs uppercase tracking-wider ${
                        isExternal ? "text-foreground/45" : "text-accent"
                      }`}
                    >
                      {isExternal ? "External ↗" : "On this site"}
                    </span>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider text-foreground/40">
                    {post.year}
                  </span>
                </div>
                <h3 className="mt-4 max-w-xl font-display text-2xl font-semibold leading-snug decoration-1 underline-offset-4 group-hover:underline">
                  {post.title}
                </h3>
                <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-foreground/70">
                  {post.description}
                </p>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
