import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { DisplayH2, Section } from "@/components/shared/Section";

export function Thesis() {
  return (
    <Section id="thesis" layout="split">
      <Reveal>
        <div className="lg:sticky lg:top-32">
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-foreground/55">
            How I approach the work
          </p>
          <DisplayH2>
            I want a brand to be easy for an answer engine or agent to find, understand, and
            recommend.
          </DisplayH2>
        </div>
      </Reveal>

      <Reveal>
        <div className="max-w-2xl space-y-6 font-body text-lg leading-relaxed text-foreground/85 md:text-xl">
          <p>
            When somebody asks what to buy, who to trust, or how to solve a problem, answer engines
            like ChatGPT, Gemini, and Claude have to find information they can use about the
            relevant brands. If a brand is missing from that process, it is missing from the answer.
          </p>
          <p>
            I look at what customers ask, what the engines search, and which websites, product
            information, and public sources shape the recommendation. Then I work to fix whichever
            part is missing, whether that is product data, a page on the brand site, or credible
            third-party coverage.
          </p>
          <Link
            href="/research/250-million-ai-search-results"
            className="inline-block font-mono text-xs uppercase tracking-widest underline decoration-accent/50 underline-offset-4 transition-colors hover:text-accent"
          >
            Read the 250 million response study →
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
