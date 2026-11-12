import type { MetadataRoute } from 'next';
import { siteUrl } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/privacy', '/terms', '/support'].map((path) => ({ url: new URL(path, siteUrl()).href }));
}
