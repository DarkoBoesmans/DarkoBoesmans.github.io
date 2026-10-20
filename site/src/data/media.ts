import type { Dict } from '../i18n';

type Slug = keyof Dict['work']['projects'];

export interface Project {
  slug: Slug;
  tags: string[];
  /** Put the file in public/images/work/ and set e.g. '/images/work/bosfeesten.webp'. */
  image?: string;
}

export const projects: Project[] = [
  { slug: 'bosfeesten', tags: ['PHP', 'Bootstrap', 'AOS', 'CSS', 'HTML'] },
  { slug: 'chiro', tags: ['PHP', 'Bootstrap', 'AOS', 'CSS', 'HTML'] },
  { slug: 'portfolio', tags: ['Astro', 'TypeScript', 'SCSS', 'Bun'] },
];

/** Put the file in public/images/ and set e.g. '/images/outdoors.webp'. */
export const aboutPhoto: string | undefined = undefined;
