export const metadata = {
  title: "About — Limitless",
  description: "Learn about Limitless and who we are.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">

      <section className="min-h-screen pt-28 pb-24 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-neutral-400"></span>
              <p className="text-xs text-neutral-400 uppercase tracking-widest font-medium">Who We Are</p>
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-neutral-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Built by a developer
              <br />
              <span className="text-neutral-300">who gets it.</span>
            </h1>
            <p className="text-lg text-neutral-500 max-w-2xl leading-relaxed">
              Limitless was built with one goal in mind — to help small businesses and entrepreneurs
              get online fast, with a store or website that actually looks good and works.
            </p>
          </div>

          {/* Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-neutral-900">The Story</h2>
              <p className="text-neutral-500 leading-relaxed">
                I started Limitless because I saw how many small businesses were losing customers
                online simply because they didn&apos;t have a proper website or store. Most agencies
                charge thousands and take months. I wanted to change that.
              </p>
              <p className="text-neutral-500 leading-relaxed">
                Using modern tools and technology, I can build you a professional, fast, and
                beautiful online presence at a fraction of the cost — without sacrificing quality.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-neutral-900">What We Use</h2>
              <div className="grid grid-cols-2 gap-3">
                {["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe", "Vercel", "Neon DB", "React"].map((tech) => (
                  <div
                    key={tech}
                    className="bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-600 font-medium hover:border-neutral-300 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-neutral-900">Why Limitless</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Fast Delivery",
                  description: "No months of waiting. Most projects are delivered within 1-2 weeks.",
                },
                {
                  title: "Affordable",
                  description: "Premium quality without the agency price tag. Fair pricing for real businesses.",
                },
                {
                  title: "Modern Stack",
                  description: "Built with the latest technology so your site is fast, secure, and scalable.",
                },
              ].map((value) => (
                <div key={value.title} className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 hover:border-neutral-300 hover:shadow-sm transition-all">
                  <h3 className="font-bold text-neutral-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{value.description}</p>
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
              Ready to build something?
            </h2>
            <p className="text-neutral-400 mb-8">Let us bring your idea to life.</p>
            <a
              href="/#contact"
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
