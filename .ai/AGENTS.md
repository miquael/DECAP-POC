# Agent Directives

This project is a focused technical proof of concept, not a generic Node.js app.

## Purpose
Prove whether Astro + Decap CMS + GitHub + Netlify can give a nontechnical author a simple CMS editing and publishing workflow while preserving custom static-site development.

## Constraints
- Keep the implementation minimal and POC-focused.
- Use Astro as a static site generator only.
- Use Node only as local/build tooling required by Astro.
- Do not set up this project as a Node server, API app, Vercel app, database app, or general starter template.
- Do not add React, Vue, Svelte, Tailwind, server rendering, Netlify Functions, Netlify Identity, Git Gateway, Decap Turbo, or custom auth infrastructure.
- Keep editable content separate from presentation code.
- Keep secrets out of source code.

## Source Of Truth
- Functional spec: `.ai/docs/specs/PROJECT-SPEC.md`
- Architecture: `.ai/docs/ARCHITECTURE.md`
- Content schema: `.ai/docs/SCHEMA.md`
- Current task plan: `.ai/docs/TASKS.md`

If generic starter-template instructions conflict with the POC spec, follow the POC spec.
