"use client";

import { useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "AI SaaS Platform", desc: "Full products, built to scale", href: "/services" },
      { label: "AI Agents & Automation", desc: "Custom agents that run your ops", href: "/services" },
      { label: "AI Integration", desc: "Add intelligence to your product", href: "/services" },
      { label: "MVP Sprint", desc: "Idea to launched product, fast", href: "/services" },
      { label: "All Services & Pricing", desc: "See how we scope every build", href: "/services" },
    ],
  },
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
  { label: "About", href: "/about", dropdown: null },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
      <nav className="fixed top-11.5 left-0 right-0 z-50 px-4 flex justify-center">
        <div className="w-full max-w-4xl bg-white border border-neutral-200 rounded-full shadow-md shadow-black/5 px-4 py-2 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo one.png"
              alt="Limitlessly"
              width={360}
              height={120}
              priority
              className="h-9 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              quality={100}
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                onMouseLeave={() => item.dropdown && handleMouseLeave()}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3.5 py-1.5 text-sm text-neutral-500 hover:text-neutral-900 transition-colors rounded-full hover:bg-neutral-100"
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.label && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white border border-neutral-200 rounded-2xl p-2 shadow-xl shadow-black/8"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.dropdown.map((drop) => (
                      <Link
                        key={drop.label}
                        href={drop.href}
                        className="flex flex-col gap-0.5 p-3 rounded-xl hover:bg-neutral-50 transition-colors"
                      >
                        <p className="text-sm font-medium text-neutral-900">{drop.label}</p>
                        <p className="text-xs text-neutral-400">{drop.desc}</p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-neutral-900 text-white text-sm font-medium pl-5 pr-3 py-2 rounded-full hover:bg-black transition-all duration-200"
            >
              Book a Call
              <span className="w-5 h-5 bg-white/15 rounded-full flex items-center justify-center text-xs leading-none">↗</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-neutral-700 p-1.5 hover:bg-neutral-100 rounded-full transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu — drops below the pill */}
        {mobileOpen && (
          <div className="absolute top-full left-4 right-4 mt-2 bg-white border border-neutral-200 rounded-2xl shadow-xl p-5 flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block py-2.5 px-3 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-xl transition-colors font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </div>
            ))}
            <div className="pt-3 border-t border-neutral-100 mt-1">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-neutral-900 text-white text-sm font-medium px-5 py-3 rounded-full hover:bg-black transition-colors"
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
