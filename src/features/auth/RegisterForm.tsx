"use client";

import { Button } from "@/shared/ui/kit";
import { TextField } from "@/shared/ui/kit/client";

export function RegisterForm() {
  return (
    <form action="" className="mb-12 grid gap-6 sm:grid-cols-2">
      <TextField type="input" name="name" placeholder="Имя" />
      <TextField type="input" name="last_name" placeholder="Фамилия" />
      <TextField type="email" name="email" placeholder="Email" />
      <TextField type="tel" name="phone" placeholder="Номер телефона" />
      <TextField type="password" name="password" placeholder="Пароль" />
      <TextField
        type="password2"
        name="password2"
        placeholder="Пароль (повторно)"
      />
      <Button variant="primary-dark" className="sm:col-span-2 lg:col-span-1">
        Зарегистрироваться
      </Button>
    </form>
  );
}
