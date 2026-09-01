# Astro + Decap Author Website POC Spec

## Goal
Build the smallest complete working author website that proves this publishing workflow:

Editor -> `/admin` -> Decap CMS -> GitHub OAuth -> GitHub commit -> Netlify rebuild -> Astro static site update.

The goal is not a production client website. The goal is to decide whether this architecture is practical, stable, maintainable, and simple enough for a nontechnical author.

## Stack
- Astro 7.x static output.
- TypeScript.
- Current Astro content collections API in `src/content.config.ts`.
- Markdown content in `src/data/pages/` and `src/data/blog/`.
- Decap CMS loaded from `public/admin/` via pinned CDN script.
- Decap CMS version: `3.15.1`.
- Decap direct `github` backend.
- GitHub repository as content storage.
- Netlify GitHub OAuth provider for auth exchange.
- Netlify continuous deployment.
- Plain CSS or minimal Astro styling.

## Explicit Non-Goals
- No Node server app.
- No database.
- No SSR or Astro server mode.
- No Netlify Functions.
- No Astro Netlify adapter unless a real requirement appears.
- No Netlify Identity.
- No Git Gateway.
- No Decap Turbo, beta builds, DecapBridge, or custom auth server.
- No React, Vue, Svelte, or Tailwind unless later justified.
- No editorial workflow.

## Site Routes
- `/`
- `/about/`
- `/book/`
- `/speaking/`
- `/blog/`
- `/blog/[slug]/`
- `/contact/`
- `/admin/`

## CMS Requirements
- Fixed page entries for Home, About, Book, Speaking / Media, and Contact.
- Blog / Updates collection supports creating new posts.
- Editors should see clear labels, not implementation-oriented filenames.
- Preview can stay disabled.
- Publishing commits directly to `main`.
- Uploaded images are committed under `public/uploads/` and resolve from `/uploads/`.

## Required Docs In Implementation
- Root `README.md`: concise project overview, commands, content locations, CMS location, deployment flow.
- `SETUP.md`: manual GitHub OAuth and Netlify setup.
- `POC-TEST.md`: live workflow test procedure.

## Completion Criteria
- Astro builds successfully.
- `dist/index.html`, `dist/admin/index.html`, and `dist/admin/config.yml` exist after build.
- Public routes render.
- CMS config uses `backend.name: github`, not `git-gateway`.
- Remaining external placeholders are limited to repository owner/name, deployed Netlify URL, and OAuth credentials.
