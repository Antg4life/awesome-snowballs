"use client";

import { Heart, Leaf, Award, Users } from "lucide-react";

const values = [
  {
    icon:  Heart,
    title: "Made with Love",
    desc:  "Every snoball is hand-crafted to order using our family recipes and the finest ingredients.",
    color: "bg-brand-pink/10 text-brand-pink",
  },
  {
    icon:  Leaf,
    title: "Fresh Ingredients",
    desc:  "Real fruit flavors, no artificial shortcuts. We take pride in quality you can taste.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon:  Award,
    title: "Community Proud",
    desc:  "Born and raised right here in our community — proud to serve smiles one snoball at a time.",
    color: "bg-brand-yellow/20 text-amber-600",
  },
  {
    icon:  Users,
    title: "Family Tradition",
    desc:  "A family business built on the Louisiana tradition of perfect, fluffy, ice-cold snoballs.",
    color: "bg-brand-cyan/15 text-brand-blue",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-brand-light/30 relative overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-px pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-brand-pink/15 text-brand-pink font-bold text-sm rounded-full mb-4 uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="font-display text-5xl sm:text-6xl text-brand-dark mb-6 leading-tight">
              Bringing the{" "}
              <span className="gradient-text-candy">Cool</span>
              <br />to You
            </h2>
            <p className="text-gray-600 text-lg mb-5 leading-relaxed">
              Awesome Snoballs started with a simple dream — to bring authentic Louisiana-style
              shaved ice to our neighbors with 100+ incredible flavors and pure, icy perfection.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our snoballs are fluffier than snow cones, more flavorful than slushies, and made
              with the kind of care that only a family business can deliver. Whether you&apos;re
              8 or 80, there&apos;s a snoball waiting with your name on it.
            </p>

            {/* Signature flavors highlight */}
            <div className="bg-white rounded-2xl p-5 shadow-md border border-brand-cyan/20 mb-6">
              <p className="font-bold text-brand-dark mb-3 text-sm uppercase tracking-wide">Our Legendary Signatures:</p>
              <div className="flex flex-wrap gap-2">
                {["Tiger's Blood", "Bahama Mama", "Rainbow", "Wedding Cake", "Shark Attack"].map((f) => (
                  <span key={f} className="px-3 py-1 bg-brand-cyan/15 text-brand-blue text-sm font-semibold rounded-full">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => document.querySelector("#flavors")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 bg-brand-blue hover:bg-brand-dark text-white font-bold rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-brand-blue/30"
              >
                See Our Flavors
              </button>
              <a
                href="https://www.instagram.com/awesomesnoballs/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-pink font-bold hover:underline transition-colors"
              >
                Follow Us
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right: Values grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${v.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-brand-dark mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}

            {/* Big fun banner */}
            <div className="col-span-2 bg-fun-gradient rounded-2xl p-6 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-around opacity-20 pointer-events-none">
                {"🍧❄️🌈🍓".split("").map((ch, i) => (
                  <span key={i} className="text-5xl">{ch}</span>
                ))}
              </div>
              <p className="font-display text-4xl relative z-10">Follow Our Route!</p>
              <p className="text-white/80 mt-1 text-sm relative z-10">
                Check Instagram for daily locations & specials
              </p>
              <a
                href="https://www.instagram.com/awesomesnoballs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-6 py-2 bg-white/20 hover:bg-white/30 rounded-full font-bold text-sm transition-colors relative z-10"
              >
                @awesomesnoballs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
