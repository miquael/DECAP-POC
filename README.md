# Astro + Decap Author Website POC

This proof of concept tests whether Astro + Decap CMS + GitHub + Netlify can provide custom static-site development with a simple CMS workflow for a nontechnical author.

## Architecture
Editor -> `/admin` -> Decap CMS -> GitHub OAuth -> GitHub repository -> Netlify continuous deployment -> Astro static build -> Live website

## Commands
- Install dependencies: `pnpm install`
- Local development: `pnpm run dev`
- Production build: `pnpm run build`
- Astro validation: `pnpm run check`
- Preview built site: `pnpm run preview`

## Content
- Fixed pages: `src/data/pages/`
- Blog posts: `src/data/blog/`
- CMS uploads: `public/uploads/`

## Forms
The contact and newsletter forms submit to `/thank-you/` for the demo. See `SETUP.md` for the later n8n webhook handoff.

## CMS
The Decap CMS admin app is served from `/admin/`.

CMS backend:

```yml
repo: miquael/DECAP-POC
site_domain: decap-poc.netlify.app
```

## Deployment Flow
Decap commits Markdown and uploaded images to GitHub. Netlify detects the commit, runs `pnpm run build`, publishes `dist`, and serves the updated static Astro site.

## Setup And Testing
- Manual GitHub and Netlify setup: `SETUP.md`
- Live proof-of-concept test script: `POC-TEST.md`
