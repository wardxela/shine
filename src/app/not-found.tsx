import { Button } from "@/shared/ui/components/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid h-full place-items-center">
      <div className="container flex flex-col items-center text-center">
        <h1 className="mb-4 text-9xl font-bold leading-none text-neutral-950">
          404
        </h1>
        <p className="mb-10 max-w-lg text-neutral-700">
          Упс... Нам очень жаль. Запрошенная страница не найдена
        </p>
        <Button asChild className="bg-red-900 hover:bg-red-700">
          <Link href="/">На главную</Link>
        </Button>
      </div>
    </div>
  );
}
