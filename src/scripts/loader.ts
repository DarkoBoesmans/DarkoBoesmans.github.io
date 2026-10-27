// Loader: prints the pass while fonts, the portrait and the page really load, then stamps it and lifts away.
// Printing takes at least 2 s (so you can read the pass) and at most 3 s, whatever the network does.
const PRINT_MIN = 2000;
const PRINT_MAX = 3000;
const STAMP_HOLD = 700;
const EXIT = 750;
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

  const finish = (): void => {
    root.classList.add('is-granted');
    try {
      sessionStorage.setItem(KEY, '1');
    } catch {
      // Storage blocked: the loader simply shows again next time.
    }
    window.setTimeout(() => root.classList.add('is-loaded'), STAMP_HOLD);
    window.setTimeout(() => root.classList.remove('is-loading', 'is-granted'), STAMP_HOLD + EXIT);
  };

  const tick = (now: number): void => {
    const elapsed = now - start;
    // Shown progress never runs ahead of real loading, nor of the minimum print time.
    const target = elapsed >= PRINT_MAX ? 1 : Math.min(done / tasks.length, elapsed / PRINT_MIN);
    shown += (target - shown) * 0.12;
    if (target === 1 && shown > 0.995) shown = 1;

    count.textContent = String(Math.round(shown * 100));
    loader.style.setProperty('--p', shown.toFixed(3));

    if (shown < 1) requestAnimationFrame(tick);
    else finish();
  };

  requestAnimationFrame(tick);
}
