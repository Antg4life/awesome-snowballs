"use client";

const individualPrices = [
  { size: "Small",    oz: "4 oz",  price: "$3.00", popular: false },
  { size: "Medium",   oz: "8 oz",  price: "$4.00", popular: true  },
  { size: "Large",    oz: "16 oz", price: "$5.00", popular: false },
  { size: "Souvenir", oz: "20 oz", price: "$6.00", popular: false },
];

const partyPackages = [
  {
    name:      "Quick Stop",
    emoji:     "⚡",
    tagline:   "Birthday parties & small backyard events",
    duration:  "30 Minutes",
    servings:  "Up to 15 Snoballs",
    price:     "$75",
    perServing:"$5 / snoball",
    popular:   false,
    badge:     "",
    features:  [
      "30-minute service window",
      "Up to 15 snoballs",
      "All 24 flavors",
      "Cups & spoons included",
    ],
  },
  {
    name:      "Party Pack",
    emoji:     "🎉",
    tagline:   "Most popular for backyard parties",
    duration:  "1 Hour",
    servings:  "Up to 30 Snoballs",
    price:     "$125",
    perServing:"$4.17 / snoball",
    popular:   true,
    badge:     "Best Value",
    features:  [
      "1-hour service window",
      "Up to 30 snoballs",
      "All 24 flavors",
      "Cups & spoons included",
      "Setup & breakdown included",
    ],
  },
  {
    name:      "Block Party",
    emoji:     "🏡",
    tagline:   "Neighborhood events & cookouts",
    duration:  "2 Hours",
    servings:  "Up to 60 Snoballs",
    price:     "$225",
    perServing:"$3.75 / snoball",
    popular:   false,
    badge:     "",
    features:  [
      "2-hour service window",
      "Up to 60 snoballs",
      "All 24 flavors",
      "Cups & spoons included",
      "Setup & breakdown included",
      "Event signage",
    ],
  },
  {
    name:      "Full Event",
    emoji:     "🎪",
    tagline:   "Festivals, fairs & large parties",
    duration:  "3 Hours",
    servings:  "Up to 100 Snoballs",
    price:     "$350",
    perServing:"$3.50 / snoball",
    popular:   false,
    badge:     "",
    features:  [
      "3-hour service window",
      "Up to 100 snoballs",
      "All 24 flavors",
      "Cups & spoons included",
      "Setup & breakdown included",
      "Event signage",
      "Social media shoutout",
    ],
  },
];

const schoolAddOns = [
  {
    name:      "Additional Students",
    icon:      "👤",
    price:     "$5.00",
    unit:      "per student",
    desc:      "Over your package limit? Add as many as you need.",
    highlight: true,
    flat:      false,
  },
  {
    name:      "Ice Cream Bar",
    icon:      "🍦",
    price:     "$3.50",
    unit:      "per student",
    desc:      "Drumstick & Nestlé premium bars served alongside the snoball.",
    highlight: false,
    flat:      false,
  },
  {
    name:      "Cotton Candy",
    icon:      "🍬",
    price:     "$3.00",
    unit:      "per student",
    desc:      "Fresh spun cotton candy — a huge hit at every school event.",
    highlight: false,
    flat:      false,
  },
  {
    name:      "Popcorn",
    icon:      "🍿",
    price:     "$2.00",
    unit:      "per student",
    desc:      "Classic buttered popcorn — great snack add-on for longer events.",
    highlight: false,
    flat:      false,
  },
  {
    name:      "Mini Donut Machine",
    icon:      "🍩",
    price:     "From $400",
    unit:      "flat rate add-on",
    desc:      "State Fair hot mini donuts made fresh on-site. Cinnamon Sugar included. Ask about specialty toppings.",
    highlight: false,
    flat:      true,
  },
  {
    name:      "Fresh Squeezed Lemonade",
    icon:      "🍋",
    price:     "From $250",
    unit:      "flat rate add-on",
    desc:      "Real lemons squeezed on-site. Original or flavored — Strawberry, Mango, Raspberry, Watermelon & more.",
    highlight: false,
    flat:      true,
  },
];

const donutPackages = [
  {
    name:     "Small Batch",
    emoji:    "🍩",
    guests:   "Up to 50 Guests",
    price:    "$300",
    toppings: ["Cinnamon Sugar"],
    popular:  false,
  },
  {
    name:     "Full Service",
    emoji:    "🍩",
    guests:   "Up to 125 Guests",
    price:    "$500",
    toppings: ["Cinnamon Sugar", "Apple Cider Sugar", "Chocolate Drizzle", "Sprinkles"],
    popular:  true,
  },
  {
    name:     "Large Event",
    emoji:    "🍩",
    guests:   "Up to 225 Guests",
    price:    "$700",
    toppings: ["Cinnamon Sugar", "Apple Cider Sugar", "Strawberry", "Chocolate Drizzle", "Sprinkles", "Caramel"],
    popular:  false,
  },
];

const lemonadeEventPackages = [
  {
    name:          "Mini",
    emoji:         "🍋",
    guests:        "25 Cups",
    perCup:        "~$6 / cup",
    original:      "$150",
    flavored:      "$175",
    flavoredExtra: "+$25 for flavored",
    includes:      ["Original Fresh Squeezed", "1 Flavored Option", "Cups & straws included", "Machine & operator on-site"],
    popular:       false,
  },
  {
    name:          "Starter",
    emoji:         "🍋",
    guests:        "50 Cups",
    perCup:        "~$5 / cup",
    original:      "$250",
    flavored:      "$300",
    flavoredExtra: "+$50 for flavored",
    includes:      ["Original Fresh Squeezed", "1 Flavored Option", "Cups & straws included", "Machine & operator on-site", "Setup & cleanup"],
    popular:       false,
  },
  {
    name:          "Standard",
    emoji:         "🍋",
    guests:        "100 Cups",
    perCup:        "~$4.25 / cup",
    original:      "$425",
    flavored:      "$500",
    flavoredExtra: "+$75 for flavored",
    includes:      ["Original Fresh Squeezed", "2 Flavored Options", "Cups & straws included", "Machine & operator on-site", "Setup & cleanup"],
    popular:       true,
  },
  {
    name:          "Premium",
    emoji:         "🍋",
    guests:        "200 Cups",
    perCup:        "~$3.50 / cup",
    original:      "$699",
    flavored:      "$825",
    flavoredExtra: "+$126 for flavored",
    includes:      ["Original Fresh Squeezed", "All Flavored Options", "Cups & straws included", "Machine & operator on-site", "Setup & cleanup", "Refill station option"],
    popular:       false,
  },
];

const lemonadeFlavors = [
  { name: "Original",   color: "bg-yellow-100 text-yellow-700 border-yellow-300" },
  { name: "Strawberry", color: "bg-red-100 text-red-600 border-red-200" },
  { name: "Mango",      color: "bg-orange-100 text-orange-600 border-orange-200" },
  { name: "Raspberry",  color: "bg-pink-100 text-pink-600 border-pink-200" },
  { name: "Watermelon", color: "bg-green-100 text-green-600 border-green-200" },
  { name: "Peach",      color: "bg-amber-100 text-amber-700 border-amber-200" },
  { name: "Blueberry",  color: "bg-blue-100 text-blue-600 border-blue-200" },
];

const schoolHostPackages = [
  {
    name:        "Field Day",
    emoji:       "🏃",
    time:        "1 Hour",
    students:    "Up to 40 Students",
    price:       "$200",
    perStudent:  "~$5.00/student",
    popular:     false,
  },
  {
    name:        "School Celebration",
    emoji:       "🎉",
    time:        "2 Hours",
    students:    "Up to 80 Students",
    price:       "$350",
    perStudent:  "~$4.38/student",
    popular:     true,
  },
  {
    name:        "Full Day Event",
    emoji:       "🏫",
    time:        "4 Hours",
    students:    "Up to 175 Students",
    price:       "$650",
    perStudent:  "~$3.71/student",
    popular:     false,
  },
];

const addOns = [
  { name: "Chocolate Drizzle", price: "+$1.00", desc: "Chocolate drizzled on top of your snoball" },
  { name: "Gum",               price: "+$1.00", desc: "Bubblegum piece at the bottom — a classic!" },
  { name: "Ice Cream Bar",     price: "+$3.50", desc: "Drumstick or Nestlé premium bar served alongside" },
];

const alsoAvailable = [
  { icon: "🍩", name: "Mini Donuts",      price: "Ask!", desc: "Hot fresh State Fair donuts — see below" },
  { icon: "🍋", name: "Fresh Lemonade",   price: "$8",   desc: "Real fresh squeezed · Flavored $10" },
  { icon: "🍬", name: "Cotton Candy",     price: "$4",   desc: "Fresh spun cotton candy" },
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
            Serving Maryland, DC &amp; the DMV Area. Packages start at just $75 — get us to your next event!
          </p>
        </div>

        {/* Party Packages — HERO section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="font-display text-4xl text-brand-dark mb-2">Party &amp; Event Packages</h3>
            <p className="text-gray-500 max-w-lg mx-auto">
              Birthdays, cookouts, block parties &amp; more — we show up, serve, and leave the smiles. Starting at just $75!
            </p>
          </div>

          {/* Value banner */}
          <div className="bg-gradient-to-r from-brand-blue to-brand-cyan rounded-2xl px-6 py-4 mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-white text-center">
            <span className="text-2xl">🏆</span>
            <p className="font-bold text-lg">More snoballs. Lower prices. All 24 flavors.</p>
            <a
              href="/booking/"
              className="shrink-0 px-6 py-2 bg-brand-yellow text-brand-dark font-bold rounded-full hover:opacity-90 transition-opacity text-sm"
            >
              Book Now — It&apos;s Easy!
            </a>
          </div>

          {/* Package grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {partyPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-3xl border-2 shadow-xl flex flex-col transition-all hover:-translate-y-1 hover:shadow-2xl ${
                  pkg.popular
                    ? "bg-brand-blue border-brand-blue text-white"
                    : "bg-white border-gray-100"
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-dark font-bold text-xs px-4 py-1.5 rounded-full shadow whitespace-nowrap">
                    {pkg.badge}
                  </div>
                )}

                <div className="p-6 flex-1">
                  <div className="text-3xl mb-3">{pkg.emoji}</div>
                  <p className={`font-bold text-xl mb-0.5 ${pkg.popular ? "text-white" : "text-brand-dark"}`}>{pkg.name}</p>
                  <p className={`text-xs mb-4 leading-snug ${pkg.popular ? "text-white/70" : "text-gray-400"}`}>{pkg.tagline}</p>

                  <p className={`font-display text-5xl mb-1 ${pkg.popular ? "text-brand-yellow" : "text-brand-blue"}`}>{pkg.price}</p>
                  <p className={`text-xs mb-1 font-semibold ${pkg.popular ? "text-white/60" : "text-gray-400"}`}>{pkg.perServing}</p>
                  <p className={`text-xs mb-5 font-bold ${pkg.popular ? "text-white/80" : "text-brand-cyan"}`}>
                    {pkg.duration} · {pkg.servings}
                  </p>

                  <ul className="space-y-1.5">
                    {pkg.features.map((f) => (
                      <li key={f} className={`flex items-center gap-2 text-xs ${pkg.popular ? "text-white/80" : "text-gray-600"}`}>
                        <span className="text-green-400 shrink-0">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 pt-0">
                  <a
                    href={`/booking/?package=${pkg.name.replace(" ", "+")}`}
                    className={`w-full py-3 rounded-full font-bold text-sm transition-all block text-center ${
                      pkg.popular
                        ? "bg-brand-yellow text-brand-dark hover:opacity-90"
                        : "bg-brand-blue text-white hover:bg-brand-dark"
                    }`}
                  >
                    Book This Package
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mt-5">
            Additional hours available at $100/hr · Over 100 servings? We&apos;ll customize a quote for you!
          </p>
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

        {/* Individual Pricing */}
        <div className="mb-10">
          <h3 className="font-bold text-2xl text-brand-dark text-center mb-2">Individual Snoballs</h3>
          <p className="text-center text-gray-500 text-sm mb-8">Walk-up pricing at public events &amp; pop-ups</p>
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

        {/* School & Fundraiser Section */}
        <div className="mb-20">

          {/* Section header */}
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-brand-pink/15 text-brand-pink font-bold text-sm rounded-full mb-4 uppercase tracking-widest">
              Schools &amp; Fundraisers
            </span>
            <h3 className="font-display text-4xl sm:text-5xl text-brand-dark mb-3">
              Two Simple Ways to <span className="gradient-text">Bring Us to Your School</span>
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Whether your school wants to raise money or just treat the students — we make it easy.
              We handle everything. You just let us know where to park.
            </p>
          </div>

          {/* Two-option comparison */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">

            {/* Option A — Fundraiser */}
            <div className="bg-gradient-to-br from-brand-pink to-brand-coral rounded-3xl p-8 text-white relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative flex-1">
                <div className="inline-block bg-white/20 text-white font-bold text-xs px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
                  Option A — Recommended
                </div>
                <h4 className="font-display text-3xl mb-2">Free Fundraiser Event</h4>
                <p className="font-display text-6xl text-white mb-1">$0</p>
                <p className="text-white/80 text-sm mb-5">No cost to your school, ever</p>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Students purchase their own snoball on the day of the event. Your school automatically receives{" "}
                  <strong className="text-white underline underline-offset-2">25% of every dollar collected</strong> — we cut you a check the same day.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "No paperwork or upfront payment",
                    "We bring the truck, staff & all supplies",
                    "Students pay $4–$5 per snoball on-site",
                    "Your school earns 25% of total sales",
                    "Great for field days, carnivals & spirit nights",
                    "All 24 flavors served fresh on-site",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/90">
                      <span className="mt-0.5 w-4 h-4 bg-white/25 rounded-full flex items-center justify-center shrink-0 text-xs font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="/booking/?package=Fundraiser"
                className="w-full py-3 bg-white text-brand-pink font-bold rounded-full text-center hover:bg-brand-dark hover:text-white transition-all duration-300 shadow-xl block"
              >
                Request a Fundraiser Date
              </a>
            </div>

            {/* Option B — Host-Paid */}
            <div className="bg-white rounded-3xl border-2 border-gray-100 shadow-xl p-8 flex flex-col">
              <div className="flex-1">
                <div className="inline-block bg-brand-blue/10 text-brand-blue font-bold text-xs px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
                  Option B — School Pays
                </div>
                <h4 className="font-display text-3xl text-brand-dark mb-2">Flat-Rate School Package</h4>
                <p className="text-gray-500 mb-5 leading-relaxed">
                  Your school covers the cost upfront — every student gets a snoball included at no extra charge.
                  Simple flat rate, no per-student counting on event day.
                </p>

                {/* Pricing table */}
                <div className="rounded-2xl overflow-hidden border border-gray-100 mb-6">
                  <div className="grid grid-cols-4 bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wide px-4 py-2.5">
                    <span>Package</span>
                    <span className="text-center">Time</span>
                    <span className="text-center">Students</span>
                    <span className="text-right">Price</span>
                  </div>
                  {schoolHostPackages.map((pkg, i) => (
                    <div
                      key={pkg.name}
                      className={`grid grid-cols-4 items-center px-4 py-3.5 text-sm border-t border-gray-100 ${
                        pkg.popular ? "bg-brand-blue/5 font-semibold" : ""
                      }`}
                    >
                      <span className="flex items-center gap-1.5 text-brand-dark font-bold">
                        {pkg.emoji} {pkg.name}
                        {pkg.popular && (
                          <span className="text-[10px] bg-brand-yellow text-brand-dark font-bold px-1.5 py-0.5 rounded-full ml-1 hidden sm:inline">
                            Popular
                          </span>
                        )}
                      </span>
                      <span className="text-center text-gray-500">{pkg.time}</span>
                      <span className="text-center text-gray-500">{pkg.students}</span>
                      <span className="text-right font-display text-brand-blue text-lg">{pkg.price}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Everything included in every package:</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      "Truck, staff & all equipment",
                      "All 24 flavors",
                      "Cups, spoons & napkins",
                      "Setup & breakdown",
                      "No surprise fees",
                      "On-time arrival guaranteed",
                    ].map((item) => (
                      <p key={item} className="text-xs text-gray-600 flex items-center gap-1.5">
                        <span className="text-green-500">✓</span> {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <a
                href="/booking/?package=School"
                className="w-full py-3 bg-brand-blue text-white font-bold rounded-full text-center hover:bg-brand-dark transition-colors block"
              >
                Book a School Package
              </a>
            </div>
          </div>

          {/* School Add-Ons */}
          <div className="mb-8">
            <div className="text-center mb-6">
              <h4 className="font-bold text-xl text-brand-dark mb-1">Add-Ons &amp; Extras</h4>
              <p className="text-gray-500 text-sm">
                Add any of these to your package — priced per student so your total is always easy to calculate.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {schoolAddOns.map((item) => (
                <div
                  key={item.name}
                  className={`rounded-2xl border-2 p-5 flex flex-col gap-2 ${
                    item.highlight
                      ? "border-brand-blue bg-brand-blue/5"
                      : "border-gray-100 bg-white shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{item.icon}</span>
                    {item.highlight && (
                      <span className="text-[10px] font-bold bg-brand-blue text-white px-2 py-0.5 rounded-full uppercase tracking-wide">
                        Per Student
                      </span>
                    )}
                  </div>
                  <p className="font-bold text-brand-dark leading-tight">{item.name}</p>
                  <div className="flex items-baseline gap-1">
                    <p className="font-display text-3xl text-brand-blue">{item.price}</p>
                    <p className="text-gray-400 text-xs">{item.unit}</p>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Quick-quote math helper */}
            <div className="mt-5 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4">
              <p className="text-sm font-bold text-amber-800 mb-2">Example — 100 Students, Snoballs + Ice Cream Bars:</p>
              <div className="grid sm:grid-cols-4 gap-2 text-sm text-amber-900">
                <p>School Celebration (80 students) <span className="font-bold float-right">$300</span></p>
                <p>+ 20 extra students × $4.50 <span className="font-bold float-right">$90</span></p>
                <p>+ Ice Cream Bar × 100 <span className="font-bold float-right">$350</span></p>
                <p className="font-bold border-t border-amber-300 pt-2">Total for 100 students <span className="float-right text-brand-blue">$740</span></p>
              </div>
            </div>
          </div>

          {/* Serving Policy callout */}
          <div className="mb-8 bg-blue-50 border-2 border-brand-blue/20 rounded-2xl p-6 flex flex-col sm:flex-row gap-5 items-start">
            <div className="text-4xl shrink-0">📋</div>
            <div>
              <p className="font-bold text-brand-dark text-base mb-1">80% Minimum Guarantee — Standard Event Catering Policy</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Host-paid packages are billed at a minimum of 80% of your booked headcount regardless of day-of attendance —
                so we always arrive fully stocked and staffed for your event.
                Students above your package limit are billed at $5.00 per student.
                <strong className="text-brand-dark"> Fundraiser events have no minimum — students pay individually.</strong>
              </p>
              <a href="/schools/#policy" className="text-brand-blue font-bold text-xs hover:underline">
                See full policy with examples on our Schools page →
              </a>
            </div>
          </div>

          {/* How to Book — 3 steps */}
          <div className="bg-brand-light/30 rounded-3xl p-8">
            <h4 className="font-bold text-xl text-brand-dark text-center mb-7">How to Book — 3 Simple Steps</h4>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Submit a Request",
                  desc: "Fill out our booking form or call 443-281-3331. Tell us your event date, school size, and which option interests you.",
                },
                {
                  step: "2",
                  title: "We Confirm Your Date",
                  desc: "We'll respond within 24 hours to confirm availability and lock in your spot. A small deposit holds your date.",
                },
                {
                  step: "3",
                  title: "We Show Up & Handle Everything",
                  desc: "Our truck arrives on time, fully stocked. We set up, serve, and clean up. Your staff does nothing.",
                },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-display text-xl shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark mb-1">{s.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="/schools/"
                className="inline-block px-8 py-3 bg-brand-dark text-white font-bold rounded-full hover:bg-brand-blue transition-colors text-sm"
              >
                See Full School Info &amp; Pricing →
              </a>
            </div>
          </div>

        </div>

        {/* Mini Donut Machine Section */}
        <div className="mb-20">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 font-bold text-sm rounded-full mb-4 uppercase tracking-widest">
              New Service
            </span>
            <h3 className="font-display text-4xl sm:text-5xl text-brand-dark mb-3">
              Hot Fresh <span className="text-amber-600">Mini Donuts</span> 🍩
            </h3>
            <p className="text-gray-500 max-w-xl mx-auto">
              State Fair style mini donuts made HOT and fresh on-site at your event.
              We bring the machine, the operator, and all the toppings — you just enjoy the smiles.
            </p>
          </div>

          {/* Hero banner */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 mb-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="font-bold text-amber-100 text-sm uppercase tracking-widest mb-3">State Fair Style · Made On-Site · Always Hot</p>
                <h4 className="font-display text-4xl mb-3">Perfect For Any Event</h4>
                <p className="text-white/90 mb-5 leading-relaxed">
                  Birthdays · School Events · Corporate Parties · Staff Appreciation Days ·
                  Teacher Appreciation · Festivals · Carnivals &amp; More
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Cinnamon Sugar", "Apple Cider Sugar", "Chocolate Drizzle", "Strawberry", "Sprinkles", "Caramel"].map((t) => (
                    <span key={t} className="text-xs bg-white/20 text-white px-3 py-1 rounded-full font-semibold">{t}</span>
                  ))}
                </div>
                <p className="text-amber-200 text-xs mt-3">Toppings availability varies by package</p>
              </div>
              <div className="bg-white/15 rounded-2xl p-5 backdrop-blur-sm">
                <p className="font-bold text-white mb-3 text-sm uppercase tracking-wide">Full Service Includes:</p>
                <ul className="space-y-2">
                  {[
                    "Machine brought to your event",
                    "Trained operator on-site",
                    "Donut mix for your guest count",
                    "Cinnamon Sugar topping included",
                    "Serving bags & napkins included",
                    "Setup & full cleanup",
                    "Can bundle with snoball packages",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/90">
                      <span className="text-amber-300 font-bold">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Donut pricing cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-6">
            {donutPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-3xl border-2 p-7 flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl ${
                  pkg.popular
                    ? "bg-amber-500 border-amber-500 text-white shadow-xl shadow-amber-200"
                    : "bg-white border-amber-100 shadow-md"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-dark font-bold text-xs px-4 py-1.5 rounded-full shadow whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <div className="text-3xl mb-3">{pkg.emoji}</div>
                <p className={`font-bold text-xl mb-1 ${pkg.popular ? "text-white" : "text-brand-dark"}`}>{pkg.name}</p>
                <p className={`text-xs font-semibold mb-4 ${pkg.popular ? "text-amber-100" : "text-amber-600"}`}>{pkg.guests}</p>
                <p className={`font-display text-5xl mb-5 ${pkg.popular ? "text-white" : "text-amber-600"}`}>{pkg.price}</p>
                <div className="flex-1">
                  <p className={`text-xs font-bold uppercase tracking-wide mb-2 ${pkg.popular ? "text-amber-100" : "text-gray-500"}`}>Toppings Included:</p>
                  <ul className="space-y-1.5">
                    {pkg.toppings.map((t) => (
                      <li key={t} className={`flex items-center gap-2 text-xs ${pkg.popular ? "text-white/90" : "text-gray-600"}`}>
                        <span className={pkg.popular ? "text-amber-200" : "text-amber-500"}>✓</span> {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="/booking/?package=MiniDonuts"
                  className={`mt-6 w-full py-3 rounded-full font-bold text-sm transition-all block text-center ${
                    pkg.popular
                      ? "bg-white text-amber-600 hover:bg-brand-dark hover:text-white"
                      : "bg-amber-500 text-white hover:bg-amber-600"
                  }`}
                >
                  Book This Package
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm">
            Bundle Mini Donuts with any snoball package and save $50 · Call 443-281-3331 to ask about combos
          </p>
        </div>

        {/* Fresh Squeezed Lemonade Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 font-bold text-sm rounded-full mb-4 uppercase tracking-widest">
              New Service
            </span>
            <h3 className="font-display text-4xl sm:text-5xl text-brand-dark mb-3">
              Fresh Squeezed <span className="text-yellow-500">Lemonade</span> 🍋
            </h3>
            <p className="text-gray-500 max-w-xl mx-auto">
              Real lemons. Real machine. Squeezed on-site at your event.
              Original or choose from 6 amazing flavors — served ice cold.
            </p>
          </div>

          {/* Hero banner */}
          <div className="bg-gradient-to-r from-yellow-400 to-lime-400 rounded-3xl p-8 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="font-bold text-yellow-900 text-sm uppercase tracking-widest mb-3">100% Real Lemons · Squeezed On-Site · Ice Cold</p>
                <h4 className="font-display text-4xl text-yellow-900 mb-3">Walk-Up Pricing</h4>
                <div className="flex gap-4 mb-5">
                  <div className="bg-white/40 rounded-2xl px-6 py-4 text-center backdrop-blur-sm">
                    <p className="font-display text-5xl text-yellow-900">$8</p>
                    <p className="font-bold text-yellow-800 text-sm">Original</p>
                    <p className="text-yellow-700 text-xs">Classic fresh squeezed</p>
                  </div>
                  <div className="bg-white/40 rounded-2xl px-6 py-4 text-center backdrop-blur-sm border-2 border-white/60">
                    <p className="font-display text-5xl text-yellow-900">$10</p>
                    <p className="font-bold text-yellow-800 text-sm">Flavored</p>
                    <p className="text-yellow-700 text-xs">Your choice of flavor</p>
                  </div>
                </div>
                <p className="text-yellow-800 text-sm">Available at pop-ups &amp; individual events · Add to any event package below</p>
              </div>
              <div>
                <p className="font-bold text-yellow-900 mb-3 text-sm uppercase tracking-wide">Available Flavors:</p>
                <div className="flex flex-wrap gap-2">
                  {lemonadeFlavors.map((f) => (
                    <span key={f.name} className={`px-3 py-1.5 rounded-full font-bold text-sm border-2 ${f.color}`}>
                      {f.name}
                    </span>
                  ))}
                </div>
                <p className="text-yellow-800 text-xs mt-4">All flavors made with real fruit syrup · No artificial colors</p>
              </div>
            </div>
          </div>

          {/* Event packages */}
          <div className="mb-6">
            <h4 className="font-bold text-xl text-brand-dark text-center mb-2">Add Lemonade to Your Event</h4>
            <p className="text-center text-gray-500 text-sm mb-8">
              One flat rate covers the machine, fresh lemons, cups, straws, and our operator.
              Flavored lemonade is a small upcharge — shown clearly on every package.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {lemonadeEventPackages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative rounded-3xl border-2 p-6 flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl ${
                    pkg.popular
                      ? "bg-yellow-400 border-yellow-400 shadow-xl shadow-yellow-200"
                      : "bg-white border-yellow-100 shadow-md"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-blue text-white font-bold text-xs px-4 py-1.5 rounded-full shadow whitespace-nowrap">
                      Best Value
                    </div>
                  )}
                  <div className="text-2xl mb-2">{pkg.emoji}</div>
                  <p className={`font-bold text-lg mb-0.5 ${pkg.popular ? "text-yellow-900" : "text-brand-dark"}`}>{pkg.name}</p>
                  <p className={`text-xs font-bold mb-3 ${pkg.popular ? "text-yellow-800" : "text-yellow-600"}`}>{pkg.guests} · {pkg.perCup}</p>

                  {/* Original vs Flavored price split */}
                  <div className={`rounded-xl p-3 mb-4 ${pkg.popular ? "bg-white/30" : "bg-yellow-50 border border-yellow-200"}`}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className={`text-xs font-semibold ${pkg.popular ? "text-yellow-900" : "text-gray-600"}`}>Original</span>
                      <span className={`font-display text-2xl ${pkg.popular ? "text-yellow-900" : "text-yellow-500"}`}>{pkg.original}</span>
                    </div>
                    <div className={`h-px mb-1.5 ${pkg.popular ? "bg-yellow-600/30" : "bg-yellow-200"}`} />
                    <div className="flex justify-between items-center">
                      <span className={`text-xs font-semibold ${pkg.popular ? "text-yellow-900" : "text-gray-600"}`}>Flavored</span>
                      <div className="text-right">
                        <p className={`font-display text-2xl ${pkg.popular ? "text-yellow-900" : "text-yellow-500"}`}>{pkg.flavored}</p>
                        <p className={`text-[10px] ${pkg.popular ? "text-yellow-800" : "text-yellow-600"}`}>{pkg.flavoredExtra}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <ul className="space-y-1">
                      {pkg.includes.map((f) => (
                        <li key={f} className={`flex items-center gap-1.5 text-xs ${pkg.popular ? "text-yellow-900" : "text-gray-600"}`}>
                          <span className={pkg.popular ? "text-yellow-700 font-bold" : "text-yellow-500"}>✓</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="/booking/?package=Lemonade"
                    className={`mt-5 w-full py-2.5 rounded-full font-bold text-sm transition-all block text-center ${
                      pkg.popular
                        ? "bg-yellow-900 text-white hover:bg-brand-dark"
                        : "bg-yellow-400 text-yellow-900 hover:bg-yellow-500"
                    }`}
                  >
                    Add to My Event
                  </a>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-gray-400 text-sm">
            Bundle Fresh Lemonade with any snoball or donut package and save $25 · Call 443-281-3331 for a combo quote
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="mt-4 text-center bg-gradient-to-r from-brand-blue to-brand-cyan rounded-3xl p-10 text-white">
          <h3 className="font-display text-4xl mb-3">Need a Custom Quote?</h3>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">Every event is unique! Contact us and we&apos;ll create a package that fits your needs and budget.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/booking/"
              className="px-8 py-3 bg-brand-yellow text-brand-dark font-bold rounded-full hover:opacity-90 transition-opacity inline-block"
            >
              Get a Custom Quote
            </a>
            <a href="tel:+14432813331" className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded-full transition-colors">
              Call 443-281-3331
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
