"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Star, Sparkles } from "lucide-react";

const floatingEmojis = ["🍧", "❄️", "🌈", "🍓", "🥭", "🍋", "🫐", "🍑", "🍒", "🍉"];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToFlavors = () => {
    document.querySelector("#flavors")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob absolute top-20 left-10 w-72 h-72 bg-brand-pink/20 rounded-full blur-3xl" />
        <div className="blob absolute bottom-20 right-10 w-96 h-96 bg-brand-yellow/15 rounded-full blur-3xl" style={{ animationDelay: "2s" }} />
        <div className="blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-cyan/20 rounded-full blur-2xl" style={{ animationDelay: "4s" }} />
      </div>

      {/* Floating emojis */}
      {mounted && floatingEmojis.map((emoji, i) => (
        <div
          key={i}
          className="absolute pointer-events-none select-none text-3xl md:text-4xl opacity-70"
          style={{
            left:              `${5 + (i * 9) % 90}%`,
            top:               `${10 + (i * 13) % 75}%`,
            animation:         `float ${3 + (i % 3)}s ease-in-out ${i * 0.5}s infinite`,
            animationFillMode: "both",
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Star decorations */}
      <div className="absolute top-32 right-1/4 animate-spin-slow opacity-60">
        <Sparkles className="w-8 h-8 text-brand-yellow" />
      </div>
      <div className="absolute bottom-40 left-1/4 animate-bounce-slow opacity-60" style={{ animationDelay: "1s" }}>
        <Star className="w-6 h-6 text-brand-pink fill-brand-pink" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full text-white text-sm font-semibold mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse" />
          Louisiana&apos;s Finest Shaved Ice Experience
          <span className="w-2 h-2 bg-brand-pink rounded-full animate-pulse" />
        </div>

        {/* Heading */}
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-4 leading-tight animate-slide-up drop-shadow-2xl">
          Awesome
          <br />
          <span className="text-brand-yellow">Snoballs</span>
        </h1>

        {/* Tagline */}
        <p className="text-white/90 text-xl sm:text-2xl font-semibold mb-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Cool Off. Sweeten Up. Live Awesome.
        </p>
        <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          Hand-crafted Louisiana-style snoballs in 100+ amazing flavors.
          From classic cherry to tropical mango — every bite is pure joy!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <button
            onClick={() => document.querySelector("#flavors")?.scrollIntoView({ behavior: "smooth" })}
            className="group px-10 py-4 bg-brand-pink hover:bg-brand-coral text-white font-bold text-lg rounded-full shadow-2xl shadow-brand-pink/40 hover:shadow-brand-pink/60 transition-all duration-300 hover:scale-105"
          >
            Explore Flavors
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button
            onClick={() => document.querySelector("#find-us")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-4 glass text-white font-bold text-lg rounded-full hover:bg-white/25 transition-all duration-300 border border-white/30 hover:border-white/50"
          >
            Find Our Truck
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto animate-fade-in" style={{ animationDelay: "0.9s" }}>
          {[
            { value: "100+", label: "Flavors" },
            { value: "5★",   label: "Rated" },
            { value: "∞",    label: "Smiles" },
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
