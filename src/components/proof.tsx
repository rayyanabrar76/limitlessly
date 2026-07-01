import { Star } from "lucide-react";

const metrics = [
  { value: "10,000+", label: "Users reached" },
  { value: "12,400+", label: "Farmers onboarded" },
  { value: "40+", label: "Live markets" },
  { value: "36", label: "States served" },
];

/*
  ⚠️  REPLACE THESE WITH REAL CLIENT QUOTES BEFORE RELYING ON THEM.
  Anonymized is fine (role + company type, no name) — but the words must be genuine.
  Fake testimonials mislead prospects and destroy trust the moment one is caught.
*/
const testimonials = [
  {
    quote:
      "They took our rough idea and shipped a real, working platform faster than we thought possible. Felt like a product team, not a vendor.",
    author: "Founder",
    company: "AgriTech Marketplace",
    accent: "#4ade80",
  },
  {
    quote:
      "The AI features actually work and actually get used. Clean engineering, clear communication, zero drama.",
    author: "Growth Lead",
    company: "Recruiting SaaS",
    accent: "#818cf8",
  },
  {
    quote:
      "We finally have a digital operation that matches the scale of our business. Worth every dollar.",
    author: "Operations Director",
    company: "Industrial Supplier",
    accent: "#f87171",
  },
];

export default function Proof() {
  return (
    <section className="relative py-28 px-6 bg-neutral-950 border-t border-white/10 overflow-hidden">
      <div className="absolute top-10 right-1/4 w-110 h-110 rounded-full bg-indigo-600/10 blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10 mb-20">
          {metrics.map((m) => (
            <div key={m.label} className="bg-neutral-950 p-8 text-center">
              <p className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">{m.value}</p>
              <p className="text-[11px] uppercase tracking-widest text-neutral-500">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="flex items-center gap-2 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          <p className="text-xs text-neutral-400 uppercase tracking-[0.2em] font-medium">What Founders Say</p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.company}
              className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 flex flex-col hover:border-white/20 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-neutral-200 leading-relaxed mb-8 flex-1">&ldquo;{t.quote}&rdquo;</p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ background: `${t.accent}26`, color: t.accent }}
                >
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.author}</p>
                  <p className="text-xs text-neutral-500">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
