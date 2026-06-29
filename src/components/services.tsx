import { Boxes, Bot, Blocks, Rocket, ArrowUpRight, Check } from "lucide-react";

const featured = {
  title: "AI SaaS Platform",
  description:
    "Your full product, designed and engineered end-to-end. Auth, dashboards, billing, multi-tenant architecture, and AI at the core — built to scale from first user to millions.",
  price: "Custom",
  delivery: "From 6 weeks",
  features: ["Product Design", "Scalable Architecture", "AI / LLM Core", "Stripe Billing"],
  Icon: Boxes,
  accent: "#6366f1",
};

const services = [
  {
    title: "AI Agents & Automation",
    description:
      "Custom AI agents and automations that run your operations — support, leads, data workflows, internal tools. Working around the clock.",
    price: "From $2k/mo",
    delivery: "From 2 weeks",
    features: ["Custom Agents", "Workflow Automation", "LLM Pipelines"],
    Icon: Bot,
    accent: "#8b5cf6",
  },
  {
    title: "AI Integration",
    description:
      "Already have a product? We embed intelligence into it — chat, search, recommendations, generation, copilots — wired into your stack.",
    price: "Custom",
    delivery: "From 3 weeks",
    features: ["RAG & Search", "Copilots", "API Integration"],
    Icon: Blocks,
    accent: "#d946ef",
  },
  {
    title: "MVP Sprint",
    description:
      "Idea to launched product, fast. We take a founder's vision and ship a real, fundable MVP — designed, built, and live.",
    price: "From $9k",
    delivery: "From 4 weeks",
    features: ["Rapid Build", "Investor-Ready", "Full-Stack"],
    Icon: Rocket,
    accent: "#0ea5e9",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 px-6 bg-neutral-950 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <p className="text-xs text-neutral-400 uppercase tracking-[0.2em] font-medium">What We Offer</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.05] tracking-tight">
              Built for every stage of{" "}
              <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                your product
              </span>
              .
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-xs leading-relaxed">
            From a single AI feature to a full platform — we build the product, the system, and everything around it.
          </p>
        </div>

        {/* Featured card */}
        <div className="relative rounded-3xl p-px bg-linear-to-br from-indigo-500/50 via-violet-500/20 to-transparent mb-6">
          <div className="group relative rounded-3xl bg-neutral-950 overflow-hidden">
            {/* glow */}
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-indigo-600/20 blur-[100px] pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-10">
              {/* Left */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center border"
                    style={{ background: `${featured.accent}1a`, borderColor: `${featured.accent}40` }}
                  >
                    <featured.Icon size={22} style={{ color: featured.accent }} />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-linear-to-r from-indigo-500 to-fuchsia-500 text-white">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3">{featured.title}</h3>
                <p className="text-neutral-400 leading-relaxed mb-8 max-w-md">{featured.description}</p>

                <div className="mt-auto flex items-end gap-6">
                  <div>
                    <p className="text-3xl font-black text-white tracking-tight">{featured.price}</p>
                    <p className="text-[11px] text-neutral-500 uppercase tracking-widest mt-1">{featured.delivery}</p>
                  </div>
                  <a
                    href="#contact"
                    className="group/btn inline-flex items-center gap-2.5 bg-white text-neutral-900 text-sm font-semibold pl-5 pr-2.5 py-2.5 rounded-full hover:bg-neutral-200 transition-all"
                  >
                    Get Started
                    <span className="w-6 h-6 bg-neutral-900 rounded-full flex items-center justify-center text-white text-xs shrink-0 group-hover/btn:rotate-45 transition-transform">↗</span>
                  </a>
                </div>
              </div>

              {/* Right — feature list */}
              <div className="lg:border-l lg:border-white/10 lg:pl-8 flex flex-col justify-center">
                <p className="text-[11px] text-neutral-500 uppercase tracking-widest mb-4">What&apos;s included</p>
                <ul className="flex flex-col gap-3.5">
                  {featured.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-neutral-200">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: `${featured.accent}26` }}
                      >
                        <Check size={12} style={{ color: featured.accent }} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Three cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-7 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* hover glow */}
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `${s.accent}33` }}
              />

              <div className="relative flex flex-col h-full">
                {/* icon + price */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center border"
                    style={{ background: `${s.accent}1a`, borderColor: `${s.accent}40` }}
                  >
                    <s.Icon size={20} style={{ color: s.accent }} />
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-black text-white tracking-tight">{s.price}</p>
                    <p className="text-[10px] text-neutral-500 uppercase tracking-widest mt-0.5">{s.delivery}</p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-5">{s.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {s.features.map((f) => (
                    <span key={f} className="text-xs text-neutral-400 border border-white/10 bg-white/5 px-2.5 py-1 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:gap-2.5 transition-all"
                >
                  Get started
                  <ArrowUpRight size={15} style={{ color: s.accent }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
