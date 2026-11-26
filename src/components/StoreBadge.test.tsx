import { render, screen } from '@testing-library/react';

afterEach(() => {
  vi.resetModules();
  vi.doUnmock('@/config/site');
});

it('shows Coming soon on iOS & Android with no link and no store branding before launch', async () => {
  const real = await vi.importActual<typeof import('@/config/site')>('@/config/site');
  vi.doMock('@/config/site', () => ({ ...real, site: { ...real.site, appStoreUrl: null, playStoreUrl: null } }));
  const { StoreBadge } = await import('./StoreBadge');
  render(<StoreBadge />);
  expect(screen.getByText(/coming soon on ios & android/i)).toBeInTheDocument();
  expect(screen.queryByRole('link')).toBeNull();
  expect(document.body.textContent).not.toMatch(/|App Store|Google Play|Download/);
});

it('StoreBadge renders a link when appStoreUrl is set', async () => {
  const real = await vi.importActual<typeof import('@/config/site')>('@/config/site');
  vi.doMock('@/config/site', () => ({ ...real, site: { ...real.site, appStoreUrl: 'https://apps.apple.com/app/id1', playStoreUrl: null } }));
  const { StoreBadge } = await import('./StoreBadge');
  render(<StoreBadge />);
  expect(screen.getByRole('link', { name: /download on the app store/i })).toHaveAttribute('href', 'https://apps.apple.com/app/id1');
  expect(screen.queryByText(/coming soon/i)).toBeNull();
});

it('StoreBadge shows only the Google Play badge when only playStoreUrl is set', async () => {
  const real = await vi.importActual<typeof import('@/config/site')>('@/config/site');
  vi.doMock('@/config/site', () => ({ ...real, site: { ...real.site, appStoreUrl: null, playStoreUrl: 'https://play.google.com/store/apps/details?id=x' } }));
  const { StoreBadge } = await import('./StoreBadge');
  render(<StoreBadge />);
  expect(screen.getByRole('link', { name: /get it on google play/i })).toHaveAttribute('href', 'https://play.google.com/store/apps/details?id=x');
  expect(screen.queryByRole('link', { name: /app store/i })).toBeNull();
  expect(screen.queryByText(/coming soon/i)).toBeNull();
});

it('StoreBadge shows both badges when both listings are set', async () => {
  const { StoreBadge } = await import('./StoreBadge');
  render(<StoreBadge />);
  expect(screen.getByRole('link', { name: /download on the app store/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /get it on google play/i })).toBeInTheDocument();
});
