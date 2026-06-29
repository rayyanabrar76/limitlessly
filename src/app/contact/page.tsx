"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { MessageSquare, Compass, Rocket, Clock, Repeat, CalendarClock, Check } from "lucide-react";

const steps = [
  { Icon: MessageSquare, title: "You share the vision", desc: "Tell us your idea, budget, and what you're trying to build." },
  { Icon: Compass, title: "We map the path", desc: "A free strategy call within 24 hours to scope and architect it." },
  { Icon: Rocket, title: "We start building", desc: "Once aligned, we get straight to designing and engineering your platform." },
];

const quickInfo = [
  { Icon: Clock, label: "Response time", value: "Within 24 hours" },
  { Icon: Repeat, label: "Engagement", value: "Project or monthly" },
  { Icon: CalendarClock, label: "Timeline", value: "From 2 weeks" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      budget: form.budget,
      message: form.message,
    };

    try {
      await emailjs.send(
        "service_1mmyrpk",
        "template_7j1aj1i",
        templateParams,
        { publicKey: "BUS00ZVP7fVGfsSdb" }
      );
      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-indigo-400/50 focus:bg-white/[0.07] transition-all text-sm";

  return (
    <main className="bg-neutral-950 min-h-screen text-neutral-100 overflow-hidden">

      <section className="relative pt-40 pb-24 px-6">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-100 z-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top, rgba(99,102,241,0.18), transparent 70%)" }} />

        <div className="relative max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur px-4 py-1.5 mb-7">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-neutral-300">Available for new founders</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-[1.02] mb-5">
              Let&apos;s build{" "}
              <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                your platform
              </span>
              .
            </h1>
            <p className="text-neutral-400 max-w-xl mx-auto text-lg leading-relaxed">
              Tell us what you&apos;re building and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

            {/* Left - Info */}
            <div className="lg:col-span-2 flex flex-col gap-8">
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

            {/* Right - Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="text-center py-24 px-6 bg-white/5 border border-white/10 rounded-3xl">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
                    <Check size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message sent!</h3>
                  <p className="text-neutral-400">Thanks for reaching out — we&apos;ll be in touch within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-neutral-400 hover:text-white transition-colors text-sm underline underline-offset-4"
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
                        <label className="text-sm text-neutral-300 font-medium">Email Address</label>
                        <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="john@example.com" className={inputClass} />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm text-neutral-300 font-medium">Budget Range</label>
                      <select name="budget" required value={form.budget} onChange={handleChange} className={`${inputClass} cursor-pointer`}>
                        <option value="" disabled className="bg-neutral-900 text-neutral-400">Select your budget</option>
                        <option value="under-10k" className="bg-neutral-900">Under $10k</option>
                        <option value="10k-25k" className="bg-neutral-900">$10k - $25k</option>
                        <option value="25k-50k" className="bg-neutral-900">$25k - $50k</option>
                        <option value="50k+" className="bg-neutral-900">$50k+</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm text-neutral-300 font-medium">Tell us about your project</label>
                      <textarea name="message" required value={form.message} onChange={handleChange} placeholder="Describe your vision..." rows={5} className={`${inputClass} resize-none`} />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="group flex items-center justify-center gap-2.5 bg-white text-neutral-900 font-semibold py-4 rounded-full hover:bg-neutral-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                    >
                      {loading ? "Sending..." : "Send Message"}
                      {!loading && (
                        <span className="w-6 h-6 bg-neutral-900 rounded-full flex items-center justify-center text-white text-xs group-hover:rotate-45 transition-transform">↗</span>
                      )}
                    </button>
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
