import { PropsWithChildren } from "react";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import { getServerAuthSession } from "@/server/auth";

export default async function MainLayout({ children }: PropsWithChildren) {
  const session = await getServerAuthSession();

  return (
    <div className="flex h-full flex-col">
      <Header session={session} />
      {children}
      <Footer session={session} />
    </div>
  );
}
