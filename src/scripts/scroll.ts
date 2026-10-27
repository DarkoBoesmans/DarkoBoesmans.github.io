// Scroll-linked chrome: the nav slides in after the hero, the ID-card portrait drifts (parallax).
export function initScroll(reduceMotion: boolean): void {
  const nav = document.querySelector<HTMLElement>('.c-nav:not(.c-nav--always)');
  const portrait = document.querySelector<HTMLElement>('[data-parallax]');
  const hero = document.getElementById('top');
  let navShown: boolean | null = null;

  const update = (): void => {
    const y = window.scrollY;

    if (nav) {
      const show = y > (hero ? hero.offsetHeight - 80 : 72);
      if (show !== navShown) {
        navShown = show;
        nav.classList.toggle('is-visible', show);
        nav.inert = !show;
      }
    }

    if (portrait && hero && !reduceMotion && y < hero.offsetHeight) {
      portrait.style.transform = `translateY(${(y * 0.06).toFixed(1)}px)`;
    }
  };

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
}
