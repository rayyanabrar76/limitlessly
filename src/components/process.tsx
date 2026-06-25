const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We learn about your business, goals, and target audience to make sure we build exactly what you need.",
  },
  {
    num: "02",
    title: "Design & Build",
    desc: "We design and develop your site with modern technology. You get progress updates throughout.",
  },
  {
    num: "03",
    title: "Review",
    desc: "You review the finished product and we refine every detail until you are completely satisfied.",
  },
  {
    num: "04",
    title: "Launch",
    desc: "We deploy, hand over everything, and make sure you are live, fast, and ready to grow.",
  },
];

export default function Process() {
  return (
    <section className="py-28 px-6 bg-neutral-50 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <p className="text-xs text-neutral-400 uppercase tracking-[0.2em] font-medium mb-4">How It Works</p>
            <h2
              className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Process
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-xs leading-relaxed">
            Simple, transparent, and fast. From first message to live site in days — not months.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-neutral-200 rounded-2xl overflow-hidden">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`p-8 flex flex-col gap-4 group hover:bg-white transition-colors duration-200 ${
                i < steps.length - 1 ? "border-b md:border-b-0 md:border-r border-neutral-200" : ""
              }`}
            >
              {/* Top bar accent */}
              <div className="w-8 h-0.5 bg-neutral-200 group-hover:bg-neutral-900 transition-colors duration-300 mb-2" />

              <span className="text-5xl font-black text-neutral-100 leading-none group-hover:text-neutral-200 transition-colors">
                {step.num}
              </span>

              <h3 className="text-base font-bold text-neutral-900">{step.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
