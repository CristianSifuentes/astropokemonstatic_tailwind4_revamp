# 🧬 Astro Pokédex — Tailwind CSS v4 Edition

A **reference-grade Astro project** that showcases static-first architecture, dynamic route prerendering, and modern Tailwind CSS v4 styling.

## Technical map (how files connect)

- `src/layouts/MainLayout.astro`
  - Imports `src/styles/global.css` once for all pages.
  - Renders `src/components/Navbar.astro` and the shared footer.
  - Receives per-page metadata props (`title`, `description`, `ogImage`) and falls back to `src/data/site-info.ts`.
  - Mounts `ClientRouter` from `astro:transitions` for view transitions.

- `src/components/Navbar.astro`
  - Reads `siteInfo` metadata and `Astro.url.pathname`.
  - Uses `isActive()` helper to style current section links.

- `src/components/PokemonCard.astro`
  - Receives `name`, `id`, `image`, `size`.
  - Links to `/pokemons/[name]`.
  - Reused by list pages and cry page for consistent visual identity.

- `src/components/CustomTitle.astro`
  - Shared section heading component with optional subtitle.

- `src/pages/index.astro` and `src/pages/about.astro`
  - Static educational pages using MainLayout + CustomTitle.

- `src/pages/pokemons/[page].astro`
  - `getStaticPaths()` creates `/pokemons/1..8`.
  - Fetches paginated list from `https://pokeapi.co/api/v2/pokemon?limit=20&offset=...`.
  - Maps API results into `PokemonCard` props.

- `src/pages/pokemons/[name].astro`
  - `getStaticPaths()` creates `/pokemons/:name` for first 151 Pokémon.
  - Fetches full detail payload from `https://pokeapi.co/api/v2/pokemon/:name`.
  - Extracts derived values (`id`, `image`, `types`, `stats`) for rendering.

- `src/pages/pokemon/[id].astro`
  - `getStaticPaths()` builds `/pokemon/:id` and injects `name` in `props`.
  - Constructs artwork and cry audio URLs from the ID.

- `src/data/pokemon-list.response.ts`
  - Shared TS interfaces for list API payload.

- `astro.config.mjs`
  - Registers Tailwind v4 Vite plugin.

## Data flow summary

1. Astro prerenders routes at build time using `getStaticPaths()` in dynamic files.
2. Each route performs `fetch()` to PokeAPI during build.
3. Data is transformed into component props.
4. Components render static HTML/CSS; ClientRouter adds smooth transitions on navigation.

## Scripts

- `npm run dev` — start development server
- `npm run build` — build static site
- `npm run preview` — preview production build

## License

MIT
