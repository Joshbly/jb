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
        {articles.map((post, index) => {
          const isExternal = !post.link.startsWith("/");

          return (
            <Reveal key={post.link} index={index}>
              <Link
                href={post.link}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group -mx-4 grid items-baseline gap-4 rounded-sm p-4 transition-colors hover:bg-foreground/5 md:grid-cols-[100px_1fr] md:gap-8"
              >
                <div className="hidden text-right font-mono text-xs uppercase tracking-wider text-foreground/50 md:block">
                  {post.year}
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-accent">
                      {post.outlet}
                    </span>
                    <span
                      className={`rounded-full border px-2 py-0.5 font-mono text-xs uppercase tracking-wider ${
                        isExternal
                          ? "border-foreground/20 text-foreground/55"
                          : "border-accent/40 text-accent"
                      }`}
                    >
                      {isExternal ? (
                        <>
                          External <span aria-hidden="true">↗</span>
                        </>
                      ) : (
                        "On this site"
                      )}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold leading-snug decoration-1 underline-offset-4 group-hover:underline">
                    {post.title}
                  </h3>
                  <p className="max-w-xl font-body text-sm leading-relaxed text-foreground/70">
                    {post.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
