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
    'Explore in 3D. Plot from where you stand.',
    'Built for the way units plan and move.',
    'See what each weapon can reach.',
    'Turn it sideways. See more ground.',
    'Your plots keep working with no signal.',
    'Built by military and geospatial professionals.',
    'This is V1. The team features are next.',
  ]);
});

it('marks V2 as in development and V1 as the early release', () => {
  expect(document.getElementById('roadmap')).toHaveTextContent(/V1 · Early release/i);
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

it('says up front that V1 is an early release with more coming', () => {
  const hero = screen.getByRole('heading', { level: 1 }).closest('section')!;
  expect(hero).toHaveTextContent(/early release/i);
  expect(hero).toHaveTextContent(/free on iphone at launch/i);
});

it('makes no offline claim the V1 map imagery cannot keep', () => {
  const text = document.body.textContent!;
  expect(text).not.toMatch(/works fully offline|0 bars|works with no signal/i);
  expect(text).toMatch(/imagery you've already viewed/i);
});

it('keeps the no-servers, no-networking points with V2, not V1', () => {
  const v2 = screen.getByText(/V2 · In development/i).closest('div')!;
  expect(v2).toHaveTextContent(/no servers/i);
  expect(v2).toHaveTextContent(/cell signal/i);
  expect(document.getElementById('roadmap')!.previousElementSibling).not.toHaveTextContent(/no servers/i);
});

it('backs the who-built-it claim with specifics', () => {
  const text = document.body.textContent!;
  expect(text).toMatch(/grid, true or magnetic north/i);
  expect(text).toMatch(/1 m/);
});

it('tells an excited visitor the closing facts: free, iPhone, early release', () => {
  const closing = [...document.querySelectorAll('section')].at(-1)!;
  expect(closing).toHaveTextContent(/free on iphone at launch/i);
  expect(closing).toHaveTextContent(/early release/i);
});
