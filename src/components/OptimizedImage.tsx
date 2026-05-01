'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Convert Unsplash URLs to optimized versions
  let optimizedSrc = src;
  if (src.includes('unsplash.com')) {
    optimizedSrc = src.replace('w=800', 'w=1200').replace('w=1280', 'w=1200');
  }

  return (
    <div className={'relative ' + className + ' ' + (isLoaded ? '' : 'bg-gray-200 animate-pulse')}>
      <Image
        src={optimizedSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
        priority={priority}
        onLoadingComplete={() => setIsLoaded(true)}
        quality={85}
      />
    </div>
  );
}

