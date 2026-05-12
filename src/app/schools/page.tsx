const hostPackages = [
  {
    name:       "Field Day",
    emoji:      "🏃",
    time:       "1 Hour",
    students:   "Up to 40 Students",
    price:      "$200",
    perStudent: "~$5.00 / student",
    popular:    false,
  },
  {
    name:       "School Celebration",
    emoji:      "🎉",
    time:       "2 Hours",
    students:   "Up to 80 Students",
    price:      "$350",
    perStudent: "~$4.38 / student",
    popular:    true,
  },
  {
    name:       "Full Day Event",
    emoji:      "🏫",
    time:       "4 Hours",
    students:   "Up to 175 Students",
    price:      "$650",
    perStudent: "~$3.71 / student",
    popular:    false,
  },
];

const largeGroupPackages = [
  {
    name:       "Large Field Day",
    emoji:      "🏟️",
    students:   "175–350 Students",
    time:       "2–3 Hours",
    price:      "$850",
    perStudent: "~$2.43–4.86 / student",
    highlight:  "Perfect for large elementary & middle school field days",
    popular:    false,
  },
  {
    name:       "District Event",
    emoji:      "🏙️",
    students:   "350–525 Students",
    time:       "3–4 Hours",
    price:      "$1,400",
    perStudent: "~$2.67–4.00 / student",
    highlight:  "Multi-grade field days, carnivals & district-wide celebrations",
    popular:    true,
  },
  {
    name:       "City / Park & Rec",
    emoji:      "🌳",
    students:   "525–750 Students",
    time:       "4–5 Hours",
    price:      "$1,800",
    perStudent: "~$2.40–3.43 / student",
    highlight:  "Parks & Rec summer events, community days & city-wide programs",
    popular:    false,
  },
];

const addOns = [
  {
    icon:  "👤",
    name:  "Additional Students",
    price: "$5.00",
    unit:  "per student",
    desc:  "Over your package limit? Just add per student — no new contract needed.",
    hot:   true,
    flat:  false,
  },
  {
    icon:  "🍦",
    name:  "Ice Cream Bar",
    price: "$3.50",
    unit:  "per student",
    desc:  "Drumstick & Nestlé premium bars — a huge crowd-pleaser alongside the snoball.",
    hot:   false,
    flat:  false,
  },
  {
    icon:  "🍬",
    name:  "Cotton Candy",
    price: "$3.00",
    unit:  "per student",
    desc:  "Fresh spun cotton candy served at your event — kids go wild for it.",
    hot:   false,
    flat:  false,
  },
  {
    icon:  "🍿",
    name:  "Popcorn",
    price: "$2.00",
    unit:  "per student",
    desc:  "Classic buttered popcorn — great snack add-on for longer events.",
    hot:   false,
    flat:  false,
  },
  {
    icon:  "🍩",
    name:  "Hot Mini Donuts",
    price: "From $400",
    unit:  "flat rate",
    desc:  "State Fair mini donuts made hot & fresh on-site. Machine + operator + Cinnamon Sugar all included.",
    hot:   false,
    flat:  true,
  },
  {
    icon:  "🍋",
    name:  "Fresh Squeezed Lemonade",
    price: "$4.50",
    unit:  "per student",
    desc:  "Real lemons squeezed on-site. Original or flavored — Strawberry, Mango, Raspberry, Watermelon & more.",
    hot:   false,
    flat:  false,
  },
];

const whyUs = [
  {
    icon:  "🍧",
    title: "Real Hawaiian Shaved Ice",
    desc:  "Ultra-fluffy, paper-thin ice — not a slushy or snow cone. Every snoball is light, smooth, and soaked in real flavor syrup.",
    bg:    "bg-cyan-50 border-cyan-200",
  },
  {
    icon:  "🎨",
    title: "24 Flavors — Every Event",
    desc:  "Cherry, Tiger's Blood, Watermelon, Mango, Grape, Blue Raspberry, Egg Custard, Rainbow, and 16 more. No extra charge for flavors.",
    bg:    "bg-pink-50 border-pink-200",
  },
  {
    icon:  "🚛",
    title: "We Handle Everything",
    desc:  "Truck, staff, supplies, setup, and breakdown — all included. Your staff does nothing except enjoy watching the kids light up.",
    bg:    "bg-yellow-50 border-yellow-200",
  },
  {
    icon:  "💰",
    title: "Earn Money for Your School",
    desc:  "Our fundraiser option costs your school $0. We show up, students buy snoballs, and we hand your school 25% of every dollar collected.",
    bg:    "bg-green-50 border-green-200",
  },
  {
    icon:  "👨‍👩‍👧",
    title: "Local Maryland Family Business",
    desc:  "We're based right here in Maryland — not a franchise. You're supporting a real local family and getting personal, reliable service.",
    bg:    "bg-purple-50 border-purple-200",
  },
  {
    icon:  "📞",
    title: "Fast, Easy Booking",
    desc:  "Call us and get a quote on the spot. We respond within 24 hours and confirm your date quickly — no back-and-forth forms.",
    bg:    "bg-orange-50 border-orange-200",
  },
];

const events = [
  { icon: "🏃", label: "Field Days" },
  { icon: "🎪", label: "School Carnivals" },
  { icon: "🎓", label: "End-of-Year Parties" },
  { icon: "💰", label: "PTA Fundraisers" },
  { icon: "🍎", label: "Teacher Appreciation" },
  { icon: "🎉", label: "Student Reward Days" },
  { icon: "🏕️", label: "Summer Programs" },
  { icon: "🤝", label: "Community Events" },
  { icon: "☀️", label: "Spirit Nights" },
];

export default function SchoolsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-brand-blue via-brand-cyan to-teal-400 py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-yellow/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto relative">
          <a href="/" className="inline-block mb-6 text-white/70 hover:text-white font-bold text-sm transition-colors">
            ← Back to Home
          </a>
          <div className="inline-flex items-center gap-2 bg-brand-yellow text-brand-dark font-bold text-sm px-5 py-2.5 rounded-full mb-6 shadow-xl">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Summer &amp; Fall Dates Filling Fast — Book Early!
          </div>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl text-white mb-5 leading-tight drop-shadow-lg">
            Make Your<br />
            <span className="text-brand-yellow">School Event</span><br />
            Unforgettable!
          </h1>
          <p className="text-white/90 text-xl sm:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Maryland&apos;s #1 mobile snoball truck — we bring the fun, flavors, and smiles straight to your school.
            Field days, fundraisers, carnivals &amp; more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14432813331"
              className="px-10 py-4 bg-brand-yellow text-brand-dark font-bold text-xl rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:scale-105"
            >
              📞 Call to Book: 443-281-3331
            </a>
            <a
              href="/booking/?package=School"
              className="px-10 py-4 bg-white/20 hover:bg-white/30 text-white font-bold text-xl rounded-full transition-all duration-300 border-2 border-white/50"
            >
              Request a Free Quote
            </a>
          </div>
          {/* Trust bar */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/80 text-sm font-semibold">
            <span className="flex items-center gap-1.5">✓ Zero setup work for your staff</span>
            <span className="flex items-center gap-1.5">✓ 24 flavors included</span>
            <span className="flex items-center gap-1.5">✓ Fundraiser option earns your school 25%</span>
            <span className="flex items-center gap-1.5">✓ Serving MD, DC &amp; DMV</span>
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR PATH */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-brand-pink/15 text-brand-pink font-bold text-sm rounded-full mb-4 uppercase tracking-widest">
              School Pricing
            </span>
            <h2 className="font-display text-5xl sm:text-6xl text-brand-dark mb-4">
              Two Ways to <span className="gradient-text">Book Us</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Pick the option that works best for your school — both are simple, stress-free, and a huge hit with students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">

            {/* OPTION A — Fundraiser */}
            <div className="bg-gradient-to-br from-brand-pink to-brand-coral rounded-3xl p-8 text-white relative overflow-hidden flex flex-col">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full pointer-events-none" />
              <div className="relative flex-1">
                <div className="inline-block bg-white/20 text-white font-bold text-xs px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
                  Option A · Most Popular
                </div>
                <h3 className="font-display text-4xl mb-1">Free Fundraiser</h3>
                <p className="font-display text-7xl text-white mb-1 leading-none">$0</p>
                <p className="text-white/80 font-bold mb-5">No cost to your school — ever.</p>
                <p className="text-white/90 text-sm leading-relaxed mb-6">
                  Students pay for their own snoballs on the day of the event.
                  Your school automatically receives <strong className="text-white text-base">25% of every dollar collected</strong>.
                  We hand you a check before we leave.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {[
                    "No upfront payment or deposit required",
                    "We bring the truck, staff & all supplies",
                    "Students pay $4–$5 per snoball on-site",
                    "Your school earns 25% of total sales",
                    "100-student event = ~$100+ back to your school",
                    "Perfect for field days, spirit nights & carnivals",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/90">
                      <span className="mt-0.5 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center shrink-0 text-xs font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="/booking/?package=Fundraiser"
                className="w-full py-4 bg-white text-brand-pink font-bold rounded-full text-center text-lg hover:bg-brand-dark hover:text-white transition-all duration-300 shadow-xl block"
              >
                Book a Free Fundraiser
              </a>
            </div>

            {/* OPTION B — Host-Paid */}
            <div className="bg-white rounded-3xl border-2 border-gray-100 shadow-xl p-8 flex flex-col">
              <div className="flex-1">
                <div className="inline-block bg-brand-blue/10 text-brand-blue font-bold text-xs px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
                  Option B · School Pays
                </div>
                <h3 className="font-display text-4xl text-brand-dark mb-1">Flat-Rate Package</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  Your school pays one flat rate — every student gets a free snoball included.
                  No per-student counting on event day. Simple.
                </p>

                {/* Package table */}
                <div className="rounded-2xl overflow-hidden border border-gray-100 mb-5">
                  <div className="grid grid-cols-4 bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wide px-4 py-3">
                    <span>Package</span>
                    <span className="text-center">Time</span>
                    <span className="text-center">Students</span>
                    <span className="text-right">Price</span>
                  </div>
                  {hostPackages.map((pkg) => (
                    <div
                      key={pkg.name}
                      className={`grid grid-cols-4 items-center px-4 py-4 border-t border-gray-100 ${
                        pkg.popular ? "bg-brand-blue/5" : ""
                      }`}
                    >
                      <span className="flex items-center gap-1.5 font-bold text-brand-dark text-sm">
                        {pkg.emoji} {pkg.name}
                        {pkg.popular && (
                          <span className="hidden sm:inline text-[10px] bg-brand-yellow text-brand-dark font-bold px-1.5 py-0.5 rounded-full ml-1">
                            Popular
                          </span>
                        )}
                      </span>
                      <span className="text-center text-gray-500 text-sm">{pkg.time}</span>
                      <span className="text-center text-gray-500 text-xs">{pkg.students}</span>
                      <div className="text-right">
                        <p className="font-display text-brand-blue text-xl">{pkg.price}</p>
                        <p className="text-gray-400 text-[10px]">{pkg.perStudent}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Always included — no extra charges:</p>
                  <div className="grid grid-cols-2 gap-y-1.5 gap-x-3">
                    {[
                      "Truck, staff & all equipment",
                      "All 24 flavors",
                      "Cups, spoons & napkins",
                      "Setup & full cleanup",
                      "On-time arrival",
                      "No hidden fees",
                    ].map((item) => (
                      <p key={item} className="text-xs text-gray-600 flex items-center gap-1.5">
                        <span className="text-green-500 font-bold">✓</span> {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <a
                href="/booking/?package=School"
                className="w-full py-4 bg-brand-blue text-white font-bold rounded-full text-center text-lg hover:bg-brand-dark transition-colors block"
              >
                Book a School Package
              </a>
            </div>
          </div>

          {/* ADD-ONS */}
          <div className="mb-4">
            <div className="text-center mb-8">
              <h3 className="font-display text-3xl text-brand-dark mb-2">Upgrade Your Event — Add-Ons</h3>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                Per-student items priced so your total is instant to calculate.
                Flat-rate items (like Mini Donuts) are one fixed price regardless of count.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {addOns.map((item) => (
                <div
                  key={item.name}
                  className={`rounded-2xl border-2 p-5 transition-all hover:-translate-y-1 hover:shadow-lg ${
                    item.hot
                      ? "border-brand-blue bg-brand-blue/5"
                      : item.flat
                      ? "border-amber-300 bg-amber-50"
                      : "border-gray-100 bg-white shadow-md"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{item.icon}</span>
                    {item.hot && (
                      <span className="text-[10px] font-bold bg-brand-blue text-white px-2 py-0.5 rounded-full uppercase tracking-wide">
                        Per Student
                      </span>
                    )}
                    {item.flat && (
                      <span className="text-[10px] font-bold bg-amber-500 text-white px-2 py-0.5 rounded-full uppercase tracking-wide">
                        Flat Rate
                      </span>
                    )}
                  </div>
                  <p className="font-bold text-brand-dark mb-1">{item.name}</p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <p className={`font-display text-3xl ${item.flat ? "text-amber-600" : "text-brand-blue"}`}>{item.price}</p>
                    <p className="text-gray-400 text-xs">{item.unit}</p>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Quick-quote reference box */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
              <p className="font-bold text-amber-900 mb-5 flex items-center gap-2 text-base">
                <span className="text-xl">🧮</span>
                Pricing Examples — See How Easy It Is to Build Your Package
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-3">Example A<br/>60 Students · Snoballs Only</p>
                  <div className="space-y-1.5 text-sm text-amber-900">
                    <div className="flex justify-between"><span>School Celebration (80)</span><span className="font-bold">$350</span></div>
                    <div className="flex justify-between"><span>60 students — under limit</span><span className="font-bold">$0</span></div>
                    <div className="flex justify-between border-t border-amber-300 pt-1.5 mt-1.5 font-bold text-brand-blue text-base"><span>Total</span><span>$350</span></div>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-3">Example B<br/>100 Students · Snoballs + Ice Cream</p>
                  <div className="space-y-1.5 text-sm text-amber-900">
                    <div className="flex justify-between"><span>School Celebration (80)</span><span className="font-bold">$350</span></div>
                    <div className="flex justify-between"><span>+ 20 extra × $5.00</span><span className="font-bold">$100</span></div>
                    <div className="flex justify-between"><span>Ice Cream Bar × 100</span><span className="font-bold">$350</span></div>
                    <div className="flex justify-between border-t border-amber-300 pt-1.5 mt-1.5 font-bold text-brand-blue text-base"><span>Total</span><span>$800</span></div>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-3">Example C<br/>100 Students · Full Experience</p>
                  <div className="space-y-1.5 text-sm text-amber-900">
                    <div className="flex justify-between"><span>School Celebration (80)</span><span className="font-bold">$350</span></div>
                    <div className="flex justify-between"><span>+ 20 extra × $5.00</span><span className="font-bold">$100</span></div>
                    <div className="flex justify-between"><span>Mini Donuts (flat)</span><span className="font-bold">$400</span></div>
                    <div className="flex justify-between"><span>Lemonade × 100 × $4.50</span><span className="font-bold">$450</span></div>
                    <div className="flex justify-between border-t border-amber-300 pt-1.5 mt-1.5 font-bold text-brand-blue text-base"><span>Total</span><span>$1,300</span></div>
                  </div>
                </div>
              </div>
              <p className="text-amber-700 text-xs mt-5">* Over 175 students? See our <strong>Large Groups &amp; Districts</strong> pricing below — packages up to 750+ students.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVING POLICY */}
      <section className="py-16 px-4 bg-blue-50 border-y-2 border-blue-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-brand-blue/10 text-brand-blue font-bold text-sm rounded-full mb-4 uppercase tracking-widest">
              Our Serving Policy
            </span>
            <h2 className="font-display text-4xl text-brand-dark mb-3">
              Simple, <span className="gradient-text">Transparent Pricing</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We prepare specifically for your event based on your confirmed count.
              Like any professional catering service, an <strong>80% minimum guarantee</strong> applies
              to all host-paid packages — so we always show up fully stocked and ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* What the guarantee means */}
            <div className="bg-white rounded-2xl p-6 border-2 border-brand-blue/20 shadow-sm">
              <p className="font-bold text-brand-dark mb-1 flex items-center gap-2 text-lg">
                <span>📋</span> The 80% Minimum Guarantee
              </p>
              <p className="text-gray-500 text-sm mb-5">Standard for all professional event catering — familiar to any school administrator.</p>
              <ul className="space-y-3">
                {[
                  "Give us your best estimated headcount when booking",
                  "You are billed for a minimum of 80% of that count regardless of day-of attendance",
                  "Students above your package limit are billed at $5.00 per student",
                  "Fundraiser events are not affected — students pay individually, no minimum applies",
                  "For the best result, give us a realistic count — we stock and staff exactly for that number",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className="text-brand-blue font-bold mt-0.5 shrink-0">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Side-by-side examples */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-5 border border-blue-100 shadow-sm">
                <p className="text-xs font-bold text-brand-blue uppercase tracking-wide mb-3">
                  ✅ Example A — Full Attendance
                </p>
                <div className="space-y-1.5 text-sm text-gray-700">
                  <div className="flex justify-between"><span>Booked for</span><span className="font-bold">100 students</span></div>
                  <div className="flex justify-between"><span>Attended</span><span className="font-bold">98 students</span></div>
                  <div className="flex justify-between border-t border-blue-100 pt-1.5 mt-1.5 font-bold text-brand-blue"><span>Billed for</span><span>100 students (package rate)</span></div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-blue-100 shadow-sm">
                <p className="text-xs font-bold text-brand-blue uppercase tracking-wide mb-3">
                  ⚠️ Example B — Lower Attendance
                </p>
                <div className="space-y-1.5 text-sm text-gray-700">
                  <div className="flex justify-between"><span>Booked for</span><span className="font-bold">100 students</span></div>
                  <div className="flex justify-between"><span>Attended</span><span className="font-bold">60 students</span></div>
                  <div className="flex justify-between"><span>80% minimum</span><span className="font-bold">80 students</span></div>
                  <div className="flex justify-between border-t border-blue-100 pt-1.5 mt-1.5 font-bold text-brand-blue"><span>Billed for</span><span>80 students (minimum)</span></div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-blue-100 shadow-sm">
                <p className="text-xs font-bold text-green-600 uppercase tracking-wide mb-3">
                  🎉 Example C — Higher Attendance
                </p>
                <div className="space-y-1.5 text-sm text-gray-700">
                  <div className="flex justify-between"><span>Booked for</span><span className="font-bold">100 students</span></div>
                  <div className="flex justify-between"><span>Attended</span><span className="font-bold">115 students</span></div>
                  <div className="flex justify-between"><span>15 over limit × $5.00</span><span className="font-bold">$75</span></div>
                  <div className="flex justify-between border-t border-blue-100 pt-1.5 mt-1.5 font-bold text-green-600"><span>Billed for</span><span>Package + $75 overage</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Fundraiser note */}
          <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-2xl p-5 flex gap-4 items-start">
            <span className="text-3xl shrink-0">💡</span>
            <div>
              <p className="font-bold text-brand-dark mb-1">Fundraiser Events Are Different</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The 80% minimum only applies to <strong>host-paid packages</strong> where your school pays upfront.
                For our <strong>free fundraiser option</strong>, students pay individually on the day — so there&apos;s
                no minimum, no risk, and no billing surprises. Many schools prefer the fundraiser model for this reason.
              </p>
              <a href="#pricing" className="text-brand-blue font-bold text-xs hover:underline mt-2 inline-block">
                Compare both options above ↑
              </a>
            </div>
          </div>

          <p className="text-center text-gray-400 text-sm mt-8">
            Questions about your specific event count? Call us and we&apos;ll help you estimate correctly —{" "}
            <a href="tel:+14432813331" className="text-brand-blue font-bold hover:underline">443-281-3331</a>
          </p>
        </div>
      </section>

      {/* LARGE GROUPS & DISTRICTS */}
      <section className="py-20 px-4 bg-gradient-to-b from-brand-dark to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-cyan/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto relative">

          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-brand-yellow/20 text-brand-yellow font-bold text-sm rounded-full mb-4 uppercase tracking-widest">
              Large Groups · Districts · City Events
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white mb-4">
              We Scale With You
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Proud to serve <strong className="text-white">Baltimore City Public Schools</strong> and{" "}
              <strong className="text-white">Baltimore City Parks &amp; Recreation</strong> — and any large organization
              that needs a reliable, high-volume snoball experience.
            </p>
          </div>

          {/* Large group cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {largeGroupPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-3xl p-7 flex flex-col border-2 transition-all hover:-translate-y-1 ${
                  pkg.popular
                    ? "bg-brand-blue border-brand-cyan shadow-2xl shadow-brand-blue/40"
                    : "bg-white/10 border-white/20 hover:bg-white/15"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-dark font-bold text-xs px-4 py-1.5 rounded-full shadow whitespace-nowrap">
                    Most Requested
                  </div>
                )}
                <div className="text-3xl mb-3">{pkg.emoji}</div>
                <p className="font-bold text-xl text-white mb-1">{pkg.name}</p>
                <p className="text-white/60 text-xs mb-4 leading-snug">{pkg.highlight}</p>

                <p className="font-display text-5xl text-brand-yellow mb-1">{pkg.price}</p>
                <p className="text-white/50 text-xs mb-1">{pkg.perStudent}</p>
                <p className="text-brand-cyan text-xs font-bold mb-6">{pkg.time} · {pkg.students}</p>

                <ul className="space-y-2 flex-1 mb-6">
                  {[
                    "All 24 flavors served fresh",
                    "Full truck setup & breakdown",
                    "Cups, spoons & napkins included",
                    "Trained staff on-site",
                    "On-time arrival guaranteed",
                    "Add-ons available (donuts, lemonade, ice cream)",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-white/80">
                      <span className="text-brand-cyan font-bold shrink-0">✓</span> {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="/booking/?package=LargeGroup"
                  className={`w-full py-3 rounded-full font-bold text-sm text-center transition-all block ${
                    pkg.popular
                      ? "bg-brand-yellow text-brand-dark hover:opacity-90"
                      : "bg-white/20 text-white hover:bg-white/30 border border-white/30"
                  }`}
                >
                  Request This Package
                </a>
              </div>
            ))}
          </div>

          {/* District perks banner */}
          <div className="bg-white/10 border border-white/20 rounded-3xl p-8 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-brand-yellow font-bold text-sm uppercase tracking-widest mb-3">District & City Accounts</p>
              <h3 className="font-display text-3xl text-white mb-3">Book Multiple Events — Save More</h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Running field days across multiple schools or parks this summer?
                We offer preferred rates and priority scheduling for district and city accounts
                that book 3 or more events. One call sets up your whole season.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { icon: "📅", text: "Priority scheduling for the full summer season" },
                { icon: "💵", text: "Preferred rates for 3+ event bookings" },
                { icon: "📋", text: "One quote covers all your schools or parks" },
                { icon: "🤝", text: "Dedicated point of contact — no runaround" },
                { icon: "🏙️", text: "Serving Baltimore City, Baltimore County & DMV" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="text-xl shrink-0">{item.icon}</span>
                  {item.text}
                </div>
              ))}
              <a
                href="tel:+14432813331"
                className="mt-4 inline-block px-8 py-3 bg-brand-yellow text-brand-dark font-bold rounded-full hover:opacity-90 transition-opacity text-sm"
              >
                📞 Call to Set Up a District Account
              </a>
            </div>
          </div>

          {/* 750+ custom callout */}
          <div className="mt-6 text-center">
            <p className="text-white/50 text-sm">
              Need 750+ servings? No problem — call us and we build a custom quote on the spot.
              <a href="tel:+14432813331" className="text-brand-yellow font-bold ml-1 hover:underline">443-281-3331</a>
            </p>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl sm:text-5xl text-brand-dark mb-3">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-gray-500">From first call to last snoball — we keep it simple.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: "1",
                icon: "📞",
                title: "Call or Submit a Quote",
                desc: "Reach us at 443-281-3331 or use our online form. Tell us your date, student count, and which option sounds right.",
              },
              {
                step: "2",
                icon: "✅",
                title: "We Confirm & Lock In",
                desc: "We respond within 24 hours with your total price and a confirmed date. A small deposit holds your spot.",
              },
              {
                step: "3",
                icon: "🚛",
                title: "We Show Up On Time",
                desc: "Our truck arrives fully stocked with all 24 flavors, supplies, and staff ready to go. Your team does nothing.",
              },
              {
                step: "4",
                icon: "🍧",
                title: "Students Get Their Snoballs!",
                desc: "We serve fast, stay clean, and keep the energy high. When it's done, we pack up and leave — no mess.",
              },
            ].map((s) => (
              <div key={s.step} className="bg-gradient-to-b from-brand-light/40 to-white rounded-2xl p-6 border border-brand-cyan/20 shadow-md text-center">
                <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center font-display text-2xl mx-auto mb-3 shadow-lg">
                  {s.step}
                </div>
                <div className="text-3xl mb-3">{s.icon}</div>
                <p className="font-bold text-brand-dark mb-2">{s.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-brand-cyan/15 text-brand-blue font-bold text-sm rounded-full mb-4 uppercase tracking-widest">
              Why Schools Choose Us
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-brand-dark">
              The Snoballs <span className="gradient-text">Kids Talk About</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item) => (
              <div key={item.title} className={`rounded-2xl p-6 border-2 ${item.bg} flex gap-4`}>
                <div className="text-4xl shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-brand-dark text-base mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS GRID */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl text-brand-dark mb-3">
            Perfect For <span className="gradient-text">Every School Event</span>
          </h2>
          <p className="text-gray-500 mb-10">If kids will be there, we belong there too.</p>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4">
            {events.map((item) => (
              <div key={item.label} className="bg-gradient-to-b from-brand-light/30 to-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-bold text-brand-dark text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLAVORS */}
      <section className="py-14 px-4 bg-gradient-to-b from-brand-light/20 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl text-brand-dark mb-3">
            24 Flavors — <span className="gradient-text">All Included</span>
          </h2>
          <p className="text-gray-500 mb-8">No extra charge for any flavor. Every student picks their favorite.</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              { name: "Cherry",         color: "bg-red-100 text-red-600 border-red-200" },
              { name: "Tiger's Blood",  color: "bg-red-100 text-red-700 border-red-300" },
              { name: "Grape",          color: "bg-purple-100 text-purple-600 border-purple-200" },
              { name: "Watermelon",     color: "bg-green-100 text-green-600 border-green-200" },
              { name: "Blue Raspberry", color: "bg-blue-100 text-blue-600 border-blue-200" },
              { name: "Egg Custard",    color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
              { name: "Strawberry",     color: "bg-pink-100 text-pink-600 border-pink-200" },
              { name: "Mango",          color: "bg-orange-100 text-orange-600 border-orange-200" },
              { name: "Rainbow",        color: "bg-cyan-100 text-cyan-700 border-cyan-200" },
              { name: "Bahama Mama",    color: "bg-rose-100 text-rose-600 border-rose-200" },
              { name: "Cotton Candy",   color: "bg-fuchsia-100 text-fuchsia-600 border-fuchsia-200" },
              { name: "+ 13 More!",     color: "bg-gray-100 text-gray-600 border-gray-200" },
            ].map((f) => (
              <span key={f.name} className={`px-4 py-2 rounded-full font-bold text-sm border-2 ${f.color}`}>
                {f.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-blue to-brand-cyan text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto relative">
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-4 drop-shadow">
            Ready to Book? 🍧
          </h2>
          <p className="text-white/80 text-xl mb-8 max-w-xl mx-auto">
            Dates book up fast — especially spring and end-of-year season.
            Call us now and get your date locked in within minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="tel:+14432813331"
              className="px-10 py-4 bg-brand-yellow text-brand-dark font-bold text-xl rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:scale-105"
            >
              📞 Call 443-281-3331
            </a>
            <a
              href="/booking/?package=School"
              className="px-10 py-4 bg-white/20 hover:bg-white/30 text-white font-bold text-xl rounded-full transition-all duration-300 border-2 border-white/50"
            >
              Request a Free Quote
            </a>
          </div>
          <p className="text-white/60 text-sm">
            awesomesnoballs@yahoo.com · Serving Maryland, DC &amp; the entire DMV Area
          </p>
        </div>
      </section>

    </main>
  );
}
