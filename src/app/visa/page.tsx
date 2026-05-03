
export default function VisaPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        

        <main className="pt-24 pb-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
                Azerbaijan Visa Information
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Complete guide to visa requirements, e‑visa application, and entry rules for Azerbaijan.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* E‑Visa */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h2 className="text-2xl font-semibold mb-4 text-primary">E‑Visa (Recommended)</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Eligibility:</strong> Citizens of 95+ countries (including USA, EU, UK, UAE, Turkey)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Cost:</strong> $25 USD (standard), $50 USD (urgent 3‑hours)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Processing:</strong> 3 business days (standard), 3‑hours (urgent)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Validity:</strong> 90 days from issue, 30‑day stay</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="https://evisa.gov.az/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition"
                  >
                    Apply for E‑Visa
                  </a>
                </div>
              </div>

              {/* Visa on Arrival */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Visa on Arrival</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Airports:</strong> Baku Heydar Aliyev Airport (GYD) only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Eligibility:</strong> Limited countries (Turkey, Qatar, UAE, Saudi Arabia, Oman, Bahrain, Kuwait, Iran)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Cost:</strong> $30 USD (cash USD or AZN)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 font-bold">⚠</span>
                    <span><strong>Warning:</strong> Long queues, not recommended unless eligible</span>
                  </li>
                </ul>
              </div>

              {/* Requirements */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Required Documents</h2>
                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                  <li>Passport valid for at least 6 months after arrival</li>
                  <li>Digital passport‑style photo (white background)</li>
                  <li>Hotel booking confirmation (for tourists)</li>
                  <li>Return flight ticket (not mandatory but recommended)</li>
                  <li>Travel insurance (recommended for medical coverage)</li>
                </ol>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Tip:</strong> Apply for e‑visa at least 5 days before travel. Double‑check name spelling matches passport exactly.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                {[
                  { q: "Can I extend my visa in Azerbaijan?", a: "Yes, but you must apply through the State Migration Service at least 5 days before expiry. Extension fee is $150 AZN." },
                  { q: "Do children need a separate visa?", a: "Yes, each traveler regardless of age requires their own e‑visa." },
                  { q: "What if I make a mistake in my e‑visa application?", a: "Contact evisa support via email: support@evisa.gov.az. Do not submit duplicate applications." },
                  { q: "Is vaccination certificate required?", a: "No, as of 2025 no COVID‑19 restrictions for entry." },
                  { q: "Can I enter via land border with e‑visa?", a: "Yes, e‑visa is valid at all international checkpoints (air, land, sea)." },
                ].map((faq, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Links */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Official Resources</h3>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="https://evisa.gov.az/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary-600">E‑Visa Portal</a>
                <a href="https://migration.gov.az/en" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary-600">State Migration Service</a>
                <a href="https://www.mfa.gov.az/en" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary-600">Ministry of Foreign Affairs</a>
                <a href="https://www.heydaraliyevairport.com/en" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary-600">Baku Airport</a>
              </div>
            </div>
          </div>
        </main>

        
      </div>
    </>
  );
}
