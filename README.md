# Agroguti — Agricultural Export Website

Bilingual marketing website for Agroguti, a Peruvian agricultural export company. Showcases products (paprika, garlic, ancho pepper), company info, and a contact form backed by Supabase.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI | React 19 + Vite 7 (SWC) |
| Styling | Tailwind CSS 4 |
| Routing | React Router DOM 7 (HashRouter) |
| Backend | Supabase (PostgreSQL + REST API) |
| ORM | Prisma 7 |
| Deploy | GitHub Pages (`gh-pages`) |

**CDN dependencies:** Font Awesome 6, Flag Icons 7, Google Fonts (Montserrat, Open Sans)

## Project Structure

```
src/
├── components/
│   ├── Header.jsx        # Sticky nav, mobile drawer, language switcher
│   ├── Footer.jsx        # Contact info, links, social icons
│   ├── Slideshow.jsx     # Hero image carousel
│   ├── PackingZoom.jsx   # Interactive product image zoom
│   └── ScrollToTop.jsx   # Auto-scroll on route change
├── pages/
│   ├── Home.jsx          # Landing page with hero & product cards
│   ├── Nosotros.jsx      # About / company story
│   ├── Contacto.jsx      # Contact form (Supabase integration)
│   ├── Paprika.jsx       # Paprika product page
│   ├── Garlic.jsx        # Garlic varieties page
│   ├── Pepper.jsx        # Ancho pepper product page
│   └── NotFound.jsx      # 404 page
├── constants/
│   └── translations.js   # Spanish & English i18n strings (200+ keys)
├── lib/
│   └── supabase.js       # Supabase client initialization
└── App.jsx               # Router setup + language state
```

## Routes

```
/           → Home
/nosotros   → About the company
/contacto   → Contact form
/paprika    → Paprika product details
/garlic     → Garlic varieties & specs
/pepper     → Ancho pepper details
/*          → 404 Not Found
```

## Features

- **Bilingual (ES/EN):** Full Spanish and English support, switchable in real time via the header toggle.
- **Product pages:** Detailed specs (color, humidity, sizing, packing), image galleries with zoom.
- **Contact form:** Validated form (name, email, message) that saves submissions to Supabase with status feedback.
- **Responsive:** Mobile-first layout with hamburger menu and slide-in drawer.
- **Brand color:** `#28623f` (forest green) used throughout headers, buttons, and accents.

## Database Schema

Contact form submissions are stored in a `ContactRequest` table:

```
id          Int       PK, auto-increment
fullName    String
email       String
message     String
status      String    default: "PENDIENTE"
createdAt   DateTime  default: now()
```

## Getting Started

```bash
npm install
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview production build locally
npm run deploy    # Deploy to GitHub Pages
```

## Environment Variables

Create a `.env` file at the project root:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
DATABASE_URL=your_postgresql_connection_string
```
