import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.joshblyskal.com';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog/what-we-dont-say-at-conferences`,
      lastModified: new Date('2025-11-24'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}

