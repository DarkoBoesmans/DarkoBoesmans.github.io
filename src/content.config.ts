import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      client: z.string(),
      goal: z.string(),
      outcome: z.string(),
      challenge: z.string(),
      results: z.string(),
      research: z.string(),
      tools: z.array(z.string()),
      solution: z.string(),
      link: z.string().url(),
      reflection: z.string(),
      coverImage: image().optional(),
    }),
});

export const collections = {
  projects,
};