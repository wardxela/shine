import { z } from "zod";

export const sendMailSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

export type SendMailSchema = z.infer<typeof sendMailSchema>;
