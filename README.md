# 🧬 Astro Pokédex — Tailwind CSS v4 Edition

A **modern, artistic, and technically advanced Pokédex application** built with **Astro 5**, **Tailwind CSS v4**, and **cutting‑edge 2025 UI/UX standards**.

This project is intentionally designed as a **reference-grade frontend architecture** for developers who want to learn how to combine **Astro islands**, **Tailwind CSS v4**, **CSS Grid**, **Flexbox**, and **View Transitions** in a real-world app.

---

## ✨ Key Features

- ⚡ **Astro 5 (Islands Architecture)**
- 🎨 **Tailwind CSS v4 (Vite Plugin)**
- 🧱 **CSS Grid + Flexbox + Columns Layout**
- 🧠 **Semantic HTML5**
- 🔄 **Astro View Transitions (`ClientRouter`)**
- 📱 **Fully Responsive (Mobile‑First)**
- 🌗 **Minimalist Dark UI (2025 Design Language)**
- 🚫 No `@apply` in scoped styles (Tailwind v4‑safe)
- 🧩 Strong separation of layout, components, and data

---

## 🗂️ Project Structure

```txt
src/
├─ components/
│  ├─ Navbar.astro
│  ├─ PokemonCard.astro
│  └─ CustomTitle.astro
│
├─ layouts/
│  └─ MainLayout.astro
│
├─ pages/
│  ├─ index.astro
│  ├─ about.astro
│  ├─ 404.astro
│  └─ pokemons/
│     ├─ [page].astro
│     ├─ [id].astro
│     └─ [name].astro
│
├─ styles/
│  └─ global.css
│
├─ data/
│  ├─ pokemon-list.response.ts
│  └─ site-info.ts
│
└─ env.d.ts
```

---

## 🧠 Architecture Philosophy

### Astro Islands
This project uses Astro’s **islands architecture**:
- Static HTML by default
- Zero JS unless required
- View transitions without SPA complexity

### Styling Strategy (Tailwind v4‑Safe)
- ✅ All Tailwind utilities applied **in markup**
- ✅ Global design tokens live in `global.css`
- ❌ No `@apply` inside `.astro` scoped `<style>` blocks
- ❌ No CSS Modules required

---

## 🎨 Layout Techniques Used

### Tailwind Columns (Masonry‑Style Layout)
```html
<section class="columns-2 sm:columns-3 lg:columns-4 gap-6">
  <PokemonCard />
</section>
```

### Grid + Flex Hybrid
- Grid for page structure
- Flexbox for alignment and card internals
- `break-inside-avoid` for column safety

---

## 🔄 View Transitions

This app uses **Astro View Transitions** via:

```ts
import { ClientRouter } from "astro:transitions";
```

---

## 📦 Dependencies

```json
{
  "astro": "^5.16.6",
  "tailwindcss": "^4.1.18",
  "@tailwindcss/vite": "^4.1.18"
}
```

---

## 🚀 Getting Started

### ⚠️ IMPORTANT (Windows Users)
**Do NOT run this project inside OneDrive.**

Recommended path:
```txt
C:\dev\astropokemonstatic
```

---

### Installation

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
Remove-Item -Recurse -Force .astro -ErrorAction SilentlyContinue

npm install
npm run dev
```

---

### Development Server
```
http://localhost:4321
```

---

## 🌍 Production Build

```bash
npm run build
npm run preview
```

---

## 🧠 Who This Project Is For

- Frontend engineers learning **Astro + Tailwind v4**
- Developers wanting **2025 UI/UX standards**
- Engineers tired of over‑engineered SPAs

---

## 📜 License
MIT
