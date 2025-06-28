import z from "zod";

export const userAuthSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
  security: z.boolean(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type UserAuthSchema = z.infer<typeof userAuthSchema>;

export const userAuthLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type UserAuthLoginSchema = z.infer<typeof userAuthSchema>;
