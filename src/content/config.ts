import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),
    pubDate: z.date(),
    canonical: z.string().url(),
    coverImage: image(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).optional()
  }),
});

export const collections = {
  blog,
};
