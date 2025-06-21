import { defineCollection, z } from 'astro:content';

const interviewSchema = z.object({
  artistName: z.string(),
  interviewTitle: z.string(),
  interviewNumber: z.number(),
  totalQuestions: z.number(),
  description: z.string().optional(),
});

const questionSchema = z.object({
  question: z.string(),
  responseType: z.enum(['drawing', 'handwritten', 'digital', 'mixed']),
  artist: z.string(),
  interviewNumber: z.number(),
  questionNumber: z.number(),
});

export const collections = {
  'interviews': defineCollection({
    type: 'content',
    schema: interviewSchema,
  }),
  'questions': defineCollection({
    type: 'content', 
    schema: questionSchema,
  }),
};