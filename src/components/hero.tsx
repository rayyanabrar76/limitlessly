"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/hero-scene"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {

  return (
    <section className="bg-neutral-950 relative overflow-hidden">

      {/* ── 3D Background — full width ── */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Left dark gradient so text stays readable */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-r from-neutral-950/95 via-neutral-950/60 to-transparent" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none bg-linear-to-t from-neutral-950 to-transparent" />

      {/* ── Text + Stats — sits on top ── */}
      <div className="relative z-20 flex items-end justify-between px-8 md:px-14 lg:px-16 pt-44 pb-8 lg:pt-48 lg:pb-10">

        {/* Left — text */}
        <div className="flex flex-col gap-4 max-w-lg">

          {/* Label */}
          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-white/30" />
            <p className="text-white/40 text-xs uppercase tracking-[0.25em] font-medium">AI Product Studio</p>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(52px,8.5vw,108px)] font-black text-white leading-[0.86] tracking-tighter">
            We Build
            <br />
            <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">AI Platforms</span>
            <br />
            That Scale.
          </h1>

          {/* Subtext */}
          <p className="text-white/45 text-base leading-relaxed max-w-sm">
            We design and build full-scale AI SaaS platforms — from
            idea to launch to scale. For founders building what's next.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="#contact"
              className="flex items-center gap-3 bg-white text-neutral-900 font-semibold text-sm pl-6 pr-2.5 py-2.5 rounded-full hover:bg-neutral-100 transition-all duration-200"
            >
              Book a Call
              <span className="w-7 h-7 bg-neutral-900 rounded-full flex items-center justify-center text-white text-xs shrink-0">↗</span>
            </a>
            <a
              href="/portfolio"
              className="flex items-center gap-3 border border-white/20 text-white font-semibold text-sm pl-6 pr-2.5 py-2.5 rounded-full hover:border-white/50 hover:bg-white/5 transition-all duration-200"
            >
              View Our Work
              <span className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center text-white text-xs shrink-0">↗</span>
            </a>
          </div>
        </div>

        {/* Right — stats */}
        <div className="hidden lg:flex flex-col gap-5 text-right pb-1">
          <div>
            <p className="text-3xl font-black text-white tracking-tight">10+</p>
            <p className="text-[10px] text-white/30 mt-1 uppercase tracking-[0.15em]">Platforms Shipped</p>
          </div>
          <div className="w-full h-px bg-white/10" />
          <div>
            <p className="text-3xl font-black text-white tracking-tight">Global</p>
            <p className="text-[10px] text-white/30 mt-1 uppercase tracking-[0.15em]">Founders Served</p>
          </div>
          <div className="w-full h-px bg-white/10" />
          <div>
            <p className="text-3xl font-black text-white tracking-tight">End-to-End</p>
            <p className="text-[10px] text-white/30 mt-1 uppercase tracking-[0.15em]">Idea → Scale</p>
          </div>
        </div>

      </div>

    </section>
  );
}
