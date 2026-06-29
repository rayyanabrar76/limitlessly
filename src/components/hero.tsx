"use client";

import { useState } from "react";
import {
  SiOpenai,
  SiNextdotjs,
  SiTypescript,
  SiStripe,
  SiPostgresql,
  SiVercel,
} from "react-icons/si";

const tech = [SiOpenai, SiNextdotjs, SiTypescript, SiPostgresql, SiStripe, SiVercel];

export default function Hero() {
  const [pos, setPos] = useState({ x: 50, y: 32 });

  return (
    <section
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({
          x: ((e.clientX - r.left) / r.width) * 100,
          y: ((e.clientY - r.top) / r.height) * 100,
        });
      }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 px-6"
    >
      {/* ── Masked grid ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 65% 55% at 50% 38%, #000 55%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 55% at 50% 38%, #000 55%, transparent 100%)",
        }}
      />

      {/* ── Top light beam ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-170 h-85 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(139,92,246,0.20), transparent 70%)",
        }}
      />

      {/* ── Ambient gradient orbs ── */}
      <div className="absolute top-[14%] left-1/2 -translate-x-1/2 w-225 h-155 z-0 pointer-events-none">
        <div className="absolute left-4 top-0 w-110 h-110 rounded-full bg-indigo-600/25 blur-[130px] animate-glow-drift-a" />
        <div className="absolute right-4 top-12 w-110 h-110 rounded-full bg-fuchsia-600/20 blur-[130px] animate-glow-drift-b" />
        <div className="absolute left-1/3 bottom-0 w-95 h-95 rounded-full bg-violet-600/20 blur-[130px] animate-glow-drift-a" />
      </div>

      {/* ── Mouse spotlight ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(560px circle at ${pos.x}% ${pos.y}%, rgba(139,92,246,0.12), transparent 42%)`,
        }}
      />

      {/* ── Film grain ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ── Top + bottom fades ── */}
      <div className="absolute top-0 inset-x-0 h-40 z-0 bg-linear-to-b from-neutral-950 via-neutral-950/70 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 z-0 bg-linear-to-t from-neutral-950 to-transparent pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center pt-28 pb-20">

        {/* Announcement pill */}
        <a
          href="/portfolio"
          className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur px-4 py-1.5 text-xs font-medium text-neutral-300 mb-9 hover:border-white/20 hover:bg-white/10 transition-colors animate-rise"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Now taking on new founders for 2026
          <span className="text-neutral-500 group-hover:translate-x-0.5 transition-transform">→</span>
        </a>

        {/* Headline */}
        <h1
          className="text-[clamp(40px,7.2vw,84px)] font-black text-white leading-[0.95] tracking-tighter mb-7 animate-rise"
          style={{ animationDelay: "0.08s" }}
        >
          The studio behind
          <br />
          tomorrow&apos;s{" "}
          <span
            className="bg-clip-text text-transparent animate-text-shimmer"
            style={{
              backgroundImage:
                "linear-gradient(110deg, #a5b4fc 20%, #d8b4fe 40%, #f5d0fe 50%, #d8b4fe 60%, #a5b4fc 80%)",
            }}
          >
            AI platforms
          </span>
          .
        </h1>

        {/* Subtext */}
        <p
          className="text-lg text-neutral-400 max-w-2xl leading-relaxed mb-10 animate-rise"
          style={{ animationDelay: "0.18s" }}
        >
          We design and engineer full-scale AI SaaS products — from the first
          idea to millions of users. For ambitious founders building what&apos;s next.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 mb-16 animate-rise"
          style={{ animationDelay: "0.28s" }}
        >
          <div className="relative">
            <div className="absolute -inset-0.75 rounded-full bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500 blur-md opacity-60 animate-glow-pulse" />
            <a
              href="/contact"
              className="relative group flex items-center gap-3 bg-white text-neutral-900 font-semibold text-sm pl-6 pr-2.5 py-3 rounded-full hover:bg-neutral-200 transition-all duration-200"
            >
              Book a Call
              <span className="w-7 h-7 bg-neutral-900 rounded-full flex items-center justify-center text-white text-xs shrink-0 group-hover:rotate-45 transition-transform duration-200">↗</span>
            </a>
          </div>
          <a
            href="/portfolio"
            className="flex items-center gap-2 border border-white/15 text-white font-semibold text-sm px-6 py-3 rounded-full hover:border-white/30 hover:bg-white/5 transition-all duration-200 backdrop-blur"
          >
            View our work
          </a>
        </div>

        {/* Tech trust row */}
        <div className="animate-rise" style={{ animationDelay: "0.4s" }}>
          <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-600 mb-6">
            Built on a modern AI-native stack
          </p>
          <div className="flex items-center justify-center gap-7 sm:gap-10">
            {tech.map((Icon, i) => (
              <Icon
                key={i}
                className="text-neutral-600 hover:text-neutral-300 transition-colors duration-300"
                size={26}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
