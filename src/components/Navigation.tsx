"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Snowflake } from "lucide-react";

const navLinks = [
  { label: "Home",    href: "#home" },
  { label: "Flavors", href: "#flavors" },
  { label: "About",   href: "#about" },
  { label: "Find Us", href: "#find-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen,    setIsOpen]    = useState(false);
  const [scrolled,  setScrolled]  = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-dark/95 backdrop-blur-md shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="#home"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Snowflake className="w-6 h-6 text-brand-dark" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-pink rounded-full animate-bounce-slow" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl text-white">Awesome</span>
              <span className="font-display text-xl text-brand-yellow -mt-1">Snoballs</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-white/90 hover:text-brand-yellow font-semibold text-sm transition-colors duration-200 rounded-full hover:bg-white/10"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#find-us")}
              className="ml-4 px-6 py-2.5 bg-brand-pink hover:bg-brand-coral text-white font-bold text-sm rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-brand-pink/30"
            >
              Order Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white hover:text-brand-yellow transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-brand-dark/95 backdrop-blur-md border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-4 py-3 text-white/90 hover:text-brand-yellow font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#find-us")}
            className="block w-full mt-2 px-6 py-3 bg-brand-pink hover:bg-brand-coral text-white font-bold rounded-full text-center transition-colors"
          >
            Order Now
          </button>
        </div>
      </div>
    </nav>
  );
}
