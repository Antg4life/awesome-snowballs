"use client";

import { useState, useEffect } from "react";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("exit-popup-dismissed")) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5) {
        setShow(true);
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 10000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem("exit-popup-dismissed", "true");
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center relative animate-fade-in">
        <button onClick={dismiss}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors text-xl">
          ✕
        </button>

        <div className="text-5xl mb-3">⏰</div>
        <div className="inline-block px-3 py-1 bg-red-100 text-red-600 font-bold text-xs rounded-full mb-3 uppercase tracking-widest">
          Wait — Before You Go!
        </div>
        <h2 className="font-display text-3xl text-brand-dark mb-2">
          Summer Dates Are Almost Gone!
        </h2>
        <p className="text-gray-500 mb-6">
          Don&apos;t lose your summer date to someone else. Check availability right now — takes 30 seconds!
        </p>

        <a href="tel:+14432813331"
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-brand-pink text-white font-bold text-lg rounded-xl mb-3 hover:opacity-90 transition-all shadow-lg">
          📞 Call / Text 443-281-3331
        </a>
        <a href="/booking/"
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-bold text-lg rounded-xl hover:opacity-90 transition-all shadow-lg">
          Check Date Availability →
        </a>

        <button onClick={dismiss} className="block w-full text-center text-xs text-gray-400 mt-4 hover:underline">
          No thanks, I&apos;ll take my chances
        </button>
      </div>
    </div>
  );
}
