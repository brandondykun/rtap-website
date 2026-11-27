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

it('leads the title with the app store name and keeps the description inside a search snippet', async () => {
  vi.doMock('next/font/google', () => ({ Inter: () => ({ variable: '' }), JetBrains_Mono: () => ({ variable: '' }) }));
  const { metadata } = await import('./layout');
  expect((metadata.title as { default: string }).default).toMatch(/^RTAP - Realtime Team Awareness Platform \| /);
  expect((metadata.description as string).length).toBeLessThanOrEqual(155);
  expect(metadata.description).toMatch(/no server to set up/i);
});
