"use client";

import { useState, useMemo, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { products, categories } from "@/lib/products";
import ProductCard from "@/components/store/product-card";

export default function Catalog() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const initialCategory = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  // Sync category state to URL when changed
  useEffect(() => {
    if (activeCategory === "all") {
      router.replace("/store", { scroll: false });
    } else {
      router.replace(`/store?category=${activeCategory}`, { scroll: false });
    }
  }, [activeCategory, router]);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCategory = activeCategory === "all" || p.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchSearch = q === "" || p.name.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q) || p.stack.some(s => s.toLowerCase().includes(q));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full">
      {/* Filters & Search Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeCategory === "all" 
                ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" 
                : "bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50 dark:bg-white/5 dark:text-neutral-400 dark:border-transparent dark:hover:text-white dark:hover:bg-white/10"
            }`}
          >
            All Products
          </button>
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === c.id 
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" 
                  : "bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50 dark:bg-white/5 dark:text-neutral-400 dark:border-transparent dark:hover:text-white dark:hover:bg-white/10"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64 shrink-0">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Search catalog..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-10 py-2 bg-white dark:bg-white/5 border border-neutral-200 dark:border-transparent text-neutral-900 dark:text-white text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white/20 transition-all placeholder:text-neutral-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white p-1"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="mb-8 border-b border-neutral-200 dark:border-white/10 pb-4">
        <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
          Showing <span className="text-neutral-900 dark:text-white">{filteredProducts.length}</span> of {products.length} products
        </p>
      </div>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {filteredProducts.map(p => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <div className="py-32 flex flex-col items-center justify-center text-center border border-neutral-200 dark:border-white/5 rounded-3xl bg-neutral-50 dark:bg-neutral-900/20">
          <div className="w-16 h-16 rounded-full bg-neutral-200 dark:bg-white/5 flex items-center justify-center mb-4">
            <Search size={24} className="text-neutral-500" />
          </div>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">No products found</h3>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-sm mb-6">
            We couldn&apos;t find anything matching &quot;{searchQuery}&quot;. Try adjusting your search or browsing all categories.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("all");
            }}
            className="px-6 py-2.5 bg-white text-neutral-900 text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
}
