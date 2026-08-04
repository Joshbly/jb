# joshblyskal.com

Personal site for Josh Blyskal. Editorial typography, screenplay-styled long form, and a single homepage.

## Stack

- Next.js 16 (App Router, React Compiler enabled)
- React 19
- Tailwind v4
- Biome 2 (lint + format)
- TypeScript strict

## Develop

```bash
bun install
bun dev
```

Then open http://localhost:3000.

## Scripts

- `bun dev` — start the dev server
- `bun run build` — production build
- `bun run start` — serve the production build
- `bun run check` — Biome lint + `tsc --noEmit`
- `bun run lint:fix` — auto-fix lint issues
- `bun run format` — format with Biome

## Layout

```
src/
  app/                 Next.js routes (home, /blog/[slug], /smooth, /smooth/[episode])
  components/
    layout/            Header, Footer
    shared/            Reveal + Section primitives
    smooth/            Screenplay renderer + episode navigation
    ui/                Homepage sections (Hero, Thoughts, Speaking, Writing, Press, Now)
  content/             Typed content: articles, press, talks, posts, site config
  lib/                 Episode loader, SEO JSON-LD, time helpers
content/smooth/        Episode markdown with YAML frontmatter
public/                Images and static assets
```

## Content

Blog posts live as TSX files under `src/content/posts/` so they can use real React for layout-rich essays.

Screenplay episodes live as markdown under `content/smooth/` with YAML frontmatter:

```markdown
---
number: 1
title: The Danger Zone
preview: Short one-line teaser shown on the episode index.
---

*FADE IN:*

...
```

The renderer interprets standard screenplay conventions: bold uppercase ending in `:` is a character cue, italic blocks on their own line are scene direction, `---` is a scene break.

## Screenshots and visual review

Use a production build for final screenshots. The development server adds a Next.js badge and may render transient compilation states.

### Start a clean local build

```bash
bun run build
bun run start --port 3001
```

Keep that terminal open. If port `3001` is occupied, choose another port and use it in the screenshot URLs below. In a second terminal, create an ignored output directory:

```bash
mkdir -p .next/visual-review
```

`.next/visual-review/` is temporary and should not be committed. A subsequent build deletes it, so build before capturing screenshots.

### Capture desktop and mobile views

Playwright can use the locally installed Chrome without adding a project dependency:

```bash
bunx playwright screenshot \
  --channel chrome \
  --viewport-size "1600,1000" \
  --color-scheme light \
  --wait-for-timeout 1000 \
  http://localhost:3001/research/findings \
  .next/visual-review/findings-desktop-1600.png
```

```bash
bunx playwright screenshot \
  --channel chrome \
  --viewport-size "390,844" \
  --color-scheme light \
  --wait-for-timeout 1000 \
  http://localhost:3001/research/findings \
  .next/visual-review/findings-mobile-390.png
```

Add `--full-page` for a complete page capture. Long research pages produce extremely tall images, so also take section-level screenshots that remain readable when zoomed.

If Chrome is unavailable, run `bunx playwright install chromium`, remove `--channel chrome`, and repeat the command.

### Capture a section or table

Chrome DevTools is the quickest way to get a high-resolution crop:

1. Open the local page in Chrome and open DevTools.
2. In **Elements**, select the section, table wrapper, or other node.
3. Right-click the selected node and choose **Capture node screenshot**.
4. Save it in `.next/visual-review/` with the route and section in the filename.

For a table-heavy page, capture every table separately. A full-page screenshot is useful for overall rhythm but is too small for checking dense cells.

### Required viewport checks

Review at least:

- `1600 × 1000` — wide desktop and complete table columns
- `1280 × 800` — typical laptop
- `768 × 1024` — tablet transition
- `390 × 844` — mobile wrapping and horizontal table scrolling

At each width, inspect the opening, the densest content section, and the bottom of the page. Check:

- Navigation, headings, bylines, and section spacing
- Font loading, line length, widows, and clipped text
- Table headers, row boundaries, values, samples, and source links
- Long URLs, code blocks, and labels that may force page overflow
- Images, charts, borders, contrast, hover states, and keyboard focus
- Browser console errors and failed requests

For tables specifically:

- Desktop tables should fit their intended container.
- Mobile tables may scroll horizontally, but the document itself must not.
- Scroll each mobile table to its final column.
- Confirm the scroll instruction appears where the table is wider than its container.
- Source links and arrows should stay together rather than wrapping onto stray lines.

### Check horizontal overflow

At the target viewport, run this in the browser console:

```js
const viewportWidth = document.documentElement.clientWidth;

({
  viewportWidth,
  documentWidth: document.documentElement.scrollWidth,
  bodyWidth: document.body.scrollWidth,
  hasPageOverflow:
    Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) > viewportWidth,
});
```

`hasPageOverflow` should be `false`. A deliberately scrollable table does not count as page overflow.

Audit every table wrapper with:

```js
[...document.querySelectorAll("table")].map((tableElement, tableIndex) => {
  const scrollContainer = tableElement.parentElement;

  return {
    table: tableIndex + 1,
    tableWidth: tableElement.scrollWidth,
    containerWidth: scrollContainer.clientWidth,
    containerScrollWidth: scrollContainer.scrollWidth,
    overflowX: getComputedStyle(scrollContainer).overflowX,
  };
});
```

On mobile, a wide table should have `containerScrollWidth` greater than `containerWidth` and `overflowX: "auto"`.

### Final review

Open the screenshots in Cursor or Preview at 100%, then zoom to 200% for table text and borders. Compare desktop and mobile captures side by side, fix visual defects, rebuild, and recapture the affected views.

Before handing off:

```bash
bun run check
bun run build
```

Stop the local production server with `Ctrl-C`.
