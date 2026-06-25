"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const steps = [
  { num: "01", title: "Fill out the form", desc: "Tell us your project, budget, and vision." },
  { num: "02", title: "We reach out", desc: "We reply within 24 hours to discuss details." },
  { num: "03", title: "We start building", desc: "Once aligned, we get straight to work." },
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

  return (
    <section id="contact" className="bg-neutral-950 py-28 px-6 relative overflow-hidden">

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(circle, #818cf8, transparent)" }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #38bdf8, transparent)" }} />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* Left — Info */}
        <div>
          <p className="text-white/30 text-xs uppercase tracking-[0.25em] font-medium mb-6">Get In Touch</p>

          <h2
            className="text-5xl md:text-6xl font-black text-white leading-[0.88] tracking-tighter mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Start Your
            <br />
            <span className="text-white/20">Project.</span>
          </h2>

          {/* Steps */}
          <div className="flex flex-col gap-7 mb-12">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-5 items-start">
                <span className="text-white/20 font-bold text-sm pt-0.5 shrink-0 w-6">{s.num}</span>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{s.title}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div>
              <p className="text-3xl font-black text-white tracking-tight">24h</p>
              <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] mt-1">Response</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white tracking-tight">$299</p>
              <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] mt-1">Starting</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white tracking-tight">3–21</p>
              <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] mt-1">Day Delivery</p>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div>
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center h-full py-20 border border-white/10 rounded-2xl bg-white/3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white text-xl mb-6">✓</div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-white/40 text-sm mb-8">We&apos;ll be in touch within 24 hours.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-white/30 hover:text-white/60 text-sm underline underline-offset-4 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-white/40 uppercase tracking-widest font-medium">Your Name</label>
                  <input
                    type="text" name="name" required value={form.name} onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-white/40 uppercase tracking-widest font-medium">Email</label>
                  <input
                    type="email" name="email" required value={form.email} onChange={handleChange}
                    placeholder="you@company.com"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-white/40 uppercase tracking-widest font-medium">Budget</label>
                <select
                  name="budget" required value={form.budget} onChange={handleChange}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-white/30 transition-all cursor-pointer text-sm appearance-none"
                >
                  <option value="" disabled className="bg-neutral-900">Select your budget</option>
                  <option value="299-499" className="bg-neutral-900">$299 – $499</option>
                  <option value="499-699" className="bg-neutral-900">$499 – $699</option>
                  <option value="699+" className="bg-neutral-900">$699+</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-white/40 uppercase tracking-widest font-medium">Project Details</label>
                <textarea
                  name="message" required value={form.message} onChange={handleChange}
                  placeholder="Describe your vision..."
                  rows={5}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:bg-white/8 transition-all resize-none text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-3 bg-white text-neutral-900 font-bold py-4 rounded-full hover:bg-neutral-100 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed mt-1 text-sm"
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    Send Message
                    <span className="w-6 h-6 bg-neutral-900 rounded-full flex items-center justify-center text-white text-xs">↗</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
