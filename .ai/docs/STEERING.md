# Project Steering

## Core Mandates
- Build only what is needed to prove the Astro + Decap CMS + GitHub + Netlify workflow.
- Treat this as a static-site POC, not a Node.js application template.
- Use Node only for Astro development and build tooling.
- Keep dependencies minimal.
- Keep editable content in Markdown data files, separate from Astro presentation code.
- Keep secrets out of source code.

## Implementation Style
- Prefer clear Astro pages and a tiny component set over broad abstractions.
- Use plain CSS unless a concrete need justifies another styling system.
- Use ordinary `img` elements for CMS-managed uploads under `public/uploads/`.
- Disable CMS previews unless they become effectively free.

## Prohibitions
- No server app, database, SSR, Astro server mode, Netlify Functions, or custom auth server.
- No Netlify Identity or Git Gateway.
- No React, Vue, Svelte, Tailwind, Decap Turbo, Decap beta builds, or DecapBridge.
- No committed OAuth secrets, tokens, passwords, or local credential files.
