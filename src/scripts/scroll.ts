// Scroll-linked chrome, on one rAF-throttled scroll listener:
// the nav slides in after the hero, the gold progress bar fills, and [data-parallax] layers drift.
// data-parallax="0.1" = moves 10% of its distance from the screen centre (negative = the other way).
export function initScroll(reduceMotion: boolean): void {
  const nav = document.querySelector<HTMLElement>('.c-nav:not(.c-nav--always)');
  const bar = document.querySelector<HTMLElement>('.c-progress');
  const hero = document.getElementById('top');
  const layers = reduceMotion ? [] : [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
  let navShown: boolean | null = null;
  let queued = false;

  const update = (): void => {
    queued = false;
    const y = window.scrollY;
    const vh = window.innerHeight;

    if (nav) {
      const show = y > (hero ? hero.offsetHeight - 80 : 72);
      if (show !== navShown) {
        navShown = show;
        nav.classList.toggle('is-visible', show);
        nav.inert = !show;
      }
    }

    if (bar) {
      const max = document.documentElement.scrollHeight - vh;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
    }

    for (const el of layers) {
      const box = el.getBoundingClientRect();
      if (box.bottom < -vh || box.top > vh * 2) continue; // far off screen: skip
      const speed = Number(el.dataset.parallax) || 0.1;
      const previous = Number(el.dataset.offset) || 0; // the rect already includes the last offset
      const offset = (box.top - previous + box.height / 2 - vh / 2) * speed;
      el.dataset.offset = offset.toFixed(1);
      el.style.translate = `0 ${el.dataset.offset}px`;
    }
  };

  const queue = (): void => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', queue, { passive: true });
  update();
}
