import { CartProduct } from "@/entities/cart";
import tShirt from "./_img/tshirt.png";
import { Button } from "@/shared/ui/kit";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import { Fragment } from "react";

export default async function CartPage() {
  const countPromise = api.cart.count.query();
  const cartPromise = api.cart.list.query();
  const userPromise = api.user.me.query();

  const [count, cart, user] = await Promise.all([
    countPromise,
    cartPromise,
    userPromise,
  ]);

  return (
    <main className="container grid gap-10 py-5 sm:py-10 lg:grid-cols-[1fr,330px] lg:gap-32">
      <div>
        <h1 className="mb-5 text-xl font-semibold">
          Корзина ({count} товаров)
        </h1>
        <hr className="mb-8 h-px bg-stone-200" />
        <div className="space-y-6">
          {cart?.products.map((product) => (
            <Fragment key={product.id}>
              <CartProduct
                id={product.product.id}
                img={product.product.image}
                name={product.product.title}
                description={product.product.description}
                price={product.product.price}
                count={product.count}
              />
              <hr className="mb-7 h-px bg-stone-200" />
            </Fragment>
          ))}
        </div>
      </div>
      <div>
        <h2 className="mb-8 text-xl font-semibold">Ваш заказ</h2>
        <div className="mb-8 space-y-8">
          <div>
            <h3 className="mb-5 font-semibold">Товары ({count})</h3>
            <dl className="space-y-4">
              {cart?.products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-wrap items-start justify-between gap-2"
                >
                  <dt className="text-sm text-stone-500">
                    x{product.count} {product.product.title}
                  </dt>
                  <dd className="text-sm">
                    {product.product.price * product.count} руб.
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h3 className="mb-5 font-semibold">Доставка</h3>
            <dl className="space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <dt className="text-sm text-stone-500">Адрес</dt>
                <dd className="max-w-[200px] text-right text-sm">
                  {user.address ?? "Заполните адрес в профиле"}
                </dd>
              </div>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <dt className="text-sm text-stone-500">Стоимость</dt>
                <dd className="text-sm">500 руб.</dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 className="mb-5 font-semibold">Итого</h3>
            <dl className="space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <dt className="text-sm text-stone-500">Скидка</dt>
                <dd className="max-w-[200px] text-right text-sm">0%</dd>
              </div>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <dt className="text-sm text-stone-500">Стоимость</dt>
                <dd className="inline-flex items-center gap-2 text-sm">
                  {cart?.products.reduce(
                    (sum, product) =>
                      sum + product.product.price * product.count,
                    0,
                  )}{" "}
                  руб.
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
