export default function BookingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-light/30 to-white py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <a href="/" className="inline-block mb-6 text-brand-blue font-bold hover:underline text-sm">
            ← Back to Home
          </a>
          <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🍧</span>
          </div>
          <span className="inline-block px-4 py-1.5 bg-brand-cyan/15 text-brand-blue font-bold text-sm rounded-full mb-4 uppercase tracking-widest">
            Book Your Event
          </span>
          <h1 className="font-display text-4xl sm:text-5xl text-brand-dark mb-3">
            Reserve Your <span className="gradient-text">Date</span>
          </h1>
          <p className="text-gray-500 text-lg">
            Fill out the form below and we&apos;ll confirm your booking within 24 hours.
            A small deposit secures your date!
          </p>
        </div>

        {/* Square Pay CTA */}
        <div className="bg-gradient-to-r from-brand-blue to-brand-cyan rounded-2xl p-6 text-white text-center mb-8">
          <p className="font-bold text-lg mb-1">Ready to lock in your date?</p>
          <p className="text-white/80 text-sm mb-4">Pay your deposit now and your date is secured!</p>
          <a
            href="https://square.link/u/zYriSyOu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-brand-yellow text-brand-dark font-bold rounded-full hover:opacity-90 transition-opacity"
          >
            Pay Deposit via Square 💳
          </a>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          <form
            action="https://formsubmit.co/1009ffda7af9208cc9b7d97e7f93af42"
            method="POST"
            className="space-y-5"
          >
            <input type="hidden" name="_subject" value="New Booking Request — Awesome Snoballs" />
            <input type="hidden" name="_next" value="https://www.awesomesnoballs.com/thank-you/" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            {/* Event Type */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Event Type *</label>
              <select
                name="event_type"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700 bg-white"
              >
                <option value="">Select event type...</option>
                <option value="Birthday Party">Birthday Party</option>
                <option value="School / Field Day">School / Field Day</option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="Community Festival">Community Festival</option>
                <option value="Church / Religious Event">Church / Religious Event</option>
                <option value="Fundraiser">Fundraiser</option>
                <option value="Other">Other</option>
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
                  placeholder="jane@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="(555) 123-4567"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
              />
            </div>

            {/* Event Date + Guest Count */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Event Date *</label>
                <input
                  type="date"
                  name="event_date"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Expected Guests *</label>
                <select
                  name="guest_count"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700 bg-white"
                >
                  <option value="">Select range...</option>
                  <option value="Under 50">Under 50</option>
                  <option value="50–80">50–80</option>
                  <option value="80–120">80–120</option>
                  <option value="120+">120+</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Event Location / Address *</label>
              <input
                type="text"
                name="location"
                required
                placeholder="123 Main St, Baltimore, MD"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
              />
            </div>

            {/* Package */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Package Interest</label>
              <select
                name="package"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700 bg-white"
              >
                <option value="Not sure yet">Not sure yet — help me pick!</option>
                <option value="Starter ($350 / 2hrs / 50 servings)">Starter — $350 / 2 hrs / up to 50 servings</option>
                <option value="Popular ($500 / 3hrs / 80 servings)">Popular — $500 / 3 hrs / up to 80 servings</option>
                <option value="Premium ($700 / 4hrs / 120 servings)">Premium — $700 / 4 hrs / up to 120 servings</option>
                <option value="School / Fundraiser">School / Fundraiser Package</option>
                <option value="Custom">Custom / Not sure</option>
              </select>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Additional Notes</label>
              <textarea
                name="notes"
                rows={4}
                placeholder="Any special requests, questions, or details about your event..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-brand-blue to-brand-cyan hover:from-brand-dark hover:to-brand-blue text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg shadow-brand-blue/30"
            >
              Submit Booking Request 🎉
            </button>

            <p className="text-center text-gray-400 text-xs">
              We&apos;ll confirm your booking within 24 hours. Questions?{" "}
              <a href="tel:+14432813331" className="text-brand-blue font-bold hover:underline">Call 443-281-3331</a>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
