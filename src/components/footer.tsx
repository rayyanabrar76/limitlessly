import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Big CTA Band */}
      <section className="bg-neutral-100 dark:bg-neutral-950 py-28 px-6 relative overflow-hidden transition-colors duration-300">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <div>
            <p className="text-neutral-500 dark:text-white/30 text-xs uppercase tracking-[0.25em] font-medium mb-5">Have a vision?</p>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-black text-neutral-900 dark:text-white leading-[0.9] tracking-tighter"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Let&apos;s build
              <br />
              <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">your platform.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4 shrink-0">
            <a
              href="https://calendly.com/rayyanabrar76/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold text-sm pl-7 pr-3 py-3.5 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-200 w-fit"
            >
              Book a Call
              <span className="w-7 h-7 bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white rounded-full flex items-center justify-center text-xs shrink-0">↗</span>
            </a>
            <Link
              href="/store"
              className="flex items-center gap-3 border border-neutral-300 dark:border-white/20 text-neutral-900 dark:text-white font-semibold text-sm pl-7 pr-3 py-3.5 rounded-full hover:border-neutral-400 hover:bg-neutral-200 dark:hover:border-white/50 dark:hover:bg-white/5 transition-all duration-200 w-fit"
            >
              Browse Catalog
              <span className="w-7 h-7 bg-neutral-200 dark:bg-white/10 rounded-full flex items-center justify-center text-neutral-900 dark:text-white text-xs shrink-0">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer bar */}
      <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-white/10 py-8 px-6 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
            <span className="text-lg font-extrabold tracking-tight text-neutral-900 dark:text-white lowercase">
              limitlessly
            </span>
          </Link>

          <div className="flex items-center gap-8">
            {[["Store", "/store"], ["About", "/about"], ["Contact", "/contact"], ["Blog", "/blog"], ["Privacy", "/privacy"], ["Terms", "/terms"]].map(([label, href]) => (
              <Link key={label} href={href} className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </div>

          <p className="text-sm text-neutral-400 dark:text-neutral-500">
            © {new Date().getFullYear()} Limitlessly.
          </p>
        </div>
      </footer>
    </>
  );
}
