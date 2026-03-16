// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Astro configuration entrypoint.
// - `defineConfig` gives typed autocomplete and validation.
// - Vite plugins are passed through Astro's internal Vite pipeline.
// - `tailwindcss()` enables Tailwind v4 CSS-first processing globally.
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
