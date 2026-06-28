"use client";

import { useState, useEffect } from "react";

export default function PopupEmailCapture() {
  const [show,      setShow]      = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [name,      setName]      = useState("");
  const [phone,     setPhone]     = useState("");
  const [email,     setEmail]     = useState("");
  const [date,      setDate]      = useState("");
  const [eventType, setEventType] = useState("");
  const [guests,    setGuests]    = useState("");
  const [zip,       setZip]       = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("popup-dismissed")) return;
    const timer = setTimeout(() => setShow(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem("popup-dismissed", "true");
  };

  const formatPhone = (val: string) => {
    const d = val.replace(/\D/g, "").slice(0, 10);
    if (d.length <= 3) return d;
    if (d.length <= 6) return `${d.slice(0,3)}-${d.slice(3)}`;
    return `${d.slice(0,3)}-${d.slice(3,6)}-${d.slice(6)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const autoReply = `Hi ${name}! 🍧

We got your availability request${date ? ` for ${date}` : ""}! Mike will personally call you at ${phone} within a few hours to confirm your date and answer any questions.

⚡ SECURE YOUR DATE NOW — PAY DEPOSIT:
Summer 2026 weekends are filling fast. A $100 deposit locks your date before someone else takes it.
→ https://square.link/u/zYriSyOu

OUR PARTY PACKAGES:
=======================================
⚡ Quick Stop   — $125  | ~15 min   | Up to 15 snoballs
🎉 Party Pack  — $225  | ~30 min   | Up to 30 snoballs
🏡 Block Party — $350  | ~1 hour   | Up to 60 snoballs
🎪 Full Event  — $475  | 1–1.5 hrs | Up to 100 snoballs
=======================================
Everything included: truck, staff, all 20 flavors
(including Baltimore's famous Egg Custard!),
cups, spoons, setup & full cleanup. You do nothing.

ADD-ONS TO MAKE IT EXTRA SPECIAL:
• Hot Fresh Mini Donuts (State Fair style) — ask for pricing
• Fresh Squeezed Lemonade — ask for pricing
• Cotton Candy — $3.00/guest
• Ice Cream Bars (Drumstick/Nestlé) — $3.50/guest
• Popcorn — $2.00/guest

BOOK RIGHT NOW:
→ Booking form: www.awesomesnoballs.com/booking
→ Pay $100 deposit: https://square.link/u/zYriSyOu

After paying your deposit, please email us to confirm:
awesomesnoballs@yahoo.com

📞 Questions? Call Mike: 443-281-3331

— Mike & The Awesome Snoballs Team 🍧
Maryland's #1 Mobile Snoball Truck
www.awesomesnoballs.com`;

    try {
      await fetch("https://formsubmit.co/ajax/1009ffda7af9208cc9b7d97e7f93af42", {
        method:  "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject:        `🍧 AVAILABILITY REQUEST — ${name} | ${date || "Date TBD"}`,
          _cc:             email,
          _autoresponse:   autoReply,
          _captcha:        "false",
          Name:            name,
          Phone:           phone,
          Email:           email,
          "Event Date":    date || "Not specified",
          "Event Type":    eventType || "Not specified",
          "Guest Count":   guests || "Not specified",
          "Zip Code":      zip || "Not specified",
          Source:          "Popup — Availability Request",
        }),
      });
    } catch (_) {}

    try {
      await fetch("/api/mailchimp-subscribe", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName: name.split(" ")[0],
          lastName:  name.split(" ").slice(1).join(" "),
          phone,
          tag: "party-lead",
        }),
      });
    } catch (_) {}

    setLoading(false);
    setSubmitted(true);
    sessionStorage.setItem("popup-dismissed", "true");
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in">
        <button onClick={dismiss}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors text-xl">
          ✕
        </button>

        {!submitted ? (
          <>
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">🍧</div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-100 text-red-600 font-bold text-xs rounded-full mb-3 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                Summer Dates Filling Fast
              </div>
              <h2 className="font-display text-3xl text-brand-dark mb-2">
                Check Your <span className="text-brand-blue">Date Availability</span>
              </h2>
              <p className="text-gray-500 text-sm">
                Tell us your event date and we&apos;ll reach out within hours to confirm and hold your spot.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text" required value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name *"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue outline-none transition-all text-gray-700"
              />
              <input
                type="tel" required value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                placeholder="Phone number * (best way to reach you)"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue outline-none transition-all text-gray-700"
              />
              <input
                type="email" required value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address *"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue outline-none transition-all text-gray-700"
              />
              <input
                type="date" value={date} required
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue outline-none transition-all text-gray-500"
              />
              <select required value={eventType} onChange={(e) => setEventType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue outline-none transition-all text-gray-700">
                <option value="">Event type * (select one)</option>
                <option>Birthday Party</option>
                <option>Block Party / Cookout</option>
                <option>Corporate Event</option>
                <option>School / Field Day</option>
                <option>Festival / Community Event</option>
                <option>Other</option>
              </select>
              <select required value={guests} onChange={(e) => setGuests(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue outline-none transition-all text-gray-700">
                <option value="">Expected guests * (select one)</option>
                <option>Under 25</option>
                <option>25–50</option>
                <option>50–100</option>
                <option>100–200</option>
                <option>200+</option>
              </select>
              <input
                type="text" required value={zip}
                onChange={(e) => setZip(e.target.value.replace(/\D/g,"").slice(0,5))}
                placeholder="Event zip code * (for travel estimate)"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue outline-none transition-all text-gray-700"
              />
              <button type="submit" disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-bold text-lg rounded-xl hover:opacity-90 transition-all shadow-lg">
                {loading ? "Sending..." : "Check My Date →"}
              </button>
            </form>

            <p className="text-center text-xs text-gray-400 mt-3">
              Mike will call you within a few hours. No spam, ever.
            </p>
            <button onClick={dismiss} className="block w-full text-center text-xs text-gray-400 mt-1 hover:underline">
              No thanks
            </button>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="font-display text-3xl text-brand-dark mb-2">Got It, {name.split(" ")[0]}!</h2>
            <p className="text-gray-600 mb-1">
              Mike will call <strong>{phone}</strong> within a few hours.
            </p>
            <p className="text-gray-500 text-sm mb-5">Check your email too — we sent you a confirmation.</p>
            <a href="/booking/"
              className="block w-full py-3.5 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-bold text-lg rounded-xl mb-2 hover:opacity-90 transition-all">
              Book &amp; Pay Deposit Now →
            </a>
            <button onClick={dismiss} className="text-gray-400 text-sm hover:underline">Close</button>
          </div>
        )}
      </div>
    </div>
  );
}
