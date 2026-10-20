# Darko Boesmans — Design System

The design language of **Darko Boesmans**, a Belgian *Design Engineer & Front-End Developer*, and of his personal portfolio site at [DarkoBoesmans.github.io](https://DarkoBoesmans.github.io).

## Sources

Everything here is derived from one repository:

- **GitHub:** <https://github.com/DarkoBoesmans/DarkoBoesmans.github.io> (branch `main`) — explore it directly for more context than this system captures; it is the source of truth for tokens, content and motion.
  - `src/styles/global.css` — the five brand colours, two font families and the 13-step type scale, copied here verbatim.
  - `src/styles/reset.css` — the base reset the site ships.
  - `src/utils/animations.ts` — GSAP ScrollTrigger reveal + navbar motion, ported to CSS tokens.
  - `src/content/data.ts`, `src/content/projects/studio-redesign.mdx`, `keystatic.config.ts` — the content model and all real product copy used in the UI kit.
  - `public/favicon*.svg` — the DB monogram, in three variants (copied into `assets/`).
  - `src/content/img/profilePic.png` — the only photographic asset in the repo (copied into `assets/`).

**Important limitation.** The repository is a mid-migration Astro *scaffold*: it contains tokens, content and motion helpers, but **no page or component markup** (`src/components/`, `src/layouts/` and `src/pages/*.astro` are described in its README but not yet committed). So the components and UI kit here are not recreations of existing screens — they are built strictly from the repo's own tokens, content and motion, in the editorial layout the type scale implies. Treat layout composition as a proposal; treat colour, type, spacing, motion and copy as ground truth.

No Figma file, slide deck or additional codebase was provided.

## Products represented

One product, one surface: **the portfolio website** — a static Astro site with a home page, a work index, MDX-driven case studies, an about page and a contact page. Content is authored through Keystatic against a typed schema (`title`, `description`, `client`, `goal`, `outcome`, `challenge`, `results`, `research`, `tools`, `solution`, `link`, `reflection`).

## Content fundamentals

The writing is plain, structural and unhurried. It describes *how something is built* before *how it looks*, and it prefers a concrete mechanism over an adjective.

- **Voice:** third-person or impersonal in product copy ("The new setup separates layout, content, and motion"), first-person in reflection ("The biggest improvement is not visual polish alone…"). The reader is rarely addressed as "you"; when they are, it is in a form field or a CTA ("What are you building?").
- **Casing:** sentence case everywhere — headings, buttons, card titles. Uppercase is a *typographic* device reserved for eyebrows, labels and badges, never a writing style.
- **Sentence shape:** one clause of setup, one of consequence, joined by "so" or "which". Real examples: "The previous site mixed presentation, layout, and content too tightly, which made iteration slow." · "A clean static foundation with reusable sections, MDX-driven projects, and carefully scoped animation hooks."
- **No hype.** No "beautiful", "seamless", "cutting-edge", no exclamation marks. Outcomes are stated flatly: "A reusable component structure, faster delivery, and a stronger visual identity."
- **Honesty about state.** The repo README says the scaffold is incomplete and the legacy PHP files remain. Carry that habit: label work in progress rather than hiding it ("More case studies soon", "In progress").
- **Emoji: never.** There is not one in the source. Do not introduce any.
- **Length:** card descriptions are one sentence; leads are one or two; body paragraphs are two or three, at a 64ch measure.
- **Tools are named, not marketed:** "Astro, TypeScript, Tailwind CSS, GSAP, Keystatic" appear as bare tags.
- **Language:** the site copy is English; some internal code comments are Dutch. Ship English.

## Visual foundations

**Palette.** Five colours, no more: cream `#f4f1ea` as the page, near-black `#151311` as ink, deep forest green `#235347` as primary, walnut brown `#7a4f2e` as secondary (also the error/hover colour — the palette has no red), and gold `#d99b43` as accent. Everything else in `tokens/colors.css` is a mix of those five. The mood is warm-neutral and printed, not screen-white. Green is the action colour, gold is decoration and active-state marking, brown belongs to hover and error text.

**Type.** Two families, high contrast between them. Fraunces (serif, weight 700 and 900) carries every display and heading; Space Grotesk (400/500/700) carries body, labels and UI. The scale is the repo's own 13 steps — 14, 17, 20, 24, 29, 35, 41, 50, 60, 72, 86, 103, 124px, roughly a 1.2 ratio — so headlines can be genuinely large. Display line-height is 0.94 with `-0.02em` tracking; body is 1.55 at 20px. Labels are uppercase with `0.14em` tracking.

**Spacing and layout.** A 4px-rooted scale (4→160). Page gutter is `clamp(20px, 5vw, 64px)`; section rhythm is `clamp(64px, 10vw, 160px)`; content maxes at 1200px, prose at 64ch. Layout is a plain editorial column-and-grid: two-column hero, `auto-fit minmax(320px, 1fr)` work grid. Nothing is fixed or sticky except the site header, which fades in after the hero scrolls past (the GSAP navbar trigger).

**Backgrounds.** Flat colour only — cream by default, green or ink for one emphasis block per page. No gradients (the only gradient anywhere is the flat `[[15,23,42]]` OG-image background, which is generated art, not UI), no repeating patterns, no textures, no hand-drawn illustration. Where an image is missing, use a muted-green plate (`--surface-muted`) rather than a grey box or a drawn placeholder.

**Imagery.** Warm and cut-out: the one photographic asset is a transparent-background portrait, sat on a colour plate rather than bled to the edges. Project imagery is 16:10, warm, no filter, no grain, no black-and-white treatment. Full-bleed photography is not part of the language.

**Cards.** Off-cream `--surface-card` (`#fbf9f4`), 16px radius, 1px warm hairline `#d8d2c5`, no shadow at rest. Radii ladder: 4 / 8 / 16 / 24px, pill for anything clickable, and 25% for the squircle logo container (the mark's own geometry: 625 of 2500px).

**Shadow.** Effectively absent by design. `--shadow-hover` (`0 6px 18px rgba(21,19,17,.06)`) appears only under a card that is being hovered; `--shadow-overlay` only under a modal. No inner shadows, no glows. Separation comes from hairlines and colour, not depth.

**Transparency and blur.** Only for overlays: the dialog scrim is ink at 62% with an 8px backdrop blur. Body text is never alpha-faded to imply hierarchy — use `--text-muted` / `--text-subtle`, which are real colours. No protection gradients over imagery; captions sit outside the image on cream.

**Motion.** Ported from `src/utils/animations.ts`. The signature move is a fade-and-rise: opacity 0→1, `translateY(24px)→0`, 900ms, `power3.out` (`cubic-bezier(.22,1,.36,1)`), staggered 80ms across a group, triggered at 85% of the viewport. The header slides down over 500ms with `power2.out`. State changes are 300ms; hovers 150ms. `prefers-reduced-motion: reduce` disables all of it — the source checks it first, and so does `Reveal`.

**Hover.** Fills darken (green → `#183a31`); outline buttons invert to ink-on-cream; links shift to brown and keep their underline; cards lift 2px and gain the soft shadow; project images scale 1.03. No brightness filters, no colour-shifting to a new hue.

**Press.** `scale(0.97)` on buttons, no colour change. Focus is a 2px green outline at 2px offset.

**Borders.** 1px hairline `--border-default` by default; 2px ink only where a border is doing the work of a button outline. Active nav items are a 2px gold underline; active tabs a 2px green underline.

**Selection.** Green background with gold text — straight from the source's `::selection` rule. Keep it.

## Iconography

The repository ships **no icon set, icon font or SVG sprite** — only the three favicon variants of the DB monogram.

- **Substitution (flagged):** [Lucide](https://lucide.dev) `lucide-static@0.544.0` is loaded from unpkg and used through the `Icon` component, which renders each glyph as a `currentColor` CSS mask. Lucide's 24px grid, 2px stroke and rounded caps sit closest to the restrained, structural feel of the type. **If you have a preferred icon set, say so and it will be swapped** — nothing else depends on Lucide.
- Glyphs in use: `arrow-right`, `arrow-up-right`, `arrow-left`, `mail`, `github`, `linkedin`, `external-link`, `copy`, `x`, `menu`, `check`, `chevron-down`.
- Icons are monochrome, inherit their parent's colour, and sit at 16px (in-text/small) or 20px (buttons). Never two icon families in one view; never a filled and an outline set together.
- **No emoji, ever.** No unicode characters used as icons (arrows included — those are Lucide glyphs).
- The logo is the only brand illustration: `assets/favicon.svg` (green squircle badge with cream DB), `assets/favicon-light.svg` (green mark, for light grounds), `assets/favicon-dark.svg` (cream mark, for dark or green grounds). There is no wordmark file — set the name in Fraunces 700 next to the mark.

## Fonts

Fraunces and Space Grotesk are loaded from Google Fonts, exactly as the source does — no font binaries exist in the repository, so nothing is self-hosted here. `tokens/fonts.css` holds that single `@import`; there are no `@font-face` rules to ship. If you have licensed/self-hosted copies, drop the files in and the rules can be rewritten.

## Components

React primitives, grouped by concern. Each has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when), and each directory has a card in the Design System tab.

- `components/core/` — **Button**, **IconButton**, **Icon**, **Card**, **Tag**, **Badge**
- `components/forms/` — **Input**, **Textarea**, **Select**, **Checkbox**, **Radio**, **Switch**
- `components/navigation/` — **NavBar**, **TextLink**, **Tabs**
- `components/feedback/` — **Dialog**, **Toast**, **Tooltip**
- `components/content/` — **SectionHeading**, **ProjectCard**, **CaseStudyMeta**, **Reveal**

### Intentional additions

The source defines no component inventory, so this is a from-scratch standard set sized to the portfolio's real needs. Two entries are worth calling out:

- **Icon** — a wrapper over the substituted Lucide set, so the swap happens in one file.
- **Reveal** — a dependency-free CSS port of the repo's GSAP `[data-reveal]` scroll animation, so the system's signature motion is available without pulling in GSAP.

## UI kits

- `ui_kits/portfolio/` — the portfolio website: `index.html` (click-through), `Shell.jsx`, `Home.jsx`, `Work.jsx`, `CaseStudy.jsx`, `About.jsx`, `Contact.jsx`, `data.js` (real content from the repo). Navigate home → work → case study (with tabbed Challenge/Research/Solution/Results) → about → contact, submit the form, see the confirmation dialog.

## Index

- `styles.css` — the one stylesheet consumers link; `@import`s only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius-borders.css`, `elevation.css`, `motion.css`, `base.css`.
- `guidelines/` — 18 specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.
- `components/` — the five groups listed above, plus one `*.card.html` per group.
- `ui_kits/portfolio/` — the portfolio recreation.
- `assets/` — `favicon.svg`, `favicon-light.svg`, `favicon-dark.svg`, `profilePic.png`.
- `thumbnail.html` — the project tile.
- `github.md` — source-repo association and last sync.
- `SKILL.md` — Agent Skills entry point.
