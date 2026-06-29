import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    eyebrow: z.string(),
    title: z.string(),
    intro: z.string(),
    group: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { posts };
