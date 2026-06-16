"use client";

import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToFlavors = () => {
    document.querySelector("#flavors")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
    >

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Urgency badge */}
        <div className="inline-flex items-center gap-2 bg-brand-yellow text-brand-dark px-5 py-2.5 rounded-full text-sm font-black mb-6 animate-fade-in shadow-xl">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          Summer 2026 — Birthday Parties · Block Parties · Camps · Festivals
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        </div>

        {/* Heading */}
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-4 leading-tight animate-slide-up drop-shadow-2xl">
          Awesome
          <br />
          <span className="text-brand-yellow">Snoballs</span>
        </h1>

        {/* Tagline */}
        <p className="text-white/90 text-xl sm:text-2xl font-semibold mb-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Maryland&apos;s #1 Mobile Snoball Truck 🍧
        </p>
        <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          20 flavors including Baltimore&apos;s famous Egg Custard. We come to YOU —
          birthday parties, school events, block parties, camps &amp; festivals across MD, DC &amp; DMV.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <a
            href="/booking/"
            className="group px-10 py-4 bg-brand-yellow hover:bg-yellow-300 text-brand-dark font-black text-xl rounded-full shadow-2xl shadow-brand-yellow/40 transition-all duration-300 hover:scale-105"
          >
            📅 Book Your Summer Event
          </a>
          <a
            href="tel:+14432813331"
            className="px-10 py-4 glass text-white font-bold text-lg rounded-full hover:bg-white/25 transition-all duration-300 border border-white/30 hover:border-white/50"
          >
            📞 Call 443-281-3331
          </a>
        </div>

        {/* Summer event types */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          {["🎂 Birthday Parties", "🏡 Block Parties", "🏕️ Summer Camps", "🏃 Field Days", "🎪 Festivals", "🏫 School Events", "🤝 Corporate Events", "🌊 Pool Parties"].map((tag) => (
            <span key={tag} className="text-xs px-3 py-1.5 bg-white/15 text-white rounded-full font-semibold border border-white/20">
              {tag}
            </span>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto animate-fade-in" style={{ animationDelay: "0.9s" }}>
          {[
            { value: "20",   label: "Flavors" },
            { value: "5★",   label: "Rated" },
            { value: "DMV",  label: "Area" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl text-brand-yellow">{stat.value}</div>
              <div className="text-white/70 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToFlavors}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white animate-bounce-slow transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
