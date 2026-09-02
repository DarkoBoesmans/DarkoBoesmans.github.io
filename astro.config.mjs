import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import keystatic from "@keystatic/astro";

export default defineConfig({
  site: "https://DarkoBoesmans.github.io",
  integrations: [mdx(), tailwind(), sitemap(), keystatic()],
  vite: {
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
  },
});
