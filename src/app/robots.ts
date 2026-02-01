import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/smooth',
    },
    sitemap: 'https://www.joshblyskal.com/sitemap.xml',
  };
}

