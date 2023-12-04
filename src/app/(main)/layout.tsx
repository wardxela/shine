import { PropsWithChildren } from "react";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";

export default async function MainLayout({ children }: PropsWithChildren) {
  const session = await getServerAuthSession();

  return (
    <div className="flex h-full flex-col">
      <Header session={session} cartCount={<CartCount isAuth={!!session} />} />
      {children}
      <Footer session={session} />
    </div>
  );
}

async function CartCount({ isAuth }: { isAuth: boolean }) {
  if (!isAuth) {
    return null;
  }

  const cartCount = await api.cart.count.query();

  if (!cartCount) {
    return null;
  }

  return (
    <div className="absolute -bottom-2 -right-2 grid h-4 w-4 place-items-center rounded-full bg-red-600 text-[9px] font-semibold text-white">
      {cartCount}
    </div>
  );
}
