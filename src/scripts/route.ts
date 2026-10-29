// Route timeline.
// 1. Dots: click/tap toggles the extra line of a stop (hover and focus show it via CSS on desktop).
// 2. Desktop: while the visitor scrolls down through the (tall) section, the sticky track slides sideways
//    and the line draws. The section's height is set so the scroll distance matches the track, with at
//    least 1.5 screens of scrolling so the ride never feels rushed on wide monitors.
//    Phones and reduced motion keep the vertical list from the CSS.
export function initRoute(reduceMotion: boolean): void {
  const section = document.querySelector<HTMLElement>('[data-route]');
  const track = section?.querySelector<HTMLElement>('[data-route-track]');
  const path = section?.querySelector<SVGPathElement>('[data-route-path]');
  const lane = section?.querySelector<HTMLElement>('[data-route-lane]');
  if (!section || !track) return;

  section.querySelectorAll<HTMLButtonElement>('[data-route-dot]').forEach((dot) =>
    dot.addEventListener('click', () => {
      const open = dot.getAttribute('aria-expanded') !== 'true';
      dot.setAttribute('aria-expanded', String(open));
      dot.parentElement?.classList.toggle('is-open', open);
    }),
  );

  if (reduceMotion) return;

  // Keyboard: a dot that gets focus while the track is sideways scrolls into view first.
  section.addEventListener('focusin', (event) => {
    const stop = (event.target as HTMLElement).closest<HTMLElement>('li');
    if (!stop || !section.classList.contains('is-horizontal')) return;
    const distance = Math.max(1, track.scrollWidth - window.innerWidth);
    const progress = Math.min(1, Math.max(0, (stop.offsetLeft - window.innerWidth / 3) / distance));
    const top = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + progress * (section.offsetHeight - window.innerHeight), behavior: 'instant' });
  });

  const wide = matchMedia('(min-width: 900px)');
  let queued = false;

  const update = (): void => {
    queued = false;
    if (!section.classList.contains('is-horizontal')) return;
    const scrollable = section.offsetHeight - window.innerHeight;
    const progress = Math.min(1, Math.max(0, -section.getBoundingClientRect().top / scrollable));
    const distance = Math.max(0, track.scrollWidth - window.innerWidth);
    const shift = -progress * distance;
    track.style.translate = `${shift.toFixed(1)}px 0`;
    if (path) path.style.strokeDashoffset = String(1 - progress);

    // Chiro lane: once its start scrolls off the left edge, its label follows along inside it.
    if (lane?.parentElement) {
      const box = lane.parentElement;
      const behind = -(box.offsetLeft + shift) + 40;
      const room = box.clientWidth - lane.offsetWidth;
      lane.style.translate = `${Math.max(0, Math.min(room, behind)).toFixed(1)}px 0`;
    }
  };

  const setup = (): void => {
    section.classList.toggle('is-horizontal', wide.matches);
    if (!wide.matches) {
      section.style.height = '';
      track.style.translate = '';
      return;
    }
    // Sideways distance (at least 1.5 screens) + one screen of sticky time = the height to scroll through.
    const distance = Math.max(track.scrollWidth - window.innerWidth, window.innerHeight * 1.5);
    section.style.height = `${distance + window.innerHeight}px`;
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
