import { en } from './en';
import { nl } from './nl';

export const langs = ['en', 'nl'] as const;
export type Lang = (typeof langs)[number];
export type Dict = typeof en;

const dicts: Record<Lang, Dict> = { en, nl };

export const t = (lang: Lang): Dict => dicts[lang];

export const legalPages = ['privacy', 'cookies', 'terms', 'legal-notice'] as const;
