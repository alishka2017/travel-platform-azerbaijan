'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { language } = useLanguage();
  
  const t = {
    en: {
      title: "Contact Us",
      description: "Have questions about your trip to Azerbaijan? We're here to help!",
      getInTouch: "Get in Touch",
      phone: "Phone",
      email: "Email",
      address: "Address",
      sendMessage: "Send us a Message",
      nameLabel: "Name",
      namePlaceholder: "Your Name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      messageLabel: "Message",
      messagePlaceholder: "How can we help you?",
      sendButton: "Send Message"
    },
    ru: {
      title: "Свяжитесь с нами",
      description: "Есть вопросы о вашей поездке в Азербайджан? Мы здесь, чтобы помочь!",
      getInTouch: "Связаться с нами",
      phone: "Телефон",
      email: "Email",
      address: "Адрес",
      sendMessage: "Отправить сообщение",
      nameLabel: "Имя",
      namePlaceholder: "Ваше имя",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      messageLabel: "Сообщение",
      messagePlaceholder: "Чем мы можем помочь?",
      sendButton: "Отправить сообщение"
    }
  };
  
  const text = t[language];
  
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        
        <main className="pt-24 pb-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
                {text.title}
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                {text.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {text.getInTouch}
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{text.phone}</p>
                        <p className="font-medium">+994 70 216 66 66 (WhatsApp)</p>
                        <p className="font-medium">+994 12 493 62 42</p>
                        <p className="font-medium">+994 12 493 62 52</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{text.email}</p>
                        <p className="font-medium">info@smartholiday.az</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{text.address}</p>
                        <p className="font-medium">Nizami str. 100, Baku, Azerbaijan AZ1026</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.060646144104!2d49.84281577644795!3d40.37702497143678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d977c7d1b8b%3A0x8d0a8e5b3b0a0a0a!2sNizami%20Street%20100%2C%20Baku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1746030400000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Smartholiday.az Location"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h2 className="text-xl font-semibold mb-6">{text.sendMessage}</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{text.nameLabel}</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder={text.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{text.emailLabel}</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder={text.emailPlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{text.messageLabel}</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                      placeholder={text.messagePlaceholder}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
                  >
                    {text.sendButton}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
        
      </div>
    </>
  );
}