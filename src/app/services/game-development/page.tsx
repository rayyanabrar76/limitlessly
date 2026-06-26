import { GiGamepad, GiGears, GiPaintBucket, GiMultipleTargets, GiMagnifyingGlass, GiRocketFlight, GiMoneyStack, GiWrench } from "react-icons/gi";

export const metadata = {
  title: "Game Development — Limitless",
  description: "Indie PC game development for Steam. Co-op, horror, survival, RPG — built from concept to launch using Unity and Unreal Engine.",
};

const platforms = [
  {
    title: "Indie PC Games",
    desc: "Dark atmospheric titles built for Steam. Co-op, horror, survival, and narrative-driven games that build communities.",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=85&fit=crop",
  },
  {
    title: "Mobile Games",
    desc: "iOS and Android games optimised for retention and monetisation. Casual, RPG, puzzle, and hyper-casual.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=85&fit=crop",
  },
  {
    title: "Multiplayer & Co-op",
    desc: "Networked multiplayer systems — real-time co-op, PvP, and social mechanics that keep players coming back.",
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=85&fit=crop",
  },
];

const features = [
  { Icon: GiGamepad, color: "#6366f1", title: "Game Design", desc: "Core loop, mechanics, level design, economy — every system designed to keep players hooked." },
  { Icon: GiGears, color: "#f59e0b", title: "Unity & Unreal", desc: "We work with industry-standard engines so your game is built on a foundation that scales." },
  { Icon: GiPaintBucket, color: "#ec4899", title: "Art & Asset Integration", desc: "2D sprites, 3D models, animations — we integrate and optimise all your visual assets." },
  { Icon: GiMultipleTargets, color: "#10b981", title: "Cross-Platform", desc: "One game, many platforms. PC, Mac, iOS, Android, and web — we handle the porting." },
  { Icon: GiMagnifyingGlass, color: "#3b82f6", title: "QA & Playtesting", desc: "Rigorous testing across devices and player types. We find the bugs before your players do." },
  { Icon: GiRocketFlight, color: "#f97316", title: "Publishing Support", desc: "Steam, App Store, Google Play — we guide you through every submission and approval process." },
  { Icon: GiMoneyStack, color: "#22c55e", title: "Monetisation", desc: "In-app purchases, ads, subscriptions, DLC — we build the systems that make your game profitable." },
  { Icon: GiWrench, color: "#8b5cf6", title: "Post-Launch Support", desc: "Updates, patches, new content — we stay with your game long after it launches." },
];

const techStack = [
  { name: "Unity", category: "Engine" },
  { name: "Unreal Engine", category: "Engine" },
  { name: "C#", category: "Language" },
  { name: "C++", category: "Language" },
  { name: "Blender", category: "3D Art" },
  { name: "Photoshop", category: "2D Art" },
  { name: "Steam SDK", category: "Publishing" },
  { name: "Firebase", category: "Backend" },
  { name: "PlayFab", category: "Backend" },
  { name: "Spine", category: "Animation" },
  { name: "FMOD", category: "Audio" },
  { name: "Git / Plastic SCM", category: "Version Control" },
];

const steps = [
  {
    num: "01",
    title: "Discovery & Concept",
    desc: "We start with a deep dive into your vision — genre, target audience, platforms, monetisation, and scope. You leave this phase with a full GDD (Game Design Document) and project roadmap.",
    img: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&q=85&fit=crop",
  },
  {
    num: "02",
    title: "Prototype",
    desc: "Before we go full production, we build a playable prototype. This lets us validate the core loop, feel, and mechanics before investing in full art and content production.",
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=85&fit=crop",
  },
  {
    num: "03",
    title: "Production",
    desc: "Full game development with weekly builds and milestone check-ins. Art, code, sound, UI — everything comes together in this phase. You stay informed every step of the way.",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=85&fit=crop",
  },
  {
    num: "04",
    title: "QA & Polish",
    desc: "We run exhaustive QA across target devices and platforms, fix bugs, tune difficulty, and polish every frame. Your game needs to feel great — not just function.",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=85&fit=crop",
  },
  {
    num: "05",
    title: "Launch",
    desc: "We handle publishing submissions, store page setup, and launch-day support. Your game goes live the right way — with metadata, screenshots, trailers, and reviews strategy.",
    img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=85&fit=crop",
  },
  {
    num: "06",
    title: "Growth & Updates",
    desc: "Post-launch we support patches, new content drops, live events, and community feedback loops. The best games keep evolving — so do we.",
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=85&fit=crop",
  },
];

const faqs = [
  {
    q: "Do I need to have a game design document ready?",
    a: "Not at all. Many of our clients come with just an idea. We help you develop the concept into a full GDD during the discovery phase."
  },
  {
    q: "Which engine do you use — Unity or Unreal?",
    a: "We work with both. Unity is great for mobile and indie PC titles. Unreal is ideal for high-fidelity PC and console-quality games. We'll recommend the right one based on your game type and budget."
  },
  {
    q: "Can you work with my existing team or assets?",
    a: "Yes. We're flexible — we can take on the full pipeline or slot in as an extra development team alongside your existing crew."
  },
  {
    q: "What platforms can you publish to?",
    a: "Steam (PC/Mac), Google Play, Apple App Store, and web platforms. We handle the full submission process for each."
  },
  {
    q: "How long does a game take to build?",
    a: "Simple mobile or web games: 3–8 weeks. Mid-scope indie PC titles: 2–6 months. Larger productions vary by scope. We'll give you a precise timeline after the discovery phase."
  },
  {
    q: "Do you handle monetisation and in-app purchases?",
    a: "Yes. We implement and test IAP systems, ad networks (AdMob, Unity Ads), subscriptions, and DLC pipelines depending on your monetisation strategy."
  },
];

export default function GameDevelopmentPage() {
  return (
    <main className="bg-white">

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1800&q=90&fit=crop"
          alt="Game Development"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black/90" />

        <div className="relative z-10 flex flex-col justify-end px-6 md:px-16 pb-24 pt-40" style={{ minHeight: "100vh" }}>
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <p className="text-xs text-emerald-400 uppercase tracking-[0.25em] font-semibold">Available Now</p>
            </div>
            <h1 className="text-[clamp(56px,10vw,130px)] font-black text-white leading-[0.88] tracking-tighter mb-8 max-w-5xl">
              We Build<br /><span className="text-white/25">Games</span> That<br />Go Viral.
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <p className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed">
                Indie PC titles, co-op survival, horror, multiplayer — built for Steam using Unity and Unreal Engine. Full pipeline from GDD to launch day.
              </p>
              <div className="flex gap-4 shrink-0">
                <a
                  href="/#contact"
                  className="flex items-center gap-3 bg-white text-neutral-900 font-semibold text-sm pl-6 pr-3 py-3 rounded-full hover:bg-neutral-100 transition-all"
                >
                  Start a Project
                  <span className="w-7 h-7 bg-neutral-900 rounded-full flex items-center justify-center text-white text-xs">↗</span>
                </a>
                <a
                  href="#process"
                  className="flex items-center gap-3 border border-white/20 text-white font-semibold text-sm px-6 py-3 rounded-full hover:border-white/50 hover:bg-white/5 transition-all"
                >
                  See Our Process
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 md:px-16 py-5 flex flex-wrap gap-8 md:gap-16">
            {[["PC, Mobile & Co-op", "Platforms"], ["Unity & Unreal", "Engines"], ["Steam Ready", "Publishing"], ["From $999", "Starting Price"]].map(([val, label]) => (
              <div key={label}>
                <p className="text-white font-black text-lg leading-none">{val}</p>
                <p className="text-white/40 text-xs uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro split ── */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-neutral-400 uppercase tracking-[0.2em] font-medium mb-5">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight tracking-tight mb-6">
              Indie games that build<br />real communities.
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed mb-5">
              The biggest indie hits — Lethal Company, Among Us, Hollow Knight — didn't blow up because of marketing budgets. They blew up because the core mechanic was impossible to stop talking about. That's what we design for.
            </p>
            <p className="text-neutral-500 text-lg leading-relaxed mb-8">
              We specialise in dark atmospheric PC games, co-op survival, horror, and multiplayer titles built for Steam. Whether you have a full GDD or just an idea, we work as your full dev team — from prototype to store page to post-launch content.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Unity", "Unreal Engine", "PC", "iOS", "Android", "Web", "Steam", "App Store"].map(tag => (
                <span key={tag} className="text-xs border border-neutral-200 text-neutral-500 px-3 py-1.5 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden" style={{ height: "500px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=900&q=90&fit=crop"
              alt="PC Gaming Setup"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4">
              <p className="text-white font-bold text-sm">Full-pipeline development</p>
              <p className="text-white/60 text-xs mt-0.5">Concept → Prototype → Production → Launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Platforms ── */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs text-neutral-500 uppercase tracking-[0.2em] font-medium mb-3">Platforms</p>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                Where your game lives
              </h2>
            </div>
            <p className="text-neutral-500 max-w-sm text-sm leading-relaxed">
              We build for the platform that fits your game — and can port across all of them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {platforms.map((p) => (
              <div key={p.title} className="relative rounded-2xl overflow-hidden group" style={{ height: "360px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="text-2xl font-black text-white mb-2">{p.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs text-neutral-400 uppercase tracking-[0.2em] font-medium mb-4">Everything Included</p>
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">What's in the package</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <div key={f.title} className="border border-neutral-100 rounded-2xl p-7 hover:border-neutral-300 hover:shadow-md transition-all duration-200 group">
                <f.Icon size={28} style={{ color: f.color }} className="mb-5" />
                <h3 className="font-bold text-neutral-900 text-base mb-2">{f.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="py-20 px-6 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            <div>
              <p className="text-xs text-neutral-400 uppercase tracking-[0.2em] font-medium mb-3">Tech Stack</p>
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">Industry-standard tools</h2>
            </div>
            <p className="text-neutral-500 text-sm max-w-sm leading-relaxed">No experimental stacks. We use the same tools the world's best game studios rely on.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {techStack.map((t) => (
              <div key={t.name} className="flex items-center gap-2.5 bg-white border border-neutral-200 rounded-full px-4 py-2.5 hover:border-neutral-400 transition-colors">
                <span className="text-xs text-neutral-400 uppercase tracking-widest">{t.category}</span>
                <span className="w-px h-3 bg-neutral-200" />
                <span className="text-sm font-semibold text-neutral-800">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section id="process" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs text-neutral-400 uppercase tracking-[0.2em] font-medium mb-4">How It Works</p>
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">From idea to app store</h2>
          </div>
          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-neutral-100 ${i % 2 === 1 ? "" : ""}`}>
                <div className={`relative overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`} style={{ height: "320px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute top-7 left-7">
                    <span className="text-7xl font-black text-white/10 leading-none">{step.num}</span>
                  </div>
                </div>
                <div className={`flex flex-col justify-center p-10 bg-white ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="text-xs text-neutral-400 uppercase tracking-[0.2em] font-medium mb-2">Step {step.num}</p>
                  <h3 className="text-2xl font-black text-neutral-900 mb-4">{step.title}</h3>
                  <p className="text-neutral-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Split image + pricing ── */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative overflow-hidden" style={{ minHeight: "500px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=900&q=90&fit=crop"
              alt="Gaming"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent" />
            <div className="relative z-10 p-14 flex flex-col justify-end h-full" style={{ minHeight: "500px" }}>
              <p className="text-white font-black text-4xl md:text-5xl leading-tight tracking-tight mb-3">
                Your game.<br />Our craft.
              </p>
              <p className="text-white/50 text-sm max-w-xs">We've built games for indie creators, startups, and enterprise clients around the world.</p>
            </div>
          </div>
          <div className="bg-neutral-950 flex flex-col justify-center p-14">
            <p className="text-xs text-neutral-500 uppercase tracking-[0.2em] font-medium mb-5">Pricing</p>
            <p className="text-6xl md:text-7xl font-black text-white tracking-tight mb-2">From $999</p>
            <p className="text-neutral-500 text-sm mb-8">21–60 days delivery · Full pipeline included</p>
            <div className="flex flex-col gap-3 mb-10">
              {["Game Design Document", "Prototype build", "Full production", "QA & playtesting", "Publishing support", "30-day post-launch support"].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-emerald-400/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-neutral-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="/#contact"
              className="inline-flex items-center gap-3 bg-white text-neutral-900 font-semibold text-sm pl-7 pr-3 py-3.5 rounded-full hover:bg-neutral-100 transition-all w-fit"
            >
              Start Your Game
              <span className="w-7 h-7 bg-neutral-900 rounded-full flex items-center justify-center text-white text-xs">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs text-neutral-400 uppercase tracking-[0.2em] font-medium mb-4">FAQ</p>
            <h2 className="text-4xl font-black text-neutral-900 tracking-tight">Common questions</h2>
          </div>
          <div className="flex flex-col divide-y divide-neutral-100">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-8">
                <h3 className="font-bold text-neutral-900 text-base mb-3">{faq.q}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1800&q=85&fit=crop"
          alt="Gaming"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 py-32 px-6 text-center">
          <p className="text-xs text-neutral-400 uppercase tracking-[0.2em] font-medium mb-5">Let's Build</p>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6 max-w-2xl mx-auto leading-tight">
            Got a game concept? Let's ship it.
          </h2>
          <p className="text-white/50 max-w-md mx-auto mb-10 leading-relaxed">
            Tell us the genre, the core mechanic, the platform — we'll come back with a full plan and quote within 24 hours. No commitment needed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#contact"
              className="flex items-center gap-3 bg-white text-neutral-900 font-semibold text-sm pl-7 pr-3 py-3.5 rounded-full hover:bg-neutral-100 transition-all"
            >
              Get a Free Quote
              <span className="w-7 h-7 bg-neutral-900 rounded-full flex items-center justify-center text-white text-xs">↗</span>
            </a>
            <a
              href="/portfolio"
              className="flex items-center gap-3 border border-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:border-white/50 hover:bg-white/5 transition-all"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
