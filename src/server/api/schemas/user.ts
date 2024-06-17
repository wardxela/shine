import { z } from "zod";

export const changePasswordSchema = z.object({
  password: z.string().min(4),
  newPassword: z.string().min(4),
});

export const updateUserInfoSchema = z.object({
  name: z.string().min(4).optional(),
  lastName: z.string().min(4).optional(),
  email: z.string().min(4).email().optional(),
  phone: z.string().min(4).optional(),
  address: z.string().optional(),
});

export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;
export type UpdateUserInfoSchema = z.infer<typeof updateUserInfoSchema>;
