"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name:   "Sarah M.",
    stars:  5,
    text:   "Best snoballs I've ever had! The Tiger's Blood flavor is absolutely incredible. My kids beg to go every single week!",
    flavor: "Tiger's Blood Fan",
  },
  {
    name:   "James T.",
    stars:  5,
    text:   "Awesome Snoballs is the real deal! They had my truck at my daughter's birthday party and everyone went crazy for them. 10/10 recommend!",
    flavor: "Event Customer",
  },
  {
    name:   "Maria G.",
    stars:  5,
    text:   "Finally, an authentic Louisiana snoball in our neighborhood! The ice is so fluffy and the flavors are unreal. Mango + condensed milk = perfection.",
    flavor: "Mango Lover",
  },
  {
    name:   "Kevin R.",
    stars:  5,
    text:   "Drove 20 minutes to find their truck and it was SO worth it. The Rainbow snoball is a work of art. Will be stalking their Instagram daily now!",
    flavor: "Rainbow Regular",
  },
  {
    name:   "Lisa P.",
    stars:  5,
    text:   "Absolutely love this place! Cotton candy + bubblegum cream is my go-to. The staff is always friendly and the snoballs are massive for the price!",
    flavor: "Cotton Candy Addict",
  },
  {
    name:   "Carlos E.",
    stars:  5,
    text:   "Shark Attack snoball is everything! Blue coconut with the gummy sharks — my kids love it. Best summer treat around!",
    flavor: "Family Favorite",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-brand-dark to-[#0077B6] relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-8xl opacity-5 animate-float">🍧</div>
        <div className="absolute bottom-10 right-10 text-8xl opacity-5 animate-float-slow">❄️</div>
        <div className="absolute top-1/2 left-1/4 text-6xl opacity-5 animate-float-delay">🌈</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-brand-yellow/20 text-brand-yellow font-bold text-sm rounded-full mb-4 uppercase tracking-widest">
            Reviews
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-4">
            The Crowd <span className="text-brand-yellow">Agrees</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-brand-yellow fill-brand-yellow" />
            ))}
          </div>
          <p className="text-white/70">5 stars from hundreds of happy customers</p>
        </div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="glass rounded-2xl p-6 hover:bg-white/25 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
                ))}
              </div>
              {/* Quote */}
              <p className="text-white/85 text-sm leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs">{t.flavor}</p>
                </div>
                <div className="w-8 h-8 bg-brand-yellow/20 rounded-full flex items-center justify-center text-lg">
                  ⭐
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof strip */}
        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm mb-4">Share your Awesome Snoballs moment!</p>
          <a
            href="https://www.instagram.com/awesomesnoballs/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold rounded-full hover:opacity-90 transition-opacity shadow-lg"
          >
            Tag us @awesomesnoballs
          </a>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
