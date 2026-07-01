"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { MessageSquare, Compass, Rocket, Check, User, Mail } from "lucide-react";

const steps = [
  { Icon: MessageSquare, title: "You share the vision", desc: "Tell us your idea and what you're building." },
  { Icon: Compass, title: "We map the path", desc: "A free strategy call within 24 hours to scope it." },
  { Icon: Rocket, title: "We start building", desc: "Once aligned, we get straight to engineering your platform." },
];

const stats = [
  { value: "24h", label: "Response" },
  { value: "10+", label: "Platforms" },
  { value: "Global", label: "Founders" },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send("service_1mmyrpk", "template_7j1aj1i", {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      }, { publicKey: "BUS00ZVP7fVGfsSdb" });
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      console.error("EmailJS error:", err);
      const msg = err && typeof err === "object" && "text" in err
        ? (err as { text: string }).text
        : String(err);
      alert("EmailJS error: " + msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    "w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-white/25 focus:outline-none focus:border-indigo-400/60 focus:bg-white/[0.07] focus:ring-4 focus:ring-indigo-500/10 transition-all text-sm";

  return (
    <section id="contact" className="bg-neutral-950 py-32 px-6 relative overflow-hidden border-t border-white/10">

      {/* Ambient glows */}
      <div className="absolute -top-20 left-1/4 w-110 h-110 rounded-full bg-indigo-600/12 blur-[150px] pointer-events-none animate-glow-drift-a" />
      <div className="absolute bottom-0 right-1/4 w-95 h-95 rounded-full bg-fuchsia-600/10 blur-[150px] pointer-events-none animate-glow-drift-b" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* Left — Info */}
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium text-neutral-300">Available for new founders</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.92] tracking-tighter mb-10">
            Start your
            <br />
            <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent animate-text-shimmer" style={{ backgroundImage: "linear-gradient(110deg, #818cf8 20%, #c084fc 40%, #f0abfc 50%, #c084fc 60%, #818cf8 80%)" }}>
              AI platform.
            </span>
          </h2>

          {/* Steps */}
          <div className="flex flex-col gap-6 mb-10">
            {steps.map((s) => (
              <div key={s.title} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0">
                  <s.Icon size={17} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{s.title}</p>
                  <p className="text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-md">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-black text-white tracking-tight">{s.value}</p>
                <p className="text-[10px] text-neutral-500 uppercase tracking-[0.15em] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div className="relative">
          {/* Layered glow behind card */}
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
                className="text-neutral-400 hover:text-white text-sm underline underline-offset-4 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <div className="relative rounded-3xl p-px bg-linear-to-b from-white/20 via-white/[0.06] to-transparent">
              <form onSubmit={handleSubmit} className="rounded-3xl bg-neutral-900/80 backdrop-blur-xl p-8 md:p-9 flex flex-col gap-5">
                <div>
                  <p className="text-lg font-bold text-white">Tell us what you&apos;re building</p>
                  <p className="text-sm text-neutral-500 mt-1">Free strategy call, no commitment.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-neutral-300 font-medium">Your Name</label>
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
                      <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="John Doe" className={inputBase} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-neutral-300 font-medium">Email</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
                      <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" className={inputBase} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-neutral-300 font-medium">Project Details</label>
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
                  disabled={isSubmitting}
                  className="group flex items-center justify-center gap-2.5 bg-white text-neutral-900 font-semibold py-4 rounded-full hover:bg-neutral-200 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed text-sm"
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send Message
                      <span className="w-6 h-6 bg-neutral-900 rounded-full flex items-center justify-center text-white text-xs group-hover:rotate-45 transition-transform">↗</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-neutral-500">
                  We reply within 24 hours — no spam, ever.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
