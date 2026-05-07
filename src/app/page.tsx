import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { getCities, getTours } from '@/lib/groq-new'; // Updated import
import HomeContent from './HomeContent';

// Включаем ISR: перегенерировать страницу каждые 3600 секунд (1 час)
export const revalidate = 3600;

export default async function Home() {
  // Server-side data fetching using Sanity
  const cities = await getCities();
  const tours = await getTours();

  return (
    <>
      <Header />
      <HomeContent cities={cities} tours={tours} />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}