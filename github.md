repo: DarkoBoesmans/DarkoBoesmans.github.io
branch: main

## Last sync

date: 2026-09-07T15:30:00Z

### Updated in this project

- Built the portfolio screens (home, work, case study, about, services, now, contact) on the repo's tokens and type scale.
- Ported the GSAP `[data-reveal]` reveal (y:24, 900ms, power3.out) to the Web Animations API.
- Used the real `studio-redesign` case-study content verbatim; unpublished work is labelled in progress.
- Added a drag-to-explore "design ↔ engineering" slider as the home page's interactive moment.

## Screen map

| Screen | Repo files |
| --- | --- |
| All screens (shell, nav, footer) | src/styles/global.css, src/styles/reset.css, public/favicon.svg |
| Home — reveal motion + slider | src/utils/animations.ts |
| Work index / Case study | src/content/data.ts, src/content/projects/studio-redesign.mdx, src/content.config.ts.ts, keystatic.config.ts |
| About / Services / Now | README.md (stack, structure, migration status) |
