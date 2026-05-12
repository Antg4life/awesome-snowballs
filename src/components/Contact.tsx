export default function Contact() {
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
          <form
            action="https://formsubmit.co/1009ffda7af9208cc9b7d97e7f93af42"
            method="POST"
            className="space-y-5"
          >
            <input type="hidden" name="_subject" value="🍧 NEW INQUIRY — Awesome Snoballs" />
            <input type="hidden" name="_next" value="https://www.awesomesnoballs.com/thank-you/" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="text" name="_honey" style={{display:"none"}} />

            {/* Inquiry Type */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">What can we help with? *</label>
              <select name="inquiry_type" required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700 bg-white">
                <option value="">Select...</option>
                <option value="Book for an Event / Party">Book for an Event / Party</option>
                <option value="School / Field Day Inquiry">School / Field Day Inquiry</option>
                <option value="Fundraiser Inquiry">Fundraiser Inquiry</option>
                <option value="General Question">General Question</option>
                <option value="Flavor Question">Flavor Question</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Name + Phone */}
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

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Email Address *</label>
              <input type="email" name="email" required placeholder="jane@email.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" />
            </div>

            {/* Event Date + Guest Count */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Event Date (if booking)</label>
                <input type="date" name="event_date"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Expected Guests (if booking)</label>
                <select name="guest_count"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all text-gray-700 bg-white">
                  <option value="">Select...</option>
                  <option value="Under 50">Under 50</option>
                  <option value="50–100">50–100</option>
                  <option value="100–150">100–150</option>
                  <option value="150+">150+</option>
                </select>
              </div>
            </div>

            {/* Event Address */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Event Address (if booking)</label>
              <input type="text" name="event_address" placeholder="123 Main St, Baltimore, MD 21201"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Message *</label>
              <textarea name="message" required rows={4}
                placeholder="Tell us more about your event or question..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none" />
            </div>

            <button type="submit"
              className="w-full py-4 bg-gradient-to-r from-brand-blue to-brand-cyan hover:from-brand-dark hover:to-brand-blue text-white font-bold text-lg rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/30">
              Send Message
            </button>
          </form>
        </div>

        {/* Direct contact info */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Prefer to reach us directly?{" "}
            <a href="mailto:awesomesnoballs@yahoo.com" className="text-brand-blue font-bold hover:underline">
              awesomesnoballs@yahoo.com
            </a>{" "}
            &middot;{" "}
            <a href="tel:+14432813331" className="text-brand-blue font-bold hover:underline">
              443-281-3331
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
