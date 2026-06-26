export const metadata = {
  title: "Services — Limitless",
  description: "See what we offer at Limitless.",
};

const services = [
  {
    title: "E-Commerce Store",
    price: "From $499",
    delivery: "7-14 days",
    description:
      "A fully custom online store built to sell. We handle everything from product pages to checkout and payments so you can focus on running your business.",
    features: [
      "Custom design tailored to your brand",
      "Product listing and management",
      "Shopping cart and checkout",
      "Stripe payment integration",
      "Mobile responsive",
      "Admin dashboard",
      "Order management",
      "SEO optimized",
    ],
    highlight: false,
  },
  {
    title: "Full Package",
    price: "From $699",
    delivery: "10-21 days",
    description:
      "The complete online presence. A business website plus a fully functional e-commerce store, all under one roof. Best value for serious businesses.",
    features: [
      "Everything in E-Commerce plan",
      "Full business landing page",
      "About and services pages",
      "Contact form with email notifications",
      "Priority support",
      "Free revisions",
      "Faster delivery",
      "1 month free maintenance",
    ],
    highlight: true,
  },
  {
    title: "Business Website",
    price: "From $299",
    delivery: "3-7 days",
    description:
      "A professional website that represents your brand 24/7. Clean, fast, and built to convert visitors into customers or leads.",
    features: [
      "Custom landing page",
      "About and services sections",
      "Contact form",
      "Mobile responsive",
      "SEO optimized",
      "Fast loading",
      "Deployed and ready to go",
      "Social media links",
    ],
    highlight: false,
  },
  {
    title: "Game Development",
    price: "From $999",
    delivery: "21-60 days",
    description:
      "Custom game development for PC, mobile, and web. From concept to launch — mechanics, UI, art integration, and publishing support. We build games players actually want to play.",
    features: [
      "PC, mobile & web platforms",
      "Unity / Unreal Engine",
      "Game design & mechanics",
      "UI/UX for games",
      "Art & asset integration",
      "QA & playtesting",
      "Publishing support",
      "Post-launch maintenance",
    ],
    highlight: false,
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We start with a quick call or message to understand your business, goals, and what you need.",
  },
  {
    step: "02",
    title: "Design & Build",
    description: "We design and build your site using modern technology. You get updates along the way.",
  },
  {
    step: "03",
    title: "Review",
    description: "You review the finished product and we make any adjustments until you are happy.",
  },
  {
    step: "04",
    title: "Launch",
    description: "We deploy your site and hand over everything. You are live and ready to grow.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-neutral-400"></span>
              <p className="text-xs text-neutral-400 uppercase tracking-widest font-medium">What We Offer</p>
              <span className="w-6 h-px bg-neutral-400"></span>
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold mb-6 text-neutral-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Services &amp; Pricing
            </h1>
            <p className="text-neutral-500 max-w-xl mx-auto text-lg leading-relaxed">
              Transparent pricing. No hidden fees. Just great work delivered fast.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {services.map((service) => (
              <div
                key={service.title}
                className={`relative rounded-2xl p-8 border flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1 ${
                  service.highlight
                    ? "bg-neutral-900 text-white border-neutral-900 shadow-2xl shadow-black/20"
                    : "bg-white text-neutral-900 border-neutral-200 shadow-sm hover:shadow-md hover:border-neutral-300"
                }`}
              >
                {service.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-neutral-900 text-xs font-semibold px-4 py-1 rounded-full border border-neutral-200 shadow-sm">
                    Best Value
                  </div>
                )}

                <div>
                  <p className={`text-xs uppercase tracking-widest mb-2 font-medium ${service.highlight ? "text-neutral-400" : "text-neutral-400"}`}>
                    {service.delivery} delivery
                  </p>
                  <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                  <p className={`text-sm leading-relaxed ${service.highlight ? "text-neutral-400" : "text-neutral-500"}`}>
                    {service.description}
                  </p>
                </div>

                <p className="text-4xl font-bold">{service.price}</p>

                <ul className="flex flex-col gap-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <span className={`mt-0.5 ${service.highlight ? "text-white" : "text-neutral-900"}`}>✓</span>
                      <span className={service.highlight ? "text-neutral-300" : "text-neutral-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/#contact"
                  className={`mt-auto text-center py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    service.highlight
                      ? "bg-white text-neutral-900 hover:bg-neutral-100"
                      : "bg-neutral-900 text-white hover:bg-black"
                  }`}
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
                className="text-3xl md:text-4xl font-bold text-neutral-900"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                How It Works
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {process.map((item) => (
                <div key={item.step} className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 hover:border-neutral-300 hover:shadow-sm transition-all">
                  <p className="text-4xl font-bold text-neutral-200 mb-4">{item.step}</p>
                  <h3 className="font-bold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-neutral-900 rounded-2xl p-12">
            <h2
              className="text-3xl font-bold mb-4 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Not sure which plan is right for you?
            </h2>
            <p className="text-neutral-400 mb-8">Reach out and we will help you figure it out.</p>
            <a
              href="/#contact"
              className="bg-white text-neutral-900 font-medium px-8 py-3 rounded-full hover:bg-neutral-100 transition-all duration-200"
            >
              Talk to Us
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
