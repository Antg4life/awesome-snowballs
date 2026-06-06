"use client";

import { useState } from "react";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent]       = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name        = data.get("name")             as string;
    const email       = data.get("email")            as string;
    const phone       = data.get("Phone Number")     as string;
    const inquiryType = data.get("Inquiry Type")     as string;
    const eventDate   = data.get("Event Date")       as string;
    const guests      = data.get("Expected Guests")  as string;

    const isBooking = inquiryType.includes("Book") || inquiryType.includes("Party");
    const isSchool  = inquiryType.includes("School") || inquiryType.includes("Field") || inquiryType.includes("Fundraiser");

    let autoResponse = "";

    if (isBooking) {
      autoResponse = `Hi ${name}! 🍧

We got your inquiry! Mike will personally call or text you at ${phone} within a few hours to check availability and go over pricing.

⚡ SECURE YOUR DATE RIGHT NOW — PAY DEPOSIT:
Summer 2026 dates are filling up fast — don't lose yours!
→ https://square.link/u/zYriSyOu
${eventDate ? `\nYour requested date: ${eventDate}` : ""}${guests ? `\nExpected guests: ${guests}` : ""}

OUR PARTY PACKAGES:
🍧 Quick Stop   — $75  / 30 min  / up to 15 servings
🍧 Party Pack   — $125 / 1 hour  / up to 30 servings
🍧 Block Party  — $225 / 2 hours / up to 60 servings
🍧 Full Event   — $350 / 3 hours / up to 100 servings

Everything included: truck, staff, all 24 flavors, cups, spoons, setup & full cleanup.

ADD-ONS AVAILABLE:
• Hot Mini Donuts (State Fair style) — from $300
• Fresh Squeezed Lemonade — from $150
• Cotton Candy — $3.00/guest
• Ice Cream Bars (Drumstick/Nestlé) — $3.50/guest
• Popcorn — $2.00/guest

Can't wait? Call or text Mike directly:
📞 443-281-3331
🌐 www.awesomesnoballs.com/booking

— Mike & The Awesome Snoballs Team 🍧
Maryland's #1 Mobile Snoball Truck`.trim();
    } else if (isSchool) {
      autoResponse = `Hi ${name}! 🍧

Thanks for reaching out about a school event! Mike will call or text you at ${phone} within a few hours to go over options and hold your date.
${eventDate ? `\nYour requested date: ${eventDate}` : ""}${guests ? `\nExpected students: ${guests}` : ""}

SCHOOL PACKAGES (flat-rate, every student included):
🏫 Field Day          — $200 / 1 hour  / up to 40 students
🏫 School Celebration — $350 / 2 hours / up to 80 students
🏫 Full Day Event     — $650 / 4 hours / up to 175 students
   Additional students: $5.00 each

FREE FUNDRAISER OPTION:
We come at zero cost to your school. Students pay $4–$5 each and your school keeps 25% of every dollar collected. No upfront cost, no risk.

ADD-ONS FOR SCHOOLS:
• Ice Cream Bars — $3.50/student
• Cotton Candy — $3.00/student
• Popcorn — $2.00/student
• Hot Mini Donuts — from $400
• Fresh Squeezed Lemonade — from $250

📞 Call or text Mike: 443-281-3331
🌐 www.awesomesnoballs.com/schools

— Mike & The Awesome Snoballs Team 🍧`.trim();
    } else {
      autoResponse = `Hi ${name}! 🍧

Thanks for reaching out to Awesome Snoballs! Mike will get back to you at ${phone} within a few hours.

Here's a quick look at what we offer:
🍧 Party packages from $75 — birthdays, block parties, pool parties, corporate events
🏫 School packages from $200 — field days, carnivals, end-of-year events
🍩 Hot Mini Donuts from $300
🍋 Fresh Squeezed Lemonade from $150
🍬 Cotton Candy, Ice Cream Bars & Popcorn available as add-ons

24 flavors including Baltimore's famous Egg Custard.
Serving Baltimore, MD, DC and all of DMV!

📞 Call or text Mike: 443-281-3331
🌐 www.awesomesnoballs.com

— Mike & The Awesome Snoballs Team 🍧`.trim();
    }

    // Owner notification + customer CC/auto-reply via FormSubmit
    const formData = new FormData(form);
    formData.set("_subject",      `🍧 NEW INQUIRY — ${name}`);
    formData.set("_cc",           email);
    formData.set("_autoresponse", autoResponse);
    formData.set("_template",     "table");
    formData.set("_captcha",      "false");
    await fetch("https://formsubmit.co/ajax/1009ffda7af9208cc9b7d97e7f93af42", {
      method:  "POST",
      headers: { Accept: "application/json" },
      body:    formData,
    }).catch(() => {});

    setSending(false);
    setSent(true);
    form.reset();
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-brand-light/20 to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 left-1/2 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-10">
          {sent ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="font-display text-3xl text-brand-dark mb-2">Message Sent!</h3>
              <p className="text-gray-500 mb-4">Check your email — we just sent you a confirmation from <strong>awesomesnoballs@yahoo.com</strong>.</p>
              <button onClick={() => setSent(false)} className="px-6 py-2 bg-brand-blue text-white rounded-full font-bold">Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="_subject" value="🍧 NEW INQUIRY — Awesome Snoballs" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="true" />
              <input type="text" name="_honey" style={{display:"none"}} />

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">What can we help with? *</label>
                <select name="Inquiry Type" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700 bg-white">
                  <option value="">Select...</option>
                  <option value="Book for an Event / Party">Book for an Event / Party</option>
                  <option value="School / Field Day Inquiry">School / Field Day Inquiry</option>
                  <option value="Fundraiser Inquiry">Fundraiser Inquiry</option>
                  <option value="General Question">General Question</option>
                  <option value="Flavor Question">Flavor Question</option>
                  <option value="Other">Other</option>
                </select>
              </div>

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

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Event Date (if booking)</label>
                  <input type="date" name="Event Date"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Expected Guests (if booking)</label>
                  <select name="Expected Guests" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700 bg-white">
                    <option value="">Select...</option>
                    <option value="Under 50">Under 50</option>
                    <option value="50–100">50–100</option>
                    <option value="100–150">100–150</option>
                    <option value="150+">150+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Event Address (if booking)</label>
                <input type="text" name="Event Address" placeholder="123 Main St, Baltimore, MD 21201"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Message *</label>
                <textarea name="message" required rows={4} placeholder="Tell us more about your event or question..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none" />
              </div>

              <button type="submit" disabled={sending}
                className="w-full py-4 bg-gradient-to-r from-brand-blue to-brand-cyan hover:from-brand-dark hover:to-brand-blue text-white font-bold text-lg rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/30">
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Prefer to reach us directly?{" "}
            <a href="mailto:awesomesnoballs@yahoo.com" className="text-brand-blue font-bold hover:underline">awesomesnoballs@yahoo.com</a>{" "}
            &middot;{" "}
            <a href="tel:+14432813331" className="text-brand-blue font-bold hover:underline">443-281-3331</a>
          </p>
        </div>
      </div>
    </section>
  );
}
