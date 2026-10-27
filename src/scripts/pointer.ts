// Desktop-only pointer effects, from the first portfolio:
// a custom cursor (dot + trailing ring), and on EVERY link and button a magnetic lean plus a glow
// that follows the cursor (--glow-x/--glow-y, drawn in utilities/_utilities.scss).
const MAGNET = 'a, button, .c-form__chip';

export function initPointer(reduceMotion: boolean): void {
  if (!matchMedia('(pointer: fine)').matches) return;

  const root = document.documentElement;
  const dot = document.querySelector<HTMLElement>('.c-cursor__dot');
  const ring = document.querySelector<HTMLElement>('.c-cursor__ring');
  if (!dot || !ring) return;

  root.classList.add('has-cursor');
  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;
  let magnet: HTMLElement | null = null;

  window.addEventListener(
    'pointermove',
    (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

      const target = event.target as Element;
      root.classList.add('cursor-on');
      root.classList.toggle('cursor-link', Boolean(target.closest('a, button, label')));
      root.classList.toggle('cursor-text', Boolean(target.closest('input, textarea')));
      root.classList.toggle('cursor-dark', Boolean(target.closest('[data-dark]')));

      const el = target.closest<HTMLElement>(MAGNET);
      if (magnet && magnet !== el) magnet.style.translate = '';
      magnet = el;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = mouseX - rect.left;
      const y = mouseY - rect.top;
      el.style.setProperty('--glow-x', `${x}px`);
      el.style.setProperty('--glow-y', `${y}px`);
      if (reduceMotion) return;

      // Small things lean further than big tiles, so a tile never jumps over its grid line.
      const pull = rect.width > 240 ? 4 : 8;
      el.style.translate = `${((x / rect.width - 0.5) * pull).toFixed(1)}px ${((y / rect.height - 0.5) * pull * 0.75).toFixed(1)}px`;
    },
    { passive: true },
  );

  document.addEventListener('mouseleave', () => root.classList.remove('cursor-on'));
  window.addEventListener('pointerdown', () => root.classList.add('cursor-down'));
  window.addEventListener('pointerup', () => root.classList.remove('cursor-down'));

  const follow = (): void => {
    const ease = reduceMotion ? 1 : 0.2;
    ringX += (mouseX - ringX) * ease;
    ringY += (mouseY - ringY) * ease;
    ring.style.transform = `translate(${ringX.toFixed(1)}px, ${ringY.toFixed(1)}px)`;
    requestAnimationFrame(follow);
  };
  follow();
}
