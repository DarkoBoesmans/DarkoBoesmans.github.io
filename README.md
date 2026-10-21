# Darko Boesmans · Portfolio

Personal portfolio of Darko Boesmans, design engineer and front-end developer from Belgium.

**Live:** https://darkoboesmans.github.io

A static site built with **Astro**, **TypeScript** and **SCSS**. No UI framework at runtime, no tracking, no cookies and no third-party requests: fonts and icons are bundled at build time. The whole site ships at roughly 600 kB, fonts included.

## Highlights

- **Two languages.** English and Belgian Dutch, with a language gate on `/` that respects a saved choice.
- **Light and dark theme.** Follows the system setting, remembers a manual pick, no flash on load.
- **Accessible by default.** Skip link, one `h1` per page, visible focus, 44 px tap targets, `prefers-reduced-motion` respected.
- **Privacy first.** The contact form opens the visitor's own mail app; nothing is stored or sent by the site.

## Getting started

Requires [Bun](https://bun.sh) (or Node 20+ with npm).

```bash
bun install
bun run dev       # http://localhost:4321
bun run build     # type-check, then build to dist/
bun run preview   # serve the production build
```

## Project structure

```
.github/workflows/   deploy.yml: build with Bun, publish to GitHub Pages
docs/                compliance.md: legal and accessibility checklist
public/              favicons, images, robots.txt (copied as-is)
src/
  components/        one .astro file per section (Hero, About, Work, Contact, …)
  data/              media.ts: project tags and screenshot paths
  i18n/              en.ts, nl.ts: every visible string, one file per language
  layouts/           Base (HTML shell), Legal (Markdown pages)
  legal/             en/*.md, nl/*.md: privacy, cookies, terms, legal notice
  pages/             routes: language gate, /[lang]/, /[lang]/[page]/, 404
  scripts/           one .ts file per behaviour, started from main.ts
  styles/            SCSS in ITCSS layers (see below)
```

## CSS architecture

Styles follow **[ITCSS](https://benmarshall.me/itcss/)** layers, imported in order from `src/styles/main.scss`, and class names follow **[BEM](https://css-tricks.com/bem-101/)** with a layer prefix.

| Layer | Folder | Prefix | Contains |
| --- | --- | --- | --- |
| Settings | `settings/` | | design tokens: 5 colours, 2 fonts, breakpoints, easing |
| Tools | `tools/` | | mixins only, no CSS output |
| Generic | `generic/` | | reset |
| Elements | `elements/` | | bare HTML elements |
| Objects | `objects/` | `o-` | layout without looks (container, golden-ratio split) |
| Components | `components/` | `c-` | one file per UI component |
| Utilities | `utilities/` | `u-` | single-purpose helpers |

Example: `.c-hero__portrait`, `.c-button--primary`, `.o-split--narrow-first`.

## Common edits

- **Copy:** `src/i18n/en.ts` and `src/i18n/nl.ts`.
- **Project screenshot:** add the file to `public/images/work/` and set `image` in `src/data/media.ts`.
- **Colours or fonts:** `src/styles/settings/_tokens.scss`.

## Deployment

Every push to `main` builds and deploys through GitHub Actions. In the repository settings, **Pages → Source** must be set to **GitHub Actions**.

## License

© Darko Boesmans. All rights reserved. Fonts (SIL OFL 1.1) and Lucide icons (ISC) keep their own licenses.
