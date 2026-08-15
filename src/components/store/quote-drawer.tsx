"use client";

import { useQuote } from "@/lib/quote-context";
import { getProduct } from "@/lib/products";
import { X, Minus, Plus, Trash2, ArrowRight, ClipboardList } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const placeholderImages: Record<string, string> = {
  "ai-saas-platform": "/images/products/saas_dashboard_light.jpg",
  "custom-ai-agent": "/images/products/ai_agent_light.jpg",
  "ecommerce-store": "/images/products/ecommerce_ui_light.jpg",
  "mvp-sprint": "/images/products/saas_dashboard_light.jpg",
  "business-website": "/images/products/ecommerce_ui_light.jpg",
};

export default function QuoteDrawer() {
  const { isDrawerOpen, setDrawerOpen, items, updateQuantity, removeItem, isHydrated } = useQuote();

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setDrawerOpen]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isDrawerOpen]);

  if (!isHydrated) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-full md:w-[400px] bg-white dark:bg-neutral-950 border-l border-neutral-200 dark:border-white/10 shadow-2xl z-[101] transition-transform duration-300 ease-in-out flex flex-col ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Your Quote"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-white/10">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
            <ClipboardList size={20} />
            Your Quote
          </h2>
          <button 
            onClick={() => setDrawerOpen(false)}
            className="p-2 -mr-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
            aria-label="Close drawer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-neutral-500 dark:text-neutral-400">
              <ClipboardList size={48} className="mb-4 opacity-20" />
              <p>Your quote basket is empty.</p>
              <p className="text-sm mt-2">Browse the catalog to add products.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => {
                const product = getProduct(item.slug);
                if (!product) return null;
                
                const img = placeholderImages[product.slug] || "/images/products/saas_dashboard_light.jpg";

                return (
                  <div key={item.slug} className="bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/5 p-4 rounded-2xl flex items-start gap-4">
                    {/* Image */}
                    <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-900">
                      <Image src={img} alt={product.name} fill className="object-cover" />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-neutral-900 dark:text-white text-sm truncate">{product.name}</h4>
                        <button 
                          onClick={() => removeItem(item.slug)}
                          className="text-neutral-400 hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">{product.delivery}</p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center bg-neutral-200 dark:bg-black/40 rounded-lg overflow-hidden w-fit">
                        <button 
                          onClick={() => updateQuantity(item.slug, item.qty - 1)}
                          className="px-2.5 py-1 hover:bg-neutral-300 dark:hover:bg-white/10 transition-colors text-neutral-600 dark:text-neutral-400"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-semibold px-2 text-neutral-900 dark:text-white min-w-[20px] text-center">
                          {item.qty}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.slug, item.qty + 1)}
                          className="px-2.5 py-1 hover:bg-neutral-300 dark:hover:bg-white/10 transition-colors text-neutral-600 dark:text-neutral-400"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="shrink-0 p-6 border-t border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-neutral-950">
            <div className="flex justify-between items-end mb-6">
              <div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-widest font-medium mb-1">Total</p>
                <p className="text-sm font-semibold text-neutral-900 dark:text-white">{items.reduce((acc, i) => acc + i.qty, 0)} Items</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-widest font-medium mb-1">Estimated Cost</p>
                <p className="text-sm font-semibold text-neutral-900 dark:text-white">Custom Quote</p>
              </div>
            </div>
            
            <Link 
              href="/quote"
              onClick={() => setDrawerOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-bold py-4 rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors mb-3"
            >
              Request Quote <ArrowRight size={18} />
            </Link>
            <p className="text-[11px] text-center text-neutral-500">
              No payment required. We will review your request and reply within 24 hours.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
