import Link from "next/link";

export const metadata = {
  title: "Portfolio — Limitless",
  description: "Every project we have built — detailed, real, and live.",
};

const projects = [
  {
    num: "01",
    title: "Advanced Power Solutions",
    category: "Industrial E-Commerce",
    year: "2026",
    status: "Live",
    url: "aps.com.pk",
    href: "https://aps.com.pk/",
    tagline: "A heavy-duty e-commerce platform built for an engineering firm operating since 1996.",
    description: "Advanced Power Solutions needed more than a website — they needed a full digital operation. We built a complete e-commerce platform handling switchgear, generators, UPS systems, and industrial compressors. Includes a custom admin panel, user accounts, cart, and quote request system.",
    highlights: [
      "Multi-category product management with custom filters",
      "Secure admin panel — full CRUD for products, orders, customers",
      "User accounts with address book and order history",
      "Cart + checkout with quote request system",
    ],
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma"],
    accent: "#1d4ed8",
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-200",
    accentText: "text-blue-600",
    mockupBg: "bg-blue-900",
    mockupAccent: "bg-blue-500",
    mockupLight: "bg-blue-300",
    mockupType: "ecommerce",
  },
  {
    num: "02",
    title: "Chef Aboud Küche",
    category: "Hospitality Website",
    year: "2026",
    status: "Live",
    url: "chefaboud.vercel.app",
    href: "https://chefaboud.vercel.app/en",
    tagline: "A multilingual catering website for a Berlin-based chef — English, German, and Arabic.",
    description: "We built a catering-focused restaurant website with full i18n support across three languages including right-to-left Arabic. The design is editorial and motion-forward, reflecting the chef's high-end positioning in the Berlin market.",
    highlights: [
      "Full multilingual support — English, German, RTL Arabic",
      "Editorial design with smooth scroll animations",
      "Catering booking section with contact integration",
      "Curated menu display with category navigation",
    ],
    tags: ["Next.js", "i18n", "Framer Motion", "Tailwind CSS"],
    accent: "#b45309",
    accentBg: "bg-amber-50",
    accentBorder: "border-amber-200",
    accentText: "text-amber-600",
    mockupBg: "bg-stone-900",
    mockupAccent: "bg-amber-500",
    mockupLight: "bg-amber-300",
    mockupType: "editorial",
  },
  {
    num: "03",
    title: "StorePanel",
    category: "SaaS Platform",
    year: "2026",
    status: "In Progress",
    url: null,
    href: null,
    tagline: "A no-code admin panel that plugs directly into your database.",
    description: "StorePanel gives non-technical store owners a real-time dashboard connected directly to a live Neon PostgreSQL database. No backend access required. Manage products, quotes, orders, and customers from a clean interface.",
    highlights: [
      "Direct Neon DB connection — live real-time data",
      "Products, orders, customers, and quotes in one panel",
      "Role-based access — owner vs. staff views",
      "Designed to scale across multiple stores",
    ],
    tags: ["Next.js", "Neon DB", "Prisma", "SaaS"],
    accent: "#15803d",
    accentBg: "bg-emerald-50",
    accentBorder: "border-emerald-200",
    accentText: "text-emerald-600",
    mockupBg: "bg-neutral-900",
    mockupAccent: "bg-emerald-500",
    mockupLight: "bg-emerald-300",
    mockupType: "dashboard",
  },
  {
    num: "04",
    title: "ShopFlow",
    category: "SaaS Platform",
    year: "2026",
    status: "In Progress",
    url: null,
    href: null,
    tagline: "Multi-tenant e-commerce SaaS — think Shopify, but self-hosted and fully yours.",
    description: "Each merchant gets their own subdomain, full storefront customisation via a visual theme editor, and complete control over products, orders, and customers. Stripe handles payments and subscriptions across Free/Basic/Pro tiers.",
    highlights: [
      "Multi-tenant — each store on its own subdomain",
      "Visual theme editor — colors, fonts, layout, hero slides",
      "Full product, category, order, and discount management",
      "Stripe payments and subscription billing",
      "Resend for transactional emails, ImageKit for media",
    ],
    tags: ["Next.js 15", "Prisma", "Stripe", "Clerk", "Neon DB"],
    accent: "#4f46e5",
    accentBg: "bg-indigo-50",
    accentBorder: "border-indigo-200",
    accentText: "text-indigo-600",
    mockupBg: "bg-indigo-950",
    mockupAccent: "bg-indigo-500",
    mockupLight: "bg-indigo-300",
    mockupType: "saas",
  },
  {
    num: "05",
    title: "LinkedIn Bulk Opener",
    category: "Productivity Tool",
    year: "2025",
    status: "Live",
    url: "profileopener.netlify.app",
    href: "https://profileopener.netlify.app/",
    tagline: "Open 100+ LinkedIn profiles in under a minute — used by 10,000+ recruiters globally.",
    description: "Built for recruiters spending hours manually opening profiles. Paste a list of names, open all profiles simultaneously. Auto-detects CEOs for any company and exports the full lead list as a spreadsheet. Grew to 10,000+ users with zero paid marketing.",
    highlights: [
      "Opens 100+ LinkedIn profiles in under a minute",
      "Auto-detects CEOs and decision-makers by company",
      "Export full lead list to spreadsheet",
      "10,000+ active users organically",
    ],
    tags: ["HTML", "JavaScript", "AI", "Netlify"],
    accent: "#0f172a",
    accentBg: "bg-neutral-100",
    accentBorder: "border-neutral-300",
    accentText: "text-neutral-700",
    mockupBg: "bg-neutral-800",
    mockupAccent: "bg-neutral-500",
    mockupLight: "bg-neutral-400",
    mockupType: "tool",
  },
  {
    num: "06",
    title: "CX Services, LLC.",
    category: "Brand Agency Website",
    year: "2026",
    status: "Live",
    url: "cxser.vercel.app",
    href: "https://cxser.vercel.app/",
    tagline: "Answering all of your brand-building needs — a bold agency site with a striking identity.",
    description: "CX Services needed a website as bold as their brand. We delivered an immersive agency site with a striking red palette, large editorial typography, a 3D animated grid hero, and strong visual hierarchy.",
    highlights: [
      "Immersive full-screen hero with 3D animated grid",
      "Bold editorial typography and strong visual identity",
      "Fast, smooth page transitions",
      "Mobile-first responsive layout",
    ],
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    accent: "#dc2626",
    accentBg: "bg-red-50",
    accentBorder: "border-red-200",
    accentText: "text-red-600",
    mockupBg: "bg-red-700",
    mockupAccent: "bg-red-400",
    mockupLight: "bg-red-200",
    mockupType: "agency",
  },
  {
    num: "07",
    title: "Agrolync",
    category: "AgriTech Marketplace",
    year: "2025",
    status: "Live",
    url: "agrolync.vercel.app",
    href: "https://agrolync.vercel.app/",
    tagline: "Farm-to-market platform connecting 12,400+ verified farmers to buyers across 36 Nigerian states.",
    description: "Agrolync brings real-time commodity price intelligence to Nigerian farmers and buyers. Track live prices from Dawanau, Onitsha, Terminus, and 40+ markets — updated every minute. Includes a marketplace, producer dashboard, and buyer portal with live notifications.",
    highlights: [
      "Live commodity prices from 40+ Nigerian markets, updated per minute",
      "Marketplace connecting verified farmers directly to buyers",
      "Farmer and buyer dashboards with listing management",
      "12,400+ verified farmers across 36 states at launch",
    ],
    tags: ["Next.js", "Tailwind CSS", "Real-time DB", "Vercel"],
    accent: "#16a34a",
    accentBg: "bg-green-50",
    accentBorder: "border-green-200",
    accentText: "text-green-600",
    mockupBg: "bg-green-900",
    mockupAccent: "bg-green-500",
    mockupLight: "bg-green-300",
    mockupType: "agro",
  },
];

const mockupStyles = `
  @keyframes ticker {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes livePulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.85); }
  }
  @keyframes countUp {
    from { opacity: 0; transform: translateY(4px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes scanLine {
    0%   { top: 0%; opacity: 0.4; }
    50%  { opacity: 0.15; }
    100% { top: 100%; opacity: 0; }
  }
  @keyframes fadeSlide {
    0%   { opacity: 0; transform: translateY(6px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes priceTick {
    0%   { color: #4ade80; }
    30%  { color: #86efac; }
    100% { color: #4ade80; }
  }
  .anim-ticker { display: flex; width: max-content; animation: ticker 22s linear infinite; }
  .anim-live   { animation: livePulse 1.4s ease-in-out infinite; }
  .anim-scan::after {
    content: '';
    position: absolute;
    left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
    animation: scanLine 3.5s linear infinite;
  }
  .anim-count  { animation: countUp 0.6s ease-out both; }
  .anim-fade   { animation: fadeSlide 0.7s ease-out both; }
  .anim-price  { animation: priceTick 2s ease-in-out infinite; }
  @keyframes rippleOut {
    from { transform: scale(0.2); opacity: 0.85; }
    to   { transform: scale(2.2); opacity: 0; }
  }
  @keyframes dotFlash {
    0%   { transform: scale(1); opacity: 1; }
    60%  { transform: scale(1.6); opacity: 0.6; }
    100% { transform: scale(0); opacity: 0; }
  }
`;

function BrowserShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-xl shadow-black/10">
      <div className="bg-neutral-100 px-4 py-3 flex items-center gap-3 border-b border-neutral-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white border border-neutral-200 rounded-full px-4 py-1">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
            <div className="w-16 h-1.5 rounded-full bg-neutral-200" />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

function Mockup({ project }: { project: typeof projects[0] }) {
  const { mockupType } = project;

  return (
    <div className="rounded-2xl overflow-hidden">
      <div className="relative">
      {/* ── APS ── dark bg, red accents, MASSIVE POWER LOADS */}
      {mockupType === "ecommerce" && (
        <div className="h-72 flex flex-col overflow-hidden anim-scan relative" style={{ background: "#0d0d0d" }}>
          {/* Nav */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b" style={{ borderColor: "#1a1a1a" }}>
            <div className="flex gap-3 text-[8px] font-medium tracking-widest uppercase" style={{ color: "#555" }}>
              <span>Services</span><span style={{ color: "#aaa" }}>Products ▾</span><span>Company</span>
            </div>
            <div className="flex items-center gap-3 text-[8px]" style={{ color: "#555" }}>
              <span>Sign In</span>
              <span className="anim-live" style={{ color: "#cc1a1a" }}>Cart 00</span>
            </div>
          </div>
          {/* Hero */}
          <div className="flex-1 px-4 py-4 flex flex-col justify-between relative overflow-hidden">
            {/* Generator image — right side */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80&fit=crop"
              alt="Industrial Generator"
              className="absolute right-0 top-0 h-full w-3/5 object-cover"
              style={{ opacity: 0.45, maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.9) 35%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.9) 35%)" }}
            />
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-px" style={{ background: "#cc1a1a" }} />
                <p className="text-[8px] font-bold tracking-[0.2em] uppercase" style={{ color: "#cc1a1a" }}>Established 1996</p>
              </div>
              <p className="font-black leading-none tracking-tight text-white anim-fade" style={{ fontSize: "28px", animationDelay: "0.1s" }}>MASSIVE</p>
              <p className="font-black leading-none tracking-tight anim-fade" style={{ fontSize: "20px", color: "#444", animationDelay: "0.25s" }}>POWER LOADS</p>
              <p className="text-[8px] leading-relaxed mt-2 max-w-40-fade" style={{ color: "#666", animationDelay: "0.4s" }}>Engineering heavy-duty electrical infrastructure for Pakistan&apos;s industrial sectors since 1996.</p>
              <div className="flex gap-2 mt-3 anim-fade" style={{ animationDelay: "0.55s" }}>
                <div className="px-3 py-1.5 text-[7px] font-bold text-white uppercase tracking-widest" style={{ background: "#cc1a1a" }}>View Catalog</div>
                <div className="px-3 py-1.5 text-[7px] font-bold uppercase tracking-widest border" style={{ color: "#aaa", borderColor: "#333" }}>Contact Us</div>
              </div>
            </div>
            <div className="self-end text-right anim-count" style={{ animationDelay: "0.3s" }}>
              <p className="font-black leading-none anim-price" style={{ fontSize: "26px", color: "#fff" }}>3000</p>
              <p className="text-[8px] font-bold" style={{ color: "#cc1a1a" }}>KVA</p>
              <p className="text-[7px] tracking-widest uppercase mt-0.5" style={{ color: "#444" }}>Performance Rating</p>
            </div>
          </div>
          {/* Partner logos row */}
          <div className="px-4 py-2 border-t flex items-center gap-3" style={{ borderColor: "#1a1a1a" }}>
            <p className="text-[7px] tracking-widest uppercase" style={{ color: "#333" }}>Authorized Partners</p>
            {["LKE","Kubota","ABB"].map((b) => (
              <span key={b} className="text-[8px] font-bold" style={{ color: "#444" }}>{b}</span>
            ))}
          </div>
        </div>
      )}

      {/* ── Chef Aboud ── dark warm, serif, LIVE KITCHEN badge */}
      {mockupType === "editorial" && (
        <div className="h-72 flex flex-col overflow-hidden relative" style={{ background: "#131008" }}>
          {/* Nav */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b" style={{ borderColor: "#2a2010" }}>
            <span className="text-[11px] font-semibold text-white" style={{ fontFamily: "Georgia, serif" }}>✦ Chef Aboud Küche</span>
            <div className="flex gap-3 text-[8px] tracking-widest uppercase" style={{ color: "#7a6a50" }}>
              <span>Catering</span><span>Menu</span><span>Gallery</span><span>About</span>
            </div>
            <div className="flex gap-2 text-[8px]" style={{ color: "#7a6a50" }}>
              <span>EN</span><span>AR</span><span>DE</span>
            </div>
          </div>
          {/* Two panel layout */}
          <div className="flex flex-1 gap-2 p-3">
            {/* Left — image placeholder with badge */}
            <div className="flex-1 rounded-xl relative overflow-hidden flex items-end p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80&fit=crop"
                alt="Grilling"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-black/60 px-2 py-1 rounded-full z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 anim-live" />
                <span className="text-[7px] text-white font-medium">LIVE KITCHEN</span>
              </div>
              <p className="relative z-10 text-white font-bold italic text-sm" style={{ fontFamily: "Georgia, serif" }}>Authentic Flavors</p>
            </div>
            {/* Right — card */}
            <div className="w-36 rounded-xl p-3 flex flex-col justify-between" style={{ background: "#1a1408" }}>
              <div>
                <p className="text-[8px] font-bold tracking-widest uppercase mb-1" style={{ color: "#c49a3a" }}>✦ Signature</p>
                <p className="text-white text-[11px] font-semibold leading-snug" style={{ fontFamily: "Georgia, serif" }}>
                  Crafting <span style={{ color: "#c49a3a", fontStyle: "italic" }}>Memories</span><br/>One Plate at a Time.
                </p>
              </div>
              <div>
                <div className="flex gap-2 mb-3" style={{ borderTop: "1px solid #2a2010", paddingTop: "8px" }}>
                  <div>
                    <p className="text-[8px] font-semibold text-white">Fresh</p>
                    <p className="text-[7px]" style={{ color: "#5a4a30" }}>Ingredient base</p>
                  </div>
                  <div className="w-px" style={{ background: "#2a2010" }} />
                  <div>
                    <p className="text-[8px] font-semibold text-white">Handmade</p>
                    <p className="text-[7px]" style={{ color: "#5a4a30" }}>Every morning</p>
                  </div>
                </div>
                <div className="w-full py-1.5 text-center text-[7px] font-bold tracking-widest text-white" style={{ background: "#c49a3a" }}>
                  EXPLORE THE MENU →
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── StorePanel ── custom clean admin panel */}
      {mockupType === "dashboard" && (
        <div className="h-72 flex overflow-hidden relative" style={{ background: "#f8f9fa" }}>
          {/* Abstract art background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 540 288" preserveAspectRatio="xMidYMid slice">
            {/* Big faint circle — top right */}
            <circle cx="480" cy="60" r="110" fill="none" stroke="#059669" strokeWidth="0.6" opacity="0.12" />
            <circle cx="480" cy="60" r="75"  fill="none" stroke="#059669" strokeWidth="0.6" opacity="0.1"  />
            <circle cx="480" cy="60" r="40"  fill="none" stroke="#059669" strokeWidth="0.6" opacity="0.08" />
            {/* Faint area chart line */}
            <polyline points="160,230 200,200 240,215 280,180 320,190 360,155 400,165 440,140 480,148 520,130"
              fill="none" stroke="#059669" strokeWidth="1.2" opacity="0.1" strokeLinejoin="round" />
            {/* Area fill under chart */}
            <polygon points="160,230 200,200 240,215 280,180 320,190 360,155 400,165 440,140 480,148 520,130 520,288 160,288"
              fill="#059669" opacity="0.035" />
            {/* Connecting dots */}
            {[[200,200],[280,180],[360,155],[440,140],[520,130]].map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r="2.5" fill="#059669" opacity="0.15" />
            ))}
            {/* Diagonal accent lines — bottom left */}
            <line x1="0"  y1="240" x2="80"  y2="160" stroke="#059669" strokeWidth="0.5" opacity="0.08" />
            <line x1="10" y1="288" x2="120" y2="170" stroke="#059669" strokeWidth="0.5" opacity="0.06" />
            <line x1="30" y1="288" x2="150" y2="190" stroke="#059669" strokeWidth="0.5" opacity="0.05" />
          </svg>
          {/* Sidebar */}
          <div className="w-32 flex flex-col border-r" style={{ background: "#fff", borderColor: "#e5e7eb" }}>
            <div className="px-3 py-3 border-b" style={{ borderColor: "#e5e7eb" }}>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded flex items-center justify-center" style={{ background: "#059669" }}>
                  <span className="text-[6px] text-white font-black">SP</span>
                </div>
                <span className="text-[9px] font-bold text-neutral-800">StorePanel</span>
              </div>
            </div>
            <div className="flex flex-col gap-0.5 p-2">
              {[["Dashboard", true],["Products", false],["Orders", false],["Customers", false],["Analytics", false]].map(([label, active]) => (
                <div key={String(label)} className="flex items-center gap-2 px-2 py-1.5 rounded text-[8px] font-medium" style={{ background: active ? "#ecfdf5" : "transparent", color: active ? "#059669" : "#6b7280" }}>
                  {String(label)}
                </div>
              ))}
            </div>
          </div>
          {/* Main */}
          <div className="flex-1 p-3 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-bold text-neutral-800">Dashboard</p>
              <div className="px-2 py-1 rounded text-[7px] font-semibold text-white" style={{ background: "#059669" }}>+ Add Product</div>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[["Total Orders","142","↑ 12%"],["Revenue","$4.8k","↑ 8%"],["Products","64","Active"]].map(([label, val, sub], si) => (
                <div key={String(label)} className="rounded-lg p-2 border" style={{ background: "#fff", borderColor: "#e5e7eb" }}>
                  <p className="text-[6px] text-neutral-400 uppercase tracking-widest">{String(label)}</p>
                  <p className="text-[13px] font-black text-neutral-800">{String(val)}</p>
                  <p className="text-[6px] font-medium" style={{ color: "#059669" }}>{String(sub)}</p>
                </div>
              ))}
            </div>
            <div className="flex-1 rounded-lg border overflow-hidden" style={{ borderColor: "#e5e7eb", background: "#fff" }}>
              <div className="flex items-center justify-between px-3 py-1.5 border-b" style={{ borderColor: "#e5e7eb" }}>
                <p className="text-[7px] font-semibold text-neutral-700">Recent Orders</p>
              </div>
              {[["Order #042","Leather Bag","$129","Shipped"],["Order #041","Sneakers","$89","Pending"],["Order #040","Watch","$299","Delivered"]].map(([order, product, price, status]) => (
                <div key={String(order)} className="flex items-center gap-2 px-3 py-1.5 border-b last:border-0 text-[7px]" style={{ borderColor: "#f3f4f6" }}>
                  <span className="text-neutral-400 w-12">{String(order)}</span>
                  <span className="text-neutral-700 flex-1">{String(product)}</span>
                  <span className="text-neutral-800 font-semibold">{String(price)}</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-[6px] font-medium ${String(status) === "Delivered" ? "bg-emerald-50 text-emerald-600" : String(status) === "Shipped" ? "bg-blue-50 text-blue-600" : "bg-amber-50 text-amber-600"}`}>{String(status)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── ShopFlow ── white, grid bg, "Sell your gear." */}
      {mockupType === "saas" && (
        <div className="h-72 flex flex-col overflow-hidden bg-white relative">
          {/* Grid bg */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "28px 28px", opacity: 0.5
          }} />
          {/* Nav */}
          <div className="relative z-10 flex items-center justify-between px-4 py-2.5 border-b border-neutral-200 bg-white/90">
            <span className="text-[13px] font-black text-neutral-900 tracking-tight">Shopflow.</span>
            <div className="flex items-center gap-3 text-[9px] text-neutral-500">
              <span>Features</span>
              <span>Themes</span>
              <span>Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-neutral-200" />
              <span className="text-[9px] text-neutral-600">Account ▾</span>
            </div>
          </div>
          {/* Hero content */}
          <div className="relative z-10 flex flex-1 gap-0 overflow-hidden">
            {/* Left text */}
            <div className="flex flex-col justify-center px-3 py-3 w-[45%] shrink-0">
              <div className="inline-flex items-center gap-1.5 border border-neutral-300 rounded-full px-2 py-0.5 text-[7px] text-neutral-500 font-medium mb-3 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 anim-live" />NOW IN EARLY ACCESS
              </div>
              <p className="font-black leading-none tracking-tight text-neutral-900" style={{ fontSize: "24px" }}>Sell your</p>
              <p className="font-black leading-none tracking-tight" style={{ fontSize: "24px", color: "#d1d5db" }}>gear.</p>
              <p className="text-[8px] leading-relaxed mt-2" style={{ color: "#3b82f6" }}>High-end ecommerce simplified.<br/>No technical skills required.</p>
              <div className="flex gap-2 mt-3">
                <div className="px-3 py-1.5 text-[8px] font-bold text-white rounded-full" style={{ background: "#111" }}>Go to Dashboard →</div>
                <div className="px-3 py-1.5 text-[8px] font-medium text-neutral-600 rounded-full border border-neutral-200">▶ Watch Demo</div>
              </div>
            </div>
            {/* Shoe image — fills right side */}
            <div className="flex-1 relative overflow-hidden rounded-tl-2xl rounded-bl-2xl border-l-2 border-t-2 border-neutral-800" style={{ background: "#111" }}>
              <div className="absolute top-2 left-2 flex items-center gap-1 text-[6px] text-emerald-400 font-medium z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />STORE LIVE
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=85&fit=crop"
                alt="Nike shoe"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)" }}>
                <p className="text-[6px] text-neutral-400 uppercase tracking-widest">HIGH PERFORMANCE</p>
                <p className="text-[10px] font-bold text-white leading-tight">Vapor Max Elite</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── LinkedIn Bulk Opener ── */}
      {mockupType === "tool" && (
        <div className="h-72 flex flex-col overflow-hidden relative" style={{ background: "#06091a" }}>
          {/* Subtle grid bg */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)", backgroundSize: "20px 20px", pointerEvents: "none" }} />

          {/* Nav */}
          <div className="flex items-center justify-between px-4 py-2.5 relative z-10" style={{ borderBottom: "1px solid #0f1f3d", background: "rgba(6,9,26,0.9)" }}>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0077b5, #00a0dc)" }}>
                <span className="text-[9px] text-white font-black">in</span>
              </div>
              <div>
                <span className="text-[10px] font-black text-white tracking-tight">LinkedIn Opener</span>
                <span className="text-[9px] font-black ml-1" style={{ color: "#38bdf8" }}>Pro</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[7px] font-bold" style={{ background: "#0f2a1a", color: "#34d399", border: "1px solid #064e2a" }}>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 anim-live" />
                10,247 active users
              </div>
              <div className="px-2.5 py-1 rounded-full text-[7px] font-bold text-white" style={{ background: "#0077b5" }}>Upgrade</div>
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-1 overflow-hidden relative z-10">

            {/* Left panel — input */}
            <div className="w-44 flex flex-col p-3 gap-2.5" style={{ borderRight: "1px solid #0f1f3d" }}>
              <div>
                <p className="text-[7px] font-bold uppercase tracking-widest mb-1.5" style={{ color: "#38bdf8" }}>Paste Names</p>
                <div className="rounded-md p-2 text-[7px] leading-loose" style={{ background: "#0d1429", border: "1px solid #1e3a5f", color: "#64748b" }}>
                  Elon Musk<br/>
                  Sam Altman<br/>
                  Jensen Huang<br/>
                  <span style={{ color: "#1e3a5f" }}>+ 47 more...</span>
                </div>
              </div>
              <div className="rounded-md px-2 py-1.5 text-center text-[7px] font-bold text-white" style={{ background: "linear-gradient(135deg, #0077b5, #0ea5e9)" }}>
                ⚡ Open All Profiles
              </div>
              <div style={{ borderTop: "1px solid #0f1f3d", paddingTop: 8 }}>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div className="w-2 h-2 rounded-full flex items-center justify-center" style={{ background: "#7c3aed" }}>
                    <span style={{ fontSize: 5, color: "#fff" }}>AI</span>
                  </div>
                  <span className="text-[7px] font-bold text-white">CEO Detection</span>
                  <span className="ml-auto text-[6px] px-1 rounded" style={{ background: "#7c3aed", color: "#fff" }}>ON</span>
                </div>
                <p className="text-[6px]" style={{ color: "#334155" }}>Auto-tags C-suite from 50M+ companies</p>
              </div>
              <div style={{ borderTop: "1px solid #0f1f3d", paddingTop: 8 }}>
                <p className="text-[7px] font-semibold mb-1" style={{ color: "#475569" }}>Export to</p>
                <div className="flex gap-1">
                  {["CSV", "Sheets", "Notion"].map(f => (
                    <div key={f} className="rounded px-1.5 py-0.5 text-[6px] font-medium" style={{ background: "#0d1429", color: "#64748b", border: "1px solid #1e293b" }}>{f}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right panel — live results */}
            <div className="flex-1 flex flex-col">
              {/* Stats row */}
              <div className="flex items-center gap-4 px-4 py-2" style={{ borderBottom: "1px solid #0f1f3d", background: "#070b1c" }}>
                {[["Profiles Opened", "50"], ["CEOs Found", "12"], ["Speed", "0.3s/ea"]].map(([l, v]) => (
                  <div key={String(l)}>
                    <p className="text-[8px] font-black text-white">{String(v)}</p>
                    <p className="text-[6px]" style={{ color: "#334155" }}>{String(l)}</p>
                  </div>
                ))}
                <div className="ml-auto">
                  <div className="rounded-full px-2 py-0.5 text-[6px] font-bold" style={{ background: "#0f2a1a", color: "#34d399", border: "1px solid #064e2a" }}>Running...</div>
                </div>
              </div>

              {/* Profile results */}
              <div className="flex-1 overflow-hidden px-3 py-2 flex flex-col gap-1.5">
                {[
                  { name: "Elon Musk", title: "CEO · Tesla, SpaceX", badge: "CEO", color: "#7c3aed" },
                  { name: "Sam Altman", title: "CEO · OpenAI", badge: "CEO", color: "#7c3aed" },
                  { name: "Jensen Huang", title: "Founder · NVIDIA", badge: "Founder", color: "#0369a1" },
                  { name: "Satya Nadella", title: "CEO · Microsoft", badge: "CEO", color: "#7c3aed" },
                  { name: "Brian Chesky", title: "Co-Founder · Airbnb", badge: "Founder", color: "#0369a1" },
                ].map((p, i) => (
                  <div key={p.name} className="flex items-center gap-2 rounded-lg px-3 py-1.5" style={{ background: i === 0 ? "#0d1f3c" : "#070b1c", border: `1px solid ${i === 0 ? "#1e3a5f" : "#0d1429"}` }}>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[7px] font-black text-white shrink-0" style={{ background: `hsl(${i * 55 + 200}, 70%, 35%)` }}>
                      {p.name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[8px] font-semibold text-white truncate">{p.name}</p>
                      <p className="text-[6px] truncate" style={{ color: "#475569" }}>{p.title}</p>
                    </div>
                    <div className="shrink-0 px-1.5 py-0.5 rounded text-[6px] font-bold text-white" style={{ background: p.color }}>{p.badge}</div>
                    <div className="w-3 h-3 rounded-full flex items-center justify-center shrink-0" style={{ background: "#0f2a1a" }}>
                      <span style={{ fontSize: 6, color: "#34d399" }}>✓</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Agrolync ── dark food bg, green accents, REAL-TIME PRICES / FAIR PAY */}
      {mockupType === "agro" && (
        <div className="h-72 flex flex-col overflow-hidden" style={{ background: "#0c1a0e" }}>
          {/* Ticker bar */}
          <div className="flex items-center py-1 text-[7px] font-medium overflow-hidden" style={{ background: "#14532d", color: "#86efac" }}>
            <div className="anim-ticker whitespace-nowrap">
              {[0,1].map((k) => (
                <span key={k} className="mr-12">Track real-time prices from Dawanau, Onitsha &amp; 40+ markets · Join free — no hidden fees · Agrolync is live — 12,400+ verified farmers ·&nbsp;</span>
              ))}
            </div>
          </div>
          {/* Nav */}
          <div className="flex items-center justify-between px-4 py-2 border-b" style={{ borderColor: "#1a3320" }}>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded flex items-center justify-center border border-green-600" style={{ background: "#15803d" }}>
                <span className="text-[8px] font-black text-white">A</span>
              </div>
              <div>
                <p className="text-[9px] font-black text-white tracking-wide">AGROLYNC</p>
                <p className="text-[6px] tracking-widest" style={{ color: "#4ade80" }}>FARM TO MARKET</p>
              </div>
            </div>
            <div className="flex gap-3 text-[7px]" style={{ color: "#4b7a5a" }}>
              <span className="text-white">Home</span><span>Marketplace</span><span>Dashboard</span>
            </div>
            <div className="px-2 py-1 rounded text-[7px] font-bold text-white" style={{ background: "#16a34a" }}>+ Get Started</div>
          </div>
          {/* Hero */}
          <div className="flex flex-1 px-4 py-3 gap-3">
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 anim-live" />
                <p className="text-[7px] font-bold tracking-[0.15em] uppercase" style={{ color: "#4ade80" }}>Live Market Intelligence</p>
              </div>
              <p className="font-black leading-none text-white" style={{ fontSize: "20px" }}>REAL-TIME</p>
              <p className="font-black leading-none" style={{ fontSize: "20px" }}>PRICES.</p>
              <p className="font-black leading-none" style={{ fontSize: "20px", color: "#4ade80" }}>FAIR PAY.</p>
              <p className="text-[8px] leading-relaxed mt-2 max-w-35" style={{ color: "#4b7a5a" }}>Track live commodity prices from 40+ Nigerian markets — updated every minute.</p>
              <div className="flex gap-2 mt-3">
                <div className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[7px] font-bold text-white" style={{ background: "#16a34a" }}>↗ View Price Tracker</div>
                <div className="px-3 py-1.5 rounded-full text-[7px] font-medium border" style={{ color: "#4ade80", borderColor: "#1a4a2a" }}>Join Free</div>
              </div>
            </div>
            {/* Phone mockup */}
            <div className="w-28 rounded-2xl overflow-hidden border border-neutral-700 flex flex-col self-center" style={{ background: "#fff" }}>
              {/* Phone notch */}
              <div className="flex justify-center py-1" style={{ background: "#111" }}>
                <div className="w-6 h-1 rounded-full bg-neutral-600" />
              </div>
              <div className="p-1.5 flex flex-col gap-1" style={{ background: "#fff" }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded bg-green-600 flex items-center justify-center"><span className="text-[5px] text-white font-black">A</span></div>
                    <span className="text-[7px] font-black text-neutral-800">AGROLYNC</span>
                  </div>
                  <div className="flex items-center gap-1 text-[6px] text-green-500 font-bold"><div className="w-1 h-1 rounded-full bg-green-500 anim-live" />LIVE</div>
                </div>
                <div className="rounded p-1 text-[6px] font-medium text-green-700 flex items-center gap-1" style={{ background: "#dcfce7" }}>
                  <span>⚡</span> Chidi R. ordered 200kg Masara — La...
                </div>
                <p className="text-[6px] font-bold text-neutral-500 uppercase tracking-widest mt-0.5">Live Prices</p>
                <div className="grid grid-cols-3 gap-0.5">
                  {[["🍅","Tumatir","₦380","▲12"],["🌽","Masara","₦170","▼5"],["🌶","Tatasai","₦1200","▲45"]].map(([icon, name, price, chg]) => (
                    <div key={String(name)} className="rounded p-1 text-center border" style={{ borderColor: String(name) === "Masara" ? "#16a34a" : "#e5e7eb", background: String(name) === "Masara" ? "#f0fdf4" : "#fff" }}>
                      <div className="text-[8px]">{String(icon)}</div>
                      <p className="text-[5px] text-neutral-500">{String(name)}</p>
                      <p className="text-[6px] font-black text-neutral-800 anim-count">{String(price)}</p>
                      <p className="text-[5px]" style={{ color: String(chg).startsWith("▲") ? "#16a34a" : "#dc2626" }}>{String(chg)}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[6px] font-bold text-neutral-500 uppercase tracking-widest mt-0.5">Featured Listings</p>
                {[["Tumatir (Roma)","₦380/kg"],["Tatasai","₦1,200/kg"]].map(([name, price]) => (
                  <div key={String(name)} className="flex items-center justify-between py-0.5 border-b" style={{ borderColor: "#f3f4f6" }}>
                    <span className="text-[6px] text-neutral-600">{String(name)}</span>
                    <span className="text-[6px] font-bold text-green-600">{String(price)}</span>
                  </div>
                ))}
              </div>
              {/* Bottom nav */}
              <div className="grid grid-cols-4 border-t border-neutral-200 py-1" style={{ background: "#fff" }}>
                {["🏠","🛒","📊","👤"].map((icon, i) => (
                  <div key={i} className="flex justify-center items-center">
                    <span className="text-[9px]">{icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── CX Services ── */}
      {mockupType === "agency" && (
        <div className="h-72 flex flex-col overflow-hidden relative" style={{ background: "#cc0f0f" }}>

          {/* White dot matrix — matches real site */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "9px 9px",
          }} />

          {/* 3D wireframe globe grid — perspective transform */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
            <div style={{
              position: "absolute",
              width: "260%",
              height: "260%",
              backgroundImage: "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              transform: "perspective(140px) rotateX(52deg)",
              transformOrigin: "center 60%",
              top: "10%",
            }} />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2.5 relative z-10">
            <div className="border border-white px-2 py-1 flex items-center gap-1.5 bg-white">
              <div className="w-4 h-4 rounded flex items-center justify-center" style={{ background: "#cc0f0f" }}>
                <span className="text-[6px] font-black text-white">CX</span>
              </div>
              <div className="leading-none">
                <p className="text-[7px] font-black" style={{ color: "#cc0f0f" }}>CX</p>
                <p className="text-[6px] font-bold" style={{ color: "#cc0f0f" }}>SERVICES, LLC.</p>
              </div>
            </div>
            <div className="bg-white px-3 py-1 flex items-center gap-1.5">
              <span className="text-[8px] font-bold tracking-widest" style={{ color: "#cc0f0f" }}>MENU</span>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 flex items-end justify-between px-3 pb-3 relative z-10">
            <div>
              <p className="text-white font-black leading-none tracking-tighter" style={{ fontSize: "48px", lineHeight: 0.88 }}>CX<br/>SERVICES,<br/>LLC.</p>
            </div>
            {/* Torn photo card — matches the real site's right-side image */}
            <div className="w-16 self-start mt-2 relative" style={{ transform: "rotate(1.5deg)" }}>
              <div className="text-[5px] font-mono mb-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>REC 02</div>
              <div className="h-24 rounded-sm overflow-hidden border border-white/20" style={{ background: "#111" }}>
                <div className="w-full h-full opacity-70" style={{
                  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
                  background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 40%, #0a0a0a 100%)",
                }} />
              </div>
              <div className="absolute inset-0 pointer-events-none" style={{
                background: "linear-gradient(135deg, transparent 60%, rgba(255,255,255,0.06) 100%)",
              }} />
            </div>
          </div>

          {/* Tagline + divider — bottom right */}
          <div className="absolute bottom-3 right-3 z-10 flex items-start gap-1.5">
            <div className="w-px h-8 bg-white/40 mt-0.5" />
            <p className="text-[7px] text-white/80 leading-relaxed max-w-20">Answering all of your brand-building needs.</p>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <main className="bg-white">
      <style>{mockupStyles}</style>

      {/* Header */}
      <div className="pt-32 pb-10 px-6 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-neutral-900 tracking-tight">Our Work.</h1>
        </div>
      </div>

      {/* Projects */}
      {projects.map((project, i) => {
        const flip = i % 2 === 1;
        return (
          <section
            key={project.num}
            className={`px-6 py-20 border-b border-neutral-100 ${i % 2 === 1 ? "bg-neutral-50" : "bg-white"}`}
          >
            <div className="max-w-6xl mx-auto">

              {/* Big number */}
              <p
                className="text-[100px] md:text-[140px] font-black leading-none tracking-tighter mb-2 select-none"
                style={{ color: "transparent", WebkitTextStroke: "2px #111111" }}
              >
                {project.num}
              </p>

              {/* Content + Mockup */}
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center -mt-4`}>

                {/* Text side */}
                <div className={flip ? "lg:order-2" : "lg:order-1"}>

                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold uppercase tracking-[0.15em] ${project.accentText}`}>
                      {project.category}
                    </span>
                    <span className="text-neutral-300">·</span>
                    <span className="text-xs text-neutral-400">{project.year}</span>
                    <span className="text-neutral-300">·</span>
                    <span className={`flex items-center gap-1.5 text-xs font-medium ${project.status === "Live" ? "text-emerald-600" : "text-amber-600"}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${project.status === "Live" ? "bg-emerald-500" : "bg-amber-500"}`} />
                      {project.status}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight leading-tight mb-4">
                    {project.title}
                  </h2>

                  <p className="text-neutral-600 leading-relaxed mb-6">{project.description}</p>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-2.5 mb-8">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-neutral-600">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0`} style={{ background: project.accent }} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-medium px-3 py-1.5 rounded-full border ${project.accentBg} ${project.accentBorder} ${project.accentText}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Mockup side */}
                <div className={flip ? "lg:order-1" : "lg:order-2"}>
                  <Mockup project={project} />
                </div>

              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="px-6 py-24 bg-neutral-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl font-black text-white tracking-tight mb-3">Want to be next?</h2>
            <p className="text-neutral-400 text-lg">Tell us your idea — we will build it.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-neutral-900 font-semibold text-sm pl-7 pr-3 py-3 rounded-full hover:bg-neutral-100 transition-all shrink-0"
          >
            Start a Project
            <span className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center text-white text-xs">↗</span>
          </Link>
        </div>
      </section>

    </main>
  );
}
