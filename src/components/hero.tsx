import Image from "next/image";

const CHART = [35, 55, 42, 68, 50, 85, 62, 90];

export default function Hero() {
  return (
    <section className="min-h-screen bg-neutral-950 flex flex-col justify-end relative overflow-hidden pt-32">

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-neutral-950 to-transparent pointer-events-none z-10" />

      {/* Ambient glows — now drifting */}
      <div
        className="absolute top-20 right-32 w-125 h-125 rounded-full blur-3xl opacity-[0.09] pointer-events-none animate-glow-drift-a"
        style={{ background: "radial-gradient(circle, #818cf8, transparent 70%)" }}
      />
      <div
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full blur-3xl opacity-[0.07] pointer-events-none animate-glow-drift-b"
        style={{ background: "radial-gradient(circle, #38bdf8, transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.05] pointer-events-none animate-glow-drift-a"
        style={{ background: "radial-gradient(circle, #a78bfa, transparent 70%)", animationDelay: "5s" }}
      />

      {/* Large background icon */}
      <div className="absolute -right-15 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.04]">
        <Image
          src="/logo two.png"
          alt=""
          width={800}
          height={800}
          className="w-137.5 md:w-200 invert"
          quality={100}
          priority
        />
      </div>

      {/* ── Floating UI Fragments ── */}
      <div className="absolute inset-0 pointer-events-none z-5 select-none overflow-hidden">

        {/* 1 · Revenue stat – top right */}
        <div
          className="absolute top-[9%] right-[4%] hidden md:block animate-float-a"
          style={{ animationDelay: "0s" }}
        >
          <div className="rounded-2xl bg-white shadow-2xl shadow-black/30 p-4 w-44 border border-neutral-100/60">
            <p className="text-[10px] text-neutral-400 font-medium mb-1 tracking-widest uppercase">Revenue</p>
            <p className="text-xl font-black text-neutral-900 tracking-tight mb-1">$48,200</p>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold text-green-600">↑ +12%</span>
              <span className="text-[10px] text-neutral-400">this month</span>
            </div>
          </div>
        </div>

        {/* 2 · Project progress – top left */}
        <div
          className="absolute top-[13%] left-[3%] hidden lg:block animate-float-b"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="rounded-2xl bg-white shadow-2xl shadow-black/30 p-4 w-48 border border-neutral-100/60">
            <div className="flex items-center justify-between mb-2.5">
              <p className="text-[11px] font-bold text-neutral-800">Limitless Site</p>
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-sm shadow-green-300" />
            </div>
            <div className="w-full bg-neutral-100 rounded-full h-1.5 mb-2">
              <div className="h-1.5 bg-indigo-500 rounded-full" style={{ width: "80%" }} />
            </div>
            <p className="text-[10px] text-neutral-400">80% complete · 2 days left</p>
          </div>
        </div>

        {/* 3 · Mini chart – mid right */}
        <div
          className="absolute top-[40%] right-[3%] hidden md:block animate-float-c"
          style={{ animationDelay: "2.5s" }}
        >
          <div className="rounded-2xl bg-white shadow-2xl shadow-black/30 p-4 w-52 border border-neutral-100/60">
            <p className="text-[11px] font-bold text-neutral-800 mb-3">Analytics</p>
            <div className="flex items-end gap-1 h-12">
              {CHART.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{
                    height: `${h}%`,
                    backgroundColor:
                      i === 7 ? "#6366f1" : i === 5 ? "#a5b4fc" : "#e5e7eb",
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-1.5">
              <span className="text-[9px] text-neutral-300">Jan</span>
              <span className="text-[9px] text-neutral-300">Aug</span>
            </div>
          </div>
        </div>

        {/* 4 · Client review – mid left */}
        <div
          className="absolute top-[44%] left-[4%] hidden lg:block animate-float-d"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="rounded-2xl bg-white shadow-2xl shadow-black/30 p-4 w-48 border border-neutral-100/60">
            <div className="flex gap-0.5 mb-2">
              {[0, 1, 2, 3, 4].map((s) => (
                <span key={s} className="text-amber-400 text-sm leading-none">★</span>
              ))}
            </div>
            <p className="text-[11px] text-neutral-600 leading-relaxed mb-2.5">
              &ldquo;Exactly what we envisioned. Incredible work!&rdquo;
            </p>
            <p className="text-[10px] font-semibold text-neutral-400">— Sarah K.</p>
          </div>
        </div>

        {/* 5 · Notification – upper center */}
        <div
          className="absolute top-[17%] left-1/2 -translate-x-1/2 hidden xl:block animate-float-e"
          style={{ animationDelay: "3.5s" }}
        >
          <div className="rounded-2xl bg-white shadow-2xl shadow-black/30 px-4 py-3.5 w-56 border border-neutral-100/60">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-500 flex items-center justify-center shrink-0 text-sm">
                📩
              </div>
              <div>
                <p className="text-[11px] font-bold text-neutral-800">New Project Inquiry</p>
                <p className="text-[10px] text-neutral-400">Just now · via website</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pb-20 flex flex-col gap-10">

        {/* Label */}
        <div className="flex items-center gap-3">
          <span className="w-6 h-px bg-white/30"></span>
          <p className="text-white/40 text-xs uppercase tracking-[0.25em] font-medium">Web Design Studio</p>
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(60px,11vw,140px)] font-black text-white leading-[0.86] tracking-tighter">
          We Build
          <br />
          <span className="text-white/20">The Web</span>
          <br />
          You Deserve.
        </h1>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-0 justify-between pt-5 border-t border-white/8">
          <p className="text-white/45 text-base leading-relaxed max-w-sm">
            Custom e-commerce stores and websites for businesses
            ready to grow. Fast, modern, built to convert.
          </p>

          <div className="flex items-center gap-3">
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
        </div>

        {/* Stats */}
        <div className="flex items-center gap-8 pt-5 border-t border-white/8">
          <div>
            <p className="text-2xl font-black text-white tracking-tight">10+</p>
            <p className="text-[10px] text-white/30 mt-0.5 uppercase tracking-[0.15em]">Projects Built</p>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div>
            <p className="text-2xl font-black text-white tracking-tight">100%</p>
            <p className="text-[10px] text-white/30 mt-0.5 uppercase tracking-[0.15em]">Satisfaction</p>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div>
            <p className="text-2xl font-black text-white tracking-tight">3–21</p>
            <p className="text-[10px] text-white/30 mt-0.5 uppercase tracking-[0.15em]">Day Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
}
