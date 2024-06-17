"use server";

import { UpdateUserInfoSchema } from "@/server/api/schemas/user";
import { api } from "@/trpc/server";
import { revalidatePath } from "next/cache";

export async function updateUserInfoAction(data: UpdateUserInfoSchema) {
  const success = await api.user.updateInfo.mutate(data);

  if (!success) {
    return {
      success: false,
      message: "Не удалось обновить данные о пользователе",
    };
  }

  revalidatePath("/profile");

  return {
    success: true,
    message: "Данные о пользователе обновлены",
  };
}
