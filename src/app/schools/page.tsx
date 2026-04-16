export default function SchoolsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue via-brand-cyan to-green-400 py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto relative">
          <a href="/" className="inline-block mb-6 text-white/70 hover:text-white font-bold text-sm transition-colors">
            ← Back to Home
          </a>
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-brand-dark font-bold text-sm px-5 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Limited Spring Dates Available — Book Now!
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-4 leading-tight">
            Cool Down Your<br />
            <span className="text-yellow-300">School Events!</span> 🍧
          </h1>
          <p className="text-white/90 text-xl sm:text-2xl max-w-2xl mx-auto mb-8">
            Maryland&apos;s #1 mobile snoball truck — serving authentic Hawaiian shaved ice
            that students <strong>LOVE</strong> at Field Days, Carnivals &amp; Celebrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14432813331"
              className="px-10 py-4 bg-yellow-400 text-brand-dark font-bold text-xl rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:scale-105"
            >
              📞 Call to Book: 443-281-3331
            </a>
            <a
              href="/booking/"
              className="px-10 py-4 bg-white/20 hover:bg-white/30 text-white font-bold text-xl rounded-full transition-all duration-300 border-2 border-white/50"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Special Pricing Banner */}
      <section className="bg-red-600 py-10 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-yellow-300 font-bold text-lg uppercase tracking-widest mb-2">New Special Offer</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-3">
            $3 Per Snoball — School Events!
          </h2>
          <p className="text-white/90 text-xl mb-6">
            Special <span className="font-bold text-yellow-300">$3 pricing</span> for all school events in <span className="font-bold text-yellow-300">March, April &amp; May</span>.
            Tickets sold in packages of 50 or 100 — pass them out at the start, collect one per snoball!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="bg-white/15 rounded-2xl px-8 py-4 text-white text-center">
              <p className="font-display text-5xl text-yellow-300">50</p>
              <p className="font-bold text-lg">Ticket Pack</p>
              <p className="text-white/70 text-sm">$150 total · $3 each</p>
            </div>
            <div className="bg-white/15 rounded-2xl px-8 py-4 text-white text-center border-4 border-yellow-400">
              <p className="text-yellow-300 text-xs font-bold uppercase mb-1">Best Value</p>
              <p className="font-display text-5xl text-yellow-300">100</p>
              <p className="font-bold text-lg">Ticket Pack</p>
              <p className="text-white/70 text-sm">$300 total · $3 each</p>
            </div>
          </div>
          <p className="text-white/60 text-sm mt-4">*Special pricing valid March, April &amp; May. Standard pricing applies other months.</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-brand-light/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-brand-cyan/15 text-brand-blue font-bold text-sm rounded-full mb-4 uppercase tracking-widest">
              Why Schools Choose Us
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-brand-dark mb-4">
              Better Than the <span className="gradient-text">Competition</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We&apos;re not your average shaved ice vendor. Here&apos;s why Maryland schools
              are switching to Awesome Snoballs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🍧",
                title: "Real Hawaiian Shaved Ice",
                desc: "Ultra-fluffy shaved ice — not crushed ice or slushies. Our snoballs are lighter, creamier, and more flavorful than anything else on the market.",
                color: "bg-brand-cyan/10 border-brand-cyan/30",
              },
              {
                icon: "🎨",
                title: "24+ Amazing Flavors",
                desc: "Cherry, Tiger's Blood, Watermelon, Grape, Blue Raspberry, Egg Custard, and 18+ more. Students love mixing flavors — every snoball is unique!",
                color: "bg-brand-pink/10 border-brand-pink/30",
              },
              {
                icon: "✅",
                title: "Simple Ticket System",
                desc: "Pre-purchase ticket packs of 50 or 100. Hand them out at the start of the event — no cash handling, no lines, no headaches for your staff.",
                color: "bg-green-50 border-green-200",
              },
              {
                icon: "🚛",
                title: "We Come to YOU",
                desc: "Our fully equipped mobile truck comes directly to your school anywhere in Maryland, DC, and the DMV area. Setup and breakdown included — zero effort on your part.",
                color: "bg-brand-yellow/10 border-brand-yellow/30",
              },
              {
                icon: "👨‍👩‍👧",
                title: "Local Family Business",
                desc: "We&apos;re a Maryland-based family business, not a corporate chain. When you book with us, you&apos;re supporting your local community.",
                color: "bg-purple-50 border-purple-200",
              },
              {
                icon: "💰",
                title: "Fundraiser Options Available",
                desc: "Want to raise money for your school? Ask us about our fundraiser split program — your PTA earns a percentage of every snoball sold!",
                color: "bg-orange-50 border-orange-200",
              },
            ].map((item) => (
              <div key={item.title} className={`rounded-2xl p-6 border-2 ${item.color} flex gap-4`}>
                <div className="text-4xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-brand-dark text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Flavors */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl text-brand-dark mb-3">
            Student Favorite <span className="gradient-text">Flavors</span>
          </h2>
          <p className="text-gray-500 mb-10">Our most popular flavors for school events — every cup is a hit!</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Cherry",        color: "bg-red-100 text-red-600 border-red-200" },
              { name: "Tiger's Blood", color: "bg-red-100 text-red-700 border-red-300" },
              { name: "Grape",         color: "bg-purple-100 text-purple-600 border-purple-200" },
              { name: "Watermelon",    color: "bg-green-100 text-green-600 border-green-200" },
              { name: "Blue Raspberry",color: "bg-blue-100 text-blue-600 border-blue-200" },
              { name: "Egg Custard",   color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
              { name: "Strawberry",    color: "bg-pink-100 text-pink-600 border-pink-200" },
              { name: "Mango",         color: "bg-orange-100 text-orange-600 border-orange-200" },
              { name: "Rainbow",       color: "bg-brand-cyan/15 text-brand-blue border-brand-cyan/30" },
              { name: "+ 15 More!",    color: "bg-gray-100 text-gray-600 border-gray-200" },
            ].map((f) => (
              <span key={f.name} className={`px-5 py-2 rounded-full font-bold text-sm border-2 ${f.color}`}>
                {f.name}
              </span>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-6">8 oz cups served · Add ice cream base or cotton candy for extra fun!</p>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-16 px-4 bg-gradient-to-b from-brand-light/20 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl text-brand-dark mb-10">
            Perfect For <span className="gradient-text">Every School Event</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "🏃", label: "Field Days" },
              { icon: "🎓", label: "End-of-Year Celebrations" },
              { icon: "☀️", label: "Summer School Programs" },
              { icon: "🎪", label: "School Carnivals" },
              { icon: "🏕️", label: "Camps &amp; Youth Programs" },
              { icon: "🍎", label: "Teacher Appreciation" },
              { icon: "💰", label: "PTA Fundraisers" },
              { icon: "🎉", label: "Student Reward Days" },
              { icon: "🤝", label: "Community Events" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-bold text-brand-dark text-sm" dangerouslySetInnerHTML={{ __html: item.label }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl text-brand-dark mb-10">
            How It <span className="gradient-text">Works</span>
          </h2>
          <div className="space-y-6 text-left">
            {[
              { step: "1", title: "Call or Submit a Request", desc: "Contact us at 443-281-3331 or fill out our booking form. We&apos;ll confirm your date and details within 24 hours." },
              { step: "2", title: "Choose Your Ticket Package", desc: "Pick a 50 or 100 ticket pack at $3 each. Pay your deposit to lock in your date — balance due on event day." },
              { step: "3", title: "We Show Up &amp; Set Up", desc: "Our truck arrives on time, fully stocked with all flavors. Setup and breakdown included — zero work for your staff." },
              { step: "4", title: "Students Get Their Snoballs!", desc: "Hand out tickets at the start. Students redeem one ticket per snoball — fast, easy, and no cash needed." },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 items-start bg-brand-light/20 rounded-2xl p-6">
                <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center font-display text-2xl flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark text-lg mb-1" dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-blue to-brand-cyan text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-5xl text-white mb-4">
            Ready to Book? 🎉
          </h2>
          <p className="text-white/80 text-xl mb-8 max-w-xl mx-auto">
            Spring dates are filling fast! Lock in your school event now and give your students
            a day they&apos;ll never forget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14432813331"
              className="px-10 py-4 bg-yellow-400 text-brand-dark font-bold text-xl rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:scale-105"
            >
              📞 Call 443-281-3331
            </a>
            <a
              href="mailto:awesomesnoballs@yahoo.com"
              className="px-10 py-4 bg-white/20 hover:bg-white/30 text-white font-bold text-xl rounded-full transition-all duration-300 border-2 border-white/50"
            >
              ✉️ Email Us
            </a>
          </div>
          <p className="text-white/60 text-sm mt-6">
            awesomesnoballs@yahoo.com · Serving Maryland, DC &amp; the entire DMV Area
          </p>
        </div>
      </section>

    </main>
  );
}
