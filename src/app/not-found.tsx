import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Browse our software store or head back home.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="text-center max-w-lg">
        <p className="text-8xl font-black text-neutral-200 dark:text-neutral-800 mb-6 select-none">404</p>
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
          Page not found
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-3.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-bold text-sm hover:scale-[1.03] active:scale-95 transition-transform"
          >
            Back to Home
          </Link>
          <Link
            href="/store"
            className="px-8 py-3.5 rounded-full border border-neutral-300 dark:border-white/15 text-neutral-900 dark:text-white font-bold text-sm hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
          >
            Browse Store
          </Link>
        </div>
      </div>
    </main>
  );
}
