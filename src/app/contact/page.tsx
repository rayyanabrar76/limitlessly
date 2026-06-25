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
        "service_dp4ba72",
        "template_ivmy9os",
        templateParams,
        "mkG8cTQ0vwWahC6JO"
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
    <main className="bg-white min-h-screen text-neutral-900">

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-neutral-400"></span>
              <p className="text-xs text-neutral-400 uppercase tracking-widest font-medium">Get In Touch</p>
              <span className="w-6 h-px bg-neutral-400"></span>
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold mb-6 text-neutral-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Start a Project
            </h1>
            <p className="text-neutral-500 max-w-xl mx-auto text-lg leading-relaxed">
              Tell us about your project and we will get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left - Info */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-neutral-900">What happens next?</h2>
                <div className="flex flex-col gap-7">
                  {[
                    { step: "01", title: "You fill out the form", desc: "Tell us about your project, budget, and goals." },
                    { step: "02", title: "We reach out", desc: "We get back to you within 24 hours to discuss details." },
                    { step: "03", title: "We start building", desc: "Once aligned, we get straight to work on your project." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <span className="text-2xl font-bold text-neutral-200 shrink-0">{item.step}</span>
                      <div>
                        <p className="font-semibold text-neutral-900">{item.title}</p>
                        <p className="text-sm text-neutral-500 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 flex flex-col gap-4">
                <h3 className="font-bold text-neutral-900">Quick Info</h3>
                <div className="flex flex-col gap-3 divide-y divide-neutral-100">
                  <div className="flex items-center gap-3 pb-3">
                    <span className="text-neutral-400 text-sm">Response time</span>
                    <span className="text-neutral-900 text-sm ml-auto font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3 py-3">
                    <span className="text-neutral-400 text-sm">Starting price</span>
                    <span className="text-neutral-900 text-sm ml-auto font-medium">$299</span>
                  </div>
                  <div className="flex items-center gap-3 pt-3">
                    <span className="text-neutral-400 text-sm">Delivery</span>
                    <span className="text-neutral-900 text-sm ml-auto font-medium">3-21 days</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              {submitted ? (
                <div className="text-center py-24 bg-neutral-50 border border-neutral-200 rounded-2xl animate-in fade-in zoom-in duration-500">
                  <p className="text-5xl mb-6 text-neutral-900">✓</p>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">Message Sent!</h3>
                  <p className="text-neutral-500">Thank you for reaching out. Check your inbox soon.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-neutral-400 hover:text-neutral-900 transition-colors text-sm underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col gap-6 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm text-neutral-600 font-medium">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 placeholder-neutral-300 focus:outline-none focus:border-neutral-400 focus:bg-white transition-all text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm text-neutral-600 font-medium">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 placeholder-neutral-300 focus:outline-none focus:border-neutral-400 focus:bg-white transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-neutral-600 font-medium">Budget Range</label>
                    <select
                      name="budget"
                      required
                      value={form.budget}
                      onChange={handleChange}
                      className="bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-400 focus:bg-white transition-all cursor-pointer text-sm"
                    >
                      <option value="" disabled className="bg-white text-neutral-400">Select your budget</option>
                      <option value="299-499" className="bg-white">$299 - $499</option>
                      <option value="499-699" className="bg-white">$499 - $699</option>
                      <option value="699+" className="bg-white">$699+</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-neutral-600 font-medium">Tell us about your project</label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your vision..."
                      rows={5}
                      className="bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 placeholder-neutral-300 focus:outline-none focus:border-neutral-400 focus:bg-white transition-all resize-none text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-neutral-900 text-white font-semibold py-4 rounded-full hover:bg-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
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
