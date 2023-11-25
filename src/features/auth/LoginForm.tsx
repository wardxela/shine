"use client";

import { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";

import { Button, Checkbox } from "@/shared/ui/kit";
import { TextField } from "@/shared/ui/kit/client";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    signIn("credentials", { email, password, callbackUrl: "/" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-14 flex flex-col">
      <TextField
        type="email"
        name="email"
        placeholder="Email"
        className="mb-5"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <TextField
        type="password"
        name="password"
        placeholder="Пароль"
        className="mb-5"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <Checkbox name="remember-me" label="Запомнить меня" className="mb-7" />
      <Button type="submit" variant="primary-dark">
        Войти
      </Button>
    </form>
  );
}
