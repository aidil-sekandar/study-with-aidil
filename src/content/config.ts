import { defineCollection, z } from "astro:content";

const notes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subject: z.string(),
    img: z.string(),
    url: z.string(),
  }),
});

const trials = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    url: z.string(),
    subject: z.string(),
  }),
});

export const collections = {
  notes,
  trials,
};
