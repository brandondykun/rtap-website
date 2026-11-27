import { site, siteUrl } from '@/config/site';

/**
 * schema.org data for search engines: the site's name (Google shows it above results) and the app itself, free on iOS
 * and Android with both store links. No ratings: Google only accepts real ones, and the site has none to show.
 */
export function StructuredData() {
  const url = siteUrl().href;
  const data = [
    { '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, alternateName: site.title, url },
    {
      '@context': 'https://schema.org',
      '@type': 'MobileApplication',
      name: site.title,
      alternateName: site.name,
      description: site.description,
      url,
      operatingSystem: 'iOS, Android',
      applicationCategory: 'NavigationApplication',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      installUrl: [site.appStoreUrl, site.playStoreUrl].filter(Boolean),
      publisher: { '@type': 'Organization', name: site.company },
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}
