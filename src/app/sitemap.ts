import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://limitlessly.vercel.app'
  const lastModified = new Date()

  return [
    { url: baseUrl, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/portfolio`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/portfolio/agrolync`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
  ]
}
