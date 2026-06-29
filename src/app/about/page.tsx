export const metadata = {
  title: "About — Limitless",
  description: "An AI product studio building full-scale SaaS platforms for ambitious founders worldwide.",
};

export default function AboutPage() {
  return (
    <main className="bg-neutral-950">

      <section className="min-h-screen pt-28 pb-24 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-neutral-500"></span>
              <p className="text-xs text-neutral-500 uppercase tracking-widest font-medium">Who We Are</p>
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Built by a developer
              <br />
              <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">who gets it.</span>
            </h1>
            <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
              Limitless is an AI product studio. We partner with founders worldwide to design
              and build full-scale AI SaaS platforms — from the first spark of an idea to a
              product ready to scale.
            </p>
          </div>

          {/* Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-white">The Story</h2>
              <p className="text-neutral-400 leading-relaxed">
                Limitless started with a simple belief: the gap between a great idea and a
                shipped product has never been smaller — if you have the right team. AI changed
                what a small, focused studio can build, and how fast.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                So we build like a product team, not a vendor. Real architecture, real design,
                AI at the core — platforms engineered to handle the first user and the millionth.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-white">What We Use</h2>
              <div className="grid grid-cols-2 gap-3">
                {["Next.js", "TypeScript", "OpenAI / LLMs", "Prisma", "Stripe", "Vercel", "Postgres", "LangChain"].map((tech) => (
                  <div
                    key={tech}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-neutral-300 font-medium hover:border-white/20 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-white">Why Limitless</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Built to Scale",
                  description: "Real architecture from day one — multi-tenant, secure, and ready for growth, not just a demo.",
                },
                {
                  title: "AI-Native",
                  description: "AI isn't a bolt-on. We design products with intelligence at the core, the way modern software is built.",
                },
                {
                  title: "Founder Partners",
                  description: "We think like co-builders — invested in the outcome, not just shipping a deliverable and walking away.",
                },
              ].map((value) => (
                <div key={value.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                  <h3 className="font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{value.description}</p>
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
              Ready to build something?
            </h2>
            <p className="text-neutral-400 mb-8">Let&apos;s turn your vision into a platform.</p>
            <a
              href="/#contact"
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
