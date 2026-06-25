const items = [
  "E-Commerce Stores",
  "Business Websites",
  "Custom Design",
  "Next.js",
  "Stripe Payments",
  "Fast Delivery",
  "SEO Optimized",
  "Mobile Responsive",
  "Admin Dashboards",
  "Vercel Deployed",
];

export default function MarqueeStrip() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-neutral-950 border-t border-white/[0.06] overflow-hidden py-4 select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6">
            <span className="text-white/35 text-sm font-medium tracking-wide">{item}</span>
            <span className="text-white/15 text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
