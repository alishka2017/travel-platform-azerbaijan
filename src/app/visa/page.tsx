'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function VisaPage() {
  const { language } = useLanguage();

  const t = {
    en: {
      title: "Azerbaijan Visa Information",
      subtitle: "Everything you need to know about getting a visa for Azerbaijan",
      evisa: "E-Visa (Recommended)",
      evisaText: "Apply online for an electronic visa. Processing time: 3 business days.",
      arrivalVisa: "Visa on Arrival",
      arrivalVisaText: "Available at international airports for citizens of eligible countries.",
      requiredDocs: "Required Documents",
      docsList: ["Valid passport (6+ months)", "Completed application form", "Passport-sized photo", "Proof of accommodation"],
      faq: "Frequently Asked Questions",
      evisaLink: "Apply for E-Visa"
    },
    ru: {
      title: "Информация о визе в Азербайджан",
      subtitle: "Все, что вам нужно знать о получении визы в Азербайджан",
      evisa: "E-Виза (Рекомендуется)",
      evisaText: "Подайте заявку онлайн на электронную визу. Время обработки: 3 рабочих дня.",
      arrivalVisa: "Виза по прибытии",
      arrivalVisaText: "Доступна в международных аэропортах для гражданeligible стран.",
      requiredDocs: "Необходимые документы",
      docsList: ["Действительный паспорт (6+ месяцев)", "Заполненная форма заявки", "Фото паспортного формата", "Подтверждение бронирования"],
      faq: "Часто задаваемые вопросы",
      evisaLink: "Подать заявку на E-визу"
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
          <span className="text-gray-800">Виза</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {text.title}
          </h1>
          <p className="text-gray-600 text-lg">
            {text.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* E-Visa */}
          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#00AA6C]">
            <h2 className="text-xl font-bold text-gray-800 mb-3">{text.evisa}</h2>
            <p className="text-gray-600 mb-4">{text.evisaText}</p>
            <Link 
              href="https://evisa.gov.az/" 
              target="_blank"
              className="text-[#00AA6C] font-medium hover:underline"
            >
              {text.evisaLink} →
            </Link>
          </div>

          {/* Visa on Arrival */}
          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
            <h2 className="text-xl font-bold text-gray-800 mb-3">{text.arrivalVisa}</h2>
            <p className="text-gray-600">{text.arrivalVisaText}</p>
          </div>
        </div>

        {/* Required Documents */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-12">
          <h2 className="text-xl font-bold text-gray-800 mb-4">{text.requiredDocs}</h2>
          <ul className="space-y-2 text-gray-600">
            {text.docsList.map((doc, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00AA6C] rounded-full"></span>
                {doc}
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{text.faq}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">
                {language === 'ru' ? 'Можно ли продлить визу в Азербайджане?' : 'Can I extend my visa in Azerbaijan?'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'ru' ? 'Да, визу можно продлить в Миграционной службе.' : 'Yes, visas can be extended at the Migration Service.'}
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">
                {language === 'ru' ? 'Нужна ли детям отдельная виза?' : 'Do children need separate visas?'}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'ru' ? 'Да, дети вписываются в паспорт родителей или получают отдельную визу.' : 'Yes, children must be included in parents passport or get separate visa.'}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}