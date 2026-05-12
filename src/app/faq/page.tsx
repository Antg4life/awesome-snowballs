export const metadata = {
  title: "FAQ — Awesome Snoballs | Maryland Mobile Snoball Truck",
  description: "Frequently asked questions about booking Awesome Snoballs for your event. Pricing, flavors, service area, deposits and more.",
};

const faqs = [
  {
    q: "How much does it cost to book the Awesome Snoballs truck?",
    a: "Our school event pricing starts at $3 per student during March, April & May. For private events, packages start at $350 for 2 hours / up to 50 servings. Contact us for a custom quote based on your event size and date.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve all of Maryland, Washington DC, and the entire DMV area including Northern Virginia. Travel fees may apply for locations outside our standard service area — contact us to confirm your location.",
  },
  {
    q: "How far in advance do I need to book?",
    a: "We recommend booking at least 2–4 weeks in advance, especially for spring and summer weekends which fill up fast. Some popular dates book out months ahead. The sooner you book, the better!",
  },
  {
    q: "How do I secure my date?",
    a: "A small deposit paid via Square secures your date. The remaining balance is due on the day of your event. You can pay your deposit online at any time through our booking page.",
  },
  {
    q: "What flavors do you offer?",
    a: "We offer 24+ amazing flavors including Cherry, Tiger's Blood, Watermelon, Grape, Blue Raspberry, Mango, Strawberry, Egg Custard, Coconut, Passion Fruit, Pineapple, and many more. We also offer premium add-ons like ice cream base, cotton candy, condensed milk, and gummy bears.",
  },
  {
    q: "What is a snoball vs. a snow cone?",
    a: "Great question! A snoball (also called Hawaiian shaved ice) is made from ultra-fine shaved ice — much softer and fluffier than a snow cone. The ice absorbs the syrup instead of letting it drip to the bottom, giving you full flavor in every single bite. Once you try a real snoball, you'll never go back to a snow cone!",
  },
  {
    q: "How does the ticket system work for school events?",
    a: "We sell pre-purchased ticket packs of 50 or 100 tickets at $3 each. You hand out the tickets to students at the start of the event, and students redeem one ticket per snoball at the truck. No cash handling needed — it's fast, easy, and stress-free for your staff.",
  },
  {
    q: "How long does the truck stay at an event?",
    a: "Service time depends on your package. Our packages range from 2 to 4+ hours. We arrive 30 minutes early to set up and stay for your full booked time. Need more time? Just ask — we can accommodate longer service for an additional fee.",
  },
  {
    q: "Do you offer fundraiser options?",
    a: "Yes! Ask us about our fundraiser split program where your school or organization earns a percentage of every snoball sold. It's a great way to raise money while giving your community a delicious treat.",
  },
  {
    q: "Is there parking required for the truck?",
    a: "Yes, our truck needs a standard parking spot or designated area to set up. Street parking, parking lots, or open field access all work great. We'll confirm the setup details when you book.",
  },
  {
    q: "What types of events do you serve?",
    a: "We serve all kinds of events including school field days, end-of-year celebrations, birthday parties, corporate events, community festivals, block parties, church events, PTA fundraisers, summer camps, and more.",
  },
  {
    q: "What if it rains on my event day?",
    a: "We understand weather happens! Contact us as soon as possible if weather is a concern. We handle rain situations on a case-by-case basis and will work with you to reschedule when possible.",
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-light/30 to-white">

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-cyan py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <a href="/" className="inline-block mb-6 text-white/70 hover:text-white font-bold text-sm transition-colors">
            ← Back to Home
          </a>
          <h1 className="font-display text-5xl sm:text-6xl text-white mb-4">
            Frequently Asked <span className="text-yellow-300">Questions</span>
          </h1>
          <p className="text-white/80 text-xl max-w-xl mx-auto">
            Everything you need to know about booking Awesome Snoballs for your event.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
              <h2 className="font-bold text-brand-dark text-lg mb-2 flex items-start gap-3">
                <span className="text-brand-blue font-display text-2xl leading-none">Q.</span>
                {faq.q}
              </h2>
              <p className="text-gray-600 leading-relaxed pl-8">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-12 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-3xl p-8 text-white text-center">
          <h2 className="font-display text-3xl mb-2">Still Have Questions?</h2>
          <p className="text-white/80 mb-6">We&apos;re happy to help! Call, text, or submit a booking request.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+14432813331"
              className="px-8 py-3 bg-yellow-400 text-brand-dark font-bold text-lg rounded-full hover:bg-yellow-300 transition-all">
              📞 Call 443-281-3331
            </a>
            <a href="/booking/"
              className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-bold text-lg rounded-full border-2 border-white/50 transition-all">
              Request a Quote →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
