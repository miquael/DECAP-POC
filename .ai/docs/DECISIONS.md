# Decisions

## ADR-001: Use Astro Static Output
Status: Accepted

Astro is enough for the POC and keeps deployment simple. No SSR, server adapter, or runtime app should be added unless a concrete requirement appears.

## ADR-002: Use Decap Direct GitHub Backend
Status: Accepted

The CMS must use `backend.name: github` with Netlify's OAuth provider. Do not use Netlify Identity or Git Gateway for this experiment.

## ADR-003: Keep Decap As A Static Admin App
Status: Accepted

Load `https://unpkg.com/decap-cms@3.15.1/dist/decap-cms.js` from `public/admin/index.html`. Do not install Decap as an npm dependency unless a later requirement needs CMS customization.

## ADR-004: Keep `.ai` Lean
Status: Accepted

This repository started with generic Node-starter docs. For this POC, `.ai` should only preserve instructions that directly help evaluate Astro + Decap + GitHub + Netlify.
