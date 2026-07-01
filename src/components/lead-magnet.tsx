"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FileText, Check, Download, Mail } from "lucide-react";

const PDF = "/ai-saas-feasibility-checklist.pdf";

const included = [
  "21-point go / no-go validation checklist",
  "The AI-angle test — real value vs. gimmick",
  "Technical feasibility & hidden-cost red flags",
  "A scoring system: build, sharpen, or wait",
];

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.send("service_1mmyrpk", "template_7j1aj1i", {
        from_name: "Lead Magnet — AI SaaS Checklist",
        from_email: email,
        message: `New download request for the AI SaaS Feasibility Checklist from ${email}`,
      }, { publicKey: "BUS00ZVP7fVGfsSdb" });
    } catch (err) {
      console.error("EmailJS error:", err);
      // Non-blocking — still let them grab the guide.
    } finally {
      setStatus("done");
    }
  };

  return (
    <section id="checklist" className="relative py-28 px-6 bg-neutral-950 border-t border-white/10 overflow-hidden">
      <div className="absolute top-10 left-1/3 w-110 h-110 rounded-full bg-indigo-600/10 blur-[150px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left — pitch */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-6">
            <FileText size={13} className="text-indigo-400" />
            <span className="text-xs font-medium text-neutral-300 uppercase tracking-wider">Free Guide · PDF</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.05] tracking-tight mb-5">
            Don&apos;t spend{" "}
            <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">$50k</span>{" "}
            on the wrong AI idea.
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-lg">
            The AI SaaS Feasibility Checklist — 21 questions to validate your idea before you
            write a line of code. Free, instant download.
          </p>

          <ul className="flex flex-col gap-3">
            {included.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-neutral-300">
                <span className="w-5 h-5 rounded-full bg-indigo-500/15 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-indigo-400" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — capture */}
        <div className="relative">
          <div className="absolute -inset-6 bg-indigo-600/10 blur-3xl rounded-[2.5rem] pointer-events-none" />
          <div className="relative rounded-3xl p-px bg-linear-to-b from-white/20 via-white/[0.06] to-transparent">
            <div className="rounded-3xl bg-neutral-900/80 backdrop-blur-xl p-8 md:p-9">
              {status === "done" ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
                    <Check size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Your checklist is ready</h3>
                  <p className="text-neutral-400 text-sm mb-8">Tap below to download your PDF.</p>
                  <a
                    href={PDF}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 bg-white text-neutral-900 font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-neutral-200 transition-all"
                  >
                    <Download size={16} />
                    Download the checklist
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <p className="text-lg font-bold text-white">Get the free checklist</p>
                    <p className="text-sm text-neutral-500 mt-1">Enter your email — the PDF is yours instantly.</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-neutral-300 font-medium">Email address</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-white/25 focus:outline-none focus:border-indigo-400/60 focus:bg-white/[0.07] focus:ring-4 focus:ring-indigo-500/10 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group flex items-center justify-center gap-2.5 bg-white text-neutral-900 font-semibold py-4 rounded-full hover:bg-neutral-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    {status === "loading" ? "Getting it ready..." : (
                      <>
                        Send me the checklist
                        <span className="w-6 h-6 bg-neutral-900 rounded-full flex items-center justify-center text-white text-xs group-hover:translate-x-0.5 transition-transform">→</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-neutral-500">
                    Occasional AI-build insights. No spam, unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
