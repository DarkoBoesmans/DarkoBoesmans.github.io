// Remembers an explicit language pick so the language gate on "/" respects it next time.
export function initLang(): void {
  document.querySelectorAll<HTMLAnchorElement>('[data-lang]').forEach((link) =>
    link.addEventListener('click', () => {
      try {
        localStorage.setItem('db-lang', link.dataset.lang ?? 'en');
      } catch {
        // Storage blocked: the link still works, the choice just isn't remembered.
      }
    }),
  );
}
