# Meet Dodiya (BuildByMeet): Portfolio

React + Tailwind CSS + Framer Motion + Lenis (smooth scroll). Midnight navy theme with cyan, violet and gold accents.

## Run locally
1. Install Node.js 20 LTS (https://nodejs.org). Check: `node -v` and `npm -v`
2. `npm install`
3. `npm run dev` then open http://localhost:5173
4. `npm run build` creates the production site in `dist/`

## Edit your content
Everything lives in `src/data.js`: name, email, links, services, skills, projects, experience, education.
- Replace `public/avatars/avatar-1.svg` and `avatar-2.svg` with your two images (update the names in `data.js` if they change).
- Replace `public/projects/p1.svg`...`p3.svg` with real screenshots.
- Items marked PLACEHOLDER are sample text.

## Deploy free
Cloudflare Pages, Netlify or Vercel: build command `npm run build`, output folder `dist`.
GitHub Pages: `.github/workflows/deploy.yml` is included (repo must be public on a free plan).
