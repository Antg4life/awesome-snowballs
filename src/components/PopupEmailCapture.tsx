"use client";

import { useState, useEffect } from "react";

export default function PopupEmailCapture() {
  const [show, setShow]           = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail]         = useState("");
  const [loading, setLoading]     = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("popup-dismissed")) return;
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem("popup-dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://formsubmit.co/ajax/1009ffda7af9208cc9b7d97e7f93af42", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          offer: "$25 Off Event Discount Signup",
          _subject: "🍧 NEW $25 OFF SIGNUP — Awesome Snoballs",
          _autoresponse: "Hi! Your $25 off discount is confirmed! 🍧 Use code SAVE25 when booking your Awesome Snoballs event. Book here: https://www.awesomesnoballs.com/booking or call/text 443-281-3331. Summer dates are filling fast — don't wait! — Anthony & The Awesome Snoballs Team",
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
              <div className="text-6xl mb-3">🍧</div>
              <div className="inline-block px-3 py-1 bg-red-100 text-red-600 font-bold text-xs rounded-full mb-3 uppercase tracking-widest">
                Limited Time Offer
              </div>
              <h2 className="font-display text-3xl text-brand-dark mb-2">
                Get <span className="text-brand-blue">$25 Off</span> Your Event!
              </h2>
              <p className="text-gray-500 text-sm">
                Enter your email and we&apos;ll send your discount code instantly. Use it on any event booking!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue outline-none transition-all text-gray-700"
              />
              <button type="submit" disabled={loading}
                className="w-full py-3.5 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-bold text-lg rounded-xl hover:opacity-90 transition-all shadow-lg">
                {loading ? "Sending..." : "Claim My $25 Off 🎉"}
              </button>
            </form>

            <p className="text-center text-xs text-gray-400 mt-3">
              No spam ever. Unsubscribe anytime.
            </p>
            <button onClick={dismiss} className="block w-full text-center text-xs text-gray-400 mt-1 hover:underline">
              No thanks, I don&apos;t want a discount
            </button>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="font-display text-3xl text-brand-dark mb-2">Check Your Email!</h2>
            <p className="text-gray-600 mb-2">Your <strong className="text-brand-blue">$25 off</strong> discount code is on its way.</p>
            <div className="bg-brand-blue/10 rounded-xl p-3 mb-5">
              <p className="text-brand-blue font-bold text-lg">Code: SAVE25</p>
              <p className="text-xs text-gray-500">Use when booking your event</p>
            </div>
            <a href="/booking/"
              className="block w-full py-3 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-bold text-lg rounded-xl mb-2">
              Book My Event Now →
            </a>
            <button onClick={dismiss} className="text-gray-400 text-sm hover:underline">Close</button>
          </div>
        )}
      </div>
    </div>
  );
}
