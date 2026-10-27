import type { Dict } from '../i18n';

type Slug = keyof Dict['work']['projects'];

export interface Project {
  slug: Slug;
  tags: string[];
  /** Put the file in public/images/work/ and set e.g. '/images/work/bosfeesten.webp'. */
  image?: string;
  /** Live site, opens in a new tab. */
  url?: string;
}

// Featured Work, in display order.
export const projects: Project[] = [
  {
    slug: 'tjoepbiljart',
    tags: ['TypeScript', 'Three.js', 'SCSS'],
    image: '/images/work/tjoepbiljart.webp',
    url: 'https://darkoboesmans.github.io/BumperPool/',
  },
  {
    slug: 'garderobe',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/work/garderobe.webp',
    url: 'https://darkoboesmans.github.io/garderobe/darko/',
  },
  { slug: 'bosfeesten', tags: ['PHP', 'Bootstrap', 'AOS', 'CSS', 'HTML'] },
  { slug: 'chiro', tags: ['PHP', 'Bootstrap', 'AOS', 'CSS', 'HTML'] },
  { slug: 'portfolio', tags: ['Astro', 'TypeScript', 'SCSS', 'Bun'], url: 'https://github.com/DarkoBoesmans/DarkoBoesmans.github.io' },
];

/** Put the file in public/images/ and set e.g. '/images/outdoors.webp'. */
export const aboutPhoto: string | undefined = undefined;
