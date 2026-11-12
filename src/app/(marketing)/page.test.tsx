import { render, screen } from '@testing-library/react';
import Home from './page';

beforeEach(() => {
  window.matchMedia = vi.fn().mockReturnValue({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() });
  render(<Home />);
});

it('renders the hero brand lockup and tagline', () => {
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('RTAP');
  expect(screen.getByText('Realtime Team Awareness Platform')).toBeInTheDocument();
  for (const d of screen.getAllByText('Dominate.')) expect(d).toHaveClass('text-accent');
});

it('renders every section heading from the spec in order', () => {
  const headings = screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent);
  expect(headings).toEqual([
    'Turn it sideways. See more ground.',
    'Explore in 3D. Plot from where you stand.',
    'Built for the way units plan and move.',
    'See what each weapon can reach.',
    'Built by military and geospatial professionals.',
    'Works with no signal. Your data stays on your phone.',
    'Your team, on the same map.',
  ]);
});

it('marks V2 as in development and V1 as at launch', () => {
  expect(screen.getByText(/V1 · At launch/i)).toBeInTheDocument();
  expect(screen.getByText(/V2 · In development/i)).toBeInTheDocument();
  expect(screen.getByText('No account needed')).toBeInTheDocument();
});

it('never says Download before launch', () => {
  expect(document.body.textContent).not.toMatch(/download/i);
});

it('has the section anchors the nav links to', () => {
  for (const id of ['features', '3d-op', 'roadmap', 'landscape', 'range-rings']) expect(document.getElementById(id)).not.toBeNull();
});

it('shows the badge in the hero and the closing call to action', () => {
  expect(screen.getAllByText(/coming soon on ios/i)).toHaveLength(2);
});

it('explains range rings for indirect fire and air defense', () => {
  const section = document.getElementById('range-rings')!;
  expect(section).toHaveTextContent(/mortar/i);
  expect(section).toHaveTextContent(/artillery/i);
  expect(section).toHaveTextContent(/air defense/i);
  expect(section).toHaveTextContent(/ceiling/i);
  expect(screen.getByAltText(/range ring/i)).toBeInTheDocument();
});

it('shows the landscape screenshots', () => {
  const section = document.getElementById('landscape')!;
  expect(section.querySelectorAll('img')).toHaveLength(3);
});
