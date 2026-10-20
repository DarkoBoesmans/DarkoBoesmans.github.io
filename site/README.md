# Darko Boesmans — portfolio

Static site built with **Astro + TypeScript + SCSS** (ITCSS layers, BEM class names). No framework runtime, no tracking, no external requests at runtime.

## Run it

```bash
bun install      # or: npm install
bun run dev      # http://localhost:4321
bun run build    # type-checks, then builds to dist/
```

## Put it online (GitHub Pages)

1. Replace the contents of the `DarkoBoesmans.github.io` repo with this folder and push to `main`.
2. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push. The site appears at https://darkoboesmans.github.io.

## Where things live

```
src/
  i18n/          en.ts, nl.ts — every piece of copy, one file per language
  data/          media.ts — project tags + image paths
  legal/         en/*.md, nl/*.md — privacy, cookies, terms, legal notice
  components/    one .astro file per section (Hero, About, Work, Contact…)
  layouts/       Base (html shell), Legal (legal pages)
  pages/         index (language gate), [lang]/index, [lang]/[page], 404
  scripts/       one .ts file per behaviour (theme, scroll, reveal, work, contact, pointer)
  styles/        ITCSS: settings → tools → generic → elements → objects → components → utilities
public/          favicons, images
```

## Common edits

- **Change copy:** `src/i18n/en.ts` and `src/i18n/nl.ts`.
- **Add a screenshot:** put the file in `public/images/work/`, then set `image: '/images/work/<file>'` in `src/data/media.ts`. Same for the About photo (`aboutPhoto`).
- **Change a colour or font:** `src/styles/settings/_tokens.scss`. That file is the whole design system: 5 colours, 2 fonts.

## Language

`/` sends visitors to `/nl/` when their browser says Belgian Dutch, or when they are in the Belgian time zone without a French or German browser. Everyone else gets `/en/`. A language picked with the EN/NL toggle is remembered and always wins.

See `docs/compliance.md` for the legal and accessibility checklist.
