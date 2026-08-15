"use client";

import { useQuote } from "@/lib/quote-context";
import { ShoppingBag } from "lucide-react";

export default function QuoteButton() {
  const { itemCount, isHydrated, setDrawerOpen } = useQuote();

  return (
    <button
      onClick={() => setDrawerOpen(true)}
      className="relative p-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors group flex items-center gap-2"
      aria-label="Open Quote"
    >
      <div className="relative">
        <ShoppingBag size={18} />
        {isHydrated && itemCount > 0 && (
          <span className="absolute -top-1.5 -right-2 bg-purple-500 text-white text-[10px] font-bold h-4 min-w-[16px] px-1 rounded-full flex items-center justify-center shadow-sm">
            {itemCount}
          </span>
        )}
      </div>
    </button>
  );
}
