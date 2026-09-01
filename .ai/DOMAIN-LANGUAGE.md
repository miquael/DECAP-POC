# Domain Language

- POC: A focused proof of concept to validate the editing and publishing workflow, not a production client site.
- Author Website: A small static site with Home, About, Book, Speaking / Media, Blog / Updates, and Contact pages.
- Editor: A nontechnical user who edits content through Decap CMS.
- Decap CMS: Static admin app served at `/admin/`.
- GitHub Backend: Decap's direct `github` backend, where authenticated editors commit content changes to the repository.
- Git Gateway: Explicitly out of scope for this POC.
- Netlify OAuth Provider: Netlify's server-side OAuth exchange service used by Decap's GitHub backend.
- Editable Content: Markdown files under `src/data/pages/` and `src/data/blog/`.
- Presentation Code: Astro pages, layouts, and components that render editable content.
