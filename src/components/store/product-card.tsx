import Image from "next/image";
import Link from "next/link";
import { type Product } from "@/lib/products";
import { useQuote } from "@/lib/quote-context";
import { useState } from "react";
import { Check, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

// Fallback images map
const placeholderImages: Record<string, string> = {
  "ai-saas-platform": "/images/products/saas_dashboard_light.jpg",
  "custom-ai-agent": "/images/products/ai_agent_light.jpg",
  "ecommerce-store": "/images/products/ecommerce_ui_light.jpg",
  "mvp-sprint": "/images/products/saas_dashboard_light.jpg",
  "business-website": "/images/products/ecommerce_ui_light.jpg",
};

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useQuote();
  const [added, setAdded] = useState(false);
  const router = useRouter();
  
  const img = placeholderImages[product.slug] || "/images/products/saas_dashboard_light.jpg";

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product.slug);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleGetQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product.slug);
    router.push("/quote");
  };

  return (
    <Link
      href={`/store/${product.slug}`}
      className="group flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 dark:border-white/10 shadow-sm hover:shadow-xl dark:shadow-none hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] w-full bg-neutral-100 dark:bg-neutral-950 overflow-hidden shrink-0">
        <Image 
          src={img} 
          alt={product.name} 
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
        />
        
        {/* Inner shadow overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
        
        {/* Badge */}
        {product.badge && (
          <span 
            className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full text-white shadow-lg"
            style={{ background: `linear-gradient(to right, ${product.accent}, #a855f7)` }}
          >
            {product.badge}
          </span>
        )}
        
        {/* Fake Gallery Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          <div className="w-1.5 h-1.5 rounded-full bg-white transition-colors" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white/80 transition-colors" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white/80 transition-colors" />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title & Tagline */}
        <div className="mb-6 flex-1">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-[var(--accent)] transition-colors" style={{ '--accent': product.accent } as React.CSSProperties}>
            {product.name}
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-2">
            {product.tagline}
          </p>
        </div>

        {/* Meta & CTA */}
        <div className="mt-auto pt-5 border-t border-neutral-200 dark:border-white/10 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-[11px] text-neutral-500 uppercase tracking-widest font-medium">
              {product.delivery}
            </p>
            <span className="text-[11px] font-bold text-neutral-900 dark:text-white uppercase tracking-wider">Custom Quote</span>
          </div>
          
          <div className="flex items-center gap-2 z-10 w-full">
            <button
              onClick={handleGetQuote}
              className="flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-300 bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 shadow-sm flex justify-center items-center gap-2"
            >
              Get Quote
            </button>
            <button
              onClick={handleQuickAdd}
              className={`flex items-center justify-center p-3 rounded-xl transition-all duration-300 ${
                added 
                  ? "bg-green-50 text-green-600 border-green-200 dark:bg-green-500/20 dark:text-green-400 border dark:border-green-500/30" 
                  : "bg-neutral-100 text-neutral-900 hover:bg-neutral-900 hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-white dark:hover:text-neutral-900 border border-transparent"
              }`}
              aria-label="Quick add to bag"
            >
              {added ? <Check size={18} /> : <Plus size={18} />}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
