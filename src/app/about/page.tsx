'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { language } = useLanguage();

  const t = {
    en: {
      title: "About Smartholiday.az",
      subtitle: "Your trusted partner for exploring Azerbaijan",
      whoWeAre: "Who We Are",
      whoWeAreText: "We are fully licensed and registered with the Azerbaijan Tourism Board. Our license number: TR-2014-00123",
      mission: "Our Mission",
      missionText: "To provide travelers with authentic, curated experiences that showcase the beauty and culture of Azerbaijan.",
      team: "Meet Our Team",
      ready: "Ready to explore Azerbaijan?",
      getInTouch: "Get in Touch"
    },
    ru: {
      title: "О Smartholiday.az",
      subtitle: "Ваш надежный партнер для путешествий по Азербайджану",
      whoWeAre: "Кто мы",
      whoWeAreText: "Мы полностью лицензированы и зарегистрированы при Агентстве по туризму Азербайджана. Наш номер лицензии: TR-2014-00123",
      mission: "Наша миссия",
      missionText: "Предоставлять путешественникам подлинные, курируемые впечатления, демонстрирующие красоту и культуру Азербайджана.",
      team: "Наша команда",
      ready: "Готовы исследовать Азербайджан?",
      getInTouch: "Связаться с нами"
    }
  };

  const text = t[language as 'en' | 'ru'] || t.ru;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#00AA6C]">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">О нас</span>
        </nav>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {text.title}
          </h1>
          <p className="text-gray-600 text-lg">
            {text.subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{text.whoWeAre}</h2>
            <p className="text-gray-600 mb-6">{text.whoWeAreText}</p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{text.mission}</h2>
            <p className="text-gray-600">{text.missionText}</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{text.team}</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#00AA6C] rounded-full flex items-center justify-center text-white font-bold">
                  E
                </div>
                <div>
                  <h3 className="font-semibold">Elman M.</h3>
                  <p className="text-sm text-gray-500">Founder & CEO</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#00AA6C] rounded-full flex items-center justify-center text-white font-bold">
                  L
                </div>
                <div>
                  <h3 className="font-semibold">Leyla A.</h3>
                  <p className="text-sm text-gray-500">Head of Operations</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#00AA6C] rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div>
                  <h3 className="font-semibold">Rashid T.</h3>
                  <p className="text-sm text-gray-500">Travel Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="bg-[#00AA6C] rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {text.ready}
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#00AA6C] px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition"
          >
            {text.getInTouch}
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}