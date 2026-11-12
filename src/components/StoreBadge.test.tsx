import { render, screen } from '@testing-library/react';

afterEach(() => {
  vi.resetModules();
  vi.doUnmock('@/config/site');
});

it('shows Coming soon on iOS with no link and no Apple branding before launch', async () => {
  const { StoreBadge } = await import('./StoreBadge');
  render(<StoreBadge />);
  expect(screen.getByText(/coming soon on ios/i)).toBeInTheDocument();
  expect(screen.queryByRole('link')).toBeNull();
  expect(document.body.textContent).not.toMatch(/|App Store|Download/);
});

it('StoreBadge renders a link when appStoreUrl is set', async () => {
  const real = await vi.importActual<typeof import('@/config/site')>('@/config/site');
  vi.doMock('@/config/site', () => ({ ...real, site: { ...real.site, appStoreUrl: 'https://apps.apple.com/app/id1' } }));
  const { StoreBadge } = await import('./StoreBadge');
  render(<StoreBadge />);
  expect(screen.getByRole('link', { name: /download on the app store/i })).toHaveAttribute('href', 'https://apps.apple.com/app/id1');
  expect(screen.queryByText(/coming soon/i)).toBeNull();
});
