# Design: Rams × Mondrian

## Brief

- **Subject:** Darko Boesmans, design engineer and front-end developer, Belgium.
- **Audience:** recruiters and small clients who scan a portfolio in under a minute.
- **Job:** get hired or booked. The visitor must see who, what and how to reach him in three seconds.
- **Constraint:** the owner's own rule, already on the site: "Design should be functional, not just beautiful."

## Concepts considered

| | Idea | Anchor | Orig. | Fit | Code | Portable |
|---|---|---|---|---|---|---|
| A | **Colour is a function key.** The page is one Mondrian composition; each primary colour means one action, like the coloured keys on a Braun ET66 calculator. | Darko's existing tile hero and his "functional, not just beautiful" rule | 4 | 5 | 5 | 2 |
| B | The portfolio as a Braun product manual: spec sheets, a dial that scrolls the sections. | his Rams-like philosophy | 3 | 3 | 3 | 4 |
| C | Broadway Boogie Woogie: the grid lines are routes that carry the visitor between sections. | none specific to Darko | 4 | 2 | 2 | 5 |

**Picked A.** It turns the layout Darko already had into a system with a rule a stranger can learn in one glance, and it is pure CSS.

## Concept card

```
Idea:        One Mondrian composition where every colour is a button with one job.
Metaphor:    A Braun device face: flat planes, black lines, colour only where you press.
Signature:   The hero board switches on plane by plane (CSS clip, 70 ms stagger), and every
             coloured plane is a key: blue = work, red = contact, yellow = about.
Emotion:     Calm, exact, slightly playful. "This person thinks before he decorates."
Motion verb: Switch. Planes flip state in 160 ms, like a Braun switch: no bounce, no drift.
Screenshot:  The hero board at 1440 px: huge name, yellow portrait plane, blue and red keys.
```

## System

**Palette** (Mondrian primaries, Rams greys)

| Role | Light | Dark |
| --- | --- | --- |
| Ground (paper) | `#f2f0eb` | `#0b0b0b` |
| Plane | `#fbfaf7` | `#1a1a19` |
| Ink | `#121212` | `#f2f0eb` |
| Muted | `#5f5f5a` | `#a8a69f` |
| Line | `#121212` | `#000000` |
| Red, contact | `#d52b1e` (white text, 5.0:1) | same |
| Blue, work | `#1d4e9e` (white text, 8.0:1) | same |
| Yellow, about | `#f4c20d` (black text, 11:1) | same |

**Type:** Archivo Variable only (OFL, self-hosted). Display 800 at width 112 %, tracking −0.04 em, leading 0.88. Text 400 at width 100 %, 17 px, leading 1.55. Labels 600, 13 px, uppercase, +0.08 em.

**Grid:** 12 columns. The Mondrian line *is* the grid gap: `clamp(5px, 0.55vw, 8px)` of black between planes. Content max 1440 px.

**Shape:** right angles everywhere. The only circle is the status dot.

**Motion:** one ease, `cubic-bezier(0.2, 0.8, 0.2, 1)`. Hover = 160 ms switch. Intro = planes clip open, 600 ms, 70 ms stagger. Sections below fade up once. Reduced motion: none of it.

**Idle state: still, on purpose.** Rams: a device does nothing until you touch it. Life comes from the intro and the key switches.

## Composition

```
HERO (board, 12 col)                       ABOUT (paper, split 5/7)
┌────────────────────────┬──────────┐       label ■ About
│ DARKO                  │ yellow   │       H2 lead (5)     story (7)
│ BOESMANS               │ portrait │       ┌──────────┬───────────────┐
├──────┬──────────┬──────┤          │       │ yellow   │ what drives me │ (board strip)
│ role │ obsess.  │ avail│          │       └──────────┴───────────────┘
├──────┴──────────┼──────┴┬─────────┤       spec sheet (label | items), hairlines
│ blue: my work → │ red → │ GH │ LI │       beyond work, 2 columns
└─────────────────┴───────┴─────────┘

WORK (catalogue rows, alternating)         CONTACT (board, 7/5)
┌───────────────┬─────────┐                ┌──────────────┬────────┐
│ blue type     │ title   │                │ red: heading │ form   │
│ cover         │ text    │                │ email, socials│       │
└───────────────┴─────────┘                └──────────────┴────────┘
```

## Genericness test

- A generic "Mondrian" page would paint random colour blocks. Here colour is never decoration: it only appears where it means something, and the same colour keys the nav, the section labels and the buttons.
- A generic Rams page would be grey and empty. The board keeps the warmth of the original tile hero.

## Placeholders

- Project screenshots: replaced by typographic covers (project name on a blue plane) until real screenshots exist in `public/images/work/`.

## Hybrid (branch `redesign/hybrid`)

The Rams × Mondriaan structure, dressed in the original portfolio's identity.

| Kept from Rams × Mondriaan | Kept from the original portfolio |
| --- | --- |
| Board of planes on an ink line grid | Five colours: cream, ink, forest green, walnut brown, gold |
| Colour as a function key, repeated in nav, labels and buttons | Fraunces 900 for display, Space Grotesk for text |
| Spec sheet, project catalogue, still page | Soft corners (14 px planes) and the round portrait |

**Function keys in this palette:** gold = work (ink text, 7.7:1), forest green = contact (cream text), walnut brown = about (cream text, 6.2:1). Brown also marks form errors, as in the original system, which has no red.

**Board corners:** outer radius = plane radius + line width, so the ink line keeps one thickness around every corner.
