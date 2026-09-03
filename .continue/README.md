# Continue.dev Configuration

This directory contains context files and prompts for AI assistants working on the Darko Boesmans Portfolio project.

## Files Overview

### Context Files (AI Reference)

| File | Purpose | When to Use |
|------|---------|-------------|
| `SKILLS.md` | Comprehensive skills matrix showing proficiencies, tools, and expertise | When AI needs to understand technical capabilities or generate skill-related content |
| `PROJECT_CONTEXT.md` | Complete project documentation including design system, architecture, and conventions | Primary reference for all development tasks - ensures AI understands the full project context |

### Prompts (`prompts/` directory)

| Prompt | Purpose | Usage |
|--------|---------|-------|
| `Fix` | Silent bug fixes with code-only output | Select code → Run "Fix" prompt |
| `New Component` | Generate Astro components following project conventions | When creating new UI components |
| `Add Case Study` | Create MDX case studies with proper frontmatter | Adding new portfolio projects |
| `Accessibility Audit` | WCAG 2.2 AA+ compliance review | Before committing any UI changes |
| `Performance Optimization` | Core Web Vitals optimization | When optimizing pages for speed |

## How to Use with AI Assistants

### 1. For New Development Tasks
Reference `PROJECT_CONTEXT.md` first to ensure the AI understands:
- Design language ("Mad Men Editorial × Apple Fluid Craft")
- Color system (60-30-10 rule)
- Typography hierarchy
- Accessibility requirements
- Motion principles

### 2. For Skill-Based Questions
Reference `SKILLS.md` when:
- Generating bio/about content
- Creating skills matrices
- Writing capability statements
- Preparing interview materials

### 3. For Code Generation
Use the appropriate prompt from `prompts/`:
```
@prompts/New Component Create a testimonial card component
@prompts/Add Case Study Generate a case study for a fintech app
@prompts/Accessibility Audit Review the navigation component
```

### 4. For Quick Fixes
```
@prompts/Fix [select broken code]
```

## Project Quick Reference

**Tech Stack**: Astro 7.2.1, TypeScript, Tailwind CSS, GSAP, MDX, Keystatic  
**Design**: Forest Green (#235347), Cognac Amber (#7A4F2E), Copper Gold (#D99B43)  
**Fonts**: Fraunces (headings), Space Grotesk (body)  
**Accessibility**: WCAG 2.2 AA+ mandatory  

## Best Practices

1. **Always check PROJECT_CONTEXT.md** before starting new work
2. **Use prompts** for consistent output formatting
3. **Run accessibility audit** on all UI components
4. **Follow the 60-30-10 color rule** strictly
5. **Test with prefers-reduced-motion** support
6. **Maintain editorial tone** - professional but human

---

**Maintained By**: Darko Boesmans  
**Last Updated**: December 2024
