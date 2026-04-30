
'use client';

import Script from 'next/script';

interface JsonLdScriptProps {
  data: object;
}

const JsonLdScript = ({ data }: JsonLdScriptProps) => {
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

export default JsonLdScript;
