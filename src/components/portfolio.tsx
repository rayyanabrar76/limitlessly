import { ArrowUpRight, Zap, ShoppingBag, LayoutDashboard, Store, Linkedin } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "Advanced Power Solutions",
    category: "Industrial E-Commerce",
    year: "2026",
    description: "Full e-commerce platform for a heavy-duty engineering firm — switchgear, generators, UPS systems. Custom database, secure admin panel, user accounts, cart and quote request system.",
    tags: ["Next.js", "Tailwind", "E-Commerce"],
    mockupType: "ecommerce",
    Icon: Zap,
    accentColor: "#cc1a1a",
    accentBg: "#1a0505",
  },
  {
    num: "02",
    title: "StorePanel",
    category: "SaaS Platform",
    year: "2026",
    description: "A no-code admin panel that connects directly to a Neon PostgreSQL database. Store owners get a real-time dashboard for products, quotes, orders, and customers.",
    tags: ["Next.js", "Neon DB", "SaaS"],
    mockupType: "dashboard",
    Icon: LayoutDashboard,
    accentColor: "#059669",
    accentBg: "#021a0e",
  },
  {
    num: "03",
    title: "Chef Aboud Küche",
    category: "Hospitality Website",
    year: "2026",
    description: "Catering-focused restaurant website for a Berlin-based chef with full multilingual support across English, German, and Arabic. Polished editorial feel with smooth motion.",
    tags: ["Next.js", "i18n", "Framer"],
    mockupType: "editorial",
    Icon: ShoppingBag,
    accentColor: "#c49a3a",
    accentBg: "#1a1005",
  },
  {
    num: "04",
    title: "ShopFlow",
    category: "SaaS Platform",
    year: "2026",
    description: "Multi-tenant e-commerce SaaS — think Shopify but self-hosted. Merchants create stores with custom subdomains, theme editor, product/order management, and Stripe payments.",
    tags: ["Next.js 15", "Prisma", "Stripe", "Clerk"],
    mockupType: "saas",
    Icon: Store,
    accentColor: "#2563eb",
    accentBg: "#030d1a",
  },
];

/* ── Mockup content at native 1400×264px ── */
function MockupContent({ type }: { type: string }) {
  return (
    <div style={{
      position: "absolute", top: 0, left: 0,
      width: "1400px", height: "264px",
      transformOrigin: "top left",
      transform: "scale(0.9)",
      pointerEvents: "none",
    }}>
      {/* ── APS ── full-bleed dramatic industrial ── */}
      {type === "ecommerce" && (
        <div style={{ width: "100%", height: 264, background: "#080808", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -60, left: -60, width: 380, height: 380, background: "radial-gradient(circle, rgba(204,26,26,0.25) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(204,26,26,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(204,26,26,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div style={{ position: "absolute", bottom: -10, right: 20, fontSize: 120, fontWeight: 900, color: "rgba(204,26,26,0.06)", lineHeight: 1, letterSpacing: -6, userSelect: "none" }}>APS</div>
          <div style={{ position: "absolute", top: 20, left: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 5, background: "rgba(204,26,26,0.12)", border: "1px solid rgba(204,26,26,0.25)", padding: "4px 10px", borderRadius: 99 }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#cc1a1a" }} />
              <span style={{ fontSize: 7, color: "#cc1a1a", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>Est. 1996 · Industrial</span>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 22, left: 20 }}>
            <div style={{ width: 32, height: 2, background: "#cc1a1a", marginBottom: 10 }} />
            <div style={{ fontSize: 52, fontWeight: 900, color: "#fff", lineHeight: 0.88, letterSpacing: -2.5 }}>MASSIVE</div>
            <div style={{ fontSize: 36, fontWeight: 900, color: "#2a2a2a", lineHeight: 0.88, letterSpacing: -1.5 }}>POWER LOADS</div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 14 }}>
              <div style={{ padding: "7px 16px", background: "#cc1a1a", color: "#fff", fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2 }}>View Catalog →</div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: 20, fontWeight: 900, color: "#fff", lineHeight: 1 }}>3000</span>
                <span style={{ fontSize: 7, fontWeight: 700, color: "#cc1a1a", letterSpacing: 2 }}>KVA MAX</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Chef Aboud ── full-bleed food image ── */}
      {type === "editorial" && (
        <div style={{ width: "100%", height: 264, position: "relative", overflow: "hidden", background: "#0a0700" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&q=90&fit=crop')", backgroundSize: "cover", backgroundPosition: "center 40%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(8,5,0,0.88) 0%, rgba(8,5,0,0.55) 45%, rgba(8,5,0,0.1) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,5,0,0.7) 0%, transparent 50%)" }} />
          <div style={{ position: "absolute", top: 18, left: 20, display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", border: "1.5px solid #c49a3a", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 9, color: "#c49a3a", fontWeight: 700 }}>✦</span>
            </div>
            <span style={{ fontSize: 11, fontWeight: 600, color: "#fff", fontFamily: "Georgia, serif", letterSpacing: 0.3 }}>Chef Aboud Küche</span>
          </div>
          <div style={{ position: "absolute", top: 18, right: 20, display: "flex", alignItems: "center", gap: 5, background: "rgba(0,0,0,0.55)", border: "1px solid rgba(239,68,68,0.4)", padding: "4px 10px", borderRadius: 99 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#ef4444" }} />
            <span style={{ fontSize: 7, color: "#fff", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}>Live Kitchen</span>
          </div>
          <div style={{ position: "absolute", bottom: 20, left: 20 }}>
            <p style={{ fontSize: 9, fontWeight: 700, color: "#c49a3a", letterSpacing: 3, textTransform: "uppercase", marginBottom: 6 }}>✦ Signature Catering · Berlin</p>
            <p style={{ fontSize: 36, fontWeight: 700, color: "#fff", fontFamily: "Georgia, serif", fontStyle: "italic", lineHeight: 1.05, letterSpacing: -0.5 }}>
              Authentic<br /><span style={{ color: "#c49a3a" }}>Flavors.</span>
            </p>
            <div style={{ marginTop: 12, display: "inline-flex", alignItems: "center", gap: 6, background: "#c49a3a", padding: "6px 14px" }}>
              <span style={{ fontSize: 8, fontWeight: 700, color: "#fff", letterSpacing: 2, textTransform: "uppercase" }}>Explore the Menu →</span>
            </div>
          </div>
        </div>
      )}

      {/* ── StorePanel ── */}
      {type === "dashboard" && (
        <div style={{ width: "100%", height: 264, background: "#f8f9fa", display: "flex", overflow: "hidden" }}>
          <div style={{ width: 120, background: "#fff", borderRight: "1px solid #e5e7eb", display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "12px", borderBottom: "1px solid #e5e7eb", display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 16, height: 16, background: "#059669", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 6, color: "#fff", fontWeight: 900 }}>SP</span>
              </div>
              <span style={{ fontSize: 9, fontWeight: 700, color: "#1f2937" }}>StorePanel</span>
            </div>
            <div style={{ padding: 8, display: "flex", flexDirection: "column", gap: 2 }}>
              {[["Dashboard", true], ["Products", false], ["Orders", false], ["Customers", false], ["Analytics", false]].map(([label, active]) => (
                <div key={String(label)} style={{ padding: "6px 8px", borderRadius: 6, background: active ? "#ecfdf5" : "transparent", color: active ? "#059669" : "#6b7280", fontSize: 8, fontWeight: 500 }}>
                  {String(label)}
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: 1, padding: 12, display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: "#1f2937" }}>Dashboard</span>
              <div style={{ background: "#059669", color: "#fff", fontSize: 7, fontWeight: 600, padding: "4px 8px", borderRadius: 4 }}>+ Add Product</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
              {[["Total Orders", "142", "↑ 12%"], ["Revenue", "$4.8k", "↑ 8%"], ["Products", "64", "Active"]].map(([l, v, s]) => (
                <div key={String(l)} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 8, padding: 8 }}>
                  <p style={{ fontSize: 6, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 2 }}>{String(l)}</p>
                  <p style={{ fontSize: 13, fontWeight: 900, color: "#1f2937" }}>{String(v)}</p>
                  <p style={{ fontSize: 6, color: "#059669", fontWeight: 500 }}>{String(s)}</p>
                </div>
              ))}
            </div>
            <div style={{ flex: 1, background: "#fff", border: "1px solid #e5e7eb", borderRadius: 8, overflow: "hidden" }}>
              <div style={{ padding: "6px 12px", borderBottom: "1px solid #e5e7eb", fontSize: 7, fontWeight: 600, color: "#374151" }}>Recent Orders</div>
              {[["Order #042", "Leather Bag", "$129", "Shipped"], ["Order #041", "Sneakers", "$89", "Pending"], ["Order #040", "Watch", "$299", "Delivered"]].map(([o, p, pr, s]) => (
                <div key={String(o)} style={{ display: "flex", gap: 8, padding: "5px 12px", borderBottom: "1px solid #f9fafb", fontSize: 7, alignItems: "center" }}>
                  <span style={{ color: "#9ca3af", width: 40 }}>{String(o)}</span>
                  <span style={{ color: "#374151", flex: 1 }}>{String(p)}</span>
                  <span style={{ color: "#1f2937", fontWeight: 600 }}>{String(pr)}</span>
                  <span style={{ fontSize: 6, padding: "2px 6px", borderRadius: 99, background: String(s) === "Delivered" ? "#ecfdf5" : String(s) === "Shipped" ? "#eff6ff" : "#fffbeb", color: String(s) === "Delivered" ? "#059669" : String(s) === "Shipped" ? "#2563eb" : "#d97706" }}>{String(s)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── ShopFlow ── */}
      {type === "saas" && (
        <div style={{ width: "100%", height: 264, background: "#fff", display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: 0.4, pointerEvents: "none" }} />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 16px", borderBottom: "1px solid #e5e7eb", background: "rgba(255,255,255,0.9)", position: "relative", zIndex: 1 }}>
            <span style={{ fontSize: 13, fontWeight: 900, color: "#111", letterSpacing: -0.5 }}>Shopflow.</span>
            <div style={{ display: "flex", gap: 12, fontSize: 9, color: "#6b7280" }}>
              <span>Features</span><span>Themes</span><span>Pricing</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#e5e7eb" }} />
              <span style={{ fontSize: 9, color: "#374151" }}>Account ▾</span>
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", position: "relative", zIndex: 1 }}>
            <div style={{ flex: "0 0 48%", padding: "12px 16px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid #d1d5db", borderRadius: 99, padding: "3px 10px", fontSize: 7, color: "#6b7280", fontWeight: 500, marginBottom: 12, alignSelf: "flex-start" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#9ca3af" }} />NOW IN EARLY ACCESS
              </div>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#111", lineHeight: 1, letterSpacing: -1 }}>Sell your</div>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#d1d5db", lineHeight: 1, letterSpacing: -1 }}>gear.</div>
              <p style={{ fontSize: 8, color: "#3b82f6", lineHeight: 1.5, marginTop: 8 }}>High-end ecommerce simplified.<br />No technical skills required.</p>
              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                <div style={{ padding: "6px 12px", background: "#111", color: "#fff", fontSize: 8, fontWeight: 700, borderRadius: 99 }}>Go to Dashboard →</div>
                <div style={{ padding: "6px 12px", border: "1px solid #e5e7eb", color: "#374151", fontSize: 8, fontWeight: 500, borderRadius: 99 }}>▶ Watch Demo</div>
              </div>
            </div>
            <div style={{
              flex: 1, overflow: "hidden", position: "relative",
              backgroundImage: "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=85&fit=crop')",
              backgroundSize: "cover", backgroundPosition: "center",
            }}>
              <div style={{ position: "absolute", top: 8, left: 8, display: "flex", alignItems: "center", gap: 4, fontSize: 6, color: "#10b981", fontWeight: 500, zIndex: 2, background: "rgba(0,0,0,0.5)", padding: "2px 6px", borderRadius: 99 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#10b981" }} />STORE LIVE
              </div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 8, background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)" }}>
                <p style={{ fontSize: 6, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 2 }}>HIGH PERFORMANCE</p>
                <p style={{ fontSize: 10, fontWeight: 700, color: "#fff" }}>Vapor Max Elite</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 px-6 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
              <p className="text-xs text-neutral-400 uppercase tracking-[0.2em] font-medium">Selected Work</p>
            </div>
            <h2
              className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Projects that ship.
            </h2>
          </div>
          <a
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors shrink-0"
          >
            View all work
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group grid grid-cols-1 md:grid-cols-12 border border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-300 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 bg-white"
            >
              {/* Left: mockup fills full height edge-to-edge */}
              <div className="md:col-span-5 relative overflow-hidden" style={{ minHeight: 210 }}>
                <MockupContent type={project.mockupType} />
                {/* Project number overlay bottom-left */}
                <span
                  className="absolute bottom-3 left-4 font-black text-sm z-10 select-none"
                  style={{ color: "rgba(255,255,255,0.4)", textShadow: "0 1px 6px rgba(0,0,0,0.8)" }}
                >
                  {project.num}
                </span>
              </div>

              {/* Right: content */}
              <div className="md:col-span-7 flex flex-col justify-between p-7 border-l border-neutral-100">
                {/* Top row: category + icon badge */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-6 h-6 rounded-md flex items-center justify-center"
                        style={{ background: project.accentBg, border: `1px solid ${project.accentColor}30` }}
                      >
                        <project.Icon size={12} style={{ color: project.accentColor }} />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em]" style={{ color: project.accentColor }}>
                        {project.category}
                      </span>
                      <span className="text-neutral-300 text-xs">·</span>
                      <span className="text-[10px] text-neutral-400">{project.year}</span>
                    </div>
                    <a
                      href="/portfolio"
                      className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all duration-200"
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  </div>

                  <h3 className="text-xl font-black text-neutral-900 mb-2 tracking-tight">{project.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{project.description}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-neutral-50 border border-neutral-200 text-neutral-500 px-2.5 py-0.5 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-10 flex items-center justify-between pt-8 border-t border-neutral-100">
          <p className="text-sm text-neutral-400">
            <span className="font-semibold text-neutral-900">07 projects</span> built from scratch — no templates, no shortcuts.
          </p>
          <a
            href="/portfolio"
            className="group inline-flex items-center gap-2.5 bg-neutral-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-neutral-700 transition-colors"
          >
            See full portfolio
            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
