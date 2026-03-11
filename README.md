# Sherpa Media — Astro + TinaCMS

Modern website with SPA navigation and Git-backed CMS, hosted free on GitHub Pages.

---

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | [Astro 4](https://astro.build) |
| CMS | [TinaCMS](https://tina.io) (Git-backed, visual editor) |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions (auto-deploy on push to `main`) |
| No-reload nav | Astro View Transitions API |

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run Astro dev server only (no CMS editor)
npm run dev

# 3. Run with TinaCMS visual editor (recommended)
npm run tinacms
# Then open http://localhost:4321 for the site
# and http://localhost:4321/admin for the CMS editor
```

---

## Setting Up TinaCMS (one-time)

TinaCMS is free for open-source / personal projects. It stores all content as
Markdown/JSON files in your repo — no database needed.

1. Go to [app.tina.io](https://app.tina.io) and sign in with GitHub
2. Create a new project → connect your `sherpamedia` repository
3. Copy your **Client ID** and **Token** from the TinaCloud dashboard
4. Add them as GitHub repository secrets:
   - `Settings → Secrets and variables → Actions → New repository secret`
   - Add `TINA_CLIENT_ID` and `TINA_TOKEN`
5. Add them to a local `.env` file for development:

```bash
# .env (never commit this file)
TINA_CLIENT_ID=your_client_id_here
TINA_TOKEN=your_token_here
```

---

## GitHub Pages Deployment

1. Push this repo to GitHub
2. Go to `Settings → Pages`
3. Set **Source** to `GitHub Actions`
4. Push to `main` — the site builds and deploys automatically

---

## Content Editing (after TinaCMS setup)

- **Live site editor:** `https://sherpamedia.net/admin`
- **Local editor:** `http://localhost:4321/admin` (run `npm run tinacms`)

### What you can edit via CMS:
- ✅ All page text (hero headings, body copy, CTAs)
- ✅ Case studies (add/edit/delete with rich text)
- ✅ Portfolio items (add photos, reorder)
- ✅ Testimonials
- ✅ Brand logos
- ✅ Site-wide settings (tagline, Calendly URL, footer)

---

## Project Structure

```
sherpamedia/
├── .github/
│   └── workflows/
│       └── deploy.yml          ← Auto-deploy to GitHub Pages
├── .tina/
│   └── config.ts               ← All CMS schema definitions
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro    ← Nav, footer, View Transitions
│   ├── pages/
│   │   ├── index.astro         ← Home
│   │   ├── service.astro       ← Service
│   │   ├── portfolio.astro     ← Portfolio
│   │   ├── case-studies.astro  ← Case Studies
│   │   └── about.astro         ← About
│   └── content/                ← CMS content files live here
│       ├── settings/
│       ├── home/
│       ├── service/
│       ├── about/
│       ├── case-studies/       ← MDX files, one per case study
│       ├── portfolio/          ← JSON files, one per person
│       └── testimonials/
├── public/
│   └── assets/                 ← Images, videos (copy from old site)
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## Migrating Assets from Old Site

Copy your existing assets folder directly into `public/`:

```bash
# If you have the old repo checked out:
cp -r old-site/assets public/
```

All image paths in the Astro pages already match the original site's paths
(e.g. `/assets/img/logos/dunkin-logo.svg`).

---

## Adding a New Case Study (via CMS)

1. Open `/admin` in your browser
2. Click **Case Studies → New**
3. Fill in title, client, images, and body text
4. Click **Save** → TinaCMS commits a new `.mdx` file to your repo
5. GitHub Actions rebuilds and deploys the site in ~60 seconds

---

## Customisation

- **Colors:** Edit CSS variables in `src/layouts/BaseLayout.astro` (`:root` block)
- **Fonts:** Change the Google Fonts import in `BaseLayout.astro`
- **New pages:** Create `src/pages/new-page.astro`, add nav links in `BaseLayout.astro`
- **New CMS fields:** Edit `.tina/config.ts` and restart `npm run tinacms`
