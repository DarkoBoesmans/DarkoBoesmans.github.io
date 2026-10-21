import { defineConfig } from 'astro/config';

// User site repo (DarkoBoesmans.github.io) → served from the root, no `base` needed.
export default defineConfig({
  site: 'https://darkoboesmans.github.io',
  // Hashed CSS/JS/fonts go to dist/assets/ instead of dist/_astro/ (folders starting with "_" are reserved on some hosts).
  build: { assets: 'assets' },
});
