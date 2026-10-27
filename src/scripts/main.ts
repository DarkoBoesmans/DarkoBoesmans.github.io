// Entry point: starts every behaviour once. Each init* lives in its own file.
import { initBadge } from './badge';
import { initContact } from './contact';
import { initLang } from './lang';
import { initLoader } from './loader';
import { initPointer } from './pointer';
import { initReveal } from './reveal';
import { initRoute } from './route';
import { initScroll } from './scroll';
import { initTheme } from './theme';
import { initWork } from './work';

// Tells the CSS failsafe that scripts are running.
document.documentElement.classList.add('js-ready');

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

initLoader();
initTheme(reduceMotion);
initLang();
initScroll(reduceMotion);
initReveal(reduceMotion);
initWork(reduceMotion);
initRoute(reduceMotion);
initBadge(reduceMotion);
initContact();
initPointer(reduceMotion);
