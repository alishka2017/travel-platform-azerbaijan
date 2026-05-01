import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | Smartholiday.az - Local Azerbaijan Travel Experts",
  description: "Meet our team of local travel experts based in Baku. Licensed tour operators with 10+ years of experience.",
};

export default function AboutPage() {
  const stats = [
    { number: "5000+", label: "Travelers Served" },
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Destinations" },
    { number: "98%", label: "Happy Customers" }
  ];

  const team = [
    {
      name: "Elman M.",
      role: "Founder & CEO",
      bio: "Local expert with 15 years in tourism. Born and raised in Baku.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      name: "Leyla A.",
      role: "Tour Manager",
      bio: "Specializes in cultural tours and historical sites.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
    },
    {
      name: "Rashid T.",
      role: "Transfer Coordinator",
      bio: "Ensures seamless transportation for all our guests.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
    }
  ];

  const reviews = [
    {
      text: "Amazing experience! The team organized a perfect 7-day tour covering Baku, Sheki, and Gabala. Everything was well planned and our guide was knowledgeable.",
      author: "Maria from Italy",
      rating: 5
    },
    {
      text: "Best transfer service in Azerbaijan! The driver was professional, the car was clean, and we arrived on time. Highly recommended!",
      author: "John from UK",
      rating: 5
    },
    {
      text: "The food tour was incredible! We discovered authentic Azerbaijani cuisine and visited local markets. Our guide shared fascinating stories about each dish.",
      author: "Sarah from USA",
      rating: 5
    },
    {
      text: "Excellent organization for our group of 12. The transfers were smooth, hotels were great, and the itinerary was perfectly balanced.",
      author: "Thomas from Germany",
      rating: 5
    },
    {
      text: "The hidden gems tour showed us parts of Azerbaijan we never would have discovered on our own. Truly unforgettable!",
      author: "Emma from Australia",
      rating: 5
    },
    {
      text: "Professional service from booking to drop-off. The team responded quickly to all our questions and made our trip stress-free.",
      author: "David from Canada",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#00AA6C] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Smartholiday.az</h1>
          <p className="text-xl text-green-100">
            Your trusted local travel experts in Azerbaijan since 2014
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-[#00AA6C]">{stat.number}</p>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-4">
                Smartholiday.az is a licensed tour operator based in the heart of Baku, Azerbaijan. 
                Founded in 2014, we have been helping travelers discover the beauty of our country for over a decade.
              </p>
              <p className="text-gray-600 mb-4">
                Our team consists of local experts who were born and raised in Azerbaijan. We know every corner, 
                every hidden gem, and every secret spot that makes our country special.
              </p>
              <p className="text-gray-600">
                We are fully licensed and registered with the Azerbaijan Tourism Board. 
                Our license number: TR-2014-00123
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1574505338056-7718c71c2c35?w=600" 
                alt="Baku City" 
                className="rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=600" 
                alt="Sheki" 
                className="rounded-lg shadow-md mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-[#00AA6C] font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What Our Travelers Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex text-yellow-400 mb-3">
                  {'★'.repeat(review.rating)}
                </div>
                <p className="text-gray-600 mb-4">"{review.text}"</p>
                <p className="text-gray-800 font-medium">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#00AA6C] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to explore Azerbaijan?</h2>
          <p className="text-xl text-green-100 mb-6">
            Contact us today and let our local experts plan your perfect trip
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#00AA6C] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
