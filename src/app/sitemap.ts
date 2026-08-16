import { MetadataRoute } from 'next'
import { products } from '@/lib/products'
import { blogPosts } from '@/lib/blog'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  // Generate dynamic URLs for all software products
  const productUrls = products.map((product) => ({
    url: `${SITE_URL}/store/${product.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const blogUrls = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    { url: SITE_URL, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/store`, lastModified, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/quote`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/privacy`, lastModified, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified, changeFrequency: 'yearly' as const, priority: 0.3 },
    ...productUrls,
    { url: `${SITE_URL}/blog`, lastModified, changeFrequency: 'weekly' as const, priority: 0.8 },
    ...blogUrls,
  ]
}
