import { site } from "./site";

export function Bio() {
  return (
    <div className="space-y-6 text-lg font-body leading-relaxed text-foreground/90">
      <p>
        {site.name} is a leading expert at the intersection of AI and search marketing. Currently{" "}
        <strong className="font-semibold text-accent">Leading {site.tagline}</strong> at{" "}
        <a
          href={site.employer.url}
          className="hover:text-accent hover:underline decoration-1 underline-offset-4 transition-colors"
        >
          {site.employer.name}
        </a>
        , he guides Fortune 500 companies like Ramp, Indeed, and US Bank on securing visibility in
        AI Answer Engines.
      </p>
      <p>
        Previously at <strong className="font-semibold">HubSpot</strong>, Josh co-founded the
        Marketing AI practice and built the AI Search Grader tool. His background blends technology,
        marketing, and entrepreneurship—from founding a streetwear brand in college to engineering
        AI automations that reached millions.
      </p>
      <p>
        Based in {site.location}, he is a recognized thought leader frequently sharing data-driven
        insights on how AI is rewriting the rules of SEO and digital discovery.
      </p>
    </div>
  );
}
