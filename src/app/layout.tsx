import './globals.css';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

export const metadata = {
  title: 'ШАЙН',
  description: 'Ателье сайт',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="h-full">
      <body className="flex flex-col h-full">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
