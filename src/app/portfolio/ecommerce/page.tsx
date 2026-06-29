import Link from "next/link";

export const metadata = {
  title: "E-Commerce Projects — Limitless",
  description: "Explore our e-commerce builds — from industrial platforms to multi-tenant SaaS and no-code admin panels.",
};

const projects = [
  {
    title: "Advanced Power Solutions",
    category: "Industrial E-Commerce",
    year: "2026",
    description:
      "A heavy-duty e-commerce platform built for an engineering firm operating since 1996. Handles switchgear, generators, UPS systems, and industrial compressors with a custom admin panel, user accounts, cart, and quote request system.",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=900&q=85&fit=crop",
    imageAlt: "Industrial generators and switchgear equipment",
  },
  {
    title: "ShopFlow",
    category: "SaaS E-Commerce Platform",
    year: "2026",
    description:
      "A multi-tenant SaaS e-commerce platform where each merchant gets their own subdomain, a visual theme editor, and complete control over products, orders, and customers. Stripe handles payments and subscription billing across Free, Basic, and Pro tiers.",
    tags: ["Next.js 15", "Prisma", "Clerk"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85&fit=crop",
    imageAlt: "E-commerce dashboard on a laptop",
  },
  {
    title: "StorePanel",
    category: "No-Code Admin Panel",
    year: "2026",
    description:
      "A no-code admin panel that plugs directly into a Neon PostgreSQL database. Non-technical store owners can manage products, quotes, orders, and customers from a clean real-time interface — no backend access required.",
    tags: ["Next.js", "Neon DB", "SaaS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85&fit=crop",
    imageAlt: "Analytics dashboard on a laptop screen",
  },
];

export default function EcommercePage() {
  return (
    <main className="bg-neutral-950 min-h-screen">
      {/* Header */}
      <section className="pt-36 pb-16 px-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-4">
            Portfolio
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-none mb-6">
            E-Commerce Projects.
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
            End-to-end commerce platforms — from industrial catalogues to multi-tenant SaaS and real-time admin panels.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Image */}
                <div className="h-56 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">
                      {project.category}
                    </span>
                    <span className="text-neutral-700">·</span>
                    <span className="text-xs text-neutral-500">{project.year}</span>
                  </div>

                  <h2 className="text-xl font-black text-white tracking-tight mb-3">
                    {project.title}
                  </h2>

                  <p className="text-sm text-neutral-400 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-full border border-white/10 bg-white/5 text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-20 border-t border-white/10 bg-neutral-900/40">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-white tracking-tight mb-2">
              Want to see everything?
            </h2>
            <p className="text-neutral-400">
              Browse all of our work across every category.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/portfolio"
              className="text-sm font-semibold text-neutral-300 underline underline-offset-4 hover:text-white transition-colors"
            >
              See all our work
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 bg-white text-neutral-900 font-semibold text-sm pl-6 pr-3 py-3 rounded-full hover:bg-neutral-200 transition-all"
            >
              Start a project
              <span className="w-7 h-7 bg-neutral-900 rounded-full flex items-center justify-center text-white text-xs">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
