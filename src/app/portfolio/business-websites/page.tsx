import Link from "next/link";

export const metadata = {
  title: "Business Websites — Limitless",
  description: "Explore our business website projects — from multilingual restaurant sites to bold agency builds and agritech marketplaces.",
};

const projects = [
  {
    title: "Chef Aboud Küche",
    category: "Hospitality Website",
    year: "2026",
    description:
      "A multilingual catering website for a Berlin-based chef, supporting English, German, and right-to-left Arabic. Editorial design with smooth scroll animations, a curated menu display, and catering booking integration.",
    tags: ["Next.js", "i18n", "Framer"],
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&q=85&fit=crop",
    imageAlt: "Chef grilling food",
  },
  {
    title: "CX Services LLC",
    category: "Brand Agency Website",
    year: "2026",
    description:
      "A bold agency website with a striking red palette, large editorial typography, a 3D animated grid hero, and strong visual hierarchy. Built to match a brand that answers all your brand-building needs.",
    tags: ["Next.js", "Tailwind"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85&fit=crop",
    imageAlt: "Team collaborating in a modern office",
  },
  {
    title: "Agrolync",
    category: "AgriTech Marketplace",
    year: "2025",
    description:
      "A farm-to-market platform connecting 12,400+ verified farmers to buyers across 36 Nigerian states. Includes a live commodity price tracker updated every minute from 40+ markets, a producer dashboard, and a buyer portal.",
    tags: ["Next.js", "PostgreSQL", "Maps"],
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900&q=85&fit=crop",
    imageAlt: "Farmland at sunset",
  },
];

export default function BusinessWebsitesPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-36 pb-16 px-6 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 mb-4">
            Portfolio
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-neutral-900 tracking-tight leading-none mb-6">
            Business Websites.
          </h1>
          <p className="text-lg text-neutral-500 max-w-xl leading-relaxed">
            From editorial restaurant sites to bold agency identities and live agritech platforms — websites that work as hard as your business.
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
                className="rounded-2xl overflow-hidden border border-neutral-100 bg-white shadow-sm hover:shadow-md transition-shadow"
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
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-600">
                      {project.category}
                    </span>
                    <span className="text-neutral-300">·</span>
                    <span className="text-xs text-neutral-400">{project.year}</span>
                  </div>

                  <h2 className="text-xl font-black text-neutral-900 tracking-tight mb-3">
                    {project.title}
                  </h2>

                  <p className="text-sm text-neutral-500 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700"
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
      <section className="px-6 py-20 border-t border-neutral-100 bg-neutral-50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-neutral-900 tracking-tight mb-2">
              Want to see everything?
            </h2>
            <p className="text-neutral-500">
              Browse all of our work across every category.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/portfolio"
              className="text-sm font-semibold text-neutral-700 underline underline-offset-4 hover:text-neutral-900 transition-colors"
            >
              See all our work
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 bg-neutral-900 text-white font-semibold text-sm pl-6 pr-3 py-3 rounded-full hover:bg-neutral-800 transition-all"
            >
              Start a project
              <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-neutral-900 text-xs">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
