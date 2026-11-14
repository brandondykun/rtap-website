import { site, siteUrl } from './site';

describe('siteUrl', () => {
  it('uses NEXT_PUBLIC_SITE_URL when set', () => {
    expect(siteUrl({ NEXT_PUBLIC_SITE_URL: 'https://rtap.example' }).href).toBe('https://rtap.example/');
  });
  it('falls back to the Vercel production URL with https', () => {
    expect(siteUrl({ VERCEL_PROJECT_PRODUCTION_URL: 'rtap.vercel.app' }).href).toBe('https://rtap.vercel.app/');
  });
  it('falls back to localhost', () => {
    expect(siteUrl({}).href).toBe('http://localhost:3000/');
  });
});

describe('site', () => {
  it('links to the App Store listing for every country', () => expect(site.appStoreUrl).toBe('https://apps.apple.com/app/id6834856833'));
  it('has the support email and company', () => {
    expect(site.supportEmail).toBe('support@eratas.dev');
    expect(site.company).toBe('Eratas Software LLC');
  });
});
