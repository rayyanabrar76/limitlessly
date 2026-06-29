const services = [
  {
    num: "01",
    title: "AI SaaS Platform",
    description:
      "Your full product, designed and engineered end-to-end. Auth, dashboards, billing, multi-tenant architecture, and AI at the core — built to scale from first user to millions.",
    price: "Custom",
    delivery: "From 6 weeks",
    features: ["Product Design", "Scalable Architecture", "AI / LLM Core", "Stripe Billing"],
    highlight: true,
  },
  {
    num: "02",
    title: "AI Agents & Automation",
    description:
      "Custom AI agents and automations that run your operations — support, lead handling, data workflows, internal tools. Billed monthly, working around the clock.",
    price: "From $2k/mo",
    delivery: "From 2 weeks",
    features: ["Custom Agents", "Workflow Automation", "LLM Pipelines", "Ongoing Support"],
  },
  {
    num: "03",
    title: "AI Integration",
    description:
      "Already have a product? We embed intelligence into it — chat, search, recommendations, generation, copilots — wired cleanly into your existing stack.",
    price: "Custom",
    delivery: "From 3 weeks",
    features: ["RAG & Search", "Copilots", "API Integration", "Eval & Tuning"],
  },
  {
    num: "04",
    title: "MVP Sprint",
    description:
      "Idea to launched product, fast. We take a founder's vision and ship a real, fundable MVP — designed, built, and live — without the year-long timeline.",
    price: "From $9k",
    delivery: "From 4 weeks",
    features: ["Rapid Build", "Investor-Ready", "Full-Stack", "Launch Support"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-neutral-950">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-0 pb-10 border-b border-white/10">
          <div>
            <p className="text-xs text-neutral-500 uppercase tracking-[0.2em] font-medium mb-4">What We Offer</p>
            <h2
              className="text-4xl md:text-5xl font-black text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Services
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-xs leading-relaxed">
            From a single AI feature to a full platform — we build the product, the system, and everything around it.
          </p>
        </div>

        {/* Service Rows */}
        {services.map((service) => (
          <div
            key={service.title}
            className="group border-b border-white/5 py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start hover:bg-white/5 -mx-6 px-6 transition-colors duration-200 cursor-default"
          >
            {/* Number */}
            <div className="md:col-span-1">
              <span className="text-neutral-700 font-bold text-sm">{service.num}</span>
            </div>

            {/* Title + Description + Tags */}
            <div className="md:col-span-6">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                {service.highlight && (
                  <span className="text-[10px] bg-linear-to-r from-indigo-500 to-fuchsia-500 text-white px-2.5 py-1 rounded-full font-semibold uppercase tracking-wide shrink-0">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed mb-5">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs text-neutral-400 border border-white/10 bg-white/5 px-3 py-1 rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Price + Delivery */}
            <div className="md:col-span-3">
              <p className="text-3xl font-black text-white tracking-tight">{service.price}</p>
              <p className="text-xs text-neutral-500 mt-1 uppercase tracking-widest">{service.delivery} delivery</p>
            </div>

            {/* CTA */}
            <div className="md:col-span-2 flex md:justify-end md:items-start">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-white text-neutral-900 text-sm font-semibold pl-5 pr-3 py-2.5 rounded-full hover:bg-neutral-200 transition-all duration-200 whitespace-nowrap"
              >
                Get Started
                <span className="w-6 h-6 bg-neutral-900/15 rounded-full flex items-center justify-center text-xs shrink-0">↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
