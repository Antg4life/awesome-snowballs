"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form,      setForm]      = useState({ name: "", email: "", phone: "", message: "", subject: "general" });
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-brand-light/20 to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 left-1/2 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-brand-cyan/15 text-brand-blue font-bold text-sm rounded-full mb-4 uppercase tracking-widest">
            Contact Us
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-brand-dark mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Questions about our flavors? Want to book us for an event? We&apos;d love to hear from you!
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-10">
          {submitted ? (
            <div className="text-center py-10">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce-slow" />
              <h3 className="font-display text-3xl text-brand-dark mb-2">Message Sent!</h3>
              <p className="text-gray-500">
                Thanks for reaching out! We&apos;ll get back to you soon. In the meantime, follow us on Instagram for daily updates!
              </p>
              <a
                href="https://www.instagram.com/awesomesnoballs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold rounded-full hover:opacity-90 transition-opacity"
              >
                Follow @awesomesnoballs
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Subject */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">What can we help with?</label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700 bg-white"
                >
                  <option value="general">General Question</option>
                  <option value="event">Book for an Event / Party</option>
                  <option value="catering">Catering Inquiry</option>
                  <option value="flavors">Flavor Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone (optional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us more — event date, expected guests, questions about our flavors..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-brand-blue to-brand-cyan hover:from-brand-dark hover:to-brand-blue text-white font-bold text-lg rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/30 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
