"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  from: "bot" | "user";
  text: string;
}

const faqs: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["flavor", "flavors", "what flavors", "taste"],
    answer: "We have 24 amazing flavors including our fan favorites: Egg Custard, Tiger's Blood, Bahama Mama, Rainbow, Wedding Cake, Shark Attack, Cherry, Mango, Strawberry, and many more! 🍧",
  },
  {
    keywords: ["egg custard", "custard"],
    answer: "Egg Custard is one of our most popular flavors — it's a rich, creamy, sweet syrup that's a Maryland classic! You have to try it! 😋",
  },
  {
    keywords: ["price", "cost", "how much", "pricing", "charge"],
    answer: "Our snoballs start at $3.50 for a small (8oz) up to $6.50 for a jumbo (20oz). Add-ons like ice cream base (+$1.50) and cotton candy (+$1.00) are available too! Check our Pricing section for event packages.",
  },
  {
    keywords: ["event", "party", "book", "booking", "hire", "reserve"],
    answer: "We'd love to come to your event! Our event packages start at $350 for 2 hours (up to 50 servings). Contact us at awesomesnoballs@yahoo.com or call 443-281-3331 to book! 🎉",
  },
  {
    keywords: ["school", "fundraiser", "pta", "students"],
    answer: "Yes! We offer special school and fundraiser packages starting at $4/student (30 student minimum) or flat event packages. We also offer fundraiser split options! Email us at awesomesnoballs@yahoo.com for details.",
  },
  {
    keywords: ["location", "where", "area", "serve", "maryland", "dc", "dmv"],
    answer: "We're a mobile truck serving Maryland, Washington DC, and the entire DMV Area! Follow us on Instagram @awesomesnoballs for daily location updates. 📍",
  },
  {
    keywords: ["hours", "open", "when", "time", "schedule"],
    answer: "Our general hours are Tue-Thu 12-8pm, Fri 12-9pm, Sat 11am-9pm, Sun 12-7pm. Closed Mondays. Hours may vary so follow us on Instagram for updates! 🕐",
  },
  {
    keywords: ["phone", "call", "text", "number", "contact"],
    answer: "You can call or text us at 443-281-3331, or email us at awesomesnoballs@yahoo.com. We typically respond within a few hours! 📞",
  },
  {
    keywords: ["ice cream", "cream"],
    answer: "Yes! You can add a vanilla ice cream base to any snoball for just +$1.50. It's amazing — the cold snoball on top of creamy ice cream is a must try! 🍦",
  },
  {
    keywords: ["cotton candy", "candy"],
    answer: "We offer fluffy cotton candy as a topping on your snoball for just +$1.00! Kids absolutely love it! 🍬",
  },
  {
    keywords: ["instagram", "social", "follow", "facebook"],
    answer: "Follow us on Instagram @awesomesnoballs for daily location updates, specials, and fun content! We're also on Facebook. 📸",
  },
  {
    keywords: ["travel", "far", "distance", "fee"],
    answer: "We serve Maryland, DC, and the DMV Area. Travel fees may apply for locations outside our standard service area. Contact us at awesomesnoballs@yahoo.com for details!",
  },
];

const GREETING = "Hi there! 👋 I'm the Awesome Snoballs assistant! Ask me anything about our flavors, pricing, events, or hours. How can I help you today? 🍧";

function getAnswer(input: string): string {
  const lower = input.toLowerCase();
  for (const faq of faqs) {
    if (faq.keywords.some((k) => lower.includes(k))) {
      return faq.answer;
    }
  }
  return "Great question! For the best answer, reach out to us directly at awesomesnoballs@yahoo.com or call/text 443-281-3331. We'd love to help! 😊";
}

export default function ChatWidget() {
  const [open,     setOpen]     = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ from: "bot", text: GREETING }]);
  const [input,    setInput]    = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: Message = { from: "user", text };
    const botMsg:  Message = { from: "bot",  text: getAnswer(text) };
    setMessages((m) => [...m, userMsg, botMsg]);
    setInput("");
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") send();
  };

  return (
    <>
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-gray-100 z-50 flex flex-col overflow-hidden" style={{ maxHeight: "480px" }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-blue to-brand-cyan p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">🍧</div>
            <div className="flex-1">
              <p className="font-bold text-white text-sm">Awesome Snoballs Assistant</p>
              <p className="text-white/70 text-xs">Ask me anything!</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ maxHeight: "320px" }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.from === "user"
                      ? "bg-brand-blue text-white rounded-br-sm"
                      : "bg-gray-100 text-gray-700 rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Quick questions */}
          <div className="px-3 pb-2 flex gap-2 flex-wrap">
            {["Flavors?", "Pricing?", "Book an event?", "Hours?"].map((q) => (
              <button
                key={q}
                onClick={() => { setInput(q); }}
                className="text-xs px-3 py-1 bg-brand-cyan/15 text-brand-blue rounded-full hover:bg-brand-cyan/30 transition-colors font-semibold"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-100 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type a question..."
              className="flex-1 px-4 py-2 rounded-full border border-gray-200 text-sm outline-none focus:border-brand-blue"
            />
            <button
              onClick={send}
              className="w-10 h-10 bg-brand-blue hover:bg-brand-dark text-white rounded-full flex items-center justify-center transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          {/* Footer */}
          <div className="px-4 pb-3 text-center">
            <a href="mailto:awesomesnoballs@yahoo.com" className="text-xs text-gray-400 hover:text-brand-blue transition-colors">
              awesomesnoballs@yahoo.com · 443-281-3331
            </a>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-4 sm:right-6 w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-cyan text-white rounded-full shadow-2xl shadow-brand-blue/40 flex items-center justify-center z-50 hover:scale-110 transition-transform"
        aria-label="Open chat"
      >
        {open ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-pink rounded-full animate-pulse" />
        )}
      </button>
    </>
  );
}
