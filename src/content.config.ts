import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
  loader: glob({ base: './src/data/pages', pattern: '*.md' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string().optional(),
    headline: z.string().optional(),
    intro: z.string().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    primaryCtaLabel: z.string().optional(),
    primaryCtaUrl: z.string().optional(),
    portrait: z.string().optional(),
    portraitAlt: z.string().optional(),
    bookTitle: z.string().optional(),
    subtitle: z.string().optional(),
    coverImage: z.string().optional(),
    coverImageAlt: z.string().optional(),
    description: z.string().optional(),
    buyButtonLabel: z.string().optional(),
    buyUrl: z.string().optional(),
    topics: z.array(z.string()).optional(),
    contactCtaLabel: z.string().optional(),
    email: z.email().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ base: './src/data/blog', pattern: '*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.coerce.date(),
    featuredImage: z.string().optional(),
    featuredImageAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { pages, blog };
