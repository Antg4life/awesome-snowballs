export default function Urgency() {
  return (
    <section className="py-16 bg-gradient-to-r from-red-500 to-orange-400 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-flex items-center gap-2 bg-white/20 text-white font-bold text-sm px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse" />
          Limited Availability
        </div>
        <h2 className="font-display text-4xl sm:text-5xl text-white mb-4">
          Summer Dates Are Filling Fast! 🍧
        </h2>
        <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
          We book up quickly every year — especially weekends and holidays.
          Don&apos;t wait until your date is gone!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://square.link/u/zYriSyOu"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-white text-red-500 font-bold text-lg rounded-full hover:bg-yellow-300 hover:text-brand-dark transition-all duration-300 shadow-2xl hover:scale-105"
          >
            Book Your Date Now 🎉
          </a>
          <a
            href="tel:+14432813331"
            className="px-10 py-4 bg-white/20 hover:bg-white/30 text-white font-bold text-lg rounded-full transition-all duration-300 border-2 border-white/50"
          >
            Call 443-281-3331
          </a>
        </div>
        <p className="text-white/70 text-sm mt-6">
          A small deposit secures your date — pay the rest on event day!
        </p>
      </div>
    </section>
  );
}
