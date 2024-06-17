import "./globals.css";

import { Noto_Sans_Display, Poppins } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "@/trpc/client";
import clsx from "clsx";
import { Toaster } from "@/shared/ui/components/sonner";

const notoSansDisplay = Noto_Sans_Display({
  weight: ["400", "600", "700"],
  subsets: ["cyrillic", "latin"],
});

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={clsx("h-full", notoSansDisplay.className)}>
      <body className="h-full">
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
        <Toaster />
      </body>
    </html>
  );
}

export const metadata = {
  title: "SHINE",
  description: "Ателье сайт",
};
