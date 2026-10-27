// Hero: the spotlight follows the cursor, and the badge tilts towards it with a moving sheen.
// Desktop pointers only; nothing moves under reduced motion.
const MAX_TILT = 14; // degrees
const SHADOW_SHIFT = 26; // px the floor shadow slides, opposite to the tilt

export function initBadge(reduceMotion: boolean): void {
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  const card = document.querySelector<HTMLElement>('[data-badge]');
  const shadow = document.querySelector<HTMLElement>('.c-badge__shadow');
  if (!hero || !card || reduceMotion || !matchMedia('(pointer: fine)').matches) return;

  hero.addEventListener(
    'pointermove',
    (event) => {
      const box = hero.getBoundingClientRect();
      hero.style.setProperty('--spot-x', `${event.clientX - box.left}px`);
      hero.style.setProperty('--spot-y', `${event.clientY - box.top}px`);

      // -1…1 from the card's centre, clamped so a far-away cursor never over-rotates.
      const c = card.getBoundingClientRect();
      const dx = Math.max(-1, Math.min(1, (event.clientX - (c.left + c.width / 2)) / c.width));
      const dy = Math.max(-1, Math.min(1, (event.clientY - (c.top + c.height / 2)) / c.height));
      card.classList.add('is-tilting');
      card.style.setProperty('--ry', `${(dx * MAX_TILT).toFixed(2)}deg`);
      card.style.setProperty('--rx', `${(-dy * MAX_TILT).toFixed(2)}deg`);
      card.style.setProperty('--sx', `${((dx + 1) * 50).toFixed(1)}%`);
      card.style.setProperty('--sy', `${((dy + 1) * 50).toFixed(1)}%`);
      shadow?.style.setProperty('--shx', `${(-dx * SHADOW_SHIFT).toFixed(1)}px`);
    },
    { passive: true },
  );

  hero.addEventListener('pointerleave', () => {
    card.classList.remove('is-tilting');
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
    shadow?.style.setProperty('--shx', '0px');
  });
}
