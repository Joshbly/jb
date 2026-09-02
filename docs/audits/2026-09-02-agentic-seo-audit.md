# Agentic SEO audit: joshblyskal.com

Date: September 2, 2026  
Starting commit: `2fb0700`  
Primary objective: establish Josh Blyskal as a leading AEO, GEO, and AI-search researcher without competing blindly with Profound.

## Executive conclusions

1. The site already owned branded discovery. It did not yet own meaningful non-brand search demand.
2. The strongest proven non-home page was the sourced history of Profound's founding team. The research cluster was indexed but had almost no deep-link authority.
3. Raw Search Console reporting was materially polluted by known automated evaluation searches. Those impressions must stay outside human-demand, CTR, and cannibalization reporting.
4. Ahrefs Domain Rating was not a useful success metric. A sudden spam-link wave explained most of the apparent authority growth.
5. Exact SERPs favored large publishers, software vendors, official sources, and pages with real utility. The personal-domain opening was narrower: original evidence, inspectable methods, and authored interpretation.
6. The site needed authority distribution and precise intent packaging more than additional generic prose.

## Harness process

The audit ran as an iterative evidence loop rather than a single scoring script.

1. The repository and production site were independently inspected for routes, metadata, schema, crawl controls, content roles, internal links, rendering, and assets.
2. Google Search Console supplied page, query, country, device, sitemap, and URL Inspection evidence.
3. Repeated machine-generated evaluation queries were identified, confirmed with the site owner, quantified, and removed from human-demand analysis.
4. Ahrefs supplied backlink history, link targets, organic visibility, keyword expansion, volume, difficulty, parent topics, and traffic-potential estimates.
5. Independent reviews classified keyword intent, rejected polluted acronyms, deduplicated page families, and challenged the first TAM estimates.
6. SERPAPI captured 55 distinct New York, U.S.-English queries across 67 desktop and mobile result sets.
7. The first SERP wave tested category, comparison, visibility, tool, citation, expert, and provider terms. A second wave tested lower-volume research, method, measurement, source-selection, and fan-out hypotheses.
8. Firecrawl captured 29 representative ranking pages. Trafilatura independently extracted main content so raw navigation-heavy output was not mistaken for article structure.
9. Editorial, technical, and skeptical reviews compared the site with the extracted winners and retained disagreements where the evidence did not support causality.
10. The surviving recommendations were implemented, built, rendered, tested, and measured with repeated Lighthouse runs.

Small collectors obtained observations from APIs. Strategy, exclusions, confidence, and priority decisions remained in the review loop instead of being encoded as universal SEO rules.

## Evidence ledger

### Google Search Console

Window: November 2025 through August 30, 2026.

- Raw web performance: 346 clicks, 9,822 impressions, 3.52% CTR, average position 4.70.
- Homepage: 303 clicks.
- Profound founding-team history: 30 clicks.
- Every other URL combined: 13 clicks.
- Exact `josh blyskal` and `josh blyskal profound` searches: 232 visible clicks, approximately 17% CTR, average position around 2.7.
- At least 2,498 impressions came from confirmed automated expert-evaluation patterns and produced zero clicks.
- The raw page report overstated cannibalization because one search can create impressions for several URLs.
- Twelve of fourteen submitted URLs passed URL Inspection as indexed. Speaking and the Reddit study were live 200 pages but unknown to URL Inspection at the audit snapshot.
- The sitemap API reported fourteen submitted and zero indexed despite indexed URLs receiving traffic. URL Inspection and observed traffic were treated as the stronger evidence.

Clean reporting rule:

```text
Exclude known automated families containing:
evaluate the
aeo experts company
aeo experts josh blyskal
josh blyskal aeo experts
josh blyskal generative engine optimization experts
josh blyskal ai search experts
josh blyskal ai search optimization experts
```

The raw view remains useful for monitoring the evaluation harness. It is not a human-demand KPI.

### Ahrefs

- DR rose from 0.3 in July to 15 in August and 19 in September.
- Of 250 returned live referring domains, 222 matched obvious spam patterns.
- Twenty were dofollow and fifteen had estimated organic traffic.
- Eleven of the fifteen credible traffic-bearing links pointed to the homepage.
- Credible deep links reached the State of AEO study, Profound history, and Archive.
- No credible lost-link reclamation set appeared.
- Ahrefs reported no organic keyword set for the personal domain at the snapshot.

Decision: do not disavow routine spam or report DR as progress. Measure relevant editorial deep links.

### Keyword market

All pools use Ahrefs U.S. `volume`. They are gross monthly query occasions, not people, clicks, or revenue.

- Core research wedge: approximately 2,130–2,480.
- Aligned editorial universe: approximately 26,700.
- Expansive commercial and ambiguous adjacency: approximately 50,000–62,000.

The core wedge includes measurement, query fan-out, methods, AEO metrics and frameworks, AI-search statistics, narrow citation terms, and source-selection research.

The aligned editorial universe adds AEO/GEO definitions, comparisons, AI-search optimization, and LLM SEO. It is dominated by large publishers and vendors and is not a near-term traffic forecast.

The expansive pool includes tools, agencies, consultants, ambiguous acronyms, and broad visibility terms. It is not the personal site's TAM; most belongs to Profound or fails intent review.

Excluded or quarantined:

- Bare `AEO` and `GEO`
- Broad `AI search`
- `AI SEO`
- `LLM optimization`
- Generic `AI citations` and `ChatGPT citations`
- `Reddit AI search`
- `AI search speaker`
- Tools, agencies, independent consulting, and software comparisons

These SERPs resolved materially to unrelated acronyms, AI-assisted traditional SEO, model engineering, academic citation formatting, Reddit's own product, enterprise search, voice hardware, or commercial software intent.

### SERP snapshots

- Fifty-five distinct queries were sampled in sixty-seven result sets.
- Sixty-five of sixty-seven result sets contained an AI Overview.
- People Also Ask appeared throughout the first panel.
- `joshblyskal.com` appeared once: position eight for `chatgpt prompt intent`.
- Profound appeared repeatedly, including strong results for AEO, AI-visibility tools, query fan-out, prompt intent, citation statistics, and expert/provider queries.
- Desktop/mobile membership was generally stable, while ordering and Reddit prominence moved.

This was a point-in-time New York panel. The AI Overview count describes the panel, not the entire market.

### Winning-page extraction

- Twenty-nine ranking pages were selected across definitions, comparisons, measurement, tools, query fan-out, citation research, statistics, and expert lists.
- Twenty-eight returned usable responses.
- One PwC crawl used the wrong path and returned 404.
- Adobe and Otterly were partial extracts.
- Interactive outputs from Amplitude, Ahrefs, SE Ranking, and Otterly were not fully represented.
- BrightEdge exposed a teaser rather than the gated report.
- Raw heading and list counts were contaminated by navigation on several large sites.

Robust observations:

- Definitions answered the question early and supported claims.
- Comparisons stated a verdict and exposed decision-relevant distinctions.
- Tool queries rewarded actual tools or tested comparisons.
- Technical queries rewarded inspectable examples, methods, dates, limitations, and first-party evidence.
- Statistics pages kept scope, period, population, and sources visible.

Not established as ranking causes:

- Word count
- Question-heading count
- Short answer blocks
- Tables or FAQ quantity
- Schema volume
- "Chunking"
- `llms.txt`

Sampled winners ranged from a short interactive page to an eleven-thousand-word review.

## Decisions

### Accepted

- Preserve the homepage H1 as the person's name.
- Add an explicit homepage canonical.
- Define the referenced Research `CollectionPage` entity.
- Simplify global Person schema and keep page-specific evidence on the relevant pages.
- Use route-level `noindex` for Smooth and allow crawlers to read it.
- Replace portrait social images with a generated 1200×630 asset.
- Optimize the photo sources used by the site and remove unused multi-megabyte originals.
- Remove the homepage's eager YouTube embed.
- Qualify private research-scale claims as Profound proprietary datasets and link to public samples.
- Strengthen homepage, About, hub, footer, and study links to the authority pages.
- Publish a measurement-method reference.
- Publish a query-fan-out reference.
- Reframe SAGE around strategy, stage exit criteria, measurement, and failure modes.
- Add current Reddit follow-up evidence without pooling incompatible samples.
- Add revision dates, misquotation warnings, and a downloadable findings JSON file.
- Keep the expert ranking but demote it, disclose conflicts, and stop treating automated impressions as demand.

### Rejected

- Keyword-stuffing the homepage.
- Creating separate pages for every AEO/GEO comparison or synonym.
- Building tool, agency, or consultant pages on the personal domain.
- Adding schema types without matching visible content.
- Treating spam links as a disavow project.
- Treating Lighthouse perfection, sitemap priority, or metadata symmetry as strategy.
- Publishing content to chase polluted citation, Reddit-product, AI-search, or speaker terms.

### Deferred

- A standalone ChatGPT source-selection page, pending a cross-domain overlap review with Profound.
- A formal margin-of-error formula; the public source material does not support one.
- Dedicated comparison URLs, pending real query impressions.
- A full expert-page bibliography refactor.
- External outreach and third-party profile updates, which require owner coordination.

## Profound and personal-domain publishing rules

1. Profound remains canonical for exact corporate research and commercial software content.
2. A personal-domain edition must add authored interpretation, methods, limitations, inspectable examples, or another material difference.
3. Exact cross-posts canonicalize to Profound.
4. Distinct personal editions remain self-canonical and identify the Profound source or edition visibly.
5. Profound author pages and relevant articles should deep-link to the best distinct personal research asset, not only the homepage.
6. The personal site does not create independent consulting, agency, checker, or tool-comparison pages that conflict with the employer.

## Link-authority actions

The model to repeat is the contextual Nick Lafferty citation to the State of AEO study.

Priority opportunities:

1. Update the existing Profound expert/author link to point to the most relevant research or About page.
2. Ask Siege Media and Media Copilot to deep-link the study or speaking page discussed in their episode.
3. Add exact research URLs to Speaker Deck, YouTube, conference, and podcast descriptions.
4. Use the findings compendium as the citation destination for press and analysts.
5. Link the authored SAGE method from relevant Profound University material where editorially appropriate.

No external profile or publisher was changed during this implementation.

## Implementation record

Technical:

- Homepage canonical and root Twitter metadata
- Research CollectionPage, ItemList, and breadcrumb graph
- Slim global Person entity
- Smooth route `noindex, nofollow`; robots allows the directive to be read
- Generated 1200×630 root Open Graph image
- Optimized active hero/research photos and removal of four unused PNG originals
- Explicit social metadata on core routes
- Native Bun SEO regression tests

Content and authority:

- New AI-visibility measurement reference
- New query-fan-out reference
- Research hub registration, sitemap entries, writing archive entries, profile links, and `llms.txt` links
- AEO at-a-glance block, alias note, comparison anchors, revision date, and stronger reference links
- SAGE strategy framing, stage exit criteria, failure modes, measurement link, and illustrative-case disclosure
- Findings topic navigation, visible AI-citation language, revision date, downloadable JSON, and misquotation guidance
- Reddit product/citation distinction, later ChatGPT follow-up, update date, and additional limitations
- Curated study relationships instead of linking every study from every footer
- Correct LinkedIn identity URL
- Clear conflict disclosure on the experts page

## Verification

- `bun run check`: passing
- Bun SEO tests: ten passing
- `bun run build`: passing; thirty-five static/SSG pages generated
- Local route smoke test: one H1, self-canonical, index/follow, and JSON-LD on every sampled authority page
- Smooth: `noindex, nofollow`
- Root social image: PNG response at 1200×630
- Sitemap: sixteen unique indexable URLs; no Smooth or redirect routes
- Production baseline Firecrawl: fourteen live pages, all HTTP 200

Repeated local Lighthouse medians before the final embed optimization:

- Mobile homepage: performance 97, SEO 100, accessibility 96, LCP 2.68 seconds, CLS 0, total blocking time 0.5 milliseconds, 1.53 MB.
- Mobile Findings: performance 95, SEO 100, accessibility 96, LCP 2.91 seconds, CLS 0, effectively zero total blocking time, 416 KB.
- Desktop homepage: performance 100, SEO 100, accessibility 96, LCP 0.58 seconds, CLS 0, total blocking time 0.
- Desktop Findings: performance 100, SEO 100, accessibility 96, LCP 0.66 seconds, CLS 0, total blocking time 0.

Replacing the below-fold YouTube iframe reduced the mobile homepage transfer size from approximately 1.53 MB to 540 KB while preserving a direct watch action. The remaining accessibility deduction was a low-contrast footer role line and was corrected.

Final three-run mobile homepage median after the embed, contrast, and priority fixes: performance 96, accessibility 100, SEO 100, LCP 2.76 seconds, CLS 0, total blocking time 2.5 milliseconds, and 540 KB transferred. Lighthouse confirmed that the LCP image was discoverable, eager, and marked `fetchpriority="high"`. The remaining lab LCP is a monitoring item, not evidence of a field failure.

## Monitoring

Reinspect after deployment:

- Speaking and Reddit study index status
- New measurement and fan-out URLs
- Google-selected canonicals
- Social-image previews
- Structured-data validity

Review at 14, 28, 56, and 90 days:

- Clean exact-brand clicks, impressions, position, and CTR
- Human non-brand page-query cohorts
- Index status for the sixteen sitemap URLs
- Editorial referring domains to deep pages
- Rankings across the stable SERP panel
- AI Overview presence and citation ownership
- Speaking and research-inquiry conversions

Do not use raw DR, raw GSC impressions, aggregate CTR, or automated evaluation queries as success metrics.

## Limitations

- Search Console suppresses low-volume queries and lags current index state.
- The known automated-query filter may not capture every machine-generated variation.
- Ahrefs volumes and link classifications are estimates.
- SERPs were point-in-time, localized snapshots.
- AI Overview links were not always resolvable from the capture.
- The ranking-page corpus selected winners and had no non-ranking control group.
- Several extractions were partial or navigation-contaminated.
- No recommendation here establishes a causal ranking factor.
- The implementation has not yet accumulated post-deployment search data.

## Security and retention

The audit record excludes `.env` contents, API keys, access tokens, raw GSC rows, full SERP payloads, cookies, and Firecrawl payloads. Credentials remained outside Git. Only aggregate evidence, decisions, limitations, and reproducible query rules were retained.
