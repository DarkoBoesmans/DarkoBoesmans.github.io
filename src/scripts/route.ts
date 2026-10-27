// Route timeline: while the visitor scrolls down through the (tall) section, the sticky track slides
// sideways and the line draws. The section's height is set so the scroll distance matches the track.
// Desktop only; phones and reduced motion keep the vertical list from the CSS.
export function initRoute(reduceMotion: boolean): void {
  const section = document.querySelector<HTMLElement>('[data-route]');
  const track = section?.querySelector<HTMLElement>('[data-route-track]');
  const path = section?.querySelector<SVGPathElement>('[data-route-path]');
  if (!section || !track || reduceMotion) return;

  const wide = matchMedia('(min-width: 900px)');
  let queued = false;

  const update = (): void => {
    queued = false;
    if (!section.classList.contains('is-horizontal')) return;
    const scrollable = section.offsetHeight - window.innerHeight;
    const progress = Math.min(1, Math.max(0, -section.getBoundingClientRect().top / scrollable));
    const distance = track.scrollWidth - window.innerWidth;
    track.style.translate = `${(-progress * distance).toFixed(1)}px 0`;
    if (path) path.style.strokeDashoffset = String(1 - progress);
  };

  const setup = (): void => {
    section.classList.toggle('is-horizontal', wide.matches);
    if (!wide.matches) {
      section.style.height = '';
      track.style.translate = '';
      return;
    }
    // Sideways distance + one screen of sticky time = the height the visitor scrolls through.
    section.style.height = `${track.scrollWidth - window.innerWidth + window.innerHeight}px`;
    update();
  };

  const queue = (): void => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', setup);
  setup();
}
