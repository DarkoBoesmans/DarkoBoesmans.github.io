// Scroll-linked chrome: nav reveal, progress bar, portrait parallax.
export function initScroll(reduceMotion: boolean): void {
  const nav = document.querySelector<HTMLElement>('.c-nav:not(.c-nav--always)');
  const bar = document.querySelector<HTMLElement>('.c-progress');
  const portrait = document.querySelector<HTMLElement>('[data-parallax]');
  const hero = document.getElementById('top');
  let navShown: boolean | null = null;

  const update = (): void => {
    const y = window.scrollY;

    if (nav) {
      const show = y > 72;
      if (show !== navShown) {
        navShown = show;
        nav.classList.toggle('is-visible', show);
        nav.inert = !show;
      }
    }

    if (bar) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
    }

    if (portrait && hero && !reduceMotion && y < hero.offsetHeight) {
      portrait.style.transform = `translateY(${(y * 0.06).toFixed(1)}px)`;
    }
  };

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
}
