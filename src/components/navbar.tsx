"use client";

import { useState, useRef } from "react";
import {
  Menu, X, ChevronDown, ArrowUpRight,
  Boxes, Bot, Blocks, Rocket,
  Globe, ShoppingBag, Smartphone, Code2
} from "lucide-react";
import Link from "next/link";
import QuoteButton from "@/components/store/quote-button";
import { ThemeToggle } from "@/components/theme-toggle";
import NavSearch from "@/components/nav-search";

const megaServices = [
  {
    heading: "AI Solutions",
    accent: "#818cf8",
    items: [
      { label: "AI SaaS Platform", desc: "Full products, built to scale", href: "/store/ai-saas-platform", Icon: Boxes },
      { label: "AI Agents & Automation", desc: "Agents that run your ops", href: "/store/custom-ai-agent", Icon: Bot },
      { label: "AI Integration", desc: "Add intelligence to your product", href: "/store/ai-feature-integration", Icon: Blocks },
      { label: "MVP Sprint", desc: "Idea to launched product, fast", href: "/store/mvp-sprint", Icon: Rocket },
    ],
  },
  {
    heading: "Development",
    accent: "#94a3b8",
    items: [
      { label: "Web Development", desc: "Fast, modern sites & web apps", href: "/store/business-website", Icon: Globe },
      { label: "E-Commerce Development", desc: "Stores built to sell & scale", href: "/store/ecommerce-store", Icon: ShoppingBag },
      { label: "Mobile App Development", desc: "iOS & Android, cross-platform", href: "/store/mobile-app", Icon: Smartphone },
      { label: "Custom Software", desc: "Bespoke tools for your business", href: "/store/custom-software", Icon: Code2 },
    ],
  },
];

type NavItem = {
  label: string;
  href: string;
  mega?: boolean;
  dropdown?: { label: string; href: string; desc: string }[];
};

const navItems: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Store", href: "/store", mega: true },
  { label: "Contact", href: "/contact" },
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
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300">
        <div className="relative bg-white/75 dark:bg-neutral-900/75 border border-neutral-200/80 dark:border-white/10 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] rounded-2xl px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            
            {/* Left: Logo */}
            <div className="flex shrink-0 items-center">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-extrabold tracking-tight text-neutral-900 dark:text-white lowercase hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
                  limitlessly
                </span>
              </Link>
            </div>

            {/* Center: Desktop Nav (Perfectly Centered) */}
            <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 gap-6 h-full">
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
                      className={`flex items-center gap-1.5 text-[13px] transition-colors ${
                        item.label === "Store"
                          ? "font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-1.5 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-sm"
                          : "font-semibold text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white py-4"
                      }`}
                    >
                      {item.label}
                      {hasMenu && (
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                        />
                      )}
                    </Link>

                    {/* Mega Menu */}
                    {item.mega && activeDropdown === item.label && (
                      <div
                        className="absolute top-[calc(100%-4px)] left-1/2 -translate-x-1/2 w-[800px] bg-white/95 dark:bg-neutral-900/95 backdrop-blur-2xl border border-neutral-200/80 dark:border-white/10 rounded-2xl p-4 shadow-2xl dark:shadow-black/60 transition-colors"
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="grid grid-cols-2 gap-4">
                          {megaServices.map((section) => (
                            <div key={section.heading}>
                              <p className="px-3 mb-2 text-[10px] uppercase tracking-[0.16em] text-neutral-500 font-medium">
                                {section.heading}
                              </p>
                              {section.items.map((s) => (
                                <Link
                                  key={s.label}
                                  href={s.href}
                                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors"
                                >
                                  <div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center border shrink-0"
                                    style={{ background: `${section.accent}1a`, borderColor: `${section.accent}33` }}
                                  >
                                    <s.Icon size={18} style={{ color: section.accent }} />
                                  </div>
                                  <div>
                                    <p className="text-sm font-semibold text-neutral-900 dark:text-white leading-tight">{s.label}</p>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{s.desc}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-white/10">
                          <Link
                            href="/store"
                            className="flex items-center justify-between px-4 py-3 rounded-xl bg-neutral-50 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
                          >
                            <span className="text-sm font-semibold text-neutral-900 dark:text-white">Browse all products</span>
                            <ArrowUpRight size={16} className="text-neutral-500 dark:text-neutral-400" />
                          </Link>
                        </div>
                      </div>
                    )}

                    {/* Standard dropdown */}
                    {item.dropdown && activeDropdown === item.label && (
                      <div
                        className="absolute top-[calc(100%-8px)] left-1/2 -translate-x-1/2 w-64 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-2xl p-2 shadow-xl dark:shadow-black/50 transition-colors"
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.dropdown.map((drop) => (
                          <Link
                            key={drop.label}
                            href={drop.href}
                            className="flex flex-col gap-1 p-3 rounded-xl hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors"
                          >
                            <p className="text-sm font-semibold text-neutral-900 dark:text-white">{drop.label}</p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400">{drop.desc}</p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <ThemeToggle />
              
              <NavSearch />

              <QuoteButton />

              {/* Mobile Toggle */}
              <button
                className="md:hidden ml-1 p-2 text-neutral-400 hover:text-white transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950 px-4 pt-2 pb-6 flex flex-col gap-1 shadow-2xl transition-colors">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-3 px-4 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-white/5 rounded-xl transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
