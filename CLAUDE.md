# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server (Vite HMR)
npm run build     # Build production bundle to dist/
npm run lint      # Run ESLint on JS/JSX files
npm run preview   # Preview production build locally
npm run deploy    # Build and deploy to GitHub Pages (gh-pages branch)
```

No test suite is configured.

## Architecture

**Hacienda La Koya** is a single-page React + Vite tourism/hospitality showcase site, deployed to GitHub Pages at the `/koya/` sub-path.

- `src/App.jsx` — All page sections in one component: Hero, Location (Google Maps embed), Videos (YouTube iframes), Gallery (6 images), Contact
- `src/components/Header.jsx` — Navigation bar; mobile hamburger icon is present but not yet functional
- `src/components/Footer.jsx` — Footer with social links (YouTube, WhatsApp, Email)
- `public/img/` — Property images used in the Gallery section
- `src/assets/` — Hero background image

**Styling**: Tailwind CSS utility classes throughout; no separate CSS modules or styled-components.

**Icons**: `react-icons` (Fa* icons).

## Deployment

The `main` branch holds source; `gh-pages` branch holds built output.

`vite.config.js` sets `base: '/koya/'` — this must stay in sync with the GitHub Pages sub-path or asset URLs will break.

Deploy with `npm run deploy` (runs `vite build` then `gh-pages -d dist`).
