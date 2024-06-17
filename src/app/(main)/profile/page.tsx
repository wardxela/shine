import Image from "next/image";

import avatarSrc from "./_img/AVATAR.jpg";
import whiteTShirtSrc from "./_img/white.jpg";
import { ChangePasswordForm, UpdateUserInfoForm } from "@/features/user";
import { api } from "@/trpc/server";

export default async function ProfilePage() {
  const user = await api.user.me.query();

  return (
    <main className="py-10 pb-20">
      <div className="container mb-20 flex flex-col gap-12 md:flex-row md:gap-16">
        <div className="aspect-square w-32 self-start md:w-72">
          <Image
            src={avatarSrc}
            alt="Твой аватар"
            className="aspect-square h-full w-full object-cover"
          />
        </div>
        <div className="max-w-xl flex-grow">
          <h1 className="mb-6 text-2xl font-bold">Личный кабинет</h1>
          <div className="space-y-8">
            <UpdateUserInfoForm user={user} />
            <ChangePasswordForm />
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="mb-10 text-xl font-semibold sm:mb-12 lg:mb-14">
          История покупок
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-20">
          <ProductInHistory />
          <ProductInHistory />
          <ProductInHistory />
          <ProductInHistory />
          <ProductInHistory />
          <ProductInHistory />
        </div>
      </div>
    </main>
  );
}

function ProductInHistory() {
  return (
    <article className="grid grid-cols-[180px,1fr] gap-4">
      <div className="relative aspect-square">
        <Image
          src={whiteTShirtSrc}
          alt="Product"
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start gap-3">
        <h6 className="font-semibold">1x Футболка Gucci</h6>
        <p className="text-sm text-stone-700">№ 21836489172978912</p>
        <time className="font-semibold text-stone-700">20 марта 2023</time>
        <button className="text-sm text-amber-600">Подробнее</button>
        <div className="ml-auto mt-auto text-2xl font-bold text-black">99$</div>
      </div>
    </article>
  );
}
