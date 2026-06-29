import Link from "next/link";
import {
  Globe, ShoppingBag, Smartphone, Code2, ArrowUpRight,
  Boxes, Bot, Blocks, Rocket, Check,
} from "lucide-react";

export const metadata = {
  title: "Services — Limitless",
  description: "AI SaaS platforms, custom AI agents, integrations, and rapid MVP sprints — plus full-stack web, e-commerce, mobile, and custom software. Built end-to-end for founders worldwide.",
};

const devServices = [
  { title: "Web Development", desc: "Fast, modern marketing sites and web apps that load instantly and convert.", Icon: Globe },
  { title: "E-Commerce Development", desc: "Custom online stores built to sell — products, checkout, payments, and admin.", Icon: ShoppingBag },
  { title: "Mobile App Development", desc: "iOS and Android apps, cross-platform, from prototype to the app store.", Icon: Smartphone },
  { title: "Custom Software", desc: "Bespoke internal tools, dashboards, and systems tailored to your workflow.", Icon: Code2 },
];

const services = [
  {
    title: "AI SaaS Platform",
    price: "Custom",
    delivery: "From 6 weeks",
    description:
      "Your full product, engineered end-to-end on real, scalable architecture with AI at the core — ready for your first user and your millionth.",
    features: ["Product design & UX", "Multi-tenant architecture", "AI / LLM core features", "Auth, billing & dashboards", "Scalable cloud infra", "Launch & handover"],
    Icon: Boxes,
    accent: "#6366f1",
    highlight: true,
  },
  {
    title: "AI Agents & Automation",
    price: "From $2k/mo",
    delivery: "From 2 weeks",
    description:
      "Custom AI agents and automations that run your operations around the clock — support, leads, data workflows, and internal tools.",
    features: ["Custom AI agents", "Workflow automation", "LLM pipelines & RAG", "Stack integrations", "Monitoring & evals", "Priority support"],
    Icon: Bot,
    accent: "#8b5cf6",
    highlight: false,
  },
  {
    title: "AI Integration",
    price: "Custom",
    delivery: "From 3 weeks",
    description:
      "Already have a product? We embed intelligence into it — chat, search, recommendations, generation, and copilots — wired into your stack.",
    features: ["RAG & semantic search", "In-product copilots", "Content generation", "Recommendations", "Eval & tuning", "Documentation"],
    Icon: Blocks,
    accent: "#d946ef",
    highlight: false,
  },
  {
    title: "MVP Sprint",
    price: "From $9k",
    delivery: "From 4 weeks",
    description:
      "Idea to launched product, fast. We take a founder's vision and ship a real, fundable MVP — designed, built, and live.",
    features: ["Rapid product design", "Full-stack build", "Core AI feature", "Investor-ready polish", "Deployed to production", "Path to scale"],
    Icon: Rocket,
    accent: "#0ea5e9",
    highlight: false,
  },
];

const process = [
  { step: "01", title: "Discovery", description: "We pressure-test the idea, define the product, and architect for scale — so we build the right thing from day one." },
  { step: "02", title: "Design & Build", description: "We design the product and engineer it end-to-end with modern, AI-native tech, in tight transparent cycles." },
  { step: "03", title: "Launch", description: "We ship to production — fast, secure, and ready for real users and investors." },
  { step: "04", title: "Scale", description: "We harden, optimize, and grow with you — new features, more users, lower costs." },
];

export default function ServicesPage() {
  return (
    <main className="bg-neutral-950 overflow-hidden">

      {/* ── Hero ── */}
      <section className="relative px-6 pt-40 pb-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-100 z-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, rgba(139,92,246,0.18), transparent 70%)" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <p className="text-xs text-neutral-400 uppercase tracking-[0.2em] font-medium">Services &amp; Pricing</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-[1.02] mb-6">
            Everything to build{" "}
            <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              your platform
            </span>
            .
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-xl mx-auto">
            From a single AI feature to a full product — scoped to your vision, engineered to scale.
          </p>
        </div>
      </section>

      {/* ── AI Solutions ── */}
      <section className="relative px-6 pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <p className="text-xs text-neutral-400 uppercase tracking-[0.2em] font-medium">AI Solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className={`relative rounded-3xl hover:-translate-y-1 transition-all duration-300 ${
                  s.highlight ? "p-px bg-linear-to-b from-indigo-500/60 via-violet-500/20 to-transparent" : ""
                }`}
              >
                <div
                  className={`relative rounded-3xl h-full flex flex-col p-7 overflow-hidden ${
                    s.highlight ? "bg-neutral-900" : "border border-white/10 bg-white/[0.03] hover:border-white/20"
                  }`}
                >
                  {s.highlight && (
                    <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[80px] pointer-events-none" style={{ background: `${s.accent}30` }} />
                  )}

                  <div className="relative flex flex-col h-full">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center border" style={{ background: `${s.accent}1a`, borderColor: `${s.accent}40` }}>
                        <s.Icon size={20} style={{ color: s.accent }} />
                      </div>
                      {s.highlight && (
                        <span className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-linear-to-r from-indigo-500 to-fuchsia-500 text-white">
                          Popular
                        </span>
                      )}
                    </div>

                    <h2 className="text-lg font-bold text-white mb-1">{s.title}</h2>
                    <p className="text-2xl font-black text-white tracking-tight">{s.price}</p>
                    <p className="text-[11px] text-neutral-500 uppercase tracking-widest mb-4">{s.delivery}</p>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">{s.description}</p>

                    <ul className="flex flex-col gap-2.5 mb-7">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-300">
                          <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${s.accent}26` }}>
                            <Check size={10} style={{ color: s.accent }} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/#contact"
                      className="mt-auto text-center py-3 rounded-full text-sm font-semibold bg-white text-neutral-900 hover:bg-neutral-200 transition-all"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Development ── */}
      <section className="relative px-6 pb-28 border-t border-white/10 pt-28">
        <div className="absolute top-20 right-1/4 w-110 h-110 rounded-full bg-violet-600/10 blur-[140px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <p className="text-xs text-neutral-400 uppercase tracking-[0.2em] font-medium">Beyond AI</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">Software Development</h2>
            <p className="text-neutral-400 leading-relaxed">
              Need engineering muscle beyond AI? We build the full stack — web, commerce, mobile, and custom software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devServices.map((s) => (
              <div key={s.title} className="group bg-white/[0.03] border border-white/10 rounded-3xl p-7 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                  <s.Icon size={20} className="text-neutral-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-5">{s.desc}</p>
                <Link href="/#contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:gap-2.5 transition-all">
                  Enquire
                  <ArrowUpRight size={15} className="text-indigo-400" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="relative px-6 pb-28 border-t border-white/10 pt-28">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
              <p className="text-xs text-neutral-400 uppercase tracking-[0.2em] font-medium">How It Works</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Idea to launched platform.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((item) => (
              <div key={item.step} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 hover:border-white/20 transition-all duration-300">
                <p className="text-5xl font-black bg-linear-to-br from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent mb-4 leading-none">{item.step}</p>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 pb-28">
        <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-linear-to-br from-white/[0.06] to-transparent p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-110 h-110 rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">Not sure where your idea fits?</h2>
            <p className="text-neutral-400 max-w-md mx-auto mb-8">
              Book a free strategy call and we&apos;ll map the path from idea to platform.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white text-neutral-900 font-semibold text-sm pl-6 pr-2.5 py-3 rounded-full hover:bg-neutral-200 transition-all"
            >
              Book a Call
              <span className="w-7 h-7 bg-neutral-900 rounded-full flex items-center justify-center text-white text-xs group-hover:rotate-45 transition-transform">↗</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
