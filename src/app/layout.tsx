import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Smartholiday.az | Smart Holiday Travel - Azerbaijan Guide',
  description: 'Your complete guide to Azerbaijan. Discover hotels, experiences, restaurants, and tours.',
  keywords: 'Azerbaijan, Baku, travel, tours, hotels, restaurants, things to do',
  authors: [{ name: 'Smartholiday.az' }],
  creator: 'Smartholiday.az',
  publisher: 'Smartholiday.az',
  openGraph: {
    title: 'Smartholiday.az | Azerbaijan Travel Guide',
    description: 'Plan your perfect trip to Azerbaijan with local experts',
    url: 'https://smartholidayaz.netlify.app',
    siteName: 'Smartholiday.az',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1574505338056-7718c71c2c35?w=1200',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_AZ',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Smartholiday.az",
    "url": "https://smartholidayaz.netlify.app",
    "description": "Your complete guide to Azerbaijan. Discover hotels, experiences, restaurants, and tours.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nizami str. 100",
      "addressLocality": "Baku",
      "addressCountry": "Azerbaijan",
      "postalCode": "AZ1026"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+994 12 493 62 42",
        "contactType": "customer service"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+994 70 216 66 66",
        "contactType": "WhatsApp"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
