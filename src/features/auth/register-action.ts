"use server";

import { RegisterUserSchema } from "@/server/api/schemas/auth";
import { api } from "@/trpc/server";

export async function registerAction(data: RegisterUserSchema) {
  const user = await api.auth.register.mutate(data);

  if (!user) {
    return {
      success: false,
      message:
        "Не удалось зарегистрироваться. Почта и/или номер телефона уже заняты",
    };
  }

  return {
    success: true,
  };
}
