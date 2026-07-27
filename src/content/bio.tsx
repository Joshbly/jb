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
        , where he works on making brands visible in AI search and to the agents that use it.
      </p>
      <p>
        At Profound, he contributed to AEO programs for teams at Ramp, Indeed, U.S. Bank, Kaplan,
        Reddit, G2, MongoDB, Kalshi, Figma, Hatch, Eight Sleep, and Golin. His research and
        commentary have appeared in The Verge, Adweek, AdAge, Search Engine Land, BCG, and Business
        of Fashion.
      </p>
      <p>
        Before Profound, he co-founded <strong className="font-semibold">HubSpot</strong>&apos;s
        Marketing AI practice and built the AI Search Grader, used by more than 100,000 marketers.
        He is based in {site.location}.
      </p>
    </div>
  );
}
