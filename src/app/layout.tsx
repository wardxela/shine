import "./globals.css";

import { Open_Sans } from "next/font/google";
import { cookies } from "next/headers";
import { clsx } from "@/shared/ui/clsx";

import { TRPCReactProvider } from "@/trpc/client";

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["cyrillic", "latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={clsx("h-full", openSans.className)}>
      <body className="h-full">
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: "ШАЙН",
  description: "Ателье сайт",
};
