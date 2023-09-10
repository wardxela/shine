import { CartProduct } from "@/entities/cart";
import tShirt from "./_img/tshirt.png";
import { Button } from "@/shared/ui/kit";

export default function CartPage() {
  return (
    <main className="container grid gap-32 py-5 sm:py-10 lg:grid-cols-[1fr,330px]">
      <div>
        <h1 className="mb-5 text-xl font-semibold">Корзина (n товаров)</h1>
        <hr className="mb-8 h-px bg-stone-200" />
        <div className="space-y-6">
          <CartProduct
            img={tShirt}
            name="Футболка Gucci"
            description="Логотип продолжает служить неотъемлемым элементом коллекций Gucci. Символ украсил это поло из хлопкового трикотажа синего цвета. Знаковый орнамент GG, впервые представленный в 30-х годах XX века и отдающий дань уважения основателю Дома Гуччио Гуччи, вдохновляет на поиск новых способов самовыражения уже на протяжении почти целого "
            price={1000}
          />
          <hr className="mb-7 h-px bg-stone-200" />
          <CartProduct
            img={tShirt}
            name="Футболка Gucci"
            description="Логотип продолжает служить неотъемлемым элементом коллекций Gucci. Символ украсил это поло из хлопкового трикотажа синего цвета. Знаковый орнамент GG, впервые представленный в 30-х годах XX века и отдающий дань уважения основателю Дома Гуччио Гуччи, вдохновляет на поиск новых способов самовыражения уже на протяжении почти целого "
            price={1000}
          />
          <hr className="mb-7 h-px bg-stone-200" />
          <CartProduct
            img={tShirt}
            name="Футболка Gucci"
            description="Логотип продолжает служить неотъемлемым элементом коллекций Gucci. Символ украсил это поло из хлопкового трикотажа синего цвета. Знаковый орнамент GG, впервые представленный в 30-х годах XX века и отдающий дань уважения основателю Дома Гуччио Гуччи, вдохновляет на поиск новых способов самовыражения уже на протяжении почти целого "
            price={1000}
          />
          <hr className="mb-7 h-px bg-stone-200" />
        </div>
      </div>
      <div>
        <h2 className="mb-8 text-xl font-semibold">Ваш заказ</h2>
        <div className="mb-8 space-y-8">
          <div>
            <h3 className="mb-5 font-semibold">Товары (n)</h3>
            <dl className="space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <dt className="text-sm text-stone-500">x2 Футболка Gucci</dt>
                <dd className="text-sm">2000 р.</dd>
              </div>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <dt className="text-sm text-stone-500">x2 Футболка Gucci</dt>
                <dd className="text-sm">2000 р.</dd>
              </div>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <dt className="text-sm text-stone-500">x2 Футболка Gucci</dt>
                <dd className="text-sm">2000 р.</dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 className="mb-5 font-semibold">Доставка</h3>
            <dl className="space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <dt className="text-sm text-stone-500">Адрес</dt>
                <dd className="max-w-[200px] text-right text-sm">
                  538002, Магаданская область, город Лотошино, наб. Чехова, 53
                </dd>
              </div>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <dt className="text-sm text-stone-500">Стоимость</dt>
                <dd className="text-sm">$64</dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 className="mb-5 font-semibold">Итого</h3>
            <dl className="space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <dt className="text-sm text-stone-500">Скидка</dt>
                <dd className="max-w-[200px] text-right text-sm">10%</dd>
              </div>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <dt className="text-sm text-stone-500">Стоимость</dt>
                <dd className="inline-flex items-center gap-2 text-sm">
                  $64 <span className="text-stone-500 line-through">$365</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <Button type="button" variant="primary" className="mb-4">
          Оплатить
        </Button>
        <Button type="button" variant="secondary">
          Отменить
        </Button>
      </div>
    </main>
  );
}
