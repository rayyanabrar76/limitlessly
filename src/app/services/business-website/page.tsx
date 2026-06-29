export const metadata = {
  title: "Business Website — Limitless",
  description: "Your brand online, built to convert visitors into customers. Professional, fast, and SEO-ready.",
};

const features = [
  "Custom Landing Page",
  "About & Services Sections",
  "Contact Form",
  "Mobile Responsive",
  "SEO Optimized",
  "Fast Loading",
  "Social Media Links",
  "Deployed & Ready",
];

const steps = [
  {
    step: "01",
    title: "Discovery",
    description: "We start with a quick call or message to understand your business, brand, and what you want to achieve online.",
  },
  {
    step: "02",
    title: "Design & Build",
    description: "We design and build your website using modern technology. You get updates along the way.",
  },
  {
    step: "03",
    title: "Review",
    description: "You review the finished site and we make any adjustments until everything is exactly right.",
  },
  {
    step: "04",
    title: "Launch",
    description: "We deploy your site and hand over everything. You are live and ready to grow.",
  },
];

export default function BusinessWebsitePage() {
  return (
    <main className="bg-neutral-950">

      <section className="relative w-full overflow-hidden" style={{ minHeight: "560px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85&fit=crop"
          alt="Business Website"
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
            Business Website
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
            Your brand online, built to convert visitors into customers.
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
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your business, online and looking its best
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
            A professional, fast, SEO-ready website that represents your business 24/7. We build you a complete online presence with a custom landing page, about section, services overview, and a contact form — all designed to turn visitors into customers or leads.
          </p>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl mt-4">
            Perfect for freelancers, local businesses, agencies, and anyone who needs a clean, credible online presence without the agency price tag or the months of waiting.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-neutral-900/40 border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-neutral-400"></span>
              <p className="text-xs text-neutral-400 uppercase tracking-widest font-medium">Everything Included</p>
              <span className="w-6 h-px bg-neutral-400"></span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Features
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 flex items-start gap-3 hover:border-white/20 hover:shadow-sm transition-all"
              >
                <span className="text-white font-bold mt-0.5 shrink-0">✓</span>
                <span className="text-sm text-neutral-300 font-medium">{feature}</span>
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
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((item) => (
              <div
                key={item.step}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:shadow-sm transition-all"
              >
                <p className="text-4xl font-bold text-neutral-700 mb-4">{item.step}</p>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-neutral-900/40 border-y border-white/10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-6 h-px bg-neutral-400"></span>
            <p className="text-xs text-neutral-400 uppercase tracking-widest font-medium">Pricing</p>
            <span className="w-6 h-px bg-neutral-400"></span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Simple, Transparent Pricing
          </h2>
          <p className="text-neutral-400 mb-10">No hidden fees. No surprises. Just great work delivered fast.</p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10 shadow-sm">
            <p className="text-xs text-neutral-400 uppercase tracking-widest mb-3 font-medium">3–7 days delivery</p>
            <p
              className="text-6xl font-bold text-white mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              From $299
            </p>
            <p className="text-neutral-400 mb-8">Everything you need to launch your professional website.</p>
            <a
              href="/#contact"
              className="inline-block bg-white text-neutral-900 font-medium px-10 py-3.5 rounded-full hover:bg-neutral-200 transition-all duration-200 text-sm"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-900 border border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to get started?
          </h2>
          <p className="text-neutral-400 mb-8">Tell us about your business and we will get back to you fast.</p>
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
