"use server";

import { ChangePasswordSchema } from "@/server/api/schemas/user";
import { api } from "@/trpc/server";

export async function changePasswordAction(data: ChangePasswordSchema) {
  const success = await api.user.changePassword.mutate(data);

  if (!success) {
    return {
      success: false,
      message: "Не удалось изменить пароль",
    };
  }

  return {
    success: true,
    message: "Пароль успешно изменен",
  };
}
