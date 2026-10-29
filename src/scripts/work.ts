// Featured Work: the panel shows the last project whose cover has crossed the middle of the screen,
// so it only switches once the next cover is really in view (not while the current one is still half on screen).
// The index buttons scroll to their cover.
export function initWork(reduceMotion: boolean): void {
  const section = document.querySelector<HTMLElement>('.c-work');
  if (!section) return;

  const shots = [...section.querySelectorAll<HTMLElement>('.c-work__shot')];
  const panels = [...section.querySelectorAll<HTMLElement>('.c-work__panel')];
  const markers = [...section.querySelectorAll<HTMLButtonElement>('.c-work__marker')];
  let active = 0;

  const setActive = (index: number): void => {
    if (index === active) return;
    active = index;
    panels.forEach((panel, i) => {
      panel.classList.toggle('is-active', i === index);
      panel.setAttribute('aria-hidden', String(i !== index));
      panel.querySelector('a')?.setAttribute('tabindex', i === index ? '0' : '-1');
    });
    markers.forEach((marker, i) => {
      marker.classList.toggle('is-active', i === index);
      marker.setAttribute('aria-pressed', String(i === index));
    });
  };

  const pick = (): void => {
    const line = window.innerHeight * 0.5;
    let current = 0;
    shots.forEach((shot, i) => {
      if (shot.getBoundingClientRect().top <= line) current = i;
    });
    setActive(current);
  };

  markers.forEach((marker, i) =>
    marker.addEventListener('click', () => {
      const shot = shots[i];
      if (!shot) return;
      // Land with the cover's top just above the switch line, so its own panel shows.
      window.scrollTo({
        top: window.scrollY + shot.getBoundingClientRect().top - window.innerHeight * 0.3,
        behavior: reduceMotion ? 'auto' : 'smooth',
      });
    }),
  );

  window.addEventListener('scroll', pick, { passive: true });
  pick();
}
