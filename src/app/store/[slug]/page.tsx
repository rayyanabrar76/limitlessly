import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { products, getProduct, relatedProducts } from "@/lib/products";
import AddToQuoteAction from "./add-to-quote-action";

// Fallback images map
const placeholderImages: Record<string, string> = {
  "ai-saas-platform": "/images/products/saas_dashboard_light.jpg",
  "custom-ai-agent": "/images/products/ai_agent_light.jpg",
  "ecommerce-store": "/images/products/ecommerce_ui_light.jpg",
  "mvp-sprint": "/images/products/saas_dashboard_light.jpg",
  "business-website": "/images/products/ecommerce_ui_light.jpg",
};

// Next 15 requires awaiting params
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  
  if (!product) return { title: "Product Not Found" };

  const img = placeholderImages[product.slug] || "/images/products/saas_dashboard_light.jpg";

  return {
    title: `${product.name} — Software Store`,
    description: product.description.substring(0, 160),
    openGraph: {
      title: product.name,
      description: product.tagline,
      images: [{ url: img, width: 1200, height: 630, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.tagline,
      images: [img],
    },
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const img = placeholderImages[product.slug] || "/images/products/saas_dashboard_light.jpg";
  const related = relatedProducts(product, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    operatingSystem: "Web",
    applicationCategory: "BusinessApplication",
    description: product.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      description: "Custom Quote Required",
    },
    image: `https://limitlessly.vercel.app${img}`,
  };

  return (
    <main className="pt-[100px] pb-24 min-h-screen bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link 
          href="/store" 
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Store
        </Link>

        {/* Two-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column: Gallery & Details */}
          <div className="flex-1">
            {/* Image Banner */}
            <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-neutral-200 dark:bg-neutral-900 mb-12 border border-neutral-300 dark:border-white/10">
              <Image 
                src={img}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.badge && (
                <span 
                  className="absolute top-6 left-6 text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full text-white shadow-xl"
                  style={{ background: `linear-gradient(to right, ${product.accent}, #a855f7)` }}
                >
                  {product.badge}
                </span>
              )}
            </div>

            {/* Description */}
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Overview</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-12">
              {product.description}
            </p>

            {/* Deliverables */}
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">What&apos;s Included</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {product.deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/5 shadow-sm dark:shadow-none">
                  <CheckCircle2 size={20} className="shrink-0 mt-0.5" style={{ color: product.accent }} />
                  <span className="text-sm text-neutral-700 dark:text-neutral-200 leading-tight">{item}</span>
                </div>
              ))}
            </div>

            {/* Stack */}
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-2 mb-12">
              {product.stack.map((tech, i) => (
                <span 
                  key={i} 
                  className="text-xs font-semibold px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Sticky Quote Panel */}
          <div className="w-full lg:w-[400px] shrink-0">
            <div className="sticky top-24 rounded-3xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/10 p-8 shadow-xl dark:shadow-2xl backdrop-blur-md">
              <h1 className="text-3xl font-black text-neutral-900 dark:text-white leading-tight mb-2">
                {product.name}
              </h1>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-8">
                {product.tagline}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between py-3 border-b border-neutral-200 dark:border-white/10">
                  <span className="text-sm text-neutral-500 font-medium uppercase tracking-wider">Delivery Time</span>
                  <span className="text-sm font-semibold text-neutral-900 dark:text-white">{product.delivery}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-200 dark:border-white/10">
                  <span className="text-sm text-neutral-500 font-medium uppercase tracking-wider">Best For</span>
                  <span className="text-sm font-semibold text-neutral-900 dark:text-white text-right max-w-[200px]">{product.bestFor}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-neutral-200 dark:border-white/10">
                  <span className="text-sm text-neutral-500 font-medium uppercase tracking-wider">Pricing</span>
                  <span className="text-sm font-semibold text-neutral-900 dark:text-white">Custom Quote</span>
                </div>
              </div>

              <AddToQuoteAction productSlug={product.slug} />
              
              <p className="text-center text-[11px] text-neutral-500 mt-4">
                No payment. No commitment. We reply within 24 hours.
              </p>
            </div>
          </div>

        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-32 pt-16 border-t border-neutral-200 dark:border-white/10">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">More from {product.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rp) => {
                const rpImg = placeholderImages[rp.slug] || "/images/products/saas_dashboard_light.jpg";
                return (
                  <Link
                    key={rp.slug}
                    href={`/store/${rp.slug}`}
                    className="group rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900/50 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors overflow-hidden shadow-sm hover:shadow-md dark:shadow-none"
                  >
                    <div className="relative aspect-[16/9] bg-neutral-100 dark:bg-neutral-950 overflow-hidden">
                      <Image 
                        src={rpImg} 
                        alt={rp.name} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-neutral-900 dark:text-white mb-1">{rp.name}</h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1">{rp.tagline}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
