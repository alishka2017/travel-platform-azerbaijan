import Link from 'next/link';
import Header from '@/components/layout/Header';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Footer from '@/components/layout/Footer';
import { getToursSync } from '@/lib/content-new';
import { HeartButton } from '@/components/HeartButton';
import { Metadata } from 'next';
import ToursContent from './ToursContent';

export const metadata: Metadata = {
  title: "Что делать в Азербайджане | Smartholiday.az",
  description: "Откройте для себя лучшие туры и мероприятия в Азербайджане.",
};

export default function ToursPage() {
  const tours = getToursSync();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ToursContent tours={tours} />
      <Footer />
    </div>
  );
}