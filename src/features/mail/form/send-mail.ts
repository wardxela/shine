"use server";

import { SendMailSchema } from "@/server/api/routers/mail";
import { api } from "@/trpc/server";
import { redirect } from "next/navigation";

export async function sendMail(data: FormData) {
  const validated = SendMailSchema.safeParse({
    name: data.get("name"),
    email: data.get("email"),
    message: data.get("message"),
  });
  if (!validated.success) {
    redirect(
      `/?${new URLSearchParams({
        error: validated.error.errors.map((e) => e.message).join(", "),
      })}`,
    );
  }
  const success = api.mail.send.mutate(validated.data);

  if (!success) {
    redirect(
      `/?${new URLSearchParams({ error: "Не удалось отправить сообщение" })}`,
    );
  }
  redirect(
    `/?${new URLSearchParams({
      success: "Сообщение отправлено! Ждите ответа в течение дня.",
    })}`,
  );
}
