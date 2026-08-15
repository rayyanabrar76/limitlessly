const items = [
  "AI SaaS Platforms",
  "Custom AI Agents",
  "LLM Integration",
  "RAG & Search",
  "Multi-Tenant Architecture",
  "Stripe Billing",
  "Next.js",
  "Scalable Infrastructure",
  "MVP Sprints",
  "Built to Scale",
];

export default function MarqueeStrip() {
  const doubled = [...items, ...items];

  return (
    <section className="py-12 bg-white dark:bg-neutral-950 border-t border-b border-neutral-200 dark:border-white/5 overflow-hidden transition-colors duration-300">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6 text-neutral-400 dark:text-neutral-500">
            <span className="text-sm font-medium tracking-wide">{item}</span>
            <span className="text-neutral-300 dark:text-neutral-700 text-xs">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
