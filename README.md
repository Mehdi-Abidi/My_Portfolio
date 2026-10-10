# Mehdi Abidi portfolio

Personal site for Syed Muhammad Mehdi Abidi, AI Engineer Lead. The home page is a knowledge graph: the portrait is the centre node and each project is a connected node.

Built with Next.js 15 (App Router), React 19, Tailwind CSS 4 and Framer Motion 12. Light and dark themes with a toggle in the nav; the choice is remembered and the OS preference is used on first visit.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Edit the content

Everything lives in `src/data/site.ts`:

- `profile` holds name, role, intro, headline, photo, CV path and links.
- `projects` feed the Projects section. Entries with `x` and `y` also appear as graph nodes in the hero; the stage is scaled to fit the screen. Optional `parts` and `shots` add a system breakdown and a screenshot gallery.
- `experience`, `skills`, `education` and `certifications` fill the experience section.

Replace `public/mehdi.jpg` and `public/Mehdi_Abidi_CV.pdf` to update the portrait and the CV.

## Theme

Colours are CSS variables in `src/app/globals.css`, one set for light on `:root` and one for dark on `.dark`. Changing `--accent` in both restyles every highlight.

## Deploy on Vercel

Import the repository on vercel.com, leave the defaults, and deploy. No environment variables are needed.
