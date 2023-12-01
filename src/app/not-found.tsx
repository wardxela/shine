import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid h-full place-items-center">
      <div className="container flex flex-col items-center text-center">
        <h1 className="mb-8 text-9xl font-bold leading-none text-stone-800 sm:text-[256px]">
          404
        </h1>
        <p className="mb-10 max-w-xs text-sm text-stone-600 sm:text-lg">
          Упс... Нам очень жаль. Запрошенная страница не найдена
        </p>
        <Link
          href="/"
          className="bg-amber-800 px-12 py-2 text-sm text-white transition-colors hover:bg-amber-950 sm:text-lg"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}
