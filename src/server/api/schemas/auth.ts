import { z } from "zod";

export const registerUserSchema = z
  .object({
    name: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(1),
    password: z.string().min(4),
    password2: z.string().min(4),
  })
  .superRefine(({ password, password2 }, ctx) => {
    if (password !== password2) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["password2"],
      });
    }
  });

export type RegisterUserSchema = z.infer<typeof registerUserSchema>;
