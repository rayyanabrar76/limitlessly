import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function BlogList() {
  const postsDirectory = path.join(process.cwd(), 'content');

  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return { slug, ...data };
  });

  return (
    <main className="max-w-4xl mx-auto pt-32 pb-24 px-6 bg-white">

      <header className="mb-14">
        <div className="inline-flex items-center gap-2 mb-5">
          <span className="w-6 h-px bg-neutral-400"></span>
          <p className="text-xs text-neutral-400 uppercase tracking-widest font-medium">Insights</p>
        </div>
        <h1
          className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Latest Articles
        </h1>
        <p className="text-neutral-400 text-base">Insights on e-commerce, performance, and modern web design.</p>
      </header>

      <div className="grid gap-4">
        {posts.map((post: any) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <div className="border border-neutral-200 p-8 rounded-2xl bg-white hover:bg-neutral-50 hover:border-neutral-300 hover:shadow-sm transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold text-neutral-900 group-hover:text-black transition-colors pr-6">
                  {post.title || "Untitled Post"}
                </h2>
                <span className="text-xs font-medium text-neutral-400 uppercase tracking-widest mt-1 shrink-0">Article</span>
              </div>
              <p className="text-neutral-500 line-clamp-2 mb-5 text-sm leading-relaxed">
                {post.description || "Read more about this topic..."}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-400">
                  {post.date}
                </span>
                <span className="text-sm text-neutral-900 font-medium group-hover:translate-x-1 transition-transform inline-block">
                  Read more →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
