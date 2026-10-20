type Theme = 'light' | 'dark';
type DocWithTransitions = Document & { startViewTransition?: (update: () => void) => unknown };

const KEY = 'db-theme';

export function initTheme(reduceMotion: boolean): void {
  const root = document.documentElement;
  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]');

  const sync = (): void => {
    const dark = root.dataset.theme === 'dark';
    buttons.forEach((btn) => btn.setAttribute('aria-pressed', String(dark)));
  };

  const set = (theme: Theme): void => {
    try {
      localStorage.setItem(KEY, theme);
    } catch {
      // Storage blocked: the choice simply isn't remembered.
    }
    root.dataset.theme = theme;
    sync();
  };

  buttons.forEach((btn) =>
    btn.addEventListener('click', () => {
      const next: Theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      const doc = document as DocWithTransitions;
      if (doc.startViewTransition && !reduceMotion) doc.startViewTransition(() => set(next));
      else set(next);
    }),
  );

  sync();
}
