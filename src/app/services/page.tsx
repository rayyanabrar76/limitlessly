export const metadata = {
  title: "Services — Limitless",
  description: "AI SaaS platforms, custom AI agents, integrations, and rapid MVP sprints — built end-to-end for founders worldwide.",
};

const services = [
  {
    title: "AI SaaS Platform",
    price: "Custom",
    delivery: "From 6 weeks",
    description:
      "Your full product, designed and engineered end-to-end. Built on real, scalable architecture with AI at the core — ready for your first user and your millionth.",
    features: [
      "Product design & UX",
      "Multi-tenant architecture",
      "AI / LLM core features",
      "Auth, billing & dashboards",
      "Stripe subscriptions",
      "Scalable cloud infra",
      "Analytics & admin tools",
      "Launch & handover",
    ],
    highlight: true,
  },
  {
    title: "AI Agents & Automation",
    price: "From $2k/mo",
    delivery: "From 2 weeks",
    description:
      "Custom AI agents and automations that run your operations around the clock — support, lead handling, data workflows, and internal tools. Billed monthly.",
    features: [
      "Custom AI agents",
      "Workflow automation",
      "LLM pipelines & RAG",
      "Integrations with your stack",
      "Human-in-the-loop controls",
      "Monitoring & evals",
      "Ongoing optimization",
      "Priority support",
    ],
    highlight: false,
  },
  {
    title: "AI Integration",
    price: "Custom",
    delivery: "From 3 weeks",
    description:
      "Already have a product? We embed intelligence into it — chat, semantic search, recommendations, generation, and copilots — wired cleanly into your existing stack.",
    features: [
      "RAG & semantic search",
      "In-product copilots",
      "Content generation",
      "Recommendations",
      "API & data integration",
      "Eval & tuning",
      "Cost optimization",
      "Documentation",
    ],
    highlight: false,
  },
  {
    title: "MVP Sprint",
    price: "From $9k",
    delivery: "From 4 weeks",
    description:
      "Idea to launched product, fast. We take a founder's vision and ship a real, fundable MVP — designed, built, and live — without the year-long timeline.",
    features: [
      "Rapid product design",
      "Full-stack build",
      "Core AI feature",
      "Investor-ready polish",
      "Auth & payments",
      "Deployed to production",
      "Launch support",
      "Path to scale",
    ],
    highlight: false,
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We pressure-test the idea, define the product, and architect for scale — so we build the right thing from day one.",
  },
  {
    step: "02",
    title: "Design & Build",
    description: "We design the product and engineer it end-to-end with modern, AI-native tech. You get progress in tight, transparent cycles.",
  },
  {
    step: "03",
    title: "Launch",
    description: "We ship to production — fast, secure, and ready for real users and investors.",
  },
  {
    step: "04",
    title: "Scale",
    description: "We harden, optimize, and grow with you — new features, more users, lower costs.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-neutral-950">

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-neutral-600"></span>
              <p className="text-xs text-neutral-500 uppercase tracking-widest font-medium">What We Offer</p>
              <span className="w-6 h-px bg-neutral-600"></span>
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold mb-6 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Services &amp; Pricing
            </h1>
            <p className="text-neutral-400 max-w-xl mx-auto text-lg leading-relaxed">
              From a single AI feature to a full platform. Scoped to your vision, engineered to scale.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {services.map((service) => (
              <div
                key={service.title}
                className={`relative rounded-2xl p-8 border flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1 ${
                  service.highlight
                    ? "bg-neutral-900 text-white border-indigo-500/50 shadow-2xl shadow-indigo-500/10"
                    : "bg-white/5 text-white border-white/10 hover:border-white/20"
                }`}
              >
                {service.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-linear-to-r from-indigo-500 to-fuchsia-500 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-sm">
                    Best Value
                  </div>
                )}

                <div>
                  <p className="text-xs uppercase tracking-widest mb-2 font-medium text-neutral-400">
                    {service.delivery} delivery
                  </p>
                  <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                  <p className="text-sm leading-relaxed text-neutral-400">
                    {service.description}
                  </p>
                </div>

                <p className="text-4xl font-bold">{service.price}</p>

                <ul className="flex flex-col gap-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <span className={`mt-0.5 ${service.highlight ? "text-fuchsia-400" : "text-indigo-400"}`}>✓</span>
                      <span className="text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/#contact"
                  className="mt-auto text-center py-3 rounded-full text-sm font-medium transition-all duration-200 bg-white text-neutral-900 hover:bg-neutral-200"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                How It Works
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {process.map((item) => (
                <div key={item.step} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                  <p className="text-4xl font-bold text-neutral-700 mb-4">{item.step}</p>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-neutral-900 border border-white/10 rounded-2xl p-12">
            <h2
              className="text-3xl font-bold mb-4 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Not sure where your idea fits?
            </h2>
            <p className="text-neutral-400 mb-8">Book a free strategy call and we&apos;ll map the path from idea to platform.</p>
            <a
              href="/contact"
              className="bg-white text-neutral-900 font-medium px-8 py-3 rounded-full hover:bg-neutral-100 transition-all duration-200"
            >
              Book a Call
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
