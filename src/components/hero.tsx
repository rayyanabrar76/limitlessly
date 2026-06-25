"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/hero-scene"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {

  return (
    <section className="min-h-screen bg-neutral-950 relative overflow-hidden grid grid-cols-1 lg:grid-cols-2">

      {/* ── LEFT — Text ── */}
      <div className="relative flex flex-col px-8 md:px-14 lg:px-16 pt-35 pb-16 lg:pt-37.5 lg:pb-20 z-10">

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.13] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Ambient glow */}
        <div
          className="absolute top-1/3 -left-24 w-80 h-80 rounded-full blur-3xl opacity-[0.08] pointer-events-none animate-glow-drift-b"
          style={{ background: "radial-gradient(circle, #818cf8, transparent 70%)" }}
        />

        <div className="relative flex flex-col gap-8 max-w-lg">

          {/* Label */}
          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-white/30" />
            <p className="text-white/40 text-xs uppercase tracking-[0.25em] font-medium">Web Design Studio</p>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(52px,8.5vw,108px)] font-black text-white leading-[0.86] tracking-tighter">
            We Build
            <br />
            <span className="text-white/20">The Web</span>
            <br />
            You Deserve.
          </h1>

          {/* Subtext */}
          <p className="text-white/45 text-base leading-relaxed max-w-sm">
            Custom e-commerce stores and websites for businesses
            ready to grow. Fast, modern, built to convert.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="#contact"
              className="flex items-center gap-3 bg-white text-neutral-900 font-semibold text-sm pl-6 pr-2.5 py-2.5 rounded-full hover:bg-neutral-100 transition-all duration-200"
            >
              Start a Project
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

          {/* Stats */}
          <div className="flex items-center gap-8 pt-5 border-t border-white/8">
            <div>
              <p className="text-2xl font-black text-white tracking-tight">10+</p>
              <p className="text-[10px] text-white/30 mt-0.5 uppercase tracking-[0.15em]">Projects Built</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <p className="text-2xl font-black text-white tracking-tight">100%</p>
              <p className="text-[10px] text-white/30 mt-0.5 uppercase tracking-[0.15em]">Satisfaction</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <p className="text-2xl font-black text-white tracking-tight">3–21</p>
              <p className="text-[10px] text-white/30 mt-0.5 uppercase tracking-[0.15em]">Day Delivery</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT — 3D Scene ── */}
      <div className="relative hidden lg:block overflow-hidden bg-neutral-950">
        {/* Three.js canvas fills the panel */}
        <div className="absolute inset-0">
          <HeroScene />
        </div>

        {/* Left-edge blend into text panel */}
        <div className="absolute inset-y-0 left-0 w-40 bg-linear-to-r from-neutral-950 to-transparent pointer-events-none z-10" />
        {/* Top blend */}
        <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-neutral-950/60 to-transparent pointer-events-none z-10" />
        {/* Bottom blend */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-neutral-950/60 to-transparent pointer-events-none z-10" />
      </div>

      {/* Mobile bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-neutral-950 to-transparent pointer-events-none z-10 lg:hidden" />

    </section>
  );
}
