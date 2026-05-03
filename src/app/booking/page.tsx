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
            <input type="hidden" name="_subject" value="🍧 NEW BOOKING REQUEST — Awesome Snoballs" />
            <input type="hidden" name="_next" value="https://www.awesomesnoballs.com/thank-you/" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            {/* Contact Info */}
            <h2 className="font-bold text-brand-dark text-base border-b border-gray-100 pb-2">Contact Information</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Your Name *</label>
                <input type="text" name="name" required placeholder="Jane Smith"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone Number *</label>
                <input type="tel" name="phone" required placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Email Address *</label>
              <input type="email" name="email" required placeholder="jane@email.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" />
            </div>

            {/* Event Details */}
            <h2 className="font-bold text-brand-dark text-base border-b border-gray-100 pb-2 pt-2">Event Details</h2>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Event Type *</label>
              <select name="event_type" required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700 bg-white">
                <option value="">Select event type...</option>
                <option value="Birthday Party">Birthday Party</option>
                <option value="School / Field Day">School / Field Day</option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="Community Festival">Community Festival</option>
                <option value="Church / Religious Event">Church / Religious Event</option>
                <option value="Fundraiser">Fundraiser</option>
                <option value="Block Party">Block Party</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Event Date *</label>
                <input type="date" name="event_date" required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Event Start Time *</label>
                <input type="time" name="event_start_time" required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Duration Needed *</label>
                <select name="duration" required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700 bg-white">
                  <option value="">Select...</option>
                  <option value="1 hour">1 hour</option>
                  <option value="2 hours">2 hours</option>
                  <option value="3 hours">3 hours</option>
                  <option value="4 hours">4 hours</option>
                  <option value="4+ hours">4+ hours</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Expected Guests *</label>
                <select name="guest_count" required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700 bg-white">
                  <option value="">Select range...</option>
                  <option value="Under 50">Under 50</option>
                  <option value="50–100">50–100</option>
                  <option value="100–150">100–150</option>
                  <option value="150–200">150–200</option>
                  <option value="200+">200+</option>
                </select>
              </div>
            </div>

            {/* Event Location */}
            <h2 className="font-bold text-brand-dark text-base border-b border-gray-100 pb-2 pt-2">Event Location</h2>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Street Address *</label>
              <input type="text" name="street_address" required placeholder="123 Main Street"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" />
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="sm:col-span-1">
                <label className="block text-sm font-bold text-gray-700 mb-1.5">City *</label>
                <input type="text" name="city" required placeholder="Baltimore"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">State *</label>
                <select name="state" required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700 bg-white">
                  <option value="">--</option>
                  <option value="MD">MD</option>
                  <option value="DC">DC</option>
                  <option value="VA">VA</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Zip Code *</label>
                <input type="text" name="zip_code" required placeholder="21201"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Truck Parking Available? *</label>
              <select name="truck_parking" required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700 bg-white">
                <option value="">Select...</option>
                <option value="Yes - street parking available">Yes — street parking available</option>
                <option value="Yes - parking lot available">Yes — parking lot available</option>
                <option value="Limited - need to discuss">Limited — need to discuss</option>
                <option value="Not sure">Not sure</option>
              </select>
            </div>

            {/* Package */}
            <h2 className="font-bold text-brand-dark text-base border-b border-gray-100 pb-2 pt-2">Package & Add-Ons</h2>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Package Interest</label>
              <select name="package"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700 bg-white">
                <option value="Not sure yet">Not sure yet — help me pick!</option>
                <option value="Starter ($350 / 2hrs / 50 servings)">Starter — $350 / 2 hrs / up to 50 servings</option>
                <option value="Popular ($500 / 3hrs / 80 servings)">Popular — $500 / 3 hrs / up to 80 servings</option>
                <option value="Premium ($700 / 4hrs / 120 servings)">Premium — $700 / 4 hrs / up to 120 servings</option>
                <option value="School / Fundraiser">School / Fundraiser Package</option>
                <option value="Custom">Custom / Need a quote</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Add-Ons Interested In:</label>
              <div className="space-y-2">
                {[
                  { name: "addon_icecream",    label: "Ice Cream Base (+$1.50/person)" },
                  { name: "addon_cottoncand",  label: "Cotton Candy Topping (+$1.00/person)" },
                  { name: "addon_condensed",   label: "Condensed Milk Drizzle" },
                  { name: "addon_gummies",     label: "Gummy Bear Topping" },
                ].map((addon) => (
                  <label key={addon.name} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" name={addon.name} value="Yes"
                      className="w-4 h-4 accent-brand-blue" />
                    <span className="text-sm text-gray-700">{addon.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* How did you hear */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">How Did You Hear About Us?</label>
              <select name="referral_source"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700 bg-white">
                <option value="">Select...</option>
                <option value="Google Search">Google Search</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Word of Mouth / Friend">Word of Mouth / Friend</option>
                <option value="Saw the Truck">Saw the Truck</option>
                <option value="Previous Customer">Previous Customer</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Additional Notes / Special Requests</label>
              <textarea name="notes" rows={4}
                placeholder="Any special requests, questions, or details about your event..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none" />
            </div>

            <button type="submit"
              className="w-full py-4 bg-gradient-to-r from-brand-blue to-brand-cyan hover:from-brand-dark hover:to-brand-blue text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg shadow-brand-blue/30">
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
