// Fade-and-rise on scroll. CSS does the animation; this only adds `.is-revealed`.
export function initReveal(reduceMotion: boolean): void {
  const items = document.querySelectorAll<HTMLElement>('[data-reveal]');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry, i) => {
          const el = entry.target as HTMLElement;
          el.style.setProperty('--reveal-delay', `${i * 80}ms`);
          el.classList.add('is-revealed');
          observer.unobserve(el);
        });
    },
    { rootMargin: '0px 0px -12% 0px' },
  );

  items.forEach((el) => observer.observe(el));
}
