'use client';

import { useState, useEffect } from 'react';

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Show popup after 20 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 20000);
    
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
         onClick={() => setIsOpen(false)}>
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
           onClick={e => e.stopPropagation()}>
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
        
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Need help planning your trip to Azerbaijan?
        </h3>
        <p className="text-gray-600 mb-6">
          Get personalized recommendations and exclusive offers!
        </p>
        
        <form className="space-y-4" onSubmit={(e) => {
          e.preventDefault();
          alert('Thank you! We will contact you soon.');
          setIsOpen(false);
        }}>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00AA6C] focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#00AA6C] text-white py-3 rounded-lg font-medium hover:bg-[#007A52] transition"
          >
            Get Free Quote
          </button>
        </form>
        
        <p className="text-xs text-gray-500 text-center mt-4">
          No spam, unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
