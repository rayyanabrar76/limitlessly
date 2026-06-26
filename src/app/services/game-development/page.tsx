export const metadata = {
  title: "Game Development — Limitless",
  description: "From concept to launch — we build games players actually want to play. PC, mobile, and web.",
};

const features = [
  "PC & Mobile Platforms",
  "Unity / Unreal Engine",
  "Game Design & Mechanics",
  "UI/UX for Games",
  "Art & Asset Integration",
  "QA & Playtesting",
  "Publishing Support",
  "Post-Launch Maintenance",
];

const steps = [
  {
    step: "01",
    title: "Discovery",
    description: "We dig into your game concept, target audience, platforms, and vision to map out the full scope of the project.",
  },
  {
    step: "02",
    title: "Design & Build",
    description: "We prototype, design the core mechanics, integrate assets, and build the full game with regular milestone updates.",
  },
  {
    step: "03",
    title: "Review",
    description: "We run QA and playtesting sessions, gather feedback, and refine the game until it plays exactly the way it should.",
  },
  {
    step: "04",
    title: "Launch",
    description: "We handle publishing support and get your game live. Post-launch maintenance keeps it running smoothly.",
  },
];

export default function GameDevelopmentPage() {
  return (
    <main className="bg-white">

      <section className="relative w-full overflow-hidden" style={{ minHeight: "560px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1400&q=85&fit=crop"
          alt="Game Development"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-24" style={{ minHeight: "560px" }}>
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-6 h-px bg-white/40"></span>
            <p className="text-xs text-white/60 uppercase tracking-widest font-medium">Service</p>
            <span className="w-6 h-px bg-white/40"></span>
          </div>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-3xl leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Game Development
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
            From concept to launch — we build games players actually want to play.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-6 h-px bg-neutral-400"></span>
            <p className="text-xs text-neutral-400 uppercase tracking-widest font-medium">What You Get</p>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Games built to be played, not just shipped
          </h2>
          <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
            Custom game development for PC, mobile, and web — covering the full pipeline from design to publishing. We handle game mechanics, UI/UX, art and asset integration, QA, and playtesting so you end up with a game that actually engages players.
          </p>
          <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl mt-4">
            Whether you have a fully fleshed-out concept or just a spark of an idea, we work with you every step of the way. We use industry-standard engines like Unity and Unreal Engine and support publishing to major platforms. Post-launch, we stay involved to keep things running smoothly.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-neutral-400"></span>
              <p className="text-xs text-neutral-400 uppercase tracking-widest font-medium">Everything Included</p>
              <span className="w-6 h-px bg-neutral-400"></span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-neutral-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Features
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="bg-white border border-neutral-200 rounded-2xl px-5 py-4 flex items-start gap-3 hover:border-neutral-300 hover:shadow-sm transition-all"
              >
                <span className="text-neutral-900 font-bold mt-0.5 shrink-0">✓</span>
                <span className="text-sm text-neutral-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-neutral-400"></span>
              <p className="text-xs text-neutral-400 uppercase tracking-widest font-medium">How It Works</p>
              <span className="w-6 h-px bg-neutral-400"></span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-neutral-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((item) => (
              <div
                key={item.step}
                className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 hover:border-neutral-300 hover:shadow-sm transition-all"
              >
                <p className="text-4xl font-bold text-neutral-200 mb-4">{item.step}</p>
                <h3 className="font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-6 h-px bg-neutral-400"></span>
            <p className="text-xs text-neutral-400 uppercase tracking-widest font-medium">Pricing</p>
            <span className="w-6 h-px bg-neutral-400"></span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Simple, Transparent Pricing
          </h2>
          <p className="text-neutral-500 mb-10">No hidden fees. No surprises. Just great work delivered on schedule.</p>
          <div className="bg-white border border-neutral-200 rounded-2xl p-10 shadow-sm">
            <p className="text-xs text-neutral-400 uppercase tracking-widest mb-3 font-medium">21–60 days delivery</p>
            <p
              className="text-6xl font-bold text-neutral-900 mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              From $999
            </p>
            <p className="text-neutral-500 mb-8">Full-pipeline game development from concept to publishing.</p>
            <a
              href="/#contact"
              className="inline-block bg-neutral-900 text-white font-medium px-10 py-3.5 rounded-full hover:bg-black transition-all duration-200 text-sm"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to get started?
          </h2>
          <p className="text-neutral-400 mb-8">Tell us about your game idea and we will figure out the rest together.</p>
          <a
            href="/#contact"
            className="inline-block bg-white text-neutral-900 font-medium px-10 py-3.5 rounded-full hover:bg-neutral-100 transition-all duration-200 text-sm"
          >
            Contact Us
          </a>
        </div>
      </section>

    </main>
  );
}
