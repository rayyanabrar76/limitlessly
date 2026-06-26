"use client";

import { useEffect, useState, useRef } from "react";

type Point = {
  x: number;       // % from left of mockup
  y: number;       // % from top of mockup
  pause: number;   // ms to wait here
  click?: boolean;
};

/*
  Waypoints are tuned to the exact pixel positions of
  UI elements inside each h-72 (288 px) mockup.
*/
const SCRIPTS: Record<string, Point[]> = {

  /* APS — dark industrial e-commerce
     Nav row ~7% y | buttons ~73% y | KVA stat ~80% y */
  ecommerce: [
    { x: 44, y: 7,  pause: 500 },              // "Products ▾" nav hover
    { x: 44, y: 7,  pause: 400, click: true }, // click Products ▾
    { x: 13, y: 73, pause: 600 },              // drift to VIEW CATALOG
    { x: 13, y: 73, pause: 700, click: true }, // click it
    { x: 82, y: 80, pause: 800 },              // inspect 3000 KVA stat
    { x: 34, y: 73, pause: 500 },              // hover CONTACT US
    { x: 34, y: 73, pause: 700, click: true }, // click CONTACT US
    { x: 20, y: 92, pause: 500 },              // glance partner logos
  ],

  /* Chef Aboud — warm editorial restaurant site
     Nav ~8% y | LIVE KITCHEN badge ~22% y | EXPLORE btn ~87% y */
  editorial: [
    { x: 32, y: 8,  pause: 500 },              // "Catering" nav hover
    { x: 44, y: 8,  pause: 400 },              // "Menu" nav hover
    { x: 44, y: 8,  pause: 500, click: true }, // click Menu
    { x: 12, y: 22, pause: 600 },              // LIVE KITCHEN badge
    { x: 22, y: 84, pause: 600 },              // "Authentic Flavors" text
    { x: 77, y: 40, pause: 600 },              // "Crafting Memories" card
    { x: 77, y: 87, pause: 700 },              // hover EXPLORE THE MENU
    { x: 77, y: 87, pause: 800, click: true }, // click it
    { x: 91, y: 8,  pause: 500 },              // EN/AR/DE switcher
    { x: 93, y: 8,  pause: 400, click: true }, // click AR
  ],

  /* StorePanel — white admin dashboard
     Sidebar items: y 22/31/40/49/58% | Add Product btn ~14% y right side
     Stats row ~37% y | Orders table 56/67/77% y */
  dashboard: [
    { x: 18, y: 31, pause: 500, click: true }, // Products sidebar
    { x: 85, y: 14, pause: 500 },              // hover + Add Product
    { x: 85, y: 14, pause: 700, click: true }, // click it
    { x: 55, y: 37, pause: 600 },              // Total Orders card
    { x: 70, y: 37, pause: 500 },              // Revenue card
    { x: 18, y: 40, pause: 400, click: true }, // Orders sidebar
    { x: 68, y: 57, pause: 600 },              // Order #042 row
    { x: 68, y: 57, pause: 500, click: true }, // click order
    { x: 18, y: 49, pause: 400, click: true }, // Customers sidebar
    { x: 70, y: 37, pause: 500 },              // back to Revenue
  ],

  /* ShopFlow — white SaaS with grid
     Nav ~8% y | Badge ~24% y | Headline ~40% | Buttons ~75% y | Phone mockup right */
  saas: [
    { x: 50, y: 8,  pause: 500 },              // "Pricing" nav
    { x: 19, y: 24, pause: 600 },              // NOW IN EARLY ACCESS badge
    { x: 14, y: 45, pause: 500 },              // "Sell your" text
    { x: 14, y: 57, pause: 400 },              // "gear." text
    { x: 20, y: 75, pause: 600 },              // Go to Dashboard btn
    { x: 20, y: 75, pause: 800, click: true }, // click it
    { x: 36, y: 75, pause: 500 },              // hover Watch Demo
    { x: 36, y: 75, pause: 600, click: true }, // click Watch Demo
    { x: 73, y: 55, pause: 700 },              // phone mockup — shoe product
    { x: 73, y: 72, pause: 500 },              // "Vapor Max Elite" title
  ],

  /* LinkedIn Bulk Opener — dark navy tool
     Nav ~8% y | AI badge ~30% y | Headline ~50% y | CTA btn ~82% y */
  tool: [
    { x: 34, y: 8,  pause: 500 },              // "Dashboard" nav
    { x: 46, y: 8,  pause: 400 },              // "Features" nav hover
    { x: 50, y: 30, pause: 600 },              // AI badge
    { x: 50, y: 50, pause: 500 },              // "Open LinkedIn Profiles" headline
    { x: 50, y: 59, pause: 400 },              // "In One Click"
    { x: 50, y: 82, pause: 600 },              // hover Start For Free
    { x: 50, y: 82, pause: 900, click: true }, // click it
    { x: 50, y: 30, pause: 500 },              // back to badge
    { x: 50, y: 82, pause: 700, click: true }, // click again
  ],

  /* CX Services — red bold agency
     MENU btn top-right ~10% y | CX text ~72% y */
  agency: [
    { x: 18, y: 10, pause: 500 },              // CX logo area
    { x: 78, y: 10, pause: 600 },              // hover MENU
    { x: 78, y: 10, pause: 700, click: true }, // click MENU
    { x: 20, y: 72, pause: 700 },              // big "CX" text
    { x: 28, y: 82, pause: 600 },              // "SERVICES, LLC."
    { x: 22, y: 89, pause: 500 },              // tagline
    { x: 78, y: 10, pause: 600 },              // back to MENU
    { x: 78, y: 10, pause: 600, click: true }, // click again
  ],

  /* Agrolync — green agritech marketplace
     Ticker ~4% y | Nav ~12% y | Badge ~28% | Btns ~75% y | Phone right */
  agro: [
    { x: 50, y: 4,  pause: 400 },              // ticker bar glance
    { x: 46, y: 12, pause: 500 },              // "Marketplace" nav
    { x: 46, y: 12, pause: 400, click: true }, // click it
    { x: 12, y: 28, pause: 600 },              // LIVE MARKET INTELLIGENCE badge
    { x: 12, y: 45, pause: 500 },              // "REAL-TIME PRICES." text
    { x: 12, y: 57, pause: 400 },              // "FAIR PAY." text
    { x: 18, y: 75, pause: 600 },              // hover View Price Tracker
    { x: 18, y: 75, pause: 800, click: true }, // click it
    { x: 67, y: 57, pause: 700 },              // Masara price cell (center)
    { x: 59, y: 57, pause: 400 },              // Tumatir cell
    { x: 75, y: 57, pause: 400 },              // Tatasai cell
    { x: 37, y: 75, pause: 500 },              // Join Free btn
    { x: 37, y: 75, pause: 700, click: true }, // click Join Free
    { x: 73, y: 80, pause: 600 },              // Featured listing
  ],
};

export function CursorOverlay({ mockupType }: { mockupType: string }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const idx = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const nextId = useRef(0);

  useEffect(() => {
    const script = SCRIPTS[mockupType] ?? [];
    if (!script.length) return;

    function step() {
      const pt = script[idx.current % script.length];
      setPos({ x: pt.x, y: pt.y });

      timer.current = setTimeout(() => {
        if (pt.click) {
          const id = ++nextId.current;
          setRipples(prev => [...prev, { id, x: pt.x, y: pt.y }]);
          setTimeout(() => {
            setRipples(prev => prev.filter(r => r.id !== id));
          }, 750);
        }
        idx.current++;
        timer.current = setTimeout(step, pt.click ? 180 : 80);
      }, pt.pause);
    }

    timer.current = setTimeout(step, 600);
    return () => clearTimeout(timer.current);
  }, [mockupType]);

  return (
    <div className="absolute inset-0 pointer-events-none z-40">

      {/* ── Cursor ── */}
      <div
        style={{
          position: "absolute",
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          transition: "left 0.48s cubic-bezier(0.4,0,0.2,1), top 0.48s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <svg
          width="14"
          height="18"
          viewBox="0 0 14 18"
          fill="none"
          style={{ filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.7))" }}
        >
          <path
            d="M1.5 1.5 L1.5 14.5 L5 11 L7.5 16.5 L9 15.8 L6.5 10.3 L10.5 10.3 Z"
            fill="white"
            stroke="rgba(0,0,0,0.4)"
            strokeWidth="0.7"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* ── Click ripples ── */}
      {ripples.map(r => (
        <div
          key={r.id}
          style={{
            position: "absolute",
            left: `${r.x}%`,
            top: `${r.y}%`,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        >
          <div style={{
            position: "absolute",
            width: 22, height: 22,
            marginLeft: -11, marginTop: -11,
            borderRadius: "50%",
            border: "1.5px solid rgba(255,255,255,0.9)",
            animation: "rippleOut 0.55s ease-out forwards",
          }} />
          <div style={{
            position: "absolute",
            width: 34, height: 34,
            marginLeft: -17, marginTop: -17,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.4)",
            animation: "rippleOut 0.65s 0.07s ease-out forwards",
          }} />
          <div style={{
            position: "absolute",
            width: 6, height: 6,
            marginLeft: -3, marginTop: -3,
            borderRadius: "50%",
            background: "white",
            animation: "dotFlash 0.28s ease-out forwards",
          }} />
        </div>
      ))}
    </div>
  );
}
