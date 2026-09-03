---
name: Fix
description: Fix the specified issue in the codebase silently with code-only output.
invokable: true
---

Fix the specified bug, syntax error, or issue in the selected code or file.

STRICT RULES:
1. Do NOT output any explanations, introductions, postambles, summaries, or conversational filler.
2. Output ONLY the fixed code block or apply the code modifications directly to the file.
3. Preserve existing code architecture, project conventions, and formatting.
4. Ensure full TypeScript type safety, handle edge cases, and do not modify unrelated logic.

---
name: New Component
description: Create a new Astro component following project conventions.
invokable: true
---

Create a new Astro component for this portfolio project.

PROJECT CONVENTIONS:
1. Use the "Mad Men Editorial × Apple Fluid Craft" design language
2. Apply the 60-30-10 color system (Forest Green 60%, Cognac Amber 30%, Copper Gold 10%)
3. Typography: Fraunces for headings, Space Grotesk for body
4. Implement glassmorphism with backdrop-filter: blur(20px)
5. Use spring physics for animations: { bounce: 0, duration: 0.4 }
6. Ensure WCAG 2.2 AA+ accessibility compliance
7. Mobile-first responsive design
8. Use Tailwind CSS utility classes
9. Include proper ARIA labels and semantic HTML
10. Support prefers-reduced-motion and prefers-reduced-transparency

OUTPUT:
- Only the component code
- No explanations or summaries
- Follow existing component structure in src/components/

---
name: Add Case Study
description: Generate a new MDX case study with proper frontmatter and content structure.
invokable: true
---

Create a new MDX case study for the portfolio.

REQUIRED FRONTMATTER:
- title: string
- description: string (1-2 sentences)
- client: string
- goal: string
- outcome: string
- challenge: string
- results: string (include metrics)
- research: string
- tools: string[] (array of technologies)
- solution: string
- link: string (valid URL)
- reflection: string

CONTENT STRUCTURE:
1. The Challenge - Problem statement with context
2. Our Approach - Discovery, research insights, methodology
3. Technical Implementation - Code examples, architecture decisions
4. Results & Impact - Metrics, before/after comparisons (use tables)
5. Reflection - Key learnings, future improvements

STYLE GUIDELINES:
- Professional but human tone
- Story-driven: Challenge → Solution → Outcome
- Include concrete metrics and data
- Add code snippets where relevant (TypeScript/Astro)
- Use tables for comparative data
- Maintain editorial discipline - every word earns its place

OUTPUT:
- Complete MDX file content only
- No explanations
- Ready to save as src/content/projects/[project-name].mdx

---
name: Accessibility Audit
description: Review code for WCAG 2.2 AA+ compliance and suggest fixes.
invokable: true
---

Audit the provided code for accessibility compliance following WCAG 2.2 AA+ standards.

CHECKLIST:
1. Contrast ratios ≥ 4.5:1 for all text
2. Visible focus indicators (copper gold outline: #D99B43)
3. Proper heading hierarchy (H1 → H2 → H3)
4. ARIA labels on all interactive elements
5. Alt text on images
6. Touch targets ≥ 44px
7. Skip link present
8. Semantic HTML structure
9. Keyboard navigation support
10. Screen reader compatibility

PREFERS-* SUPPORT:
- prefers-reduced-motion: reduce animations to cross-fades
- prefers-reduced-transparency: remove backdrop-filter, use solid backgrounds

OUTPUT:
- List issues found (if any)
- Provide fixed code with changes applied
- No lengthy explanations - just the audit results and fixes

---
name: Performance Optimization
description: Analyze and optimize code for Core Web Vitals and performance.
invokable: true
---

Optimize the provided code for performance following Astro best practices.

OPTIMIZATION PRIORITIES:
1. Zero-JS by default (only hydrate interactive islands)
2. Image optimization (WebP/AVIF, lazy loading, proper sizes)
3. Critical CSS inlining
4. Code splitting and tree shaking
5. Reduce CLS (reserved space, font loading strategy)
6. Minimize FID (< 100ms)
7. Optimize LCP (< 2.5s)
8. Efficient GSAP animations (cleanup, reduced motion support)

ASTRO-SPECIFIC:
- Use client:load, client:visible, client:idle directives appropriately
- Leverage Content Collections for type-safe content
- Implement proper island architecture

OUTPUT:
- Optimized code only
- Brief comments on key changes if necessary
- No lengthy explanations