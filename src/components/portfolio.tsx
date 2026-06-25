const projects = [
  {
    num: "01",
    title: "Limitless Store",
    category: "E-Commerce",
    description: "Full custom e-commerce store with Next.js, Stripe, and a clean modern UI built to convert.",
    tags: ["Next.js", "Stripe", "Prisma"],
    accent: "bg-violet-500",
    bg: "bg-violet-50",
  },
  {
    num: "02",
    title: "Fashion Boutique",
    category: "E-Commerce",
    description: "Premium clothing store with product filtering, cart, and smooth checkout experience.",
    tags: ["Next.js", "Tailwind", "Stripe"],
    accent: "bg-pink-500",
    bg: "bg-pink-50",
  },
  {
    num: "03",
    title: "Agency Website",
    category: "Business Website",
    description: "Clean, fast landing page for a marketing agency with animations and contact form.",
    tags: ["Next.js", "Tailwind", "Framer"],
    accent: "bg-teal-500",
    bg: "bg-teal-50",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 px-6 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs text-neutral-400 uppercase tracking-[0.2em] font-medium mb-4">Our Work</p>
            <h2
              className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Selected Projects
            </h2>
          </div>
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors shrink-0"
          >
            View all work <span>→</span>
          </a>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-4">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center border border-neutral-200 rounded-2xl p-6 md:p-8 hover:border-neutral-300 hover:shadow-md hover:shadow-black/5 transition-all duration-300 bg-white"
            >
              {/* Left: Number + preview block */}
              <div className="md:col-span-5 flex items-center gap-5">
                <span className="text-neutral-200 font-bold text-sm shrink-0 w-6">{project.num}</span>
                {/* Mini visual */}
                <div className={`${project.bg} rounded-xl flex-1 h-24 flex items-center justify-center relative overflow-hidden`}>
                  {/* Fake browser bar */}
                  <div className="absolute top-3 left-3 right-3 flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400/60"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400/60"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400/60"></div>
                    <div className="flex-1 h-1.5 bg-white/60 rounded-full ml-1"></div>
                  </div>
                  {/* Fake content blocks */}
                  <div className="flex gap-2 mt-4">
                    <div className={`w-10 h-10 ${project.accent} rounded-lg opacity-40`}></div>
                    <div className={`w-10 h-10 ${project.accent} rounded-lg opacity-25`}></div>
                    <div className={`w-10 h-10 ${project.accent} rounded-lg opacity-15`}></div>
                  </div>
                </div>
              </div>

              {/* Middle: Title + description */}
              <div className="md:col-span-5">
                <p className="text-[10px] text-neutral-400 uppercase tracking-[0.18em] font-medium mb-1.5">{project.category}</p>
                <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-black">{project.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-neutral-100 border border-neutral-200 text-neutral-500 px-2.5 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Arrow */}
              <div className="md:col-span-2 flex md:justify-end">
                <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all duration-200">
                  ↗
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
