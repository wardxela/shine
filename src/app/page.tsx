import Image from 'next/image';

import hero from './_img/hero.png';
import { SectionTitle } from '@/shared/ui/kit';

export default function Home() {
  return (
    <main>
      <section>
        <div className="container flex items-center justify-between">
          <div className="p-20">
            <h1 className="text-6xl font-bold mb-9">ШАЙН</h1>
            <p className="text-2xl mb-9 max-w-md">
              Одежда из лучших тканей на любой размер. Оформи заказ уже сегодня.
            </p>
            <button className="bg-amber-800 text-white px-20 py-4 text-2xl">
              Написать
            </button>
          </div>
          <div className="p-20">
            <Image src={hero} alt="Пальто" />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <SectionTitle>Наши работы</SectionTitle>
          <div></div>
        </div>
      </section>
    </main>
  );
}
