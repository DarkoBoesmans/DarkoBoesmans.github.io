import { OGImageRoute } from "astro-og-canvas";

export const { getStaticPaths, GET } = OGImageRoute({
  param: "route",
  pages: {
    index: {
      title: "Darko Boesmans",
      description: "Design Engineer & Front-End Developer",
    },
    // Je kunt hier ook dynamisch alle projecten uit je Keystatic CMS inladen
  },
  getImageOptions: (path, page) => ({
    title: page.title,
    description: page.description,
    bgGradient: [[15, 23, 42]],
    font: {
      title: { color: [255, 255, 255], size: 60, weight: "Bold" },
      description: { color: [148, 163, 184], size: 30 },
    },
  }),
});
