export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-light/30 to-white flex items-center justify-center py-20">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="text-7xl mb-6">🍧</div>
        <h1 className="font-display text-5xl sm:text-6xl text-brand-dark mb-4">
          Thank You!
        </h1>
        <p className="text-gray-500 text-xl mb-8 leading-relaxed">
          Your message has been sent! We&apos;ll get back to you within 24 hours.
          We can&apos;t wait to bring the sweet to your event! 🎉
        </p>

        {/* Next steps */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 mb-8 text-left">
          <h2 className="font-bold text-brand-dark text-lg mb-4 text-center">What happens next?</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-brand-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
              <span className="text-gray-600 text-sm">We&apos;ll review your request and reach out within 24 hours to confirm details.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-brand-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
              <span className="text-gray-600 text-sm">A small deposit secures your date — we accept payment through Square.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-brand-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
              <span className="text-gray-600 text-sm">We show up and make your event unforgettable with 24 amazing flavors! 🍧</span>
            </li>
          </ul>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="px-8 py-3 bg-brand-blue hover:bg-brand-dark text-white font-bold rounded-full transition-colors"
          >
            Back to Home
          </a>
          <a
            href="https://www.instagram.com/awesomesnoballs/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold rounded-full hover:opacity-90 transition-opacity"
          >
            Follow @awesomesnoballs
          </a>
        </div>

        <p className="mt-8 text-gray-400 text-sm">
          Need to reach us sooner?{" "}
          <a href="tel:+14432813331" className="text-brand-blue font-bold hover:underline">Call or text 443-281-3331</a>
        </p>
      </div>
    </main>
  );
}
