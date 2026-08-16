import Link from "next/link";
import { Metadata } from "next";
import { blogPosts } from "@/lib/blog";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Software Engineering & AI Insights",
  description: "Practical guides on custom software development, AI agents, SaaS architecture, and building products that scale. Written by the Limitlessly engineering team.",
  alternates: {
    canonical: "https://limitlessly.vercel.app/blog",
  },
  openGraph: {
    title: "Limitlessly Blog — Software Engineering & AI Insights",
    description: "Practical guides on custom software development, AI agents, SaaS architecture, and building products that scale.",
    url: "https://limitlessly.vercel.app/blog",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Limitlessly Blog",
  description: "Practical guides on custom software development, AI agents, SaaS architecture, and building products that scale.",
  url: "https://limitlessly.vercel.app/blog",
  publisher: {
    "@type": "Organization",
    name: "Limitlessly",
    url: "https://limitlessly.vercel.app",
    logo: "https://limitlessly.vercel.app/limit.png",
  },
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <main className="min-h-screen pt-[100px] pb-24 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-500 dark:text-indigo-400 mb-4">
            Engineering Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white tracking-tight mb-4">
            Insights & Guides
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Practical thinking on software engineering, AI, and building products that
            actually work at scale.
          </p>
        </div>

        {/* Posts */}
        <div className="space-y-0 divide-y divide-neutral-200 dark:divide-white/10">
          {sorted.map((post) => (
            <article key={post.slug} className="py-10 first:pt-0">
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
                    {post.category}
                  </span>
                  <span className="text-neutral-300 dark:text-neutral-700">·</span>
                  <time className="text-xs text-neutral-500 dark:text-neutral-500" dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="text-neutral-300 dark:text-neutral-700">·</span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-500">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-3 tracking-tight">
                  {post.title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:gap-2.5 transition-all">
                  Read article <ArrowUpRight size={14} />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
