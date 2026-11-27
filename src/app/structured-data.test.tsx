import { render } from '@testing-library/react';
import { StructuredData } from '@/components/StructuredData';
import { site } from '@/config/site';

it('describes the site and the free app on both stores, under its store name', () => {
  const { container } = render(<StructuredData />);
  const [web, app] = JSON.parse(container.querySelector('script[type="application/ld+json"]')!.innerHTML);
  expect(web).toMatchObject({ '@type': 'WebSite', name: 'RTAP', alternateName: 'RTAP - Realtime Team Awareness Platform' });
  expect(app).toMatchObject({ '@type': 'MobileApplication', name: 'RTAP - Realtime Team Awareness Platform', operatingSystem: 'iOS, Android' });
  expect(app.offers.price).toBe('0');
  expect(app.installUrl).toEqual([site.appStoreUrl, site.playStoreUrl]);
  expect(app.aggregateRating).toBeUndefined();
});
