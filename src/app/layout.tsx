import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.awesomesnoballs.com"),
  title: "Awesome Snoballs | Maryland's #1 Mobile Snoball Truck | Summer 2026 Booking Open",
  description: "Book Maryland's #1 mobile snoball truck for summer 2026! Birthday parties, block parties, summer camps, festivals & school events. 24 flavors including Egg Custard. Serving MD, DC & DMV. Call 443-281-3331.",
  alternates: {
    canonical: "/",
  },
  keywords: ["snoball truck Maryland", "shaved ice truck Baltimore", "mobile snoball truck summer 2026", "birthday party snoball truck", "block party food truck Maryland", "summer camp food vendor Maryland", "Hawaiian shaved ice Baltimore", "egg custard snoball Baltimore", "snoball truck for hire DMV", "pool party food truck Maryland", "festival food vendor Maryland", "shaved ice truck near me", "book snoball truck Baltimore", "summer event food truck DC", "awesome snoballs"],
  openGraph: {
    title: "Awesome Snoballs | Maryland's #1 Mobile Snoball Truck",
    description: "Book Maryland's #1 mobile snoball truck for your event! Field days, birthday parties, festivals & more. 24+ flavors. Serving MD, DC & DMV.",
    type: "website",
    url: "https://www.awesomesnoballs.com",
    images: [{ url: "https://www.awesomesnoballs.com/event-truck.png", width: 1200, height: 630, alt: "Awesome Snoballs Truck" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Awesome Snoballs | Maryland's #1 Mobile Snoball Truck",
    description: "Book Maryland's #1 mobile snoball truck for your event! 24+ flavors. Serving MD, DC & DMV.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Nunito:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WTBFX2K204" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WTBFX2K204');
        `}} />
      </head>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodEstablishment",
              "name": "Awesome Snoballs",
              "description": "Maryland's #1 mobile snoball truck serving Hawaiian shaved ice at events, field days, birthday parties, and festivals across MD, DC and the DMV area.",
              "url": "https://www.awesomesnoballs.com",
              "telephone": "+14432813331",
              "email": "awesomesnoballs@yahoo.com",
              "priceRange": "$–$$",
              "servesCuisine": "Hawaiian Shaved Ice",
              "areaServed": [
                { "@type": "State", "name": "Maryland" },
                { "@type": "City",  "name": "Washington DC" },
                { "@type": "State", "name": "Virginia" },
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Baltimore",
                "addressRegion": "MD",
                "addressCountry": "US",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 39.2904,
                "longitude": -76.6122,
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Friday","Saturday","Sunday"],
                "opens": "11:00",
                "closes": "20:00",
              },
              "sameAs": [
                "https://www.facebook.com/p/Awesome-Snoballs-100087910179058/",
                "https://www.instagram.com/awesomesnoballs/",
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Snoball Menu",
                "itemListElement": [
                  { "@type": "Offer", "name": "Small Snoball 4oz",    "price": "3.00", "priceCurrency": "USD" },
                  { "@type": "Offer", "name": "Medium Snoball 8oz",   "price": "4.00", "priceCurrency": "USD" },
                  { "@type": "Offer", "name": "Large Snoball 16oz",   "price": "5.00", "priceCurrency": "USD" },
                  { "@type": "Offer", "name": "Souvenir Snoball 20oz","price": "6.00", "priceCurrency": "USD" },
                ],
              },
            }),
          }}
        />
        {/* Summer Urgency Bar — sitewide */}
        <div className="bg-gradient-to-r from-brand-pink via-red-500 to-brand-coral text-white text-center py-2.5 px-4 text-sm font-bold z-[60] relative">
          <span className="animate-pulse mr-2">🔥</span>
          Summer 2026 dates are booking NOW — Birthday parties, block parties, camps &amp; more!
          <a href="tel:+14432813331" className="ml-3 underline hover:no-underline font-black">
            Call 443-281-3331
          </a>
          <span className="mx-2">·</span>
          <a href="/booking/" className="underline hover:no-underline font-black">
            Book Online
          </a>
          <span className="animate-pulse ml-2">🍧</span>
        </div>
        {children}
      </body>
    </html>
  );
}
