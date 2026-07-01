"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { CalendarClock, MessageSquare, Compass, Rocket, Check, User, Mail, ArrowUpRight, Clock, Repeat } from "lucide-react";

const CALENDLY = "https://calendly.com/rayyanabrar76/30min";

const steps = [
  { Icon: MessageSquare, title: "You share the vision", desc: "Tell us your idea and what you're building." },
  { Icon: Compass, title: "We map the path", desc: "A free strategy call within 24 hours to scope it." },
  { Icon: Rocket, title: "We start building", desc: "Once aligned, we engineer your platform." },
];

const quickInfo = [
  { Icon: Clock, label: "Response time", value: "Within 24 hours" },
  { Icon: Repeat, label: "Engagement", value: "Project or monthly" },
  { Icon: CalendarClock, label: "Timeline", value: "From 2 weeks" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_1mmyrpk",
        "template_7j1aj1i",
        { from_name: form.name, from_email: form.email, message: form.message },
        { publicKey: "BUS00ZVP7fVGfsSdb" }
      );
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputBase =
    "w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-white/25 focus:outline-none focus:border-indigo-400/60 focus:bg-white/[0.07] focus:ring-4 focus:ring-indigo-500/10 transition-all text-sm";

  return (
    <main className="bg-neutral-950 min-h-screen text-neutral-100 overflow-hidden">
      <section className="relative pt-40 pb-24 px-6">
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-100 z-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, rgba(99,102,241,0.18), transparent 70%)" }} />

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur px-4 py-1.5 mb-7">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-neutral-300">Available for new founders</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-5">
              Let&apos;s build{" "}
              <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                your platform
              </span>
              .
            </h1>
            <p className="text-neutral-400 max-w-xl mx-auto text-lg leading-relaxed">
              Book a call or send a message — either way, we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* Left */}
            <div className="flex flex-col gap-8">
              {/* Calendly card */}
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-3xl p-px bg-linear-to-b from-indigo-500/40 to-transparent block"
              >
                <div className="rounded-3xl bg-neutral-900 p-6 flex items-center gap-4 hover:bg-neutral-900/70 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center shrink-0">
                    <CalendarClock size={22} className="text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-bold">Book a 20-min strategy call</p>
                    <p className="text-sm text-neutral-400 mt-0.5">Free, no pitch — we&apos;ll pressure-test your idea.</p>
                  </div>
                  <span className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-neutral-900 group-hover:border-white transition-all">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </a>

              {/* Steps */}
              <div>
                <h2 className="text-lg font-bold mb-6 text-white">What happens next?</h2>
                <div className="flex flex-col gap-6">
                  {steps.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0">
                        <item.Icon size={17} className="text-indigo-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">{item.title}</p>
                        <p className="text-sm text-neutral-400 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick info */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-1 divide-y divide-white/10">
                {quickInfo.map((q) => (
                  <div key={q.label} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                    <q.Icon size={15} className="text-neutral-500" />
                    <span className="text-neutral-400 text-sm">{q.label}</span>
                    <span className="text-white text-sm ml-auto font-medium">{q.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="relative">
              <div className="absolute -inset-6 bg-indigo-600/10 blur-3xl rounded-[2.5rem] pointer-events-none" />
              {submitted ? (
                <div className="relative flex flex-col items-center justify-center text-center py-28 border border-white/10 rounded-3xl bg-neutral-900/80 backdrop-blur-xl">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-6">
                    <Check size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message sent!</h3>
                  <p className="text-neutral-400 text-sm mb-8">We&apos;ll be in touch within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-neutral-400 hover:text-white transition-colors text-sm underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="relative rounded-3xl p-px bg-linear-to-b from-white/20 via-white/[0.06] to-transparent">
                  <form onSubmit={handleSubmit} className="rounded-3xl bg-neutral-900/80 backdrop-blur-xl p-8 md:p-9 flex flex-col gap-5">
                    <div>
                      <p className="text-lg font-bold text-white">Send us a message</p>
                      <p className="text-sm text-neutral-500 mt-1">Prefer to write? Tell us what you&apos;re building.</p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm text-neutral-300 font-medium">Your Name</label>
                      <div className="relative">
                        <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
                        <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="John Doe" className={inputBase} />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm text-neutral-300 font-medium">Email Address</label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
                        <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" className={inputBase} />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm text-neutral-300 font-medium">Tell us about your project</label>
                      <textarea
                        name="message"
                        required
                        value={form.message}
                        onChange={handleChange}
                        placeholder="What are you building? Share your idea, timeline, and goals..."
                        rows={5}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/25 focus:outline-none focus:border-indigo-400/60 focus:bg-white/[0.07] focus:ring-4 focus:ring-indigo-500/10 transition-all resize-none text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="group flex items-center justify-center gap-2.5 bg-white text-neutral-900 font-semibold py-4 rounded-full hover:bg-neutral-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                    >
                      {loading ? "Sending..." : (
                        <>
                          Send Message
                          <span className="w-6 h-6 bg-neutral-900 rounded-full flex items-center justify-center text-white text-xs group-hover:translate-x-0.5 transition-transform">→</span>
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-neutral-500">We reply within 24 hours — no spam, ever.</p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
