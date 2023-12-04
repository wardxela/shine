import Image from "next/image";
import bgImg from "./_img/login.jpg";
import { Link } from "@/shared/ui/kit";
import { Notification } from "@/shared/ui/kit/client";
import { LoginForm } from "@/features/auth";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  return (
    <main className="h-full">
      <div className="relative h-full w-full overflow-hidden">
        <Image
          unoptimized
          src={bgImg}
          alt="/"
          className="absolute left-0 top-0 -z-20 hidden h-full w-full object-cover brightness-50 sm:block"
        />
        <div className="absolute bottom-0 left-0 -z-10 hidden h-[200%] w-[200%] origin-bottom-left rotate-12 bg-white sm:block lg:left-1/4 xl:left-1/3 2xl:left-1/2"></div>
        <div className="ml-auto flex h-full w-full overflow-auto lg:w-1/2">
          <div className="m-auto w-full max-w-xs p-5">
            <h1 className="mb-14 text-center text-4xl font-semibold">Вход</h1>
            <LoginForm />
            <div className="flex justify-between">
              <Link type="internal" variant="common" href="/">
                Главная
              </Link>
              <Link type="internal" variant="common" href="/register">
                Регистрация
              </Link>
            </div>
            {searchParams.error ? (
              <Notification
                type="error"
                title="Ошибка"
                message="Неверный логин и/или пароль"
              />
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  title: "Вход",
};
