import { initContact } from './contact';
import { initLang } from './lang';
import { initPointer } from './pointer';
import { initReveal } from './reveal';
import { initScroll } from './scroll';
import { initTheme } from './theme';
import { initWork } from './work';

// Tells the CSS failsafe that scripts are running.
document.documentElement.classList.add('js-ready');

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

initTheme(reduceMotion);
initLang();
initScroll(reduceMotion);
initReveal(reduceMotion);
initWork(reduceMotion);
initContact();
initPointer(reduceMotion);
