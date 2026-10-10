# Mehdi Abidi portfolio

Personal site for Syed Muhammad Mehdi Abidi, AI Engineer Lead. The home page is a knowledge graph: the portrait is the centre node and each project is a connected node.

Live at **https://mehdi-abidi.github.io/My_Portfolio/**

Built with Next.js 15 (App Router), React 19, Tailwind CSS 4 and Framer Motion 12. Light and dark themes with a toggle in the nav; the choice is remembered and the OS preference is used on first visit.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export into out/
```

The site is a static export (`output: "export"`), so `out/` is plain HTML, CSS, JS and assets that any static host can serve.

## Edit the content

Everything lives in `src/data/site.ts`:

- `profile` holds name, role, intro, headline, photo, CV path and links.
- `projects` feed the Projects carousel. Entries with `x` and `y` also appear as graph nodes in the hero; the stage is scaled to fit the screen. Optional `parts`, `shots` and `links` add a system breakdown, a screenshot gallery and extra repo links.
- `experience` fills the experience timeline, including company logos and highlights.
- `skills`, `education`, `certifications` and `leadership` fill the Skills and Education sections.

Files in `public/` are referenced through `asset("/...")` in `site.ts`, which adds the base path needed on GitHub Pages. Use it for any new image or file.

## Theme

Colours are CSS variables in `src/app/globals.css`, one set for light on `:root` and one for dark on `.dark`. Changing `--accent` in both restyles every highlight.

## Deploy

**GitHub Pages (current).** Every push to `main` runs `.github/workflows/pages.yml`, which builds with `NEXT_PUBLIC_BASE_PATH=/My_Portfolio` and publishes `out/`. In the repo settings, Pages is set to deploy from GitHub Actions.

**Vercel.** Import the repository on vercel.com, leave the defaults and deploy. Leave `NEXT_PUBLIC_BASE_PATH` unset so the site is served from the root.
