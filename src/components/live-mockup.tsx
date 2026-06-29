"use client";

import { useEffect, useState, useRef } from "react";
import { LayoutDashboard, Users, FolderOpen, BarChart3, Settings, Plus, Bell } from "lucide-react";

const STEPS = [
  { x: 85, y: 78,  target: "dash" },
  { x: 85, y: 116, target: "clients" },
  { x: 85, y: 116, target: "clients-click" },
  { x: 301, y: 108, target: "card-0" },
  { x: 535, y: 108, target: "card-1" },
  { x: 769, y: 108, target: "card-2" },
  { x: 535, y: 228, target: "chart" },
  { x: 835, y: 32,  target: "button" },
];

const NAV = [
  { id: "dash",     Icon: LayoutDashboard, label: "Dashboard" },
  { id: "clients",  Icon: Users,           label: "Clients"   },
  { id: "projects", Icon: FolderOpen,      label: "Projects"  },
  { id: "analytics",Icon: BarChart3,       label: "Analytics" },
];

const CARDS = [
  { id: "card-0", label: "Total Revenue",    value: "$48,200", badge: "+12% this month" },
  { id: "card-1", label: "Active Projects",  value: "12",      badge: "+3 new"          },
  { id: "card-2", label: "Satisfaction",     value: "98%",     badge: "+2% avg"         },
];

const BARS = [30, 55, 42, 68, 50, 85, 62, 90, 45, 73, 68, 80];

export default function LiveMockup() {
  const [step, setStep] = useState(0);
  const [ripple, setRipple] = useState(false);
  const [scale, setScale] = useState(1);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onResize() {
      if (wrapRef.current) {
        const w = wrapRef.current.offsetWidth;
        setScale(Math.min(1, w / 900));
      }
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setStep(s => (s + 1) % STEPS.length), 1500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const t = STEPS[step].target;
    if (t.includes("click") || t === "button") {
      const id = setTimeout(() => {
        setRipple(true);
        setTimeout(() => setRipple(false), 450);
      }, 750);
      return () => clearTimeout(id);
    }
  }, [step]);

  const { x, y, target } = STEPS[step];

  return (
    <section className="py-24 bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1 mb-5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[11px] font-semibold text-green-400 uppercase tracking-widest">Live Demo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.05] mb-3">
            Your Idea<br />
            <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Comes Alive</span>
          </h2>
          <p className="text-neutral-400 max-w-sm mx-auto text-sm leading-relaxed">
            We turn your idea into a fully interactive prototype — see your product working before a line of production code is written.
          </p>
        </div>

        {/* Mockup wrapper */}
        <div className="relative mx-auto max-w-[900px]">

          {/* Ambient glow */}
          <div className="absolute -inset-8 rounded-3xl bg-linear-to-tr from-indigo-500/20 via-sky-500/10 to-fuchsia-500/20 blur-3xl pointer-events-none" />

          {/* Outer box controlling height */}
          <div
            ref={wrapRef}
            className="relative"
            style={{ height: `${540 * scale}px`, overflow: "hidden" }}
          >
            {/* Inner 900 × 540 window, scaled to fit */}
            <div
              style={{
                width: 900,
                height: 540,
                transformOrigin: "top left",
                transform: `scale(${scale})`,
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden border border-neutral-200/80 shadow-2xl shadow-black/12">

                {/* Browser chrome */}
                <div className="h-9 bg-neutral-100 border-b border-neutral-200 flex items-center px-4 gap-3 shrink-0">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/90" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/90" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/90" />
                  </div>
                  <div className="flex-1 max-w-[280px] mx-auto h-5 bg-white rounded border border-neutral-200 flex items-center justify-center">
                    <span className="text-[10px] text-neutral-400 select-none">app.yourproject.io/dashboard</span>
                  </div>
                </div>

                {/* App UI — 900 × 502 */}
                <div className="relative bg-[#f8fafc] select-none" style={{ height: 501 }}>

                  {/* Animated cursor */}
                  <div
                    className="absolute z-50 pointer-events-none"
                    style={{
                      transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
                      transform: `translate(${x - 14}px, ${y - 14}px)`,
                    }}
                  >
                    <div className="relative w-7 h-7">
                      <div
                        className={`absolute inset-0 rounded-full border-2 border-neutral-800 bg-white/70 backdrop-blur-sm transition-transform duration-150 ${
                          ripple ? "scale-75" : "scale-100"
                        }`}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-neutral-900" />
                      </div>
                      {ripple && (
                        <div className="absolute -inset-1.5 rounded-full border border-indigo-400/60 animate-ping" />
                      )}
                    </div>
                  </div>

                  {/* Sidebar — 170 px */}
                  <div className="absolute inset-y-0 left-0 w-[170px] bg-neutral-900 flex flex-col">
                    <div className="flex items-center gap-2 px-4 pt-4 pb-5">
                      <div className="w-6 h-6 rounded-md bg-indigo-500 flex items-center justify-center shrink-0">
                        <span className="text-white text-[10px] font-black">L</span>
                      </div>
                      <span className="text-white text-sm font-bold tracking-tight">MyProject</span>
                    </div>

                    <nav className="flex-1 px-2 space-y-0.5">
                      {NAV.map(({ id, Icon, label }) => {
                        const hovered = target.startsWith(id);
                        const active  = id === "dash";
                        return (
                          <div
                            key={id}
                            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all duration-300 ${
                              hovered
                                ? "bg-indigo-500 text-white shadow-lg shadow-indigo-900/30"
                                : active
                                ? "bg-white/10 text-white"
                                : "text-white/40"
                            }`}
                          >
                            <Icon size={13} />
                            <span className="text-xs font-medium">{label}</span>
                          </div>
                        );
                      })}
                    </nav>

                    <div className="px-2 pb-4">
                      <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-white/20">
                        <Settings size={13} />
                        <span className="text-xs font-medium">Settings</span>
                      </div>
                    </div>
                  </div>

                  {/* Main — right of sidebar */}
                  <div className="absolute inset-y-0 left-[170px] right-0 p-5 overflow-hidden flex flex-col gap-4">

                    {/* Top bar */}
                    <div className="flex items-center justify-between shrink-0">
                      <div>
                        <h3 className="text-sm font-bold text-neutral-900">Dashboard</h3>
                        <p className="text-[11px] text-neutral-400">Welcome back, Rayyan</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center border border-neutral-200">
                          <Bell size={11} className="text-neutral-500" />
                        </div>
                        <button
                          className={`flex items-center gap-1.5 text-[11px] font-semibold text-white pl-3 pr-2 py-1.5 rounded-lg transition-all duration-300 ${
                            target === "button"
                              ? "bg-indigo-500 shadow-lg shadow-indigo-200 scale-105"
                              : "bg-neutral-900"
                          }`}
                        >
                          <Plus size={10} />
                          New Project
                        </button>
                      </div>
                    </div>

                    {/* Stat cards */}
                    <div className="grid grid-cols-3 gap-3 shrink-0">
                      {CARDS.map(c => (
                        <div
                          key={c.id}
                          className={`rounded-xl p-3.5 border transition-all duration-300 ${
                            target === c.id
                              ? "bg-white border-indigo-200 shadow-lg shadow-indigo-50 -translate-y-0.5"
                              : "bg-white border-neutral-200 shadow-sm"
                          }`}
                        >
                          <p className="text-[10px] text-neutral-400 mb-1 font-medium">{c.label}</p>
                          <p className="text-lg font-black text-neutral-900 tracking-tight leading-none mb-1">{c.value}</p>
                          <span className="text-[10px] text-green-600 font-semibold">{c.badge}</span>
                        </div>
                      ))}
                    </div>

                    {/* Chart */}
                    <div
                      className={`rounded-xl border bg-white p-4 transition-all duration-300 shrink-0 ${
                        target === "chart"
                          ? "border-indigo-200 shadow-lg shadow-indigo-50"
                          : "border-neutral-200 shadow-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-[11px] font-semibold text-neutral-700">Revenue Overview</p>
                        <span className="text-[10px] text-neutral-400">2025</span>
                      </div>
                      <div className="flex items-end gap-1.5 h-14">
                        {BARS.map((h, i) => (
                          <div
                            key={i}
                            className={`flex-1 rounded-t-sm transition-all duration-500 ${
                              target === "chart" && (i === 5 || i === 7 || i === 11)
                                ? "bg-indigo-500"
                                : target === "chart"
                                ? "bg-indigo-200"
                                : "bg-neutral-100"
                            }`}
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between mt-1.5">
                        {["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map(m => (
                          <span key={m} className="text-[9px] text-neutral-300">{m}</span>
                        ))}
                      </div>
                    </div>

                    {/* Activity */}
                    <div className="rounded-xl border border-neutral-200 bg-white shadow-sm p-3.5 flex-1 min-h-0">
                      <p className="text-[11px] font-semibold text-neutral-700 mb-2">Recent Activity</p>
                      <div className="space-y-1">
                        {[
                          { dot: "bg-green-400",  b: "Project created",   rest: ' "Limitless Website"',      time: "2m" },
                          { dot: "bg-blue-400",   b: "Client approved",   rest: " design proposal",          time: "1h" },
                          { dot: "bg-violet-400", b: "Payment received",  rest: " $2,400 from Acme Corp.",   time: "3h" },
                        ].map((a, i) => (
                          <div key={i} className="flex items-center gap-2 py-1.5 px-2 rounded-lg hover:bg-neutral-50 transition-colors">
                            <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${a.dot}`} />
                            <p className="text-[11px] text-neutral-600 flex-1 min-w-0 truncate">
                              <span className="font-semibold">{a.b}</span>{a.rest}
                            </p>
                            <span className="text-[10px] text-neutral-400 shrink-0">{a.time} ago</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA below mockup */}
          <div className="mt-10 text-center">
            <p className="text-sm text-neutral-400 mb-4">
              Want to see your idea like this? <span className="font-semibold text-white">We&apos;ll build you a live prototype.</span>
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-white text-neutral-900 font-semibold text-sm pl-6 pr-2.5 py-2.5 rounded-full hover:bg-neutral-200 transition-all duration-200"
            >
              Book a Call
              <span className="w-7 h-7 bg-neutral-900/15 rounded-full flex items-center justify-center text-xs shrink-0">↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
