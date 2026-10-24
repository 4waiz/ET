# Etiva Technologies

Marketing website for Etiva Technologies, an automation control-plane platform for modern SaaS teams.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)

**Live site:** [etiva-tech.vercel.app](https://etiva-tech.vercel.app)

## Overview

A SaaS-style marketing site with mesh gradients, a grid background, parallax blobs and plenty of motion. All copy, pricing tiers, testimonials and blog posts are static data in `src/data/`, and there is no backend.

## Pages & Features

| Route | Page | Highlights |
| --- | --- | --- |
| `/` | Home | Word-by-word animated hero, count-up metrics, device mockup with a typing terminal, logo cloud with hover reviews, feature grid, tabbed interactive demo, testimonials, demo CTA |
| `/product` | Product | Module tabs (Orchestration, Data Fabric, Governance), platform overview, security and compliance cards, integrations, example API request with a copy-to-clipboard snippet |
| `/solutions` | Solutions | Cards for Startups, Enterprise, Developers, Operations and Analytics, plus an outcomes section |
| `/pricing` | Pricing | Monthly/annual billing toggle, three tiers (Starter, Pro, Enterprise) and an FAQ accordion |
| `/resources` | Resources | Documentation and release-notes cards and a blog index of six posts (lazy-loaded) |
| `/blog/:slug` | Blog post | Article view that renders headings, lists and paragraphs from post data (lazy-loaded) |
| `/contact` | Contact | Demo request form with client-side validation and an inline confirmation |
| `*` | Not found | 404 page with a link home |

Site-wide:

- Light/dark theme that defaults to the OS preference. The choice is saved to `localStorage` (`etiva-theme`) and toggled from a floating button.
- Gradient route-progress bar, scroll-to-top on navigation and animated page transitions.
- Animations respect `prefers-reduced-motion` through Framer Motion's `useReducedMotion`.
- Self-hosted fonts via Fontsource: Sora, Space Grotesk and IBM Plex Mono.
- The contact form validates input and shows a confirmation, but it does not send data anywhere.

## Tech Stack

- [React 19](https://react.dev) + TypeScript (strict mode), bundled with [Vite 7](https://vite.dev)
- [Tailwind CSS 3.4](https://tailwindcss.com) (class-based dark mode) with PostCSS and Autoprefixer
- [Framer Motion 12](https://motion.dev) for transitions, counters, tabs and parallax
- [React Router 7](https://reactrouter.com) with `React.lazy` code splitting for the resources and blog routes
- [React Icons](https://react-icons.github.io/react-icons/) (Feather set), `clsx` and `@fontsource` packages
- ESLint 9 with `typescript-eslint`, `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`

## Getting Started

Prerequisites: Node.js and npm.

```bash
npm install
npm run dev       # start the Vite dev server
npm run build     # type-check (tsc -b) and build to dist/
npm run preview   # serve the production build locally
npm run lint      # run ESLint
```

## Project Structure

```
src/
├── App.tsx          # route table, page transitions, route progress
├── main.tsx         # providers (theme, router) and font imports
├── index.css        # Tailwind layers and global styles
├── assets/stock/    # local stock imagery for blog and resources
├── components/      # Navbar, Footer, Layout, Tabs, PricingCard, DeviceMockup, ApiSnippet, ...
├── data/            # blog.ts, features.ts, logos.ts, pricing.ts, testimonials.ts
├── hooks/           # useCopy, useTheme
├── pages/           # Home, Product, Solutions, Pricing, Resources, BlogPost, Contact, NotFound
└── theme/           # ThemeProvider (light / dark / system)
```

## Deployment

Deployed on [Vercel](https://vercel.com) through its GitHub integration. No `vercel.json` is committed, so Vercel's Vite defaults apply: build with `npm run build` and serve `dist/`.

Routing happens client-side, so the host has to rewrite unknown paths to `index.html`. Without that rewrite, opening a route such as `/pricing` directly returns a 404.

---

Built by [Awaiz Ahmed](https://github.com/4waiz) · Kanban Studios
