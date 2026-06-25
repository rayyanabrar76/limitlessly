"use client";

import { useState } from "react";
import { X } from "lucide-react";

const TEXT =
  "Limited Offer — Free Visual Sample for Your Idea  ✦  Any digital idea — we build a real prototype in days  ✦  No commitment needed  ✦  Great opportunity to see your idea come alive  ✦  Message us to get started  ✦  ";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const items = Array(6).fill(TEXT);

  return (
    <div className="fixed top-0 left-0 right-0 z-[70] h-9 flex items-center overflow-hidden bg-neutral-950 border-b border-white/6">
      <div className="flex-1 overflow-hidden">
        <div className="flex animate-marquee-bar whitespace-nowrap">
          {items.map((t, i) => (
            <span
              key={i}
              className="inline-block text-[11px] font-medium text-white/90 tracking-wide"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss announcement"
        className="shrink-0 px-3 h-full flex items-center text-white/50 hover:text-white transition-colors"
      >
        <X size={13} />
      </button>
    </div>
  );
}
