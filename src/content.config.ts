import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['cs', 'data-science', 'management']),
    tags: z.array(z.string()).default([]),
    date: z.date(),
    source: z.string().optional(),
    sourceUrl: z.string().url().optional(),
    status: z.enum(['reading', 'applied', 'reference', 'quick-capture']),
    depth: z.enum(['quick', 'deep-dive']).default('quick'),
    summary: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes };