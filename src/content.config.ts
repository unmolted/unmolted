import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().optional().default(false),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: postSchema,
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: postSchema,
});

export const collections = { posts, notes };
