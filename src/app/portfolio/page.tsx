import Link from "next/link";
import { ArrowUpRight, Zap, LayoutDashboard, Store, Linkedin, Sprout } from "lucide-react";

export const metadata = {
  title: "Portfolio — Limitlessly",
  description: "Real AI platforms and products we have engineered — SaaS, AI tools, and marketplaces. Live, in production, serving thousands.",
};

const projects = [
  {
    num: "01",
    title: "Advanced Power Solutions",
    category: "AI Industrial Commerce",
    year: "2026",
    status: "Live",
    href: "https://aps.com.pk/",
    panelHeadline: "AI sizing advisor",
    tagline: "An AI-assisted e-commerce platform for a heavy-duty engineering firm operating since 1996.",
    description:
      "Advanced Power Solutions needed a full digital operation. We built a complete platform for switchgear, generators, UPS systems, and compressors — with an AI advisor that helps buyers spec the right equipment for their load and auto-drafts a quote.",
    highlights: [
      "AI sizing advisor — recommends the right power equipment for a buyer's load",
      "AI-assisted quote generation from a plain-language request",
      "Secure admin panel — full CRUD for products, orders, customers",
      "User accounts, cart, and quote request workflow",
    ],
    tags: ["Next.js", "AI Advisor", "PostgreSQL", "Prisma"],
    Icon: Zap,
    accent: "#f87171",
  },
  {
    num: "02",
    title: "StorePanel",
    category: "AI SaaS Platform",
    year: "2026",
    status: "In Progress",
    href: null,
    panelHeadline: "Ask-your-data",
    tagline: "An AI admin panel that plugs straight into your database — ask your data in plain English.",
    description:
      "StorePanel gives non-technical owners a real-time dashboard wired directly to a live Postgres database. Ask questions in plain language, surface AI insights on orders and stock, and manage everything — no backend access required.",
    highlights: [
      "Ask-your-data — query the database in plain English, no SQL",
      "AI insights on sales trends and stock to act on",
      "Products, orders, customers, and quotes in one panel",
      "Role-based access, built to scale across stores",
    ],
    tags: ["Next.js", "AI / NL Queries", "Postgres", "SaaS"],
    Icon: LayoutDashboard,
    accent: "#2dd4bf",
  },
  {
    num: "03",
    title: "ShopFlow",
    category: "AI SaaS Platform",
    year: "2026",
    status: "In Progress",
    href: null,
    panelHeadline: "AI-native commerce",
    tagline: "Multi-tenant commerce SaaS — Shopify, but AI-native.",
    description:
      "Each merchant gets their own subdomain and storefront, supercharged with AI: auto-generated product copy, AI theme suggestions, and sales insights. Full control over products and orders, with Stripe handling subscriptions across tiers.",
    highlights: [
      "AI product copywriting and SEO descriptions for merchants",
      "AI-assisted store themes and sales insights",
      "Multi-tenant — each store on its own subdomain",
      "Stripe payments and subscription billing",
    ],
    tags: ["Next.js 15", "AI Copy", "Stripe", "Multi-tenant"],
    Icon: Store,
    accent: "#60a5fa",
  },
  {
    num: "04",
    title: "LinkedIn Bulk Opener",
    category: "AI Productivity Tool",
    year: "2025",
    status: "Live",
    href: "https://profileopener.netlify.app/",
    panelHeadline: "10,000+ users",
    tagline: "An AI tool that opens 100+ LinkedIn profiles in under a minute — used by 10,000+ recruiters globally.",
    description:
      "Built for recruiters spending hours manually opening profiles. Paste a list of names, open every profile at once. AI auto-detects CEOs for any company and exports the full lead list as a spreadsheet. Grew to 10,000+ users with zero paid marketing.",
    highlights: [
      "Opens 100+ LinkedIn profiles in under a minute",
      "AI auto-detects CEOs and decision-makers by company",
      "Export full lead list to spreadsheet",
      "10,000+ active users, organically",
    ],
    tags: ["JavaScript", "AI", "Automation", "Netlify"],
    Icon: Linkedin,
    accent: "#818cf8",
  },
  {
    num: "05",
    title: "Agrolync",
    category: "AI AgriTech Platform",
    year: "2025",
    status: "Live",
    href: "https://agrolync.vercel.app/",
    caseStudy: "/portfolio/agrolync",
    panelHeadline: "12,400+ farmers",
    tagline: "AI-powered farm-to-market platform connecting 12,400+ verified farmers to buyers across 36 Nigerian states.",
    description:
      "Agrolync pairs real-time commodity price intelligence with AI forecasting that tells farmers the best moment to sell. Live prices from 40+ markets feed predictive models that surface 'sell now' signals — alongside a marketplace and a local-language AI assistant.",
    highlights: [
      "AI price forecasting — predicts trends and surfaces 'sell now' signals",
      "Local-language AI assistant for price checks and produce listings",
      "Live prices from 40+ Nigerian markets feeding the models",
      "12,400+ verified farmers across 36 states, marketplace + dashboards",
    ],
    tags: ["Next.js", "AI / LLMs", "Price Forecasting", "Real-time DB"],
    Icon: Sprout,
    accent: "#4ade80",
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-neutral-950 overflow-hidden">

      {/* ── Intro ── */}
      <section className="relative px-6 pt-40 pb-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-100 z-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, rgba(99,102,241,0.18), transparent 70%)" }} />
        <div className="relative max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <p className="text-xs text-neutral-400 uppercase tracking-[0.2em] font-medium">Selected Work</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6 max-w-3xl">
            Real platforms.
            <br />
            <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">In production. At scale.</span>
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl">
            Not mockups or concepts — live products serving thousands of real users.
            AI platforms, tools, and marketplaces, engineered end-to-end for founders worldwide.
          </p>
        </div>
      </section>

      {/* ── Projects ── */}
      {projects.map((project, i) => {
        const flip = i % 2 === 1;
        return (
          <section key={project.num} className="px-6 py-20 border-t border-white/10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* Visual panel */}
              <div className={flip ? "lg:order-2" : "lg:order-1"}>
                <div
                  className="relative rounded-3xl border border-white/10 overflow-hidden h-80 md:h-96 flex flex-col items-center justify-center"
                  style={{ background: `radial-gradient(120% 120% at 50% 0%, ${project.accent}1f 0%, #0a0a0a 55%)` }}
                >
                  {/* grid */}
                  <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                      backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                      backgroundSize: "44px 44px",
                      maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)",
                      WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)",
                    }}
                  />
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-[100px]" style={{ background: `${project.accent}26` }} />
                  <span className="absolute top-5 right-6 text-6xl font-black text-white/5 select-none leading-none">{project.num}</span>

                  <div className="relative text-center px-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center border mx-auto mb-6" style={{ background: `${project.accent}1a`, borderColor: `${project.accent}40` }}>
                      <project.Icon size={28} style={{ color: project.accent }} />
                    </div>
                    <p className="text-3xl md:text-4xl font-black text-white tracking-tight">{project.panelHeadline}</p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.2em]" style={{ color: project.accent }}>{project.category}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={flip ? "lg:order-1" : "lg:order-2"}>
                {/* Meta */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: project.accent }}>
                    {project.category}
                  </span>
                  <span className="text-neutral-600">·</span>
                  <span className="text-xs text-neutral-500">{project.year}</span>
                  <span className="text-neutral-600">·</span>
                  <span className={`flex items-center gap-1.5 text-xs font-medium ${project.status === "Live" ? "text-emerald-400" : "text-amber-400"}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${project.status === "Live" ? "bg-emerald-400" : "bg-amber-400"}`} />
                    {project.status}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-3">{project.title}</h2>
                <p className="text-lg text-neutral-300 leading-relaxed mb-4">{project.tagline}</p>
                <p className="text-sm text-neutral-400 leading-relaxed mb-6">{project.description}</p>

                {/* Highlights */}
                <ul className="flex flex-col gap-2.5 mb-6">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-neutral-300">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: project.accent }} />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-neutral-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3">
                  {project.caseStudy && (
                    <Link
                      href={project.caseStudy}
                      className="group inline-flex items-center gap-2.5 bg-white text-neutral-900 text-sm font-semibold pl-5 pr-2.5 py-2.5 rounded-full hover:bg-neutral-200 transition-all"
                    >
                      Read case study
                      <span className="w-6 h-6 bg-neutral-900 rounded-full flex items-center justify-center text-white text-xs group-hover:rotate-45 transition-transform">↗</span>
                    </Link>
                  )}
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all ${
                        project.caseStudy
                          ? "border border-white/15 text-white hover:border-white/30 hover:bg-white/5"
                          : "bg-white text-neutral-900 hover:bg-neutral-200"
                      }`}
                    >
                      Visit live site
                      <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 border border-white/15 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:border-white/30 hover:bg-white/5 transition-all"
                    >
                      Build something like this
                      <ArrowUpRight size={15} />
                    </Link>
                  )}
                </div>
              </div>

            </div>
          </section>
        );
      })}

      {/* ── CTA ── */}
      <section className="px-6 py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-linear-to-br from-white/[0.06] to-transparent p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-110 h-110 rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">Your platform could be next.</h2>
            <p className="text-neutral-400 text-lg max-w-md mx-auto mb-8">Bring us the vision — we&apos;ll engineer it from idea to scale.</p>
            <a
              href="https://calendly.com/rayyanabrar76/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white text-neutral-900 font-semibold text-sm pl-6 pr-2.5 py-3 rounded-full hover:bg-neutral-200 transition-all"
            >
              Book a Call
              <span className="w-7 h-7 bg-neutral-900 rounded-full flex items-center justify-center text-white text-xs group-hover:rotate-45 transition-transform">↗</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
