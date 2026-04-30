
'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Link from 'next/link';

const transferClasses = [
  {
    id: 'economy',
    name: 'Economy',
    description: 'Standard sedans for budget-friendly travel.',
    capacity: '1-3 passengers',
    price: 'Starting from 15 AZN',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop',
    features: ['Air Conditioning', 'Standard Luggage', 'Professional Driver']
  },
  {
    id: 'comfort',
    name: 'Comfort',
    description: 'Premium sedans for a more relaxed journey.',
    capacity: '1-3 passengers',
    price: 'Starting from 25 AZN',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop',
    features: ['Leather Seats', 'Extra Legroom', 'Wi-Fi', 'Bottled Water']
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Luxury vehicles for corporate or special occasions.',
    capacity: '1-3 passengers',
    price: 'Starting from 40 AZN',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop',
    features: ['Luxury Sedan', 'Meeting Ready', 'Privacy Partition', 'Champagne Service']
  },
  {
    id: 'vip',
    name: 'VIP',
    description: 'Executive class with maximum comfort and service.',
    capacity: '1-3 passengers',
    price: 'Starting from 60 AZN',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop',
    features: ['Mercedes S-Class', 'Chauffeur', 'Airport Meet & Greet', 'All Amenities']
  },
  {
    id: 'group',
    name: 'Group Transport',
    description: 'Minivans and buses for families and large groups.',
    capacity: 'Up to 20 passengers',
    price: 'Starting from 50 AZN',
    image: 'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=800&auto=format&fit=crop',
    features: ['Minivan/Bus', 'Luggage Space', 'Group Friendly', 'Custom Itineraries']
  }
];

export default function TransfersPage() {
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
                    <span className="text-[#00AA6C] font-bold">{cls.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{cls.description}</p>
                  <p className="text-gray-500 text-xs mb-4">Capacity: {cls.capacity}</p>
                  <ul className="mb-6 space-y-1">
                    {cls.features.map((feature) => (
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
