// Entry point: starts every behaviour once. Each init* lives in its own file.
import { initContact } from './contact';
import { initLang } from './lang';
import { initReveal } from './reveal';
import { initTheme } from './theme';

// Tells the CSS failsafe that scripts are running.
document.documentElement.classList.add('js-ready');

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

initTheme(reduceMotion);
initLang();
initReveal(reduceMotion);
initContact();
