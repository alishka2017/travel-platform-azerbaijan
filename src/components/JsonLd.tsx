
'use client';

import Script from 'next/script';

interface JsonLdProps {
  data: object;
}

const JsonLd = ({ data }: JsonLdProps) => {
  return (
    <Script
      strategy="afterInteractive"
      type="application/ld+json"
      id="json-ld"
    >
      {JSON.stringify(data)}
    </Script>
  );
};

export default JsonLd;
