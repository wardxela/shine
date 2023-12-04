import bgImg from "./_img/bg.png";

import Image from "next/image";
import { redirect } from "next/navigation";

import { LogoLink } from "@/shared/ui/LogoLink";
import { Link } from "@/shared/ui/kit";
import { Button } from "@/shared/ui/kit";
import { Notification, TextField } from "@/shared/ui/kit/client";
import { api } from "@/trpc/server";
import { UserRegisterInputSchema } from "@/server/api/routers/auth";
import { URLSearchParams } from "url";

export default function RegisterPage({
  searchParams,
}: {
  searchParams?: { error?: string };
}) {
  async function register(formData: FormData) {
    "use server";

    if (formData.get("password") !== formData.get("password2")) {
      redirect(
        `/register?${new URLSearchParams({ error: "Пароли не совпадают" })}`,
      );
    }

    const parsed = UserRegisterInputSchema.safeParse({
      name: formData.get("name"),
      lastName: formData.get("last_name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      password: formData.get("password"),
    });

    if (!parsed.success) {
      redirect(
        `/register?${new URLSearchParams({
          error: parsed.error.errors.map((e) => e.message).join(", "),
        })}`,
      );
    }

    const user = await api.auth.register.mutate(parsed.data);

    if (!user) {
      redirect(
        `/register?${new URLSearchParams({
          error: "Почта и/или номер телефона уже заняты",
        })}`,
      );
    }

    redirect("/login");
  }

  return (
    <main className="grid h-full sm:grid-rows-2 lg:grid-cols-[2fr,1fr] lg:grid-rows-1">
      <div className="overflow-y-auto py-4 lg:flex lg:flex-col lg:px-4 lg:py-8">
        <div className="container mb-10 max-w-2xl lg:px-0">
          <LogoLink />
        </div>
        <div className="z-10 mx-auto max-w-2xl bg-white px-4 py-4 sm:absolute sm:left-1/2 sm:top-1/2 sm:w-full sm:-translate-x-1/2 sm:-translate-y-1/2 sm:px-10 sm:py-14 sm:shadow-md lg:static lg:left-0 lg:top-0 lg:my-auto lg:translate-x-0 lg:translate-y-0 lg:p-0 lg:shadow-none">
          <h1 className="pb-3 text-2xl font-bold">Регистрация</h1>
          <p className="mb-8 text-stone-700">Заполните данные о себе</p>
          <form action={register} className="mb-12 grid gap-6 sm:grid-cols-2">
            <TextField type="input" name="name" placeholder="Имя" />
            <TextField type="input" name="last_name" placeholder="Фамилия" />
            <TextField type="email" name="email" placeholder="Email" />
            <TextField type="tel" name="phone" placeholder="Номер телефона" />
            <TextField type="password" name="password" placeholder="Пароль" />
            <TextField
              type="password"
              name="password2"
              placeholder="Пароль (повторно)"
            />
            <Button
              type="submit"
              variant="primary-dark"
              className="sm:col-span-2 lg:col-span-1"
            >
              Зарегистрироваться
            </Button>
          </form>
          <div className="flex flex-col justify-between gap-2 sm:flex-row">
            <p>
              <span className="text-stone-700">Уже есть аккаунт?</span>{" "}
              <Link type="internal" variant="accent" href="/login">
                Войти
              </Link>
            </p>
            <Link type="internal" variant="common" href="/">
              Главная
            </Link>
          </div>
        </div>
      </div>
      <div className="relative hidden sm:block">
        <Image
          unoptimized
          src={bgImg}
          alt="Туфли"
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
      </div>
      {searchParams?.error ? (
        <Notification
          type="error"
          title="Ошибка"
          message={searchParams.error}
        />
      ) : null}
    </main>
  );
}

export const metadata = {
  title: "Регистрация",
  description: "Регистрация на сайте ШАЙН",
};
