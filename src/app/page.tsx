import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { getCitiesSync, getToursSync } from '@/lib/content';
import HomeContent from './HomeContent'; // Импортируем клиентский компонент

export default function Home() {
  // Server-side data fetching
  const cities = getCitiesSync();
  const tours = getToursSync();

  return (
    <>
      <Header />
      <HomeContent cities={cities} tours={tours} />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
