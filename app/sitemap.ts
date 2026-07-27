// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://yourdomain.com';
  return [
    { url: base, priority: 1 },
    { url: `${base}/manufacturing`, priority: 0.8 },
    { url: `${base}/logistics`, priority: 0.8 },
    { url: `${base}/jewelry`, priority: 0.8 },
  ];
}
