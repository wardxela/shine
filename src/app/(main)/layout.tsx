import { PropsWithChildren } from "react";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-full flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
