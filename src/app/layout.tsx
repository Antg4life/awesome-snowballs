import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Awesome Snoballs | Louisiana's Finest Shaved Ice",
  description: "Experience the coolest snoballs in town! Awesome Snoballs serves Louisiana-style shaved ice with 100+ flavors, cream, and specialty toppings. Find us on our route!",
  keywords: ["snoballs", "shaved ice", "Louisiana", "flavors", "awesome snoballs", "snowballs"],
  openGraph: {
    title: "Awesome Snoballs",
    description: "Louisiana's Finest Shaved Ice Experience",
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
