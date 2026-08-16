import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts, getBlogPost, getRecentPosts } from "@/lib/blog";
import Breadcrumbs from "@/components/breadcrumbs";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://limitlessly.vercel.app/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://limitlessly.vercel.app/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const recent = getRecentPosts(3).filter((p) => p.slug !== post.slug).slice(0, 2);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      author: {
        "@type": "Organization",
        name: post.author,
        url: "https://limitlessly.vercel.app",
      },
      publisher: {
        "@type": "Organization",
        name: "Limitlessly",
        url: "https://limitlessly.vercel.app",
        logo: {
          "@type": "ImageObject",
          url: "https://limitlessly.vercel.app/limit.png",
        },
      },
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      url: `https://limitlessly.vercel.app/blog/${post.slug}`,
      mainEntityOfPage: `https://limitlessly.vercel.app/blog/${post.slug}`,
      keywords: post.tags.join(", "),
      articleSection: post.category,
      wordCount: post.content.replace(/<[^>]*>/g, "").split(/\s+/).length,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://limitlessly.vercel.app" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://limitlessly.vercel.app/blog" },
        { "@type": "ListItem", position: 3, name: post.title, item: `https://limitlessly.vercel.app/blog/${post.slug}` },
      ],
    },
  ];

  return (
    <main className="min-h-screen pt-[100px] pb-24 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]} />

        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
            {post.category}
          </span>
          <span className="text-neutral-300 dark:text-neutral-700">·</span>
          <time className="text-xs text-neutral-500" dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="text-neutral-300 dark:text-neutral-700">·</span>
          <span className="text-xs text-neutral-500">{post.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 dark:text-white tracking-tight leading-tight mb-8">
          {post.title}
        </h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1.5 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Content */}
        <div
          className="prose prose-lg prose-neutral dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-p:leading-relaxed prose-p:text-neutral-600 dark:prose-p:text-neutral-400
            prose-li:text-neutral-600 dark:prose-li:text-neutral-400
            prose-strong:text-neutral-900 dark:prose-strong:text-white
            prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-16 p-8 md:p-12 bg-neutral-900 dark:bg-neutral-900 rounded-3xl border border-neutral-800 dark:border-white/10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Need this built?</h2>
          <p className="text-neutral-400 mb-6 max-w-md mx-auto">
            Browse our Software Store and add exactly what you need to a quote.
          </p>
          <Link
            href="/store"
            className="inline-flex items-center gap-2 bg-white text-neutral-900 font-bold px-8 py-3.5 rounded-full hover:bg-neutral-200 transition-colors text-sm"
          >
            Browse Store
          </Link>
        </div>

        {/* Related */}
        {recent.length > 0 && (
          <div className="mt-20 pt-12 border-t border-neutral-200 dark:border-white/10">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-8">More from the blog</h3>
            <div className="space-y-6">
              {recent.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="block group p-6 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-neutral-50 dark:hover:bg-white/10 transition-colors"
                >
                  <p className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-2">
                    {r.category}
                  </p>
                  <h4 className="font-bold text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-1">
                    {r.title}
                  </h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-1">
                    {r.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
