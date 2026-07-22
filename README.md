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
