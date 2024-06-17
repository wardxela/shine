import Image from "next/image";

import avatar from "./_img/AVATAR.jpg";
import { ChangePasswordForm, UpdateUserInfo } from "@/features/user";

type ProfilePageProps = {
  searchParams: {
    updateInfoError?: string;
    changePasswordError?: string;
  };
};

export default function ProfilePage({ searchParams }: ProfilePageProps) {
  return (
    <main className="py-10 pb-20">
      <div className="container mb-20 grid gap-12 md:grid-cols-[3fr,7fr] md:gap-24">
        <div className="relative aspect-square w-full max-w-xs md:ml-auto">
          <Image
            src={avatar}
            alt="Твой аватар"
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
        </div>
        <div className="max-w-xl">
          <h1 className="mb-10 text-3xl font-bold">Личный кабинет</h1>
          <div className="mb-10">
            <UpdateUserInfo error={searchParams.updateInfoError} />
          </div>
          <ChangePasswordForm error={searchParams.changePasswordError} />
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
          src={""}
          alt=""
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
