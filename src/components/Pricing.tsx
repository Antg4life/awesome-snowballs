"use client";

const individualPrices = [
  { size: "Small",    oz: "4 oz",  price: "$3.00", popular: false },
  { size: "Medium",   oz: "8 oz",  price: "$4.00", popular: true  },
  { size: "Large",    oz: "16 oz", price: "$5.00", popular: false },
  { size: "Souvenir", oz: "20 oz", price: "$6.00", popular: false },
];

const eventPackages = [
  {
    name:     "Starter",
    duration: "2 Hours",
    servings: "Up to 50 Servings",
    price:    "$350",
    features: ["2-hour service", "Up to 50 snoballs", "All 24 flavors", "Setup & breakdown included"],
    color:    "bg-white border-gray-200",
    badge:    "",
  },
  {
    name:     "Popular",
    duration: "3 Hours",
    servings: "Up to 80 Servings",
    price:    "$500",
    features: ["3-hour service", "Up to 80 snoballs", "All 24 flavors", "Setup & breakdown included", "Event signage"],
    color:    "bg-brand-blue text-white border-brand-blue",
    badge:    "Most Popular",
  },
  {
    name:     "Premium",
    duration: "4 Hours",
    servings: "Up to 120 Servings",
    price:    "$700",
    features: ["4-hour service", "Up to 120 snoballs", "All 24 flavors", "Setup & breakdown included", "Event signage", "Social media shoutout"],
    color:    "bg-white border-gray-200",
    badge:    "",
  },
];

const schoolPackages = [
  {
    name:     "Classroom",
    desc:     "Perfect for classroom parties & rewards",
    price:    "$4.00",
    unit:     "per student",
    min:      "30 student minimum",
    features: ["All 24 flavors", "Paper cups & spoons included", "On-site service"],
  },
  {
    name:     "School Event",
    desc:     "Ideal for field days, carnivals & fundraisers",
    price:    "$350",
    unit:     "2-hour package",
    min:      "Up to 75 students",
    features: ["All 24 flavors", "Cups & spoons included", "Setup & breakdown", "Fundraiser splits available"],
  },
  {
    name:     "Full School Day",
    desc:     "All-day events, fairs & festivals",
    price:    "$650",
    unit:     "half day (4 hrs)",
    min:      "Up to 150 students",
    features: ["All 24 flavors", "Full supplies included", "Setup & breakdown", "Staff coordination", "Fundraiser options"],
  },
];

const addOns = [
  { name: "Ice Cream Base",  price: "+$1.00", desc: "Vanilla ice cream packed in the bottom of your snoball" },
  { name: "Chocolate",       price: "+$1.00", desc: "Chocolate drizzled on top of your snoball" },
  { name: "Gum",             price: "+$1.00", desc: "Bubblegum piece at the bottom — a classic!" },
];

const alsoAvailable = [
  { icon: "🍦", name: "Ice Cream",       price: "$3", desc: "Served individually" },
  { icon: "🍬", name: "Cotton Candy",    price: "$4", desc: "Fresh spun cotton candy" },
  { icon: "🥤", name: "Ice Cold Drinks", price: "$2", desc: "Cold beverages available" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-brand-light/20 to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-pink/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-yellow/20 text-amber-600 font-bold text-sm rounded-full mb-4 uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-brand-dark mb-4">
            Simple, <span className="gradient-text">Fair Pricing</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Serving Maryland, DC &amp; the DMV Area. Contact us for a custom quote for your event!
          </p>
        </div>

        {/* Individual Pricing */}
        <div className="mb-20">
          <h3 className="font-bold text-2xl text-brand-dark text-center mb-8">Individual Snoballs</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {individualPrices.map((item) => (
              <div
                key={item.size}
                className={`relative rounded-2xl p-6 text-center shadow-md border transition-all hover:-translate-y-1 hover:shadow-xl ${
                  item.popular
                    ? "bg-brand-blue text-white border-brand-blue shadow-brand-blue/30"
                    : "bg-white border-gray-100"
                }`}
              >
                {item.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-dark text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <p className={`font-bold text-lg mb-1 ${item.popular ? "text-white" : "text-brand-dark"}`}>{item.size}</p>
                <p className={`text-sm mb-3 ${item.popular ? "text-white/70" : "text-gray-400"}`}>{item.oz}</p>
                <p className={`font-display text-3xl ${item.popular ? "text-brand-yellow" : "text-brand-blue"}`}>{item.price}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">*Prices may vary by location and event</p>
        </div>

        {/* Add-Ons */}
        <div className="mb-10">
          <h3 className="font-bold text-2xl text-brand-dark text-center mb-2">Snoball Add-Ons</h3>
          <p className="text-center text-gray-500 text-sm mb-8">Customize your snoball with these extras</p>
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {addOns.map((addon) => (
              <div key={addon.name} className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
                <p className="font-bold text-brand-dark mb-1">{addon.name}</p>
                <p className="font-display text-2xl text-brand-pink mb-2">{addon.price}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Also Available */}
        <div className="mb-20">
          <h3 className="font-bold text-2xl text-brand-dark text-center mb-2">Also Available</h3>
          <p className="text-center text-gray-500 text-sm mb-8">At individual selling events — all included in event packages</p>
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {alsoAvailable.map((item) => (
              <div key={item.name} className="bg-gradient-to-b from-brand-light/40 to-white rounded-2xl p-5 shadow-md border border-brand-cyan/20 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="text-4xl mb-2">{item.icon}</div>
                <p className="font-bold text-brand-dark mb-1">{item.name}</p>
                <p className="font-display text-3xl text-brand-blue mb-1">{item.price}</p>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Event Packages */}
        <div className="mb-20">
          <h3 className="font-bold text-2xl text-brand-dark text-center mb-2">Event &amp; Party Packages</h3>
          <p className="text-center text-gray-500 mb-8">Perfect for birthdays, corporate events, festivals &amp; more</p>
          <div className="grid md:grid-cols-3 gap-6">
            {eventPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-3xl p-8 border-2 shadow-xl relative ${pkg.color}`}
              >
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-dark font-bold text-sm px-4 py-1.5 rounded-full shadow">
                    {pkg.badge}
                  </div>
                )}
                <p className={`font-bold text-xl mb-1 ${pkg.color.includes("brand-blue") ? "text-white" : "text-brand-dark"}`}>{pkg.name}</p>
                <p className={`text-sm mb-4 ${pkg.color.includes("brand-blue") ? "text-white/70" : "text-gray-400"}`}>{pkg.duration} · {pkg.servings}</p>
                <p className={`font-display text-5xl mb-6 ${pkg.color.includes("brand-blue") ? "text-brand-yellow" : "text-brand-blue"}`}>{pkg.price}</p>
                <ul className="space-y-2">
                  {pkg.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${pkg.color.includes("brand-blue") ? "text-white/80" : "text-gray-600"}`}>
                      <span className="text-green-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className={`mt-6 w-full py-3 rounded-full font-bold text-sm transition-all ${
                    pkg.color.includes("brand-blue")
                      ? "bg-brand-yellow text-brand-dark hover:opacity-90"
                      : "bg-brand-blue text-white hover:bg-brand-dark"
                  }`}
                >
                  Book This Package
                </button>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">Additional hours available at $125/hr · Travel fees may apply outside MD/DC/DMV area</p>
        </div>

        {/* School Packages */}
        <div>
          <h3 className="font-bold text-2xl text-brand-dark text-center mb-2">School &amp; Fundraiser Packages</h3>
          <p className="text-center text-gray-500 mb-8">Special pricing for schools, PTAs, and fundraising events across Maryland &amp; DMV</p>
          <div className="grid md:grid-cols-3 gap-6">
            {schoolPackages.map((pkg) => (
              <div key={pkg.name} className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-brand-pink/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🏫</span>
                </div>
                <p className="font-bold text-xl text-brand-dark mb-1">{pkg.name}</p>
                <p className="text-gray-400 text-sm mb-4">{pkg.desc}</p>
                <p className="font-display text-4xl text-brand-pink mb-1">{pkg.price}</p>
                <p className="text-gray-400 text-xs mb-1">{pkg.unit}</p>
                <p className="text-brand-blue text-xs font-semibold mb-5">{pkg.min}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full py-3 bg-brand-pink hover:bg-brand-coral text-white font-bold rounded-full text-sm transition-colors"
                >
                  Get a Quote
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-brand-blue to-brand-cyan rounded-3xl p-10 text-white">
          <h3 className="font-display text-4xl mb-3">Need a Custom Quote?</h3>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">Every event is unique! Contact us and we&apos;ll create a package that fits your needs and budget.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-brand-yellow text-brand-dark font-bold rounded-full hover:opacity-90 transition-opacity"
            >
              Contact Us
            </button>
            <a href="tel:+14432813331" className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded-full transition-colors">
              Call 443-281-3331
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
