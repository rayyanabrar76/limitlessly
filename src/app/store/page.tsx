import { Suspense } from "react";
import Catalog from "@/components/store/catalog";

export const metadata = {
  title: "Browse the Store — Limitlessly",
  description: "Browse 20 ready-to-build software and AI products. Add what you need to a quote.",
};

export default function StorePage() {
  return (
    <main className="min-h-screen pt-[100px] bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white tracking-tight mb-4">
            Software Catalog
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Browse our complete library of ready-to-build products. Add the features 
            you need to your quote, and we&apos;ll get back to you with a scope in 24 hours.
          </p>
        </div>

        {/* Suspense is required for client components using useSearchParams in App Router */}
        <Suspense fallback={
          <div className="animate-pulse h-[500px] w-full bg-white/5 rounded-3xl border border-white/10" />
        }>
          <Catalog />
        </Suspense>

      </div>
    </main>
  );
}
