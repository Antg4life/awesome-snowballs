"use client";

import Link from "next/link";
import { Snowflake, Instagram, Facebook, Heart } from "lucide-react";

const quickLinks = [
  { label: "Home",    href: "#home" },
  { label: "Flavors", href: "#flavors" },
  { label: "About",   href: "#about" },
  { label: "Find Us", href: "#find-us" },
  { label: "Contact", href: "#contact" },
];

const social = [
  {
    label: "Instagram",
    href:  "https://www.instagram.com/awesomesnoballs/",
    icon:  Instagram,
    color: "hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400",
  },
  {
    label: "Facebook",
    href:  "https://www.facebook.com/p/Awesome-Snoballs-100087910179058/",
    icon:  Facebook,
    color: "hover:bg-blue-600",
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white relative overflow-hidden">
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-px pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0,30 C480,0 960,60 1440,30 L1440,60 L0,60 Z" fill="#03045E" />
        </svg>
      </div>

      {/* CTA banner */}
      <div className="bg-gradient-to-r from-brand-pink via-brand-coral to-brand-yellow py-12 text-center relative">
        <h3 className="font-display text-4xl text-white mb-2 drop-shadow">Ready for Something Awesome?</h3>
        <p className="text-white/80 mb-6">Follow us on Instagram to find our truck near you!</p>
        <a
          href="https://www.instagram.com/awesomesnoballs/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-white text-brand-pink font-bold rounded-full hover:bg-brand-dark hover:text-white transition-all duration-300 shadow-xl"
        >
          <Instagram className="w-5 h-5" />
          @awesomesnoballs
        </a>
      </div>

      {/* Main footer */}
      <div className="pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center">
                  <Snowflake className="w-6 h-6 text-brand-dark" />
                </div>
                <div className="leading-none">
                  <div className="font-display text-xl">Awesome</div>
                  <div className="font-display text-xl text-brand-yellow -mt-1">Snoballs</div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                Hawaiian Shave Ice · Ice Cream · Cotton Candy · Cold Drinks — delivered to you!
              </p>
              <a href="tel:+14432813331" className="text-brand-yellow font-bold text-sm hover:underline block mb-4">
                443-281-3331
              </a>
              {/* Social icons */}
              <div className="flex gap-3">
                {social.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className={`w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 ${s.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-white/60 hover:text-brand-yellow transition-colors text-sm"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Flavors tease */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">Popular Flavors</h4>
              <div className="flex flex-wrap gap-2">
                {["Tiger's Blood", "Mango", "Cotton Candy", "Rainbow", "Watermelon", "Bahama Mama", "Cherry"].map((f) => (
                  <span
                    key={f}
                    className="text-xs px-3 py-1 bg-white/10 text-white/70 rounded-full hover:bg-brand-cyan/30 hover:text-white cursor-default transition-colors"
                  >
                    {f}
                  </span>
                ))}
              </div>
              <p className="text-white/40 text-xs mt-4">+ 93 more flavors!</p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
            <p>
              &copy; {new Date().getFullYear()} Awesome Snoballs. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-brand-pink fill-brand-pink" /> in Louisiana
            </p>
            <a
              href="https://www.awesomesnoballs.com"
              className="hover:text-white/70 transition-colors"
            >
              awesomesnoballs.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
