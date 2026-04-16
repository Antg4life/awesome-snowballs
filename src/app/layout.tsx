import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Awesome Snoballs | #1 Mobile Sno Ball Truck in Maryland & DMV Area",
  description: "Awesome Snoballs is Maryland's premier mobile Sno Ball provider serving Maryland, Washington DC, and the DMV Area. 24 amazing flavors including Egg Custard, Tiger's Blood, Bahama Mama and more. Book us for events, parties & festivals!",
  keywords: ["snoballs", "shaved ice", "Maryland", "DMV", "Washington DC", "mobile sno ball", "sno ball truck Maryland", "shaved ice Maryland", "egg custard snoball", "awesome snoballs", "sno ball DMV", "Maryland shaved ice truck"],
  openGraph: {
    title: "Awesome Snoballs | Maryland's Premier Mobile Sno Ball Truck",
    description: "Maryland's premier mobile Sno Ball provider serving Maryland, Washington DC and the DMV Area. 24 flavors including Egg Custard!",
    type: "website",
    url: "https://www.awesomesnoballs.com",
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
