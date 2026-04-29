import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const guideSections = [
  {
    title: 'Best Time to Visit',
    icon: '🗓️',
    description: 'Azerbaijan has diverse climates, but generally the best times are spring and autumn.',
    content: [
      { title: 'Spring (April-June)', desc: 'Perfect for sightseeing with mild temperatures and blooming nature.' },
      { title: 'Summer (July-August)', desc: 'Hot in Baku, great for mountain resorts and Caspian beaches.' },
      { title: 'Autumn (September-October)', desc: 'Ideal for hiking and cultural exploration with comfortable weather.' },
      { title: 'Winter (November-March)', desc: 'Great for skiing in Gabala and Shahdag, cold in cities.' }
    ]
  },
  {
    title: 'Visa Information',
    icon: '🛂',
    description: 'Entry requirements vary by nationality.',
    content: [
      { title: 'Visa-Free Countries', desc: 'Russia, Turkey, Ukraine, Kazakhstan, and others enjoy visa-free access.' },
      { title: 'E-Visa', desc: 'Apply online through ASAN Visa system for most other nationalities.' },
      { title: 'Visa on Arrival', desc: 'Available for some countries at Baku Heydar Aliyev Airport.' },
      { title: 'Processing Time', desc: 'E-visa usually processed within 3-5 business days.' }
    ]
  },
  {
    title: 'Currency & Money',
    icon: '💰',
    description: 'Azerbaijani Manat (AZN) is the official currency.',
    content: [
      { title: 'Exchange Rate', desc: 'Approximately 1.7 AZN = 1 USD. Check current rates before traveling.' },
      { title: 'ATMs & Cards', desc: 'Widely available in cities. Visa and Mastercard accepted.' },
      { title: 'Cash vs Card', desc: 'Cards work in cities, but carry cash for rural areas and small shops.' },
      { title: 'Tipping', desc: 'Not mandatory, but 5-10% appreciated for good service.' }
    ]
  },
  {
    title: 'Safety Overview',
    icon: '🛡️',
    description: 'Azerbaijan is generally safe for tourists.',
    content: [
      { title: 'Overall Safety', desc: 'Low crime rates, safe for solo travelers and families.' },
      { title: 'Areas to Note', desc: 'Stay away from border areas with Armenia due to ongoing tensions.' },
      { title: 'Transport Safety', desc: 'Use licensed taxis or ride-sharing apps for safety.' },
      { title: 'Health', desc: 'No special vaccinations required for most travelers.' }
    ]
  },
  {
    title: 'Budget Guide',
    icon: '💵',
    description: 'Azerbaijan offers options for every budget.',
    content: [
      { title: 'Budget Travel ($30-50/day)', desc: 'Hostels, local transport, street food, free attractions.' },
      { title: 'Mid-Range ($70-120/day)', desc: 'Mid-range hotels, some tours, mix of local and tourist restaurants.' },
      { title: 'Luxury ($200+/day)', desc: '5-star hotels, private tours, fine dining experiences.' },
      { title: 'Money-Saving Tips', desc: 'Travel off-season, use local transport, eat where locals eat.' }
    ]
  }
];

const practicalInfo = [
  { title: 'Language', value: 'Azerbaijani (Russian and English widely understood)' },
  { title: 'Electricity', value: '220V, European-style plugs (Type C/F)' },
  { title: 'Time Zone', value: 'AZT (UTC+4)' },
  { title: 'Calling Code', value: '+994' },
  { title: 'Emergency Number', value: '112' }
];

export default function TravelGuidePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Azerbaijan Travel Guide</h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Everything you need to know before visiting Azerbaijan. 
              Practical tips, visa info, budget guide, and safety advice.
            </p>
          </div>
        </section>

        {/* Guide Sections */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {guideSections.map((section, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{section.icon}</span>
                      <h2 className="text-xl font-bold text-gray-800">{section.title}</h2>
                    </div>
                    <p className="text-gray-500 mt-2">{section.description}</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {section.content.map((item, i) => (
                        <div key={i} className="flex gap-3">
                          <span className="text-blue-600 mt-1">•</span>
                          <div>
                            <p className="font-medium text-gray-800">{item.title}:</p>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practical Info */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Quick Facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {practicalInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center">
                  <h3 className="font-semibold text-gray-800 mb-1">{info.title}</h3>
                  <p className="text-sm text-gray-600">{info.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-blue-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Start Planning Your Trip</h2>
            <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
              Now that you have all the essential information, 
              it's time to start planning your Azerbaijani adventure.
            </p>
            <Link href="/itineraries" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
              View Itineraries
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
