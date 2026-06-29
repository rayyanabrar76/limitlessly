"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

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

  return (
    <main className="bg-neutral-950 min-h-screen text-neutral-100">

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-neutral-600"></span>
              <p className="text-xs text-neutral-500 uppercase tracking-widest font-medium">Get In Touch</p>
              <span className="w-6 h-px bg-neutral-600"></span>
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold mb-6 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Book a Call
            </h1>
            <p className="text-neutral-400 max-w-xl mx-auto text-lg leading-relaxed">
              Tell us about your platform and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left - Info */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-white">What happens next?</h2>
                <div className="flex flex-col gap-7">
                  {[
                    { step: "01", title: "You tell us the vision", desc: "Share your idea, budget, and what you're trying to build." },
                    { step: "02", title: "We map the path", desc: "A free strategy call within 24 hours to scope and architect it." },
                    { step: "03", title: "We start building", desc: "Once aligned, we get straight to designing and engineering your platform." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <span className="text-2xl font-bold text-neutral-700 shrink-0">{item.step}</span>
                      <div>
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="text-sm text-neutral-400 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
                <h3 className="font-bold text-white">Quick Info</h3>
                <div className="flex flex-col gap-3 divide-y divide-white/10">
                  <div className="flex items-center gap-3 pb-3">
                    <span className="text-neutral-400 text-sm">Response time</span>
                    <span className="text-white text-sm ml-auto font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3 py-3">
                    <span className="text-neutral-400 text-sm">Engagement</span>
                    <span className="text-white text-sm ml-auto font-medium">Project or monthly</span>
                  </div>
                  <div className="flex items-center gap-3 pt-3">
                    <span className="text-neutral-400 text-sm">Timeline</span>
                    <span className="text-white text-sm ml-auto font-medium">From 2 weeks</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              {submitted ? (
                <div className="text-center py-24 bg-white/5 border border-white/10 rounded-2xl animate-in fade-in zoom-in duration-500">
                  <p className="text-5xl mb-6 text-white">✓</p>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-neutral-400">Thank you for reaching out. Check your inbox soon.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-neutral-400 hover:text-white transition-colors text-sm underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-neutral-900 border border-white/10 rounded-2xl p-8 flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm text-neutral-300 font-medium">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm text-neutral-300 font-medium">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-neutral-300 font-medium">Budget Range</label>
                    <select
                      name="budget"
                      required
                      value={form.budget}
                      onChange={handleChange}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all cursor-pointer text-sm"
                    >
                      <option value="" disabled className="bg-neutral-900 text-neutral-400">Select your budget</option>
                      <option value="under-10k" className="bg-neutral-900">Under $10k</option>
                      <option value="10k-25k" className="bg-neutral-900">$10k - $25k</option>
                      <option value="25k-50k" className="bg-neutral-900">$25k - $50k</option>
                      <option value="50k+" className="bg-neutral-900">$50k+</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-neutral-300 font-medium">Tell us about your project</label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your vision..."
                      rows={5}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all resize-none text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-white text-neutral-900 font-semibold py-4 rounded-full hover:bg-neutral-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
