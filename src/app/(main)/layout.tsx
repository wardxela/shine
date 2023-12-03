import { PropsWithChildren } from "react";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";

export default async function MainLayout({ children }: PropsWithChildren) {
  const sessionPromise = getServerAuthSession();
  const cartCountPromise = api.cart.count.query();

  const [session, cartCount] = await Promise.all([
    sessionPromise,
    cartCountPromise,
  ]);

  return (
    <div className="flex h-full flex-col">
      <Header
        session={session}
        cartCount={
          cartCount ? (
            <div className="absolute -bottom-2 -right-2 grid h-4 w-4 place-items-center rounded-full bg-red-600 text-[9px] font-semibold text-white">
              {cartCount}
            </div>
          ) : null
        }
      />
      {children}
      <Footer session={session} />
    </div>
  );
}
