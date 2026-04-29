import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Azerbaijan Travel Guide | Discover Cities, Attractions, Tours & Restaurants",
  description: "Your complete travel guide to Azerbaijan. Explore Baku, Sheki, Gabala, and more. Discover UNESCO sites, tours, restaurants, hotels, and hidden gems in the Land of Fire.",
  keywords: ["Azerbaijan travel", "Baku guide", "Azerbaijan tours", "Things to do in Azerbaijan", "Azerbaijan attractions", "Sheki city", "Gabala resort", "Caucasus travel"],
  authors: [{ name: "Azerbaijan Travel Platform" }],
  metadataBase: new URL("https://azerbaijantravel.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Azerbaijan Travel Guide | Discover the Land of Fire",
    description: "Explore ancient history, modern architecture, and natural wonders in Azerbaijan. Plan your perfect trip with our comprehensive guides.",
    url: "https://azerbaijantravel.com",
    siteName: "Azerbaijan Travel Platform",
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
    title: "Azerbaijan Travel Guide | Discover the Land of Fire",
    description: "Your complete guide to exploring Azerbaijan's cities, attractions, tours, and restaurants.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
