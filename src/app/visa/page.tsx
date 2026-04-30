import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function VisaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Azerbaijan Visa Information
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete guide to visa requirements for visiting Azerbaijan. Check if you need a visa, apply for e‑Visa, or get visa on arrival.
          </p>
        </div>

        {/* Visa Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Visa-free countries */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-green-500 text-white p-4">
              <h2 className="text-xl font-bold">Visa‑Free</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Citizens of the following countries can visit Azerbaijan without a visa:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Turkey (90 days)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Georgia (90 days)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Russia (90 days)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Kazakhstan (30 days)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Ukraine (90 days)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Belarus (90 days)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Kyrgyzstan (90 days)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Moldova (90 days)
                </li>
              </ul>
              <Link 
                href="https://www.mfa.gov.az/en/consular/visa-information" 
                className="inline-block mt-4 text-green-600 hover:text-green-700 font-medium"
                target="_blank"
              >
                View all visa‑free countries →
              </Link>
            </div>
          </div>

          {/* eVisa countries */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-blue-500 text-white p-4">
              <h2 className="text-xl font-bold">e‑Visa (Electronic Visa)</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Citizens of 95+ countries can apply for an e‑Visa online. Processing time: 3 business days.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> United States
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> United Kingdom
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> European Union
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Canada
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Australia
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Japan
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> South Korea
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> China (30 days)
                </li>
              </ul>
              <Link 
                href="https://evisa.gov.az/" 
                className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium"
                target="_blank"
              >
                Apply for e‑Visa online →
              </Link>
            </div>
          </div>

          {/* Visa on Arrival */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-orange-500 text-white p-4">
              <h2 className="text-xl font-bold">Visa on Arrival</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Available at Heydar Aliyev International Airport (GYD) for citizens of selected countries.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Qatar (30 days)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Kuwait (30 days)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Oman (30 days)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Bahrain (30 days)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Saudi Arabia (30 days)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> United Arab Emirates (30 days)
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="inline-block mt-4 text-orange-600 hover:text-orange-700 font-medium"
              >
                Check requirements & fees →
              </Link>
            </div>
          </div>
        </div>

        {/* Visa Requirements Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Visa Requirements & Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Required Documents</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Passport valid for at least 6 months beyond your stay</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Completed visa application form</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Passport‑size photo (3×4 cm, white background)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Hotel reservation confirmation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Return flight ticket</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Travel insurance covering the entire stay</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Processing Time & Fees</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>e‑Visa processing: 3‑5 business days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>e‑Visa fee: USD 20 (single entry, 30 days)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Urgent e‑Visa (3 hours): USD 50</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Visa on arrival fee: USD 25 (varies by nationality)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Visa validity: 30–90 days, single/multiple entry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Extension possible at State Migration Service in Baku</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Need Help with Your Visa?
          </h2>
          <p className="mb-6 text-blue-100">
            Our travel experts can assist you with visa applications, document preparation, and fast‑track processing.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Contact Us for Assistance
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}