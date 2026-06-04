const baltimoreCityAreas = [
  "Hampden", "Federal Hill", "Canton", "Fells Point", "Roland Park",
  "Charles Village", "Mt. Washington", "Reservoir Hill", "Pigtown",
  "Remington", "Waverly", "Lauraville", "Highlandtown", "Greektown",
  "Brooklyn", "Cherry Hill", "Curtis Bay", "Dundalk", "Essex",
];

const baltimoreCountyAreas = [
  "Towson", "Pikesville", "Catonsville", "Owings Mills", "Timonium",
  "Parkville", "Randallstown", "Reisterstown", "Cockeysville", "Perry Hall",
  "White Marsh", "Rosedale", "Lutherville", "Stevenson", "Halethorpe",
];

const surroundingAreas = [
  "Columbia", "Ellicott City", "Glen Burnie", "Annapolis", "Bel Air",
  "Aberdeen", "Edgewood", "Odenton", "Severn", "Pasadena",
  "Laurel", "Greenbelt", "Silver Spring", "Rockville", "Washington DC",
];

const eventTypes = [
  { icon: "🎂", label: "Birthday Parties" },
  { icon: "🏡", label: "Block Parties" },
  { icon: "🏃", label: "Field Days" },
  { icon: "🏕️", label: "Summer Camps" },
  { icon: "🎪", label: "Festivals" },
  { icon: "🏊", label: "Pool Parties" },
  { icon: "🏫", label: "School Events" },
  { icon: "💼", label: "Corporate Events" },
  { icon: "⛪", label: "Church Events" },
  { icon: "🤝", label: "Community Events" },
  { icon: "🎓", label: "Graduations" },
  { icon: "🌳", label: "Park Events" },
];

export default function ServiceArea() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-brand-light/20 to-white" id="service-area">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-brand-cyan/15 text-brand-blue font-bold text-sm rounded-full mb-4 uppercase tracking-widest">
            Where We Serve
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-brand-dark mb-4">
            Bringing Snoballs to <span className="gradient-text">All of Maryland</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We travel to you! From Baltimore City neighborhoods to the suburbs and beyond —
            if you&apos;re in Maryland, DC, or the DMV, we can be there.
          </p>
        </div>

        {/* Event types */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-14">
          {eventTypes.map((e) => (
            <div key={e.label} className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="text-2xl mb-1">{e.icon}</div>
              <p className="text-xs font-bold text-brand-dark leading-tight">{e.label}</p>
            </div>
          ))}
        </div>

        {/* Area grids */}
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-brand-dark mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-brand-blue rounded-full" />
              Baltimore City
            </h3>
            <div className="flex flex-wrap gap-2">
              {baltimoreCityAreas.map((area) => (
                <span key={area} className="text-xs px-3 py-1.5 bg-brand-blue/10 text-brand-blue rounded-full font-semibold hover:bg-brand-blue hover:text-white transition-colors cursor-default">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-brand-dark mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-brand-cyan rounded-full" />
              Baltimore County
            </h3>
            <div className="flex flex-wrap gap-2">
              {baltimoreCountyAreas.map((area) => (
                <span key={area} className="text-xs px-3 py-1.5 bg-brand-cyan/15 text-brand-dark rounded-full font-semibold hover:bg-brand-cyan hover:text-white transition-colors cursor-default">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-brand-dark mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-brand-pink rounded-full" />
              MD, DC &amp; DMV Area
            </h3>
            <div className="flex flex-wrap gap-2">
              {surroundingAreas.map((area) => (
                <span key={area} className="text-xs px-3 py-1.5 bg-brand-pink/10 text-brand-pink rounded-full font-semibold hover:bg-brand-pink hover:text-white transition-colors cursor-default">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-12 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-3xl p-8 text-white text-center">
          <p className="font-display text-3xl mb-2">Don&apos;t See Your Area?</p>
          <p className="text-white/80 mb-5">We travel! Call us and we&apos;ll let you know if we can make it to you.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+14432813331"
              className="px-8 py-3 bg-brand-yellow text-brand-dark font-bold rounded-full hover:opacity-90 transition-opacity">
              📞 Call 443-281-3331
            </a>
            <a href="/booking/"
              className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded-full transition-colors">
              Check My Date →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
