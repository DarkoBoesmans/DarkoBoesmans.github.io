// Featured Work: the screenshot closest to the viewport centre picks the text panel.
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
    });
    markers.forEach((marker, i) => {
      marker.classList.toggle('is-active', i === index);
      marker.setAttribute('aria-pressed', String(i === index));
    });
  };

  const pick = (): void => {
    const middle = window.innerHeight / 2;
    let best = 0;
    let bestDistance = Infinity;
    shots.forEach((shot, i) => {
      const rect = shot.getBoundingClientRect();
      const distance = Math.abs(rect.top + rect.height / 2 - middle);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = i;
      }
    });
    setActive(best);
  };

  markers.forEach((marker, i) =>
    marker.addEventListener('click', () => {
      const shot = shots[i];
      if (!shot) return;
      const rect = shot.getBoundingClientRect();
      window.scrollTo({
        top: window.scrollY + rect.top + rect.height / 2 - window.innerHeight / 2,
        behavior: reduceMotion ? 'auto' : 'smooth',
      });
    }),
  );

  window.addEventListener('scroll', pick, { passive: true });
  pick();
}
