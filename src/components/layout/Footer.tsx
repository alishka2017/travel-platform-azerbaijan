'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';

interface Settings {
  contacts: {
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
    workingHours: string;
    social: {
      instagram: string;
      facebook: string;
      telegram: string;
    };
  };
}

export default function Footer() {
  const { language } = useLanguage();
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    fetch('/content/settings.json')
      .then((res) => res.json())
      .then((data) => setSettings(data))
      .catch((err) => console.error('Failed to load settings', err));
  }, []);

  const t = {
    en: {
      brandDesc: "Your complete guide to Azerbaijan. Discover hotels, experiences, and restaurants.",
      destinations: "Destinations",
      allCities: "All Cities",
      thingsToDo: "Things to Do",
      allTours: "All Tours",
      attractions: "Attractions",
      transfers: "Transfers",
      restaurants: "Restaurants",
      travelInfo: "Travel Info",
      visa: "Visa Info",
      itineraries: "Itineraries",
      blog: "Blog",
      about: "About Us",
      contact: "Contact Us",
      rights: "All rights reserved."
    },
    ru: {
      brandDesc: "Ваше полное руководство по Азербайджану. Откройте для себя отели, впечатления и рестораны.",
      destinations: "Направления",
      allCities: "Все города",
      thingsToDo: "Что делать",
      allTours: "Все туры",
      attractions: "Достопримечательности",
      transfers: "Трансферы",
      restaurants: "Рестораны",
      travelInfo: "Информация для путешественников",
      visa: "Виза",
      itineraries: "Маршруты",
      blog: "Блог",
      about: "О нас",
      contact: "Контакты",
      rights: "Все права защищены."
    }
  };

  const currentText = t[language];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#00AA6C] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-white">Smartholiday.az</span>
            </Link>
            <p className="text-sm text-gray-400">
              {currentText.brandDesc}
            </p>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">{currentText.destinations}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/cities" className="hover:text-[#00AA6C] transition">{currentText.allCities}</Link></li>
              <li><Link href="/cities/baku" className="hover:text-[#00AA6C] transition">Baku</Link></li>
              <li><Link href="/cities/sheki" className="hover:text-[#00AA6C] transition">Sheki</Link></li>
              <li><Link href="/cities/gabala" className="hover:text-[#00AA6C] transition">Gabala</Link></li>
              <li><Link href="/cities/ganja" className="hover:text-[#00AA6C] transition">Ganja</Link></li>
            </ul>
          </div>

          {/* Things to Do */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">{currentText.thingsToDo}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tours" className="hover:text-[#00AA6C] transition">{currentText.allTours}</Link></li>
              <li><Link href="/attractions" className="hover:text-[#00AA6C] transition">{currentText.attractions}</Link></li>
              <li><Link href="/transfers" className="hover:text-[#00AA6C] transition">{currentText.transfers}</Link></li>
              <li><Link href="/restaurants" className="hover:text-[#00AA6C] transition">{currentText.restaurants}</Link></li>
            </ul>
          </div>

          {/* Travel Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">{currentText.travelInfo}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/visa" className="hover:text-[#00AA6C] transition">{currentText.visa}</Link></li>
              <li><Link href="/itineraries" className="hover:text-[#00AA6C] transition">{currentText.itineraries}</Link></li>
              <li><Link href="/blog" className="hover:text-[#00AA6C] transition">{currentText.blog}</Link></li>
              <li><Link href="/about" className="hover:text-[#00AA6C] transition">{currentText.about}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">{currentText.contact}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-[#00AA6C] transition">{currentText.contact}</Link></li>
              <li><a href={`https://wa.me/${settings?.contacts.whatsapp.replace(/\D/g, '')}`} className="hover:text-[#00AA6C] transition">WhatsApp</a></li>
              <li className="text-gray-400">{settings?.contacts.phone}</li>
              <li className="text-gray-400">{settings?.contacts.email}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Smartholiday.az. {currentText.rights}</p>
        </div>
      </div>
    </footer>
  );
}
