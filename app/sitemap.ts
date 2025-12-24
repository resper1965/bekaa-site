import { MetadataRoute } from 'next'
import { getAllServiceSlugs } from '@/lib/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bekaa.eu'
  const currentDate = new Date().toISOString()
  const locales = ['en', 'pt']
  const serviceSlugs = getAllServiceSlugs()

  const staticPages = [
    '', // home
    '/services',
    '/about',
    '/contact',
  ]

  const routes: MetadataRoute.Sitemap = []

  // Add static pages for each locale
  staticPages.forEach(page => {
    locales.forEach(locale => {
      routes.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: page === '' ? 1 : 0.8,
      })
    })
  })

  // Add individual service pages for each locale
  serviceSlugs.forEach(slug => {
    locales.forEach(locale => {
      routes.push({
        url: `${baseUrl}/${locale}/services/${slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })
  })

  return routes
}
