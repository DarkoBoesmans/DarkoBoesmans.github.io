# Darko Boesmans Portfolio

A fully-fledged portfolio website showcasing skills as a Front-End Developer and Design Engineer, built with modern technologies and following the "Mad Men Editorial × Apple Fluid Craft" design language.

## 🎨 Design Language

**Executive Summary**: The portfolio lives at the intersection of 1960s executive sophistication and modern fluid interaction design. It feels like stepping into Don Draper's office at Sterling Cooper, but every surface responds to your touch with Apple-level precision.

### Color System (60-30-10 Rule)

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Base Warmth | Soft Cream | `#F4F1EA` | Page background, card interiors |
| Dominant Depth | Rich Forest Green | `#235347` | Large sections, hero backgrounds |
| Secondary Warmth | Cognac Amber | `#7A4F2E` | Project cards, containers |
| Accent Spark | Copper Gold | `#D99B43` | CTAs, active states, highlights |
| Technical Border | Deep Charcoal | `#151311` | Fine lines, borders |

### Typography

- **Headings**: Fraunces (serif, authoritative)
- **Body**: Space Grotesk (sans-serif, legible)

## 🚀 Features

### Homepage
- Hero section with profile card and bento grid layout
- Dynamic project filtering by technology tags
- Smooth scroll animations with GSAP ScrollTrigger
- Responsive 3-column → 2-column → 1-column grid

### Projects
- 4 detailed case studies demonstrating diverse expertise:
  - **E-Commerce Platform Redesign**: Conversion optimization, mobile-first UX
  - **Financial Dashboard**: Real-time data visualization, accessibility
  - **Healthcare Patient Portal**: GDPR compliance, WCAG 2.2 AAA
  - **Studio Redesign**: Performance-first portfolio scaffold
- Full MDX support for rich case study content
- Previous/Next navigation between projects
- Live link to actual projects

### About Page
- Professional biography with drop cap styling
- Skills matrix with proficiency levels
- Personal interests (Chiro, hiking)
- Availability status and response time

### Contact Section
- Email CTA with mailto: link
- Response time expectation (24 hours)
- Location information (Lebbeke, Belgium)

## 🛠️ Technology Stack

- **Framework**: Astro 7.2.1 (SSG)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + PostCSS
- **Animations**: GSAP with ScrollTrigger
- **Content**: MDX + Content Collections
- **CMS**: Keystatic (ready for integration)
- **Package Manager**: npm (Bun compatible)
- **Linting/Formatting**: Biome

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.astro
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   └── SEO.astro
│   └── sections/
│       ├── Header.astro (Hero)
│       ├── About.astro
│       └── Contact.astro
├── content/
│   └── projects/
│       ├── ecommerce-redesign.mdx
│       ├── financial-dashboard.mdx
│       ├── healthcare-portal.mdx
│       └── studio-redesign.mdx
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── 404.astro
│   └── projects/[slug].astro
├── styles/
│   ├── reset.css
│   └── global.css
└── utils/
    └── animations.ts
```

## 🏃 Getting Started

### Prerequisites

- Node.js >= 22.12.0 (or use `--force` flag with older versions)
- npm or Bun

### Installation

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local development server |
| `npm run build` | Build static site for production |
| `npm run preview` | Preview production build locally |
| `npm run check` | Type check with Astro Check |
| `npm run lint` | Lint code with Biome |
| `npm run format` | Format code with Biome |

## ♿ Accessibility

The portfolio follows WCAG 2.2 AA+ guidelines:

- ✅ All text meets 4.5:1 contrast ratio
- ✅ Visible focus indicators (copper gold outline)
- ✅ Reduced motion support (`prefers-reduced-motion`)
- ✅ Reduced transparency support (`prefers-reduced-transparency`)
- ✅ Minimum 44px touch targets
- ✅ Skip link for keyboard navigation
- ✅ Semantic HTML structure (H1 → H2 → H3)
- ✅ ARIA labels on all interactive elements
- ✅ Screen reader friendly alt text

## 🎯 User Stories Implemented

### Navigation
- ✅ Logo links to homepage
- ✅ Work nav link scrolls to work section
- ✅ About nav link navigates to /about page
- ✅ Contact nav link scrolls to contact section
- ✅ "About Me" tab on profile card links to /about

### Project Filtering
- ✅ Filter buttons for all technologies
- ✅ Active state indication
- ✅ Smooth animation on filter change
- ✅ "All" button to reset filters

### Case Studies
- ✅ Dynamic routing from MDX collections
- ✅ Overview cards (Client, Goal, Outcome)
- ✅ Challenge and Results sections
- ✅ Process and Solution details
- ✅ Tools/technologies pill badges
- ✅ Live website link (opens in new tab)
- ✅ Reflection section
- ✅ Full MDX content rendering
- ✅ Navigation back to home/work

### Responsive Design
- ✅ Mobile: Single column, stacked layout
- ✅ Tablet: 2-column grid
- ✅ Desktop: Full 3-column bento grid
- ✅ Touch targets ≥ 44px

## 📈 Performance Goals

- Initial page load < 2 seconds on 3G
- Optimized images (WebP/AVIF ready)
- Minimal JavaScript (zero-JS by default)
- No layout shift (CLS < 0.1)

## 🔍 SEO

- Meta titles and descriptions on all pages
- Open Graph image generation
- Sitemap.xml auto-generated
- Canonical URLs
- Structured data ready (JSON-LD)

## 📝 Content Management

Projects are managed via MDX files in `src/content/projects/`. Each project includes:

- Frontmatter metadata (title, client, goal, outcome, etc.)
- Rich MDX content for case study narrative
- Tool/technology tags
- Live project link

To add a new project:
1. Create a new `.mdx` file in `src/content/projects/`
2. Fill in the frontmatter schema
3. Write your case study content

## 🎨 Design Tokens

CSS custom properties defined in `global.css`:

```css
:root {
  --color-cream: #F4F1EA;
  --color-forest: #235347;
  --color-cognac: #7A4F2E;
  --color-copper: #D99B43;
  --color-charcoal: #151311;
  
  --font-sans: "Space Grotesk", sans-serif;
  --font-display: "Fraunces", serif;
}
```

## 📄 License

© 2024 Darko Boesmans. All rights reserved.

---

Built with ❤️ using Astro, TypeScript, Tailwind CSS, and GSAP.
