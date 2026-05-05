# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — run dev server (CRA, http://localhost:3000)
- `npm run build` — production build to `build/`
- `npm test` — Jest in watch mode (`npm test -- --watchAll=false` for single run, `npm test -- <pattern>` for one file). No test files currently exist.

The directory name contains an `=` sign (`my=portfolio`); always quote paths in shell commands.

## Architecture

Single-page React 18 portfolio site built with Create React App (`react-scripts`) and Material-UI v6. Despite `react-router-dom` being a dependency, **no router is used** — the entire site is one scroll page with anchor navigation.

- `src/index.js` mounts `<App />` into `#root` with StrictMode.
- `src/App.js` defines the **single MUI theme** (dark, blue→emerald gradient palette `#3b82f6`/`#10b981` on slate `#0b0f1a`, with `#fbbf24` amber accent; "Space Grotesk" + "Inter" + "JetBrains Mono" fonts) inline via `createTheme`, including `MuiButton`/`MuiCard`/`MuiChip` style overrides. All sections render in fixed order under one `<ThemeProvider>`: `Header → Hero → About → Experience → Projects → Contact → Footer`.
- Each section component in `src/components/` owns its own `<Box id="...">` wrapper (`#about`, `#experience`, `#projects`, `#contact`). `Header.js` uses these anchors via `document.querySelector(href).scrollIntoView`. When adding a new section, add the `id` on its outer `Box` and a corresponding entry to `navLinks` in `Header.js`.
- Styling is **MUI `sx` prop only** — no CSS-in-JS libraries, no styled-components, no Tailwind. Global styles (scrollbar, selection, smooth scroll) and shared keyframes (`fadeInUp`, `fadeIn`, `shimmer`, `float`) live in `src/index.css`. Match the existing gradient/glass-morphism patterns (`backdropFilter: 'blur(...)'`, `rgba(59, 130, 246, ...)` for primary blue, `rgba(16, 185, 129, ...)` for emerald accent) when adding UI.
- Interactive elements have stable `id` attributes following the convention `<section>-<purpose>` (e.g., `contact-submit`, `nav-about`, `mobile-nav-hire-me`). Preserve these IDs when editing — they appear used as selector hooks.

## Contact form (EmailJS)

`Contact.js` posts via `@emailjs/browser` using three env vars that **must be prefixed `REACT_APP_`** to be exposed by CRA:

- `REACT_APP_EMAILJS_SERVICE_ID`
- `REACT_APP_EMAILJS_TEMPLATE_ID`
- `REACT_APP_EMAILJS_PUBLIC_KEY`

These are read at build time from `.env` (gitignored). The form ref is passed to `emailjs.sendForm`, so EmailJS template variables map to the `name` attributes on the `<TextField>`s (`name`, `email`, `subject`, `message`) — renaming any of those will silently break the email template binding.

## Deployment

Vercel (`.vercel/` present). Production build is whatever `npm run build` produces; ensure the three `REACT_APP_EMAILJS_*` vars are set in the Vercel project, not just `.env`.
