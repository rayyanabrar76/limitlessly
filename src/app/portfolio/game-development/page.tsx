import Link from "next/link";

export const metadata = {
  title: "Game Development — Limitlessly",
  description: "Explore our game development portfolio — from atmospheric co-op horror on Steam to mobile racing games and indie RPGs.",
};

const projects = [
  {
    title: "Project Void",
    category: "Co-op Survival Horror",
    year: "2026",
    description:
      "Dark atmospheric co-op survival horror designed for Steam. 3–4 players navigate procedurally generated maps with proximity voice chat. Every run is different — light is your only ally.",
    longDescription: "3–4 players, procedural maps, proximity voice chat.",
    tags: ["Unity", "C#", "Steam", "Co-op"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900&q=85&fit=crop",
    imageAlt: "Dark atmospheric game concept art",
  },
  {
    title: "NeonRacer",
    category: "Mobile Racing Game",
    year: "2026",
    description:
      "Fast-paced mobile racing game with a vibrant neon aesthetic. Compete across glowing circuits, unlock exotic cars, and rise through global leaderboards. Built for iOS and Android with a full monetisation system.",
    longDescription: "Neon aesthetic, global leaderboards, cosmetic monetisation.",
    tags: ["Unity", "iOS", "Android", "Monetisation"],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=900&q=85&fit=crop",
    imageAlt: "Neon racing game concept art",
  },
  {
    title: "Realm Forge",
    category: "Indie RPG",
    year: "2026",
    description:
      "An indie RPG with procedural world generation built in Unreal Engine. Every playthrough unfolds a new continent — unique dungeons, factions, and story threads. Targeting a Steam Early Access launch.",
    longDescription: "Procedural world generation, branching story, Steam Early Access.",
    tags: ["Unreal Engine", "C++", "Steam"],
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=900&q=85&fit=crop",
    imageAlt: "Fantasy RPG concept art",
  },
];

export default function GameDevelopmentPage() {
  return (
    <main className="bg-neutral-950 min-h-screen">
      {/* Dark Hero Header */}
      <section className="pt-36 pb-16 px-6 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-4">
            Portfolio
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-none mb-6">
            Game Development.
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
            From immersive co-op horror to mobile racing and open-world RPGs — games built with purpose and polish.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Concept Notice Banner */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 mb-12 flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-neutral-400 text-sm font-bold">i</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-1">
                Concept Showcase Projects
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed">
                These are concept showcase projects that demonstrate our game development capabilities. Contact us to discuss your game concept and we will scope it together.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-colors"
              >
                {/* Image */}
                <div className="h-64 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-900/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-300 bg-neutral-900/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-neutral-700">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-neutral-500">{project.year}</span>
                    <span className="text-neutral-700">·</span>
                    <span className="text-xs text-neutral-500 italic">{project.longDescription}</span>
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
                        className="text-xs font-medium px-3 py-1 rounded-full border border-neutral-700 text-neutral-400"
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
      <section className="px-6 py-20 bg-neutral-900 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
              Have a game concept?
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-md">
              Tell us your idea — genre, platform, core mechanic. We will scope it and build it.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              href="/portfolio"
              className="text-sm font-semibold text-neutral-400 underline underline-offset-4 hover:text-white transition-colors"
            >
              See all our work
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 bg-white text-neutral-900 font-semibold text-sm pl-7 pr-3 py-3 rounded-full hover:bg-neutral-100 transition-all"
            >
              Start a project
              <span className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center text-white text-xs">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
