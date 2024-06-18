import Link from "next/link";
import { ProductFavoriteCard } from "@/entities/product";
import { MailUsForm } from "@/features/mail";
import mailUsImg from "./_img/mail-us.jpg";

import { api } from "@/trpc/server";
import {
  ArrowRightIcon,
  CubeIcon,
  HeartIcon,
  RulerHorizontalIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/shared/ui/components/button";
import Image from "next/image";

export type HomePageProps = {
  searchParams: {
    error?: string;
    success?: string;
  };
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const products = await api.product.list.query({ take: 4 });

  return (
    <main>
      <section className="relative mb-20 min-h-[calc(100vh-80px)] py-16 sm:py-52">
        <div className="container">
          <div className="mx-auto flex flex-col items-center text-center">
            <h1 className="mb-4 text-7xl font-black">SHINE</h1>
            <p className="mb-9 max-w-2xl leading-7 text-neutral-800">
              Одежда из дорогих тканей, сделанная лучшими мастерами. Мы
              гарантируем качество нашей продукции и приветствуем любые
              предложения.
            </p>
            <div className="flex items-center gap-4">
              <Button asChild>
                <Link href="#mail-us">Написать</Link>
              </Button>
              <Link
                href="/about"
                className="flex items-center gap-1 text-sm font-semibold text-neutral-800"
              >
                Подробнее
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 -z-10 grid h-full w-full place-items-center">
          <div className="aspect-square w-1/2 rounded-full bg-gradient-to-r from-orange-300 to-red-300 opacity-15 blur-3xl"></div>
        </div>
        <div className="absolute left-0 top-0 -z-10 h-full w-full">
          <div className="h-1/3 w-1/2 translate-y-1/2 -rotate-45 rounded-full bg-gradient-to-r from-orange-300 to-red-300 opacity-25 blur-3xl"></div>
        </div>
        <div className="absolute left-0 top-0 -z-10 flex h-full w-full justify-end">
          <div className="h-1/3 w-1/2 translate-y-full -rotate-45 rounded-full bg-gradient-to-r from-orange-300 to-red-300 opacity-25 blur-3xl"></div>
        </div>
      </section>
      <section className="mb-48">
        <div className="container">
          <h2 className="mb-10 text-center text-4xl font-bold">Наши работы</h2>
          <div className="mb-10 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductFavoriteCard
                key={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                oldPrice={product.oldPrice}
                href={`/catalog/${product.id}`}
              />
            ))}
          </div>
          <div className="grid justify-center">
            <Button asChild>
              <Link href="/catalog">Смотреть</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="mb-48">
        <div className="container flex flex-col items-center">
          <h2 className="mb-4 text-center text-4xl font-bold">
            Почему выбирают нас
          </h2>
          <p className="mb-14 max-w-2xl text-center leading-7 text-neutral-600">
            Создайте свой образ с помощью нашего ателье
          </p>
          <div className="grid gap-14 self-stretch lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
            <div className="flex flex-col">
              <div className="mb-2 flex items-center gap-2 text-lg">
                <RulerHorizontalIcon
                  className="text-red-800"
                  width={18}
                  height={18}
                />
                <h4 className="font-semibold">Высокое качество</h4>
              </div>
              <p className="mb-6 flex-grow leading-relaxed text-neutral-600">
                Наши специалисты шьют одежду из высококачественных тканей,
                которую мы получаем из Италии
              </p>
              <Link
                href="/about"
                className="flex items-center gap-1 self-start text-sm font-semibold text-red-800"
              >
                Подробнее <ArrowRightIcon />
              </Link>
            </div>
            <div className="flex flex-col">
              <div className="mb-2 flex items-center gap-2 text-lg">
                <CubeIcon className="text-red-800" width={18} height={18} />
                <h4 className="font-semibold">Быстрая доставка</h4>
              </div>
              <p className="mb-6 flex-grow leading-relaxed text-neutral-600">
                У нашего ателье работает доставка . При заказе стоимостью от{" "}
                <span className="text-red-800">1999 руб.</span> доставим
                бесплатно
              </p>
              <Link
                href="/about"
                className="flex items-center gap-1 self-start text-sm font-semibold text-red-800"
              >
                Подробнее <ArrowRightIcon />
              </Link>
            </div>
            <div className="flex flex-col">
              <div className="mb-2 flex items-center gap-2 text-lg">
                <HeartIcon className="text-red-800" width={18} height={18} />
                <h4 className="font-semibold">Отзывчивость</h4>
              </div>
              <p className="mb-6 flex-grow leading-relaxed text-neutral-600">
                Мы всегда идем навстречу клиентам и готовы выслушать любое
                предложение
              </p>
              <Link
                href="/about"
                className="flex items-center gap-1 self-start text-sm font-semibold text-red-800"
              >
                Подробнее <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="mail-us" className="mb-48">
        <div className="container flex items-end justify-between gap-16">
          <div className="max-w-2xl flex-grow">
            <h2 className="mb-4 text-4xl font-bold">Напишите нам</h2>
            <p className="mb-14 max-w-xl leading-relaxed text-neutral-600">
              Хотите задать вопрос, получить консультацию или поделиться идеей?
              Оставьте нам сообщение, и мы свяжемся с вами в ближайшее время.
            </p>
            <MailUsForm />
          </div>
          <div className="relative hidden w-72 md:block">
            <Image src={mailUsImg} alt="mail-us" />
          </div>
        </div>
      </section>
    </main>
  );
}
