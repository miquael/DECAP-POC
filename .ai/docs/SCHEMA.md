# Content Schema

Astro collections are defined in `src/content.config.ts` using `defineCollection`, `glob` from `astro/loaders`, and `z` from `astro/zod`.

## Pages Collection
Base directory: `src/data/pages/`

Fixed entries:
- `home.md`
- `about.md`
- `book.md`
- `speaking.md`
- `contact.md`

Expected fields:
- Home: `title`, `eyebrow`, `headline`, `intro`, `heroImage`, `heroImageAlt`, `primaryCtaLabel`, `primaryCtaUrl`, body.
- About: `title`, `intro`, `portrait`, `portraitAlt`, body.
- Book: `title`, `bookTitle`, `subtitle`, `coverImage`, `coverImageAlt`, `description`, `buyButtonLabel`, `buyUrl`, body.
- Speaking: `title`, `intro`, `topics`, `contactCtaLabel`, body.
- Contact: `title`, `intro`, `email`, body.

## Blog Collection
Base directory: `src/data/blog/`

Each post includes:
- `title`
- `description`
- `publishedDate`
- `featuredImage`
- `featuredImageAlt`
- `draft`
- body

Blog index excludes drafts and sorts newest first. Individual blog pages are statically generated and render Markdown content with Astro's collection render API.
