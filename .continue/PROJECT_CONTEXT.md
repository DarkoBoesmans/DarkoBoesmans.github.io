# Darko Boesmans Portfolio - Project Context

## Project Overview

**Name**: Darko Boesmans Portfolio  
**Type**: Static Site Generator (SSG) Portfolio  
**Framework**: Astro 7.2.1  
**Design Language**: "Mad Men Editorial × Apple Fluid Craft"  
**Location**: Lebbeke, Belgium  

## Executive Summary

A professional portfolio website showcasing expertise as a Front-End Developer and Design Engineer. The design lives at the intersection of 1960s executive sophistication and modern fluid interaction design—like stepping into Don Draper's office at Sterling Cooper, but every surface responds with Apple-level precision.

## Technology Stack

### Core Technologies
- **Astro 7.2.1**: Static site generation with Island Architecture
- **TypeScript 5.8.3**: Strict mode for type safety
- **Tailwind CSS 3.4.17**: Utility-first styling with design tokens
- **GSAP 3.13.0**: ScrollTrigger animations and motion physics
- **MDX**: Rich case study content with JSX components
- **Keystatic**: Local CMS for content management
- **Biome**: Linting and formatting

### Build & Development
- **Package Manager**: npm (Bun compatible)
- **PostCSS + Autoprefixer**: CSS processing
- **Content Collections**: Type-safe content management

## Design System

### Color Palette (60-30-10 Rule)

| Role | Color Name | Hex Value | Usage Percentage |
|------|------------|-----------|------------------|
| Dominant Depth | Rich Forest Green | `#235347` | 60% - Hero backgrounds, large sections |
| Secondary Warmth | Cognac Amber | `#7A4F2E` | 30% - Cards, containers |
| Accent Spark | Copper Gold | `#D99B43` | 10% - CTAs, active states, highlights |
| Base Warmth | Soft Cream | `#F4F1EA` | Text-heavy areas, editorial layouts |
| Technical Border | Deep Charcoal | `#151311` | Fine lines, borders (1px max) |

**Anti-Patterns**:
- ❌ Never use pure #000000 or #FFFFFF
- ❌ No neon colors, gradients, or modern tech blues
- ❌ Avoid flat shadows — everything casts soft, deep shadows

### Typography

```css
/* Headings — Editorial Authority */
--font-heading: 'Fraunces', serif;

/* Body — Print Legibility */
--font-body: 'Space Grotesk', sans-serif;
```

#### Type Scale (Desktop)

| Level | Size | Line Height | Tracking | Weight | Use Case |
|-------|------|-------------|----------|--------|----------|
| Display | clamp(3rem, 6vw, 5rem) | 1.0 | -0.02em | 700 | Hero headlines |
| H1 | clamp(2.5rem, 5vw, 4rem) | 1.05 | -0.015em | 600 | Section headers |
| H2 | clamp(2rem, 4vw, 3rem) | 1.1 | -0.01em | 600 | Case study titles |
| H3 | 1.75rem | 1.2 | 0 | 500 | Card titles |
| Body Large | 1.25rem | 1.6 | 0 | 400 | Intro paragraphs |
| Body | 1rem | 1.7 | +0.01em | 400 | Main content |
| Caption | 0.875rem | 1.5 | +0.02em | 400 | Meta info, dates |

### Layout Philosophy

**Bento Grid**:
- Desktop: 3-column asymmetric grid
- Tablet: 2-column stacked
- Mobile: Single column, vertical rhythm preserved

**Spatial Consistency (Apple Principle)**:
- Enter/exit animations follow symmetric paths
- Modals originate from trigger element (transform-origin)
- Content width: 980px for text, 1200px max for grids

### Materials & Depth

**Glassmorphism Formula**:
```css
.card {
  background: rgba(244, 241, 234, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(217, 155, 67, 0.2);
  box-shadow: 
    0 4px 6px rgba(21, 19, 17, 0.1),
    0 10px 15px rgba(21, 19, 17, 0.15);
}
```

**Material Hierarchy**:
| Layer | Blur | Opacity | Shadow | Use |
|-------|------|---------|--------|-----|
| Structural (nav) | 20px | 0.9 | Heavy | Permanent chrome |
| Interactive (cards) | 16px | 0.85 | Medium | Floating elements |
| Modal/Overlay | 24px | 0.95 | Heaviest + scrim | Focused tasks |

## Motion & Interaction

### Spring Physics Defaults

```typescript
// Default UI spring — critically damped, no bounce
{ type: 'spring', bounce: 0, duration: 0.4 }

// Momentum interactions — slight bounce
{ type: 'spring', bounce: 0.2, duration: 0.4 }
```

### Gesture Principles
- Respond on pointer-down, not release (instant feedback)
- 1:1 tracking during drag — element glued to finger
- Interruptible animations — grab mid-flight, reverse instantly
- Velocity handoff — animation continues at finger's speed on release

### Micro-Interactions

| Element | Hover Effect | Press Effect | Transition |
|---------|--------------|--------------|------------|
| Buttons | Lift 2px + shadow deepen | Scale 0.97 | Spring 0.3s |
| Cards | Lift 4px + glow border | Scale 0.98 | Spring 0.4s |
| Links | Copper underline grow | Opacity 0.7 | Instant |
| Nav | Background materialize | Scale 0.95 | Spring 0.2s |

### Scroll Animations (GSAP + ScrollTrigger)
- `[data-reveal]` elements fade + lift on scroll
- Stagger children by 0.1s for choreography
- Respect `prefers-reduced-motion`: cross-fade only, no slides

## Accessibility (WCAG 2.2 AA+)

### Non-Negotiables
- ✅ Contrast ratios: All text ≥ 4.5:1
- ✅ Focus indicators: Visible copper outline on keyboard focus
- ✅ Reduced motion: Honor `prefers-reduced-motion: reduce`
- ✅ Reduced transparency: Honor `prefers-reduced-transparency`
- ✅ Touch targets: Minimum 44px × 44px
- ✅ Skip links: "Skip to main content"
- ✅ ARIA labels: All icons, images, interactive elements
- ✅ Heading hierarchy: H1 → H2 → H3 logical flow

### Implementation
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

@media (prefers-reduced-transparency: reduce) {
  .glass-card {
    background: #F4F1EA;
    backdrop-filter: none;
  }
}

:focus-visible {
  outline: 2px solid #D99B43;
  outline-offset: 2px;
}
```

## Project Structure

```
/workspace
├── .continue/                    # AI assistant context
│   ├── SKILLS.md                 # Skills matrix
│   ├── PROJECT_CONTEXT.md        # This file
│   └── prompts/                  # Custom prompts
├── src/
│   ├── components/
│   │   ├── layout/               # Nav, Header, Footer, SEO
│   │   └── sections/             # Hero, About, Contact
│   ├── content/projects/         # MDX case studies
│   ├── layouts/                  # BaseLayout
│   ├── pages/                    # Routes (index, about, 404, [slug])
│   ├── styles/                   # global.css, reset.css
│   └── utils/                    # animations.ts
├── public/                       # Static assets
├── astro.config.mjs              # Astro configuration
├── keystatic.config.ts           # CMS configuration
├── content.config.ts             # Content collections schema
├── tailwind.config.js            # Tailwind customization
├── tsconfig.json                 # TypeScript config
└── package.json                  # Dependencies & scripts
```

## Content Architecture

### Projects Collection Schema

```typescript
{
  title: string;
  description: string;
  client: string;
  goal: string;
  outcome: string;
  challenge: string;
  results: string;
  research: string;
  tools: string[];
  solution: string;
  link: string (URL);
  reflection: string;
  coverImage?: ImageMetadata;
  body: string (MDX);
}
```

### Current Case Studies
1. **E-Commerce Platform Redesign** - RetailCo Belgium
   - 34% mobile conversion lift
   - WCAG 2.2 AA compliance
   
2. **Financial Dashboard** - InvestTech Solutions
   - Real-time data visualization (10k+ points/sec)
   - <100ms latency
   
3. **Healthcare Patient Portal** - Hospital Group Flanders
   - 78% patient adoption rate
   - WCAG 2.2 AAA certified
   
4. **Studio Redesign** - Performance scaffold
   - Astro + MDX foundation

## Pages & Routes

| Route | Template | Purpose |
|-------|----------|---------|
| `/` | index.astro | Homepage with hero, bento grid, project showcase |
| `/about` | about.astro | Personal bio, skills matrix, interests |
| `/projects/[slug]` | [slug].astro | Dynamic case study pages |
| `/404` | 404.astro | Custom error page |
| `/open-graph/[...route]` | [...route].ts | Dynamic OG image generation |

## Key Features

### Homepage
- Profile card with concentric circle decoration
- Bento grid layout (Current Obsessions, Approach, Location, Architecture)
- Social links (GitHub, LinkedIn)
- Dynamic project filtering by technology tags
- Smooth scroll to contact section

### Project Cards
- Cognac amber background or cream with copper border
- Fine charcoal divider lines
- Technology pill badges
- Hover: lift + warm amber glow
- Click: navigate to case study

### Case Study Pages
- Overview cards (Client, Goal, Outcome)
- Challenge and Results sections
- Process and Solution details
- Tools/technologies display
- Live website link (opens in new tab)
- Full MDX content rendering
- Previous/Next project navigation

### About Page
- Professional biography with drop cap
- Skills matrix with proficiency levels
- Personal interests (Chiro, hiking)
- Availability status
- Response time expectation

### Contact Section
- Email CTA: info@darkoboesmans.be
- "Let's talk" button (mailto:)
- Location: Lebbeke, Belgium
- Response time: "Typically within 24 hours"

## Performance Goals

| Metric | Target | Strategy |
|--------|--------|----------|
| Initial Load | < 2s on 3G | SSG, zero-JS default |
| CLS | < 0.1 | Reserved space, optimized fonts |
| FID | < 100ms | Minimal JS, island architecture |
| LCP | < 2.5s | Optimized images, critical CSS |

## SEO Strategy

- ✅ Meta titles and descriptions on all pages
- ✅ Open Graph image generation (astro-og-canvas)
- ✅ Sitemap.xml auto-generated (@astrojs/sitemap)
- ✅ Canonical URLs
- ✅ Structured data ready (JSON-LD for Person)
- ✅ Semantic HTML structure

## Responsive Breakpoints

```css
/* Mobile First */
sm: 640px   /* Tablet portrait */
md: 768px   /* Tablet landscape */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
```

## Development Workflow

### Local Development
```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Production build to /dist
npm run preview  # Preview production build
```

### Content Management
```bash
npx keystatic    # Launch local CMS UI
```

### Quality Assurance
```bash
npm run check    # TypeScript validation
npm run lint     # Biome linting
npm run format   # Biome formatting
```

## Emotional Tone

### What It Should Feel Like
✅ **Authoritative** — Expert, not begging for work  
✅ **Warm** — Approachable, human, not cold corporate  
✅ **Tactile** — Physical, like leather and wood  
✅ **Precise** — Apple-level craft in every interaction  
✅ **Timeless** — Won't look dated in 5 years  

### What to Avoid
❌ Playful/casual (no emojis, no slang)  
❌ Overly technical jargon  
❌ Feature dumps — tell a story  
❌ Generic stock photography  
❌ Auto-playing video/audio  
❌ Cluttered layouts — whitespace is luxury  

## Voice & Tone

**Professional but Human**: "I build digital experiences" not "I'm a ninja rockstar"  
**Confident, Not Arrogant**: Show outcomes, let results speak  
**Concise**: Editorial discipline, every word earns its place  
**Story-Driven**: Case studies follow Challenge → Solution → Outcome

---

**Last Updated**: December 2024  
**Maintained By**: Darko Boesmans  
**Contact**: info@darkoboesmans.be
