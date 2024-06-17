import Image from "next/image";

import aboutImg from "./_img/about.jpg";
import aboutImg2 from "./_img/about-2.jpg";
import aboutImg3 from "./_img/about-3.jpg";
import aboutImg4 from "./_img/about-4.jpg";

export default function AboutPage() {
  return (
    <main>
      <section className="relative flex h-96 lg:h-screen">
        <Image
          src={aboutImg}
          alt="О НАС"
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover brightness-50"
        />
        <div className="m-auto text-center">
          <h1 className="mb-5 text-4xl font-bold text-white md:text-6xl">
            О НАС
          </h1>
          <p className="text-white md:text-xl">
            SHINE - лучшее ателье в твоем городе
          </p>
        </div>
      </section>
      <section className="px-4">
        <div className="mx-auto flex w-full max-w-5xl -translate-y-20 flex-col bg-white shadow-2xl md:flex-row lg:-translate-y-[calc(20vh)]">
          <div className="basis-1/2 p-10">
            <h1 className="mb-10 text-3xl font-bold">SHINE</h1>
            <div className="space-y-5 leading-7 text-stone-900">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec enim velit. Fusce ut urna viverra, suscipit nisi sed,
                ultricies lorem. Nullam sed ultrices ipsum, in imperdiet mauris.
                Vivamus quis bibendum lorem. Quisque vel felis in libero
                venenatis ornare. Maecenas vitae laoreet leo, at consequat
                turpis. Morbi egestas dignissim sodales. Donec porta accumsan
                orci non fringilla. Proin quis sollicitudin nulla. Nam rutrum
                tincidunt sapien, porttitor pulvinar mi ultrices id. Maecenas
                consequat sapien et magna dignissim pharetra.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec enim velit. Fusce ut urna viverra, suscipit nisi sed,
                ultricies lorem. Nullam sed ultrices ipsum, in imperdiet mauris.
              </p>
            </div>
          </div>
          <div className="relative basis-1/2 pb-[100%]">
            <Image
              src={aboutImg2}
              alt="Мужчина в смокинге"
              className="absolute left-0 top-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      <div className="relative mb-16 h-32 md:mb-32 md:h-60 lg:h-[500px]">
        <Image
          src={aboutImg3}
          alt="Манекены"
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
      </div>
      <div className="container mb-16 grid md:mb-32 lg:grid-cols-2 lg:items-center">
        <div className="max-w-lg py-16 pl-12 md:py-32">
          <blockquote className="relative">
            <span className="leading-0 absolute left-0 top-0 -translate-x-full -translate-y-1/2 text-9xl">
              “
            </span>
            <p className="mb-9 text-3xl font-semibold italic">
              Качество — это делать что-либо правильно, даже когда никто не
              смотрит.
            </p>
            <cite className="text-xl text-neutral-600">Генри Форд</cite>
          </blockquote>
        </div>
        <div className="relative aspect-video h-full lg:aspect-auto">
          <Image
            src={aboutImg4}
            alt="Упорство в работе"
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  title: "О нас",
  description: "SHINE - лучшее ателье в твоем городе",
};
