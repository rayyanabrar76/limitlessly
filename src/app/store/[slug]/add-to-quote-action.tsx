"use client";

import { useState } from "react";
import { useQuote } from "@/lib/quote-context";
import { Check, Plus, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddToQuoteAction({ productSlug }: { productSlug: string }) {
  const { addItem } = useQuote();
  const [added, setAdded] = useState(false);
  const router = useRouter();

  const handleQuickAdd = () => {
    addItem(productSlug);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleGetQuote = () => {
    addItem(productSlug);
    router.push("/quote");
  };

  return (
    <div className="flex gap-3 w-full mb-4">
      <button
        onClick={handleGetQuote}
        className="flex-1 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 shadow-sm"
      >
        Get Quote <ArrowRight size={20} />
      </button>

      <button
        onClick={handleQuickAdd}
        className={`shrink-0 flex items-center justify-center aspect-square w-[60px] rounded-xl transition-all duration-300 ${
          added
            ? "bg-green-50 text-green-600 border-green-200 dark:bg-green-500/20 dark:text-green-400 border dark:border-green-500/30"
            : "bg-neutral-100 text-neutral-900 hover:bg-neutral-900 hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-white dark:hover:text-neutral-900 border border-transparent"
        }`}
        aria-label="Quick add to bag"
      >
        {added ? <Check size={24} /> : <Plus size={24} />}
      </button>
    </div>
  );
}
