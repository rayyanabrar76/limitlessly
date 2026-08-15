"use client";

import { featuredProducts } from "@/lib/products";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/store/product-card";
import Link from "next/link";

export default function FeaturedProducts() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
              Complete, ready-to-deploy platforms and agents. Find the system you need, 
              add it to your quote, and we&apos;ll scope the exact build for your business.
            </p>
          </div>
          <Link 
            href="/store"
            className="shrink-0 flex items-center gap-2 px-6 py-3 bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 rounded-full font-semibold transition-colors"
          >
            Browse Catalog <ArrowRight size={18} />
          </Link>
        </div>

        {/* E-commerce Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {/* Browse All CTA */}
        <div className="flex justify-center">
          <Link
            href="/store"
            className="group inline-flex items-center gap-3 border border-neutral-300 dark:border-white/15 text-neutral-900 dark:text-white font-semibold text-sm pl-6 pr-4 py-3 rounded-full hover:border-neutral-400 dark:hover:border-white/30 hover:bg-neutral-50 dark:hover:bg-white/5 transition-all duration-200 backdrop-blur"
          >
            Browse all products
            <ArrowRight size={16} className="text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>
    </section>
  );
}
