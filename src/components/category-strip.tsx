import { categories } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categoryImages: Record<string, string> = {
  ai: "/images/products/ai_agent_light.jpg",
  web: "/images/products/ecommerce_ui_light.jpg",
  mobile: "/images/products/saas_dashboard_light.jpg",
  growth: "/images/products/ecommerce_ui_light.jpg", // Fallback
};

export default function CategoryStrip() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300 z-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">Shop by Category</h2>
          <Link href="/store" className="text-sm font-semibold text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white flex items-center gap-2 transition-colors">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const img = categoryImages[category.id] || "/images/products/saas_dashboard_light.jpg";
            
            return (
              <Link
                key={category.id}
                href={`/store?category=${category.id}`}
                className="group block relative overflow-hidden rounded-3xl aspect-[4/5] bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Background Image */}
                <Image 
                  src={img}
                  alt={category.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 dark:opacity-60 dark:group-hover:opacity-80 group-hover:opacity-100"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{category.label}</h3>
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                    <p className="text-sm text-neutral-200 mb-4 drop-shadow">{category.blurb}</p>
                    <span 
                      className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full text-white"
                      style={{ background: category.accent }}
                    >
                      Shop Now
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
