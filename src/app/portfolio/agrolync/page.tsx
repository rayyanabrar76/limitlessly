import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  LineChart,
  Store,
  LayoutDashboard,
  MessagesSquare,
  Check,
} from "lucide-react";

export const metadata = {
  title: "Agrolync — AI AgriTech Platform | Limitless",
  description:
    "Case study: an AI-powered farm-to-market platform connecting 12,400+ farmers to buyers across 36 Nigerian states, with AI price forecasting and a local-language assistant.",
};

const ACCENT = "#34d399"; // emerald-400

const metrics = [
  { value: "12,400+", label: "Verified farmers" },
  { value: "36", label: "Nigerian states" },
  { value: "40+", label: "Live markets" },
  { value: "Per-minute", label: "Price updates" },
];

const facts = [
  { label: "Role", value: "Design + Engineering" },
  { label: "Year", value: "2025" },
  { label: "Status", value: "Live" },
  { label: "Type", value: "AI AgriTech Platform" },
];

const capabilities = [
  {
    Icon: LineChart,
    title: "AI price forecasting",
    desc: "Live and historical prices from 40+ markets feed predictive models that flag where each commodity is heading — surfacing 'sell now' signals that put more money in farmers' pockets.",
    highlight: true,
  },
  {
    Icon: MessagesSquare,
    title: "Local-language AI assistant",
    desc: "Farmers check prices and list produce by chatting in their own language — lowering the barrier for users who aren't comfortable with traditional dashboards.",
    highlight: true,
  },
  {
    Icon: Sparkles,
    title: "Live price engine",
    desc: "Real-time commodity prices from Dawanau, Onitsha, Terminus and 40+ markets, refreshed every minute — the data backbone the AI is built on.",
  },
  {
    Icon: Store,
    title: "Direct marketplace",
    desc: "Verified farmers connect straight to buyers — no middlemen eroding margins. Listings, offers, and live notifications keep both sides moving.",
  },
  {
    Icon: LayoutDashboard,
    title: "Producer & buyer dashboards",
    desc: "Each side gets a tailored portal — farmers manage listings and track demand; buyers source, compare, and order across regions.",
  },
];

const stack = ["Next.js", "TypeScript", "AI / LLMs", "Forecasting Models", "Real-time DB", "Tailwind CSS", "Vercel"];

export default function AgrolyncCaseStudy() {
  return (
    <main className="bg-neutral-950 text-neutral-100">

      {/* ── Hero ── */}
      <section className="relative px-6 pt-36 pb-16 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-100 z-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at top, ${ACCENT}22, transparent 70%)` }}
        />
        <div className="relative max-w-5xl mx-auto">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-10"
          >
            <ArrowLeft size={15} /> All work
          </Link>

          <div className="flex items-center gap-2.5 mb-5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
              Case Study
            </span>
            <span className="text-neutral-600">·</span>
            <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Live
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6">
            Agrolync
          </h1>
          <p className="text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10">
            An{" "}
            <span className="bg-linear-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent font-semibold">
              AI-powered farm-to-market platform
            </span>{" "}
            connecting 12,400+ farmers to buyers across 36 Nigerian states.
          </p>

          <a
            href="https://agrolync.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white text-neutral-900 font-semibold text-sm pl-6 pr-2.5 py-3 rounded-full hover:bg-neutral-200 transition-all"
          >
            Visit live site
            <span className="w-7 h-7 bg-neutral-900 rounded-full flex items-center justify-center text-white text-xs group-hover:rotate-45 transition-transform">↗</span>
          </a>

          {/* Quick facts */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {facts.map((f) => (
              <div key={f.label}>
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1.5">{f.label}</p>
                <p className="text-sm font-semibold text-white">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hero visual band ── */}
      <section className="px-6 mb-24">
        <div className="max-w-5xl mx-auto">
          <div
            className="relative rounded-3xl border border-white/10 overflow-hidden h-72 md:h-96 flex items-center justify-center"
            style={{ background: "radial-gradient(120% 120% at 50% 0%, #04150d 0%, #0a0a0a 60%)" }}
          >
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                backgroundSize: "48px 48px",
                maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 40%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 40%, transparent 100%)",
              }}
            />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-110 h-110 rounded-full blur-[120px]" style={{ background: `${ACCENT}30` }} />
            <div className="relative text-center px-6">
              <p className="text-5xl md:text-7xl font-black text-white/90 tracking-tighter">AGROLYNC</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.4em]" style={{ color: ACCENT }}>Farm to Market</p>
            </div>
          </div>
          {/* swap this band for a real product screenshot when available */}
        </div>
      </section>

      {/* ── Metrics bar ── */}
      <section className="px-6 mb-28">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {metrics.map((m) => (
            <div key={m.label} className="bg-neutral-950 p-8 text-center">
              <p className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">{m.value}</p>
              <p className="text-[11px] uppercase tracking-widest text-neutral-500">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Challenge ── */}
      <section className="px-6 mb-28">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.2em] mb-5" style={{ color: ACCENT }}>The Challenge</p>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-8 leading-tight">
            Farmers were getting underpaid for produce they grew with their own hands.
          </h2>
          <div className="flex flex-col gap-5 text-lg text-neutral-400 leading-relaxed">
            <p>
              Across Nigeria, farmers sell into a market they can&apos;t see. Without access to real-time
              prices, they take whatever a middleman offers — often far below what their crop is worth
              in a market two states over.
            </p>
            <p>
              The information existed; it just never reached the people who needed it most. The goal was
              a platform that put live market intelligence — and the ability to act on it — directly in
              farmers&apos; hands.
            </p>
          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="px-6 mb-28">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.2em] mb-5" style={{ color: ACCENT }}>What We Built</p>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-12 leading-tight max-w-2xl">
            A live marketplace with an AI brain on top.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 overflow-hidden"
              >
                {c.highlight && (
                  <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[80px] pointer-events-none" style={{ background: `${ACCENT}22` }} />
                )}
                <div className="relative">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center border mb-5"
                    style={{ background: `${ACCENT}1a`, borderColor: `${ACCENT}40` }}
                  >
                    <c.Icon size={20} style={{ color: ACCENT }} />
                  </div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <h3 className="text-lg font-bold text-white">{c.title}</h3>
                    {c.highlight && (
                      <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full" style={{ background: `${ACCENT}1a`, color: ACCENT }}>
                        AI
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Build details ── */}
      <section className="px-6 mb-28">
        <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] mb-4" style={{ color: ACCENT }}>The Stack</p>
              <div className="flex flex-wrap gap-2">
                {stack.map((t) => (
                  <span key={t} className="text-xs text-neutral-300 border border-white/10 bg-white/5 px-3 py-1.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-[11px] uppercase tracking-[0.2em] mb-4" style={{ color: ACCENT }}>How It Scales</p>
              <ul className="flex flex-col gap-3">
                {[
                  "Real-time ingestion from 40+ market sources, refreshed every minute",
                  "Forecasting models trained on the platform's own historical price data",
                  "Multi-region marketplace built to serve all 36 states from day one",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm text-neutral-300">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${ACCENT}26` }}>
                      <Check size={12} style={{ color: ACCENT }} />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Result ── */}
      <section className="px-6 mb-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] mb-8" style={{ color: ACCENT }}>The Result</p>
          <blockquote className="text-3xl md:text-4xl font-black text-white tracking-tight leading-[1.2] mb-10">
            12,400+ verified farmers onboarded across 36 states — with AI guiding every
            decision on{" "}
            <span className="bg-linear-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              when to sell
            </span>
            .
          </blockquote>
          <div className="inline-flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-neutral-400">
            <span><span className="text-white font-semibold">40+</span> live markets</span>
            <span className="hidden sm:inline text-neutral-700">·</span>
            <span><span className="text-white font-semibold">Per-minute</span> price intelligence</span>
            <span className="hidden sm:inline text-neutral-700">·</span>
            <span><span className="text-white font-semibold">36</span> states at launch</span>
          </div>
          {/* Add a real client testimonial quote here when available — it will close deals. */}
        </div>
      </section>

      {/* ── Next + CTA ── */}
      <section className="px-6 pb-28">
        <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-linear-to-br from-white/[0.06] to-transparent p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-110 h-110 rounded-full blur-[120px] pointer-events-none" style={{ background: `${ACCENT}22` }} />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
              Building something like Agrolync?
            </h2>
            <p className="text-neutral-400 max-w-md mx-auto mb-8">
              We design and engineer AI platforms from idea to scale. Let&apos;s talk about yours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group flex items-center gap-3 bg-white text-neutral-900 font-semibold text-sm pl-6 pr-2.5 py-3 rounded-full hover:bg-neutral-200 transition-all"
              >
                Book a Call
                <span className="w-7 h-7 bg-neutral-900 rounded-full flex items-center justify-center text-white text-xs group-hover:rotate-45 transition-transform">↗</span>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 border border-white/15 text-white font-semibold text-sm px-6 py-3 rounded-full hover:border-white/30 hover:bg-white/5 transition-all"
              >
                Next case study
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
