# Joe's Coffee

A one-page scrolling site for a fictional specialty coffee shop, built with
Vite, React, TypeScript, Tailwind CSS v4, Framer Motion, and Lenis smooth
scroll.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  main.tsx                  Entry point
  App.tsx                   Top-level layout, wires up Lenis smooth scroll
  index.css                 Design tokens (colors, fonts, radius, type scale)
  lib/lenis.ts               Lenis smooth-scroll singleton
  data/menuItems.ts          Menu item data (name, category, image)
  components/
    Header.tsx               Floating pill nav + fullscreen curtain menu
    Hero.tsx                  Hero with parallax product cards
    CursorTrailSection.tsx    Cursor-following image trail / about section
    MenuSection.tsx           Filterable menu grid
    BeyondTheCupSection.tsx   Bento-style services grid
    ContactSection.tsx        Circular contact icon buttons
    Footer.tsx                Dark footer with link columns
```

## Notes

- All photography is sourced from Unsplash via direct URLs in
  `src/data/menuItems.ts` and the individual components — swap any `image`
  field to use your own photos.
- The hero video uses a remote sample clip with a static poster-image
  fallback; replace the `<source>` URL in `Hero.tsx` with your own footage.
- Respects `prefers-reduced-motion`: parallax, cursor-trail springs, and
  entrance transitions fall back to simple fades.
