import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Script from "next/script";
import { generateLocalBusinessSchema, generateWebSiteSchema } from "@/lib/schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smartholiday.az | Smart Holiday Travel - Azerbaijan Guide",
  description: "Your complete travel guide to Azerbaijan with Smartholiday.az. Explore Baku, Sheki, Gabala, and more. Discover tours, restaurants, hotels, and hidden gems.",
  keywords: ["Smartholiday.az", "Azerbaijan travel", "Baku guide", "Azerbaijan tours", "Smart Holiday Travel", "Azerbaijan attractions"],
  authors: [{ name: "Smartholiday.az" }],
  metadataBase: new URL("https://smartholiday.az"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Smartholiday.az | Smart Holiday Travel",
    description: "Explore ancient history, modern architecture, and natural wonders in Azerbaijan with Smartholiday.az.",
    url: "https://smartholiday.az",
    siteName: "Smartholiday.az",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Baku_modern_skyline.jpg/1280px-Baku_modern_skyline.jpg",
        width: 1280,
        height: 720,
        alt: "Baku skyline at sunset with Flame Towers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smartholiday.az | Smart Holiday Travel",
    description: "Your complete guide to exploring Azerbaijan's cities, attractions, tours, and restaurants with Smartholiday.az.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Baku_modern_skyline.jpg/1280px-Baku_modern_skyline.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteSchema())
          }}
          strategy="beforeInteractive"
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema())
          }}
          strategy="beforeInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}