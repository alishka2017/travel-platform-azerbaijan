"use client";

import React from 'react';

export default function WhatsAppButton() {
  const phoneNumber = "+994702166666";
  const message = "Hello! I'm interested in traveling to Azerbaijan. Can you help me plan my trip?";
  
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full shadow-2xl hover:bg-green-700 transition-all duration-300 hover:scale-110 hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-green-300"
      aria-label="Contact us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="w-8 h-8"
        fill="currentColor"
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.35.4 0 0 0-36.4 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0-12.8-13.7 0 0 0 0 0 0 0 0 0 0 0 0 0-20.5-6.3-30.5-10.1-34.9-6.5-5-11.9-5.6-16.6-5.8-4.8-.2-8.7-.2-13.5-.2-4.8 0-12.7 1.6-19.3 8.2-6.6 6.6-25.2 24.5-25.2 59.8 0 35.3 25.6 69.4 29.2 74.2 3.6 4.8 50.6 77.2 123.6 106.8 73 29.6 73 19.8 86.2 18.6 13.2-1.2 42.8-17.4 48.8-34.2 6-16.8 6-31.2 4.2-34.2-1.8-3-6.6-4.8-12-7.4z" />
      </svg>
    </button>
  );
}