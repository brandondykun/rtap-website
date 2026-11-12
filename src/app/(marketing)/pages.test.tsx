import { render, screen } from '@testing-library/react';
import Privacy from './privacy/page';
import Support from './support/page';
import Terms from './terms/page';

it('Support has a mailto link to support@eratas.dev', () => {
  render(<Support />);
  expect(screen.getByRole('link', { name: 'support@eratas.dev' })).toHaveAttribute('href', 'mailto:support@eratas.dev');
});

it('Terms says not for real-world military use or targeting', () => {
  render(<Terms />);
  expect(document.body.textContent).toMatch(/Not for real-world military use or targeting\./);
  expect(document.body.textContent).toMatch(/training and simulation/i);
});

it('Privacy names Sentry and Mapbox and says missions stay on the device', () => {
  render(<Privacy />);
  const text = document.body.textContent!;
  expect(text).toMatch(/Sentry/);
  expect(text).toMatch(/Mapbox/);
  expect(text).toMatch(/stays? on your (phone|device)/i);
  // The Mapbox SDK's telemetry is on in the app, so the policy must not claim location reaches no one.
  expect(text).not.toMatch(/not sent to us or anyone else/i);
  expect(text).toMatch(/Mapbox[\s\S]*usage data/i);
  expect(screen.getByRole('link', { name: 'support@eratas.dev' })).toBeInTheDocument();
});

it('Privacy and Terms are marked for owner review', () => {
  for (const Page of [Privacy, Terms]) {
    const { container, unmount } = render(<Page />);
    expect(container.querySelector('article[data-review="owner"]')).not.toBeNull();
    unmount();
  }
});
