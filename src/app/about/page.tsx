
'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const teamMembers = [
  {
    name: 'Elman M.',
    role: 'Founder & Lead Guide',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    bio: 'Local expert with 15+ years of experience in Azerbaijani tourism.'
  },
  {
    name: 'Leyla A.',
    role: 'Customer Relations',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    bio: 'Dedicated to ensuring every traveler has a seamless experience.'
  },
  {
    name: 'Rashid T.',
    role: 'Transport Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    bio: 'Managing our fleet of premium vehicles for safe and comfortable travel.'
  }
];

const stats = [
  { number: '10,000+', label: 'Tourists Served' },
  { number: '15+', label: 'Years Experience' },
  { number: '50+', label: 'Destinations' },
  { number: '4.9', label: 'Average Rating' }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero */}
      <section className="bg-white py-16 border-b">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Smartholiday.az</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are a team of passionate local experts based in Baku, dedicated to showing travelers the real Azerbaijan. 
            From the bustling streets of the capital to the serene peaks of the Caucasus Mountains, we craft experiences 
            that go beyond the ordinary.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#00AA6C] text-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold mb-1">{stat.number}</div>
              <div className="opacity-80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12 text-gray-800">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-md overflow-hidden text-center">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mt-8 object-cover border-4 border-[#00AA6C]" />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                  <p className="text-[#00AA6C] text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12 text-gray-800">What Our Travelers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { text: "Amazing experience! The guide was knowledgeable and the car was very comfortable. Highly recommend Smartholiday.", author: "James, USA" },
              { text: "Everything was perfectly organized from airport pickup to the tour of Sheki. Great service!", author: "Sophie, France" },
              { text: "Best way to see Azerbaijan. We loved the hidden gems they showed us.", author: "Marco, Italy" },
              { text: "Professional, reliable, and friendly. Will definitely book again.", author: "Anna, Germany" }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex text-[#00AA6C] mb-3">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-700 italic mb-4">"{review.text}"</p>
                <p className="text-gray-500 font-medium">— {review.author}</p>
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
