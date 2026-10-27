// Loader: counts to 100 % as fonts, the portrait and the page really finish loading.
// Never shorter than 900 ms (so it doesn't flash) and never longer than 2.4 s.
const MIN_MS = 900;
const MAX_MS = 2400;
const KEY = 'db-loaded';

export function initLoader(): void {
  const root = document.documentElement;
  const loader = document.querySelector<HTMLElement>('[data-loader]');
  const count = loader?.querySelector<HTMLElement>('[data-loader-count]');
  if (!root.classList.contains('is-loading') || !loader || !count) return;

  const portrait = document.querySelector<HTMLImageElement>('.c-badge__photo img');
  const tasks = [
    document.fonts.ready,
    portrait ? portrait.decode().catch(() => undefined) : Promise.resolve(),
    document.readyState === 'complete' ? Promise.resolve() : new Promise((r) => window.addEventListener('load', r, { once: true })),
  ];
  let done = 0;
  tasks.forEach((task) => task.then(() => done++));

  const start = performance.now();
  let shown = 0;

  const tick = (now: number): void => {
    const elapsed = now - start;
    const real = done / tasks.length;
    const time = Math.min(1, elapsed / MIN_MS);
    // Shown progress never runs ahead of real loading, nor of the minimum time.
    const target = elapsed >= MAX_MS ? 1 : Math.min(real, time);
    shown += (target - shown) * 0.18;
    if (target === 1 && shown > 0.995) shown = 1;

    count.textContent = String(Math.round(shown * 100));
    loader.style.setProperty('--p', shown.toFixed(3));

    if (shown < 1) {
      requestAnimationFrame(tick);
      return;
    }
    root.classList.add('is-loaded');
    try {
      sessionStorage.setItem(KEY, '1');
    } catch {
      // Storage blocked: the loader simply shows again next time.
    }
    window.setTimeout(() => root.classList.remove('is-loading'), 750);
  };

  requestAnimationFrame(tick);
}
