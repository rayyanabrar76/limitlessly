"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { MessageSquare, Compass, Rocket, Check } from "lucide-react";

const steps = [
  { Icon: MessageSquare, title: "You share the vision", desc: "Tell us your idea, budget, and what you're building." },
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
  const [form, setForm] = useState({ name: "", email: "", budget: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send("service_1mmyrpk", "template_7j1aj1i", {
        from_name: form.name,
        from_email: form.email,
        budget: form.budget,
        message: form.message,
      }, { publicKey: "BUS00ZVP7fVGfsSdb" });
      setSubmitted(true);
      setForm({ name: "", email: "", budget: "", message: "" });
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

  const inputClass =
    "bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/25 focus:outline-none focus:border-indigo-400/50 focus:bg-white/[0.07] transition-all text-sm";

  return (
    <section id="contact" className="bg-neutral-950 py-28 px-6 relative overflow-hidden border-t border-white/10">

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-110 h-110 rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-95 h-95 rounded-full bg-fuchsia-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* Left — Info */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <p className="text-xs text-neutral-400 uppercase tracking-[0.2em] font-medium">Get In Touch</p>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white leading-[0.95] tracking-tighter mb-10">
            Start your
            <br />
            <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">AI platform.</span>
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
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-black text-white tracking-tight">{s.value}</p>
                <p className="text-[10px] text-neutral-500 uppercase tracking-[0.15em] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div>
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-24 border border-white/10 rounded-3xl bg-white/5">
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
            <div className="relative">
              <div className="absolute -inset-px rounded-3xl bg-linear-to-b from-indigo-500/30 to-transparent pointer-events-none" />
              <form onSubmit={handleSubmit} className="relative bg-neutral-900 border border-white/10 rounded-3xl p-8 flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-neutral-300 font-medium">Your Name</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="John Doe" className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-neutral-300 font-medium">Email</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" className={inputClass} />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-neutral-300 font-medium">Budget</label>
                  <select name="budget" required value={form.budget} onChange={handleChange} className={`${inputClass} cursor-pointer appearance-none`}>
                    <option value="" disabled className="bg-neutral-900">Select your budget</option>
                    <option value="under-10k" className="bg-neutral-900">Under $10k</option>
                    <option value="10k-25k" className="bg-neutral-900">$10k - $25k</option>
                    <option value="25k-50k" className="bg-neutral-900">$25k - $50k</option>
                    <option value="50k+" className="bg-neutral-900">$50k+</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-neutral-300 font-medium">Project Details</label>
                  <textarea name="message" required value={form.message} onChange={handleChange} placeholder="Describe your vision..." rows={5} className={`${inputClass} resize-none`} />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex items-center justify-center gap-2.5 bg-white text-neutral-900 font-semibold py-4 rounded-full hover:bg-neutral-200 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed mt-1 text-sm"
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send Message
                      <span className="w-6 h-6 bg-neutral-900 rounded-full flex items-center justify-center text-white text-xs group-hover:rotate-45 transition-transform">↗</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
