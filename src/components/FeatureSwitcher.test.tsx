import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { features } from '@/content/features';
import { screenshots } from '@/content/screenshots';
import { FeatureSwitcher } from './FeatureSwitcher';

function stubReducedMotion(reduce: boolean) {
  window.matchMedia = vi.fn().mockImplementation((q: string) => ({
    matches: reduce && q.includes('prefers-reduced-motion'),
    media: q,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })) as unknown as typeof window.matchMedia;
}

const tabs = () => within(screen.getByRole('tablist')).getAllByRole('tab');
const selected = () => tabs().findIndex((t) => t.getAttribute('aria-selected') === 'true');
const panel = () => screen.getByRole('tabpanel');

beforeEach(() => {
  vi.useFakeTimers();
  stubReducedMotion(false);
});
afterEach(() => vi.useRealTimers());

it('shows the first feature and its screenshot', () => {
  render(<FeatureSwitcher features={features} />);
  expect(selected()).toBe(0);
  expect(within(screen.getByRole('tablist')).getByText(features[0].description)).toBeVisible();
  expect(within(panel()).getByAltText(screenshots.unit.alt)).toBeInTheDocument();
  expect(within(panel()).queryByAltText(screenshots.quickPlot.alt)).toBeNull();
});

it('clicking a feature selects it and swaps the screenshot', () => {
  render(<FeatureSwitcher features={features} />);
  fireEvent.click(screen.getByRole('tab', { name: /Quick plot a grid/ }));
  expect(selected()).toBe(1);
  expect(within(panel()).getByAltText(screenshots.quickPlot.alt)).toBeInTheDocument();
  expect(within(panel()).queryByAltText(screenshots.unit.alt)).toBeNull();
});

it('auto-advances every intervalMs', () => {
  render(<FeatureSwitcher features={features} intervalMs={6000} />);
  act(() => vi.advanceTimersByTime(6000));
  expect(selected()).toBe(1);
  act(() => vi.advanceTimersByTime(6000 * 5));
  expect(selected()).toBe(0); // wraps
});

it('stops auto-advancing after the user interacts', () => {
  render(<FeatureSwitcher features={features} />);
  fireEvent.click(tabs()[2]);
  act(() => vi.advanceTimersByTime(20000));
  expect(selected()).toBe(2);
});

it('does not auto-advance with reduced motion', () => {
  stubReducedMotion(true);
  render(<FeatureSwitcher features={features} />);
  act(() => vi.advanceTimersByTime(20000));
  expect(selected()).toBe(0);
});

it('arrow keys move selection', () => {
  render(<FeatureSwitcher features={features} />);
  tabs()[0].focus();
  fireEvent.keyDown(tabs()[0], { key: 'ArrowDown' });
  expect(selected()).toBe(1);
  expect(tabs()[1]).toHaveFocus();
  fireEvent.keyDown(tabs()[1], { key: 'ArrowUp' });
  fireEvent.keyDown(tabs()[0], { key: 'ArrowUp' });
  expect(selected()).toBe(features.length - 1); // wraps
  expect(tabs()[0]).toHaveAttribute('tabindex', '-1');
  expect(tabs()[features.length - 1]).toHaveAttribute('tabindex', '0');
});
