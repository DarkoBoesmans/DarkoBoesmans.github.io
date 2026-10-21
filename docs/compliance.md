# Compliance checklist

Status on 19 October 2026. This is a careful checklist, not legal advice.

## Done

| Item | Result |
| --- | --- |
| Privacy policy | `/en/privacy/`, `/nl/privacy/` |
| Terms of use | `/en/terms/`, `/nl/terms/` |
| Cookie policy | `/en/cookies/`, `/nl/cookies/` |
| Business details | `/en/legal-notice/` (private individual, no company number) |
| Cookie consent banner | **Not needed.** No cookies. Only `db-lang` and `db-theme` in localStorage, set when the visitor picks them: strictly necessary for a function the visitor asked for (ePrivacy art. 5(3) exception). |
| Analytics | None. |
| Third-party SDKs / embeds | None. Fonts (Fontsource) and icons (Lucide) are bundled at build time, so no request goes to Google or unpkg. |
| Only collect necessary data | The form asks only for project type and message. Name and email were removed: the visitor's mail app already sends them. |
| Form consent | No checkbox needed: nothing is processed by the site. A note under the form says it opens the mail app and links to the privacy policy. |
| Data deletion request | Described in the privacy policy ("Delete my data" email, answer within one month). |
| Age / kids' data | Site not aimed at children; under-13 note in the privacy policy (Belgian digital consent age is 13). |
| Unsubscribe link | Not applicable: no newsletter or marketing email. |
| Refund policy | Not applicable: nothing is sold. The terms state this. |
| Hidden fees | None. |
| Fake reviews | None on the site. |
| Dark patterns | None: no pre-ticked boxes, no forced sign-up, no fake urgency. Hover effects only on things that can be clicked. |
| Accessibility | Skip link, one `h1` per page, alt texts, `lang` on every page, all controls ≥44px, visible focus outlines, keyboard-operable chips (real checkboxes), errors announced with `role="alert"`, hidden nav is `inert`, reduced-motion respected. |
| Colour contrast | Small text ≥4.5:1 everywhere. Gold is only used for small text on near-black, never on green. Green on gold only for large bold tiles (≥3:1). |
| Clear button labels | "Open in mail app" instead of "Send it" (it does not send). Nav "Contact" instead of "Email me" (it scrolls to the form). |

## Copy changes made for accuracy

- "This Portfolio": "Astro and Tailwind" → "Astro, TypeScript and SCSS", because Tailwind is no longer used.
- Contact text: "Check out my work below" → "above" (the work section is above the form).
- Hero mail template: "one of our project" → "one of our projects".

## Open risks — your call

1. **"Available For New Projects" while not registered.** In Belgium, regular paid freelance work requires registering as self-employed (KBO number via an ondernemingsloket, plus a social insurance fund; possible as a side activity next to your job). Until you register, consider "Open to new opportunities", or register before you accept paid work.
2. **Client work shown.** Confirm Chiro Popov / Bosfeesten are fine with their names, logos and screenshots on your portfolio.
3. **Profile photo.** If someone else took it, you need their permission to publish it.
4. **GitHub Pages.** GitHub's terms say Pages is not meant for running a business. A personal portfolio is fine.
5. **Lucide brand icons.** `github` and `linkedin` are deprecated in Lucide; the version is pinned at 0.544.0 so they keep working. Replace them before upgrading.
6. **Accessibility law.** The European Accessibility Act does not apply to a private, non-commercial portfolio, but the site targets WCAG 2.2 AA anyway.
