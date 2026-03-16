// Central site metadata consumed by layout + navbar.
// Keeping this object in one place avoids duplicated literals across pages.
export const siteInfo = {
  // Default fallback used by MainLayout when a page does not pass `title`.
  title: "Pokémon Static",

  // Default fallback used by MainLayout for meta description.
  description: "A static site with Pokémon data",

  // Displayed in Navbar under the product name.
  tagline: "Astro + Tailwind v4 showcase",

  // Optional Open Graph image URL consumed by MainLayout.
  // Keep empty string to skip rendering the og:image tag.
  ogImage: "",
};
