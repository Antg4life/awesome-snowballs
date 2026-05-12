export default function GoogleReviews() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 font-bold text-sm rounded-full mb-4 uppercase tracking-widest">
          ⭐ Google Reviews
        </span>
        <h2 className="font-display text-4xl text-brand-dark mb-3">
          Customers <span className="gradient-text">Love Us</span>
        </h2>
        <p className="text-gray-500 mb-8">
          We&apos;re rated 5 stars by Maryland families, schools, and event planners. See what everyone is saying!
        </p>

        {/* Stars display */}
        <div className="flex justify-center items-center gap-2 mb-8">
          <div className="flex gap-1">
            {[1,2,3,4,5].map((s) => (
              <span key={s} className="text-4xl">⭐</span>
            ))}
          </div>
          <div className="text-left ml-3">
            <p className="font-display text-4xl text-brand-dark">5.0</p>
            <p className="text-gray-500 text-sm">on Google</p>
          </div>
        </div>

        {/* Review snippets */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { text: "The kids absolutely LOVED it — best field day treat we've ever had! Will definitely book again!", name: "Sarah M.", event: "School Field Day" },
            { text: "Showed up on time, set up fast, and the snoballs were incredible. Our whole block was amazed!", name: "James T.", event: "Block Party" },
            { text: "Anthony was professional and the flavors were out of this world. Our fundraiser was a huge success!", name: "Pastor Williams", event: "Church Fundraiser" },
          ].map((r, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-5 text-left border border-gray-100">
              <div className="flex gap-0.5 mb-2">
                {[1,2,3,4,5].map((s) => <span key={s} className="text-yellow-400 text-sm">★</span>)}
              </div>
              <p className="text-gray-600 text-sm italic mb-3">&ldquo;{r.text}&rdquo;</p>
              <p className="font-bold text-brand-dark text-sm">{r.name}</p>
              <p className="text-gray-400 text-xs">{r.event}</p>
            </div>
          ))}
        </div>

        {/* CTA to leave review */}
        <div className="bg-gradient-to-r from-brand-blue/10 to-brand-cyan/10 rounded-2xl p-6 border border-brand-blue/20">
          <p className="font-bold text-brand-dark mb-1">Had a great experience? 🙌</p>
          <p className="text-gray-500 text-sm mb-4">Your review helps other Maryland families find us — and it means the world to our small business!</p>
          <a
            href="https://g.page/r/CRJD9--JJBYkEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-brand-blue text-white font-bold rounded-full hover:opacity-90 transition-opacity shadow-lg"
          >
            ⭐ Leave Us a Google Review
          </a>
          <p className="text-xs text-gray-400 mt-2">Opens Google Reviews in a new tab</p>
        </div>
      </div>
    </section>
  );
}
