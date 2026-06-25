"use client";

import { useState, useEffect } from "react";

const SLIDES = [
  {
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&h=1100&fit=crop&crop=center",
    label: "Abstract Composition",
  },
  {
    url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&h=1100&fit=crop&crop=center",
    label: "Digital Grid",
  },
  {
    url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=900&h=1100&fit=crop&crop=center",
    label: "Creative Form",
  },
  {
    url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=900&h=1100&fit=crop&crop=center",
    label: "Fluid Vision",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent(c => (c + 1) % SLIDES.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="min-h-screen bg-neutral-950 relative overflow-hidden grid grid-cols-1 lg:grid-cols-2">

      {/* ── LEFT — Text ── */}
      <div className="relative flex flex-col justify-center px-8 md:px-14 lg:px-16 pt-40 pb-16 lg:py-24 z-10">

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

      {/* ── RIGHT — Image Slider ── */}
      <div className="relative hidden lg:block overflow-hidden">

        {/* Slides */}
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.url}
              alt={slide.label}
              className="w-full h-full object-cover"
            />
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-neutral-950/30" />
          </div>
        ))}

        {/* Slide label + dot controls */}
        <div className="absolute bottom-10 left-8 right-8 z-20 flex items-center justify-between">
          <p className="text-white/40 text-xs font-medium tracking-widest uppercase">
            {SLIDES[current].label}
          </p>
          <div className="flex gap-2 items-center">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
                className={`rounded-full transition-all duration-400 ${
                  i === current
                    ? "w-6 h-1.5 bg-white"
                    : "w-1.5 h-1.5 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Slide counter */}
        <div className="absolute top-8 right-8 z-20 text-white/25 text-xs font-medium tabular-nums">
          {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </div>
      </div>

      {/* Mobile bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none z-10 lg:hidden" />

    </section>
  );
}
