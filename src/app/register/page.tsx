import bgImg from "./_img/bg.png";

import Image from "next/image";
import { LogoLink } from "@/shared/ui-old/LogoLink";
import Link from "next/link";
import { RegisterForm } from "@/features/auth";

export default function RegisterPage() {
  return (
    <main className="grid h-full sm:grid-rows-2 lg:grid-cols-[2fr,1fr] lg:grid-rows-1">
      <div className="overflow-y-auto py-4 lg:flex lg:flex-col lg:px-4 lg:py-8">
        <div className="container mb-10 max-w-2xl lg:px-0">
          <LogoLink />
        </div>
        <div className="z-10 mx-auto max-w-2xl bg-white px-4 py-4 sm:absolute sm:left-1/2 sm:top-1/2 sm:w-full sm:-translate-x-1/2 sm:-translate-y-1/2 sm:px-10 sm:py-14 sm:shadow-md lg:static lg:left-0 lg:top-0 lg:my-auto lg:translate-x-0 lg:translate-y-0 lg:p-0 lg:shadow-none">
          <div className="max-w-xl">
            <h1 className="mb-4 text-2xl font-bold">Регистрация</h1>
            <p className="mb-10 text-neutral-700">Заполните данные о себе</p>
            <RegisterForm />
            <div className="flex flex-col justify-between gap-2 sm:flex-row">
              <p className="text-sm">
                <span className="text-neutral-700">Уже есть аккаунт?</span>{" "}
                <Link
                  href="/login"
                  className="text-red-900 transition-colors hover:text-red-700"
                >
                  Войти
                </Link>
              </p>
              <Link
                href="/"
                className="flex items-center gap-2 text-sm text-red-900 transition-colors hover:text-red-700"
              >
                Главная
              </Link>
            </div>
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
  description: "Регистрация на сайте SHINE",
};
