// src/content/data.ts

export const projects = {
  "studio-redesign": {
    title: "Studio Redesign",
    client: "Freelance portfolio project",
    goal: "Build a modular portfolio experience that can scale from one-off pages to a content-driven case study system.",
    outcome:
      "A reusable component structure, faster delivery, and a stronger visual identity.",
    challenge:
      "The previous site mixed presentation, layout, and content too tightly, which made iteration slow.",
    results:
      "The new setup separates layout, content, and motion so each layer can evolve independently.",
    research:
      "User flow was simplified to bring projects, about, and contact into a clearer editorial rhythm.",
    tools: ["Astro", "TypeScript", "Tailwind CSS", "GSAP", "Keystatic"],
    solution:
      "A clean static foundation with reusable sections, MDX-driven projects, and carefully scoped animation hooks.",
    link: "https://DarkoBoesmans.github.io",
    reflection:
      "The biggest improvement is not visual polish alone, but the fact that the codebase is now structured for growth.",
  },
};

export type ProjectData = (typeof projects)[keyof typeof projects];
