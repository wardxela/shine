import Image from "next/image";
import bgImg from "./_img/login.jpg";
import { Button, Checkbox, TextField, Link } from "@/shared/ui/kit";

export default function LoginPage() {
  return (
    <main className="h-full">
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={bgImg}
          alt="/"
          className="absolute left-0 top-0 -z-20 hidden h-full w-full object-cover brightness-50 sm:block"
        />
        <div className="absolute bottom-0 left-0 -z-10 hidden h-[200%] w-[200%] origin-bottom-left rotate-12 bg-white sm:block lg:left-1/4 xl:left-1/3 2xl:left-1/2"></div>
        <div className="ml-auto flex h-full w-full overflow-auto lg:w-1/2">
          <div className="m-auto w-full max-w-xs p-5">
            <h1 className="mb-14 text-center text-4xl font-semibold">Вход</h1>
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
              <Checkbox
                name="remember-me"
                label="Запомнить меня"
                className="mb-7"
              />
              <Button variant="primary-dark">Войти</Button>
            </form>
            <div className="flex justify-between">
              <Link type="internal" variant="common" href="/">
                Главная
              </Link>
              <Link type="internal" variant="common" href="/register">
                Регистрация
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  title: "Вход",
};
