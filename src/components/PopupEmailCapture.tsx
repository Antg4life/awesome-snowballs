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

Thanks for your interest in Awesome Snoballs! We received your availability request and will reach out within a few hours.

YOUR REQUEST DETAILS:
Name: ${name}
Phone: ${phone}
Email: ${email}
Preferred Date: ${date || "Not specified"}

WHAT HAPPENS NEXT:
✓ We'll text or call ${phone} within a few hours to confirm availability
✓ We'll hold your date for 24 hours while you review our packages
✓ A small deposit locks in your date — no date is held without one

READY TO BOOK NOW?
→ Visit: https://www.awesomesnoballs.com/booking
→ Pay deposit: https://square.link/u/zYriSyOu

Questions? Call/text us anytime: 443-281-3331
— Mike & The Awesome Snoballs Team 🍧`;

    try {
      await fetch("https://formsubmit.co/ajax/1009ffda7af9208cc9b7d97e7f93af42", {
        method:  "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject:      `🍧 AVAILABILITY REQUEST — ${name} | ${date || "Date TBD"}`,
          _cc:           email,
          _autoresponse: autoReply,
          _captcha:      "false",
          Name:          name,
          Phone:         phone,
          Email:         email,
          "Event Date":  date || "Not specified",
          Source:        "Popup — Availability Request",
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
                type="date" value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue outline-none transition-all text-gray-500"
              />
              <button type="submit" disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-bold text-lg rounded-xl hover:opacity-90 transition-all shadow-lg">
                {loading ? "Sending..." : "Check My Date →"}
              </button>
            </form>

            <p className="text-center text-xs text-gray-400 mt-3">
              We&apos;ll text or call you within a few hours. No spam, ever.
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
              We&apos;ll text or call <strong>{phone}</strong> within a few hours.
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
