
import React from 'react';
import Script from 'next/script';

export default function TestPage() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ test: 'data' }) }}
      />
      <div>Test Page</div>
    </>
  );
}
