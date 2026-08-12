export interface ProjectFrontmatter {
  title: string;
  description: string;
  client: string;
  goal: string;
  outcome: string;
  challenge: string;
  results: string;
  research: string;
  tools: string[];
  solution: string;
  link: string;
  reflection: string;
}

export interface ProjectCardData {
  title: string;
  slug: string;
  description: string;
  tags: string[];
}