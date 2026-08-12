import { collection, config, fields } from "@keystatic/core";

export default config({
  storage: { kind: "local" },
  collections: {
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "src/content/projects/*",
      format: {
        contentField: "body",
      },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description", multiline: true }),
        client: fields.text({ label: "Client" }),
        goal: fields.text({ label: "Goal", multiline: true }),
        outcome: fields.text({ label: "Outcome", multiline: true }),
        challenge: fields.text({ label: "Challenge", multiline: true }),
        results: fields.text({ label: "Results", multiline: true }),
        research: fields.text({ label: "Research", multiline: true }),
        tools: fields.array(fields.text({ label: "Tool" }), {
          label: "Tools & Technologies",
          itemLabel: (props) => props.value || "Tool",
        }),
        solution: fields.text({ label: "Solution", multiline: true }),
        link: fields.url({ label: "Live URL" }),
        reflection: fields.text({ label: "Reflection", multiline: true }),
        body: fields.mdx({ label: "Case Study Body" }),
      },
    }),
  },
});