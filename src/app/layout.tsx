
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Smartholiday.az | Smart Holiday Travel - Azerbaijan Guide',
  description: 'Discover Azerbaijan with Smartholiday.az. Tours, transfers, attractions, restaurants, and travel guides for the Land of Fire.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
