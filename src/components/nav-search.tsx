"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { products } from "@/lib/products";

export default function NavSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const results = query
    ? products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.tagline.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 5)
    : [];

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        setQuery("");
      }
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        setIsOpen((prev) => !prev);
      }
    }
    
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setQuery("");
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors rounded-full hover:bg-neutral-100 dark:hover:bg-white/10"
        aria-label="Open Search"
      >
        <Search size={18} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] sm:pt-[20vh] px-4 animate-in fade-in duration-200">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-neutral-900/40 dark:bg-black/60 backdrop-blur-sm" aria-hidden="true" />

          {/* Modal */}
          <div 
            ref={modalRef}
            className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
          >
            <div className="flex items-center px-4 py-4 border-b border-neutral-200 dark:border-white/10">
              <Search size={20} className="text-neutral-400 shrink-0 mr-3" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, categories, or keywords..."
                className="flex-1 bg-transparent border-none outline-none text-lg text-neutral-900 dark:text-white placeholder:text-neutral-400"
              />
              <button
                onClick={() => {
                  setIsOpen(false);
                  setQuery("");
                }}
                className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white shrink-0 p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors ml-2"
              >
                <X size={18} />
              </button>
            </div>

            {query.length > 0 ? (
              <div className="max-h-[60vh] overflow-y-auto p-2 custom-scrollbar">
                {results.length > 0 ? (
                  <div className="space-y-1">
                    <div className="px-3 py-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                      Products
                    </div>
                    {results.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/store/${product.slug}`}
                        onClick={() => {
                          setIsOpen(false);
                          setQuery("");
                        }}
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors group"
                      >
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 group-hover:scale-105 group-hover:shadow-md"
                          style={{ background: `${product.accent}1a`, borderColor: `${product.accent}33` }}
                        >
                          <Search size={20} style={{ color: product.accent }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-base font-bold text-neutral-900 dark:text-white truncate pr-2">
                              {product.name}
                            </p>
                            <ArrowRight size={16} className="text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors shrink-0 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                          </div>
                          <p className="text-sm text-neutral-500 dark:text-neutral-400 truncate mt-1">
                            {product.tagline}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-12 text-center text-neutral-500 dark:text-neutral-400">
                    No results found for "{query}".
                  </div>
                )}
              </div>
            ) : (
              <div className="px-6 py-8 text-center border-t border-neutral-200/50 dark:border-white/5 bg-neutral-50 dark:bg-black/20">
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Tip: You can use <kbd className="font-sans px-1.5 py-0.5 border border-neutral-300 dark:border-white/20 rounded-md bg-white dark:bg-neutral-800 text-xs shadow-sm">Cmd</kbd> + <kbd className="font-sans px-1.5 py-0.5 border border-neutral-300 dark:border-white/20 rounded-md bg-white dark:bg-neutral-800 text-xs shadow-sm">K</kbd> to open this dialog anytime.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
