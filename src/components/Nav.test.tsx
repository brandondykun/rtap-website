import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Nav } from './Nav';

it('Nav links to the section anchors and support', () => {
  render(<Nav />);
  for (const [name, href] of [['Features', '/#features'], ['3D & OP', '/#3d-op'], ['Range rings', '/#range-rings'], ['Roadmap', '/#roadmap'], ['Support', '/support']])
    expect(screen.getAllByRole('link', { name })[0]).toHaveAttribute('href', href);
  expect(screen.getByText('Coming soon')).toBeInTheDocument();
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

it('drops the Coming soon label once the app is live', async () => {
  const real = await vi.importActual<typeof import('@/config/site')>('@/config/site');
  vi.resetModules();
  vi.doMock('@/config/site', () => ({ ...real, site: { ...real.site, appStoreUrl: 'https://apps.apple.com/app/id1' } }));
  const { Nav: LiveNav } = await import('./Nav');
  render(<LiveNav />);
  expect(screen.queryByText(/coming soon/i)).toBeNull();
  vi.doUnmock('@/config/site');
  vi.resetModules();
});
