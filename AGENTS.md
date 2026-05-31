## AI Coding Agent Instructions for Portfolio

### Project Overview

This is a personal portfolio built with Astro and Tailwind CSS. It features modular components, a data-driven structure, and e2e tests with Playwright.

**Tech Stack:** Astro, Tailwind CSS, TypeScript, Playwright, GitHub Actions

---

### Key Commands

- **Install dependencies:** `npm i`
- **Start dev server:** `npm run dev`
- **Build for production:** `npm run build`
- **Preview production build:** `npm run preview`
- **Lint:** `npm run lint`
- **Format:** `npm run format`
- **Run e2e tests:** `npm run test:e2e`

---

### Project Structure & Conventions

- **Components:** `src/components/` (atoms, molecules, organisms, templates)
- **Data:** `src/data/` (TypeScript files for sections, projects, companies, etc.)
- **Pages:** `src/pages/` (main entry: `index.astro`)
- **Styles:** `src/styles/` (global and utility CSS)
- **Tests:** `tests/` (Playwright specs, test data)
- **Assets:** `src/assets/` (fonts, images, icons)

**Component Pattern:** Follows Atomic Design (atoms, molecules, organisms, templates).

**Data-Driven:** Section and card content is defined in `src/data/*.ts` and imported into components.

**Environment:** Requires Node.js >= 24.0.0

---

### Documentation & References

- [README.md](readme.md): Project setup, scripts, and overview
- Job and project descriptions: `src/data/files/job-descriptions/`, `src/data/files/project-descriptions/`
- About Me: `src/data/files/about-me.txt`

---

### Testing

- Uses Playwright for e2e tests (`tests/`)
- Test data in `tests/data/test-data.ts`
- Test commands: see above

---

### Build & Deployment

- Astro config: `astro.config.mjs`
- Tailwind config: CSS-first in `src/styles/global.css` (`@theme inline`)
- GitHub Pages deployment: see [Astro docs](https://docs.astro.build/en/guides/deploy/github/)

---

### Agent Guidance

- **Link, don’t duplicate:** Reference files above for detailed info.
- **Minimal by default:** Only add to this file if not easily discoverable elsewhere.
- **Conventions:** Follow Atomic Design, use data-driven patterns, and keep code modular.
- **Pitfalls:** Ensure correct base path (`/Portfolio`) for local and production URLs.

---

For further details, see the referenced files and configs. Update this file if project conventions or structure change.
