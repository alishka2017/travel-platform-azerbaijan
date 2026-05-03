import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { getTransfers } from '@/lib/content';

export default function TransfersPage() {
  const transferClasses = getTransfers();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero */}
      <section className="bg-[#00AA6C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Premium Transfers in Azerbaijan</h1>
          <p className="text-lg opacity-90">Luxury, comfort, and reliability for every journey.</p>
        </div>
      </section>

      {/* Transfer Classes */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transferClasses.map((cls) => (
              <div key={cls.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <img src={cls.image} alt={cls.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{cls.name}</h3>
                    <span className="text-[#00AA6C] font-bold">{cls.priceFrom}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{cls.description}</p>
                  <p className="text-gray-500 text-xs mb-4">Capacity: {cls.capacity}</p>
                  <ul className="mb-6 space-y-1">
                    {cls.includes.map((feature) => (
                      <li key={feature} className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-[#00AA6C] rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={`/contact?subject=Transfer Booking - ${cls.name}`}
                    className="block w-full text-center bg-[#00AA6C] text-white py-3 rounded-lg font-medium hover:bg-[#007A52] transition"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
