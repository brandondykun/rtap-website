import { siteUrl } from '@/config/site';
import robots from './robots';
import sitemap from './sitemap';

it('sitemap lists all pages with absolute URLs', () => {
  const urls = sitemap().map((e) => e.url);
  expect(urls).toEqual(['/', '/privacy', '/terms', '/support'].map((p) => new URL(p, siteUrl()).href));
});

it('robots allows all and points at the sitemap', () => {
  const r = robots();
  expect(r.sitemap).toBe(new URL('/sitemap.xml', siteUrl()).href);
  expect(r.rules).toEqual({ userAgent: '*', allow: '/' });
});
