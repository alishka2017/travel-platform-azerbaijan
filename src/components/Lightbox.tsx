'use client';

import { useState, useEffect } from 'react';

interface LightboxProps {
  images: string[];
  onClose: () => void;
  initialIndex?: number;
}

export default function Lightbox({ images, onClose, initialIndex = 0 }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-10"
      >
        &times;
      </button>
      
      <button 
        onClick={handlePrev} 
        className="absolute left-4 text-white text-4xl hover:text-gray-300 p-2"
      >
        &#10094;
      </button>
      
      <div className="max-w-4xl max-h-[90vh]">
        <img 
          src={images[currentIndex]} 
          alt={`Image ${currentIndex + 1}`}
          className="max-w-full max-h-[85vh] object-contain"
        />
        <div className="text-center text-white mt-2">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      
      <button 
        onClick={handleNext} 
        className="absolute right-4 text-white text-4xl hover:text-gray-300 p-2"
      >
        &#10095;
      </button>
    </div>
  );
}