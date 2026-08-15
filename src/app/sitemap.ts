import { MetadataRoute } from 'next'
import { products } from '@/lib/products'
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

  return [
    { url: SITE_URL, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/store`, lastModified, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/quote`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    ...productUrls,
  ]
}
