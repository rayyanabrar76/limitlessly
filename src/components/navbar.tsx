"use client";

import { useState, useRef, useEffect } from "react";
import {
  Menu, X, ChevronDown, ArrowUpRight,
  Boxes, Bot, Blocks, Rocket,
  Globe, ShoppingBag, Smartphone, Code2,
} from "lucide-react";
import Link from "next/link";

const megaServices = [
  {
    heading: "AI Solutions",
    accent: "#818cf8",
    items: [
      { label: "AI SaaS Platform", desc: "Full products, built to scale", href: "/services", Icon: Boxes },
      { label: "AI Agents & Automation", desc: "Agents that run your ops", href: "/services", Icon: Bot },
      { label: "AI Integration", desc: "Add intelligence to your product", href: "/services", Icon: Blocks },
      { label: "MVP Sprint", desc: "Idea to launched product, fast", href: "/services", Icon: Rocket },
    ],
  },
  {
    heading: "Development",
    accent: "#94a3b8",
    items: [
      { label: "Web Development", desc: "Fast, modern sites & web apps", href: "/services", Icon: Globe },
      { label: "E-Commerce Development", desc: "Stores built to sell & scale", href: "/services", Icon: ShoppingBag },
      { label: "Mobile App Development", desc: "iOS & Android, cross-platform", href: "/services", Icon: Smartphone },
      { label: "Custom Software", desc: "Bespoke tools for your business", href: "/services", Icon: Code2 },
    ],
  },
];

const navItems = [
  { label: "Services", href: "/services", mega: true },
  {
    label: "Portfolio",
    href: "/portfolio",
    dropdown: [
      { label: "SaaS Platforms", desc: "Full products we have engineered", href: "/portfolio" },
      { label: "AI & Automation", desc: "Intelligent systems and agents", href: "/portfolio" },
      { label: "All Work", desc: "Browse everything we have built", href: "/portfolio" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    dropdown: [
      { label: "E-Commerce", desc: "How to Build a Successful Store in 2026", href: "/blog/ecommerce-guide" },
      { label: "Performance", desc: "Why Next.js is the Future of Business Websites", href: "/blog/why-nextjs-is-better" },
      { label: "Case Studies", desc: "How Custom Design Increases Conversions", href: "/blog/design-for-conversions" },
    ],
  },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleMouseEnter(label: string) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  }

  return (
    <>
      {/* Floating Pill Nav */}
      <nav className="fixed top-4 left-0 right-0 z-50 px-4 flex justify-center">
        <div
          className={`w-full max-w-4xl rounded-full px-4 py-2 flex items-center justify-between border transition-all duration-300 ${
            scrolled
              ? "bg-neutral-900/80 border-white/10 shadow-lg shadow-black/40 backdrop-blur-xl"
              : "bg-neutral-900/40 border-white/[0.07] backdrop-blur-md"
          }`}
        >

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 pl-2">
            <span className="text-xl font-extrabold tracking-tight text-white lowercase hover:opacity-80 transition-opacity">
              limitlessly
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const hasMenu = item.mega || item.dropdown;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasMenu && handleMouseEnter(item.label)}
                  onMouseLeave={() => hasMenu && handleMouseLeave()}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3.5 py-1.5 text-sm text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
                  >
                    {item.label}
                    {hasMenu && (
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    )}
                  </Link>

                  {/* Mega menu (Services) */}
                  {item.mega && activeDropdown === item.label && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[92vw] max-w-170 bg-neutral-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl shadow-black/60"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="grid grid-cols-2 gap-1">
                        {megaServices.map((section) => (
                          <div key={section.heading}>
                            <p className="px-3 pt-2 pb-2 text-[10px] uppercase tracking-[0.16em] text-neutral-500 font-medium">
                              {section.heading}
                            </p>
                            {section.items.map((s) => (
                              <Link
                                key={s.label}
                                href={s.href}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                              >
                                <div
                                  className="w-9 h-9 rounded-lg flex items-center justify-center border shrink-0"
                                  style={{ background: `${section.accent}1a`, borderColor: `${section.accent}33` }}
                                >
                                  <s.Icon size={16} style={{ color: section.accent }} />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-white leading-tight">{s.label}</p>
                                  <p className="text-xs text-neutral-500 mt-0.5">{s.desc}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                      <Link
                        href="/services"
                        className="mt-1 flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <span className="text-sm font-semibold text-white">All services &amp; pricing</span>
                        <ArrowUpRight size={15} className="text-neutral-400" />
                      </Link>
                    </div>
                  )}

                  {/* Standard dropdown */}
                  {item.dropdown && activeDropdown === item.label && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-neutral-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-xl shadow-black/50"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.dropdown.map((drop) => (
                        <Link
                          key={drop.label}
                          href={drop.href}
                          className="flex flex-col gap-0.5 p-3 rounded-xl hover:bg-white/5 transition-colors"
                        >
                          <p className="text-sm font-medium text-white">{drop.label}</p>
                          <p className="text-xs text-neutral-500">{drop.desc}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <Link
              href="/contact"
              className="group flex items-center gap-2 bg-white text-neutral-900 text-sm font-semibold pl-5 pr-2 py-2 rounded-full hover:bg-neutral-200 transition-all duration-200"
            >
              Book a Call
              <span className="w-5 h-5 bg-neutral-900 rounded-full flex items-center justify-center text-white text-[10px] leading-none group-hover:rotate-45 transition-transform duration-200">↗</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-neutral-200 p-1.5 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="absolute top-full left-4 right-4 mt-2 bg-neutral-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/50 p-5 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-2.5 px-3 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10 mt-1">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-white text-neutral-900 text-sm font-semibold px-5 py-3 rounded-full hover:bg-neutral-200 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Book a Call <span>↗</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
