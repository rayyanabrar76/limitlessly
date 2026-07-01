export const metadata = {
  title: "Full Package — Limitlessly",
  description: "The complete online presence — website and store, under one roof. Best value for serious businesses.",
};

const features = [
  "Everything in E-Commerce",
  "Full Business Website",
  "Priority Support",
  "Free Revisions",
  "1 Month Maintenance",
  "Faster Delivery",
  "Dedicated Account Manager",
  "Launch Strategy",
];

const steps = [
  {
    step: "01",
    title: "Discovery",
    description: "We start with a deep-dive call to understand your business, your brand, and the full scope of what you need.",
  },
  {
    step: "02",
    title: "Design & Build",
    description: "We design and build your complete online presence — website and store — with regular updates along the way.",
  },
  {
    step: "03",
    title: "Review",
    description: "You review everything and we make revisions until every detail is exactly right.",
  },
  {
    step: "04",
    title: "Launch",
    description: "We deploy everything, hand over all assets, and support you through your launch.",
  },
];

export default function FullPackagePage() {
  return (
    <main className="bg-neutral-950">

      <section className="relative w-full overflow-hidden" style={{ minHeight: "560px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=85&fit=crop"
          alt="Full Package"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-24" style={{ minHeight: "560px" }}>
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-6 h-px bg-white/40"></span>
            <p className="text-xs text-white/60 uppercase tracking-widest font-medium">Service</p>
            <span className="w-6 h-px bg-white/40"></span>
          </div>
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
              Best Value
            </span>
          </div>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-3xl leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Full Package
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
            The complete online presence — website and store, under one roof.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-6 h-px bg-neutral-500"></span>
            <p className="text-xs text-neutral-400 uppercase tracking-widest font-medium">What You Get</p>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
            The Full Package combines our Business Website and E-Commerce Store into one seamless solution. You get a professional brand presence and a fully functional online store — all built together, all under one roof. This is the best value option for serious businesses that want to do it right from the start.
          </p>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl mt-4">
            You also get priority support, free revisions, a dedicated account manager, and one month of free maintenance after launch. If you are serious about your online presence, this is the plan for you.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-neutral-900/40 border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-neutral-500"></span>
              <p className="text-xs text-neutral-400 uppercase tracking-widest font-medium">Everything Included</p>
              <span className="w-6 h-px bg-neutral-500"></span>
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
                className="bg-neutral-900 border border-white/10 rounded-2xl px-5 py-4 flex items-start gap-3 hover:border-white/20 hover:shadow-sm transition-all"
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
              <span className="w-6 h-px bg-neutral-500"></span>
              <p className="text-xs text-neutral-400 uppercase tracking-widest font-medium">How It Works</p>
              <span className="w-6 h-px bg-neutral-500"></span>
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
            <span className="w-6 h-px bg-neutral-500"></span>
            <p className="text-xs text-neutral-400 uppercase tracking-widest font-medium">Pricing</p>
            <span className="w-6 h-px bg-neutral-500"></span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Simple, Transparent Pricing
          </h2>
          <p className="text-neutral-400 mb-10">No hidden fees. No surprises. Just great work delivered fast.</p>
          <div className="relative bg-neutral-900 border border-indigo-500/50 rounded-2xl p-10 shadow-2xl shadow-black/20">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-linear-to-r from-indigo-500 to-fuchsia-500 text-white text-xs font-semibold px-4 py-1 rounded-full border border-white/10 shadow-sm">
              Best Value
            </div>
            <p className="text-xs text-neutral-400 uppercase tracking-widest mb-3 font-medium">10–21 days delivery</p>
            <p
              className="text-6xl font-bold text-white mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              From $699
            </p>
            <p className="text-neutral-400 mb-8">The complete package — website, store, and everything in between.</p>
            <a
              href="/#contact"
              className="inline-block bg-white text-neutral-900 font-medium px-10 py-3.5 rounded-full hover:bg-neutral-100 transition-all duration-200 text-sm"
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
          <p className="text-neutral-400 mb-8">Tell us about your business and we will put together the perfect plan.</p>
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
