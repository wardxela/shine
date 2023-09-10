import Image from "next/image";
import bgImg from "./_img/bg.png";
import { LogoLink } from "@/shared/ui/LogoLink";
import { Button, Link, TextField } from "@/shared/ui/kit";

export default function RegisterPage() {
  return (
    <main className="grid h-full sm:grid-rows-2 lg:grid-cols-[2fr,1fr] lg:grid-rows-1">
      <div className="overflow-y-auto py-4 lg:flex lg:flex-col lg:px-4 lg:py-8">
        <div className="container mb-10 max-w-2xl lg:px-0">
          <LogoLink />
        </div>
        <div className="z-10 mx-auto max-w-2xl bg-white px-4 py-4 sm:absolute sm:left-1/2 sm:top-1/2 sm:w-full sm:-translate-x-1/2 sm:-translate-y-1/2 sm:px-10 sm:py-14 sm:shadow-md lg:static lg:left-0 lg:top-0 lg:my-auto lg:translate-x-0 lg:translate-y-0 lg:p-0 lg:shadow-none">
          <h1 className="pb-3 text-2xl font-bold">Регистрация</h1>
          <p className="mb-8 text-stone-700">Заполните данные о себе</p>
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
            <Button
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
          src={bgImg}
          alt="Туфли"
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
      </div>
    </main>
  );
}

export const metadata = {
  title: "Регистрация",
  description: "Регистрация на сайте ШАЙН",
};
