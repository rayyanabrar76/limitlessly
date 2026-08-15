import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Limitlessly — The Software Store',
    short_name: 'Limitlessly',
    description: 'Browse 20 ready-to-build software and AI products. Add what you need to a quote.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fafafa',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/limit.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/limit.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
