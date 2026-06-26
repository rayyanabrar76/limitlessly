export const metadata = {
  title: "E-Commerce Store — Limitless",
  description: "Custom online stores built to sell — not just look good. Full Stripe payments, admin dashboard, order management, and more.",
};

const features = [
  "Custom Design",
  "Product Management",
  "Stripe Payments",
  "Admin Dashboard",
  "Mobile Responsive",
  "SEO Optimized",
  "Order Management",
  "Customer Accounts",
];

const steps = [
  {
    step: "01",
    title: "Discovery",
    description: "We start with a quick call or message to understand your products, brand, and what you need from your store.",
  },
  {
    step: "02",
    title: "Design & Build",
    description: "We design and build your store using modern technology. You get updates along the way.",
  },
  {
    step: "03",
    title: "Review",
    description: "You review the finished store and we make any adjustments until you are completely happy.",
  },
  {
    step: "04",
    title: "Launch",
    description: "We deploy your store and hand over everything. You are live and ready to start selling.",
  },
];

export default function EcommercePage() {
  return (
    <main className="bg-white">

      <section className="relative w-full overflow-hidden" style={{ minHeight: "560px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=85&fit=crop"
          alt="E-Commerce Store"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-24" style={{ minHeight: "560px" }}>
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-6 h-px bg-white/40"></span>
            <p className="text-xs text-white/60 uppercase tracking-widest font-medium">Service</p>
            <span className="w-6 h-px bg-white/40"></span>
          </div>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-3xl leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            E-Commerce Store
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
            Custom online stores built to sell — not just look good.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-6 h-px bg-neutral-400"></span>
            <p className="text-xs text-neutral-400 uppercase tracking-widest font-medium">What You Get</p>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A store that works as hard as you do
          </h2>
          <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
            We build you a fully custom online store with everything you need to run your business online. From beautiful product pages to seamless checkout with Stripe payments, an admin dashboard to manage your inventory, and customer accounts — all built to convert browsers into buyers.
          </p>
          <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl mt-4">
            Perfect for product-based businesses, creators selling digital goods, or anyone who wants a professional shop without the complexity of Shopify or the cost of a traditional agency.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-neutral-400"></span>
              <p className="text-xs text-neutral-400 uppercase tracking-widest font-medium">Everything Included</p>
              <span className="w-6 h-px bg-neutral-400"></span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-neutral-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Features
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="bg-white border border-neutral-200 rounded-2xl px-5 py-4 flex items-start gap-3 hover:border-neutral-300 hover:shadow-sm transition-all"
              >
                <span className="text-neutral-900 font-bold mt-0.5 shrink-0">✓</span>
                <span className="text-sm text-neutral-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-neutral-400"></span>
              <p className="text-xs text-neutral-400 uppercase tracking-widest font-medium">How It Works</p>
              <span className="w-6 h-px bg-neutral-400"></span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-neutral-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((item) => (
              <div
                key={item.step}
                className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 hover:border-neutral-300 hover:shadow-sm transition-all"
              >
                <p className="text-4xl font-bold text-neutral-200 mb-4">{item.step}</p>
                <h3 className="font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-6 h-px bg-neutral-400"></span>
            <p className="text-xs text-neutral-400 uppercase tracking-widest font-medium">Pricing</p>
            <span className="w-6 h-px bg-neutral-400"></span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Simple, Transparent Pricing
          </h2>
          <p className="text-neutral-500 mb-10">No hidden fees. No surprises. Just great work delivered fast.</p>
          <div className="bg-white border border-neutral-200 rounded-2xl p-10 shadow-sm">
            <p className="text-xs text-neutral-400 uppercase tracking-widest mb-3 font-medium">7–14 days delivery</p>
            <p
              className="text-6xl font-bold text-neutral-900 mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              From $499
            </p>
            <p className="text-neutral-500 mb-8">Everything you need to launch your online store.</p>
            <a
              href="/#contact"
              className="inline-block bg-neutral-900 text-white font-medium px-10 py-3.5 rounded-full hover:bg-black transition-all duration-200 text-sm"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to get started?
          </h2>
          <p className="text-neutral-400 mb-8">Tell us about your store and we will get back to you fast.</p>
          <a
            href="/#contact"
            className="inline-block bg-white text-neutral-900 font-medium px-10 py-3.5 rounded-full hover:bg-neutral-100 transition-all duration-200 text-sm"
          >
            Contact Us
          </a>
        </div>
      </section>

    </main>
  );
}
