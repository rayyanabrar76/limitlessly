"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useQuote } from "@/lib/quote-context";
import { getProduct } from "@/lib/products";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Trash2, CheckCircle2, ClipboardList } from "lucide-react";

export const metadata = {
  title: "Request a Custom Quote",
  description: "Submit your requirements and requested software products. We'll get back to you with a custom proposal and pricing within 24 hours.",
};

const placeholderImages: Record<string, string> = {
  "ai-saas-platform": "/images/products/saas_dashboard_light.jpg",
  "custom-ai-agent": "/images/products/ai_agent_light.jpg",
  "ecommerce-store": "/images/products/ecommerce_ui_light.jpg",
  "mvp-sprint": "/images/products/saas_dashboard_light.jpg",
  "business-website": "/images/products/ecommerce_ui_light.jpg",
};

export default function QuotePage() {
  const { items, isHydrated, removeItem, clearQuote } = useQuote();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
    timeline: "flexible",
  });

  if (!isHydrated) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const itemsList = items.map(item => {
      const p = getProduct(item.slug);
      return `- ${item.qty}x ${p?.name || item.slug}`;
    }).join('\n');

    const fullMessage = `Timeline: ${formData.timeline}\n\nDetails:\n${formData.details || 'None provided.'}\n\nRequested Items:\n${itemsList}`;

    try {
      await emailjs.send("service_1mmyrpk", "template_7j1aj1i", {
        from_name: formData.name,
        from_email: formData.email,
        message: fullMessage,
      }, { publicKey: "BUS00ZVP7fVGfsSdb" });
      
      setIsSuccess(true);
      clearQuote();
    } catch (err: unknown) {
      console.error("EmailJS error:", err);
      const msg = err && typeof err === "object" && "text" in err
        ? (err as { text: string }).text
        : String(err);
      alert("Failed to send quote request: " + msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen pt-32 pb-24 bg-neutral-50 dark:bg-neutral-950 flex flex-col items-center justify-center transition-colors duration-300">
        <div className="w-20 h-20 bg-green-50 text-green-600 dark:bg-green-500/20 dark:text-green-500 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h1 className="text-4xl font-black text-neutral-900 dark:text-white mb-4 text-center">Quote Requested!</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 text-center max-w-md mb-8">
          We've received your request and will get back to you with a custom proposal within 24 hours.
        </p>
        <Link 
          href="/store"
          className="bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-8 py-4 rounded-xl font-bold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
        >
          Back to Store
        </Link>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen pt-32 pb-24 bg-neutral-50 dark:bg-neutral-950 flex flex-col items-center justify-center transition-colors duration-300">
        <ClipboardList size={64} className="text-neutral-300 dark:text-neutral-800 mb-6" />
        <h1 className="text-3xl font-black text-neutral-900 dark:text-white mb-4 text-center">Your Quote is Empty</h1>
        <p className="text-neutral-500 dark:text-neutral-400 text-center mb-8">
          Browse our catalog to add the software products you want us to build.
        </p>
        <Link 
          href="/store"
          className="bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-8 py-4 rounded-xl font-bold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
        >
          Browse Catalog
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-24 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link 
          href="/store" 
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Store
        </Link>

        <h1 className="text-4xl font-black text-neutral-900 dark:text-white mb-2">Request Quote</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-12">Submit your details and we'll get back to you with a custom proposal.</p>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column: Form */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-neutral-900 dark:text-white">Full Name</label>
                  <input 
                    id="name"
                    type="text" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-neutral-900 dark:text-white">Work Email</label>
                  <input 
                    id="email"
                    type="email" 
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="john@company.com"
                    className="w-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="timeline" className="text-sm font-semibold text-neutral-900 dark:text-white">Desired Timeline</label>
                <select 
                  id="timeline"
                  value={formData.timeline}
                  onChange={e => setFormData({...formData, timeline: e.target.value})}
                  className="w-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all appearance-none"
                >
                  <option value="asap">ASAP (1-2 weeks)</option>
                  <option value="1month">Within 1 month</option>
                  <option value="3months">1-3 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="details" className="text-sm font-semibold text-neutral-900 dark:text-white">Project Details (Optional)</label>
                <textarea 
                  id="details"
                  rows={4}
                  value={formData.details}
                  onChange={e => setFormData({...formData, details: e.target.value})}
                  placeholder="Tell us a bit more about your vision, constraints, and requirements..."
                  className="w-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-bold text-lg py-4 rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 dark:border-neutral-900/30 border-t-white dark:border-t-neutral-900 rounded-full animate-spin" />
                ) : (
                  "Submit Quote Request"
                )}
              </button>

              <p className="text-xs text-center text-neutral-500">
                No commitment or payment required. We aim to respond within 24 hours.
              </p>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-[480px] shrink-0">
            <div className="bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/10 rounded-3xl p-6 lg:p-8 sticky top-32">
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                {items.map((item) => {
                  const product = getProduct(item.slug);
                  if (!product) return null;
                  const img = placeholderImages[product.slug] || "/images/products/saas_dashboard_light.jpg";

                  return (
                    <div key={item.slug} className="flex gap-4 p-4 bg-neutral-50 dark:bg-white/5 rounded-2xl border border-neutral-200 dark:border-transparent">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-950 shrink-0">
                        <Image src={img} alt={product.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                        <div className="flex justify-between items-start gap-4">
                          <h4 className="font-bold text-neutral-900 dark:text-white text-sm truncate pr-2">{product.name}</h4>
                          <button 
                            onClick={() => removeItem(item.slug)}
                            className="text-neutral-400 hover:text-red-500 transition-colors shrink-0"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Qty: {item.qty}</span>
                          <span className="text-xs font-bold text-neutral-900 dark:text-white">Custom Quote</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-neutral-200 dark:border-white/10 pt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-neutral-600 dark:text-neutral-400">Total Items</span>
                  <span className="font-bold text-neutral-900 dark:text-white">{items.reduce((acc, i) => acc + i.qty, 0)}</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold">
                  <span className="text-neutral-900 dark:text-white">Estimated Total</span>
                  <span className="text-neutral-900 dark:text-white">Custom</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
