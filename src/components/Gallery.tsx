"use client";

const photos = [
  { src: "/event-truck.png",          alt: "Awesome Snoballs truck at event",       size: "large" },
  { src: "/event-school-crowd.png",   alt: "School fundraiser crowd",               size: "small" },
  { src: "/event-night-lights.png",   alt: "Night event with LED lights",           size: "small" },
  { src: "/event-backyard-party.png", alt: "Baltimore backyard party",              size: "small" },
  { src: "/event-snoballs.png",       alt: "Colorful snoballs",                     size: "small" },
  { src: "/event-awesome.png",        alt: "Awesome Snoballs event",                size: "large" },
  { src: "/thumbnail-1.jpeg",         alt: "Awesome Snoballs truck",                size: "small" },
  { src: "/SnoballGirl%20Eating.jpg", alt: "Girl enjoying a snoball",               size: "small" },
  { src: "/ai-making.jpg",            alt: "Fresh snoball being made",              size: "small" },
  { src: "/ai-celebration.jpg",       alt: "Kids celebrating with snoballs",        size: "large" },
  { src: "/2023-06-24-2.jpg",         alt: "Happy customers at Awesome Snoballs",   size: "small" },
  { src: "/thumbnail-2.jpeg",         alt: "Colorful Hawaiian shaved ice",          size: "small" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white to-brand-light/20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-pink/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-brand-pink/15 text-brand-pink font-bold text-sm rounded-full mb-4 uppercase tracking-widest">
            Gallery
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-brand-dark mb-4">
            Smiles &amp; <span className="gradient-text">Snoballs</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Every snoball is a memory in the making. Here&apos;s a taste of the fun!
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group ${
                photo.size === "large" ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/awesomesnoballs/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-brand-pink to-brand-coral text-white font-bold rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-brand-pink/30"
          >
            📸 See More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
