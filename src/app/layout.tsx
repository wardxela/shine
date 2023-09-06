import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="h-full">
      <body className="h-full">{children}</body>
    </html>
  );
}

export const metadata = {
  title: "ШАЙН",
  description: "Ателье сайт",
};
