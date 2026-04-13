"use client";

import { useState } from "react";

type Flavor = {
  name:   string;
  emoji:  string;
  color:  string;
  tag?:   string;
};

type Category = {
  id:      string;
  label:   string;
  emoji:   string;
  flavors: Flavor[];
};

const categories: Category[] = [
  {
    id:    "tropical",
    label: "Tropical",
    emoji: "🌴",
    flavors: [
      { name: "Mango",           emoji: "🥭", color: "from-orange-400 to-yellow-400" },
      { name: "Pineapple",       emoji: "🍍", color: "from-yellow-400 to-lime-400" },
      { name: "Passion Fruit",   emoji: "💜", color: "from-purple-400 to-pink-400", tag: "Fan Fave" },
      { name: "Coconut",         emoji: "🥥", color: "from-sky-200 to-white", },
      { name: "Guava",           emoji: "🌸", color: "from-pink-300 to-rose-400" },
      { name: "Watermelon",      emoji: "🍉", color: "from-green-400 to-red-400", tag: "Bestseller" },
    ],
  },
  {
    id:    "classic",
    label: "Classic",
    emoji: "⭐",
    flavors: [
      { name: "Cherry",          emoji: "🍒", color: "from-red-400 to-red-600", tag: "Bestseller" },
      { name: "Strawberry",      emoji: "🍓", color: "from-pink-400 to-red-400" },
      { name: "Grape",           emoji: "🍇", color: "from-purple-500 to-violet-600" },
      { name: "Blue Raspberry",  emoji: "💙", color: "from-blue-400 to-cyan-400" },
      { name: "Lemon",           emoji: "🍋", color: "from-yellow-300 to-yellow-500" },
      { name: "Orange",          emoji: "🍊", color: "from-orange-400 to-amber-400" },
    ],
  },
  {
    id:    "candy",
    label: "Candy",
    emoji: "🍬",
    flavors: [
      { name: "Cotton Candy",    emoji: "🩷", color: "from-pink-300 to-sky-300", tag: "Kid's Fave" },
      { name: "Bubblegum",       emoji: "🫧", color: "from-pink-300 to-blue-300" },
      { name: "Sour Apple",      emoji: "🍏", color: "from-green-400 to-lime-300", tag: "Fan Fave" },
      { name: "Candy Cane",      emoji: "🍭", color: "from-red-400 to-white" },
      { name: "Birthday Cake",   emoji: "🎂", color: "from-yellow-200 to-pink-300" },
      { name: "Skittle Mix",     emoji: "🌈", color: "from-red-400 via-yellow-400 to-purple-400" },
    ],
  },
  {
    id:    "cream",
    label: "Cream",
    emoji: "🍦",
    flavors: [
      { name: "Wedding Cake",    emoji: "🎂", color: "from-white to-pink-100", tag: "Premium" },
      { name: "Creamsicle",      emoji: "🍊", color: "from-orange-300 to-orange-100" },
      { name: "Chocolate",       emoji: "🍫", color: "from-amber-700 to-amber-900" },
      { name: "Vanilla Cream",   emoji: "🍨", color: "from-yellow-50 to-amber-100" },
      { name: "Strawberry Cream", emoji: "🍓", color: "from-pink-300 to-pink-100", tag: "Premium" },
      { name: "Nectar",          emoji: "🌺", color: "from-amber-300 to-yellow-200" },
    ],
  },
  {
    id:    "specialty",
    label: "Specialty",
    emoji: "✨",
    flavors: [
      { name: "Tiger's Blood",   emoji: "🐯", color: "from-red-500 to-orange-400", tag: "Fan Fave" },
      { name: "Bahama Mama",     emoji: "🌺", color: "from-orange-400 to-pink-400" },
      { name: "Gummy Bear Mix",  emoji: "🐻", color: "from-green-400 to-red-300" },
      { name: "Rainbow",         emoji: "🌈", color: "from-red-400 via-yellow-400 to-blue-400", tag: "Signature" },
      { name: "Shark Attack",    emoji: "🦈", color: "from-blue-500 to-cyan-400", tag: "Signature" },
      { name: "Unicorn",         emoji: "🦄", color: "from-pink-400 via-purple-300 to-sky-400", tag: "Signature" },
    ],
  },
];

export default function Flavors() {
  const [activeCategory, setActiveCategory] = useState("tropical");

  const current = categories.find((c) => c.id === activeCategory) ?? categories[0];

  return (
    <section id="flavors" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-pink/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-brand-cyan/15 text-brand-blue font-bold text-sm rounded-full mb-4 uppercase tracking-widest">
            Our Menu
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-brand-dark mb-4">
            Pick Your <span className="gradient-text">Flavor</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Over 100 incredible flavors to choose from — fruit, candy, cream, and our legendary specialty blends.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/30 scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-brand-cyan/20 hover:text-brand-blue"
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Flavor grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {current.flavors.map((flavor, i) => (
            <div
              key={flavor.name}
              className="flavor-card relative bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden cursor-pointer group"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {flavor.tag && (
                <div className="absolute top-2 right-2 z-10 bg-brand-pink text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {flavor.tag}
                </div>
              )}
              {/* Color gradient top */}
              <div className={`h-20 bg-gradient-to-br ${flavor.color} flex items-center justify-center text-4xl relative overflow-hidden`}>
                <span className="drop-shadow group-hover:scale-125 transition-transform duration-300">{flavor.emoji}</span>
                {/* Shimmer on hover */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-3 text-center">
                <p className="font-bold text-brand-dark text-sm leading-tight">{flavor.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* More flavors CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-3">
            ...and <strong className="text-brand-blue">80+ more flavors</strong> available!
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 border-2 border-brand-blue text-brand-blue font-bold rounded-full hover:bg-brand-blue hover:text-white transition-all duration-200"
          >
            Ask About Our Full Menu
          </button>
        </div>

        {/* Add-ons banner */}
        <div className="mt-16 bg-gradient-to-r from-brand-dark via-brand-blue to-brand-cyan rounded-3xl p-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {["🍦","🍒","🥭","🍋"].map((e, i) => (
              <span key={i} className="absolute text-3xl opacity-20" style={{ left: `${10 + i * 25}%`, top: "50%", transform: "translateY(-50%)" }}>{e}</span>
            ))}
          </div>
          <h3 className="font-display text-3xl mb-2 relative z-10">Make It Extra Awesome</h3>
          <p className="text-white/80 mb-4 relative z-10">Customize your snoball with premium add-ons</p>
          <div className="flex flex-wrap justify-center gap-3 relative z-10">
            {["Condensed Milk", "Cream", "Gummy Bears", "Chamoy Drizzle", "Sour Powder", "Extra Flavor"].map((addon) => (
              <span key={addon} className="glass px-4 py-1.5 rounded-full text-sm font-semibold">
                {addon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
