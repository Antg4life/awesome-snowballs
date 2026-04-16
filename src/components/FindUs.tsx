"use client";

import { MapPin, Clock, Phone, Calendar, Instagram, Facebook } from "lucide-react";
import { useState, useEffect } from "react";

const hours = [
  { day: "Monday",    time: "Closed" },
  { day: "Tuesday",   time: "12:00 PM – 8:00 PM" },
  { day: "Wednesday", time: "12:00 PM – 8:00 PM" },
  { day: "Thursday",  time: "12:00 PM – 8:00 PM" },
  { day: "Friday",    time: "12:00 PM – 9:00 PM" },
  { day: "Saturday",  time: "11:00 AM – 9:00 PM" },
  { day: "Sunday",    time: "12:00 PM – 7:00 PM" },
];

export default function FindUs() {
  const [today, setToday] = useState(-1);
  useEffect(() => { setToday(new Date().getDay()); }, []);

  return (
    <section id="find-us" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand-pink/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-brand-yellow/20 text-amber-600 font-bold text-sm rounded-full mb-4 uppercase tracking-widest">
            Find Us
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-brand-dark mb-4">
            Come Find <span className="gradient-text">Your Snoball</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            We roll out our truck daily! Follow us on Instagram for the freshest location updates and daily specials.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Hours card */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-brand-blue to-brand-cyan p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Hours of Operation</h3>
                  <p className="text-white/70 text-sm">*Hours may vary — follow us on Instagram!</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              {hours.map((h, i) => {
                // Map day index: Mon=1, Tue=2, ... Sun=0
                const dayIndex = i === 6 ? 0 : i + 1;
                const isToday  = dayIndex === today;
                return (
                  <div
                    key={h.day}
                    className={`flex justify-between items-center py-3 border-b border-gray-50 last:border-0 ${
                      isToday ? "text-brand-blue font-bold" : "text-gray-600"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {isToday && <span className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />}
                      <span className={isToday ? "" : "pl-4"}>{h.day}</span>
                      {isToday && <span className="text-xs bg-brand-cyan/20 text-brand-blue px-2 py-0.5 rounded-full">Today</span>}
                    </div>
                    <span className={h.time === "Closed" ? "text-gray-300" : ""}>{h.time}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Info + Social card */}
          <div className="flex flex-col gap-6">
            {/* Location tracker */}
            <div className="bg-gradient-to-br from-brand-dark to-brand-blue rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 text-6xl opacity-20 animate-float">📍</div>
              <div className="w-12 h-12 bg-brand-yellow/20 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-brand-yellow" />
              </div>
              <h3 className="font-bold text-xl mb-2">Track Our Truck</h3>
              <p className="text-white/70 mb-5">
                We serve multiple neighborhoods! Our daily location is always posted on Instagram stories before we open.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.instagram.com/awesomesnoballs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram Stories
                </a>
                <a
                  href="https://www.facebook.com/p/Awesome-Snoballs-100087910179058/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-full font-bold text-sm transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </div>
            </div>

            {/* Events / Private Parties */}
            <div className="bg-gradient-to-br from-brand-pink to-brand-coral rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 text-5xl opacity-20 animate-float-slow">🎉</div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl mb-2">Events & Private Parties</h3>
              <p className="text-white/80 mb-3 text-sm">
                Book Awesome Snoballs for your next event!
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["Corporate Events","Private Parties","School Events","Sporting Events","Festivals","Fundraisers"].map((e) => (
                  <span key={e} className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">{e}</span>
                ))}
              </div>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-brand-pink font-bold rounded-full hover:bg-brand-yellow transition-colors text-sm"
              >
                Book Us Now →
              </a>
            </div>

            {/* Phone */}
            <div className="bg-gray-50 rounded-2xl p-6 flex items-center gap-4 border border-gray-100">
              <div className="w-12 h-12 bg-brand-cyan/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-brand-blue" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Give us a call or text!</p>
                <a href="tel:+14432813331" className="font-bold text-brand-dark text-lg hover:text-brand-blue transition-colors">
                  443-281-3331
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
