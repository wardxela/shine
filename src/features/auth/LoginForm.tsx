"use client";

import { Button, Checkbox } from "@/shared/ui/kit";
import { TextField } from "@/shared/ui/kit/client";

export function LoginForm() {
  return (
    <form action="" className="mb-14 flex flex-col">
      <TextField
        type="email"
        name="email"
        placeholder="Email"
        className="mb-5"
      />
      <TextField
        type="password"
        name="password"
        placeholder="Пароль"
        className="mb-5"
      />
      <Checkbox name="remember-me" label="Запомнить меня" className="mb-7" />
      <Button variant="primary-dark">Войти</Button>
    </form>
  );
}
