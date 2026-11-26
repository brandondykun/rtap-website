import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Nav } from './Nav';

it('Nav links to the section anchors and support', () => {
  render(<Nav />);
  for (const [name, href] of [['Features', '/#features'], ['3D & OP', '/#3d-op'], ['Range rings', '/#range-rings'], ['Roadmap', '/#roadmap'], ['Support', '/support']])
    expect(screen.getAllByRole('link', { name })[0]).toHaveAttribute('href', href);
  expect(screen.getByRole('link', { name: /just released/i })).toHaveAttribute('href', '/#download');
  expect(screen.queryByText(/coming soon/i)).toBeNull();
});

it('Nav menu opens and closes on mobile with an accessible toggle', async () => {
  render(<Nav />);
  const toggle = screen.getByRole('button', { name: /menu/i });
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await userEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await userEvent.click(screen.getAllByRole('link', { name: 'Roadmap' }).at(-1)!);
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

it('shows Coming soon, with no link, when there is no store listing', async () => {
  const real = await vi.importActual<typeof import('@/config/site')>('@/config/site');
  vi.resetModules();
  vi.doMock('@/config/site', () => ({ ...real, site: { ...real.site, appStoreUrl: null, playStoreUrl: null } }));
  const { Nav: PreLaunchNav } = await import('./Nav');
  render(<PreLaunchNav />);
  expect(screen.getByText('Coming soon')).toBeInTheDocument();
  expect(screen.queryByText(/just released/i)).toBeNull();
  vi.doUnmock('@/config/site');
  vi.resetModules();
});
