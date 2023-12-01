import Image from "next/image";

import { SectionTitle } from "@/shared/ui/kit";
import { Notification } from "@/shared/ui/kit/client";
import Link from "next/link";
import { ProductFavoriteCard } from "@/entities/product";
import { TextUsForm } from "@/features/mail";

import hero from "./_img/hero.png";
import textUsImg from "./_img/text-us.png";
import { api } from "@/trpc/server";

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
      <section className="py-16 sm:py-20">
        <div className="container flex items-center justify-between gap-4">
          <div>
            <h1 className="mb-9 text-4xl font-bold md:text-6xl">ШАЙН</h1>
            <p className="mb-9 max-w-md text-lg md:text-2xl">
              Одежда из лучших тканей на любой размер. Оформи заказ уже сегодня.
            </p>
            <a
              href="#mail-us"
              className="inline-block bg-amber-800 px-10 py-2 text-lg text-white md:px-20 md:py-4 md:text-2xl"
            >
              Написать
            </a>
          </div>
          <div className="hidden p-4 sm:block">
            <Image src={hero} alt="Пальто" />
          </div>
        </div>
      </section>
      <section className="mb-20">
        <div className="container">
          <SectionTitle className="mb-14">Наши работы</SectionTitle>
          <div className="mb-10 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-between gap-10">
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
            <Link
              href="/catalog"
              className="inline-block border-2 border-amber-950 px-16 py-4 text-xl transition-colors hover:bg-amber-950 hover:text-white"
            >
              Смотреть
            </Link>
          </div>
        </div>
      </section>
      <section className="mb-20">
        <div className="container">
          <SectionTitle className="mb-14">Почему выбирают нас</SectionTitle>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-16">
            <div>
              <div className="mb-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  fill="none"
                >
                  <path
                    d="M25.5 51C32.263 51 38.749 48.3134 43.5312 43.5312C48.3134 38.749 51 32.263 51 25.5C51 18.737 48.3134 12.251 43.5312 7.46878C38.749 2.6866 32.263 0 25.5 0C18.737 0 12.251 2.6866 7.46878 7.46878C2.6866 12.251 0 18.737 0 25.5C0 32.263 2.6866 38.749 7.46878 43.5312C12.251 48.3134 18.737 51 25.5 51ZM16.3459 32.4229C18.1289 34.4848 21.177 36.6562 25.5 36.6562C29.823 36.6562 32.8711 34.4848 34.6541 32.4229C35.2318 31.7555 36.2379 31.6857 36.9053 32.2635C37.5727 32.8412 37.6424 33.8473 37.0646 34.5146C34.8434 37.0646 30.9885 39.8438 25.5 39.8438C20.0115 39.8438 16.1566 37.0646 13.9354 34.5146C13.3576 33.8473 13.4273 32.8412 14.0947 32.2635C14.7621 31.6857 15.7682 31.7555 16.3459 32.4229ZM14.3836 20.7188C14.3836 19.8734 14.7194 19.0626 15.3172 18.4648C15.915 17.8671 16.7257 17.5312 17.5711 17.5312C18.4165 17.5312 19.2272 17.8671 19.825 18.4648C20.4228 19.0626 20.7586 19.8734 20.7586 20.7188C20.7586 21.5641 20.4228 22.3749 19.825 22.9727C19.2272 23.5704 18.4165 23.9062 17.5711 23.9062C16.7257 23.9062 15.915 23.5704 15.3172 22.9727C14.7194 22.3749 14.3836 21.5641 14.3836 20.7188ZM33.5086 17.5312C34.354 17.5312 35.1647 17.8671 35.7625 18.4648C36.3603 19.0626 36.6961 19.8734 36.6961 20.7188C36.6961 21.5641 36.3603 22.3749 35.7625 22.9727C35.1647 23.5704 34.354 23.9062 33.5086 23.9062C32.6632 23.9062 31.8525 23.5704 31.2547 22.9727C30.6569 22.3749 30.3211 21.5641 30.3211 20.7188C30.3211 19.8734 30.6569 19.0626 31.2547 18.4648C31.8525 17.8671 32.6632 17.5312 33.5086 17.5312Z"
                    className="fill-amber-800"
                  />
                </svg>
              </div>
              <h4 className="mb-3 text-2xl font-semibold">Высокое качество</h4>
              <p className="text-xl">
                Наши специалисты шьют одежду из высококачественных тканей,
                которую мы получаем из Италии
              </p>
            </div>
            <div>
              <div className="mb-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="63"
                  height="51"
                  viewBox="0 0 63 51"
                  fill="none"
                >
                  <path
                    d="M4.725 0C2.11641 0 0 2.1416 0 4.78125V36.6562C0 39.2959 2.11641 41.4375 4.725 41.4375H6.3C6.3 46.7168 10.5328 51 15.75 51C20.9672 51 25.2 46.7168 25.2 41.4375H37.8C37.8 46.7168 42.0328 51 47.25 51C52.4672 51 56.7 46.7168 56.7 41.4375H59.85C61.5923 41.4375 63 40.0131 63 38.25C63 36.4869 61.5923 35.0625 59.85 35.0625V28.6875V25.5V23.6373C59.85 21.9439 59.1905 20.3203 58.0092 19.125L50.4 11.4252C49.2188 10.2299 47.6142 9.5625 45.9408 9.5625H40.95V4.78125C40.95 2.1416 38.8336 0 36.225 0H4.725ZM40.95 15.9375H45.9408L53.55 23.6373V25.5H40.95V15.9375ZM11.025 41.4375C11.025 40.1694 11.5228 38.9533 12.4089 38.0566C13.295 37.16 14.4969 36.6562 15.75 36.6562C17.0031 36.6562 18.205 37.16 19.0911 38.0566C19.9772 38.9533 20.475 40.1694 20.475 41.4375C20.475 42.7056 19.9772 43.9217 19.0911 44.8184C18.205 45.715 17.0031 46.2188 15.75 46.2188C14.4969 46.2188 13.295 45.715 12.4089 44.8184C11.5228 43.9217 11.025 42.7056 11.025 41.4375ZM47.25 36.6562C48.5032 36.6562 49.705 37.16 50.5911 38.0566C51.4772 38.9533 51.975 40.1694 51.975 41.4375C51.975 42.7056 51.4772 43.9217 50.5911 44.8184C49.705 45.715 48.5032 46.2188 47.25 46.2188C45.9969 46.2188 44.795 45.715 43.9089 44.8184C43.0228 43.9217 42.525 42.7056 42.525 41.4375C42.525 40.1694 43.0228 38.9533 43.9089 38.0566C44.795 37.16 45.9969 36.6562 47.25 36.6562Z"
                    className="fill-amber-800"
                  />
                </svg>
              </div>
              <h4 className="mb-3 text-2xl font-semibold">Быстрая доставка</h4>
              <p className="text-xl">
                У нашего ателье работает доставка . При заказе стоимостью от{" "}
                <span className="text-amber-600">1999 руб.</span> доставим
                бесплатно
              </p>
            </div>
            <div>
              <div className="mb-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="51"
                  viewBox="0 0 64 51"
                  fill="none"
                >
                  <path
                    d="M20.8001 35.0625C32.2901 35.0625 41.6001 27.2133 41.6001 17.5312C41.6001 7.84922 32.2901 0 20.8001 0C9.31012 0 0.000117882 7.84922 0.000117882 17.5312C0.000117882 21.3762 1.47012 24.9322 3.96012 27.8309C3.61012 28.7672 3.09012 29.5939 2.54012 30.2912C2.06012 30.9088 1.57012 31.3869 1.21012 31.7156C1.03012 31.875 0.880118 32.0045 0.780118 32.0842C0.730118 32.124 0.690118 32.1539 0.670118 32.1639L0.650118 32.1838C0.100118 32.5922 -0.139882 33.3094 0.0801179 33.9568C0.300118 34.6043 0.910118 35.0625 1.60012 35.0625C3.78012 35.0625 5.98012 34.5047 7.81012 33.8174C8.73012 33.4688 9.59012 33.0803 10.3401 32.6818C13.4101 34.1959 16.9801 35.0625 20.8001 35.0625ZM44.8001 17.5312C44.8001 28.7174 34.8901 37.1443 23.1501 38.1504C25.5801 45.5613 33.6401 51 43.2001 51C47.0201 51 50.5901 50.1334 53.6701 48.6193C54.4201 49.0178 55.2701 49.4062 56.1901 49.7549C58.0201 50.4422 60.2201 51 62.4001 51C63.0901 51 63.7101 50.5518 63.9201 49.8943C64.1301 49.2369 63.9001 48.5197 63.3401 48.1113L63.3201 48.0914C63.3001 48.0715 63.2601 48.0516 63.2101 48.0117C63.1101 47.932 62.9601 47.8125 62.7801 47.6432C62.4201 47.3145 61.9301 46.8363 61.4501 46.2188C60.9001 45.5215 60.3801 44.6848 60.0301 43.7584C62.5201 40.8697 63.9901 37.3137 63.9901 33.4588C63.9901 24.215 55.5001 16.6348 44.7301 15.9773C44.7701 16.4854 44.7901 17.0033 44.7901 17.5213L44.8001 17.5312Z"
                    className="fill-amber-800"
                  />
                </svg>
              </div>
              <h4 className="mb-3 text-2xl font-semibold">Отзывчивость</h4>
              <p className="text-xl">
                Мы всегда идем навстречу клиентам и готовы выслушать любое
                предложение
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="mail-us">
        <div className="container">
          <SectionTitle className="mb-14">Напишите нам</SectionTitle>
        </div>
        <div className="relative py-10 lg:bg-stone-800">
          <div className="container">
            <TextUsForm className="grow" />
          </div>
          <Image
            src={textUsImg}
            alt="Напишите нам"
            className="absolute left-0 right-0 top-0 -z-10 h-full w-full object-cover brightness-[0.25] lg:left-1/2 lg:right-0 lg:z-10 lg:w-1/2 lg:brightness-50"
          />
        </div>
      </section>
      {searchParams.error ? (
        <Notification
          type="error"
          title="Ошибка"
          message={searchParams.error}
        />
      ) : searchParams.success ? (
        <Notification
          type="success"
          title="Успех"
          message={searchParams.success}
        />
      ) : null}
    </main>
  );
}
