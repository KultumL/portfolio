# Kultum Portfolio — Plain Vite + React

Exported from Lovable. No TanStack, no SSR — just Vite, React 19, React Router and Tailwind v4.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Stack

- Vite 6
- React 19 + react-router-dom 7
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- lucide-react icons

## Structure

```
index.html
src/
  main.tsx           # entry + routes
  styles.css         # Tailwind + design tokens
  pages/
    Home.tsx         # landing page (hero, about, projects, contact)
    ProjectPage.tsx  # /projects/:slug
    NotFound.tsx
  lib/projects.ts    # project data
  assets/            # images
```

## Deploying

Any static host works (Vercel, Netlify, Cloudflare Pages, GitHub Pages). Because it's a SPA, configure a fallback to `index.html`:

- **Netlify** — add `public/_redirects` with: `/*  /index.html  200`
- **Vercel** — works out of the box.
- **Cloudflare Pages** — set "Single Page Application" mode or add `_redirects`.
