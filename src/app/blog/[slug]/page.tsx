import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);

  if (!fs.existsSync(filePath)) return { title: 'Post Not Found' };

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContent);

  return {
    title: `${data.title} | Limitless Blog`,
    description: data.description,
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <main className="min-h-screen bg-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Navigation Link */}
        <Link
          href="/blog"
          className="text-neutral-400 hover:text-neutral-900 mb-10 inline-flex items-center gap-2 transition-all group text-sm font-medium"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to all posts
        </Link>

        {/* Header Section */}
        <header className="mb-12 pt-4">
          <h1
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-5 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {data.title}
          </h1>
          <div className="flex items-center gap-4 text-neutral-400 text-sm">
            <span>{data.date}</span>
            <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
            <span>By Limitless Team</span>
          </div>
          <div className="mt-8 border-t border-neutral-200"></div>
        </header>

        {/* Main Content */}
        <article
          className="prose prose-neutral max-w-none
          prose-headings:text-neutral-900 prose-headings:font-bold
          prose-p:text-neutral-600 prose-p:leading-relaxed
          prose-strong:text-neutral-900
          prose-a:text-neutral-900 prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-neutral-600
          prose-blockquote:border-neutral-300 prose-blockquote:text-neutral-500
          prose-code:text-neutral-800 prose-code:bg-neutral-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Footer CTA */}
        <footer className="mt-20 pt-10 border-t border-neutral-200">
          <div className="bg-neutral-900 p-10 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-white mb-2">Want to build something similar?</h3>
            <p className="text-neutral-400 mb-7">We specialize in high-performance Next.js stores and websites.</p>
            <Link
              href="/contact"
              className="bg-white text-neutral-900 px-8 py-3 rounded-full font-medium transition-colors hover:bg-neutral-100 inline-block"
            >
              Start Your Project
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
