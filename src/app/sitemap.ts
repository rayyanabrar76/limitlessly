import { MetadataRoute } from 'next'
import { products } from '@/lib/products'
import { blogPosts } from '@/lib/blog'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  // ── Priority 1.0 — Homepage ──
  const homepage: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified, changeFrequency: 'weekly', priority: 1 },
  ]

  // ── Priority 0.9 — Core commercial pages (highest crawl value) ──
  const corePages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/store`, lastModified, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/quote`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
  ]

  // ── Priority 0.8 — Every product page (dynamically generated) ──
  const productUrls: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${SITE_URL}/store/${product.slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // ── Priority 0.7 — Every blog post (dynamically generated) ──
  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // ── Priority 0.3 — Legal pages (low priority, but required for trust) ──
  const legalPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]

  // Return in priority order — Google crawls top-to-bottom
  return [
    ...homepage,
    ...corePages,
    ...productUrls,
    ...blogUrls,
    ...legalPages,
  ]
}
