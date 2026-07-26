import { site } from "./site";

export function Bio() {
  return (
    <div className="space-y-6 text-lg font-body leading-relaxed text-foreground/90">
      <p>
        {site.name} leads{" "}
        <strong className="font-semibold text-accent">AI Strategy & Research</strong> at{" "}
        <a
          href={site.employer.url}
          className="hover:text-accent hover:underline decoration-1 underline-offset-4 transition-colors"
        >
          {site.employer.name}
        </a>
        , where he studies how answer engines search, retrieve, and cite information. His research
        includes more than 10 billion citations, 1.5 billion real user prompts, and more than 1
        billion AI fanouts and web research results across eight answer engines.
      </p>
      <p>
        At Profound, he created AEO strategies for leading brands including Ramp, Indeed, U.S. Bank,
        Kaplan, Reddit, G2, MongoDB, Kalshi, Mintlify, Figma, Hatch, Eight Sleep, and Golin. His
        research and commentary have appeared in The Verge, Adweek, AdAge, Search Engine Land, BCG,
        and Business of Fashion.
      </p>
      <p>
        Before Profound, he co-founded <strong className="font-semibold">HubSpot</strong>&apos;s
        Marketing AI practice and built the AI Search Grader, used by more than 100,000 marketers.
        He is based in {site.location}.
      </p>
    </div>
  );
}
