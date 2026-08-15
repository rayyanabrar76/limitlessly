"use client";

import Link from "next/link";
import { ArrowUpRight, Zap, LayoutDashboard, Store, Linkedin, Sprout, Blocks, Rocket, Globe, Code2, Bot, ShoppingBag, ChevronDown, Boxes, Star } from "lucide-react";
import Image from "next/image";


const projects = [
  {
    num: "01",
    title: "Advanced Power Solutions",
    category: "AI Industrial Commerce",
    year: "2026",
    status: "Delivered",
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
    status: "Delivered",
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
    status: "Delivered",
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
    status: "Delivered",
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
    tags: ["JavaScript", "AI", "Automation"],
    Icon: Linkedin,
    accent: "#818cf8",
  },
  {
    num: "05",
    title: "Agrolync",
    category: "AI AgriTech Platform",
    year: "2025",
    status: "Delivered",
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

const faqs = [
  {
    question: "How does the quote process work?",
    answer: "Browse our Software Store and add the specific products or components you need to your Quote Basket. Once submitted, our engineering team reviews your requirements and gets back to you within 24 hours with a custom proposal, timeline, and exact pricing. No commitment is required until you approve the proposal."
  },
  {
    question: "Do I own the source code?",
    answer: "Absolutely. Once the project is completed and paid in full, 100% of the intellectual property, source code, and assets are transferred to you. You are never locked into our services."
  },
  {
    question: "How long does a typical build take?",
    answer: "It depends on the complexity of the platform. MVP Sprints and custom AI Agents typically take 2-4 weeks. Full-scale AI SaaS platforms and multi-tenant architectures usually take 6-12 weeks from discovery to launch."
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes! We offer optional retainer packages for ongoing maintenance, feature updates, scaling infrastructure, and ensuring your AI models remain performant as your user base grows."
  }
];

export default function AboutPage() {
  return (
    <main className="bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      
      {/* ── 1. Hero SEO Section (Hyper-Premium) ── */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
        {/* Deep ambient background */}
        <div className="absolute inset-0 bg-neutral-50 dark:bg-[#0a0a0a] -z-20 transition-colors duration-300" />
        
        {/* Top edge highlight */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-linear-to-r from-transparent via-indigo-500/50 dark:via-indigo-400/30 to-transparent -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 dark:bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none -z-10" />

        {/* Intricate dot grid mask */}
        <div className="absolute inset-0 bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] dark:bg-[radial-gradient(#3f3f46_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_60%,transparent_100%)] opacity-40 -z-10" />
        
        {/* Conic/Radial Glow center */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-fuchsia-500/5 dark:bg-fuchsia-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

        <div className="relative max-w-[5rem] md:max-w-5xl mx-auto text-center z-10 w-full flex flex-col items-center">
          
          {/* Ultra-refined Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/40 dark:bg-white/5 border border-neutral-300/60 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-xl mb-10 transition-transform hover:scale-105 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <p className="text-[11px] font-bold text-neutral-800 dark:text-neutral-300 uppercase tracking-[0.25em]">
              Limitlessly Product Studio
            </p>
          </div>
          
          {/* Massive Headline */}
          <h1 className="text-[3.5rem] leading-[1] md:text-[5.5rem] lg:text-[6.5rem] font-bold text-neutral-900 dark:text-white tracking-tighter mb-8 md:leading-[0.95]">
            We build platforms that <br className="hidden md:block" />
            <span className="inline-block bg-linear-to-b from-indigo-500 to-fuchsia-500 dark:from-indigo-400 dark:to-fuchsia-400 bg-clip-text text-transparent pb-3">
              scale from day one.
            </span>
          </h1>
          
          {/* Refined Sub-headline */}
          <p className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-14 font-medium tracking-tight">
            Limitlessly is an elite software agency. We partner with visionary founders worldwide to design, engineer, and launch intelligent AI SaaS products.
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href="/store"
              className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 rounded-full font-bold text-[15px] text-white bg-neutral-900 dark:bg-white dark:text-neutral-900 overflow-hidden transition-all hover:scale-[1.03] active:scale-95 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_0_40px_8px_rgba(255,255,255,0.15)]"
            >
              Browse Software Store
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="https://calendly.com/rayyanabrar76/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 rounded-full font-bold text-[15px] bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-white/10 transition-all hover:scale-[1.03] active:scale-95 shadow-sm"
            >
              Book a Strategy Call
            </a>
          </div>

          {/* Social Proof */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={22} className="fill-amber-400 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]" />
              ))}
            </div>
            <div className="hidden sm:block h-5 w-[1px] bg-neutral-300 dark:bg-white/20"></div>
            <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
              Trusted by <span className="text-neutral-900 dark:text-white">40+ visionary founders</span> worldwide.
            </p>
          </div>

        </div>
      </section>

      {/* ── 2. Who We Are (The Story) ── */}
      <section className="py-20 px-6 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">Built by a developer who gets it.</h2>
              <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <p>
                  Limitlessly started with a simple belief: the gap between a great idea and a shipped product has never been smaller—if you have the right team. 
                </p>
                <p>
                  We grew tired of the traditional agency model where clients pay for endless hours of discovery with nothing to show for it. That's why we productized our services into a <strong>Software Store</strong>. You pick exactly what you want built, you know exactly what you're getting, and we execute with precision.
                </p>
                <p>
                  We build like a product team, not a vendor. Real architecture, beautiful UI/UX, and AI at the core—platforms engineered to handle the first user and the millionth.
                </p>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-white/10">
              <Image 
                src="/images/products/saas_dashboard_light.jpg" 
                alt="Our Engineering Process" 
                fill 
                className="object-cover dark:hidden"
              />
              <Image 
                src="/images/products/saas_dashboard.jpg" 
                alt="Our Engineering Process" 
                fill 
                className="object-cover hidden dark:block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. What We Build ── */}
      <section className="py-20 px-6 bg-neutral-100 dark:bg-white/[0.02] border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">What We Build</h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Our expertise spans across modern web, mobile, and artificial intelligence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "AI SaaS Platforms", desc: "Multi-tenant apps with Stripe billing and AI core.", icon: Boxes, color: "#818cf8" },
              { title: "Custom AI Agents", desc: "Autonomous bots that automate your workflows.", icon: Bot, color: "#2dd4bf" },
              { title: "E-Commerce", desc: "High-converting bespoke storefronts.", icon: ShoppingBag, color: "#f87171" },
              { title: "Custom Software", desc: "Complex web and mobile applications.", icon: Code2, color: "#60a5fa" },
            ].map((item) => (
              <div key={item.title} className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-3xl p-8 hover:-translate-y-1 transition-transform shadow-sm dark:shadow-none">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: `${item.color}15` }}>
                  <item.icon size={24} style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. How Limitlessly Works ── */}
      <section className="py-24 px-6 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">How It Works</h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
              A streamlined, transparent process from your first click to launch day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Build Your Quote",
                desc: "Browse our Software Store and add the products or features you need to your cart. Submit your request to get a custom, transparent quote."
              },
              {
                step: "02",
                title: "Architecture & Design",
                desc: "Once approved, we map out the entire system architecture, database schema, and design high-fidelity UI/UX mockups for your approval."
              },
              {
                step: "03",
                title: "Engineering & Launch",
                desc: "We write the code. You get weekly updates and access to a staging environment. Once perfect, we deploy to production and hand over the keys."
              }
            ].map((step) => (
              <div key={step.step} className="relative">
                <span className="text-7xl font-black text-neutral-200 dark:text-white/5 absolute -top-8 -left-4 -z-10 select-none">
                  {step.step}
                </span>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 pt-4">{step.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Detailed Selected Work (Portfolio) ── */}
      <section className="pt-24 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
            <p className="text-xs text-neutral-500 uppercase tracking-[0.2em] font-medium">Selected Work</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white mb-4">
            Real platforms.
            <br />
            <span className="bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500 dark:from-indigo-400 dark:via-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">In production. At scale.</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl">
            Not mockups or concepts — live products serving thousands of real users. We let our engineering speak for itself.
          </p>
        </div>

        {projects.map((project, i) => {
          const flip = i % 2 === 1;
          return (
            <div key={project.num} className="px-6 py-20 border-t border-neutral-200 dark:border-white/10">
              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Visual panel */}
                <div className={flip ? "lg:order-2" : "lg:order-1"}>
                  <div
                    className="relative rounded-3xl border border-neutral-200 dark:border-white/10 overflow-hidden h-80 md:h-96 flex flex-col items-center justify-center shadow-sm dark:shadow-none bg-white dark:bg-transparent"
                    style={{ background: `radial-gradient(120% 120% at 50% 0%, ${project.accent}15 0%, transparent 55%)` }}
                  >
                    <div
                      className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] text-neutral-900 dark:text-white"
                      style={{
                        backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                        backgroundSize: "44px 44px",
                        maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)",
                        WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)",
                      }}
                    />
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-[100px]" style={{ background: `${project.accent}26` }} />
                    <span className="absolute top-5 right-6 text-6xl font-black text-neutral-900/5 dark:text-white/5 select-none leading-none">{project.num}</span>

                    <div className="relative text-center px-6">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center border mx-auto mb-6 bg-white dark:bg-transparent" style={{ borderColor: `${project.accent}40` }}>
                        <project.Icon size={28} style={{ color: project.accent }} />
                      </div>
                      <p className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-white tracking-tight">{project.panelHeadline}</p>
                      <p className="mt-2 text-[11px] uppercase tracking-[0.2em]" style={{ color: project.accent }}>{project.category}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={flip ? "lg:order-1" : "lg:order-2"}>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: project.accent }}>
                      {project.category}
                    </span>
                    <span className="text-neutral-300 dark:text-neutral-600">·</span>
                    <span className="text-xs text-neutral-500">{project.year}</span>
                    <span className="text-neutral-300 dark:text-neutral-600">·</span>
                    <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-500 dark:text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                      {project.status}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-white tracking-tight leading-tight mb-3">{project.title}</h2>
                  <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">{project.tagline}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">{project.description}</p>

                  <ul className="flex flex-col gap-2.5 mb-6">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: project.accent }} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-7">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-neutral-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* NO EXTERNAL LINKS - Keep them in the funnel */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border border-neutral-300 dark:border-white/15 text-neutral-900 dark:text-white text-sm font-bold px-6 py-3 rounded-full hover:border-neutral-400 dark:hover:border-white/30 hover:bg-neutral-100 dark:hover:bg-white/5 transition-all"
                  >
                    Build a platform like this
                    <ArrowUpRight size={16} />
                  </Link>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* ── 6. Tech Stack ── */}
      <section className="py-24 px-6 border-t border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-12">The modern stack for modern products.</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Next.js", "React", "TypeScript", "Node.js", "Python", "OpenAI API", "Anthropic", "PostgreSQL", "Prisma", "Supabase", "Stripe", "AWS", "Vercel"].map((tech) => (
              <div
                key={tech}
                className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-full px-6 py-3 font-semibold text-neutral-700 dark:text-neutral-300 shadow-sm dark:shadow-none"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ── */}
      <section className="py-24 px-6 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-600 dark:text-neutral-400">Everything you need to know about working with Limitlessly.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm dark:shadow-none">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-neutral-900 dark:text-white marker:content-none select-none">
                  {faq.question}
                  <ChevronDown size={20} className="text-neutral-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-white/5 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Final CTA ── */}
      <section className="px-6 py-24 pb-32 border-t border-neutral-200 dark:border-white/10">
        <div className="max-w-4xl mx-auto text-center bg-neutral-900 text-white dark:bg-neutral-900 border border-neutral-800 dark:border-white/10 rounded-[2.5rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
          
          {/* subtle glow background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent pointer-events-none" />
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10">
            Ready to build your platform?
          </h2>
          <p className="text-xl text-neutral-300 mb-10 max-w-xl mx-auto relative z-10">
            Stop waiting. Start building. Bring us the vision—we’ll engineer it from idea to scale.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a
              href="https://calendly.com/rayyanabrar76/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-neutral-900 font-bold px-8 py-4 rounded-xl hover:bg-neutral-200 transition-all duration-200"
            >
              Book a Call <ArrowUpRight size={18} />
            </a>
            <Link
              href="/store"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold border border-neutral-700 text-white hover:bg-neutral-800 transition-all"
            >
              Browse Store
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
