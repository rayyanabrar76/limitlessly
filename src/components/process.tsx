const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We pressure-test the idea, define the product, and architect for scale — so we build the right thing from day one.",
  },
  {
    num: "02",
    title: "Design & Build",
    desc: "We design the product and engineer it end-to-end with modern, AI-native tech. You get progress in tight, transparent cycles.",
  },
  {
    num: "03",
    title: "Launch",
    desc: "We ship to production — fast, secure, and ready for real users. You go live with a platform investors and customers trust.",
  },
  {
    num: "04",
    title: "Scale",
    desc: "We harden, optimize, and grow with you — new features, more users, lower costs. A partner well past launch day.",
  },
];

export default function Process() {
  return (
    <section className="py-28 px-6 bg-neutral-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <p className="text-xs text-neutral-500 uppercase tracking-[0.2em] font-medium mb-4">How It Works</p>
            <h2
              className="text-4xl md:text-5xl font-black text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Process
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-xs leading-relaxed">
            Idea to launched platform — and beyond. A clear, transparent path from concept to scale.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-white/10 rounded-2xl overflow-hidden">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`p-8 flex flex-col gap-4 group hover:bg-white/5 transition-colors duration-200 ${
                i < steps.length - 1 ? "border-b md:border-b-0 md:border-r border-white/10" : ""
              }`}
            >
              {/* Top bar accent */}
              <div className="w-8 h-0.5 bg-white/15 group-hover:bg-linear-to-r group-hover:from-indigo-400 group-hover:to-fuchsia-400 transition-colors duration-300 mb-2" />

              <span className="text-5xl font-black text-neutral-800 leading-none group-hover:text-neutral-700 transition-colors">
                {step.num}
              </span>

              <h3 className="text-base font-bold text-white">{step.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
