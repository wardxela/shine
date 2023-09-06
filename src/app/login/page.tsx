import Image from "next/image";
import bgImg from "./_img/login.jpg";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="h-full">
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={bgImg}
          alt="/"
          className="absolute left-0 top-0 -z-20 h-full w-full object-cover brightness-50"
        />
        <div className="absolute bottom-0 left-1/2 -z-10 h-[200%] w-[200%] origin-bottom-left rotate-12 bg-white"></div>
        <div className="ml-auto flex h-full w-1/2">
          <div className="m-auto max-w-sm">
            <h1 className="mb-20">Вход</h1>
            <form action="" className="mb-20 flex flex-col">
              <input type="email" name="email" />
              <input type="password" name="password" />
              <input type="checkbox" name="remember-me" id="" />
              <button>Войти</button>
            </form>
            <div className="flex justify-between">
              <Link href="/">Главная</Link>
              <Link href="/register">Регистрация</Link>
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
