import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Awesome Snoballs | Maryland's #1 Mobile Snoball Truck | Book for Events",
  description: "Maryland's #1 mobile snoball truck serving MD, DC & DMV. Book for field days, school events, birthday parties & festivals. 24+ flavors, $3/student school pricing. Call 443-281-3331.",
  keywords: ["snoball truck Maryland", "shaved ice truck DMV", "Hawaiian shaved ice Maryland", "mobile snoball Baltimore", "field day vendor Maryland", "school event snoball truck", "book snoball truck", "snoball truck DC", "snoball truck Virginia", "egg custard snoball", "awesome snoballs", "Maryland summer event", "snoball truck for hire"],
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
        {children}
      </body>
    </html>
  );
}
