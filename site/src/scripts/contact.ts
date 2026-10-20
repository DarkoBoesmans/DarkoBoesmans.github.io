const EMAIL = 'darkoboesmans@gmail.com';

export function initContact(): void {
  initCopy();
  initForm();
}

function initCopy(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-copy-email]').forEach((btn) => {
    const label = btn.querySelector<HTMLElement>('[data-copy-label]');
    const idle = label?.textContent ?? EMAIL;
    let timer = 0;

    const settle = (ok: boolean): void => {
      if (label) label.textContent = (ok ? btn.dataset.ok : btn.dataset.fail) ?? idle;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        if (label) label.textContent = idle;
      }, ok ? 2000 : 6000);
    };

    btn.addEventListener('click', () => {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(EMAIL).then(() => settle(true), () => settle(false));
      } else {
        settle(false);
      }
    });
  });
}

// The form never sends data anywhere: it builds a mailto link for the visitor's own mail app.
function initForm(): void {
  const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
  const done = document.querySelector<HTMLElement>('[data-contact-done]');
  const message = form?.querySelector<HTMLTextAreaElement>('textarea[name="message"]');
  const errorBox = form?.querySelector<HTMLElement>('.c-form__error');
  const errorText = form?.querySelector<HTMLElement>('[data-form-error]');
  if (!form || !done || !message || !errorBox || !errorText) return;

  const text = form.dataset;

  const clearError = (): void => {
    message.removeAttribute('aria-invalid');
    errorBox.hidden = true;
  };

  message.addEventListener('input', clearError);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!message.value.trim()) {
      message.setAttribute('aria-invalid', 'true');
      errorText.textContent = text.errMessage ?? '';
      errorBox.hidden = false;
      message.focus();
      return;
    }

    const kinds = [...form.querySelectorAll<HTMLInputElement>('input[name="kind"]:checked')].map((i) => i.value);
    const kind = kinds.length ? kinds.join(', ') : (text.project ?? '');
    const subject = `${kind} — ${text.subject ?? ''}`;
    const body = `Hey Darko\n\n${message.value.trim()}\n\n${text.whatItIs ?? ''} ${kind}\n`;

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    form.hidden = true;
    done.hidden = false;
    done.focus();
  });

  done.querySelector('[data-contact-reset]')?.addEventListener('click', () => {
    form.reset();
    clearError();
    done.hidden = true;
    form.hidden = false;
    message.focus();
  });
}
