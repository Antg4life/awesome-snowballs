"use client";

import { useState } from "react";

const PACKAGES: Record<string, { label: string; price: number | null; duration: string; servings: string }> = {
  "Starter":         { label: "Starter Package",          price: 350,  duration: "2 hours", servings: "Up to 50 servings" },
  "Popular":         { label: "Popular Package",           price: 500,  duration: "3 hours", servings: "Up to 80 servings" },
  "Premium":         { label: "Premium Package",           price: 700,  duration: "4 hours", servings: "Up to 120 servings" },
  "School":          { label: "School / Fundraiser",       price: null, duration: "TBD",     servings: "Custom" },
  "Custom":          { label: "Custom Quote",              price: null, duration: "TBD",     servings: "Custom" },
  "Not sure yet":    { label: "Not sure yet — help me pick!", price: null, duration: "TBD",  servings: "TBD" },
};

function getPackageKey(val: string) {
  if (val.startsWith("Starter"))      return "Starter";
  if (val.startsWith("Popular"))      return "Popular";
  if (val.startsWith("Premium"))      return "Premium";
  if (val.includes("School"))         return "School";
  if (val.startsWith("Custom"))       return "Custom";
  return "Not sure yet";
}

export default function BookingPage() {
  const [sending, setSending]     = useState(false);
  const [sent, setSent]           = useState(false);
  const [packageVal, setPackage]  = useState("Not sure yet");

  const pkgKey  = getPackageKey(packageVal);
  const pkgInfo = PACKAGES[pkgKey];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form   = e.currentTarget;
    const data   = new FormData(form);
    const name   = data.get("name") as string;
    const email  = data.get("email") as string;
    const phone  = data.get("Phone Number") as string;
    const evType = data.get("Event Type") as string;
    const evDate = data.get("Event Date") as string;
    const evTime = data.get("Event Start Time") as string;
    const dur    = data.get("Duration Needed") as string;
    const guests = data.get("Expected Guests") as string;
    const street = data.get("Street Address") as string;
    const city   = data.get("city") as string;
    const state  = data.get("state") as string;
    const zip    = data.get("Zip Code") as string;
    const pkg    = data.get("Package Interest") as string;
    const notes  = data.get("Additional Notes") as string;

    const fullAddress = `${street}, ${city}, ${state} ${zip}`;
    const pkgDetails  = PACKAGES[getPackageKey(pkg)];
    const priceLine   = pkgDetails.price
      ? `$${pkgDetails.price} (${pkgDetails.duration} · ${pkgDetails.servings})`
      : "Custom quote — we will confirm pricing within 24 hours";

    const bookingSummary = `
BOOKING REQUEST — AWESOME SNOBALLS
====================================
Name:           ${name}
Phone:          ${phone}
Email:          ${email}

EVENT DETAILS
Event Type:     ${evType}
Date:           ${evDate}
Start Time:     ${evTime}
Duration:       ${dur}
Guests:         ${guests}

LOCATION
Address:        ${fullAddress}

PACKAGE & PRICING
Package:        ${pkgDetails.label}
Est. Price:     ${priceLine}
Notes:          ${notes || "None"}

====================================
DEPOSIT: Pay here to lock in your date:
https://square.link/u/zYriSyOu

This is an ESTIMATE. Final pricing confirmed within 24 hrs.
Questions? Call/text 443-281-3331
    `.trim();

    // Send owner notification via FormSubmit
    await fetch("https://formsubmit.co/ajax/1009ffda7af9208cc9b7d97e7f93af42", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    }).catch(() => {});

    // Send customer booking confirmation via EmailJS
    await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id:  "service_obljgqo",
        template_id: "template_ivcpk2k",
        user_id:     "yKYuXOtQHZiss-Wm1",
        template_params: {
          name,
          email,
          message: bookingSummary,
        },
      }),
    }).catch(() => {});

    setSending(false);
    setSent(true);
  };

  if (sent) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-brand-light/30 to-white py-20 flex items-center justify-center">
        <div className="text-center max-w-lg mx-auto px-4">
          <div className="text-7xl mb-6">🎉</div>
          <h1 className="font-display text-4xl text-brand-dark mb-3">Booking Request Sent!</h1>
          <p className="text-gray-600 mb-2">Check your email — we sent a full booking summary to your inbox from <strong>awesomesnoballs@yahoo.com</strong>.</p>
          <p className="text-gray-500 text-sm mb-6">We&apos;ll confirm your date and pricing within 24 hours.</p>
          <a href="https://square.link/u/zYriSyOu" target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-brand-yellow text-brand-dark font-bold rounded-full hover:opacity-90 mb-4">
            Pay Deposit to Lock In Your Date 💳
          </a>
          <br />
          <a href="/" className="text-brand-blue text-sm hover:underline">← Back to Home</a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-light/30 to-white py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <a href="/" className="inline-block mb-6 text-brand-blue font-bold hover:underline text-sm">← Back to Home</a>
          <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🍧</span>
          </div>
          <span className="inline-block px-4 py-1.5 bg-brand-cyan/15 text-brand-blue font-bold text-sm rounded-full mb-4 uppercase tracking-widest">
            Book Your Event
          </span>
          <h1 className="font-display text-4xl sm:text-5xl text-brand-dark mb-3">
            Reserve Your <span className="gradient-text">Date</span>
          </h1>
          <p className="text-gray-500 text-lg">Fill out the form and we&apos;ll send you a full pricing summary instantly!</p>
        </div>

        <div className="bg-gradient-to-r from-brand-blue to-brand-cyan rounded-2xl p-6 text-white text-center mb-8">
          <p className="font-bold text-lg mb-1">Ready to lock in your date?</p>
          <p className="text-white/80 text-sm mb-4">Pay your deposit now and your date is secured!</p>
          <a href="https://square.link/u/zYriSyOu" target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-brand-yellow text-brand-dark font-bold rounded-full hover:opacity-90 transition-opacity">
            Pay Deposit via Square 💳
          </a>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input type="hidden" name="_subject" value="🍧 NEW BOOKING REQUEST — Awesome Snoballs" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{display:"none"}} />

            <h2 className="font-bold text-brand-dark text-base border-b border-gray-100 pb-2">Contact Information</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Your Name *</label>
                <input type="text" name="name" required placeholder="Jane Smith"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone Number *</label>
                <input type="tel" name="Phone Number" required placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Email Address *</label>
              <input type="email" name="email" required placeholder="jane@email.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" />
            </div>

            <h2 className="font-bold text-brand-dark text-base border-b border-gray-100 pb-2 pt-2">Event Details</h2>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Event Type *</label>
              <select name="Event Type" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700 bg-white">
                <option value="">Select event type...</option>
                <option>Birthday Party</option>
                <option>School / Field Day</option>
                <option>Corporate Event</option>
                <option>Community Festival</option>
                <option>Church / Religious Event</option>
                <option>Fundraiser</option>
                <option>Block Party</option>
                <option>Other</option>
              </select>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Event Date *</label>
                <input type="date" name="Event Date" required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Event Start Time *</label>
                <input type="time" name="Event Start Time" required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Duration Needed *</label>
                <select name="Duration Needed" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700 bg-white">
                  <option value="">Select...</option>
                  <option>1 hour</option><option>2 hours</option><option>3 hours</option><option>4 hours</option><option>4+ hours</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Expected Guests *</label>
                <select name="Expected Guests" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700 bg-white">
                  <option value="">Select range...</option>
                  <option>Under 50</option><option>50–100</option><option>100–150</option><option>150–200</option><option>200+</option>
                </select>
              </div>
            </div>

            <h2 className="font-bold text-brand-dark text-base border-b border-gray-100 pb-2 pt-2">Event Location</h2>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Street Address *</label>
              <input type="text" name="Street Address" required placeholder="123 Main Street"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="sm:col-span-1">
                <label className="block text-sm font-bold text-gray-700 mb-1.5">City *</label>
                <input type="text" name="city" required placeholder="Baltimore"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">State *</label>
                <select name="state" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700 bg-white">
                  <option value="">--</option><option>MD</option><option>DC</option><option>VA</option><option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Zip Code *</label>
                <input type="text" name="Zip Code" required placeholder="21201"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Truck Parking Available? *</label>
              <select name="Truck Parking" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700 bg-white">
                <option value="">Select...</option>
                <option>Yes — street parking available</option>
                <option>Yes — parking lot available</option>
                <option>Limited — need to discuss</option>
                <option>Not sure</option>
              </select>
            </div>

            <h2 className="font-bold text-brand-dark text-base border-b border-gray-100 pb-2 pt-2">Package & Pricing</h2>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Package Interest</label>
              <select name="Package Interest" value={packageVal} onChange={e => setPackage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700 bg-white">
                <option value="Not sure yet">Not sure yet — help me pick!</option>
                <option value="Starter">Starter — $350 / 2 hrs / up to 50 servings</option>
                <option value="Popular">Popular — $500 / 3 hrs / up to 80 servings</option>
                <option value="Premium">Premium — $700 / 4 hrs / up to 120 servings</option>
                <option value="School">School / Fundraiser Package</option>
                <option value="Custom">Custom / Need a quote</option>
              </select>
            </div>

            {/* Live price display */}
            {pkgInfo.price && (
              <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-brand-dark">{pkgInfo.label}</p>
                    <p className="text-gray-500 text-sm">{pkgInfo.duration} · {pkgInfo.servings}</p>
                  </div>
                  <p className="font-display text-3xl text-brand-blue">${pkgInfo.price}</p>
                </div>
                <p className="text-xs text-gray-400 mt-2">*Estimate — final pricing confirmed within 24 hours. Deposit secures your date.</p>
              </div>
            )}

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">How Did You Hear About Us?</label>
              <select name="How Did You Hear About Us" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700 bg-white">
                <option value="">Select...</option>
                <option>Google Search</option><option>Facebook</option><option>Instagram</option>
                <option>Word of Mouth / Friend</option><option>Saw the Truck</option><option>Previous Customer</option><option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Additional Notes / Special Requests</label>
              <textarea name="Additional Notes" rows={4} placeholder="Any special requests, questions, or details about your event..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none" />
            </div>

            <button type="submit" disabled={sending}
              className="w-full py-4 bg-gradient-to-r from-brand-blue to-brand-cyan hover:from-brand-dark hover:to-brand-blue text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg shadow-brand-blue/30">
              {sending ? "Sending your booking summary..." : "Submit & Get Pricing Summary 📋"}
            </button>

            <p className="text-center text-gray-400 text-xs">
              You&apos;ll receive a full pricing summary by email instantly.{" "}
              <a href="tel:+14432813331" className="text-brand-blue font-bold hover:underline">Call 443-281-3331</a> for faster response.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
