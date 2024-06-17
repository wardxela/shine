import Image from "next/image";
import bgImg from "./_img/login.jpg";
import { LoginForm } from "@/features/auth";
import Link from "next/link";
import logoSrc from "@/shared/assets/logo.svg";

export default function LoginPage() {
  return (
    <main className="h-full">
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={bgImg}
          alt="/"
          className="absolute left-0 top-0 -z-20 hidden h-full w-full object-cover brightness-50 md:block"
        />
        <div className="absolute bottom-0 left-0 -z-10 hidden h-[200%] w-[200%] origin-bottom-left rotate-12 bg-white md:block lg:left-1/4 xl:left-1/3 2xl:left-1/2"></div>
        <div className="ml-auto flex h-full w-full overflow-auto lg:w-1/2">
          <div className="m-auto w-full max-w-md p-5">
            <Image src={logoSrc} alt="logo" className="mx-auto mb-10 w-5" />
            <h1 className="mb-10 text-center text-2xl font-semibold">
              Вход в аккаунт
            </h1>
            <LoginForm />
            <div className="flex justify-between">
              <Link
                className="text-sm text-red-900 transition-colors hover:text-red-600"
                href="/"
              >
                Главная
              </Link>
              <Link
                className="text-sm text-red-900 transition-colors hover:text-red-600"
                href="/register"
              >
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
