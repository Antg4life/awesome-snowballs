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
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
