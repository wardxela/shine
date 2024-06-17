"use server";

import { SendMailSchema } from "@/server/api/schemas/mail";
import { api } from "@/trpc/server";

export async function sendMailAction(data: SendMailSchema) {
  const success = api.mail.send.mutate(data);
  if (!success) {
    return {
      success: false,
      message: "Не удалось отправить сообщение",
    };
  }
  return {
    success: true,
    message: "Сообщение отправлено! Ждите ответа в течение дня.",
  };
}
