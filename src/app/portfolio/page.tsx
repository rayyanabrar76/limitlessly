export const metadata = {
  title: "Portfolio — Limitless",
  description: "See the projects we have built at Limitless.",
};

const projects = [
  {
    title: "Limitless Store",
    category: "E-Commerce",
    description: "A full custom e-commerce store built with Next.js, Stripe payments, and a modern UI.",
    tags: ["Next.js", "Stripe", "Prisma", "Tailwind"],
    url: "limitless.store",
    accentLight: "bg-violet-100",
    accentStrong: "bg-violet-300",
    grid: true,
  },
  {
    title: "Fashion Boutique",
    category: "E-Commerce",
    description: "A premium clothing store with product filtering, cart, and smooth checkout experience.",
    tags: ["Next.js", "Tailwind", "Stripe"],
    url: "fashionboutique.com",
    accentLight: "bg-pink-100",
    accentStrong: "bg-pink-300",
    grid: true,
  },
  {
    title: "Agency Website",
    category: "Business Website",
    description: "A clean, fast landing page for a marketing agency with contact form and animations.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    url: "agencyco.com",
    accentLight: "bg-teal-100",
    accentStrong: "bg-teal-300",
    grid: false,
  },
  {
    title: "Restaurant Site",
    category: "Business Website",
    description: "A modern website for a local restaurant featuring menu display and reservation form.",
    tags: ["Next.js", "Tailwind"],
    url: "restaurant.com",
    accentLight: "bg-orange-100",
    accentStrong: "bg-orange-300",
    grid: false,
  },
  {
    title: "Digital Products Store",
    category: "E-Commerce",
    description: "An e-commerce store selling digital downloads with instant delivery and Stripe payments.",
    tags: ["Next.js", "Stripe", "Prisma"],
    url: "digitalstore.io",
    accentLight: "bg-blue-100",
    accentStrong: "bg-blue-300",
    grid: true,
  },
  {
    title: "Fitness Coach Site",
    category: "Business Website",
    description: "A personal brand site for a fitness coach with services, testimonials, and booking.",
    tags: ["Next.js", "Tailwind"],
    url: "fitcoach.com",
    accentLight: "bg-yellow-100",
    accentStrong: "bg-yellow-300",
    grid: false,
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-white">

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-neutral-400"></span>
              <p className="text-xs text-neutral-400 uppercase tracking-widest font-medium">Our Work</p>
              <span className="w-6 h-px bg-neutral-400"></span>
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold mb-6 text-neutral-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Portfolio
            </h1>
            <p className="text-neutral-500 max-w-xl mx-auto text-lg leading-relaxed">
              Every project is custom built. No templates, no shortcuts — just clean, modern work.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-300 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Browser Mockup */}
                <div className="bg-neutral-100 p-3">
                  {/* Browser Bar */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                    </div>
                    <div className="flex-1 bg-white border border-neutral-200 rounded-full px-3 py-1">
                      <p className="text-xs text-neutral-400 truncate">{project.url}</p>
                    </div>
                  </div>

                  {/* Fake Webpage */}
                  <div className="bg-white rounded-lg p-3 h-44 overflow-hidden flex flex-col gap-2 border border-neutral-100">
                    {/* Fake Navbar */}
                    <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                      <div className="w-14 h-2 bg-neutral-800 rounded-full"></div>
                      <div className="flex gap-2">
                        <div className="w-7 h-1.5 bg-neutral-200 rounded-full"></div>
                        <div className="w-7 h-1.5 bg-neutral-200 rounded-full"></div>
                        <div className="w-7 h-1.5 bg-neutral-200 rounded-full"></div>
                      </div>
                    </div>

                    {/* Hero Block */}
                    <div className={`w-full h-12 ${project.accentLight} rounded-lg flex items-center px-3 gap-2`}>
                      <div className="flex flex-col gap-1">
                        <div className={`w-20 h-2 ${project.accentStrong} rounded-full`}></div>
                        <div className="w-14 h-1.5 bg-neutral-300 rounded-full"></div>
                      </div>
                    </div>

                    {/* Text Blocks */}
                    <div className="w-full h-1.5 bg-neutral-100 rounded-full"></div>
                    <div className="w-3/4 h-1.5 bg-neutral-100 rounded-full"></div>

                    {/* Grid or Single Block */}
                    {project.grid ? (
                      <div className="grid grid-cols-3 gap-1.5 mt-1">
                        <div className={`h-10 ${project.accentLight} rounded`}></div>
                        <div className={`h-10 ${project.accentLight} rounded`}></div>
                        <div className={`h-10 ${project.accentLight} rounded`}></div>
                      </div>
                    ) : (
                      <div className="flex gap-2 mt-1">
                        <div className={`flex-1 h-10 ${project.accentLight} rounded`}></div>
                        <div className="flex-1 h-10 bg-neutral-50 rounded border border-neutral-100"></div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col gap-4">
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-widest mb-1 font-medium">{project.category}</p>
                    <h3 className="text-lg font-bold text-neutral-900">{project.title}</h3>
                    <p className="text-sm text-neutral-500 mt-2 leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-neutral-100 border border-neutral-200 text-neutral-500 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-neutral-900 rounded-2xl p-12">
            <h2
              className="text-3xl font-bold mb-4 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Want something like this?
            </h2>
            <p className="text-neutral-400 mb-8">Let us build you something you are proud of.</p>
            <a
              href="/contact"
              className="bg-white text-neutral-900 font-medium px-8 py-3 rounded-full hover:bg-neutral-100 transition-all duration-200"
            >
              Start a Project
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
