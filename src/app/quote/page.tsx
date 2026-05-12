"use client";

import { useState } from "react";

export default function QuotePage() {
  const [students, setStudents] = useState(50);
  const [addIceCream, setAddIceCream] = useState(false);
  const [addCottonCandy, setAddCottonCandy] = useState(false);

  const pricePerSnoball = 3;
  const iceCreamExtra = 1.50;
  const cottonCandyExtra = 1.00;

  const pack = students <= 50 ? 50 : students <= 100 ? 100 : Math.ceil(students / 50) * 50;
  const baseTotal = pack * pricePerSnoball;
  const iceCreamTotal = addIceCream ? pack * iceCreamExtra : 0;
  const cottonCandyTotal = addCottonCandy ? pack * cottonCandyExtra : 0;
  const grandTotal = baseTotal + iceCreamTotal + cottonCandyTotal;

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-light/30 to-white py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <a href="/schools/" className="inline-block mb-6 text-brand-blue font-bold hover:underline text-sm">
            ← Back to Schools Page
          </a>
          <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🧮</span>
          </div>
          <span className="inline-block px-4 py-1.5 bg-brand-cyan/15 text-brand-blue font-bold text-sm rounded-full mb-4 uppercase tracking-widest">
            School Event Quote
          </span>
          <h1 className="font-display text-4xl sm:text-5xl text-brand-dark mb-3">
            Get Your <span className="gradient-text">Custom Quote</span>
          </h1>
          <p className="text-gray-500 text-lg">
            Use the calculator below to estimate your cost, then submit the form and we&apos;ll confirm everything within 24 hours!
          </p>
        </div>

        {/* Calculator */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 mb-6">
          <h2 className="font-bold text-brand-dark text-xl mb-6 flex items-center gap-2">
            🧮 Price Calculator
          </h2>

          {/* Student count slider */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Number of Students: <span className="text-brand-blue text-lg">{students}</span>
            </label>
            <input
              type="range"
              min="10"
              max="300"
              step="5"
              value={students}
              onChange={(e) => setStudents(Number(e.target.value))}
              className="w-full h-3 bg-brand-cyan/30 rounded-full appearance-none cursor-pointer accent-brand-blue"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>10</span>
              <span>150</span>
              <span>300</span>
            </div>
          </div>

          {/* Add-ons */}
          <div className="mb-6 space-y-3">
            <p className="text-sm font-bold text-gray-700 mb-2">Optional Add-Ons:</p>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={addIceCream}
                onChange={(e) => setAddIceCream(e.target.checked)}
                className="w-5 h-5 accent-brand-blue"
              />
              <span className="text-gray-700 text-sm">Ice Cream Base <span className="text-gray-400">(+$1.50 per student)</span></span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={addCottonCandy}
                onChange={(e) => setAddCottonCandy(e.target.checked)}
                className="w-5 h-5 accent-brand-blue"
              />
              <span className="text-gray-700 text-sm">Cotton Candy Topping <span className="text-gray-400">(+$1.00 per student)</span></span>
            </label>
          </div>

          {/* Price breakdown */}
          <div className="bg-brand-light/30 rounded-2xl p-5 space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Ticket Pack ({pack} tickets × $3.00)</span>
              <span className="font-bold">${baseTotal.toFixed(2)}</span>
            </div>
            {addIceCream && (
              <div className="flex justify-between text-sm text-gray-600">
                <span>Ice Cream Base ({pack} × $1.50)</span>
                <span className="font-bold">${iceCreamTotal.toFixed(2)}</span>
              </div>
            )}
            {addCottonCandy && (
              <div className="flex justify-between text-sm text-gray-600">
                <span>Cotton Candy ({pack} × $1.00)</span>
                <span className="font-bold">${cottonCandyTotal.toFixed(2)}</span>
              </div>
            )}
            <div className="border-t border-gray-200 pt-2 flex justify-between items-center">
              <span className="font-bold text-brand-dark text-lg">Estimated Total</span>
              <span className="font-display text-3xl text-brand-blue">${grandTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-400 text-center">
              *Pricing valid March–May. Standard rates apply other months. Travel fees may apply outside MD/DC/DMV.
            </p>
          </div>
        </div>

        {/* Quote Form */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          <h2 className="font-bold text-brand-dark text-xl mb-6">Submit Your Quote Request</h2>
          <form
            action="https://formsubmit.co/1009ffda7af9208cc9b7d97e7f93af42"
            method="POST"
            className="space-y-5"
          >
            <input type="hidden" name="_subject" value="🍧 NEW SCHOOL QUOTE REQUEST — Awesome Snoballs" />
            <input type="hidden" name="_next" value="https://www.awesomesnoballs.com/thank-you/" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="text" name="_honey" style={{display:"none"}} />
            <input type="hidden" name="_autoresponse" value="Hi! Thanks for requesting a school event quote from Awesome Snoballs! 🍧 We received your details and will confirm your custom quote within 24 hours. Want to lock in your date right away? Pay your deposit here: https://square.link/u/zYriSyOu — Your school event will be one the kids never forget! Questions? Call or text 443-281-3331. — Anthony & The Awesome Snoballs Team" />
            <input type="hidden" name="_cc" value="antg4life@yahoo.com" />
            <input type="hidden" name="estimated_students" value={students} />
            <input type="hidden" name="estimated_total" value={`$${grandTotal.toFixed(2)}`} />

            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Your Name *</label>
                <input type="text" name="name" required placeholder="Jane Smith"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Email *</label>
                <input type="email" name="email" required placeholder="jane@school.edu"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" />
              </div>
            </div>

            {/* Phone + School Name */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone *</label>
                <input type="tel" name="phone" required placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">School Name *</label>
                <input type="text" name="school_name" required placeholder="Lincoln Elementary"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" />
              </div>
            </div>

            {/* Event Type + Date */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Event Type *</label>
                <select name="event_type" required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700 bg-white">
                  <option value="">Select...</option>
                  <option value="Field Day">Field Day</option>
                  <option value="End-of-Year Celebration">End-of-Year Celebration</option>
                  <option value="Summer Program">Summer Program</option>
                  <option value="School Carnival">School Carnival</option>
                  <option value="Fundraiser">Fundraiser</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Event Date *</label>
                <input type="date" name="event_date" required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700" />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">School Address *</label>
              <input type="text" name="location" required placeholder="123 School Rd, Baltimore, MD"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" />
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Additional Notes</label>
              <textarea name="notes" rows={3} placeholder="Any special requests or questions..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none" />
            </div>

            {/* Summary box */}
            <div className="bg-brand-blue/5 rounded-xl p-4 border border-brand-blue/20">
              <p className="text-sm font-bold text-brand-dark mb-1">Your Quote Summary:</p>
              <p className="text-sm text-gray-600">{students} students · {pack} ticket pack · Est. total: <span className="font-bold text-brand-blue">${grandTotal.toFixed(2)}</span></p>
            </div>

            <button type="submit"
              className="w-full py-4 bg-gradient-to-r from-brand-blue to-brand-cyan hover:from-brand-dark hover:to-brand-blue text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg shadow-brand-blue/30">
              Submit Quote Request 📋
            </button>

            <p className="text-center text-gray-400 text-xs">
              We&apos;ll confirm your quote within 24 hours.{" "}
              <a href="tel:+14432813331" className="text-brand-blue font-bold hover:underline">Call 443-281-3331</a> for faster response.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
