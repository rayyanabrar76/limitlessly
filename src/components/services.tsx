const services = [
  {
    num: "01",
    title: "E-Commerce Store",
    description:
      "A fully custom online store built to sell. Product pages, cart, checkout, payments — everything your business needs to start making money online.",
    price: "From $499",
    delivery: "7–14 days",
    features: ["Custom Design", "Stripe Payments", "Mobile Responsive", "Admin Dashboard"],
  },
  {
    num: "02",
    title: "Business Website",
    description:
      "A professional website that represents your brand 24/7. Clean, fast, and built to convert visitors into customers.",
    price: "From $299",
    delivery: "3–7 days",
    features: ["Landing Page", "Contact Form", "SEO Ready", "Fast Loading"],
  },
  {
    num: "03",
    title: "Full Package",
    description:
      "Both a business website and a fully functional e-commerce store under one roof. The complete online presence for serious businesses.",
    price: "From $699",
    delivery: "10–21 days",
    features: ["Everything in both plans", "Priority Support", "Free Revisions", "1 Month Maintenance"],
    highlight: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-0 pb-10 border-b border-neutral-200">
          <div>
            <p className="text-xs text-neutral-400 uppercase tracking-[0.2em] font-medium mb-4">What We Offer</p>
            <h2
              className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Services
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-xs leading-relaxed">
            Three focused services, built around what small businesses actually need — no bloat, no fluff.
          </p>
        </div>

        {/* Service Rows */}
        {services.map((service) => (
          <div
            key={service.title}
            className="group border-b border-neutral-100 py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start hover:bg-neutral-50 -mx-6 px-6 transition-colors duration-200 cursor-default"
          >
            {/* Number */}
            <div className="md:col-span-1">
              <span className="text-neutral-200 font-bold text-sm">{service.num}</span>
            </div>

            {/* Title + Description + Tags */}
            <div className="md:col-span-6">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 group-hover:text-black transition-colors">
                  {service.title}
                </h3>
                {service.highlight && (
                  <span className="text-[10px] bg-neutral-900 text-white px-2.5 py-1 rounded-full font-semibold uppercase tracking-wide shrink-0">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed mb-5">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs text-neutral-500 border border-neutral-200 bg-neutral-50 px-3 py-1 rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Price + Delivery */}
            <div className="md:col-span-3">
              <p className="text-3xl font-black text-neutral-900 tracking-tight">{service.price}</p>
              <p className="text-xs text-neutral-400 mt-1 uppercase tracking-widest">{service.delivery} delivery</p>
            </div>

            {/* CTA */}
            <div className="md:col-span-2 flex md:justify-end md:items-start">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-neutral-900 text-white text-sm font-semibold pl-5 pr-3 py-2.5 rounded-full hover:bg-black transition-all duration-200 group-hover:shadow-lg group-hover:shadow-black/10 whitespace-nowrap"
              >
                Get Started
                <span className="w-6 h-6 bg-white/15 rounded-full flex items-center justify-center text-xs shrink-0">↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
