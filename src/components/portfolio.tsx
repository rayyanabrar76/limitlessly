import { ArrowUpRight, Zap, ShoppingBag, LayoutDashboard, Store } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "Advanced Power Solutions",
    category: "Industrial E-Commerce",
    year: "2026",
    description: "Full e-commerce platform for a heavy-duty engineering firm — switchgear, generators, UPS systems. Custom database, secure admin panel, user accounts, cart and quote request system.",
    tags: ["Next.js", "Tailwind", "E-Commerce"],
    Icon: Zap,
    accentColor: "#f87171",
    accentBg: "#1a0505",
  },
  {
    num: "02",
    title: "StorePanel",
    category: "SaaS Platform",
    year: "2026",
    description: "A no-code admin panel that connects directly to a Neon PostgreSQL database. Store owners get a real-time dashboard for products, quotes, orders, and customers.",
    tags: ["Next.js", "Neon DB", "SaaS"],
    Icon: LayoutDashboard,
    accentColor: "#34d399",
    accentBg: "#021a0e",
  },
  {
    num: "03",
    title: "Chef Aboud Küche",
    category: "Hospitality Website",
    year: "2026",
    description: "Catering-focused restaurant website for a Berlin-based chef with full multilingual support across English, German, and Arabic. Polished editorial feel with smooth motion.",
    tags: ["Next.js", "i18n", "Framer"],
    Icon: ShoppingBag,
    accentColor: "#fbbf24",
    accentBg: "#1a1005",
  },
  {
    num: "04",
    title: "ShopFlow",
    category: "SaaS Platform",
    year: "2026",
    description: "Multi-tenant e-commerce SaaS — think Shopify but self-hosted. Merchants create stores with custom subdomains, theme editor, product/order management, and Stripe payments.",
    tags: ["Next.js 15", "Prisma", "Stripe", "Clerk"],
    Icon: Store,
    accentColor: "#60a5fa",
    accentBg: "#030d1a",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28 px-6 bg-neutral-950 border-t border-white/10 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <p className="text-xs text-neutral-400 uppercase tracking-[0.2em] font-medium">Selected Work</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.05] tracking-tight">
              Platforms that{" "}
              <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                ship
              </span>
              .
            </h2>
          </div>
          <a
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-400 hover:text-white transition-colors shrink-0"
          >
            View all work
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Accent hover glow */}
              <div
                className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-[90px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `${project.accentColor}26` }}
              />

              {/* Ghost number */}
              <span className="absolute top-6 right-7 text-5xl font-black text-white/5 select-none leading-none">
                {project.num}
              </span>

              <div className="relative flex flex-col h-full">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center border mb-6"
                  style={{ background: project.accentBg, borderColor: `${project.accentColor}40` }}
                >
                  <project.Icon size={20} style={{ color: project.accentColor }} />
                </div>

                {/* Category + year */}
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em]" style={{ color: project.accentColor }}>
                    {project.category}
                  </span>
                  <span className="text-neutral-600 text-xs">·</span>
                  <span className="text-[10px] text-neutral-500">{project.year}</span>
                </div>

                <h3 className="text-2xl font-black text-white mb-2.5 tracking-tight">{project.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-6">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white/5 border border-white/10 text-neutral-400 px-2.5 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="/portfolio"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:gap-2.5 transition-all w-fit"
                >
                  View project
                  <ArrowUpRight size={15} style={{ color: project.accentColor }} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-8 border-t border-white/10">
          <p className="text-sm text-neutral-400">
            <span className="font-semibold text-white">Real platforms</span> — engineered from scratch, no templates, no shortcuts.
          </p>
          <a
            href="/portfolio"
            className="group inline-flex items-center gap-2.5 bg-white text-neutral-900 text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors"
          >
            See full portfolio
            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
